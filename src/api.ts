import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

export const api = {
    isAuth: async () => {
        let response = await axiosInstance.get('/auth')
        return response.data;
    },
    getPong: async () => {
        let response = await axiosInstance.get('/ping')
        return response.data;
    }, 
//     addNewPost: async (title: string, body: string, userId: number) => {
//         let response = axiosInstance.post('/posts', {
//             title, body, userId
//         });
//         return (await response).data;
//         /*
//         let response = await fetch(`${BASE}/posts`, {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     title, body, userId
//                 }),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             let json = await response.json();
//             return json;
//             */
    // }
}