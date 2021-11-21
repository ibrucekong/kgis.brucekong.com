// 服务类库
// 关键词自动提示
function showAutoComplete(){
  let dom = document.getElementsByClassName("search")[0];

  if (dom.style.display === "block") {
    dom.style.display = "none";
  }else {
    dom.style.display = "block";
    new KGIS.AutoComplete("search", function (info) {
      layerAlert(JSON.stringify(info), 1);
      let point = info.point;
      let markerOption = {
        map: map
      };
      let marker = new KGIS.Marker(point, markerOption);
      map.addOverlay(marker,function (e) {
        map.centerAndZoom(point, 18);
      })
    })
  }
}

let dr;
function drivingRoute(policy) {
  dr ? dr.clearRoute(dr) : 0;
  dr = new KGIS.DrivingRoute(map, policy); // 默认policy = 1

  let start = new KGIS.Point(116, 37);
  let end = new KGIS.Point(117, 36);
  dr.search(dr, start, end);

  layerAlert("驾车路线规划成功", 1);
}

function clearDrivingRoute() {
  dr.clearRoute(dr, 1);
  layerAlert("驾车路线清除成功", 1);
}