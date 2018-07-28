$(function () {
    $("html").niceScroll();

    //兼容edge的png黑框
    $(function () {
        var logo = $('.logo');
        var Img = $('<img src="../img/12.png">');
        logo.append(Img);
    });
    //结束

    var toTop = $('.toTop');
    var isTop = true;
    var timer = null;

    $(window).scroll(function () {
        var clientHeight = getBigHeight();
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= clientHeight) { //如果滚动高度大于可视区域高度，则显示回到顶部按钮
            toTop.css({
                opacity: 1,
            });
        } else { //否则隐藏
            toTop.css({
                opacity: 0,
            });
        };
        //判断当点击回到顶部按钮后，滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    });

    $('.GoTop').on('click', function () {
        timer = setInterval(function () {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-osTop / 10);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop = true; //用于阻止滚动事件清除定时器
            if (osTop === 0) {
                clearInterval(timer);
            };
        }, 30);
    }); //回到顶部按钮点击事件
    //设置定时器
});

// 登录
$('#login_a').on('click', function () {
    layer.open({
        type: 2,
        title: 'SIGN',
        maxmin: false,
        shadeClose: true, //点击遮罩关闭层
        area: ['40%', '80%'],
        content: '../html/signIn.html',
    });
});

// 注册
$('#register_a').on('click', function () {
    layer.open({
        type: 2,
        title: 'SIGN',
        maxmin: false,
        shadeClose: true, //点击遮罩关闭层
        area: ['40%', '85%'],
        content: '../html/signUp.html',
    });
});

$('.search_special').on('click', function () {
    layer.prompt({
        title: '搜索框',
    }, function (val, index) {
        layer.msg('开始搜索' + val, {
            icon: 6,
            time: 2000, //1秒关闭（如果不配置，默认是3秒）
        });
        layer.close(index);
    });
});

$(window).keydown(function (event) {
    event = event || window.event;
    if (event.keyCode == 13) {
        $('.layui-layer-btn0').trigger('click');
    };
});

$('.photo_cicle').hover(function () {
    $('.msg_index_dance').css({
        "transform": "scale(1)",
    });
}, function () {
    $('.msg_index_dance').css({
        "transform": "scale(0)",
    });
});

$("body").getNiceScroll().hide(); //使body为overflow:hidden
$("body").getNiceScroll().resize(); //在页面尺寸变化的时候整个页面会有一种变化
$("body").niceScroll({
    cursorwidth: "0px", //隐藏滚动的关键
    zindex: "9",
    scrollspeed: "150", //使整个页面有一种缓动的感觉
    mousescrollstep: "40", //鼠标的滚动速度
});

function getBigHeight() {
    var bigHeight = document.documentElement.clientHeight || document.body.clientHeight;
    return bigHeight;
}

//鼠标拖动选择文字，页面自动向下滚动事件
var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var isEdge = userAgent.indexOf('Edge') > -1; //判断是否IE的Edge浏览器
var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

if (isChrome && isEdge) {
    Return();
} else {
    var Body = document.getElementsByTagName('body')[0];
    var JudgeMove = false;
    Body.onmouseup = function () {
        JudgeMove = false;
    }
    Body.onmousedown = function () {
        JudgeMove = true;
    }

    var timer = null;

    function MoveChange(n) {
        clearInterval(timer);
        timer = setInterval(function () {
            var osTop = document.documentElement.scrollTop;
            var speed = 0;
            if (n > 0) {
                speed += 100;
            } else if (n < 0) {
                speed -= 100;
            }
            $("body").getNiceScroll(0).doScrollTop(osTop + speed, 0);
            console.log(osTop + speed);
            if (JudgeMove == false) {
                clearInterval(timer);
            }
        }, 0);
    }

    function Return() {
        return;
    }

    Body.onmousemove = function (e) {
        if (JudgeMove == false) {
            return
        };

        ST = e.screenY;
        if (ST >= 1040) {
            MoveChange(1, ST);
        } else if (ST >= 0 && ST <= 200) {
            MoveChange(-1, ST);
        } else if (ST > 200 && ST < 1040) {
            clearInterval(timer);
        }
    };
}
//鼠标拖动选择文字，页面自动向下滚动事件

//使火狐在页面加载完就页面就位于顶部
$(function () {
    document.documentElement.scrollTop = 0;
});