/**
 * Created by Administrator on 2016/10/31 0031.
 */

(function(){
    //排行榜
    var list_items = $(".s_right_c ul li ");
    var list_dl = $(".s_right_c ul li dl");
    list_items.mouseenter(function(){
        list_dl.css("display","none");
        $(this).find("dl").css("display","block");
    });



    var list;
    var index=0;
    var timer;
    //    图片数组
    function images(imgPath,toUrl){
        var backgroundImage=document.createElement("a");
        backgroundImage.href=toUrl;
        var image=document.createElement("img");
        image.src=imgPath;
        backgroundImage.appendChild(image);
        backgroundImage.className="imageView";
        return backgroundImage;
    }
    //    承载数组的容器
    function imageBoxList(){
        var boxInList=[{imgPath:"images/web-601-197-1-1.jpg",toUrl:"#"},
            {imgPath:"images/web-601-197-1-2.png",toUrl:"#"},
            {imgPath:"images/web-601-197-1-3.jpg",toUrl:"#"},
            {imgPath:"images/web-601-197-1-4.jpg",toUrl:"#"}];
        if(!list){
            list=[];
            for(var i=0;i<boxInList.length;i++){
                var item=images(boxInList[i].imgPath,boxInList[i].toUrl);
                list.push(item);
            }
        }
        return list;
    }
    //    初始状态
    function showImage(){
        var item=imageBoxList()[index];
        var content=document.getElementById("content");
        content.appendChild(item);
        var nextButton=document.getElementById("nextButton");
        nextButton.onclick=function(){
            next();
        };
        var preButton=document.getElementById("preButton");
        preButton.onclick=function(){
            pre();
        }
    }
    //    下一页
    function next(){
        index++;
        if(index===imageBoxList().length){
            index = 0;
        }
        var preItem=document.getElementsByClassName("imageView")[0];
        var content=document.getElementById("content");
        content.removeChild(preItem);
        content.appendChild(imageBoxList()[index]);
        updateChooses();
    }
    //    上一页
    function pre(){
        index--;
        if(index===-1){
            index=imageBoxList().length-1;
        }
        var preItem=document.getElementsByClassName("imageView")[0];
        var content=document.getElementById("content");
        content.removeChild(preItem);
        content.appendChild(imageBoxList()[index]);
        updateChooses();
    }
    function updateChooses(){
        var a = document.getElementById("selected");
        a.id = "";
        document.getElementsByClassName("choosers")[index].id="selected";
        for(var i=0;i<imageBoxList().length;i++){
            document.getElementsByClassName("choosers")[i].style.background = "#fff";
        }
        document.getElementById("selected").style.background = "#a2a2a2";
    }
    //定时器
    function startTimer(){
        if(timer){
            clearInterval(timer);
        }
        timer=setInterval(next,2000);
    }
    function init(){
        showImage();
        startTimer();
    }
    init();






})();
