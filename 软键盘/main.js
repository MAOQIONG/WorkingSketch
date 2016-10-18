/**
 * Created by Administrator on 2016/10/18 0018.
 */
(function () {

    var vKeyboard = $("#vKeyboard");
    var btnHideKeyboard = $("#vKeyboard .btn-hide");
    var passwordInput = $("#password-input");

    passwordInput.click(function (e) {
        vKeyboard.show();
    });

    btnHideKeyboard.click(function (e) {
        vKeyboard.hide();
    });

    $(".key").click(function () {
        // console.log($(this).html());

        var keyCode = $(this).html();

        passwordInput[0].value += keyCode;
    });

    $("#vKeyboard .btn-clear").click(function () {
        passwordInput[0].value = "";
    });

    $("#vKeyboard .btn-delete").click(function () {
        var input = passwordInput[0];
        input.value = input.value.substring(0, input.value.length - 1);
    });

    $("form").submit(function (e) {
        e.preventDefault();
    });

})();