const Blog = require("../models/Blog.js");
const config = require("../configs/app");
const fs = require("fs/promises");
const path = require("path");
const { createUploader } = require("../helpers/uploader.helper.js");
const { processBase64Images, extractAndDeleteOldImages, getFullUrl } = require("../helpers/image.helper.js");
const { ensureDirectoryExistence } = require("../helpers/checkdir.helper.js");
const { ErrorBadRequest, ErrorNotFound } = require("../configs/errorMethods");

const methods = {
  scopeSearch(req) {
    $and = [];
    if (req.query.keyword)
      $and.push({ job_position: { $regex: req.query.keyword } });
    const query = $and.length > 0 ? { $and } : {};
    return { query: query };
  },

  async find(req) {
    try {
      const limit = req.query.limit || +config.pageLimit;
      const offset = +(limit * ((req.query.page || 1) - 1));
      const _q = methods.scopeSearch(req);
      _q.query.status = true;
      _q.query.type = req.query.type;

      const rows = await Blog.find(_q.query)
        .select(
          "createdAt updatedAt blog_image attachment blog_title_th blog_title_en blog_title_jp blog_description_th blog_descrition_en blog_description_jp type location slug status sort"
        )
        .sort({ createdAt: "desc" })
        .limit(limit)
        .skip(offset);
      const count = await Blog.countDocuments(_q.query);

      return {
        total: count,
        lastPage: Math.ceil(count / limit),
        currPage: +req.query.page || 1,
        rows: rows,
      };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async findAll(req) {
    try {
      const limit = +config.pageLimit;
      const offset = +(limit * ((req.query.page || 1) - 1));
      const _q = methods.scopeSearch(req);
      _q.query.type = req.query.type;

      const rows = await Blog.find(_q.query)
        .select(
          "createdAt updatedAt blog_image attachment blog_title_th blog_title_en blog_title_jp blog_description_th blog_descrition_en blog_description_jp type location slug status sort"
        )
        .sort({ createdAt: "desc" })
        .limit(limit)
        .skip(offset);
      const count = await Blog.countDocuments(_q.query);

      return {
        total: count,
        lastPage: Math.ceil(count / limit),
        currPage: +req.query.page || 1,
        rows: rows,
      };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async findById(id) {
    try {
      const obj = await Blog.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      return obj;
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async findBySlug(req) {
    try {
      const obj = await Blog.find({ slug: req?.params?.slug });
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      return obj;
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async insert(req, res) {
    return new Promise((resolve, reject) => {
      createUploader("./public/blog/").fields([
        { name: "blog_image", maxCount: 1 },
        { name: "attachment", maxCount: 1 },
      ])(req, res, async (err) => {
        if (err) {
          return reject(ErrorBadRequest(err));
        } else {
          try {
            const data = req.body;
            const tempFiles = {
              blog_image: req.files?.blog_image?.[0]?.path || null,
              attachment: req.files?.attachment?.[0]?.path || null,
            };

            // Save blog first to get id
            const obj = new Blog(data);
            const inserted = await obj.save();
            const blogId = inserted._id.toString();

            // Create blog folder with id
            const blogFolder = `./public/blog/${blogId}`;
            ensureDirectoryExistence(blogFolder);

            // Move files to blog id folder
            const moveFile = async (filePath, fieldName) => {
              if (filePath) {
                const fileName = path.basename(filePath);
                const newPath = path.join(blogFolder, fileName);
                await fs.rename(filePath, newPath);
                const relativePath = path.relative("./public", newPath).replace(/\\/g, "/");
                const cleanPath = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
                // Return relative path
                return cleanPath;
              }
              return null;
            };

            data.blog_image = await moveFile(tempFiles.blog_image, "blog_image");
            data.attachment = await moveFile(tempFiles.attachment, "attachment");

            // Process base64 images in detail fields
            const detailFields = ["blog_detail_th", "blog_detail_en", "blog_detail_jp"];
            for (const field of detailFields) {
              if (data[field]) {
                data[field] = await processBase64Images(data[field], blogFolder);
              }
            }

            // Update with correct paths
            await Blog.updateOne({ _id: blogId }, data);
            const updated = await Blog.findById(blogId);
            resolve(updated);
          } catch (error) {
            reject(ErrorBadRequest(error.message));
          }
        }
      });
    });
  },

  async update(req, res) {
    return new Promise((resolve, reject) => {
      createUploader("./public/blog/").fields([
        { name: "blog_image", maxCount: 1 },
        { name: "attachment", maxCount: 1 },
      ])(req, res, async (err) => {
        if (err) {
          return reject(ErrorBadRequest(err));
        }
        try {
          const data = req.body;
          const obj = await Blog.findById(req.params.id);
          if (!obj) return reject(ErrorNotFound("id: not found"));

          const blogId = req.params.id;
          const blogFolder = `./public/blog/${blogId}`;
          ensureDirectoryExistence(blogFolder);

          const handleFileUpdate = async (fieldName) => {
            if (req.files[fieldName]) {
              // Delete old file
              if (obj[fieldName]) {
                try {
                  let oldFilePath;
                  // Handle full URL or relative path
                  if (obj[fieldName].startsWith("http://") || obj[fieldName].startsWith("https://")) {
                    try {
                      const urlObj = new URL(obj[fieldName]);
                      oldFilePath = path.join("./public", urlObj.pathname);
                    } catch (e) {
                      oldFilePath = null;
                    }
                  } else {
                    oldFilePath = obj[fieldName].startsWith("/")
                      ? path.join("./public", obj[fieldName])
                      : path.join("./public", obj[fieldName].replace(/^\//, ""));
                  }
                  if (oldFilePath) {
                    await fs.unlink(oldFilePath);
                  }
                } catch (error) {
                  if (error.code !== "ENOENT") {
                    throw error;
                  }
                }
              }
              // Move new file to blog id folder
              const fileName = path.basename(req.files[fieldName][0].path);
              const newPath = path.join(blogFolder, fileName);
              await fs.rename(req.files[fieldName][0].path, newPath);
              const relativePath = path.relative("./public", newPath).replace(/\\/g, "/");
              const cleanPath = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
              // Return relative path
              data[fieldName] = cleanPath;
            }
          };

          const fieldsToUpdate = ["blog_image", "attachment"];

          await Promise.all(
            fieldsToUpdate.map((field) => handleFileUpdate(field))
          );

          // Process base64 images in detail fields and delete old images
          const detailFields = ["blog_detail_th", "blog_detail_en", "blog_detail_jp"];
          for (const field of detailFields) {
            if (data[field] !== undefined) {
              // Extract and delete old images from previous content
              if (obj[field]) {
                const oldImagePaths = await extractAndDeleteOldImages(obj[field], blogFolder);
                for (const imagePath of oldImagePaths) {
                  try {
                    const fullPath = imagePath.startsWith("/")
                      ? path.join("./public", imagePath)
                      : path.join("./public", imagePath.replace(/^\//, ""));
                    await fs.unlink(fullPath);
                  } catch (error) {
                    if (error.code !== "ENOENT") {
                      console.error(`Error deleting old image ${imagePath}:`, error);
                    }
                  }
                }
              }
              // Process new base64 images
              data[field] = await processBase64Images(data[field], blogFolder);
            }
          }

          await Blog.updateOne({ _id: req.params.id }, data, {
            runValidators: true,
            new: true,
          });

          const updated = await Blog.findById(req.params.id);
          resolve(updated);
        } catch (error) {
          reject(ErrorBadRequest(error.message));
        }
      });
    });
  },

  async delete(id) {
    try {
      const obj = await Blog.findOneAndDelete({ _id: id }).exec();
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));

      // Delete entire blog folder
      const blogFolder = `./public/blog/${id}`;
      try {
        await fs.rm(blogFolder, { recursive: true, force: true });
      } catch (error) {
        if (error.code !== "ENOENT") {
          console.error(`Error deleting blog folder ${blogFolder}:`, error);
        }
      }

      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
