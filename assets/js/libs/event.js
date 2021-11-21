let label, marker, polyline, polygon;
// 事件类库
// map缩放开始
let mapZoomstartHandler;
function regMapZoomstart() {
  mapZoomstartHandler = event.bind(map, "zoomstart", regMapZoomstartCallback);
  layerAlert("注册地图缩放开始监听，点击地图测试一下！", 1);
}

function regMapZoomstartCallback(e) {
  layerAlert("地图开始缩放", 1);
}

// 移除地图开始缩放事件监听
function unRegMapZoomstart() {
  // 判断是否绑定了监听，flag=true表示绑定了
  if (!mapZoomstartHandler) {
    layerAlert("还没有绑定该监听，无法移除该监听！", 7);
  } else {
    event.unbind(mapZoomstartHandler);
    layerAlert("移除地图缩放开始监听按钮，点击地图测试一下！", 1);
  }
}

// map缩放结束
let mapZoomEndHandler;
function regMapZoomend() {
  mapZoomEndHandler = event.bind(map, "zoomend", regMapZoomendCallback);
  layerAlert("注册了地图缩放结束监听，点击地图测试一下！", 1);
}

function regMapZoomendCallback() {
  layerAlert("地图结束缩放", 1);
}

// 移除map缩放结束
function unRegMapZoomend() {
  event.unbind(mapZoomEndHandler);
  layerAlert("移除了地图缩放结束监听，缩放地图测试一下！", 1);
}

// 开始移动
let mapMoveStartHandler;
function regMapMoveStart() {
  layerAlert("注册了地图开始移动监听，移动地图界面试一下！", 1);
  mapMoveStartHandler = event.bind(map, "movestart", mapMoveStart);
}

function mapMoveStart(evt) {
  layerAlert("触发了开始移动", 1);
}

function unRegMapMoveStart(){
  event.unbind(mapMoveStartHandler);
  layerAlert("移除了地图开始移动监听，点击地图测试一下！", 1);
}

// 移动中
let mapMovingHandler;
function regMapMoving() {
  mapMovingHandler = event.bind(map, "moving", mapMovingCallback);// TODO
  layerAlert("注册了地图移动中监听，移动地图界面试一下！", 1);
}

function mapMovingCallback(evt) {
  layerAlert("触发了移动中", 1);
}

function unRegMapMoving() {
  event.unbind(mapMovingHandler);
  layerAlert("移除了地图移动中监听，点击地图测试一下！", 1);
}

// 移动结束
let mapMoveendHandler;
function regMapMoveend() {
  mapMoveendHandler = event.bind(map, "moveend", mapMoveendCallback);
  layerAlert("注册了地图移动结束监听，移动地图界面试一下！", 1);
}

function mapMoveendCallback(evt) {
  layerAlert("触发了移动结束", 1)
}

function unRegMapMoveend() {
  event.unbind(mapMoveendHandler);
  layerAlert("移除了地图移动结束监听，点击地图测试一下！", 1);
}

// 开始拖拽
let mapDragStartHandler;
function regMapDragStart() {
  mapDragStartHandler = event.bind(map, "dragstart", mapDragStartCallback);
  layerAlert("注册了地图开始拖拽监听，拖拽地图界面试一下！", 1);
}

function mapDragStartCallback(evt){
  layerAlert("触发了拖拽移动", 1);
}

function unRegMapDragStart() {
  event.unbind(mapDragStartHandler);
  layerAlert("移除了地图开始拖拽监听，点击地图测试一下！", 1);
}

// 拖拽中
let mapDraggingHandler;
function regMapDragging() {
  mapDraggingHandler = event.bind(map, "dragging", mapDraggingCallback);
  layerAlert("注册了地图拖拽中监听，拖拽地图界面试一下！", 1);
}

function mapDraggingCallback(evt) {
  layerAlert("触发了拖拽中", 1);
}

function unRegMapDragging() {
  event.unbind(mapDraggingHandler);
  layerAlert("移除了地图拖拽中监听，点击地图测试一下！", 1);
}

// 拖拽结束
let mapDragendHandler;
function regMapDragend() {
  mapDragendHandler = event.bind(map, "dragend", mapDragendCallback);
  layerAlert("注册了地图拖拽结束监听，拖拽地图界面试一下！", 1);
}

function mapDragendCallback(evt) {
  layerAlert("触发了拖拽结束", 1);
}

function unRegMapDragend(){
  event.unbind(mapDragendHandler);
  layerAlert("移除了地图拖拽结束监听，点击地图测试一下！", 1);
}

// 地图左键单击事件
let mapClickHandler;
function regMapClick() {
  mapClickHandler = event.bind(map, "click", regMapClickCallback);
  layerAlert("注册了地图左键单击监听，点击地图测试一下！", 1);
}

function regMapClickCallback(evt) {
  layerAlert("地图上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

// 移除地图左键单击事件
function unRegMapClick() {
  event.unbind(mapClickHandler);
  layerAlert("移除了地图左键单击监听，点击地图测试一下！", 1);
}

// map左键双击事件
let mapDblClickHandler;
function regMapDblClick() {
  mapDblClickHandler = event.bind(map, "dblclick", regMapDblClickCallback);
  layerAlert("注册了地图左键双击监听，点击地图测试一下！", 1);
}

function regMapDblClickCallback(evt) {
  layerAlert("地图上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

function unRegMapDblClick() {
  event.unbind(mapDblClickHandler);
  layerAlert("移除了地图左键双击监听，点击地图测试一下！", 1); // TODO
}

// map右键单击事件
let mapRightClickHandler;
function regMapRightClick() {
  mapRightClickHandler = event.bind(map, "rightclick", regMapRightClickCallback);
  layerAlert("注册了地图右键单击监听，点击地图测试一下！", 1);
}

function regMapRightClickCallback(evt) {
  layerAlert("地图上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

function unRegMapRightClick() {
  event.unbind(mapRightClickHandler);
  layerAlert("移除了地图右键单击监听，点击地图测试一下！", 1);
}

// map右键双击击事件
let mapRightDblClickHandler;
function regMapRightDblClick() {
  mapRightDblClickHandler = event.bind(map, "rightdblclick", regMapRightDblClickCallback);
  layerAlert("注册了地图右键双击监听，点击地图测试一下！", 1);
}

function regMapRightDblClickCallback(evt) {
  layerAlert("地图上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

function unRegMapRightDblClick() {
  event.unbind(mapRightDblClickHandler);
  layerAlert("移除了地图右键双击监听，点击地图测试一下！", 1);
}

// marker左键单击事件
let markerClickHandler;
function regMarkerClick() {
  if (marker === undefined) {
    layerAlert("请先创建marker标注，再试一下！", 7);
  } else {
    markerClickHandler = event.bind(marker, "click", regMakerClickCallback);
    layerAlert("注册了marker单击左键监听，左键双击marker测试一下！", 1);
  }
}

function regMakerClickCallback(evt) {
  layerAlert("marker上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

function unRegMarkerClick() {
  event.unbind(markerClickHandler);
  layerAlert("移除了marker单击左键监听，点击marker测试一下！", 1);
}

// marker双击左键事件
let markerDblClickHandler;
function regMarkerDblClick() {
  if (marker === undefined) {
    layerAlert("请先创建marker标注，再试一下！", 7);
  } else {
    markerDblClickHandler = event.bind(marker, "dblclick", markerDblClickCallback);
    layerAlert("注册了marker双击左键监听，左键双击marker测试一下！", 1);
  }
}

function markerDblClickCallback(evt){
  layerAlert("marker上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

function unRegMarkerDblClick(){
  event.unbind(markerDblClickHandler);
  layerAlert("移除了marker双击左键监听，点击marker测试一下！", 1);
}

// marker右键单击事件
let markerRightClickHandler;
function regMarkerRightClick() {
  if (marker === undefined) {
    layerAlert("请先创建marker标注，再试一下！", 7);
  } else {
    markerRightClickHandler = event.bind(marker, "rightclick", markerRightClickCallback);
    layerAlert("注册了marker右键单击监听，右键点击marker测试一下！", 1);
  }
}

function markerRightClickCallback(evt) {
  layerAlert("marker上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

function unRegMarkerRightClick() {
  event.unbind(markerRightClickHandler);
  layerAlert("移除了marker右键单击监听，右键点击marker测试一下！", 1);
}


// 在marker上按下事件
let markerMousedownHandler;
function regMarkerMousedown() {
  if (marker === undefined) {
    layerAlert("请先创建marker标注，再试一下！", 1);
  } else {
    markerMousedownHandler = event.bind(marker, "mousedown", markerMousedownCallback);
    layerAlert("注册了在marker上按下事件，在marker测试一下！", 1);
  }
}

function markerMousedownCallback(evt) {
  layerAlert("marker上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

function unRegMarkerMousedown() {
  event.unbind(markerMousedownHandler);
  layerAlert("移除了在marker上按下事件，在marker测试一下！", 1);
}

// 在marker上释放事件
let markerMouseupHandler;
function regMarkerMouseup() {
  if (marker === undefined) {
    layerAlert("请先创建marker标注，再试一下！", 7);
  } else {
    markerMouseupHandler = event.bind(marker, "mouseup", markerMouseupCallback);
    layerAlert("注册了在marker上释放事件，在marker测试一下！", 1);
  }
}

function markerMouseupCallback(evt) {
  layerAlert("marker上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

function unRegMarkerMouseup() {
  event.unbind(markerMouseupHandler);
  layerAlert("移除了在marker上释放事件，在marker测试一下！", 1);
}

// 在marker上离开事件
let markerMouseoutHandler;
function regMarkerMouseout() {
  if (marker === undefined) {
    layerAlert("请先创建marker标注，再试一下！", 7);
  } else {
    markerMouseoutHandler = event.bind(marker, "mouseout", markerMouseoutCallback);
    layerAlert("注册了在marker上离开事件，在marker测试一下！", 1);
  }
}

function markerMouseoutCallback(evt) {
  layerAlert("marker上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

function unRegMarkerMouseout() {
  event.unbind(markerMouseoutHandler);
  layerAlert("移除了在marker上离开事件，在marker测试一下！", 1);
}
// 在marker上进入事件
let markerMouseoverHandler;
function regMarkerMouseover() {
  if (marker === undefined) {
    layerAlert("请先创建marker标注，再试一下！", 7);
  } else {
    markerMouseoverHandler = event.bind(marker, "mouseover", markerMouseoverCallback);
    layerAlert("注册了在marker上进入事件，在marker测试一下！", 1);
  }
}

function markerMouseoverCallback(evt) {
  layerAlert("marker上的坐标是：" + "(" + JSON.stringify(evt.lnglat) + ")", 1);
}

function unRegMarkerMouseover() {
  event.unbind(markerMouseoverHandler);
  layerAlert("移除了在marker上进入事件，在marker测试一下！", 1);
}
// polyline左键单击事件
let polylineClickHandler;
function regPolylineClick() {
  if (polyline === undefined) {
    layerAlert("请先创建polyline标注，再试一下！", 7);
  } else {
    polylineClickHandler = event.bind(polyline, "click", polylineClickCallback);
    layerAlert("注册了polyline左键单击监听，点击折线测试一下！", 1);
  }
}

function polylineClickCallback(evt) {
  layerAlert("polyline上的点坐标集是：" + "(" + JSON.stringify(evt.path) + ")", 1);
}

function unRegPolylineClick() {
  event.unbind(polylineClickHandler);
  layerAlert("移除了polyline左键单击监听，在折线上测试一下！", 1);
}

// polyline双击左键事件
let polylineDblClickHandler;
function regPolylineDblClick() {
  if (polyline === undefined) {
    layerAlert("请先创建polyline标注，再试一下！", 7);
  } else {
    polylineDblClickHandler = event.bind(polyline, "dblclick", polylineDblClickCallback);
    layerAlert("注册了polyline双击左键监听，左键双击折线测试一下！", 1);
  }
}

function polylineDblClickCallback(evt) {
  layerAlert("polyline上的点坐标集是：" + "(" + JSON.stringify(evt.path) + ")", 1);
}

function unRegPolylineDblClick() {
  event.unbind(polylineDblClickHandler);
  layerAlert("移除了polyline双击左键监听，在折线上测试一下！", 1);
}

// polygon左键单击事件
let polygonClickHandler;
function regPolygonClick() {
  if (polygon === undefined) {
    layerAlert("请先创建polygon标注，再试一下！", 7);
  } else {
    polygonClickHandler = event.bind(polygon, "click", polygonClickCallback);
    layerAlert("注册了polygon左键单击监听，点击面测试一下！", 1);
  }
}

function polygonClickCallback(evt) {
  layerAlert("polygon上的点坐标集是：" + "(" + JSON.stringify(evt.path) + ")", 1);
}

function unRegPolygonClick() {
  event.unbind(polygonClickHandler);
  layerAlert("移除了polygon左键单击监听，在面测试一下！", 1);
}

// polygon双击左键事件
let polygonDblClickHandler;
function regPolygonDblClick() {
  if (polygon === undefined) {
    layerAlert("请先创建polygon标注，再试一下！", 7);
  } else {
    polygonDblClickHandler = event.bind(polygon, "dblclick", polygonDblClickCallback);
    layerAlert("注册了polygon双击左键监听，左键双击面测试一下！", 1);
  }
}

function polygonDblClickCallback(evt) {
  layerAlert("polygon上的点坐标集是：" + "(" + JSON.stringify(evt.path) + ")", 1);
}

function unRegPolygonDblClick() {
  event.unbind(polygonDblClickHandler);
  layerAlert("移除了polygon双击左键监听，在面测试一下！", 1);
}