const Logo = require("../models/Logo.js");
const config = require("../configs/app");
const fs = require("fs/promises");
const multer = require("multer");
const { createUploader } = require("../helpers/uploader.helper.js");

const { ErrorBadRequest, ErrorNotFound } = require("../configs/errorMethods");

const methods = {
  async findAll() {
    try {
      const rows = await Logo.find();
      return rows;
    } catch (error) {
      return Promise.reject(ErrorNotFound(error.message));
    }
  },

  async update(req, res) {
    return new Promise((resolve, reject) => {
      const uploader = createUploader("./public/image/logo");
      uploader.single("image")(req, res, async (err) => {
        if (err) {
          return reject(ErrorBadRequest(err));
        } else {
          try {
            const data = req.body;
            const obj = await Logo.findById(req.params.id);
            if (!obj) return reject(ErrorNotFound("id: not found"));
            if (req.file) {
              if (obj?.image) {
                try {
                  await fs.unlink(obj.image);
                } catch (error) {
                  if (error.code !== "ENOENT") {
                    throw error;
                  }
                }
              }
              data.image = req.file?.path;
            }
            await Logo.updateOne({ _id: req.params.id }, data, {
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

  async delete(type) {
    try {
      const obj = await Logo.findOneAndDelete({ type: type }).exec();
      if (obj?.image) {
        try {
          await fs.unlink(obj.image);
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
