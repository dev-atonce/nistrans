const fs = require("fs/promises");
const path = require("path");
const config = require("../configs/app");
const { ensureDirectoryExistence } = require("./checkdir.helper");

const method = {
  getFullUrl(relativePath) {
    const baseUrl = config.baseUrl || "https://snc-portal.th.nissin-asia.com";
    const cleanPath = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
    return `${baseUrl}${cleanPath}`;
  },
  async processBase64Images(htmlContent, uploadDir) {
    if (!htmlContent || typeof htmlContent !== "string") {
      return htmlContent;
    }

    ensureDirectoryExistence(uploadDir);

    // Regex to find base64 images in img src
    const base64Regex = /<img[^>]+src=["'](data:image\/([^;]+);base64,([^"']+))["'][^>]*>/gi;
    const matches = [...htmlContent.matchAll(base64Regex)];

    if (matches.length === 0) {
      return htmlContent;
    }

    let processedContent = htmlContent;

    for (const match of matches) {
      const fullMatch = match[0];
      const dataUri = match[1];
      const imageType = match[2] || "png";
      const base64Data = match[3];

      try {
        // Generate unique filename
        const uniqueSuffix = Math.round(Math.random() * 1E9) + "-" + Date.now();
        const filename = `detail-image-${uniqueSuffix}.${imageType}`;
        const filePath = path.join(uploadDir, filename);

        // Convert base64 to buffer and save
        const imageBuffer = Buffer.from(base64Data, "base64");
        await fs.writeFile(filePath, imageBuffer);

        // Replace base64 src with full URL
        const relativePath = path.relative("./public", filePath).replace(/\\/g, "/");
        const urlPath = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
        const fullUrl = method.getFullUrl(urlPath);
        const newImgTag = fullMatch.replace(
          dataUri,
          fullUrl
        );

        processedContent = processedContent.replace(fullMatch, newImgTag);
      } catch (error) {
        console.error("Error processing base64 image:", error);
        // Continue with other images even if one fails
      }
    }

    return processedContent;
  },

  async extractAndDeleteOldImages(htmlContent, uploadDir) {
    if (!htmlContent || typeof htmlContent !== "string") {
      return [];
    }

    // Extract image paths from img src
    const imgSrcRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    const matches = [...htmlContent.matchAll(imgSrcRegex)];
    const imagePaths = [];

    for (const match of matches) {
      const src = match[1];
      // Check if it's a local file path (contains /blog/)
      if (src.includes("/blog/")) {
        let filePath;
        // Handle full URL
        if (src.startsWith("http://") || src.startsWith("https://")) {
          try {
            const urlObj = new URL(src);
            filePath = path.join("./public", urlObj.pathname);
          } catch (e) {
            continue;
          }
        } else if (src.startsWith("/")) {
          // Handle relative path
          filePath = path.join("./public", src);
        } else {
          filePath = path.join("./public", src.replace(/^\//, ""));
        }
        imagePaths.push(filePath);
      }
    }

    return imagePaths;
  },
};

module.exports = { ...method };

