$(document).on("click", '.leftParts a,.navParts a', function () {
    $("body").getNiceScroll().resize();
});

var Old = $('.leftParts a').eq(0);
var OldParts = $('.Parts').eq(0);
$('.leftParts .topA').on('click', function () {
    var index = $('.leftParts a').index(this); //判断元素在当前的位置是第几个元素
    OldParts.css({
        'display': 'none',
    });
    OldParts = $('.Parts').eq(index);
    $('.Parts').eq(index).css({
        'display': 'flex',
    });
    Old.css({
        'background': '',
    });
    Old = $(this);
    $(this).css({
        'background': '#dbdada',
    });
});

var firstPart = $('.firstPart');
for (var i = 0; i < 17; i++) {
    var select_one = $('<div class="same_module"><a href="javascript:;"><img src="../img/15.jpg"></a><span>梨视频</span></div>');
    firstPart.append(select_one);
};

var secondPart = $('.secondPart');
for (var i = 0; i < 17; i++) {
    var select_one = $('<div class="same_module"><a href="javascript:;"><img src="../img/15.jpg"></a><span>抖音短视频</span></div>');
    secondPart.append(select_one);
};

$('.same_module a').hover(function () {
    $(this).addClass("a_hover a_hover_a");
}, function () {
    $(this).removeClass("a_hover a_hover_a");
});

var length = $('.navParts a').length;
var thirdPart = $('.thirdPart');

for (var i = 0; i < length; i++) {
    var select_two = $('<div class="Select_Much"></div>');
    thirdPart.append(select_two);
}

$('.Select_Much').eq(0).css({
    "display": "block",
});

var olDNav = $('.navParts a').eq(0);
var oLdDiv = $('.Select_Much').eq(0);
$('.navParts a').on('click', function () {
    var index = $('.navParts a').index(this);
    oLdDiv.css({
        display: 'none',
    });
    oLdDiv = $('.Select_Much').eq(index);
    $('.Select_Much').eq(index).css({
        display: 'block',
    });
    olDNav.css({
        'background': '',
        'color': '',
    });
    olDNav = $(this);
    $(this).css({
        'background': '#C9CABB',
        'color': '#34352C',
    });
});

var SelectDiv = $('.Select_Much');
for (var i = 0; i < 3; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(0).append(AddDiv);
};

for (var i = 0; i < 4; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(1).append(AddDiv);
};

for (var i = 0; i < 5; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(2).append(AddDiv);
};

for (var i = 0; i < 6; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(3).append(AddDiv);
};

for (var i = 0; i < 7; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(4).append(AddDiv);
};

for (var i = 0; i < 8; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(5).append(AddDiv);
};

for (var i = 0; i < 9; i++) {
    var AddDiv = $('<div class="other_module"><div class="left_part"><a href="javascript:;" class="under_line"></a><p class="draw_text"></p><div class="bottom_meta"><a href="javascript:;" class="bottom_first_a"></a><a href="javascript:;" class="bottom_two_a"><i class="iconfont">&#xe684;</i></a><span class="bottom_first_span"><i class="iconfont">&#xe602;</i></span><span class="bottom_two_span"><i class="iconfont">&#xe672;</i></span></div></div><a href="javascript:;" class="replace_img"><img src=""/></aa></div>')
    SelectDiv.eq(6).append(AddDiv);
};

var ImgArray = new Array(7);
ImgArray[0] = "https://upload-images.jianshu.io/upload_images/10560804-8aa981c5b24fc5ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[1] = "https://upload-images.jianshu.io/upload_images/1786985-8fcfc8b80aa0b849.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[2] = "https://upload-images.jianshu.io/upload_images/10924287-982b99f46b8b2351.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[3] = "https://upload-images.jianshu.io/upload_images/3054428-209aa6c6ffa598b9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[4] = "https://upload-images.jianshu.io/upload_images/4969338-17d4b5c6ac3d9bca.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[5] = "https://upload-images.jianshu.io/upload_images/6753085-b4dbea0286a4cbe7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";
ImgArray[6] = "https://upload-images.jianshu.io/upload_images/2001577-b04bbf786966ea09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240";

SelectDiv.eq(0).find("img").attr("src", ImgArray[0]);
SelectDiv.eq(0).find(".under_line").html("五一，差点只剩半条命！");
SelectDiv.eq(0).find(".bottom_first_a").html("5312Ana");
SelectDiv.eq(0).find(".bottom_two_a").append("<b>20</b>");
SelectDiv.eq(0).find(".bottom_first_span").append("<b>19</b>");
SelectDiv.eq(0).find(".bottom_two_span").append("<b>1</b>");
SelectDiv.eq(0).find("p").html("原本打算五一跟朋友跑完半程马拉松后就去北海拍海景，然而不幸的是，她准备跑到终点时突然晕倒了，虽然我没体验过这种晕倒的感觉，但可以想象出这种从鬼门关出来人的有多不易。");

SelectDiv.eq(1).find("img").attr("src", ImgArray[1]);
SelectDiv.eq(1).find(".under_line").html("减重6.6斤，我只用了28天");
SelectDiv.eq(1).find(".bottom_first_a").html("芊芊妈成长札记");
SelectDiv.eq(1).find(".bottom_two_a").append("<b>13</b>");
SelectDiv.eq(1).find(".bottom_first_span").append("<b>19</b>");
SelectDiv.eq(1).find(".bottom_two_span").append("<b>1</b>");
SelectDiv.eq(1).find("p").html("缘起 生下二宝芊芊之后，我的体重一直在51kg~53kg徘徊，按照《中国居民膳食指南2016》判断健康体重的体质指数（BMI）=体重/身高的平方计算，我的BMI在21.5~22.34之间，属于健康体重的范围。但是由于产后基本没做运动，整个人看起来肉肉的，特别是背部、手臂，让本来海拔就不高的我显得特别粗壮，穿衣服也不好看，有时候自己都嫌弃自己，整个人也没自信，我老公一句开玩笑的话：“不认识你的人从后面看还以为你是男士”更是戳中了我的心。");

SelectDiv.eq(2).find("img").attr("src", ImgArray[2]);
SelectDiv.eq(2).find(".under_line").html("村上春树谈写作和跑步");
SelectDiv.eq(2).find(".bottom_first_a").html("阅悦生");
SelectDiv.eq(2).find(".bottom_two_a").append("<b>15</b>");
SelectDiv.eq(2).find(".bottom_first_span").append("<b>56</b>");
SelectDiv.eq(2).find(".bottom_two_span").append("<b>0</b>");
SelectDiv.eq(2).find("p").html("01 前两天在网上买了村上春树的《当我谈跑步时我谈些什么》，今天就送到家里了。等忙完其他一切，空闲下来就拿到手上看。大概看了有两个小时吧，还没看完。到楼下跑完步之后，把前面的读书笔记整理了一下，总结出来。");

SelectDiv.eq(3).find("img").attr("src", ImgArray[3]);
SelectDiv.eq(3).find(".under_line").html("健身 | 为什么你瘦不下来？");
SelectDiv.eq(3).find(".bottom_first_a").html("黄小妞儿");
SelectDiv.eq(3).find(".bottom_two_a").append("<b>2</b>");
SelectDiv.eq(3).find(".bottom_first_span").append("<b>17</b>");
SelectDiv.eq(3).find(".bottom_two_span").append("<b>0</b>");
SelectDiv.eq(3).find("p").html("文/黄小妞 距离上次我写的《从138斤减到110斤，我经历了什么？》已经有一个多月了，这期间我收到了太多的留言和评论。今天我整理了下，总结出了大家瘦不下来的6大原因，同时给出了答案，这些肯定会对你帮助很大。");

SelectDiv.eq(4).find("img").attr("src", ImgArray[4]);
SelectDiv.eq(4).find(".under_line").html("减肥的具体方法");
SelectDiv.eq(4).find(".bottom_first_a").html("李翔_数字游牧读书会");
SelectDiv.eq(4).find(".bottom_two_a").append("<b>2</b>");
SelectDiv.eq(4).find(".bottom_first_span").append("<b>18</b>");
SelectDiv.eq(4).find(".bottom_two_span").append("<b>0</b>");
SelectDiv.eq(4).find("p").html("过去我认为减肥就是少吃多动，这两天仔细研究后发现，我错了。少吃在减肥初期确实会让自己的体重快速下降，但身体会在几天后从高能耗状态切换到低能耗状态，然后减肥的速度就会立刻减慢，更糟糕的是减肥结束后，体重会疯狂反弹。");

SelectDiv.eq(5).find("img").attr("src", ImgArray[5]);
SelectDiv.eq(5).find(".under_line").html("梦想");
SelectDiv.eq(5).find(".bottom_first_a").html("三亚不仔客应伟");
SelectDiv.eq(5).find(".bottom_two_a").append("<b>16</b>");
SelectDiv.eq(5).find(".bottom_first_span").append("<b>11</b>");
SelectDiv.eq(5).find(".bottom_two_span").append("<b>1</b>");
SelectDiv.eq(5).find("p").html("记得大学放假一次高中同学聚会，大家聊的正欢的时候，我突然问了大家一句：大家现在的梦想是什么？当时一位同学嘲笑到，都马上大学毕业了，还要什么梦想，找份好工作努力赚钱。当时内心真的很想反驳一下，为了避免尴尬，我还是压抑住自己的情绪。");

SelectDiv.eq(6).find("img").attr("src", ImgArray[6]);
SelectDiv.eq(6).find(".under_line").html("跑步这件神奇的事");
SelectDiv.eq(6).find(".bottom_first_a").html("浵浵的妈妈");
SelectDiv.eq(6).find(".bottom_two_a").append("<b>13</b>");
SelectDiv.eq(6).find(".bottom_first_span").append("<b>47</b>");
SelectDiv.eq(6).find(".bottom_two_span").append("<b>0</b>");
SelectDiv.eq(6).find("p").html("从2015年我第一次踏上跑步机至今，我已经跑步满三年了，最初的动机是产后减肥，时至今日跑步已成为我的一种生活习惯。很多人认识我源于我2016年那篇关于自律的文字，不可否认跑步是我一切自律行动的开始，是跑步让我拥有了自律和坚韧的品质。总是有人不断问我如何跑步怎么坚持，所以今天我就来说说跑步这件神奇的事。");

for (var i = 0; i < 10; i++) {
    var five_block = $('<div class="issueOutContainer"><div class="ShadowBoxConatiner"><a href="javascript:;"><img src=""><span></span></a><span class="issue"></span></div></div>');
    $('.recommed_topic').append(five_block);
}

var Issue = new Array(1);
Issue[0] = "../img/4.jpg";

$('.recommed_topic').find("img").attr("src", Issue[0]);
$('.recommed_topic').find("span").html("知识产权保卫战");
$('.recommed_topic').find(".issue").html("该议题被浏览 2223661 次");

var HistoryPast = $('<div class="historySearch"><div class="lastContent"><p>最近搜索</p><a href="javascript:;" class="ClearAll">' +
    '清空</a><ul class="lastTime"><li><a href="javascript:;" class="bottomA"><i class="iconfont">&#xe6c0;</i>' +
    '<p class="IBottom">是什么造就了《三生三世十里桃花》的火爆？</p><span class="HiddenSpan"><i class="iconfont">&#xe61a;</i>' +
    '</span></a></li></ul></div></div>');
$('.leftParts').append(HistoryPast);

//控制文字的多少

CutWordSearch('.IBottom', 12);

CutWordSearch('.draw_text', 72);

function CutWordSearch(n, num) {
    $(n).each(function () {
        var maxwidth = num;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "...");
        };
    });
}


//清空按钮
$('.ClearAll').on('click', function () {
    $('.historySearch').empty();
    $('.historySearch').remove();
});

//删除按钮，当只有一个li时与清空的操作时一样的
$('.HiddenSpan').on('click', function () {
    var length = $('.bottomA').length;
    if (length == 1) {
        $('.historySearch').empty();
        $('.historySearch').remove();
    } else {
        $(this).parent().parent().remove();
    }
});