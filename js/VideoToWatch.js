//视频播放
const dp = new DPlayer({
    container: document.getElementById('video-page-play-interface'),
    screenshot: true, //截图
    volume: 1,
    theme: '#FF5983', //主题颜色
    video: {
        url: 'http://pdc3kp6os.bkt.clouddn.com/Soda1.mp4' //视频地址
    },
    danmaku: {
        id: 'VideoToWatchPage',
        api: 'https://api.prprpr.me/dplayer3/',
    },
});

//当video加载完成发送的事件
var VideoInterface = document.getElementById('VideoInterface');
VideoInterface.oncanplay = function () { //当视频加载完成时
    var videoContent = $('.video-content').outerHeight();
    $('.danmu-list-content').css({
        'height': videoContent,
    });
}

//当页面变化时盖度随之改变
$(window).resize(function () {
    var videoContent = $('.video-content').outerHeight();
    $('.danmu-list-content').css({
        'height': videoContent,
    });
});

//编辑滚动条
$(function () {
    $(".all-danmu-message,.YScroll").getNiceScroll().hide(); //使body为overflow:hidden
    $(".all-danmu-message,.YScroll").getNiceScroll().resize(); //在页面尺寸变化的时候整个页面会有一种变化
    $(".all-danmu-message,.YScroll").niceScroll({
        cursorcolor: '#999',
        cursorwidth: "6px", //隐藏滚动的关键
        zindex: "9",
        scrollspeed: "150", //使整个页面有一种缓动的感觉
        mousescrollstep: "40", //鼠标的滚动速度
        autohidemode: "leave", //不隐藏滚动条
        background: '#DDD',
        hidecursordelay: 300,
    });
});

function getTime(n, m) {
    var myDate = new Date();
    var GetMonth = myDate.getMonth() + 1; //0表示1月
    var GetDay = myDate.getDate(); //表示天
    var GetHour = myDate.getHours(); //表示小时
    var GetMinutes = myDate.getMinutes(); //表示分钟
    m.find(n).html('' + addZero(GetMonth) + '-' + addZero(GetDay) + ' ' + addZero(GetHour) + ':' + addZero(GetMinutes) + '');
}

function addZero(n) {
    if (n < 10) {
        n = '0' + n + '';
    }
    return n;
}

function danmuMessage(n) {
    var sendDanmuMessageContent = $('<div class="send-danmu-Message-content"><span><span class="now-video-playing-time">01:20</span>' +
        '<span class="limit-word-num">好可爱好可爱好可爱好可爱好可爱</span></span><span class="current-time">08-24 08:13</span></div>');
    $('.all-danmu-message').append(sendDanmuMessageContent);
    danmuSend(n, sendDanmuMessageContent);
}

$('.dplayer-comment-input').keydown(function () {
    var keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode == '13') {
        danmuMessage($(this));
    }
});

$('#send-button-for-danmu').on('click', function () {
    danmuMessage($('.dplayer-comment-input'));
});

function danmuSend(n, m) {
    // 视频放到哪个时间点
    m.find('.now-video-playing-time').html($('.dplayer-ptime').html());
    // 当前时间
    getTime('.current-time', m);
    // 输入的内容
    m.find('.limit-word-num').html(n.val());
    // 限制弹幕内容的字数
    m.find('.limit-word-num').each(function () {
        var maxwidth = 14;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "...");
        };
    });
    var Len = $('.send-danmu-Message-content').length;
    $('.danmu-content-and-number').html('弹幕内容(' + Len + ')');
}

//创建一个新的编辑器
var E = window.wangEditor;
var editor = new E('#top_list', '#bottom_content');
editor.customConfig.menus = ['bold', 'italic', 'link', 'emoticon'];
editor.customConfig.zIndex = 0;
editor.create();

$('.publish_A').html('<i class="iconfont">&#xe815;</i>发送');

// description.replace(/<(?!img).*?>/g, "");//去除所有的html标签除了img
$('.NewEditor .publish_A').on('click', function () {
    var Now = new Date();
    var Year = Now.getFullYear();
    var Month = Now.getMonth() + 1;
    var Day = Now.getDate();
    var Hour = Now.getHours();
    var Minute = Now.getMinutes();
    var Second = Now.getSeconds();
    var addComments = $(
        '<li class="Number"><div class="commentsMessage"><div class="topMessage"><a href="javascript:;"><img src="../img/11.jpg"></a>' +
        '<div class="rightMessage"><div class="commentsName">白矖</div><div class="timeMessage"><span></span><span></span>' +
        '</div></div></div><div class="bottomMessage"><p class="OneFirst"></p><div class="toolBar_Btn"><a href="javascript:;"><i class="iconfont">&#xe606;</i>' +
        '<span class="goodNum">0</span><span>人赞</span></a><a href="javascript:;"><i class="iconfont replyBack">&#xe61b;</i><span>回复</span>' +
        '</a><a href="javascript:;" class="DeleteCommentSpecial"><i class="iconfont">&#xe622;</i>删除评论</a></div></div></div></li>'
    );
    var Content = $('.NewEditor .w-e-text').html();
    if (Content == '') {
        alert('请您写一点内容再发送，当前状态不可发送');
    } else {
        //监听内容的改变，来统计个数
        $('.commentsList').bind('DOMNodeInserted', function () {
            var NumNumber = $('.commentsList li').length;
            $('.commentsNum span').html(NumNumber); //用于记录有多少条的评论
        });

        $('.commentsList').prepend(addComments);
        $('.commentsList li:first-child .OneFirst').html(Content);
        $('.commentsList li:first-child .timeMessage span').eq(0).html('' + Year + '/' + Month + '/' + Day + '');
        $('.commentsList li:first-child .timeMessage span').eq(1).html('' + addZero(Hour) + ':' + addZero(Minute) + ':' + addZero(Second) + '');
    }
    $('.NewEditor .w-e-text').html('<p><br></p>');

    //点赞
    var NotSame = true;
    var GoodNum = parseInt($('.goodNum').html());
    $('.toolBar_Btn a').eq(0).on('click', function () {
        if (NotSame) {
            NotSame = false;
            onNotSame($(this).find('.iconfont'), 1);
            $(this).find('.goodNum').html(++GoodNum);
        } else {
            NotSame = true;
            onNotSame($(this).find('.iconfont'), 0);
            $(this).find('.goodNum').html(--GoodNum);
        }
    });

    //回复
    $('.toolBar_Btn a').eq(1).on('click', function () {
        getNewEditor($(this));
    });

    //删除评论
    $('.DeleteCommentSpecial').unbind('click').on('click', function () {
        var This = $(this);
        layer.confirm('确定要删除此评论吗?', {
            btn: ['确定', '取消'], //按钮
            title: '提示',
        }, function (index) {
            This.parent().parent().parent().parent().remove();
            var NumCommentSpan = parseInt($('.commentsNum span').html());
            $('.commentsNum span').html(--NumCommentSpan);
            layer.close(index);
        });
    });

});

function addZero(n) {
    if (n < 10) {
        n = '0' + n + '';
    }
    return n;
}

function onNotSame(m, n) {
    if (n) {
        m.css({
            color: '#00B38C',
        });
    } else {
        m.css({
            color: '',
        });
    }
}

function cancel() {
    $('.NewGoodEditor .cancel_A').on('click', function () {
        CodeSame($('.NewGoodEditor'));
        $('.replyBack').css({
            color: '',
        });
    });
}

function getNewEditor(n) {
    var NewGoodEditor = $('<div class="NewGoodEditor"><div class="NewEditor">' +
        '<div id="Newtoolbar" class="NewToolbar" style="width:100%;background: #fff;border-bottom: 1px solid #DDD;"></div>' +
        '<div id="NewUser_edit" class="EditorNew" style="width:100%;height:200px;display: flex;justify-content: center;' +
        'align-content: center;flex-wrap:wrap;background:#fff;"></div></div></div>');
    $('.replyBack').css({
        color: '',
    });
    CodeSame($('.NewGoodEditor'));
    onNotSame(n.find('.iconfont'), 1);
    n.parent().parent().find('.toolBar_Btn').after(NewGoodEditor);
    setTimeout(function () {
        $('.NewGoodEditor').css({
            opacity: '1',
            top: '0',
        });
        $('.NewGoodEditor .cancel_A').css({
            display: 'flex',
        });
        $('.NewGoodEditor .publish_A').html('<i class="iconfont">&#xe815;</i>发送');
    }, 10);
    var M = window.wangEditor;
    var NewEditor = new M('#Newtoolbar', '#NewUser_edit');
    NewEditor.customConfig.menus = ['bold', 'italic', 'link', 'emoticon'];
    NewEditor.customConfig.zIndex = 0;
    NewEditor.create();

    cancel();

    improveAreduceZIndex();

    //解决火狐不能自动去除占位符的问题
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器
    if (isFF) {
        $('#NewUser_edit .w-e-text p').eq(0).find('br').css({
            'display': 'none',
        });
    }

    $('.NewGoodEditor .publish_A').on('click', function () {
        var Now = new Date();
        var Year = Now.getFullYear();
        var Month = Now.getMonth() + 1;
        var Day = Now.getDate();
        var Hour = Now.getHours();
        var Minute = Now.getMinutes();
        var Second = Now.getSeconds();
        var ContentNew = $('.NewGoodEditor .w-e-text').html();
        if (ContentNew == '') {
            alert('请您写一点内容再发送，当前状态不可发送');
        } else {
            $('.NewGoodEditor').after('<div class="insertComment"><p class="TwoSecond"></p><div><span class="oneSpanTWO"></span><span class="TwoSpanTWO"></span></div><div><a href="javascript:;" class="ADDCommit">评论</a><a href="javascript:;" class="DEl">删除</a></div></div>');
            $(this).parent().parent().parent().parent().parent().parent().find('.insertComment:first .TwoSecond').html(ContentNew);
            $(this).parent().parent().parent().parent().parent().parent().find('.insertComment:first .oneSpanTWO').html('' + Year + '/' + Month + '/' + Day + '');
            $(this).parent().parent().parent().parent().parent().parent().find('.insertComment:first .TwoSpanTWO').html('' + addZero(Hour) + ':' + addZero(Minute) + ':' + addZero(Second) + '');
        }

        $('.NewGoodEditor .w-e-text').html('<p><br></p>');

        cancel();

        $('.DEl').unbind('click').on('click', function () {
            var This = $(this);
            layer.confirm('确定要删除此评论吗?', {
                btn: ['确定', '取消'], //按钮
                title: '提示',
            }, function (index) {
                This.parent().parent().remove();
                layer.close(index);
            });
        }); //删除评论

        //添加评论
        $('.ADDCommit').on('click', function () {
            getNewEditor($(this).parent());
        });

    });
}

// 检测一个页面中是否存在一个元素
(function ($) {
    $.fn.exist = function () {
        if ($(this).length >= 1) {
            return true;
        }
        return false;
    };
})(jQuery);

// 提高和减低一个元素的层级
function improveAreduceZIndex() {
    $('.hoverSameA5,.hoverSameA17').on('click', function () {
        var timer = null;
        timer = setInterval(function () {
            if ($('.cover_big').exist()) {
                $('.title').css('z-index', 'initial');
                $('.toTop').css('z-index', '-1');
                $('.toolbar').css('z-index', '-1');
                $('.dplayer').css('z-index', '-1');
            } else {
                $('.title').css('z-index', '');
                $('.toTop').css('z-index', '');
                $('.toolbar').css('z-index', '');
                $('.dplayer').css('z-index', '');
                clearInterval(timer);
            }
        }, 0);
    });
}

improveAreduceZIndex();

function CodeSame(n) {
    $('.NewGoodEditor').css({
        opacity: '',
        top: '',
    });
    $('.NewGoodEditor .w-e-text').remove();
    n.remove();
}

var UrlAddress = 'https://music.163.com';
var getFirstContent = $('.video-title p').html();

//配置share.js的参数
socialShare('.social-share', {
    title: getFirstContent, //分享的标题
    image: 'http://pctnq9rfg.bkt.clouddn.com/daoLogo.png', //分享的图片  一般是正文的第一张图片 现在是我们的logo
    url: UrlAddress, //填写当前页面的地址     window.location.href      分享的地址
    description: getFirstContent, //分享到额描述
});

$('#QRcode-weixin').qrcode({
    width: 150,
    height: 150,
    text: UrlAddress,
});

$('.focus-btn a').on('click', function () {
    if ($(this).html() == '关注') {
        $(this).html('取消关注');
        $(this).css('background', '#FF5983');
    } else if ($(this).html() == '取消关注') {
        $(this).html('关注');
        $(this).css('background', '');
    }
});

$(document).on('click', '.toolBar_Btn a,.publish_A,.layui-layer-btn0,.ADDCommit,.DEl,.cancel_A', function () {
    $('body').getNiceScroll().resize();
});
//重载滚动条