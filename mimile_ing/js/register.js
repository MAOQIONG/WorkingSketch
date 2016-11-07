/**
 * Created by Administrator on 2016/11/7 0007.
 */
(function(){



    $('#zhuce').on('click',function () {
        var user=$("#num").val();
        var pwd=$("#pwd").val();
        addCookie('name',user,5);
        addCookie('next',pwd,5);




    });












})();



















