// 标注类库
// 添加文字标注
function addLabel() {
  map.panTo(new KGIS.Point(117.02, 36.70));
  if (label === undefined) {
    let labelOptions = {
      offset:new KGIS.Size(10,5),
      position:new KGIS.Point(117.02, 36.70),
      map: map
    };
    label = new KGIS.Label("我是文字标注", labelOptions);
    map.addOverlay(label, function () {
      layerAlert("点击了添加文字标注按钮", 1);
    });
  } else {
    layerAlert("已经创建了label了", 7);
  }
}

// 移除label
function removeLabel() {
  if (label) {
    map.removeOverlay(label, function () {
      layerAlert("点击了移除文字标注按钮", 1);
      label = undefined;
    });
  } else {
    layerAlert("先创建label，才能删除它", 7);
  }
}

// 添加标注点
function addMarker() {
  if (marker === undefined) {
    map.panTo(120, 36);
    let iconOptions = {
      url: '../assets/images/index/marker.png',
      size: new KGIS.Size(36, 36), // 默认是36
      imageOffset: new KGIS.Size(0, 0), // 图片相对于可视域的偏移值，加了偏移量对于下面获取的getPosition的值有影响
      map: map
    };
    let icon = new KGIS.Icon(iconOptions);
    let markerOptions = {
      offset: new KGIS.Size(10, 5),
      icon: icon,
      enableDragging: false,
      raiseOnDrag: false,
      rotation: 0,
      title: "新建标注点",
      map: map
    };
    marker = new KGIS.Marker(new KGIS.Point(120, 36), markerOptions);
    map.addOverlay(marker, function () {
      layerAlert("点击了添加标注点按钮，并来到了青岛", 1);
    });
  } else {
    layerAlert("已经创建了marker了", 7);
  }

}

// 移除marker
function removeMarker() {
  if (marker) {
    map.removeOverlay(marker, function () {
      layerAlert("点击了移除标注点按钮", 1);
      marker = undefined;
    });
  } else {
    layerAlert("先创建marker，才能删除它", 7);
  }
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
    strokeStyle: "solid",
    map: map
  };
  polyline = new KGIS.Polyline(pArr, polylineOptions);
  map.addOverlay(polyline, function () {
    layerAlert("点击了添加标注折线按钮，并来到了青岛", 1);
  });
}

// 移除标注线
function removePolyline() {
  if (polyline) {
    map.removeOverlay(polyline, function () {
      layerAlert("点击了移除标注线按钮", 1);
      polyline = undefined;
    });
  } else {
    layerAlert("先创建marker，才能删除它", 7);
  }
}

// 添加标注面
function addPolygon() {
  map.centerAndZoom([120.122, 36.430], 16);
  let pArr = [
    new KGIS.Point(120.120, 36.432),
    new KGIS.Point(120.121, 36.431),
    new KGIS.Point(120.122, 36.430),
    new KGIS.Point(120.123, 36.433),
    new KGIS.Point(120.124, 36.434),
    new KGIS.Point(120.125, 36.436)];
  let polygonOptions = {
    strokeColor: "#FF0000",
    fillColor: "#00cc00",
    strokeWeight: 3,
    strokeOpacity: 1,
    strokeStyle: "solid",
    map: map
  };
  polygon = new KGIS.Polygon(pArr, polygonOptions);
  map.addOverlay(polygon, function () {
    layerAlert("点击了添加标注面按钮，并来到了青岛", 1);
  });
}

// 移除标注面
function removePolygon() {
  if (polygon) {
    map.removeOverlay(polygon, function () {
      layerAlert("点击了移除标注线按钮", 1);
      polygon = undefined;
    });
  } else {
    layerAlert("先创建marker，才能删除它", 7);
  }
}