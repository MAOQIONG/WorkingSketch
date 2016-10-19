/**
 * Created by Administrator on 2016/10/19 0019.
 */
(function(){
    $(".card").click(function(){
        var faceA=$(this).find(".a");
        var faceB=$(this).find(".b");
        var selfCard=this;
        //当前卡片在反转的时候 为防止不冲突
        if(selfCard.animating){
            return;
        }
        if(!selfCard.bVisible){
            selfCard.animating=true;

            faceA.animate({width:"0"},"slow",function(){
                faceA.hide();
                faceB.show();
                selfCard.bVisible=true;
                faceB.css("width","0");
                faceB.animate({width:"100%"},"slow",function(){
                    selfCard.animating=false;
                });
            });
        }else{
            selfCard.animating=true;
            faceB.animate({width:"0"},"slow",function(){
                faceA.show();
                faceB.hide();
                selfCard=false;
                faceA.css("width","0");
                faceA.animate({width:"100%"},"slow",function(){
                    selfCard.animating=false;
                });
            });
        }
    });
})();

