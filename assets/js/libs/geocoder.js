// 地理解析
// 正向地理解析-根据详细地址解析坐标点
function getPointDetail(){
  geocoder = new KGIS.Geocoder();
  let address = {
    info:"北京市海淀区苏州街",
    city:"北京市"
  };
  geocoder.getPointByAddress(address, function (point) {
    layerAlert(JSON.stringify(point), 1);
  })
}

// 逆向地理解析-根据坐标点解析出详细地址
function getAddressDetail(){
  geocoder = new KGIS.Geocoder();
  let point = new KGIS.Point(120, 37);
  geocoder.getLocationByPoint(point, function (info) {
    layerAlert(JSON.stringify(info), 1);
  })
}