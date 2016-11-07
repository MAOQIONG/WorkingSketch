/* 
 * 返回顶部纯js代码
 */
(function () {
    var btnId = 'goTop';
    var isIE = !!window.ActiveXObject && /msie (\d)/i.test(navigator.userAgent) ? RegExp['$1'] : false;

    function $t() {
        return document.getElementById(arguments[0]);
    }

    function getScrollTop() {
        return ('pageYOffset' in window) ? window.pageYOffset
            : document.compatMode === "BackCompat"
        && document.body.scrollTop
        || document.documentElement.scrollTop;
    }

    function bindEvent(event, func) {
        if (window.addEventListener) {
            window.addEventListener(event, func, false);
        } else if (window.attachEvent) {
            window.attachEvent('on' + event, func);
        }
    }


    var css = 'background-color:#999;width:50px;height:50px;position:fixed;right:100px;bottom:30px;border-radius:10px;cursor:pointer;display:none;z-index:999;';

    if (isIE && isIE < 7) {
        css += '_position:absolute;_top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-30-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));z-index:999;';
        var style = document.createStyleSheet();
        style.cssText = '*html{background-image:url(about:blank);background-attachment:fixed;}';
    }

    var html = '<div style="height: 0;width: 0;border:14px solid #999999;border-top: 0 none;border-bottom:14px solid #fff;position: relative;margin:12px 0 0 11px;"><div style="width:8px;height:7px;position:absolute;top:14px;left:-4px;background-color:#fff;overflow: hidden;"></div></div>';
    var el = document.createElement('div');
    el.id = btnId;
    el.style.cssText = css;
    el.innerHTML = html;
    //document.body.appendChild(el);
    var new_gotop = document.createElement('div');
    document.body.appendChild(new_gotop);
    new_gotop.id = "new_gotop"
    new_gotop.appendChild(el);
    el.onclick = function () {
        (function () {
            var top = getScrollTop();
            if (top > 0) {
                window.scrollTo(0, top / 1.2)
                setTimeout(arguments.callee, 10);
            }
        })();
    };

    el.onmouseover = function () {
        $t(btnId).firstChild.style.borderBottom = '14px solid #ddd';
        $t(btnId).firstChild.firstChild.style.backgroundColor = '#ddd';
    };

    el.onmouseout = function () {
        $t(btnId).firstChild.style.borderBottom = '14px solid #fff';
        $t(btnId).firstChild.firstChild.style.backgroundColor = '#fff';
    };



    bindEvent('scroll',
            function () {
                var top = getScrollTop();

                if (top > 0) {
                    $t(btnId).style.display="block";
                }
           else{
                    $t(btnId).style.display="none"
                }

            });
})();

