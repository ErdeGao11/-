
const router = require('koa-simple-router');//路由模块，
const IndexController=require('./indexController');
const TestController=require('./testController');
const indexController=new IndexController();
const testController=new TestController();
//路由中心
module.exports =(app)=>{
    app.use(router(_=>{
        _.get('/',indexController.actionIndex());
        _.get('/add',indexController.actionAdd());
        _.get('/save',indexController.actionSave());
        _.get('/test',testController.actionIndex());
    }))
}