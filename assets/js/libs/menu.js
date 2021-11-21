// 菜单
let mapMenu;

// 初始化地图菜单
function initMapMenu(){
  if (!mapMenu){
    mapMenu = new KGIS.Menu(map);
    layerAlert("菜单初始化成功", 1);
  } else {
    layerAlert("菜单已经初始化了", 1);
  }
}

//添加地图右键菜单
function addMapMenuZoomIn() {
  if (mapMenu) {
    let name = "地图放大右键菜单";
    mapMenu.addMenuItem(name, function () {
      map.zoomIn();
      layerAlert("地图放大", 1);
    });
    layerAlert("菜单添加成功，还需“生成菜单”！", 1);
  }else {
    layerAlert("菜单还没初始化", 1);
  }
}

function addMapMenuSeparator() {
  if (mapMenu) {
    mapMenu.addMenuSeparator(mapMenu);
    layerAlert("菜单添加成功，还需“生成菜单”！", 1);
  }else {
    layerAlert("菜单还没初始化", 1);
  }
}

function addMapMenuZoomOut() {
  if (mapMenu) {
    let name = "地图缩小右键菜单";
    mapMenu.addMenuItem(name, function () {
      map.zoomOut();
      layerAlert("地图缩小", 1);
    });
    layerAlert("菜单添加成功，还需“生成菜单”！", 1);
  }else {
    layerAlert("菜单还没初始化", 1);
  }
}

function completeMapMenu(){
  if (mapMenu) {
    map.addContextMenu(mapMenu);
    layerAlert("菜单生成成功", 1);
  }else {
    layerAlert("菜单还没初始化", 1);
  }
}


let markerMenu;
// 初始化marker菜单对象
function initMarkerMenu(){
  if (!markerMenu){
    markerMenu = new KGIS.Menu(map);
    layerAlert("菜单初始化成功", 1);
  } else {
    layerAlert("菜单已经初始化了", 1);
  }
}

function addMarkerMenuRight() {
  if (markerMenu) {
    layerAlert("在marker上添加了右键菜单", 1);
    let name = "点右键菜单";
    markerMenu.addMenuItem(name, function (info) {
      layerAlert("点击了marker上的放大菜单" + JSON.stringify(info), 1);
      map.zoomIn();
    });
  }
}

function completeMarkerMenu(){
  if (markerMenu) {
    marker.addContextMenu(marker, markerMenu);
    layerAlert("菜单生成成功", 1);
  }else {
    layerAlert("菜单还没初始化", 1);
  }
}

let polylineMenu;
// 初始化polyline菜单对象
function initPolylineMenu() {
  if (!polylineMenu){
    polylineMenu = new KGIS.Menu(map);
    layerAlert("菜单初始化成功", 1);
  } else {
    layerAlert("菜单已经初始化了", 1);
  }
}

function addPolylineMenuRight() {
  if (polylineMenu) {
    layerAlert("在polyline上添加了右键菜单", 1);
    let name = "线右键菜单";
    polylineMenu.addMenuItem(name, function (info) {
      layerAlert("点击了polyline上的放大菜单" + JSON.stringify(info), 1);
      map.zoomIn();
    });
  }
}

function completePolylineMenu(){
  if (polylineMenu) {
    polyline.addContextMenu(polyline, polylineMenu);
    layerAlert("菜单生成成功", 1);
  }else {
    layerAlert("菜单还没初始化", 1);
  }
}


let polygonMenu;
// 初始化polygon菜单对象
function initPolygonMenu() {
  if (!polygonMenu){
    polygonMenu = new KGIS.Menu(map);
    layerAlert("菜单初始化成功", 1);
  } else {
    layerAlert("菜单已经初始化了", 1);
  }
}

function addPolygonMenuRight() {
  if (polygonMenu) {
    layerAlert("在polygon上添加了右键菜单", 1);
    let name = "面右键菜单";
    polygonMenu.addMenuItem(name, function (info) {
      layerAlert("点击了polygon上的放大菜单" + JSON.stringify(info), 1);
      map.zoomIn();
    });
  }
}

function completePolygonMenu(){
  if (polygonMenu) {
    polygon.addContextMenu(polygon, polygonMenu);
    layerAlert("菜单生成成功", 1);
  }else {
    layerAlert("菜单还没初始化", 1);
  }
}