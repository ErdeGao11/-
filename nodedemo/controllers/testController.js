class TestController{
    actionIndex(){
        return async(ctx,next)=>{
           ctx.body= {data:'我爱我家！'}
        }
    }
}
module.exports = TestController;