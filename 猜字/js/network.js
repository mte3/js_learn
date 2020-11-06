//网络请求
function request(config) {
    const instance = axios.create({
        baseURL:'http://8.129.111.60/knowledge/servlet',
        // baseURL:'http://123.207.32.32:8000/api/h8/',
        timeout: 5000,
        changeOrigin:true, //允许跨域
    })
    return instance(config)
}

