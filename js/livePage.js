//视频播放
const dp = new DPlayer({
    container: document.getElementById('DPlayerVideo'),
    screenshot: true, //截图
    volume: 1,
    live: true,
    theme: '#FF5983', //主题颜色
    video: {
        url: 'http://pdc3kp6os.bkt.clouddn.com/Soda1.mp4' //视频地址
    }
});

//当video加载完成发送的事件
var VideoInterface = document.getElementById('VideoInterface');
VideoInterface.oncanplay = function () { //当视频加载完成时
    var containrAllVideoElementHeight = $('.containrAllVideoElement').outerHeight();
    $('.DanMuListKeepSame').css({
        'height': containrAllVideoElementHeight,
    });
    var userInformationListHeight = $('.userInformationList').outerHeight();
    $('.Cute').height(userInformationListHeight - 20);
}

//编辑滚动条
$(function () {
    $(".SendArea").getNiceScroll().hide(); //使body为overflow:hidden
    $(".SendArea").getNiceScroll().resize(); //在页面尺寸变化的时候整个页面会有一种变化
    $(".SendArea").niceScroll({
        cursorwidth: "8px", //隐藏滚动的关键
        zindex: "9",
        scrollspeed: "150", //使整个页面有一种缓动的感觉
        mousescrollstep: "40", //鼠标的滚动速度
        autohidemode: false, //不隐藏滚动条
    });

    $('.SendArea').scrollTop($('.SendArea')[0].scrollHeight);

    //限制textarea文字的输入字数
    var doing = false;
    var doSomething = function (e) {
        if ($('#editorTextarea').val().length > 20) {
            $('#editorTextarea').val($('#editorTextarea').val().substring(0, 20));
        }
        $('.SendFunction .RecordNUM').text('' + $('#editorTextarea').val().length + '/20');
        //检测textarea的输入情况
        if ($('#editorTextarea').val().length > 0) {
            $('.SendFunction a').css({
                'background': '#FF6E97',
                'cursor': 'pointer',
            });
        } else if ($('#editorTextarea').val().length == 0) {
            $('.SendFunction a').css({
                'background': '',
                'cursor': 'not-allowed',
            });
        }
    }

    document.getElementById('editorTextarea').addEventListener('compositionstart', function (e) {
        doing = true;
    }, false);

    document.getElementById('editorTextarea').addEventListener('input', function (e) {
        if (!doing) {
            doSomething();
        }
    }, false);

    document.getElementById('editorTextarea').addEventListener('compositionend', function (e) {
        doing = false;
        doSomething();
    }, false);

});

//hover后的样式
$('.SendFunction a').hover(function () {
    if ($(this).css('cursor') == 'pointer') {
        $(this).css({
            'background': '#C1194E',
        });
    }
}, function () {
    if ($(this).css('cursor') == 'pointer') {
        $(this).css({
            'background': '#FF6E97',
        });
    }
});

$('.DanMuSet').on('click', function () {
    $('.iconSEt').css({
        'color': '#FF6E97',
    });
    $('.DanMUSetIng').css('display', 'block');
    $('.DanMUSetIng').addClass('fadeIn');
    stopBubble();
});

//当页面变化时盖度随之改变
$(window).resize(function () {
    var containrAllVideoElementHeight = $('.containrAllVideoElement').outerHeight();
    $('.DanMuListKeepSame').css({
        'height': containrAllVideoElementHeight,
    });
});

var LastSpanStyle = $('.DanMuLocation span').eq(0);
$('.DanMuLocation span').on('click', function () {
    LastSpanStyle.removeClass('SetColorPink');
    LastSpanStyle.attr('data-click', '0');
    LastSpanStyle = $(this);
    $(this).addClass('SetColorPink');
    $(this).attr('data-click', '1');
});

for (var i = 0; i < $('.MuchColors span').length; i++) {
    var ColorValue = $('.MuchColors span').eq(i).attr('ColorValue');
    $('.MuchColors span').eq(i).css({
        'background': ColorValue,
    });
}

var LastBigER = $('.MuchColors span').eq(0);
$('.MuchColors span').on('click', function () {
    LastBigER.removeClass('bigER');
    LastBigER = $(this);
    $(this).addClass('bigER');
});

//发送按钮点击
$('#SendDanMU').on('click', function () {
    if ($('.SendFunction a').css('cursor') == 'pointer') {
        var DamMuLength = $('.userMessageDiv').length;
        //缓存99条弹幕记录
        if (DamMuLength >= 99) {
            $('.SendArea .userMessageDiv:first-child').remove();
        }
        var createDiv = $('<div class="userMessageDiv"><a href="javascript:;">白矖&nbsp;:</a>&nbsp;<span class="MainMessageP"></span></div>');
        var editorTextareaContainer = $('#editorTextarea').val();
        $('.SendArea').append(createDiv);
        createDiv.find('.MainMessageP').html(editorTextareaContainer);
        $('#editorTextarea').val('');
        $('.SendFunction .RecordNUM').text('0/20');
        $(this).css({
            'background': '#e3e8ec',
            'cursor': 'not-allowed',
        });
        $('.SendArea').scrollTop($('.SendArea')[0].scrollHeight);
    };
});

//enter键发送
$(window).keydown(function (event) {
    event = event || window.event;
    if (event.keyCode == 13) {
        $('#SendDanMU').click();
        event.preventDefault();
        $('#editorTextarea').blur();
    }
});

$('.bottomImgL a').on('click', function () {
    if ($(this).find('.focusFocusTwo').html() == '关注') {
        $('.NUmCounts').html(parseInt($('.NUmCounts').html()) + 1);
        $(this).find('.focusFocusTwo').html('已关注');
        $(this).find('.iconfont').html('&#xe602;');
    } else {
        $('.NUmCounts').html(parseInt($('.NUmCounts').html()) - 1);
        $(this).find('.focusFocusTwo').html('关注');
        $(this).find('.iconfont').html('&#xe638;');
    }
});

$(document).on('click', function () {
    $('.iconSEt').css({
        'color': '',
    });
    $('.DanMUSetIng').removeClass('fadeIn');
    $('.DanMUSetIng').css('display', '');
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