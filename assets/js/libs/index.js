// 模块化引用
let modules = "Map Controller Location Measure Event Overlay Menu InfoWindow Service Geocoder".split(" ");

// 定义本页全局组件
let map, controller, loc, measure, event, overlay, infoWindow, service, geocoder;

// 获取地图类型
let mapType = getMapType();
// 地图组件初始化
KGIS.init(mapType, modules, () => initMap()) // 第一个参数是指选用哪种地图：百度、高德、谷歌、arcgis等

// 地图初始化
function initMap() {
  let options = {
    lat: 36.70,
    lng: 117.02,
    level: 11,
    mapType: "normal", // 这个是地图显示类型：地形图，影像图
    leaflet: "bmap" // 这个只针对leaflets的地图类型
  };
  map = new KGIS.Map("allmap", options);
  controller = new KGIS.Controller();
  loc = new KGIS.Location();
  measure = new KGIS.Measure(); // gmap arcgis 还未实现
  event = new KGIS.Event();
  overlay = new KGIS.Overlay();

  layerAlert("地图已经初始化成功了", 1);
}

// 初始化变量
function resetVar() {
  map = "";
  controller = "";
  loc = "";
  measure = "";
  event = "";
  overlay = "";
  menu = "";
  infoWindow = "";
}

// 地图再次初始化- 刷新地图
function reInit() {
  resetVar();
  initMap();
}

function getMapType() {
  let mapType = "bmap";// 设置默认
  let href = location.href.split("/");
  let m = href[href.length - 1];
  if (m === "" || m.indexOf("index") > -1) {
    mapType = "bmap";
  } else if (m.indexOf("amap") > -1) {
    mapType = "amap";
  }else if (m.indexOf("gmap") > -1) {
    mapType = "gmap";
  }else if (m.indexOf("arcgis3") > -1) {
    mapType = "arcgis3";
  }else if (m.indexOf("arcgis4") > -1) {
    mapType = "arcgis4";
  }else if (m.indexOf("leaflet") > -1) {
    mapType = "leaflet";
  }
  return mapType;
}
