const { ensureDirectoryExistence } = require("./checkdir.helper");
const config = require("../configs/app");
const multer = require("multer");

const method = {
    createUploader(destination) {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const uploadDir = destination;
                ensureDirectoryExistence(uploadDir);
                cb(null, uploadDir);
            },
            filename: (req, file, cb) => {
                const uniqueSuffix = Math.round(Math.random() * 1E9) + '-' + Date.now()
                cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split("/")[1]);
            },
        });

        const upload = multer({
            storage: storage,
            limits: {
                fileSize: 2 * 1024 * 1024,
                fieldSize: 25 * 1024 * 1024,
            },
        });

        return upload;
    },
};

module.exports = { ...method };
