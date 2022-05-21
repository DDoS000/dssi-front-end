import { instance_Registry as api } from "./api";

class RegistryService {
    upload(file, onUploadProgress) {
        let formData = new FormData();
        formData.append("file", file);
        return api.post("/api/v1/registry/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getFiles() {
        return fileapi.get("/files");
    }

    fetchRegistry() {
        return api.get("/api/v1/registrys")
    }

    executeCMD(PJ_UUID) {
        return api.post("/api/v1/registrys/executeCMD")
    }
}

export default new RegistryService();