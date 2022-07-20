import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://art-gallery-a5d15-default-rtdb.firebaseio.com/',
    // timeout: 3000
});

// instance.interceptors.request.use(function(config) {
//     // console.log(config);
//     return config;
// })
// instance.interceptors.response.use(function(res) {
//     // console.log(res);
//     return res;
// }, function(err) {
//     console.log(err);
//     return Promise.reject(err);
// })

export default instance