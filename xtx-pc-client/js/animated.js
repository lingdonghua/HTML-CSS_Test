function move(obj,targe,callback){
    //清除之前的定时器，放在多个定时器同时运行造成bug；
     clearInterval(obj.timer);
    obj.timer=window.setInterval(function(){
    var step=(targe-obj.offsetLeft)/10;
    // 判断正负值，若是正向上取整，若是负，向下取整
    step=step>0? Math.ceil(step):Math.floor(step);
    obj.style.left=obj.offsetLeft+step+'px';
    if(obj.offsetLeft==targe){
        clearInterval(obj.timer);
        //调用回调函数，在定时器结束的时候
        if(callback){
            callback()
        }
    }
    },15);
}