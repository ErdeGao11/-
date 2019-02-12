const errorHandler={
    error(app,logger){
        app.use(async(ctx,next)=>{
            try{
                await next();
            }catch(error){
                ctx.status=500;
                ctx.body='error';
                logger.error(error);
            }
        })
        app.use(async(ctx,next)=>{
            await next();
            if(404 !=ctx.status){
                return
            }
            //但是返回404会被百度降权！
            ctx.status=200;//所以还是让他等于200
            ctx.body='<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
        })
    }
}
module.exports=errorHandler;