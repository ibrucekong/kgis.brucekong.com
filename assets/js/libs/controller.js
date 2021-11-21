// 控件类库
let scale, toolbar, overview;

// 添加比例尺
function addScale() {
  if (scale === undefined) {
    scale = new KGIS.Scale(map, "leftbottom");
    map.addControl(scale);
    layerAlert("点击了添加比例尺按钮，看右下角", 1);
  } else {
    layerAlert("已经添加了比例尺，不需要重复添加了", 7);
  }
}

// 移除比例尺
function removeScale() {
  if (scale !== undefined) {
    map.removeControl(scale);
    layerAlert("点击了移除比例尺按钮，看右下角", 1);
    scale = undefined;
  } else {
    layerAlert("已经添加了比例尺，不需要重复添加了", 7);
  }
}

// 添加工具条
function addToolBar() {
  if (toolbar === undefined) {
    toolbar = new KGIS.ToolBar(map, "lefttop");
    map.addControl(toolbar);
    layerAlert("点击了添加工具条按钮，看左上角", 1);
  } else {
    layerAlert("已经添加了工具条，不需要重复添加了", 7);
  }
}

// 移除工具条
function removeToolBar() {
  if (toolbar !== undefined) {
    map.removeControl(toolbar);
    layerAlert("点击了添加工具条按钮，看左上角", 1);
    toolbar = undefined;
  } else {
    layerAlert("先添加控件再移除", 7);
  }
}

// 添加鹰眼
function addOverView(type) {
  if (overview === undefined) {
    overview = new KGIS.OverView(map, type);
    map.addControl(overview);
    layerAlert("点击了添加鹰眼按钮，看右下角", 1);
  } else {
    layerAlert("已经添加了鹰眼，不需要重复添加了", 7);
  }
}

// 移除鹰眼
function removeOverView() {
  if (overview) {
    map.removeControl(overview);
    overview = undefined;
    layerAlert("点击了移除鹰眼按钮，看右下角", 1);
  } else {
    layerAlert("先添加控件再移除", 7);
  }
}