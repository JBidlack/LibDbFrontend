// import axios from "axios";

// const Instance = axios.create({
//     baseURL: 'http://localhost:8080/api'
// });

// Instance.interceptors.request.use(
//     (config) => {
//         const sessionCode = localStorage.getItem('sessionCode');

//         if(sessionCode){
//             config.headers['Authorization'] = 'Bearer ${sessionCode}';
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// Instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if(error.response) {
//             if(error.response.status === 401){
//                 localStorage.removeItem('sessionCode');
//                 window.location.href = '/login';
//             }
//         }
//         return Promise.reject(error);
//     }
// );

// export default Instance;

