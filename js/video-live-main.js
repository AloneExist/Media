 // 生成20~30之间的随机数 Math.floor(Math.random() * 11 + 20)
 var random_number = Math.floor(Math.random() * 6 + 15);
 // 视频的Json
 // "video_background": "background: url(../img/Soda.jpg) no-repeat;"
 //  "video_title": "梨视频"
 // "video_owner_name": "双马尾lolita/我是你的新同桌呀"
 //  "online_people_number": "1000"

 function JsonAddData(n, m, icon) {
     var mainContent = $('.main-content');
     $('.same_module').remove();
     for (var i = 0; i < n; i++) {
         var Content_one = $('<div class="same_module"><a href="javascript:;" style="' + videoAllContent.videoBackgroundData[m] + '"></a>' +
             '<span><p class="title-span-p">' + videoAllContent.videoTitleData[m] +
             '</p><p class="cute-name-live-people"><b>' + videoAllContent.videoOwnerName[m] +
             '</b><b><i class="iconfont">' + icon + '</i>' + videoAllContent.onlinePeopleNumber[m] +
             '</b></p></span></div>');
         mainContent.append(Content_one);
     }
     // 移过视频或是直播的样式添加
     $('.same_module a').hover(function () {
         $(this).addClass("a_hover a_hover_a");
     }, function () {
         $(this).removeClass("a_hover a_hover_a");
     });
 }

 // 设置背景图片容器的高度
 function SetImgHeight() {
     var cutHalf = (parseFloat($('.same_module a').css('width'))) / 2;
     $('.same_module a').css('height', cutHalf);
 }

 // 设置背景图片容器的高度
 $(function () {
     SetImgHeight();
 });

 // 设置背景图片容器的高度
 $(window).resize(function () {
     SetImgHeight();
 });

 // 分页
 $('.pagingTool').Paging({
     pagesize: 10,
     count: 100,
     prevTpl: '<i class="iconfont">&#xe78c;</i>',
     nextTpl: '<i class="iconfont">&#xe77c;</i>',
     firstTpl: '<i class="iconfont">&#xe609;</i>',
     lastTpl: '<i class="iconfont">&#xe6de;</i>',
 });

 //NO MORE
 // $('.pagingTool').append('<div class="NOMore"><i class="iconfont">&#xe670;</i><p>没有更多了</p></div>');

 // Josn用来存放a标签内的内容
 var Json = {
     "content": ["全部", "娱乐", "综艺", "文化", "游戏", "少儿", "音乐", "教育", "生活", "汽车", "科技", "时尚", "自拍", "拍客", "VR",
         "广告", "微电影", "动漫"
     ],
 }

 // 获取Json里面的数据
 for (var Item in Json.content) {
     var Add_Json_Data = $('<span><a href="javascript:;">' + Json.content[Item] + '</a></span>');
     $('.all-classification').append(Add_Json_Data);
 }

 $('.all-classification span a').eq(0).addClass('click-hover-after');

 $(document).on('click', '.all-classification span a', function () {
     $('body').getNiceScroll().resize();
 });