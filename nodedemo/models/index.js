/**
 * @fileoverview 实现index数据模型
 * @author gaoyijian
 */
const SafeRequest=require('../utils/safeRequest.js')
/**
 * index类，获取后台关于图书馆相关内容
 * @class
*/
class index{
    /**
     * @constructor
     * @param {string} app koa执行上下文
     */
    constructor(app){}
    /**
     * 获取后台全部图书数据方法
     * @param {*} options 配置项
     * @example
     * return new Promise
     * getData(options)
     */
    getData(){
        const safeRequest = new SafeRequest("library/index");
        return safeRequest.fetch({});
    }
    /**
     * 把用户传过来的书名全部传入到PHP的接口
     * @param {*} options 参数项
     * @example
     * return new Promise
     * saveData(options)
     */
    saveData(options){
        const safeRequest = new SafeRequest("library/create");
        console.log(options.params)
        return safeRequest.fetch({
            method:"POST",
            params:options.params,
        });
    }
}
module.exports =index;