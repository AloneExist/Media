var onOff = true;
$('.leftColumns a').on('click', function () {
    if (onOff) {
        onOff = false;
        $(this).html('已关注');
        $(this).css({
            'background': '#C1194E',
        });
    } else {
        onOff = true;
        $(this).html('关注教程');
        $(this).css({
            'background': '',
        });
    }
});

$('.articleContainer').append('<div class="Select_Much"></div>');

var SelectDiv = $('.Select_Much');
for (var i = 0; i < 10; i++) {
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

CutWordColumns('.wordP', 25);
CutWordColumns('.draw_text', 72);

function CutWordColumns(n, num) {
    $(n).each(function () {
        var maxwidth = num;
        if ($(this).text().length > maxwidth) {
            $(this).text($(this).text().substring(0, maxwidth));
            $(this).html($(this).html() + "...");
        };
    });
}