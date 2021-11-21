// 弹窗类库
// 新建信息弹窗
let infoWindowHandler;
function newInfoWindow() {
  if (marker === undefined) {
    layerAlert("请先创建marker标注，再试一下！", 7);
  } else {
    if (!infoWindowHandler) {
      infoWindowHandler = event.bind(marker, "click", infoWindowCallback);
    } else {
      layerAlert("已经给marker添加了监听，不需要重复添加该监听了！", 7);
    }
  }
}

function infoWindowCallback(e) {
  var offset = [];
  if (KGIS.maptype === "amap") {
    offset = [24, 8];
  }else if (KGIS.maptype === "bmap") {
    offset = [8, -10];
  }
  let opts = {
    width: 200,
    height: 100,
    title: "我是标题",
    map: map,
    offset: offset // amap: [24, 8]  bmap: [8, -10]
  };
  let iWindow = new KGIS.InfoWindow("我是要显示的内容，也可以是html布局文件", opts);
  map.openInfoWindow(iWindow, e.lnglat);
}
