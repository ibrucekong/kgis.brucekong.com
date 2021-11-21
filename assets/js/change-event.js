$(".content").width($("#app-main").width() + 40);

rresize();

$(window).resize(function () {
  $(".content").width($("#app-main").width() + 40);
  rresize();
})
$("#menubar").resize(function () {
  rresize();
})

function rresize() {
  // 初始化进入，判断左侧菜单的宽度，如果有，则是走PC，没有的话，走Phone
  if ($("#menubar").css("left") !== "0px"){
    if (IsPC()){
      $(".content").css("padding", 20);
      if ($("#menubar").css("left") === "-222px") {
        $(".content").css("padding", 0);
        // 显示菜单
        $(".content").width($("#app-main").width());
        $(".content").height($("#app-main").height());
      }else if ($("#menubar").css("left") === "0px") {
        $(".content").css("padding", 0);
        // 隐藏菜单
        $(".content").width($("#app-main").width());
        $(".content").height($("#app-main").height());
      }
    } else {
      $(".content").css("padding", 0);
    }
  }else {
    if (IsPC()){
      $(".content").css("padding", 20);
      if ($("#menubar").css("left") === "-222px") {
        // 显示菜单
        $(".content").width($("#app-main").width() - 40);
        $(".content").height($("#app-main").height() - 40);
      }else if ($("#menubar").css("left") === "0px") {
        // 隐藏菜单
        $(".content").width($("#app-main").width() + 40);
        $(".content").height($("#app-main").height() -40);
      }
    } else {
      $(".content").css("padding", 0);
    }
  }

}


// 手机中或者小屏电脑上
$("#menubar-toggle-btn").click(function () {
  $(".content").css("padding", 0);
  // 左侧菜单宽度变化，自动适配地图宽度，也解决了在F12中手机界面和PC界面切换时的bug
  if (IsPC()) {
    if ($("#menubar").css("left") === "-222px") {
      // 显示菜单
      $(".content").width($("#app-main").width());
    }else if ($("#menubar").css("left") === "0px") {
      // 隐藏菜单
      $(".content").width($("#app-main").width());
      $(".content").height($("#app-main").height());
    }
  } else {
    // phone done
    $(".ui-kmap").width($(".content").width());
    $(window).resize(function () {
      $(".ui-kmap").width($(".content").width());
    });
    $(".content").css("height", "100%");
    $(".ui-kmap").css("height", "100%");
  }
});

$("#menubar-fold-btn").click(function () {
  // 大屏pc下
  $(".content").width($("#app-main").width() + 40);

});


function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}