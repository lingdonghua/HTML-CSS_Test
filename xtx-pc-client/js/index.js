window.onload=function(){
    var banner=document.querySelector(".banner");
    var ul=banner.children[0];
    var lis =ul.children[0];
    var prev=banner.querySelector(".prev");
    var next=banner.querySelector(".next");
    var ol=banner.querySelector("ol");
	var timer1;
	timer1=setInterval(function(){
     next.click();
        },2000)
    //鼠标经过，显示按钮
    ul.addEventListener('mouseover',function(){
        prev.style.display='block';
        next.style.display='block';
        clearInterval(timer1);
        timer1=null;
    })
    ul.addEventListener('mouseleave',function(){
        prev.style.display='none';
        next.style.display='none';
        timer1=setInterval(function(){
            next.click();
        },2000)
    })
    prev.addEventListener('mouseenter',function(){
        prev.style.display='block';
        next.style.display='block';
    })
    prev.addEventListener('mouseleave',function(){
        prev.style.display='none';
        next.style.display='none';
    })
    next.addEventListener('mouseenter',function(){
        prev.style.display='block';
        next.style.display='block';
    })
    next.addEventListener('mouseleave',function(){
        prev.style.display='none';
        next.style.display='none';
    })
    //小圆圈，自动生成
    var index=0;
    for(var i=0;i<ul.children.length;i++){
        var li =document.createElement("li");
        li.setAttribute('index',index);
        index++;
        ol.appendChild(li);
    }
    ol.children[0].className='current';
    //按下圆点，移动对应的照片
    for(var i=0;i<ol.children.length;i++){
        ol.children[i].addEventListener('click',function(){
            for(var j=0;j<ol.children.length;j++){
                ol.children[j].className='';
            }
           this.className='current';
           var i= this.getAttribute('index');
           num=i;
           circle=i;
           console.log(i);
           move(ul,-i*lis.offsetWidth);
        })
    }
    //绑定按钮和小圆圈
    var circle=0;
    //按下按钮，播放轮播图
    var fist=lis.cloneNode(true);
    ul.appendChild(fist);
     var num=0;
     next.addEventListener('click',function(){
        if(num>=ul.children.length-1){
            ul.style.left=0;
            num=0;
        }
        num++;
        move(ul,-num*lis.offsetWidth);
        circle++;
        if(circle==ol.children.length){
            circle=0;
        }
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].className='';
        }
        ol.children[circle].className='current'

     })
     prev.addEventListener('click',function(){
        if(num<=0){
            ul.style.left=ul.children.length*-li.offsetWidth+'px';
            num=ul.children.length-1;
        }
        num--;
        move(ul,-num*lis.offsetWidth);
        circle--;
        if(circle<0){
            circle=ol.children.length-1;
        }
        for(var j=0;j<ol.children.length;j++){
            ol.children[j].className='';
        }
        ol.children[circle].className='current'
1
     })

     //自动播放
}




