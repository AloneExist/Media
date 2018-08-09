for (var i = 0; i < 5; i++) {
    // 8条最佳评论
    var addComments = $('<li><div class="TitleA"><a href="javascript:;">你有什么经验一定要分享给初入职场的新人？</a></div>' +
        '<div class="SocialTool"><a href="javascript:;" class="GuanFocus"><i class="iconfont">&#xe6e0;</i><span>关注</span></a>' +
        '<a href="javascript:;" class="ZanA"><i class="iconfont">&#xe60a;</i><span>赞</span><span class="Zan">2</span></a>' +
        '<a href="javascript:;" class="commentsAndjoin" data-onOff="1"><i class="iconfont">&#xe66f;</i><span>参与讨论</span></a></div></li>');
    $('.OneList').append(addComments);
}

var LiNum = $('.OneList li').length;
$('.OneMiddle span').html(LiNum);

var H1People = $('.PeopleTitle h1').html();
$('.TitleA p').html('欢迎你参加' + H1People + '议题');

$('.RealFocus').on('click', function () {
    if ($(this).html() == '取消关注') {
        $(this).html('关注');
        $(this).removeClass('rightFocusHover');
    } else {
        $(this).html('取消关注');
        $(this).addClass('rightFocusHover');
    }
});

//限制描述的字数
$(".describe p").each(function () {
    var maxwidth = 150;
    if ($(this).text().length > maxwidth) {
        $(this).text($(this).text().substring(0, maxwidth));
        $(this).html($(this).html() + "...");
    };
});


function add(n) {
    n.find('.iconfont').addClass('HoverA');
    n.find('span').addClass('HoverA');
}

function remove(n) {
    n.find('.iconfont').removeClass('HoverA');
    n.find('span').removeClass('HoverA');
}

$('.commentsAndjoin').on('click', function () {
    getNewEditor($(this));
});

$('.AndJoin').on('click', function () {
    getNewEditor($(this).parent());
});

function getNewEditor(n) {
    var NewGoodEditor = $('<div class="NewGoodEditor"><div class="NewEditor">' +
        '<div id="Newtoolbar" class="NewToolbar" style="width:100%;background: #fff;border-bottom: 1px solid #DDD;"></div>' +
        '<div id="NewUser_edit" class="EditorNew" style="width:100%;height:200px;display: flex;justify-content: center;' +
        'align-content: center;flex-wrap:wrap;background:#fff;"></div></div></div>');
    CodeSame($('.NewGoodEditor'));
    n.parent().parent().append(NewGoodEditor);
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

    //解决火狐不能自动去除占位符的问题
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器
    if (isFF) {
        $('.w-e-text p').eq(0).find('br').css({
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
            $('.NewGoodEditor').before('<div class="insertComment"><p class="TwoSecond"></p><span class="oneSpanTWO"></span><span class="TwoSpanTWO"></span><a href="javascript:;" class="ADDCommit">评论</a><a href="javascript:;" class="DEl">删除</a></div>');
            $(this).parent().parent().parent().parent().find('.insertComment:last .TwoSecond').html(ContentNew);
            $(this).parent().parent().parent().parent().find('.insertComment:last .oneSpanTWO').html('' + Year + '/' + Month + '/' + Day + '');
            $(this).parent().parent().parent().parent().find('.insertComment:last .TwoSpanTWO').html('' + addZero(Hour) + ':' + addZero(Minute) + ':' + addZero(Second) + '');
        }

        $('.NewGoodEditor .w-e-text').html('<p><br></p>');

        cancel();

        $('.DEl').unbind('click').on('click', function () {
            var This = $(this);
            layer.confirm('确定要删除此评论吗?', {
                btn: ['确定', '取消'], //按钮
                title: '提示',
            }, function (index) {
                This.parent().remove();
                layer.close(index);
            });
        }); //删除评论


        $('.ADDCommit').on('click', function () {
            getNewEditor($(this));
        });

    });
}

function CodeSame(n) {
    $('.NewGoodEditor').css({
        opacity: '',
        top: '',
    });
    $('.NewGoodEditor .w-e-text').remove();
    n.remove();
}

function cancel() {
    $('.NewGoodEditor .cancel_A').on('click', function () {
        CodeSame($('.NewGoodEditor'));
    });
}

function addZero(n) {
    if (n < 10) {
        n = '0' + n + '';
    }
    return n;
}

var Judge = true;
$('.GuanFocus').on('click', function () {
    if (Judge) {
        Judge = false;
        $(this).html('<i class="iconfont">&#xe76a;</i> <span>取消关注</span>');
        add($(this));
    } else {
        Judge = true;
        $(this).html('<i class="iconfont">&#xe6e0;</i> <span>关注</span>')
        remove($(this));
    }
});

var onOff = true;
$('.ZanA').on('click', function () {
    if (onOff) {
        add($(this));
        onOff = false;
        var Num = parseInt($('.Zan').html());
        if ($('.Zan').html() == '') {
            $('.Zan').html('1');
        } else {
            $('.Zan').html(Num + 1);
        }
    } else {
        onOff = true;
        remove($(this));
        var Num = parseInt($('.Zan').html());
        if ($('.Zan').html() == '1') {
            $('.Zan').html('');
        } else {
            $('.Zan').html(Num - 1);
        }
    }
});

var oLd = $('.middleTopic a').eq(0);
var oLdDiv = $('.NewList').eq(0);
$('.middleTopic a').on('click', function () {
    var index = $('.middleTopic a').index(this); //判断元素在当前的位置是第几个元素
    oLdDiv.css({
        display: 'none',
    });
    oLdDiv = $('.NewList').eq(index);
    $('.NewList').eq(index).css({
        display: 'block',
    });
    oLd.css({
        background: '',
        'color': '',
    });
    oLd = $(this);
    $(this).css({
        background: '#7A023C',
        'color': '#fff',
    });
});

$(document).on('click', '.commentsAndjoin,.cancel_A,.publish_A,.middleTopic a', function () {
    $('body').getNiceScroll().resize();
});

//检测TwoList内容的改变从而去判断评论的条数
$('.TwoList').on('DOMNodeInserted', function () {
    var Len = $('.insertComment').length;
    if (Len > 0) {
        $('.TwoMiddle span').html('' + Len + '条评论');
    };
});