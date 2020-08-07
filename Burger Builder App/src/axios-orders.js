import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-fbf94.firebaseio.com/'
});

export default instance;