var Video = $('video');
var Play_Stop = $('.control_play_pasue'); //左下角的按钮
var Play = $('.control_play_pasue .iconfont');
var Play_button = $('.play_button'); //中间的按钮
var Play_b = $('.play_button .iconfont');
var currentTime = $('.timebar .currentTime'); //当前时间
var duration = $('.timebar .duration'); //总时间
var progress = $('.timebar .progress-bar'); //进度条
var volumebar = $('.volumeBar .volumewrap').find('.progress-bar');
var html5_player = document.getElementById('html5_player');
var onOff = true;

//添加一个Chrome的静音提示框
var Chrome_alert_box = $('<div class="chrome_box"><span>提示:</span><p></p><a href="javascript:;" class="know_yes">关闭静音</a><a href="javascript:;" class="know_not">知道不开启</a></div>');

function BrowserType() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isEdge = userAgent.indexOf('Edge') > -1; //判断是否IE的Edge浏览器
	var isFF = userAgent.indexOf('Firefox') > -1; //判断是否Firefox浏览器
	var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
	if (isChrome && !isEdge) {
		$('#main,#studioContainer').append(Chrome_alert_box);
		$('.chrome_box').find("p").html("谷歌浏览器默认开启静音");
		$('.close_btn_p').css({
			opacity: 1,
		});
	}
	if (isChrome && isEdge) {
		html5_player.muted = false;
		Video[0].volume = 0.4; //初始化音量
		$('.volumewrap .progress-bar').css('height', Video[0].volume * 100 + '%');
	}
	if (isFF) {
		html5_player.muted = false;
		Video[0].volume = 0.4; //初始化音量
		$('.volumewrap .progress-bar').css('height', Video[0].volume * 100 + '%');
	}

	if (!isChrome && !isEdge && !isFF) {
		$('#main').append(Chrome_alert_box);
		$('.chrome_box').find("p").html("IE浏览器默认开启静音");
		$('.close_btn_p').css({
			opacity: 1,
		});
	} //兼容IE浏览器
}
BrowserType();

$(function () {
	$('.chrome_box').css({
		opacity: 1,
		'z-index': "10",
		'transform': 'translateY(0px) perspective(600px) rotateX(0deg) translateX(-50%)',
	});

	$('.know_yes').on('click', function () {
		html5_player.muted = false;
		Video[0].volume = 0.4; //初始化音量
		$('.sound_btn .iconfont').html('&#xe62f;'); //声音符号
		$('.volumewrap .progress-bar').css('height', Video[0].volume * 100 + '%');
		$('.chrome_box').css({
			opacity: 0,
			'transform': 'translateX(-50%) translateY(-20px) perspective(600px) rotateX(10deg)',
		});
		setTimeout(function () {
			$('.chrome_box').css({
				"z-index": "",
			});
		}, 500);
		onOff = false;
		$('.close_btn').html("开启静音");
	});

	$('.know_not').on('click', function () {
		$('.chrome_box').css({
			opacity: 0,
			'transform': 'translateX(-50%) translateY(-20px) perspective(600px) rotateX(10deg)',
		});
		setTimeout(function () {
			$('.chrome_box').css({
				"z-index": "",
			});
		}, 500);
	});

	$('.close_btn').on('click', function () {
		if (onOff) {
			onOff = false;
			html5_player.muted = false;
			Video[0].volume = 0.4; //初始化音量
			$('.sound_btn .iconfont').html('&#xe62f;'); //声音符号
			$('.volumewrap .progress-bar').css('height', Video[0].volume * 100 + '%');
			$('.close_btn').html("开启静音");
		} else {
			onOff = true;
			html5_player.muted = true;
			Video[0].volume = 0; //初始化音量
			$('.sound_btn .iconfont').html('&#xe752'); //静音符号
			$('.volumewrap .progress-bar').css('height', Video[0].volume * 100 + '%');
			$('.close_btn').html("关闭静音");
		}
	});
});

if (html5_player.muted) {
	Video[0].volume = 0; //初始化音量
	$('.sound_btn .iconfont').html('&#xe752;'); //静音符号
	$('.volumewrap .progress-bar').css('height', Video[0].volume * 100 + '%');
}

//页面开始控制按钮——谷歌默认静音
playControl();

//第一个的样式
$('.live_list div').eq(0).addClass('live_two list live_after');

$('.contain_video').hover(
	function () {
		$('.control_bar').addClass('hover_control');
	},
	function () {
		$('.control_bar').removeClass('hover_control');
	}
);

//hover后白色消失
$('.live_list div').hover(
	function () {
		$(this).addClass('live_hover');
	},
	function () {
		$(this).removeClass('live_hover');
	}
);

$('.live_list div').click(function () {
	$('.live_list div').removeClass('live_after live_two list live_hover');
	$(this).addClass('live_after live_two list');
	$('.contain_video video').attr('src', $(this).data('url'));
	playControl();
});

Play_Stop.on('click', function () {
	playControl();
});

Play_button.on('click', function () {
	playControl();
	Play_button.fadeOut();
});

Video.on('click', function () {
	playControl();
});

//播放，暂停的控制
function playControl() {
	if (Video[0].paused) {
		Play.html('&#xe663;');
		Play_b.html('&#xe663;').fadeOut();
		Play_b.css({
			top: 3,
			left: -1
		});
		Video[0].play();
		Play_button.fadeOut();
	} else {
		play_fade();
		Play_button.fadeIn();
		Video[0].pause();
	}
}

//渐变消失
function play_fade() {
	Play.html('&#xe618');
	Play_b.html('&#xe618;').fadeIn();
	Play_b.css({
		top: 0,
		left: 5
	});
	Video[0].pause();
}

//video加载运行
Video.on('loadedmetadata', function () {
	duration.text(formatSeconds(Video[0].duration));
});

Video.on('timeupdate', function () {
	currentTime.text(formatSeconds(Video[0].currentTime));
	progress.css('width', 100 * Video[0].currentTime / Video[0].duration + '%');
	if (Video[0].currentTime == Video[0].duration) {
		play_fade();
		Play_button.fadeIn();
	}
});

//让空格键在登录和注册界面点击的时候不会出发video播放的事件
var Judge = true;

$('#login_a,#register_a,.search_special').on('click', function () {
	Judge = false;
});
//让空格键在登录和注册界面点击的时候不会出发video播放的事件

//键盘按键控制
$(window).keyup(function (event) {
	if (!document.getElementsByClassName("layui-layer-setwin")[0]) {
		Judge = true;
	} //让空格键在登录和注册界面点击的时候不会出发video播放的事件
	event = event || window.event;
	if (event.keyCode == 32 && Judge) {
		playControl();
		$('.volumeBar').hide();
	} //空格
	if (event.keyCode == 27) {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozExitFullScreen) {
			document.mozExitFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	} //ESC按键
	event.preventDefault(); //阻止浏览器的默认行为
});

$(window).keydown(function (event) {
	event = event || window.event;
	if (event.keyCode == 38) {
		$('.volumeBar').css({
			display: 'block'
		});
		html5_player.muted = false;
		volumeControl(event);
	} //按方向上键，音量加
	if (event.keyCode == 40) {
		$('.volumeBar').css({
			display: 'block'
		});
		html5_player.muted = false;
		volumeControl(event);
	} //按方向下键，音量减
	if (event.altKey && event.keyCode == 13) {
		Full_screen();
	} //按alt+enter快捷键进入全屏--可选
	//event.preventDefault();
	//以上这句代码可以兼容IE浏览器的空格键
});

//音量
$('.sound_btn').on('click', function (e) {
	html5_player.muted = false;
	e = e || window.event;
	$('.volumeBar').toggle();
	e.stopPropagation();
});
$('.volumeBar').on('click mousewheel DOMMouseScroll', function (e) {
	html5_player.muted = false;
	e = e || window.event;
	volumeControl(e);
	e.stopPropagation();
	return false;
}); //火狐

//点击其他的dom，音量控制条消失
$(document).click(function () {
	$('.volumeBar').hide();
});

//音量控制
function volumeControl(e) {
	e = e || window.event;
	var eventype = e.type;
	var delta =
		(e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
		(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
	var positions = 0;
	var percentage = 0;
	if (eventype == 'click') {
		positions = volumebar.offset().top - e.pageY;
		percentage = 100 * (positions + volumebar.height()) / $('.volumeBar .volumewrap').height();
	} else if (eventype == 'mousewheel' || eventype == 'DOMMouseScroll') {
		percentage = 100 * (volumebar.height() + delta) / $('.volumeBar .volumewrap').height();
	} else if (e.keyCode == 38) {
		percentage = 100 * (volumebar.height() + 10) / $('.volumeBar .volumewrap').height();
	} else if (e.keyCode == 40) {
		percentage = 100 * (volumebar.height() - 10) / $('.volumeBar .volumewrap').height();
	}
	if (percentage < 0) {
		percentage = 0;
		$('.sound_btn .iconfont').html('&#xe752;');
	}
	if (percentage > 50) {
		$('.sound_btn .iconfont').html('&#xe753;');
	}
	if (percentage > 0 && percentage <= 50) {
		$('.sound_btn .iconfont').html('&#xe62f;');
	}
	if (percentage >= 100) {
		percentage = 100;
	}
	$('.volumewrap .progress-bar').css('height', percentage + '%');
	Video[0].volume = percentage / 100;
	e.stopPropagation();
	e.preventDefault();
}

//秒转时间
function formatSeconds(value) {
	value = parseInt(value);
	var time;
	if (value > -1) {
		hour = Math.floor(value / 3600);
		min = Math.floor(value / 60) % 60;
		sec = value % 60;
		day = parseInt(hour / 24);
		if (day > 0) {
			hour = hour - 24 * day;
			time = day + 'day ' + hour + ':';
		} else time = hour + ':';
		if (min < 10) {
			time += '0';
		}
		time += min + ':';
		if (sec < 10) {
			time += '0';
		}
		time += sec;
	}
	return time;
}

$('.screen_btn').on('click', function () {
	Full_screen();
}); //点击进入全屏

function Full_screen() {
	if (Video[0].requestFullscreen) {
		Video[0].requestFullscreen();
	} else if (Video[0].mozRequestFullScreen) {
		Video[0].mozRequestFullScreen();
	} else if (Video[0].webkitRequestFullscreen) {
		Video[0].webkitRequestFullscreen();
	} else if (Video[0].msRequestFullscreen) {
		Video[0].msRequestFullscreen();
	}
} //全屏