/**
 * Created by liuyujing on 16/10/14.
 */
(function () {
    //banner轮播
    var datas = [{imagePath:"images/web-101-101-1.png",toUrl:"#"},{imagePath:"images/web-101-101-2.jpg",toUrl:"#"},{imagePath:"images/web-101-101-3.jpg",toUrl:"#"},{imagePath:"images/web-101-101-4.jpg",toUrl:"#"},{imagePath:"images/web-101-101-5.jpg",toUrl:"#"},{imagePath:"images/web-101-101-6.png",toUrl:"#"}];

    var view1 = document.getElementById("view1");
    var carouselView = new corouselView.Init(view1,datas);
    carouselView.putSuperView();
    carouselView.startTimer(3000);

//    侧边栏
//     var li=$("#a1");
//     var show_one=$("#show_one");
//
//     li.mouseenter(function(){
//         // li.eq(1).addClass("one");
//         show_one.addClass("one");
//     }).mouseleave(function(){
//         show_one.removeClass("one");
//     })

    var one=$("#one");
    var show1=$("#show_1");

    one.mouseenter(function(){
        show1.addClass("s1");
    }).mouseleave(function(){
        show.removeClass("s1");
    })
})();
