// 地图类库
// 放大
function zoomIn() {
  map.zoomIn();
  layerAlert("点击了放大按钮", 1);
}

// 缩小
function zoomOut() {
  map.zoomOut();
  layerAlert("点击了放大缩小", 1);
}

// 平移到
function panTo(x, y) {
  // let latlng = new google.maps.LatLng(36.1, 117.18);
  // map.map.panTo(latlng);
  map.panTo(x, y);
  layerAlert("点击了平移按钮，并来到了青岛", 1);
}

// 居中并缩放到
function centerAndZoom(position, level) {
  map.centerAndZoom(position, level);
  layerAlert("点击了居中并缩放按钮，来到了泰安", 1);
}

// 启用双击放大
function enableDoubleClickZoom() {
  map.enableDoubleClickZoom();
  layerAlert("点击了启用双击放大按钮", 1);
}

// 禁用双击放大
function disableDoubleClickZoom() {
  map.disableDoubleClickZoom();
  layerAlert("点击了禁用双击放大按钮", 1);
}

// 地图类型切换
function setMapType(type) {
  map.setMapType(type);
  layerAlert("点击了地图类型切换按钮，看右上角是不是多了切换控件", 1);
}