// 定位类库
// 根据经纬度定位
function locationByLnglat(lng, lat) {
  loc.locationByLnglat(map, lng, lat);
  layerAlert("点击了根据经纬度定位按钮，并来到了青岛", 1);
}