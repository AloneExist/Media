$('.search_div').on("click", function () {
    $('.search_div').animate({
        width: 200,
    });
    $('.text_search').css({
        width: '80%',
        'cursor': 'text',
    });
    $('.search').css({
        'transform': 'translateY(-50%)',
        'left': '10px',
    });
    $('.input').css({
        display: 'block',
        opacity: 1,
    });
});

$('.text_search').focus(function () {
    $('.text_search').css({
        'background': '#fff',
    });
});

var windowsArr = [];
var marker = [];
var map = new AMap.Map('map_container', {
    resizeEnable: true,
    zoom: 9,
    keyboardEnable: false,
    mapStyle: 'amap://styles/247f10daa4e7600181e0c4641358a2ed', //自定义样式
    pitch: 75, //角度
    viewMode: '3D', //3D
});

AMap.plugin([
    'AMap.ToolBar',
    'AMap.Scale',
    'AMap.MapType',
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
], function () {
    toolBar = new AMap.ToolBar(); //工具条
    scale = new AMap.Scale(); //比例尺
    mapType = new AMap.MapType(); //地图种类
    map.addControl(toolBar);
    map.addControl(scale);
    map.addControl(mapType);
    var autoOptions = {
        city: "北京", //城市，默认杭州
        input: "keyword" //使用联想输入的input的id
    };
    autocomplete = new AMap.Autocomplete(autoOptions);
    var placeSearch = new AMap.PlaceSearch({
        city: '杭州',
        map: map
    });
    AMap.event.addListener(autocomplete, "select", function (e) {
        //TODO 针对选中的poi实现自己的功能
        placeSearch.setCity(e.poi.adcode);
        placeSearch.search(e.poi.name)
    }); //搜索
});

map.plugin('AMap.Geolocation', function () {
    geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition: 'RB'
    });
    map.addControl(geolocation);
    geolocation.getCurrentPosition();
}); //定位