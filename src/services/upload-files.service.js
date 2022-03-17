import { fileapi } from "./api";

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();
        formData.append("file", file);
        return fileapi.post("/v1/registry/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getFiles() {
        return fileapi.get("/files");
    }
}

export default new UploadFilesService();