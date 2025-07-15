import multer from "multer";
import { v4 } from "uuid";

import { extname, resolve } from 'node:path';

export default {
    Storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (request, File, callback) => 
            callback(null, v4() + extname(File.originalname)),
    }),
};

