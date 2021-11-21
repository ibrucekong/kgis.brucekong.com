// 打印数据
console.log(allData);
// 模块化引用
let modules = ["Map", "Controller", "Location", "Measure", "Event", "Overlay", "Menu", "InfoWindow"];
// 地图初始化
let options = {
  lat: 36.70,
  lng: 117.02,
  level: 11,
  scale: false,
  toolbar: false,
  mapType: "normal"
};
// 定义本页全局组件
let map, controller, loc, measure, event, overlay, menu, infoWindow;
// 地图初始化
init();

// 地图初始化
function init() {
  // config.json和MAPTYPE同时声明时，将采用MAPTYPE中的信息
  MAPTYPE = "amap";
  KGIS.init(modules, function () {
    initMap();
    layerAlert("地图已经初始化成功了", 1);
  });
}

// 初始化组件
function initMap() {
  map = "";
  controller = "";
  event = "";

  map = new KGIS.Map("allmap", options);
  controller = new KGIS.Controller();
  event = new KGIS.Event();
  overlay = new KGIS.Overlay();

  // addMarker();
  addMarker();
}
let marker,point;
function addMarker() {
  point = new KGIS.Point(heze.lng, heze.lat);
  map.panTo(point);
  let iconOptions = {
    url: '../assets/images/index/marker.png',
    size: new KGIS.Size(32, 32), // 默认是36
    imageOffset: new KGIS.Size(0, 0) // 图片相对于可视域的偏移值，加了偏移量对于下面获取的getPosition的值有影响
  };
  let icon = new KGIS.Icon(iconOptions);
  let markerOptions = {
    offset: new KGIS.Size(0, -32),
    icon: icon,
    enableDragging: false,
    raiseOnDrag: false,
    rotation: 0,
    title: "菏泽"
  };
  marker = new KGIS.Marker(point, markerOptions);
  map.addOverlay(marker, function () {
    layerAlert("点击了添加标注点按钮，并来到了菏泽", 1);
  });
}

// 添加标注折线
function addPolyline() {
  map.centerAndZoom([120.122, 36.430], 16);
  let pArr = [
    new KGIS.Point(120.122, 36.432),
    new KGIS.Point(120.123, 36.431),
    new KGIS.Point(120.124, 36.430),
    new KGIS.Point(120.125, 36.433),
    new KGIS.Point(120.126, 36.434),
    new KGIS.Point(120.127, 36.436)
  ];
  let polylineOptions = {
    strokeColor: "orange",
    strokeWeight: 3,
    strokeOpacity: 1,
    strokeStyle: "solid"
  };
  polyline = new KGIS.Polyline(pArr, polylineOptions);
  map.addOverlay(polyline, function () {
    layerAlert("点击了添加标注折线按钮，并来到了青岛", 1);
  });
}

function goBlog() {
  window.location.href = "https://blog.brucekong.com";
}

function goHome() {
  window.location.href = "https://kgis.brucekong.com";
}
