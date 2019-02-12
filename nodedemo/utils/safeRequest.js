const fetch=require('node-fetch');
const config=require('../config');

class SafeRequest{
    constructor(url){
        this.url=url;
        this.baseURL=config.baseURL;
    }
    fetch(options){
        //fetch必须接受一个参数——资源的路径。
        let dc=this.baseURL+this.url;
        let ydfetch = fetch(this.baseURL+this.url);
        if(options.params){
            ydfetch = fetch(this.baseURL+this.url,{
                method:options.method,
                body:options.params
            });
        }
        return new Promise((resolve,reject)=>{
            let result = {
                code:0,
                message:"",
                data:[]
            };
            ydfetch
            .then(res=>res.json())
            .then((json)=>{
                result.data = json;
                resolve(result);
            }).catch((error)=>{
                result.code = 1;
                result.message = "node-fetch和后端通讯异常"+dc;
                reject(result);
                
            })
        })
    }
}
module.exports= SafeRequest;