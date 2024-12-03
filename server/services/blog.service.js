const Blog = require("../models/Blog.js");
const config = require("../configs/app");
const fs = require("fs/promises");
const { createUploader } = require("../helpers/uploader.helper.js");
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
            data.blog_image = req.files?.blog_image?.[0]?.path || null;
            data.attachment = req.files?.attachment?.[0]?.path || null;
            const obj = new Blog(data);
            const inserted = await obj.save();
            resolve(inserted);
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

          const handleFileUpdate = async (fieldName) => {
            if (req.files[fieldName]) {
              if (obj[fieldName]) {
                try {
                  await fs.unlink(obj[fieldName]);
                } catch (error) {
                  if (error.code !== "ENOENT") {
                    throw error;
                  }
                }
              }
              data[fieldName] = req.files[fieldName][0]?.path || null;
            }
          };

          const fieldsToUpdate = ["blog_image", "attachment"];

          await Promise.all(
            fieldsToUpdate.map((field) => handleFileUpdate(field))
          );
          await Blog.updateOne({ _id: req.params.id }, data, {
            runValidators: true,
            new: true,
          });

          resolve(Object.assign(obj, data));
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

      const deleteFile = async (filePath) => {
        if (filePath) {
          try {
            await fs.unlink(filePath);
          } catch (error) {
            if (error.code !== "ENOENT") {
              throw error;
            }
          }
        }
      };

      const filesToDelete = [obj?.blog_image, obj?.attachment];

      await Promise.all(filesToDelete.map((path) => deleteFile(path)));
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
