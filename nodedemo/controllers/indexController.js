const Index=require("../models/Index");
const {
    URLSearchParams
} = require("url");
class IndexController{
    constructor(){}
    actionIndex() {
        return async (ctx, next) => {
            // ctx.body = 'hello'
            const index = new Index();
            const result = await index.getData();
            console.log(result.data);
            //SSR
            ctx.body = await ctx.render("index", {
                data: result.data
            });
        };
    }
    actionAdd() {
        return async (ctx, next) => {
            ctx.body = await ctx.render("add");
        };
    }
    actionSave() {
        return async (ctx, next) => {
            const index = new Index();
            const params = new URLSearchParams();
            params.append("Library[name]", "测试");
            params.append("Library[author]", "测试111");
            params.append("Library[type]", "测试111");
            const result = await index.saveData({
                params
            });
            console.log(result);
            ctx.body = result;
        };
    }
}
module.exports = IndexController;