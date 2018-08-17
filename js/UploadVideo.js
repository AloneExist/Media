//窗口变化时，图片裁剪框的变化
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

//弹出图片裁剪框
$('#replaceImg').on('click', function () {
    if ($('.FileLoadLabel').attr('againupload') == '1') {
        $('.tailoring-container').toggle();
    } else {
        alert('请先上传视频');
    }
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
    aspectRatio: 2 / 1,
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
        $('.previewDiv p').remove();
        $('#CoverPreviewImg').css({
            'width': '100%',
            'height': '100%',
        });
        $('#CoverPreviewImg').prop('src', base64url); //显示为图片的形式
        //关闭裁剪框
        closeTailor();
    }
});

//关闭裁剪框
function closeTailor() {
    $('.tailoring-container').toggle();
}

$('#fileLoad').change(function () {
    var str = $(this).val();

    var Uploadprogress = $('<div class="Uploadprogress"><div class="leftProgress"><span class="videoName"></span>' +
        '</div><div class="rightProgress"><a href="javascript:;" title="删除视频"><i class="iconfont">&#xe61a;</i></a></div></div>');

    if (str !== "") {
        var arr = str.split("\\");
        var file_name = arr[arr.length - 1]; //文件名
        var index = str.indexOf(".");
        var indexSubString = str.substring(index);
        //判断是否是视频
        if (indexSubString != '.mp4' && indexSubString != '.rmvb' && indexSubString != '.avi' && indexSubString != '.ts') {
            alert('不是视频文件，请重新选择');
            $(this).val(''); //清空file的value，为下一次做准备
        } else {
            $('.previewDiv').before(Uploadprogress);
            $('.videoName').text(file_name);
            //点击删除视频
            $('.rightProgress a').on('click', function () {
                $('.Uploadprogress').remove();
                $('.FileLoadLabel').attr('againUpload', '0');
            });
            $('.FileLoadLabel').attr('againUpload', '1');
            $(this).val('');
        }
    }
});

//选择标签
var OLdLabel = $('.rightLabel a').eq(0);
$('.rightLabel a').on('click', function () {
    if ($(this).attr('data-a') == '1') {
        $(this).css({
            'background': '',
            'color': '',
        });
        $(this).attr('data-a', '0'); //用来判断是否选择了标签
    } else if ($(this).attr('data-a') == '0') {
        OLdLabel.css({
            'background': '',
            'color': '',
        });
        OLdLabel.attr('data-a', '0'); //用来判断是否选择了标签
        OLdLabel = $(this);
        $(this).css({
            'background': '#363636',
            'color': ' #EDEDED',
        });
        $('.rightLabel').data('rightLabel', $(this).html()); //存储本次的数据，与下一次比较
        $(this).attr('data-a', '1'); //用来判断是否选择了标签
    }
});

var onOff = false;

//提交文件
$('.release a').on('click', function () {
    //拿上一次的数据和本次的数据对比，如果都是相同的，则不上传，反之，则上传
    if ($('#main').data('videoName') != undefined && $('#main').data('videoName')) {
        if ($('#main').data('videoName') == $('.videoName').html() && $('#main').data('CoverPreviewImg') == $('#CoverPreviewImg').attr('src') && $('#main').data('rightLabel') == $('.rightLabel').data('rightLabel') && $('#main').data('VideoTitle') == $('.VideoTitle input').val()) {
            alert('文件已上传!!!');
            return false;
        }
    }
    // 检测是否有选择标签
    $('.rightLabel a').each(function () {
        if ($(this).attr('data-a') == '1') {
            onOff = true;
        }
    });
    // 检测是否有封面
    if ($('#CoverPreviewImg').attr('src') != '') {
        if (onOff) { //检测标签
            if ($('.VideoTitle input').val() != '') { //检测标题
                $('.ProgressFixed').css({
                    'display': 'block',
                    'opacity': '1',
                });
                CircleProgress('.ProgressFixed', '#83FCD8', 6, .5, '45px', '150', '.ProgressFixed'); //进度条
                //存储数据带#main，查看是否需要上传文件
                $('#main').data({
                    'videoName': $('.videoName').html(),
                    'CoverPreviewImg': $('#CoverPreviewImg').attr('src'),
                    'rightLabel': $('.rightLabel').data('rightLabel'),
                    'VideoTitle': $('.VideoTitle input').val(),
                })
            } else {
                alert('请输入视频标题');
            }
        } else {
            alert('请选择一个标签');
        }
    } else {
        alert('请先编辑封面');
    }
});


//环形进度条
function CircleProgress(n, color, width, speed, fontSize, radiusSize, cover) {
    //移除多余的环形进度条
    $('.CanvasNumUploadVideo').remove();
    var CircleDraw = $('<div class="CanvasNumUploadVideo"><span class="NumTopCanvasUploadVideo">0%</span>' +
        '<canvas id="DrawProgressUploadVideo"></canvas><span class="WordProgress">文件正在上传，请稍等 ...</span></div>');
    $(n).append(CircleDraw);
    var previewDivWidth = $('.CanvasNumUploadVideo').outerWidth();
    var previewDivHeight = $('.CanvasNumUploadVideo').outerHeight();
    $('#DrawProgressUploadVideo').attr({
        'width': previewDivWidth,
        'height': previewDivHeight,
    });
    //绘制环形进度条
    $('#DrawProgressUploadVideo').drawArc({ //绘制环形
        layer: true, //使动画可以实现
        name: 'DrawProgress', //动画的名字
        strokeStyle: color, //进度条的颜色
        strokeWidth: width, //进度条的宽度
        rounded: true, //进度条为圆角
        x: previewDivWidth / 2, //进度条的x轴坐标
        y: previewDivHeight / 2, //进度条的y轴坐标
        radius: radiusSize, //进度条的半径
        start: 0, //开始的角度
        end: 0, //结束的角度
    });

    //模拟上传
    var TimerStamp = null;
    var Result = 0;
    TimerStamp = setInterval(function () {
        Result += speed;
        //改变环形
        $('#DrawProgressUploadVideo').animateLayer('DrawProgress', {
            end: Result,
        }, 0);
        //绘制百分比
        $('.NumTopCanvasUploadVideo').css('font-size', fontSize);
        $('.NumTopCanvasUploadVideo').html('' + parseInt((Result / 360) * 100) + '%');
        if (Result >= 360) {
            clearInterval(TimerStamp);
            $('.WordProgress').html('发布成功');
            $(cover).on('click', function () {
                $(this).css('opacity', '0');
                var This = $(this);
                setTimeout(function () {
                    This.css('display', 'none');
                }, 500);
            });
        }
    }, 0);
}