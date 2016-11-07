//首页焦点广告图切换
var index_global=0;
(function($) {

//首页标准模块中间多图广告鼠标触及凸显
    $.fn.jfade = function(settings) {
        var defaults = {
            timing: "500",
            start_opacity: "1",
            high_opacity: "1",
            low_opacity: "0.8"
        };
        var settings = $.extend(defaults, settings);
        settings.element = $(this);
        //set opacity to start

        $(settings.element).css("opacity",settings.start_opacity);
        //mouse over
        $(settings.element).hover(
            //mouse in
            function() {
                $(this).stop().animate({
                        opacity: settings.start_opacity
                    },
                    settings.timing); //100% opacity for hovered object

                $(this).find(".goods-thumb").stop().animate({
                    marginTop:"-4px"
                },settings.timing);

                $(this).siblings().stop().animate({
                        opacity:settings.low_opacity
                    },
                    settings.timing); //dimmed opacity for other objects
            },
            //mouse out
            function() {
                $(this).stop().animate({
                        opacity: settings.start_opacity
                    },
                    settings.timing); //return hovered object to start opacity

                $(this).find(".goods-thumb").stop().animate({
                    marginTop:"0px"
                },settings.timing);

                $(this).siblings().stop().animate({
                        opacity: settings.start_opacity
                    },
                    settings.timing); // return other objects to start opacity
            });
        return this;
    }

})(jQuery);


function takeCount() {
    setTimeout("takeCount()", 1000);
    $(".time-remain").each(function(){
        var obj = $(this);
        var tms = obj.attr("count_down");
        if (tms>0) {
            tms = parseInt(tms)-1;
            var days = Math.floor(tms / (1 * 60 * 60 * 24));
            var hours = Math.floor(tms / (1 * 60 * 60)) % 24;
            var minutes = Math.floor(tms / (1 * 60)) % 60;
            var seconds = Math.floor(tms / 1) % 60;

            if (days < 0) days = 0;
            if (hours < 0) hours = 0;
            if (minutes < 0) minutes = 0;
            if (seconds < 0) seconds = 0;
            obj.find("[time_id='d']").html(days);
            obj.find("[time_id='h']").html(hours);
            obj.find("[time_id='m']").html(minutes);
            obj.find("[time_id='s']").html(seconds);
            obj.attr("count_down",tms);
        }
    });
}


//鼠标滑入停止动画滑出继续动画



$(function(){
    setTimeout("takeCount()", 1000);
    //首页Tab标签卡滑门切换
    $(".tabs-nav > li > h3").bind('mouseover', (function(e) {
        if (e.target == this) {
            var tabs = $(this).parent().parent().find("li");
            var panels = $(this).parent().parent().parent().parent().find(".tabs-panel");
            var index = $.inArray(this, $(this).parent().parent().find("h3"));
            if (panels.eq(index)[0]) {
                tabs.removeClass("tabs-selected").eq(index).addClass("tabs-selected");
                panels.addClass("tabs-hide").eq(index).removeClass("tabs-hide");
            }
        }
    }));
    //新首页Tab标签卡滑门切换
    $(".tab-new-nav > li > h3").bind('mouseover', (function(e) {
        if (e.target == this) {
            var tabs = $(this).parent().parent().children("li");
            var panels = $(this).parent().parent().parent().parent().next().children('.middle-layout').children(".tabs-panel");
            var index = $.inArray(this, $(this).parent().parent().find("h3"));
            if (panels.eq(index)[0]) {
                tabs.removeClass("tabs-selected").eq(index).addClass("tabs-selected");
                panels.addClass("tabs-hide").eq(index).removeClass("tabs-hide");
            }
        }
    }));


    $('.foot_tab_nav > li').eq(0).css('border-left','none');
    $(".foot_tab_nav > li > a").bind('mouseover', (function(e) {
        if (e.target == this) {
            var tabs = $(this).parent().parent().find("li");
            var panels = $(this).parent().parent().parent().parent().find(".tabs-panel");
            var index = $.inArray(this, $(this).parent().parent().find("a"));
            if(index==0){$('.foot_tab_nav > li').eq(0).css('border-left','none');}
            if (panels.eq(index)[0]) {
                tabs.removeClass("tabs-selected").eq(index).addClass("tabs-selected");
                panels.addClass("tabs-hide").eq(index).removeClass("tabs-hide");
            }
        }
    }));

    $('.jfocus-trigeminy > ul > li > a').jfade({
        start_opacity: "1",
        high_opacity: "1",
        low_opacity: "1",
        timing: "200"
    });
    $('.index-adv-list > ul > li > a').jfade({
        start_opacity: "1",
        high_opacity: "1",
        low_opacity: "1",
        timing: "200"
    });

    $('.fade-img > a').jfade({
        start_opacity: "1",
        high_opacity: "1",
        low_opacity: "1",
        timing: "500"
    });
    var fig = document.createElement("figcaption");
    $('.fade-img > a').append(fig);

    $('.middle-goods-list > ul > li > dl').jfade({
        start_opacity: "1",
        high_opacity: "1",
        low_opacity: "1",
        timing: "500"
    });
    $('.middle-goods-list2 > ul > li').jfade({
        start_opacity: "1",
        high_opacity: "1",
        low_opacity: "1",
        timing: "500"
    });


    $('.goods-list > ul > li').jfade({
        start_opacity: "1",
        high_opacity: "1",
        low_opacity: "1",
        timing: "500"
    });

    $('.recommend-brand > ul > li > a').jfade({
        start_opacity: "1",
        high_opacity: "1",
        low_opacity: "1",
        timing: "500"
    });

})


//secondary slider

$.fn.imgtransition = function(o){
    var defaults = {
        speed : 5000,
        animate : 1000
    };
    o = $.extend(defaults, o);

    return this.each(function(){
        var arr_e = $(".banner_img li", this);

        var len = arr_e.length;

//            光标
        var btn ='<ul class="banner_btn">';
        for (var i = 0;i<len; i++) {
            btn += "<li></li>";
        }
        btn += "</ul><div class='arr pre'>&lt;</div><div class='arr next'>&gt;</div>";
        $(this).append(btn);
        var buttons =  $(".banner_btn li", this);
        buttons.each(function(){
            $(this).html($(this).index()+1);
            $(this).click(function(){
                var index = $(this).index();
                arr_e.eq(index).css({"z-index": 10}).siblings().css({"z-index": 8})
                buttons.eq(index).css({"background":"red","color":"white"}).siblings().css({"background":"white","color":"red"});
            })
        })


        arr_e.css({position: "absolute"});
        arr_e.parent().css({margin: "0", padding: "0", "list-style": "none", overflow: "hidden"});

        function shownext(){
            var active = arr_e.filter(".active").length ? arr_e.filter(".active") : arr_e.first();
            var next =  active.next().length ? active.next() : arr_e.first();
            active.css({"z-index": 9});
            next.css({opacity: 0.0, "z-index": 10}).addClass('active').animate({opacity: 1.0}, o.animate, function(){
                active.removeClass('active').css({"z-index": 8});
            });
            var num = $(":animated").index();
            showImg(num);
            buttons.eq(num).css({"background":"red","color":"white"}).siblings().css({"background":"white","color":"red"});
        }

        function showpre(){
            var active = arr_e.filter(".active").length ? arr_e.filter(".active") : arr_e.first();
            var NN = active.index();
            var next = (NN==0)?arr_e.eq(len-1):arr_e.eq(NN-1);
            active.css({"z-index": 9});
            next.css({opacity: 0.0, "z-index": 10}).addClass('active').animate({opacity: 1.0}, o.animate, function(){
                active.removeClass('active').css({"z-index": 8});
            });
            showImg(NN-1);
            buttons.eq(NN-1).css({"background":"red","color":"white"}).siblings().css({"background":"white","color":"red"});
        }

//            样式初始化
        arr_e.first().css({"z-index": 9}).addClass('active');
        buttons.eq(0).css({"background":"red","color":"white"}).siblings().css({"background":"white","color":"red"});

        $(this).find(".pre").click(function(){
            if(!arr_e.is(":animated")){
                showpre();
            }
        });
        $(this).find(".next").click(function(){
            if(!arr_e.is(":animated")){
                shownext();
            }
        });

//首页轮播广告链接
        var $rolllist = $(".ad-title a",this);
        $rolllist.each(function(){
            $(this).hover(function(){
                var index = $(this).index();
                arr_e.eq(index).css({"z-index": 10}).addClass('active').siblings().removeClass('active').css({"z-index": 8})
                $rolllist.eq(index).addClass('cur').siblings().removeClass('cur');
            })
        })
        function showImg(index){
            $rolllist.removeClass('cur')
                .eq(index).addClass('cur')
        }

        //滑入 停止动画，滑出开始动画.
        var adTimer = null;
        $(this).hover(function(){
            if(adTimer){
                clearInterval(adTimer);
            };
            $(this).find(".arr").show();

        },function(){
            adTimer= setInterval(function(){
                shownext();
            },o.speed);
            $(this).find(".arr").hide();
        }).trigger("mouseleave");
    });
};

(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:1000,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:3,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);





$(document).ready(function(){
//    二级页面的
    $('.secondary_banner').imgtransition({
        speed:5000,  //图片切换时间
        animate:1000 //图片切换过渡时间
    });

// 主页的
    $('.home-focus-layout .focus_top_banner').imgtransition({
        speed:5000,  //图片切换时间
        animate:1000 //图片切换过渡时间
    });


//推荐小品牌
    $('.floor').each(function(){
        var box_s = $(this).find('.recommend_brand');
        var pre_s = $(this).find('.recommend_next');
        var next_s = $(this).find('.recommend_pre');
        box_s.jCarouselLite({
            auto: 5000,
            speed: 1000,
            scroll: 1,
            vertical: true,
            btnNext: pre_s,
            btnPrev: next_s
        });
    })

//中间广告
    $('.floor').each(function(){
        var box = $(this).find('.goods_show');
        var pre = $(this).find('.goods_show_pre');
        var next = $(this).find('.goods_show_next');
        box.jCarouselLite({
            auto: 5000,
            speed: 1000,
            scroll: 1,
            btnNext: next,
            btnPrev: pre
        });
    })

    $('.focus_top_banner .banner_btn li').each(function(){
        $(this).html('');
    })

    $(".middle-goods-list6 .goods_group4 ul li").each(function(){
        var all_dl= $(".middle-goods-list6 .goods_group4 ul li").find('dl');

            $(this).hover(function(){
                if(!all_dl.is(":animated")) {
                    $(this).find('dl').slideDown();
                    $(this).siblings().find('dl').slideUp();
                }
            })
        $(this).click(function(){
                $(this).find('dl').slideDown();
                $(this).siblings().find('dl').slideUp();
        })

    });

//首页小品牌
    $.fn.showtitle = function(o) {
        var defaults = {
            background:"red",
            old_background:"white"
        };
        o = $.extend(defaults, o);

        return this.each(function(){
            var img = $(this).html();
            $(this).hover(function(){
                $(this).html($(this).attr("title"));
                $(this).css({'background': o.background})
            },function(){
                $(this).html(img);
                $(this).css({'background': o.old_background})
            }).trigger("mouseleave")
        })
    }

    $('.floor').each(function(){
        var show_box = $(this).find('.recommend_show a');
        var Parents = $(this).find('.header-bar li.tabs-selected');
        var bgColor = Parents.css('background-color');
        show_box.showtitle({
            background:bgColor,
            old_background:"white"
        })
    })

});

