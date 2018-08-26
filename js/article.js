var DataTitle = $('.bottom_message').attr('data-title');
var alertTitle = $('<span class="alertSpan"></span>');
var onOff = true;
var Judge = true;
var titleImg = $('#ContainEditor img').eq(0).attr('src');
var getFirstContent = $('.w-e-text h1').eq(0).html();

var ListLan = $('.circle').attr('list-title');

$('.timeBar').hover(function () {
    $('.bottom_message').append(alertTitle);
    $('.alertSpan').html(DataTitle);
    setTimeout(function () {
      $('.alertSpan').css({
        opacity: '1',
      });
    }, 10);
  },
  function () {
    $('.alertSpan').css({
      opacity: '',
    });
    setTimeout(function () {
      alertTitle.remove();
    }, 300);
  }
);

$('.circle').hover(function () {
    $('.ContentShare').append(alertTitle);
    $('.alertSpan').html(ListLan);
    setTimeout(function () {
      $('.alertSpan').css({
        opacity: '1',
      });
    }, 10);
  },
  function () {
    $('.alertSpan').css({
      opacity: '',
    });
    setTimeout(function () {
      alertTitle.remove();
    }, 300);
  }
);

$('.focus').on('click', function () {
  if (onOff) {
    onOff = false;
    $('.focus').css({
      background: '#869B74',
    });
    $('.focus .iconfont').html('&#xe642;');
    $('.focus span').html('已关注');
  } else {
    onOff = true;
    $('.focus').css({
      background: '',
    });
    $('.focus .iconfont').html('&#xe604;');
    $('.focus span').html('关注');
  }
});

var UrlAddress = 'https://music.163.com';

//配置share.js的参数
socialShare('.social-share', {
  title: getFirstContent, //分享的标题
  image: titleImg, //分享的图片  一般是正文的第一张图片
  url: UrlAddress, //填写当前页面的地址     window.location.href      分享的地址
  description: getFirstContent, //分享到额描述
});

$('.circle').on('click', function () {
  if (Judge) {
    Judge = false;
    $('.listTop').eq(0).css({
      top: '50%',
      transform: 'translate(-50%,-50%) rotateZ(-45deg)',
    });
    $('.listTop').eq(2).css({
      top: '50%',
      transform: 'translate(-50%,-50%) rotateZ(45deg)',
    });
    $('.listTop').eq(1).css({
      display: 'none',
    });
    $('.social-share').css({
      display: 'block',
      height: '600px',
    });
  } else {
    Judge = true;
    $('.listTop').eq(0).css({
      top: '',
      transform: '',
    });
    $('.listTop').eq(2).css({
      top: '',
      transform: '',
    });
    $('.listTop').eq(1).css({
      display: '',
    });
    $('.social-share').css({
      height: '',
    });
    setTimeout(function () {
      $('.social-share').css({
        display: '',
      });
    }, 200);
  }
});

//分享菜单可移动
var ContentShare = document.getElementsByClassName('ContentShare')[0];
var C_x = 0;
var C_y = 0;
var C_l = 0;
var C_t = 0;
var isDown = false;
//鼠标按下事件
ContentShare.onmousedown = function (e) {
  //获取x坐标和y坐标
  C_x = e.clientX;
  C_y = e.clientY;

  //获取左部和顶部的偏移量
  C_l = ContentShare.offsetLeft;
  C_t = ContentShare.offsetTop;
  //开关打开
  isDown = true;
};
//鼠标移动
window.onmousemove = function (e) {
  if (isDown == false) {
    return;
  }
  //获取x和y
  var nx = e.clientX;
  var ny = e.clientY;
  //计算移动后的左偏移量和顶部的偏移量
  var nl = nx - (C_x - C_l);
  var nt = ny - (C_y - C_t);

  if (nt >= 150) {
    ContentShare.style.left = nl + 'px';
    ContentShare.style.top = nt + 'px';
  }

  $('body').css({
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  });
};
//鼠标抬起事件
ContentShare.onmouseup = function () {
  //开关关闭
  isDown = false;

  $('body').css({
    '-moz-user-select': '',
    '-webkit-user-select': '',
    '-ms-user-select': '',
    'user-select': '',
  });
};

//创建一个新的编辑器
var E = window.wangEditor;
var editor = new E('#top_list', '#bottom_content');
editor.customConfig.menus = ['bold', 'italic', 'link', 'emoticon'];
editor.customConfig.zIndex = 0;
editor.create();

$('.publish_A').html('<i class="iconfont">&#xe815;</i>发送');

$('#QRCode').qrcode({
  width: 105,
  height: 105,
  text: UrlAddress,
});

var initNum = 100;
$('.numCount').html(initNum);
var isGood = true;
var isBad = true;
$('.TwoPart a').eq(0).on('click', function () {
  if (isGood) {
    isGood = false;
    Change(1, $(this), 1);
  } else {
    isGood = true;
    Change(0, $(this), 1);
  }
});

$('.TwoPart a').eq(1).on('click', function () {
  if (isBad) {
    isBad = false;
    Change(1, $(this), 0);
  } else {
    isBad = true;
    Change(0, $(this), 0);
  }
});

function Change(n, m, o) {
  if (n) {
    if (o) {
      initNum++;
    }
    m.css({
      color: '#FF9500',
    });
  } else {
    if (o) {
      initNum--;
    }
    m.css({
      color: '',
    });
  }
  $('.numCount').html(initNum);
}

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
        $('.ContentShare').css('z-index', 'initial');
        $('.title').css('z-index', 'initial');
        $('.toTop').css('z-index', '-1');
        $('.toolbar').css('z-index', '-1');
      } else {
        $('.ContentShare').css('z-index', '');
        $('.title').css('z-index', '');
        $('.toTop').css('z-index', '');
        $('.toolbar').css('z-index', '');
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

$(document).on('click', '.toolBar_Btn a,.NewEditor .publish_A,.layui-layer-btn0', function () {
  $('body').getNiceScroll().resize();
});
//重载滚动条