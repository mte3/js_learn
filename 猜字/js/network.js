//网络请求

function request(config) {
    const instance = axios.create({
        baseURL: 'http://8.129.111.60/knowledge/servlet',
        timeout: 5000,
        productionTip:false
    })
    return instance(config)
}

