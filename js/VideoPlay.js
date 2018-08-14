//第一个的样式
$('.live_list div').eq(0).addClass('live_two list live_after');

var VideoInterface = $('#VideoInterface');

//hover后白色消失
$('.live_list div').hover(function () {
	$(this).addClass('live_hover')
}, function () {
	$(this).removeClass('live_hover');
});

$('.live_list div').click(function () {
	$('.live_list div').removeClass('live_after live_two list live_hover');
	$(this).addClass('live_after live_two list');
	dp.switchVideo({
		url: $(this).data('url'),
	}); //切换视频
	dp.toggle(); //切换播放和暂停
});