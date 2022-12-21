import axios from "axios";

class PhotoService {
    static getPhotosByAlbumId(albumId) {
        return axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    }
   
}

export default PhotoService;
