import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://art-gallery-a5d15-default-rtdb.firebaseio.com/',
});

export default instance