function yd() {}
yd._version = 0.1;
yd.throttle = function (fn, wait) {
    var timer;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => timer = null, wait);
            return fn.apply(this, args);
        }
    }
}
xtag.register('x-nav', {
    content:'<div class="navigation"><div class="container"><a href="/">新闻列表</a><a href="/add">添加新闻</a></div></div>',
    lifecycle:{//生命周期
        created: function(){
            alert('I fire when an ‹x-nav› is CREATED');
        },
    },
    methods: {
      shout: function(message){
        alert(message);
      }
    }
  });