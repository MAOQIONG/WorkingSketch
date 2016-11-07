/**
 * Created by lenovo on 2016/6/15.
 */

//已登录购物车不为空时
function cart_show(t){
    $('#siderCart').addClass('b-show');
    $('#siderCart').siblings().removeClass('b-show');
    t.find('.icon-right').fadeIn();
    t.siblings().find('.login-in').removeClass('r-show');
    t.siblings().find('.icon-right').fadeOut();
}
//未登录显示
function login_show(top){
    var h = $('#ndialog-login');
    h.find('.login-in').addClass('r-show');
   //h.find('form').attr('id','login_formn');
  //  h.siblings().find('form').attr('id','');
    h.find('.icon-right').fadeIn();
    h.css('position','absolute');
    h.css('top',top+'px');
    valid();
}

//已登录浏览历史不为空时
function history_show(i){
    $('#siderHistory').addClass('b-show');
    $('#siderHistory').siblings().removeClass('b-show');
    i.find('.icon-right').fadeIn();
    i.siblings().find('.login-in').removeClass('r-show');
    i.siblings().find('.icon-right').fadeOut();
    sider_history_information();
}

function historyDel(s){
    var obj = $('#siderHistory');
    var goods_id = $(s).attr("data-id");;
    $.getJSON(SITEURL+'/index.php?act=member_viewed&op=del&goods_id='+goods_id, function(result){
        if(result['status'] == true){
            layer.msg("删除成功");
            var num = obj.find('.history-title > .fl > em').html();
            num = num>0 ? num-1 : num;
             obj.find('.history-title > .fl > em').html(num);
            $(s).parent().parent().remove();
        }else{
            layer.msg('删除失败');
        }
    });
}
function clearAll(){
    $.getJSON(SITEURL+'/index.php?act=member_viewed&op=clearAll', function(result){
        if(result['status'] == true){
            layer.msg("删除成功");
            $(".history-list-box").find('li').remove();
            $('#siderHistory').find('.history-title > .fl > em').html(0);
        }else{
            layer.msg('删除失败');
        }
    });
}

function b_close(a){
    if($(a).parent().parent().attr("name") == 'form_buy'){
         $(a).parent().parent().parent().removeClass('b-show');
    }else{
         $(a).parent().parent().removeClass('b-show');
    }
   
    $('.icon-right').fadeOut();
}

function valid(){
    $("#login_formn .submit-btn").click(function(){
        if($("#login_formn").valid()){
            $("#current_web_url").val(window.location.href);
            $("#login_formn").submit();
            $("#ndialog-login").find('.login-in').removeClass('r-show');
            $("#ndialog-login").parent().parent().parent().find('.icon-right').fadeOut();
            //document.location.reload(true);
        } else{
            document.getElementById('codeimage').src='https://login.mmloo.com/shop/index.php?act=seccode&op=makecode&nchash=f53baf94&t=' + Math.random();
        }
    });
    $("#login_formn").validate({
        errorPlacement: function(error, element){
            var error_td = element.parent('dd');
            error_td.find('label').hide();
            error_td.append(error);
        },
        rules: {
            suser_name: "required",
            spassword: "required"
//            ,captcha : {
//                required : true,
//                minlength: 4,
//                remote   : {
//                    url : 'https://login.mmloo.com/shop/index.php?act=seccode&op=check&nchash=f53baf94',
//                    type: 'get',
//                    data:{
//                        captcha : function(){
//                            return $('#captcha').val();
//                        }
//                    }
//                }
//            }
        },
        messages: {
            suser_name: "用户名不能为空",
            spassword: "密码不能为空"
//            ,captcha : {
//                required : '验证码不能为空',
//                minlength: '验证码错误',
//                remote	 : '验证码错误'
//            }
        }
    })
}

//加载最近浏览的商品
function sider_history_information(){
    $.getJSON(SITEURL+'/index.php?act=member_viewed&op=index', function(result){
        var obj = $('#siderHistory');
        if(result['num'] >0){
            if (typeof result['num'] !== 'undefined') obj.find('.history-title > .fl > em').html(result['num']);
          //  if (typeof result['consult'] !== 'undefined') obj.find('#member_voucher').html(result['voucher']);
        }
        var goods_id = 0;
        var text_append = '';
        var n = 0;
        if (typeof result['viewed_goods'] !== 'undefined') {
            for (goods_id in result['viewed_goods']) {
                var goods = result['viewed_goods'][goods_id];
                text_append += '<li><dl><dt><a href="'+goods['url']+'" title="'+goods['goods_name']+
                '" target="_blank"><img src="'+goods['goods_image']+'" alt="'+goods['goods_name']+'"></a></dt>'
                +'<dd class="price">￥'+goods['goods_price']+'</dd><dd class="history-del" data-id="'+goods['goods_id']+'" onclick="historyDel(this)"></dd>';
                text_append += '</dl></li>';
                n++;
            }
        }
        if (text_append == '') {
            text_append = '<div class="public-title">'
            +'<div>我的足迹</div><div class="login-close" onclick="b_close(this)"></div></div>'
            +'<div class="cart-none"><div class="none-box"><i class="none-logo"></i>'
            +'<div class="none-text">您当前还没有浏览历史哦~<br/>先逛逛<a href="#">米米乐商城</a>吧</div>'
            +'</div></div>';
            obj.html(text_append);
            return false;
        }
        obj.find('ul').html(text_append);
    });
};




$(function(){
    $('.sevice .login-close').each(function(){
        $(this).click(function(event){
            $(this).parent().parent().removeClass('r-show');
            $('.icon-right').fadeOut();
            event.stopPropagation();
        })
    });
    
});

