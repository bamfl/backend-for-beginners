import { v4 as uuidv4 } from "uuid";
import path from "node:path";

class FileService {
  saveImage(image) {
    try {
      const fileName = `image-${uuidv4()}.${image.mimetype.split("/")[1]}`;
      const filePath = path.resolve("public", "images", fileName);

      image.mv(filePath);

      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FileService();
