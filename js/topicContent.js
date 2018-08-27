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

$('.AndJoin').on('click', function () {
    statistic_data();
    getNewEditor($(this).parent(), 1);
});

$('.FirstAndJoin').on('click', function () {
    statistic_data();
    getNewFirstEditor($(this).parent().parent());
});

// 记录上一个countLiNum的数据
function statistic_data() {
    $('.countLiNum').each(function () {
        if ($(this).data('statistic_data') == '1') {
            $(this).data('statistic_data', '0');
            if ($(this).find('.comments-not-or-yes').html() == '还没有讨论') {
                $(this).find('.commentsAndjoin span').html('参加讨论');
            } else {
                $(this).find('.commentsAndjoin span').html($(this).find('.comments-not-or-yes').html());
                $(this).find('.commentsAndjoin').attr('packUp', '1');
            }
            $(this).find('.comments-not-or-yes').css('display', '');
            $(this).find('.insertComment').css('display', 'none');
        }
    });
}

function getNewFirstEditor(n) {
    var NewGoodEditor = $('<div class="NewGoodEditor"><div class="NewEditor">' +
        '<div id="Newtoolbar" class="NewToolbar" style="width:100%;background: #fff;border-bottom: 1px solid #DDD;"></div>' +
        '<div id="NewUser_edit" class="EditorNew" style="width:100%;height:200px;display: flex;justify-content: center;' +
        'align-content: center;flex-wrap:wrap;background:#fff;"></div></div></div>');
    CodeSame($('.NewGoodEditor'));
    n.parent().parent().prepend(NewGoodEditor);
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
    NewEditor.customConfig.menus = ['undo'];
    NewEditor.customConfig.zIndex = 0;
    NewEditor.create();

    cancel();

    improveAreduceZIndex();

    //解决火狐不能自动去除占位符的问题
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器
    if (isFF) {
        $('.w-e-text p').eq(0).find('br').css({
            'display': 'none',
        });
    }

    $('.NewGoodEditor .publish_A').on('click', function () {
        var ContentNew = $('.NewGoodEditor .w-e-text').html().replace(/<(?!img).*?>/g, "");
        var addComments = $('<li class="countLiNum"><div class="TitleA"><a href="javascript:;" class="TitleAfterA">不合法的身份和第三方第三方电脑</a></div>' +
            '<div class="SocialTool"><a href="javascript:;" class="GuanFocus"><i class="iconfont">&#xe6e0;</i><span>关注</span></a>' +
            '<a href="javascript:;" class="ZanA"><i class="iconfont">&#xe60a;</i><span>赞</span><span class="Zan">2</span></a>' +
            '<a href="javascript:;" class="commentsAndjoin" packUp="1"><i class="iconfont">&#xe66f;</i><span>参与讨论</span></a>' +
            '<a href="javascript:;" class="DeleteProblemASpecial"><i class="iconfont">&#xe622;</i><span>删除问题</span></a><div class="comments-not-or-yes">还没有讨论</div><div class="Load-animated"><div class="spinner spinnerTwo"><span></span></div></div></div></li>');
        if (ContentNew == '') {
            alert('请您写一点内容再发送，当前状态不可发送');
        } else {
            $('.OneList li:first').after(addComments);
            $('.OneList li').eq(1).find('.TitleAfterA').html(ContentNew);
        }

        $('.NewGoodEditor .w-e-text').html('<p><br></p>');

        cancel();

        //关注
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

        //点赞
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

        // 参与讨论
        $('.commentsAndjoin').unbind('click').on('click', function () {
            var This = $(this);
            if ($(this).attr('packUp') == '1') {
                statistic_data();
                $(this).attr('packUp', '0');
                $(this).find('span').html('收起讨论');
                $(this).parent().find('.comments-not-or-yes').css('display', 'block');
                $(this).parent().find('.Load-animated').css('display', 'flex');
                setTimeout(function () {
                    This.parent().find('.Load-animated').css('display', '');
                    This.parent().parent().find('.insertComment').css('display', 'flex');
                }, 900);
                getNewEditor($(this), 0);

                $(this).parent().parent().data('statistic_data', '1');

                $(this).parent().parent().find('.publish_A').on('click', function () {
                    if (This.parent().parent().find('.comments-not-or-yes').html() == '还没有讨论') {
                        This.parent().parent().find('.comments-not-or-yes').html('1条讨论');
                    } else {
                        var Len = This.parent().parent().find('.insertComment').length;
                        This.parent().parent().find('.comments-not-or-yes').html('' + Len + '条讨论');
                    }
                });
            } else {
                $(this).attr('packUp', '1');
                if ($(this).parent().parent().find('.comments-not-or-yes').html() == '还没有讨论') {
                    $(this).find('span').html('参与讨论');
                } else {
                    $(this).find('span').html($(this).parent().parent().find('.comments-not-or-yes').html());
                }
                $(this).parent().find('.comments-not-or-yes').css('display', '');
                $(this).parent().parent().find('.insertComment').css('display', 'none');
                CodeSame($('.NewGoodEditor'));
            }
        });

        // 删除问题
        $('.DeleteProblemASpecial').unbind('click').on('click', function () {
            var This = $(this);
            layer.confirm('确定要删除此评论吗?', {
                btn: ['确定', '取消'], //按钮
                title: '提示',
            }, function (index) {
                This.parent().parent().remove();
                var Len = $('.OneList .countLiNum').length;
                if (Len > 0) {
                    $('.OneMiddle span').html('' + Len + '个问题');
                } else {
                    $('.OneMiddle span').html('添加问题');
                }
                layer.close(index);
            });
        }); //删除评论

        $('.TitleA a').on('click', function () {
            var index = $(this).html();
            var url = "AnswerQuestion.html?SendAContent=" + index;
            window.open(encodeURI(url));
        });

    });
}

function getNewEditor(n, m) {
    var NewGoodEditor = $('<div class="NewGoodEditor"><div class="NewEditor">' +
        '<div id="Newtoolbar" class="NewToolbar" style="width:100%;background: #fff;border-bottom: 1px solid #DDD;"></div>' +
        '<div id="NewUser_edit" class="EditorNew" style="width:100%;height:200px;display: flex;justify-content: center;' +
        'align-content: center;flex-wrap:wrap;background:#fff;"></div></div></div>');
    CodeSame($('.NewGoodEditor'));
    if (m) {
        n.parent().parent().find('.replaceLi').after(NewGoodEditor);
    } else {
        n.parent().parent().find('.SocialTool').after(NewGoodEditor);
    }
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
        var ContentNew = $('.NewGoodEditor .w-e-text').html().replace(/<(?!img).*?>/g, "");
        if (ContentNew == '') {
            alert('请您写一点内容再发送，当前状态不可发送');
        } else {
            $('.NewGoodEditor').after('<div class="insertComment"><p class="TwoSecond"></p><div><span class="oneSpanTWO"></span><span class="TwoSpanTWO"></span></div><div><a href="javascript:;" class="ADDCommit">评论</a><a href="javascript:;" class="DEl">删除</a></div></div>');
            $(this).parent().parent().parent().parent().find('.insertComment:first .TwoSecond').html(ContentNew);
            $(this).parent().parent().parent().parent().find('.insertComment:first .oneSpanTWO').html('' + Year + '/' + Month + '/' + Day + '');
            $(this).parent().parent().parent().parent().find('.insertComment:first .TwoSpanTWO').html('' + addZero(Hour) + ':' + addZero(Minute) + ':' + addZero(Second) + '');
        }

        $('.NewGoodEditor .w-e-text').html('<p><br></p>');

        cancel();

        //删除评论
        $('.TwoList .DEl').unbind('click').on('click', function () {
            var This = $(this);
            layer.confirm('确定要删除此评论吗?', {
                btn: ['确定', '取消'], //按钮
                title: '提示',
            }, function (index) {
                This.parent().parent().remove();
                var Len = $('.TwoList .insertComment').length;
                if (Len > 0) {
                    $('.TwoMiddle span').html('' + Len + '条评论');
                } else {
                    $('.TwoMiddle span').html('添加评论');
                }
                layer.close(index);
            });
        });

        //删除评论
        $('.OneList .DEl').unbind('click').on('click', function () {
            var There = $(this);
            layer.confirm('确定要删除此评论吗?', {
                btn: ['确定', '取消'], //按钮
                title: '提示',
            }, function (index) {
                var Len = There.parent().parent().parent().find('.insertComment').length - 1;
                if (Len > 0) {
                    There.parent().parent().parent().find('.comments-not-or-yes').html('' + Len + '条讨论');
                } else {
                    There.parent().parent().parent().find('.comments-not-or-yes').html('还没有讨论');
                }
                There.parent().parent().remove();
                layer.close(index);
            });
        });

        //添加评论
        $('.TwoList .ADDCommit').unbind('click').on('click', function () {
            statistic_data();
            getNewEditor($(this).parent(), 1);
        });

        $('.OneList .ADDCommit').unbind('click').on('click', function () {
            var That = $(this);
            getNewEditor($(this).parent(), 0);
            $(this).parent().parent().parent().find('.publish_A').on('click', function () {
                if (That.parent().parent().parent().find('.comments-not-or-yes').html() == '还没有讨论') {
                    That.parent().parent().parent().find('.comments-not-or-yes').html('1条讨论');
                } else {
                    var Len = That.parent().parent().parent().find('.insertComment').length;
                    That.parent().parent().parent().find('.comments-not-or-yes').html('' + Len + '条讨论');
                }
            });
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

var oLd = $('.middleTopic a').eq(0);
var oLdDiv = $('.NewDIvList').eq(0);
$('.middleTopic a').on('click', function () {
    var index = $('.middleTopic a').index(this); //判断元素在当前的位置是第几个元素
    oLdDiv.css({
        display: 'none',
    });
    oLdDiv = $('.NewDIvList').eq(index);
    $('.NewDIvList').eq(index).css({
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

//改变滚条的区域
$(document).on('click', '.commentsAndjoin,.cancel_A,.publish_A,.middleTopic a,.FirstAndJoin,.AndJoin,.ADDCommit,.DEl,.layui-layer-btn0', function () {
    $('body').getNiceScroll().resize();
});

//检测OneList内容的改变从而去判断问题的个数
$('.OneList').on('DOMNodeInserted', function () {
    var Len = $('.OneList .countLiNum').length;
    if (Len > 0) {
        $('.OneMiddle span').html('' + Len + '个问题');
    };
});

//检测TwoList内容的改变从而去判断评论的条数
$('.TwoList').on('DOMNodeInserted', function () {
    var Len = $('.TwoList .insertComment').length;
    if (Len > 0) {
        $('.TwoMiddle span').html('' + Len + '条评论');
    };
});

// 最佳评论
for (var i = 0; i < 5; i++) {
    var BestDiscuss = $('<div class="MainMessageImg ChangeImgMessage"><a href="javascript:;"><img src="../img/11.jpg"></a><div class="owner"><p>邹小强</p>' +
        '<p class="discuss-number">测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字</p>' +
        '</div></div>');
    $('.bottomRightTopic .Hold').append(BestDiscuss);
}

// 最佳评论的限定字数
// 限定100个字
$('.discuss-number').each(function () {
    var maxwidth = 100;
    if ($(this).text().length > maxwidth) {
        $(this).text($(this).text().substring(0, maxwidth));
        $(this).html($(this).html() + "...");
    }
});

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
            } else {
                $('.title').css('z-index', '');
                clearInterval(timer);
            }
        }, 0);
    });
}

// 加载更多
var JudgeAnimate = true;
$('.loading-more a').on('click', function () {
    if (JudgeAnimate) {
        JudgeAnimate = false;
        var animatedLoading = $('<div class="Load-animated" style="display:flex;padding:0 0 35px 0;"><div class="spinner spinnerTwo"><span></span></div></div>');
        $(this).parent().before(animatedLoading);
        setTimeout(function () {
            animatedLoading.remove();
            JudgeAnimate = true;
        }, 900);
    }
});