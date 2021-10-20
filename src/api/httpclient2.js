import axios from 'axios'
// const baseUrl = process.env.REACT_APP_API_BASE_URL_2
const baseUrl = 'http://127.0.0.1:8000'
// const baseUrl = 'http://172.104.172.200:8000';
const httpClient = axios.create({
    baseURL: baseUrl,
    timeout: 40000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }
});
const requestInterceptor = config =>  {
    for (const key in config.params) {
        if (`${config.params[key]}`.trim() === '' || config.params[key] == null || `${config.params[key]}`.trim() === '[]') {
            delete config.params[key];
        }else{
            config.params[key] = `${config.params[key]}`.trim()
        }
    }
    const token = localStorage.getItem("token");
    if(token !== null) {
        config.headers.Authorization =  'token ' + JSON.parse(token)["access_token"];
    }
    return config;
  }
  httpClient.interceptors.request.use(requestInterceptor);
export {httpClient, baseUrl};