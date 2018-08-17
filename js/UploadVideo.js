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
    if ($('.FileLoadLabel').attr('againUpload') == '1' && str !== "") {
        $('.Uploadprogress').remove();
    }
    var Uploadprogress = $('<div class="Uploadprogress"><div class="leftProgress"><span class="videoName"></span>' +
        '<div class="barProgress"><div class="videoProgressBar" style="width:0%"></div></div></div><div class="rightProgress">' +
        '<span>已上传</span><h2>0%</h2></div></div>');
    if (str !== "") {
        var arr = str.split("\\");
        var file_name = arr[arr.length - 1];
        $('.previewDiv').before(Uploadprogress);
        $('.videoName').text(file_name);

        // 模拟视频上传
        var Timer = null;
        var num = 0;
        Timer = setInterval(function () {
            num++;
            $('.rightProgress h2').html('' + num + '%');
            $('.videoProgressBar').css('width', '' + num + '%');
            if (num >= 100) {
                clearInterval(Timer);
                setTimeout(function () {
                    $('.rightProgress').html('上传成功');
                }, 500);
                $('.FileLoadLabel span').html('替换视频');
                $('.FileLoadLabel').attr('againUpload', '1');
                $(this).val('');
            }
        }, 300);
    }
});

//选择标签
var OLdLabel = $('.rightLabel a').eq(0);
$('.rightLabel a').on('click', function () {
    OLdLabel.css({
        'background': '',
        'color': '',
    });
    OLdLabel = $(this);
    $(this).css({
        'background': '#363636',
        'color': ' #EDEDED',
    });
});

$('.release a').on('click', function () {
    $('.ProgressFixed').css('display', 'block');
    CircleProgress('.ProgressFixed', '#83FCD8', 6, .5, '45px', '150','.ProgressFixed'); //进度条
});