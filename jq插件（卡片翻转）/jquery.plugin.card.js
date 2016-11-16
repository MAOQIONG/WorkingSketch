/**
 * Created by Administrator on 2016/10/19 0019.
 */
/**
 * Created by plter on 10/19/16.
 */


(function () {

    $.fn.card = function (args) {

        var params = args || {width: "100px", height: "100px"};
        this.css(params);
        this.find(".face").css({width: "100%", height: "100%", margin: "0 auto"});
        this.find(".b").hide();

        this.click(function () {
            var selfCard = this;

            if (!selfCard.faceA) {
                selfCard.faceA = $(this).find(".a");
            }
            if (!selfCard.faceB) {
                selfCard.faceB = $(this).find(".b");
            }

            if (selfCard.animating) {
                return;
            }

            if (!selfCard.bVisible) {

                /**
                 * 该变量指明动画是否正在运行
                 * 开始执行动画时，将该变量设置为true，当动画执行结束后，将该变量设置为false
                 * @type {boolean}
                 */
                selfCard.animating = true;
                selfCard.faceA.animate({width: "0"}, "slow", function () {
                    selfCard.faceA.hide();
                    selfCard.faceB.show();
                    selfCard.bVisible = true;

                    selfCard.faceB.css("width", "0");
                    selfCard.faceB.animate({width: "100%"}, "slow", function () {
                        selfCard.animating = false;
                    });
                });
            } else {
                selfCard.animating = true;
                selfCard.faceB.animate({width: "0"}, "slow", function () {
                    selfCard.faceA.show();
                    selfCard.faceB.hide();
                    selfCard.bVisible = false;

                    selfCard.faceA.css("width", "0");
                    selfCard.faceA.animate({width: "100%"}, "slow", function () {
                        selfCard.animating = false;
                    });
                });
            }
        });
    }

})();