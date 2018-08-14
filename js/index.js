$(function () {
    //10个推荐文章
    $('.other_module').eq(0).find("img").attr("src", Img_Array[0]);
    $('.left_part').eq(0).find(".under_line").html("五一，差点只剩半条命！");
    $('.bottom_meta a').eq(0).html("5312Ana");
    $('.bottom_meta a').eq(1).append("<b>20</b>");
    $('.bottom_meta span').eq(0).append("<b>19</b>");
    $('.bottom_meta span').eq(1).append("<b>1</b>");
    $(".left_part").eq(0).find("p").html("原本打算五一跟朋友跑完半程马拉松后就去北海拍海景，然而不幸的是，她准备跑到终点时突然晕倒了，虽然我没体验过这种晕倒的感觉，但可以想象出这种从鬼门关出来人的有多不易。");

    $('.other_module').eq(1).find("img").attr("src", Img_Array[1]);
    $('.left_part').eq(1).find(".under_line").html("减重6.6斤，我只用了28天");
    $('.bottom_meta a').eq(2).html("芊芊妈成长札记");
    $('.bottom_meta a').eq(3).append("<b>13</b>");
    $('.bottom_meta span').eq(2).append("<b>19</b>");
    $('.bottom_meta span').eq(3).append("<b>1</b>");
    $(".left_part").eq(1).find("p").html("缘起 生下二宝芊芊之后，我的体重一直在51kg~53kg徘徊，按照《中国居民膳食指南2016》判断健康体重的体质指数（BMI）=体重/身高的平方计算，我的BMI在21.5~22.34之间，属于健康体重的范围。但是由于产后基本没做运动，整个人看起来肉肉的，特别是背部、手臂，让本来海拔就不高的我显得特别粗壮，穿衣服也不好看，有时候自己都嫌弃自己，整个人也没自信，我老公一句开玩笑的话：“不认识你的人从后面看还以为你是男士”更是戳中了我的心。");

    $('.other_module').eq(2).find("img").attr("src", Img_Array[2]);
    $('.left_part').eq(2).find(".under_line").html("村上春树谈写作和跑步");
    $('.bottom_meta a').eq(4).html("阅悦生");
    $('.bottom_meta a').eq(5).append("<b>16</b>");
    $('.bottom_meta span').eq(4).append("<b>56</b>");
    $('.bottom_meta span').eq(5).append("<b>0</b>");
    $(".left_part").eq(2).find("p").html("01 前两天在网上买了村上春树的《当我谈跑步时我谈些什么》，今天就送到家里了。等忙完其他一切，空闲下来就拿到手上看。大概看了有两个小时吧，还没看完。到楼下跑完步之后，把前面的读书笔记整理了一下，总结出来。");

    $('.other_module').eq(3).find("img").attr("src", Img_Array[3]);
    $('.left_part').eq(3).find(".under_line").html("健身 | 为什么你瘦不下来？");
    $('.bottom_meta a').eq(6).html("黄小妞儿");
    $('.bottom_meta a').eq(7).append("<b>2</b>");
    $('.bottom_meta span').eq(6).append("<b>17</b>");
    $('.bottom_meta span').eq(7).append("<b>0</b>");
    $(".left_part").eq(3).find("p").html("文/黄小妞 距离上次我写的《从138斤减到110斤，我经历了什么？》已经有一个多月了，这期间我收到了太多的留言和评论。今天我整理了下，总结出了大家瘦不下来的6大原因，同时给出了答案，这些肯定会对你帮助很大。");

    $('.other_module').eq(4).find("img").attr("src", Img_Array[4]);
    $('.left_part').eq(4).find(".under_line").html("减肥的具体方法");
    $('.bottom_meta a').eq(8).html("李翔_数字游牧读书会");
    $('.bottom_meta a').eq(9).append("<b>2</b>");
    $('.bottom_meta span').eq(8).append("<b>18</b>");
    $('.bottom_meta span').eq(9).append("<b>0</b>");
    $(".left_part").eq(4).find("p").html("过去我认为减肥就是少吃多动，这两天仔细研究后发现，我错了。少吃在减肥初期确实会让自己的体重快速下降，但身体会在几天后从高能耗状态切换到低能耗状态，然后减肥的速度就会立刻减慢，更糟糕的是减肥结束后，体重会疯狂反弹。");

    $('.other_module').eq(5).find("img").attr("src", Img_Array[5]);
    $('.left_part').eq(5).find(".under_line").html("梦想");
    $('.bottom_meta a').eq(10).html("三亚不仔客应伟");
    $('.bottom_meta a').eq(11).append("<b>16</b>");
    $('.bottom_meta span').eq(10).append("<b>11</b>");
    $('.bottom_meta span').eq(11).append("<b>1</b>");
    $(".left_part").eq(5).find("p").html("记得大学放假一次高中同学聚会，大家聊的正欢的时候，我突然问了大家一句：大家现在的梦想是什么？当时一位同学嘲笑到，都马上大学毕业了，还要什么梦想，找份好工作努力赚钱。当时内心真的很想反驳一下，为了避免尴尬，我还是压抑住自己的情绪。");

    $('.other_module').eq(6).find("img").attr("src", Img_Array[6]);
    $('.left_part').eq(6).find(".under_line").html("跑步这件神奇的事");
    $('.bottom_meta a').eq(12).html("浵浵的妈妈");
    $('.bottom_meta a').eq(13).append("<b>13</b>");
    $('.bottom_meta span').eq(12).append("<b>47</b>");
    $('.bottom_meta span').eq(13).append("<b>0</b>");
    $(".left_part").eq(6).find("p").html("从2015年我第一次踏上跑步机至今，我已经跑步满三年了，最初的动机是产后减肥，时至今日跑步已成为我的一种生活习惯。很多人认识我源于我2016年那篇关于自律的文字，不可否认跑步是我一切自律行动的开始，是跑步让我拥有了自律和坚韧的品质。总是有人不断问我如何跑步怎么坚持，所以今天我就来说说跑步这件神奇的事。");

    $('.other_module').eq(7).find("img").attr("src", Img_Array[7]);
    $('.left_part').eq(7).find(".under_line").html("秋叶大叔跪着参加直播，道出了什么人生哲学");
    $('.bottom_meta a').eq(14).html("仗剑执笔的红娘子");
    $('.bottom_meta a').eq(15).append("<b>33</b>");
    $('.bottom_meta span').eq(14).append("<b>42</b>");
    $('.bottom_meta span').eq(15).append("<b>3</b>");
    $(".left_part").eq(7).find("p").html("5月19日，北京。秋叶大叔接受施猫猫老师的采访直播。还是跪式服务的音频直播。你说为啥要跪着，别着急，后文会解答～一、大叔是哪路英雄001 大叔简介");

    $('.other_module').eq(8).find("img").attr("src", Img_Array[8]);
    $('.left_part').eq(8).find(".under_line").html("浅谈跑步与读书");
    $('.bottom_meta a').eq(16).html("厚土高天");
    $('.bottom_meta a').eq(17).append("<b>1</b>");
    $('.bottom_meta span').eq(16).append("<b>13</b>");
    $('.bottom_meta span').eq(17).append("<b>0</b>");
    $(".left_part").eq(8).find("p").html("前几天看了村上春树的《当我谈跑步时，我谈些什么》，在我看来，他讲的不止是跑步、读书和写作，而是人生的追求和信仰、生命的价值和意义。村上春树，日本后现代主义作家。");

    $('.other_module').eq(9).find("img").attr("src", Img_Array[9]);
    $('.left_part').eq(9).find(".under_line").html("为什么女性减肥这么难？");
    $('.bottom_meta a').eq(18).html("时光镜千");
    $('.bottom_meta a').eq(19).append("<b>4</b>");
    $('.bottom_meta span').eq(18).append("<b>10</b>");
    $('.bottom_meta span').eq(19).append("<b>0</b>");
    $(".left_part").eq(9).find("p").html("别人“略施小计”就能让体重蹭蹭往下掉，而自己努力了半天似乎都是白费功夫……估计很多投身于减肥事业的人们都经历过这种无奈，为什么自己减肥效果不明显？难道减肥这件事真的因人而异?");
    //10个推荐文章

    $('.other_module').css({
        width: (parseInt($('.module_hall').css("width")) / 2) - 20,
    });

    //限制显示字符个数，超出显示省略号
    $(".draw_text").each(function () {
        var maxwidth = 72;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "...");
        };
    });
});

//数组存放文章所在的图片链接，方便存储
var Img_Array = new Array(10);
Img_Array[0] = "https://upload-images.jianshu.io/upload_images/10560804-8aa981c5b24fc5ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
Img_Array[1] = "https://upload-images.jianshu.io/upload_images/1786985-8fcfc8b80aa0b849.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
Img_Array[2] = "https://upload-images.jianshu.io/upload_images/10924287-982b99f46b8b2351.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
Img_Array[3] = "https://upload-images.jianshu.io/upload_images/3054428-209aa6c6ffa598b9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
Img_Array[4] = "https://upload-images.jianshu.io/upload_images/4969338-17d4b5c6ac3d9bca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
Img_Array[5] = "https://upload-images.jianshu.io/upload_images/6753085-b4dbea0286a4cbe7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
Img_Array[6] = "https://upload-images.jianshu.io/upload_images/2001577-b04bbf786966ea09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
Img_Array[7] = "https://upload-images.jianshu.io/upload_images/4923048-bc60d35773848baf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
Img_Array[8] = "https://upload-images.jianshu.io/upload_images/2879246-28b72f30b23fd91d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
Img_Array[9] = "https://upload-images.jianshu.io/upload_images/11145786-f0bf3ad51abf6b64.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";

//轮播的讨论
var carousel_contain = $('<section></section>');
for (var i = 0; i < 5; i++) {
    var five_block = $('<div><a href="javascript:;"><img src=""><span></span></a><span class="issue"></span></div>');
    carousel_contain.append(five_block);
}
$('.carousel_ul li').append(carousel_contain);

for (var i = 0; i < 8; i++) {
    var five_block_new = $('<div><a href="javascript:;"><img src=""><span></span></a><span class="issue"></span></div>');
    $('.recommed_topic').append(five_block_new);
}

var Issue = new Array(4);
Issue[0] = "../img/4.jpg";
Issue[1] = "../img/5.jpg";
Issue[2] = "../img/6.jpg";
Issue[3] = "../img/7.jpg";

$('.carousel_ul li').eq(0).find("img").attr("src", Issue[0]);
$('.carousel_ul li').eq(0).find("span").html("「分开」这件小事");
$('.carousel_ul li').eq(0).find(".issue").html("该议题被浏览 61651564 次");
$('.carousel_ul li').eq(1).find("img").attr("src", Issue[1]);
$('.carousel_ul li').eq(1).find("span").html("悄声抑郁");
$('.carousel_ul li').eq(1).find(".issue").html("该议题被浏览 9221631 次");
$('.carousel_ul li').eq(2).find("img").attr("src", Issue[2]);
$('.carousel_ul li').eq(2).find("span").html("知识产权保卫战");
$('.carousel_ul li').eq(2).find(".issue").html("该议题被浏览 2223661 次");
$('.recommed_topic').find("img").attr("src", Issue[3]);
$('.recommed_topic').find("span").html("知识产权保卫战");
$('.recommed_topic').find(".issue").html("该议题被浏览 2223661 次");
//结束

//轮播图开始
var $ul_box = $(".carousel_ul"),
    $items = $ul_box.children("li"),
    $pre = $('.left_move'),
    $next = $('.right_move'),
    imgWidth = $('.carousel').width();
imgCount = $items.length;

$ul_box.prepend($items.last().clone());
$ul_box.append($items.first().clone());
imgNewWidth = $ul_box.children().length;

$ul_box.css({
    left: 0 - imgWidth,
    width: imgNewWidth * imgWidth,
});

var judge = true;
var timer = null;

$next.on('click', function () {
    playnext();
});
$pre.on('click', function () {
    playpre();
});

var curidx = 0;
var mov = 1;

function playnext() {
    if (judge) {
        judge = false;
        $ul_box.animate({
            left: '-=' + mov * imgWidth,
        }, 500, function () {
            judge = true;
            curidx += mov;
            if (curidx === imgCount) {
                $ul_box.css({
                    left: 0 - imgWidth,
                });
                curidx = 0;
            };
        });
    };
};

function playpre() {
    if (judge) {
        judge = false;
        $ul_box.animate({
            left: '+=' + mov * imgWidth,
        }, 500, function () {
            judge = true;
            curidx -= mov;
            if (curidx === (-1)) {
                $ul_box.css({
                    left: 0 - imgWidth * imgCount,
                });
                curidx = imgCount - 1;
            };
        });
    };
};

function autoPlay() {
    clearInterval(timer);
    timer = setInterval(function () {
        playnext();
    }, 5000);
};

autoPlay();

$(window).resize(function () {
    imgWidth = $('.carousel').width();
    $ul_box.css({
        left: 0 - imgWidth,
        width: imgNewWidth * imgWidth,
    });
    autoPlay();
});

$('.module_ans_que').hover(function () {
    $pre.css({
        opacity: 1,
    });
    $next.css({
        opacity: 1,
    });
}, function () {
    $pre.css({
        opacity: 0,
    });
    $next.css({
        opacity: 0,
    });
});

$('.left_move,.right_move').hover(function () {
    clearInterval(timer);
}, function () {
    autoPlay();
});

//推荐直播
var module_scene = $('.module_scene');

for (var i = 0; i < 12; i++) {
    var scene_1 = $('<div class="same_module"><a href="javascript:;"><img src="../img/2.jpg"></a><span>梨视频</span></div>');
    module_scene.append(scene_1);
}
var span_scene = $('<div class="contain_a"><a class="contain_span" href="javascript:;"><span class="change_circle">Get More<i class="iconfont">&#xe6c3;</i></span></a></div>');
module_scene.append(span_scene);
//推荐直播

//推荐视频
var module_news = $('.module_news');
for (var i = 0; i < 12; i++) {
    var news_1 = $('<div class="same_module"><a href="javascript:;"><img src="../img/2.jpg"></a><span>梨视频</span></div>');
    module_news.append(news_1);
}
var span_scene = $('<div class="contain_a"><a class="contain_span" href="javascript:;"><span class="change_circle">Get More<i class="iconfont">&#xe6c3;</i></span></a></div>');
module_news.append(span_scene);
//推荐视频

//推荐文章
var module_hall = $('.module_hall');
for (var i = 0; i < 10; i++) {
    var hall_1 = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;"></a><a href="javascript:;"><i class="iconfont">&#xe684;</i></a><span><i class="iconfont">&#xe602;</i></span><span><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>');
    $('.contain_other').append(hall_1);
};
var span_scene = $('<div class="contain_a"><a class="contain_span" href="articlePage.html" target="_blank"><span class="change_circle">Get More<i class="iconfont">&#xe6c3;</i></span></a></div>');
module_hall.append(span_scene);
//推荐文章

//问答专区
var module_ans_que = $('.module_ans_que');
var span_scene = $('<div class="contain_a"><a class="contain_span" href="topic.html" target="_blank"><span class="change_circle">Get More<i class="iconfont">&#xe6c3;</i></span></a></div>');
module_ans_que.append(span_scene);

$('.same_module a').hover(function () {
    $(this).addClass("a_hover a_hover_a");
}, function () {
    $(this).removeClass("a_hover a_hover_a");
});

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

//视频加载完
dp.on('canplay', function () {
    var ContainerOutVideoH = $('.ContainerOutVideo').outerHeight();
    $('.live_list').css({
        'height': ContainerOutVideoH - 20,
    });
});

//页页面的尺寸发生变化
$(window).resize(function () {
    var ContainerOutVideoH = $('.ContainerOutVideo').outerHeight();
    $('.live_list').css({
        'height': ContainerOutVideoH - 20,
    });
});