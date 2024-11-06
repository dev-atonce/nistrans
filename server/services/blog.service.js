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
      const limit = +config.pageLimit;
      const offset = +(limit * ((req.query.page || 1) - 1));
      const _q = methods.scopeSearch(req);
      _q.query.status = true;

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

  async findHome(req) {
    try {
      const limit = req?.params?.limit;
      const offset = +(limit * ((req.query.page || 1) - 1));
      const _q = methods.scopeSearch(req);
      _q.query.status = true;

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
      const uploader = createUploader("./public/image/blog");
      uploader.single("blog_image")(req, res, async (err) => {
        if (err) {
          return reject(ErrorBadRequest(err));
        } else {
          try {
            const data = req.body;
            data.blog_image = req.file?.path;
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
      const uploader = createUploader("./public/image/blog");
      uploader.single("blog_image")(req, res, async (err) => {
        if (err) {
          return reject(ErrorBadRequest(err));
        } else {
          try {
            const data = req.body;
            const obj = await Blog.findById(req.params.id);
            if (!obj) return reject(ErrorNotFound("id: not found"));
            if (req.file) {
              if (obj?.blog_image) {
                try {
                  await fs.unlink(obj.blog_image);
                } catch (error) {
                  if (error.code !== "ENOENT") {
                    throw error;
                  }
                }
              }
              data.blog_image = req.file?.path;
            }
            await Blog.updateOne({ _id: req.params.id }, data, {
              runValidators: true,
              new: true,
            });
            resolve(Object.assign(obj, data));
          } catch (error) {
            reject(ErrorBadRequest(error.message));
          }
        }
      });
    });
  },

  async delete(id) {
    try {
      const obj = await Blog.findOneAndDelete({ _id: id }).exec();
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      if (obj?.blog_image) {
        try {
          await fs.unlink(obj.blog_image);
        } catch (error) {
          if (error.code !== "ENOENT") {
            throw error;
          }
        }
      }
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
