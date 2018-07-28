var DataTitle = $('.bottom_message').attr('data-title');
var alertTitle = $('<span class="alertSpan"></span>');
var onOff = true;
var Judge = true;
var titleImg = $('#ContainEditor img')
    .eq(0)
    .attr('src');
$('#ContainEditor h1')
    .eq(0)
    .css({
        display: 'none',
    });
var getNodeName = document.getElementById('ContainEditor').firstElementChild
    .nodeName;
var addContent = $('<' + getNodeName + '></' + getNodeName + '>');
addContent.insertBefore($('#userInformation'));
var getFirstContent = document.getElementById('ContainEditor').firstElementChild
    .innerHTML;
addContent.html(getFirstContent);

var ListLan = $('.circle').attr('list-title');

$('.timeBar').hover(
    function () {
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
)

$('.circle').hover(
    function () {
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
        $('.listTop')
            .eq(0)
            .css({
                top: '50%',
                transform: 'translate(-50%,-50%) rotateZ(-45deg)',
            });
        $('.listTop')
            .eq(2)
            .css({
                top: '50%',
                transform: 'translate(-50%,-50%) rotateZ(45deg)',
            });
        $('.listTop')
            .eq(1)
            .css({
                display: 'none',
            });
        $('.social-share').css({
            display: 'block',
            height: '600px',
        });
    } else {
        Judge = true;
        $('.listTop')
            .eq(0)
            .css({
                top: '',
                transform: '',
            });
        $('.listTop')
            .eq(2)
            .css({
                top: '',
                transform: '',
            });
        $('.listTop')
            .eq(1)
            .css({
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

//分享菜单移动
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