import axios from "axios";

class AlbumService {
    static getAlbums() {
        return axios.get('https://jsonplaceholder.typicode.com/albums');
    }
    // static getPost(postId) {
    //     return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    // }
}

export default AlbumService;