function test() {
    var BodyHeight = $('#main').outerHeight(true);
    var BodyWidth = $('body').outerWidth();
    //背景的高度
    $('#MoveCanvas').attr({
        'width': BodyWidth,
        'height': BodyHeight - 100,
    });
}

test();

$(window).resize(function () {
    test();
});

//控制文字的多少
$('.testText').each(function () {
    var maxwidth = 35;
    if ($(this).text().length > maxwidth) {
        $(this).text($(this).text().substring(0, maxwidth));
        $(this).html($(this).html() + "...");
    };
});