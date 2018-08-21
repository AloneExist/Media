$(function () {
    $("body").getNiceScroll().hide(); //使body为overflow:hidden
    $("body").getNiceScroll().resize(); //在页面尺寸变化的时候整个页面会有一种变化
    $("body").niceScroll({
        cursorwidth: "0px", //隐藏滚动的关键
        zindex: "9",
        scrollspeed: "150", //使整个页面有一种缓动的感觉
        mousescrollstep: "40", //鼠标的滚动速度
    });

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
            toTop.css('display', 'block');
        } else { //否则隐藏
            toTop.css('display', 'none');
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

var autoHeight = $('#main_content').outerHeight();
// 登录
$('#login_a').on('click', function () {
    layer.open({
        type: 2,
        title: false,
        shadeClose: true, //点击遮罩关闭层
        content: ['../html/signIn.html', 'no'],
        closeBtn: 0,
        area: ['400px', '552px'],
    });
});

// 注册
$('#register_a').on('click', function () {
    layer.open({
        type: 2,
        title: false,
        shadeClose: true, //点击遮罩关闭层
        content: ['../html/signUp.html', 'no'],
        closeBtn: 0,
        area: ['400px', '552px'],
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



function getBigHeight() {
    var bigHeight = document.documentElement.clientHeight || document.body.clientHeight;
    return bigHeight;
}

//鼠标拖动选择文字，页面自动向下滚动事件
var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var isEdge = userAgent.indexOf('Edge') > -1; //判断是否IE的Edge浏览器
var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

if (isChrome && isEdge) {
    console.log('NOTHING');
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

    Body.onmousemove = function (e) {
        if (JudgeMove == false) {
            return
        };

        ST = e.screenY;
        if (ST >= 1000) {
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

$('.search_special').on('click', function () {
    SearchFun($(this));
});
//用于搜索

$(window).keydown(function (event) {
    event = event || window.event;
    var isFocus = $(".InputTextBtn").is(":focus");
    if (event.keyCode == 13 && isFocus) {
        var value = $('.InputTextBtn').val();
        if (value != '') {
            window.open("search.html");
        }
        $('.search_special').click();
        event.preventDefault();
    }
});

function SearchFun(n) {
    var value = $('.InputTextBtn').val();
    if (value != '') {
        n.attr({
            'href': 'search.html',
            'target': '_blank',
        });
    }
}

$('.InputTextBtn').on('click', function () {
    $('.HotAPast').remove();
    var HotPast = $('<div class="HotAPast"><div class="topSearch"><p>搜索历史</p><a href="javascript:;"><span class="longWidth">' +
        '<i class="iconfont">&#xe6e3;</i></span>换一批</a></div><ul class="past"><li><a href="javascript:;"><i class="iconfont">&#xe6c0;</i>' +
        '<p class="pastP">上大学后，我一直坚持的三件事情</p></a></li><li><a href="javascript:;"><i class="iconfont">&#xe6c0;</i>' +
        '<p class="pastP">上大学后，我一直坚持的三件事情</p></a></li><li><a href="javascript:;"><i class="iconfont">&#xe6c0;</i>' +
        '<p class="pastP">上大学后，我一直坚持的三件事情</p></a></li><li><a href="javascript:;"><i class="iconfont">&#xe6c0;</i>' +
        '<p class="pastP">上大学后，我一直坚持的三件事情</p></a></li><li><a href="javascript:;"><i class="iconfont">&#xe6c0;</i>' +
        '<p class="pastP">上大学后，我一直坚持的三件事情</p></a></li></ul></div>');
    $('.searchLi form').append(HotPast);
    $('.InputTextBtn').css({
        'width': '180px',
    });
    $('.search_special').css({
        'background': '#BBB',
    });
    stopBubble();

    CutWord();

    var NumAdd = 0;
    var pageChange = 0;
    $('.topSearch a').on('click', function () {
        NumAdd++;
        pageChange++;

        $(this).find('.iconfont').css({
            'transform': 'rotate(' + 720 * NumAdd + 'deg)',
        });
        switch (pageChange) {
            case 0:
                $('.pastP').html('上大学后，我一直坚持的三件事情');
                break;
            case 1:
                $('.pastP').html('既然实现目标那么苦，你为什么还要继续苦下去');
                break;
            case 2:
                $('.pastP').html('大学四年，我独立承担了我的生活费');
                break;
            case 3:
                $('.pastP').html('使用Spring Data JPA访问关系型数据库');
                break;
            case 4:
                $('.pastP').html('自律才能得自由---读《我的职业是小说家》');
                break;
        }
        if (pageChange == 4) {
            pageChange = -1;
        }
        CutWord();
        stopBubble();
    });

    $('.HotAPast').on('click', function () {
        stopBubble();
    });
});

$(document).on('click', function () {
    $('.InputTextBtn').css({
        'width': '',
    });
    $('.search_special').css({
        'background': '',
    });
    $('.HotAPast').remove();
});

function stopBubble(e) {
    //如果提供了事件对象，则这是一个非IE浏览器 
    if (e && e.stopPropagation)
        //因此它支持W3C的stopPropagation()方法 
        e.stopPropagation();
    else
        //否则，我们需要使用IE的方式来取消事件冒泡 
        window.event.cancelBubble = true;
}

function CutWord() {
    $(".pastP").each(function () {
        var maxwidth = 9;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "...");
        };
    });
}

console.log([
    "                   我佛慈悲",
    "                   _ooOoo_",
    "                  o8888888o",
    "                  88\" . \"88",
    "                  (| -_- |)",
    "                  O\\  =  /O",
    "               ____/`---'\\____",
    "             .'  \\\\|     |//  `.",
    "            /  \\\\|||  :  |||//  \\",
    "           /  _||||| -卍- |||||- \\",
    "           |   | \\\\\\  -  /// |   |",
    "           | \\_|  ''\\---/''  |   |",
    "           \\  .-\\__  `-`  ___/-. /",
    "         ___`. .'  /--.--\\  `. . __",
    "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
    "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
    "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
    "======`-.____`-.___\\_____/___.-`____.-'======",
    "                   `=---='",
    "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
    "            佛祖保佑        永无BUG"
].join('\n'));