const {join}=require("path");
const _=require('lodash'); 
//是一个一致性、模块化、高性能的 JavaScript 实用工具库
let config={
    "viewDir":join(__dirname,"..","views"),
    "staticDir":join(__dirname,"..","assets")
}
if(process.env.NODE_ENV == "development"){
    const localConfig={
        baseURL:"http://localhost/books/basic/web/index.php?r=", 
        port:3000,
        cacheset:false
    }
    //别名：.extend _.assignIn(object, [sources])便利并且返回一个新的
    config=_.extend(config,localConfig);
}
if(process.env.NODE_ENV == "production"){
    const pordConfig={
        port:3000,
        cacheset:'memory'
    }
    config=_.assignIn(config,pordConfig);
}
module.exports=config;