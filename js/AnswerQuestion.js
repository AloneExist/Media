var onOff = true;
$('.leftColumns .FocusQuestion').on('click', function () {
    if (onOff) {
        onOff = false;
        $(this).html('已关注');
        $(this).css({
            'background': '#C1194E',
        });
        Focus('无人关注', '1人关注', 1);
    } else {
        onOff = true;
        $(this).html('关注问题');
        $(this).css({
            'background': '',
        });
        Focus('1人关注', '无人关注', 0);
    }
});

function Focus(n, m, l) {
    if ($('.OneFirstFocus').html() == n) {
        $('.OneFirstFocus').html(m);
    } else {
        var Num = parseInt($('.OneFirstFocus').html());
        if (l) {
            Num++;
            $('.OneFirstFocus').html('' + Num + '人关注');
        } else {
            Num--;
            $('.OneFirstFocus').html('' + Num + '人关注');
        }
    }
}

$('.articleContainer').append('<div class="Select_Much"></div>');

var SelectDiv = $('.Select_Much');
for (var i = 0; i < 9; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.append(AddDiv);
};

var ImgArray = new Array(1);
ImgArray[0] = "https://upload-images.jianshu.io/upload_images/10560804-8aa981c5b24fc5ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";

SelectDiv.find("img").attr("src", ImgArray[0]);
SelectDiv.find(".under_line").html("五一，差点只剩半条命！");
SelectDiv.find(".bottom_first_a").html("5312Ana");
SelectDiv.find(".bottom_two_a").append("<b>20</b>");
SelectDiv.find(".bottom_first_span").append("<b>19</b>");
SelectDiv.find(".bottom_two_span").append("<b>1</b>");
SelectDiv.find("p").html("原本打算五一跟朋友跑完半程马拉松后就去北海拍海景，然而不幸的是，她准备跑到终点时突然晕倒了，虽然我没体验过这种晕倒的感觉，但可以想象出这种从鬼门关出来人的有多不易。");

CutWordColumns('.draw_text', 72);
CutWordColumns('.wordP', 60);

function CutWordColumns(n, num) {
    $(n).each(function () {
        var maxwidth = num;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "...");
        };
    });
}

$('#editor-word').on('click', function () {
    $('.editor-question-word').css('display', 'flex');
    $('#editor-question-word-textarea').focus();
});

$('.confirm-btn').on('click', function () {
    var Del_space_newline = $('#editor-question-word-textarea').val().replace(/\ +/g, "").replace(/[\r\n]/g, "");
    $('.editor-question-word').css('display', '');
    $('.topImgColumns .wordP').html(Del_space_newline);
    CutWordColumns('.wordP', 60);
    $('#editor-question-word-textarea').val('');
});

//获取地址栏传递的信息
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}

//获得上一个页面传递的值
var addRess = getUrlParam('SendAContent');
$('.leftColumnsH1').html(addRess);

//记录文章的篇数
var NumLength = $('.other_module').length;
if (NumLength > 0) {
    $('.TwoCollectionArticle').html('收集了' + NumLength + '篇文章');
}

//编辑封面
$('#replaceImg').on('click', function () {
    $('.tailoring-container').toggle();
});

//图像上传
function selectImg(file) {
    if (!file.files || !file.files[0]) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (evt) {
        var replaceSrc = evt.target.result;
        //更换cropper的图片
        $('#tailoringImg').cropper('replace', replaceSrc, false); //默认false，适应高度，不失真
    };
    reader.readAsDataURL(file.files[0]);
}

//cropper图片裁剪
$('#tailoringImg').cropper({
    viewMode: 1,
    aspectRatio: 4 / 3,
    preview: '.previewImg', //预览视图
    guides: false, //裁剪框的虚线(九宫格)
    autoCropArea: 0.5, //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
    movable: false, //是否允许移动图片
    dragCrop: true, //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
    movable: true, //是否允许移动剪裁框
    resizable: true, //是否允许改变裁剪框的大小
    zoomable: false, //是否允许缩放图片大小
    mouseWheelZoom: false, //是否允许通过鼠标滚轮来缩放图片
    touchDragZoom: true, //是否允许通过触摸移动来缩放图片
    rotatable: true, //是否允许旋转图片
    crop: function (e) {
        // 输出结果数据裁剪图像。
    },
});

//旋转
$('.cropper-rotate-btn').on('click', function () {
    $('#tailoringImg').cropper('rotate', 45);
});

//复位
$('.cropper-reset-btn').on('click', function () {
    $('#tailoringImg').cropper('reset');
});

//换向
var flagX = true;
$('.cropper-scaleX-btn').on('click', function () {
    if (flagX) {
        $('#tailoringImg').cropper('scaleX', -1);
        flagX = false;
    } else {
        $('#tailoringImg').cropper('scaleX', 1);
        flagX = true;
    }
    flagX != flagX;
});

//裁剪后的处理
$('#sureCut').on('click', function () {
    if ($('#tailoringImg').attr('src') == null) {
        return false;
    } else {
        var cas = $('#tailoringImg').cropper('getCroppedCanvas'); //获取被裁剪后的canvas
        var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
        $('#finalImg').prop('src', base64url); //显示为图片的形式
        //关闭裁剪框
        closeTailor();
        var animatedLoading = $('<div class="Load-animated"><div class="spinner spinnerTwo"><span></span></div></div>');
        $('.rightColumns a').append(animatedLoading);
        setTimeout(function () {
            animatedLoading.remove();
        }, 2000);
    }
});

//关闭裁剪框
function closeTailor() {
    $('.tailoring-container').toggle();
}

//窗口变化时发生
(window.onresize = function () {
    var win_height = $(window).height();
    var win_width = $(window).width();
    if (win_width <= 768) {
        $('.tailoring-content').css({
            top: (win_height - $('.tailoring-content').outerHeight()) / 2,
            left: 0,
        });
    } else {
        $('.tailoring-content').css({
            top: (win_height - $('.tailoring-content').outerHeight()) / 2,
            left: (win_width - $('.tailoring-content').outerWidth()) / 2,
        });
    }
})();