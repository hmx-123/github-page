import axios from "axios"

// 实例
const githubIns = axios.create({
    baseURL:"http://api.github.com",
    timeout:5000
})

// 请求拦截
githubIns.interceptors.request.use(function(config){
    return config;
})
// 响应拦截
githubIns.interceptors.response.use(function(response){
    return response.data;
},function(error){
    return Promise.reject(error);
});


export default githubIns;