
var t = new Trianglify();
recolor(t,1);
window.onload=function(){
  document.getElementById("load").style.display="none";
  //
  var swiper = new Swiper('.swiper-container', {
    keyboardControl: true,
    mousewheelControl: true,
    direction: 'vertical',
    touchRatio : 1.2,
    paginationType : 'progress',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
      swiperAnimateCache(swiper); //隐藏动画元素
      swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    },
  });
  var swiper2=new Swiper('.swiper-container2',{
    direction : 'horizontal',
    slidesPerView:"auto",
    centeredSlides:!0,
    spaceBetween:10,
  });
  $(".cloth-box").click(
    function(){
      var t = new Trianglify();
      recolor(t,0);
    }
  )
  $(".arrow-box").click(
    function(){
      swiper.slideNext();
    }
  )
}
function recolor(t,x) {
    if (x==1) t.options.x_gradient=["#f1eef6", "#bdc9e1", "#74a9cf", "#0570b0"];
    else t.options.x_gradient =Trianglify.randomColor();
    t.options.y_gradient = t.options.x_gradient.map(function(c){return d3.rgb(c).brighter(0.8);});
    var pattern = t.generate(Math.max(document.body.clientWidth,640), height());
    document.body.setAttribute('style', 'background: '+pattern.dataUrl+"center no-repeat");
}
function height() {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
}
