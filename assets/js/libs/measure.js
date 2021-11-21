// 测量类库
// 新建线段测量对象
let measureLine = "";

function newMeasureLine() {
  measureLine = new KGIS.MeasureLine(map);
  layerAlert("点击了新建线段测量对象按钮，仅创建了一个测量对象", 1);
}

// 开始测量长度
function openMeasureLine() {
  if (measureLine === "") {
    layerAlert("请先创建线段测对象，在开始测量长度", 7);
  } else {
    measure.openMeasureLine(measureLine);
    layerAlert("点击了开始测量长度按钮，可以在地图上点击测量了", 1);
  }
}

// 结束测量长度
function closeMeasureLine() {
  if (measureLine === "") {
    layerAlert("请先创建线段测对象，在结束测量长度", 7);
  } else {
    measure.closeMeasureLine(measureLine);
    measureLine = "";
    layerAlert("点击了结束测量长度按钮，现在不能再测量长度了", 1);
  }
}

// 新建面积测量对象
let measureArea = "";

function newMeasureArea() {
  measureArea = new KGIS.MeasureArea(map);
  layerAlert("点击了新建面积测量对象按钮，只创建了测量对象", 1);
}

// 开始测量面积
function openMeasureArea() {
  if (measureArea === "") {
    layerAlert("请先创建线段测对象，在开始测量长度", 7);
  } else {
    measure.openMeasureArea(measureArea);
    layerAlert("点击了开始测量面积按钮，可以开始在地图上测量面积了", 1);
  }

}

// 结束测量面积
function closeMeasureArea() {
  if (measureArea === "") {
    layerAlert("请先创建线段测对象，在结束测量面积", 7);
  } else {
    measure.closeMeasureArea(measureArea);
    measureArea = "";
    layerAlert("点击了结束测量面积按钮，不能再测量面积了", 1);
  }
}