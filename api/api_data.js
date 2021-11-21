define({ "api": [
  {
    "type": "get",
    "url": "OverView(map,status)",
    "title": "新建鹰眼",
    "name": "OverView",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建鹰眼。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "map",
            "description": "<p>需要绑定的地图.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>初始化状态的鹰眼是开启还是关闭.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overview = new KGIS.OverView(map, true);",
        "type": "OverView"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nOverView对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/overview.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "OverView(map,status)",
    "title": "新建鹰眼",
    "name": "OverView",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建鹰眼。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "map",
            "description": "<p>需要绑定的地图.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>初始化状态的鹰眼是开启还是关闭.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overview = new KGIS.OverView(map, true);",
        "type": "OverView"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nOverView对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/overview.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "OverView(map,status)",
    "title": "新建鹰眼",
    "name": "OverView",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建鹰眼。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "map",
            "description": "<p>需要绑定的地图.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>初始化状态的鹰眼是开启还是关闭.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overview = new KGIS.OverView(map, true);",
        "type": "OverView"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nOverView对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis4/obj/overview.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "OverView(map,status)",
    "title": "新建鹰眼",
    "name": "OverView",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建鹰眼。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "map",
            "description": "<p>需要绑定的地图对象.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>初始化状态的鹰眼是开启还是关闭.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overview = new KGIS.OverView(map, true);",
        "type": "OverView"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nOverView对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/overview.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "OverView(status)",
    "title": "新建鹰眼",
    "name": "OverView",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建鹰眼。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "map",
            "description": "<p>需要绑定的地图对象.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>初始化状态的鹰眼是开启还是关闭.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overview = new KGIS.OverView(map, true);",
        "type": "OverView"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nOverView对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/overview.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "Scale(position)",
    "title": "新建比例尺",
    "name": "Scale",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建比例尺。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>支持左下（leftbottom），左上（lefttop），右下（rightbottom），右上（righttop）四个方位</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let scale = new KGIS.Scale(\"leftbottom\");",
        "type": "Scale"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nScale对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/scale.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "Scale(position)",
    "title": "新建比例尺",
    "name": "Scale",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建比例尺。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>支持左下（leftbottom），左上（lefttop），右下（rightbottom），右上（righttop）四个方位</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let scale = new KGIS.Scale(\"leftbottom\");",
        "type": "Scale"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nScale对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/scale.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "Scale(position)",
    "title": "新建比例尺",
    "name": "Scale",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建比例尺。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>支持左下（leftbottom），左上（lefttop），右下（rightbottom），右上（righttop）四个方位</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let scale = new KGIS.Scale(\"leftbottom\");",
        "type": "Scale"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nScale对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis4/obj/scale.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "Scale(map,position)",
    "title": "新建比例尺",
    "name": "Scale",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建比例尺。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "map",
            "description": "<p>需要绑定的地图对象</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>支持左下（leftbottom），左上（lefttop），右下（rightbottom），右上（righttop）四个方位</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let scale = new KGIS.Scale(map, \"leftbottom\");",
        "type": "Scale"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nScale对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/scale.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "Scale(position)",
    "title": "新建比例尺",
    "name": "Scale",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建比例尺。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "map",
            "description": "<p>需要绑定的地图对象</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>支持左下（leftbottom），左上（lefttop），右下（rightbottom），右上（righttop）四个方位</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let scale = new KGIS.Scale(map, \"leftbottom\");",
        "type": "Scale"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nScale对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/scale.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "ToolBar(position)",
    "title": "新建工具条",
    "name": "ToolBar",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建工具条。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>支持左下（leftbottom），左上（lefttop），右下（rightbottom），右上（righttop）四个方位</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let toolbar = new KGIS.ToolBar(\"leftbottom\");",
        "type": "ToolBar"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nToolBar对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/toolbar.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "ToolBar(position)",
    "title": "新建工具条",
    "name": "ToolBar",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建工具条。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>支持左下（leftbottom），左上（lefttop），右下（rightbottom），右上（righttop）四个方位</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let toolbar = new KGIS.ToolBar(\"leftbottom\");",
        "type": "ToolBar"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nToolBar对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/toolbar.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "ToolBar(position)",
    "title": "新建工具条",
    "name": "ToolBar",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建工具条。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>支持左下（leftbottom），左上（lefttop），右下（rightbottom），右上（righttop）四个方位</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let toolbar = new KGIS.ToolBar(\"leftbottom\");",
        "type": "ToolBar"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nToolBar对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis4/obj/toolbar.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "ToolBar(position)",
    "title": "新建工具条",
    "name": "ToolBar",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建工具条。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>支持左下（leftbottom），左上（lefttop），右下（rightbottom），右上（righttop）四个方位</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let toolbar = new KGIS.ToolBar(\"leftbottom\");",
        "type": "ToolBar"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nToolBar对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/toolbar.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "ToolBar(map,position)",
    "title": "新建工具条",
    "name": "ToolBar",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>新建工具条。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "map",
            "description": "<p>需要绑定的地图对象</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>支持左下（leftbottom），左上（lefttop），右下（rightbottom），右上（righttop）四个方位</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let toolbar = new KGIS.ToolBar(map, \"leftbottom\");",
        "type": "ToolBar"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nToolBar对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/toolbar.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "addControl(control)",
    "title": "添加控件",
    "name": "addControl",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>添加控件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "control",
            "description": "<p>需要添加的控件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet scale = new KGIS.Scale(\"leftbottom\");\nmap.addControl(scale);",
        "type": "addControl"
      }
    ],
    "filename": "src/map/amap/controller.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "addControl(control)",
    "title": "添加控件",
    "name": "addControl",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>添加控件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "control",
            "description": "<p>需要添加的控件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet controller = new KGIS.Controller();\nlet scale = new KGIS.Scale(\"leftbottom\");\nmap.addControl(scale);",
        "type": "addControl"
      }
    ],
    "filename": "src/map/arcgis/controller.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "addControl(control)",
    "title": "添加控件",
    "name": "addControl",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>添加控件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "control",
            "description": "<p>需要添加的控件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet controller = new KGIS.Controller();\nlet scale = new KGIS.Scale(\"leftbottom\");\nmap.addControl(scale);",
        "type": "addControl"
      }
    ],
    "filename": "src/map/arcgis4/controller.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "addControl(control)",
    "title": "添加控件",
    "name": "addControl",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>添加控件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "control",
            "description": "<p>需要添加的控件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet controller = new KGIS.Controller();\nlet scale = new KGIS.Scale(\"leftbottom\");\nmap.addControl(scale);",
        "type": "addControl"
      }
    ],
    "filename": "src/map/bmap/controller.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "addControl(control)",
    "title": "添加控件",
    "name": "addControl",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>添加控件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "control",
            "description": "<p>需要添加的控件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet controller = new KGIS.Controller();\nlet scale = new KGIS.Scale(map, \"leftbottom\");\nmap.addControl(scale);",
        "type": "addControl"
      }
    ],
    "filename": "src/map/gmap/controller.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "removeControl(control)",
    "title": "移除控件",
    "name": "removeControl",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>移除控件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "control",
            "description": "<p>需要移除的控件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet scale = new KGIS.Scale(map, \"leftbottom\");\nmap.addControl(scale);\nmap.removeControl(scale);",
        "type": "removeControl"
      }
    ],
    "filename": "src/map/amap/controller.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "removeControl(control)",
    "title": "移除控件",
    "name": "removeControl",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>移除控件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "control",
            "description": "<p>需要移除的控件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet controller = new KGIS.Controller();\nlet scale = new KGIS.Scale(\"leftbottom\");\nmap.addControl(scale);\nmap.removeControl(scale);",
        "type": "removeControl"
      }
    ],
    "filename": "src/map/arcgis/controller.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "removeControl(control)",
    "title": "移除控件",
    "name": "removeControl",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>移除控件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "control",
            "description": "<p>需要移除的控件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet controller = new KGIS.Controller();\nlet scale = new KGIS.Scale(\"leftbottom\");\nmap.addControl(scale);\nmap.removeControl(scale);",
        "type": "removeControl"
      }
    ],
    "filename": "src/map/arcgis4/controller.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "removeControl(control)",
    "title": "移除控件",
    "name": "removeControl",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>移除控件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "control",
            "description": "<p>需要移除的控件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet controller = new KGIS.Controller();\nlet scale = new KGIS.Scale(map, \"leftbottom\");\nmap.addControl(scale);\nmap.removeControl(scale);",
        "type": "removeControl"
      }
    ],
    "filename": "src/map/bmap/controller.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "removeControl(control)",
    "title": "移除控件",
    "name": "removeControl",
    "group": "Controller",
    "version": "0.0.1",
    "description": "<p>移除控件</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "control",
            "description": "<p>需要移除的控件</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet controller = new KGIS.Controller();\nlet scale = controller.newScale(map, \"leftbottom\");\nmap.addControl(scale);\nmap.removeControl(scale);",
        "type": "removeControl"
      }
    ],
    "filename": "src/map/gmap/controller.js",
    "groupTitle": "控件类"
  },
  {
    "type": "get",
    "url": "bind(obj,type,callback)",
    "title": "注册事件",
    "name": "bind",
    "group": "Event",
    "version": "0.0.1",
    "description": "<p>注册鼠标点击事件，支持地图、marker、polyline、polygon的点击事件，包括单击、双击，左键、右键</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>点击的媒介，地图（map）点击、覆盖物（overlay）点击，其他点击</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>支持的监听事件，左键单击（click）、左键双击（dbclick）、右键单击（rightclick）、右键双击（rightdbclick），地图缩放开始（zoomstart）、地图缩放结束（zoomend），拖拽开始（dragstart），拖拽中（dragging），拖拽结束（dragend），地图开始（movestart）、地图移动中（moving）、地图移动结束（moveend），鼠标移动到覆盖物上（mouseover）、离开覆盖物（mouseout）、鼠标在覆盖物上按下（mousedown）、在覆盖物上释放（mouseup）</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>返回回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let event = new KGIS.Event();\nlet map = new KGIS.Map();\nevent.bind(map,\"click\",function (evt) {\n layer.msg(\"地图上的坐标是：\" + \"(\" + JSON.stringify(evt.lnglat) + \")\", {icon: 1});\n});",
        "type": "bind"
      }
    ],
    "filename": "src/map/amap/event.js",
    "groupTitle": "事件类"
  },
  {
    "type": "get",
    "url": "bind(obj,type,callback)",
    "title": "注册事件",
    "name": "bind",
    "group": "Event",
    "version": "0.0.1",
    "description": "<p>注册鼠标点击事件，支持地图、marker、polyline、polygon的点击事件，包括单击、双击，左键、右键</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>点击的媒介，地图（map）点击、覆盖物（overlay）点击，其他点击</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>支持的监听事件，左键单击（click）、左键双击（dbclick）、右键单击（rightclick）、右键双击（rightdbclick），地图缩放开始（zoomstart）、地图缩放结束（zoomend），拖拽开始（dragstart），拖拽中（dragging），拖拽结束（dragend），地图开始（movestart）、地图移动中（moving）、地图移动结束（moveend），鼠标移动到覆盖物上（mouseover）、离开覆盖物（mouseout）、鼠标在覆盖物上按下（mousedown）、在覆盖物上释放（mouseup）</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>返回回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let event = new KGIS.Event();\nlet map = new KGIS.Map();\nevent.bind(map,\"click\",function (e) {\n layer.msg(\"地图上的坐标是：\" + \"(\" + JSON.stringify(evt.lnglat) + \")\", {icon: 1});\n});",
        "type": "bind"
      }
    ],
    "filename": "src/map/arcgis/event.js",
    "groupTitle": "事件类"
  },
  {
    "type": "get",
    "url": "bind(obj,type,callback)",
    "title": "注册事件",
    "name": "bind",
    "group": "Event",
    "version": "0.0.1",
    "description": "<p>注册鼠标点击事件，支持地图、marker、polyline、polygon的点击事件，包括单击、双击，左键、右键</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>点击的媒介，地图（map）点击、覆盖物（overlay）点击，其他点击</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>支持的监听事件，左键单击（click）、左键双击（dbclick）、右键单击（rightclick）、右键双击（rightdbclick），地图缩放开始（zoomstart）、地图缩放结束（zoomend），拖拽开始（dragstart），拖拽中（dragging），拖拽结束（dragend），地图开始（movestart）、地图移动中（moving）、地图移动结束（moveend），鼠标移动到覆盖物上（mouseover）、离开覆盖物（mouseout）、鼠标在覆盖物上按下（mousedown）、在覆盖物上释放（mouseup）</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>返回回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let event = new KGIS.Event();\nlet map = new KGIS.Map();\nevent.bind(map,\"click\",function (e) {\n layer.msg(\"地图上的坐标是：\" + \"(\" + JSON.stringify(evt.lnglat) + \")\", {icon: 1});\n});",
        "type": "bind"
      }
    ],
    "filename": "src/map/bmap/event.js",
    "groupTitle": "事件类"
  },
  {
    "type": "get",
    "url": "bind(obj,type,callback)",
    "title": "注册事件",
    "name": "bind",
    "group": "Event",
    "version": "0.0.1",
    "description": "<p>注册鼠标点击事件，支持地图、marker、polyline、polygon的点击事件，包括单击、双击，左键、右键</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>点击的媒介，地图（map）点击、覆盖物（overlay）点击，其他点击</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>支持的监听事件，左键单击（click）、左键双击（dbclick）、右键单击（rightclick）、右键双击（rightdbclick），地图缩放开始（zoomstart）、地图缩放结束（zoomend），拖拽开始（dragstart），拖拽中（dragging），拖拽结束（dragend），地图开始（movestart）、地图移动中（moving）、地图移动结束（moveend），鼠标移动到覆盖物上（mouseover）、离开覆盖物（mouseout）、鼠标在覆盖物上按下（mousedown）、在覆盖物上释放（mouseup）</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>返回回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let event = new KGIS.Event();\nlet map = new KGIS.Map();\nevent.bind(map,\"click\",function (e) {\n layer.msg(\"地图上的坐标是：\" + \"(\" + JSON.stringify(evt.lnglat) + \")\", {icon: 1});\n});",
        "type": "bind"
      }
    ],
    "filename": "src/map/gmap/event.js",
    "groupTitle": "事件类"
  },
  {
    "type": "get",
    "url": "bind(obj,type,callback)",
    "title": "注册事件",
    "name": "bind",
    "group": "Event",
    "version": "0.0.1",
    "description": "<p>注册鼠标点击事件，支持地图、marker、polyline、polygon的点击事件，包括单击、双击，左键、右键</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>点击的媒介，地图（map）点击、覆盖物（overlay）点击，其他点击</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>支持的监听事件，左键单击（click）、左键双击（dbclick）、右键单击（rightclick）、右键双击（rightdbclick），地图缩放开始（zoomstart）、地图缩放结束（zoomend），拖拽开始（dragstart），拖拽中（dragging），拖拽结束（dragend），地图开始（movestart）、地图移动中（moving）、地图移动结束（moveend），鼠标移动到覆盖物上（mouseover）、离开覆盖物（mouseout）、鼠标在覆盖物上按下（mousedown）、在覆盖物上释放（mouseup）</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>返回回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let event = new KGIS.Event();\nlet map = new KGIS.Map();\nevent.bind(map,\"click\",function (e) {\n layer.msg(\"地图上的坐标是：\" + \"(\" + JSON.stringify(evt.lnglat) + \")\", {icon: 1});\n});",
        "type": "bind"
      }
    ],
    "filename": "src/map/leaflet/event.js",
    "groupTitle": "事件类"
  },
  {
    "type": "get",
    "url": "unbind(obj,type,callback)",
    "title": "移除事件",
    "name": "unbind",
    "group": "Event",
    "version": "0.0.1",
    "description": "<p>移除鼠标点击事件，支持地图、marker、polyline、polygon的点击事件，包括单击、双击，左键、右键</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>点击的媒介，地图（map）点击、覆盖物（overlay）点击，其他点击</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>支持的监听事件，左键单击（click）、左键双击（dbclick）、右键单击（rightclick）、右键双击（rightdbclick），地图缩放开始（zoomstart）、地图缩放结束（zoomend），拖拽开始（dragstart），拖拽中（dragging），拖拽结束（dragend），地图开始（movestart）、地图移动中（moving）、地图移动结束（moveend），鼠标移动到覆盖物上（mouseover）、离开覆盖物（mouseout）、鼠标在覆盖物上按下（mousedown）、在覆盖物上释放（mouseup）</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>返回回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let event = new KGIS.Event();\nlet map  = new KGIS.Map();\nevent.bind(map,\"zoomstart\",regMapZoomstartCallback);\nfunction regMapZoomstartCallback(){\n layer.msg(\"地图开始缩放\", {icon: 1});\n}",
        "type": "unbind"
      }
    ],
    "filename": "src/map/amap/event.js",
    "groupTitle": "事件类"
  },
  {
    "type": "get",
    "url": "unbind(obj,type,callback)",
    "title": "移除事件",
    "name": "unbind",
    "group": "Event",
    "version": "0.0.1",
    "description": "<p>移除鼠标点击事件，支持地图、marker、polyline、polygon的点击事件，包括单击、双击，左键、右键</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>点击的媒介，地图（map）点击、覆盖物（overlay）点击，其他点击</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>支持的监听事件，左键单击（click）、左键双击（dbclick）、右键单击（rightclick）、右键双击（rightdbclick），地图缩放开始（zoomstart）、地图缩放结束（zoomend），拖拽开始（dragstart），拖拽中（dragging），拖拽结束（dragend），地图开始（movestart）、地图移动中（moving）、地图移动结束（moveend），鼠标移动到覆盖物上（mouseover）、离开覆盖物（mouseout）、鼠标在覆盖物上按下（mousedown）、在覆盖物上释放（mouseup）</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>返回回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let event = new KGIS.Event();\nlet map  = new KGIS.Map();\nevent.bind(map,\"zoomstart\",regMapZoomstartCallback);\nfunction regMapZoomstartCallback(){\n layer.msg(\"地图开始缩放\", {icon: 1});\n}",
        "type": "unbind"
      }
    ],
    "filename": "src/map/arcgis/event.js",
    "groupTitle": "事件类"
  },
  {
    "type": "get",
    "url": "unbind(obj,type,callback)",
    "title": "移除事件",
    "name": "unbind",
    "group": "Event",
    "version": "0.0.1",
    "description": "<p>移除鼠标点击事件，支持地图、marker、polyline、polygon的点击事件，包括单击、双击，左键、右键</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>点击的媒介，地图（map）点击、覆盖物（overlay）点击，其他点击</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>支持的监听事件，左键单击（click）、左键双击（dbclick）、右键单击（rightclick）、右键双击（rightdbclick），地图缩放开始（zoomstart）、地图缩放结束（zoomend），拖拽开始（dragstart），拖拽中（dragging），拖拽结束（dragend），地图开始（movestart）、地图移动中（moving）、地图移动结束（moveend），鼠标移动到覆盖物上（mouseover）、离开覆盖物（mouseout）、鼠标在覆盖物上按下（mousedown）、在覆盖物上释放（mouseup）</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>返回回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let event = new KGIS.Event();\nlet map  = new KGIS.Map();\nevent.bind(map,\"zoomstart\",regMapZoomstartCallback);\nfunction regMapZoomstartCallback(){\n layer.msg(\"地图开始缩放\", {icon: 1});\n}",
        "type": "unbind"
      }
    ],
    "filename": "src/map/bmap/event.js",
    "groupTitle": "事件类"
  },
  {
    "type": "get",
    "url": "unbind(obj,type,callback)",
    "title": "移除事件",
    "name": "unbind",
    "group": "Event",
    "version": "0.0.1",
    "description": "<p>移除鼠标点击事件，支持地图、marker、polyline、polygon的点击事件，包括单击、双击，左键、右键</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>点击的媒介，地图（map）点击、覆盖物（overlay）点击，其他点击</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>支持的监听事件，左键单击（click）、左键双击（dbclick）、右键单击（rightclick）、右键双击（rightdbclick），地图缩放开始（zoomstart）、地图缩放结束（zoomend），拖拽开始（dragstart），拖拽中（dragging），拖拽结束（dragend），地图开始（movestart）、地图移动中（moving）、地图移动结束（moveend），鼠标移动到覆盖物上（mouseover）、离开覆盖物（mouseout）、鼠标在覆盖物上按下（mousedown）、在覆盖物上释放（mouseup）</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>返回回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let event = new KGIS.Event();\nlet map  = new KGIS.Map();\nevent.bind(map,\"zoomstart\",regMapZoomstartCallback);\nfunction regMapZoomstartCallback(){\n layer.msg(\"地图开始缩放\", {icon: 1});\n}",
        "type": "unbind"
      }
    ],
    "filename": "src/map/gmap/event.js",
    "groupTitle": "事件类"
  },
  {
    "type": "get",
    "url": "unbind(obj,type,callback)",
    "title": "移除事件",
    "name": "unbind",
    "group": "Event",
    "version": "0.0.1",
    "description": "<p>移除鼠标点击事件，支持地图、marker、polyline、polygon的点击事件，包括单击、双击，左键、右键</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>点击的媒介，地图（map）点击、覆盖物（overlay）点击，其他点击</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>支持的监听事件，左键单击（click）、左键双击（dbclick）、右键单击（rightclick）、右键双击（rightdbclick），地图缩放开始（zoomstart）、地图缩放结束（zoomend），拖拽开始（dragstart），拖拽中（dragging），拖拽结束（dragend），地图开始（movestart）、地图移动中（moving）、地图移动结束（moveend），鼠标移动到覆盖物上（mouseover）、离开覆盖物（mouseout）、鼠标在覆盖物上按下（mousedown）、在覆盖物上释放（mouseup）</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>返回回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let event = new KGIS.Event();\nlet map  = new KGIS.Map();\nevent.bind(map,\"zoomstart\",regMapZoomstartCallback);\nfunction regMapZoomstartCallback(){\n layer.msg(\"地图开始缩放\", {icon: 1});\n}",
        "type": "unbind"
      }
    ],
    "filename": "src/map/leaflet/event.js",
    "groupTitle": "事件类"
  },
  {
    "type": "get",
    "url": "getLocationByPoint(point,callback)",
    "title": "逆地址解析",
    "name": "getLocationByPoint",
    "group": "Geocoder",
    "version": "0.0.1",
    "description": "<p>根据地址定位（逆地理解析）</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入的点对象</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let location = new KGIS.Location();\nlocation.getLocationByPoint(new KGIS.Point(116,37), function(result){\n console.log(result.address);\n);",
        "type": "getLocationByPoint"
      }
    ],
    "filename": "src/map/amap/geocoder.js",
    "groupTitle": "地址解析类"
  },
  {
    "type": "get",
    "url": "getLocationByPoint(point,callback)",
    "title": "逆地址解析",
    "name": "getLocationByPoint",
    "group": "Geocoder",
    "version": "0.0.1",
    "description": "<p>根据地址定位（逆地理解析）</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入的点对象</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let location = new KGIS.Location();\nlocation.getLocationByPoint(new KGIS.Point(116,37), function(result){\n console.log(result.address);\n);",
        "type": "getLocationByPoint"
      }
    ],
    "filename": "src/map/bmap/geocoder.js",
    "groupTitle": "地址解析类"
  },
  {
    "type": "get",
    "url": "getPointByAddress(address)",
    "title": "地址解析",
    "name": "getPointByAddress",
    "group": "Geocoder",
    "version": "0.0.1",
    "description": "<p>根据地址定位</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "address",
            "description": "<p>传入的地址</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let geo = new KGIS.Geocoder();\nlet address = {\n info:\"山东省菏泽市单县\",\n city:\"菏泽市\"\n}\ngeo.getPointByAddress(addresss, function(point){\n console.log(JSON.stringify(point));\n});",
        "type": "getPointByAddress"
      }
    ],
    "filename": "src/map/amap/geocoder.js",
    "groupTitle": "地址解析类"
  },
  {
    "type": "get",
    "url": "getPointByAddress(address)",
    "title": "地址解析",
    "name": "getPointByAddress",
    "group": "Geocoder",
    "version": "0.0.1",
    "description": "<p>根据地址定位</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "address",
            "description": "<p>传入的地址</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>回调函数</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let geo = new KGIS.Geocoder();\nlet address = {\n info:\"山东省菏泽市单县\",\n city:\"菏泽市\"\n}\ngeo.getPointByAddress(addresss, function(point){\n console.log(JSON.stringify(point));\n});",
        "type": "getPointByAddress"
      }
    ],
    "filename": "src/map/bmap/geocoder.js",
    "groupTitle": "地址解析类"
  },
  {
    "type": "get",
    "url": "InfoWindow(content,options)",
    "title": "新建信息窗体",
    "name": "InfoWindow",
    "group": "InfoWindow",
    "version": "0.0.1",
    "description": "<p>新建信息窗体</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string/html",
            "optional": false,
            "field": "content",
            "description": "<p>内容主体，可以是纯文本，也可以是html布局</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "options",
            "description": "<p>设置参数，当content是html布局，在html中设置了宽和高时，options中的width和height不用再设置了</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let options = {\n width: 200,\n height:200,\n title:\"测试\",\n map: map,\n offset: [10, 10]\n}\nlet infoWindow = new KGIS.InfoWindow(\"我是要显示的内容，也可以使html布局\", options);",
        "type": "InfoWindow"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nInfoWindow对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/infowindow.js",
    "groupTitle": "弹窗类"
  },
  {
    "type": "get",
    "url": "InfoWindow(content,options)",
    "title": "新建信息窗体",
    "name": "InfoWindow",
    "group": "InfoWindow",
    "version": "0.0.1",
    "description": "<p>新建信息窗体</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string/html",
            "optional": false,
            "field": "content",
            "description": "<p>内容主体，可以是纯文本，也可以是html布局</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "options",
            "description": "<p>设置参数，当content是html布局，在html中设置了宽和高时，options中的width和height不用再设置了</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let options = {\n width: 200,\n height:200,\n title:\"测试\"\n}\nlet infoWindow = new KGIS.InfoWindow(\"我是要显示的内容，也可以使html布局\", options);",
        "type": "InfoWindow"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nInfoWindow对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/infowindow.js",
    "groupTitle": "弹窗类"
  },
  {
    "type": "get",
    "url": "InfoWindow(content,options)",
    "title": "新建信息窗体",
    "name": "InfoWindow",
    "group": "InfoWindow",
    "version": "0.0.1",
    "description": "<p>新建信息窗体</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string/html",
            "optional": false,
            "field": "content",
            "description": "<p>内容主体，可以是纯文本，也可以是html布局</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "options",
            "description": "<p>设置参数，当content是html布局，在html中设置了宽和高时，options中的width和height不用再设置了</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let options = {\n width: 200,\n height:200,\n title:\"测试\",\n map: map,\n offset: [10, 10]\n}\nlet infoWindow = new KGIS.InfoWindow(\"我是要显示的内容，也可以使html布局\", options);",
        "type": "InfoWindow"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nInfoWindow对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/infowindow.js",
    "groupTitle": "弹窗类"
  },
  {
    "type": "get",
    "url": "InfoWindow(content,options)",
    "title": "新建信息窗体",
    "name": "InfoWindow",
    "group": "InfoWindow",
    "version": "0.0.1",
    "description": "<p>新建信息窗体</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string/html",
            "optional": false,
            "field": "content",
            "description": "<p>内容主体，可以是纯文本，也可以是html布局</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "options",
            "description": "<p>设置参数，当content是html布局，在html中设置了宽和高时，options中的width和height不用再设置了</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let options = {\n width: 200,\n height:200,\n title:\"测试\",\n map: map\n}\nlet infoWindow = new KGIS.InfoWindow(\"我是要显示的内容，也可以使html布局\", options);",
        "type": "InfoWindow"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nInfoWindow对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/infowindow.js",
    "groupTitle": "弹窗类"
  },
  {
    "type": "get",
    "url": "openInfoWindow(infoWindow,e)",
    "title": "打开信息窗体",
    "name": "openInfoWindow",
    "group": "InfoWindow",
    "version": "0.0.1",
    "description": "<p>打开信息窗体</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "infoWindow",
            "description": "<p>弹窗实例对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>当前点击的坐标点，一般通过e获取</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "// point 是当前点击的位置，通过marker或者其他回调监听到的e获取\nlet options = {\n width: 200,\n height:200,\n title:\"测试\",\n map: map\n}\nlet infoWindow = new KGIS.InfoWindow(\"我是要显示的内容，也可以使html布局\", options);\nmap.openInfoWindow(infoWindow, lnglat);",
        "type": "openInfoWindow"
      }
    ],
    "filename": "src/map/amap/infowindow.js",
    "groupTitle": "弹窗类"
  },
  {
    "type": "get",
    "url": "openInfoWindow(infoWindow,e)",
    "title": "打开信息窗体",
    "name": "openInfoWindow",
    "group": "InfoWindow",
    "version": "0.0.1",
    "description": "<p>打开信息窗体</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "infoWindow",
            "description": "<p>弹窗实例对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>当前点击的坐标点，一般通过e获取</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "// point 是当前点击的位置，通过marker或者其他回调监听到的e获取\nlet options = {\n width: 200,\n height:200,\n title:\"测试\",\n map: map\n}\nlet infoWindow = new KGIS.InfoWindow(\"我是要显示的内容，也可以使html布局\", options);\nmap.openInfoWindow(infoWindow, lnglat);",
        "type": "openInfoWindow"
      }
    ],
    "filename": "src/map/arcgis/infowindow.js",
    "groupTitle": "弹窗类"
  },
  {
    "type": "get",
    "url": "openInfoWindow(infoWindow,e)",
    "title": "打开信息窗体",
    "name": "openInfoWindow",
    "group": "InfoWindow",
    "version": "0.0.1",
    "description": "<p>打开信息窗体</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "infoWindow",
            "description": "<p>弹窗实例对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>当前点击的坐标点，一般通过e获取</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "// point 是当前点击的位置，通过marker或者其他回调监听到的e获取\nlet options = {\n width: 200,\n height:200,\n title:\"测试\",\n map: map\n}\nlet infoWindow = new KGIS.InfoWindow(\"我是要显示的内容，也可以使html布局\", options);\nmap.openInfoWindow(infoWindow, lnglat);",
        "type": "openInfoWindow"
      }
    ],
    "filename": "src/map/bmap/infowindow.js",
    "groupTitle": "弹窗类"
  },
  {
    "type": "get",
    "url": "openInfoWindow(infoWindow,e)",
    "title": "打开信息窗体",
    "name": "openInfoWindow",
    "group": "InfoWindow",
    "version": "0.0.1",
    "description": "<p>打开信息窗体</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "infoWindow",
            "description": "<p>弹窗实例对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>当前点击的坐标点，一般通过e获取</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "// point 是当前点击的位置，通过marker或者其他回调监听到的e获取\nlet options = {\n width: 200,\n height:200,\n title:\"测试\",\n map: map\n}\nlet infoWindow = new KGIS.InfoWindow(\"我是要显示的内容，也可以使html布局\", options);\nmap.openInfoWindow(infoWindow, lnglat);",
        "type": "openInfoWindow"
      }
    ],
    "filename": "src/map/gmap/infowindow.js",
    "groupTitle": "弹窗类"
  },
  {
    "type": "get",
    "url": "init(mapType,modules,callback)",
    "title": "系统初始化",
    "name": "init",
    "group": "Init",
    "version": "0.0.1",
    "description": "<p>地图初始化。为了减少资源消耗，框架采用模块化加载</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mapType",
            "description": "<p>地图类型：百度地图、高德地图、谷歌地图、ArcGIS等.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "modules",
            "description": "<p>传入功能模块,支持模块包括Map、Controller、Location、Measure、Event、Overlay、Menu、InfoWindow，其中Map为必选，必须填写.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>完成地图初始化的回调函数.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let modules = [\"Map\"];\nlet options = {\n   lng:117,\n   lat:36,\n   level:11,\n   mapType:\"hybrid\"\n};\nKGIS.init(\"bmap\", modules, function(){\n  // 业务逻辑入口\n  let map = new KGIS.Map(\"allmap\", options);// allmap是div的id\n});",
        "type": "init"
      }
    ],
    "filename": "src/init.js",
    "groupTitle": "Init"
  },
  {
    "type": "introduction",
    "url": "统一接口框架的介绍",
    "title": "",
    "name": "gis",
    "group": "Introduce",
    "version": "0.0.1",
    "description": "<p>统一接口框架（v0.3.2）现在包括地图模块（Map）、控件模块（Controller）、定位模块（Location）、测量模块（Measure）、事件模块（Event）、标注模块（Overlay）、菜单模块（Menu）、弹窗模块（InfoWindow）、服务模块（Service）、地理编码模块（Geocoder），统一接口支持模块化引用，但是【地图模块】必须要引用，其他根据项目需求选择引用。</p> <p>第二个段落</p> <p>第三个段落</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "module",
            "optional": false,
            "field": "Map",
            "description": "<p>地图模块.</p>"
          },
          {
            "group": "Parameter",
            "type": "module",
            "optional": false,
            "field": "Controller",
            "description": "<p>控件模块.</p>"
          },
          {
            "group": "Parameter",
            "type": "module",
            "optional": false,
            "field": "Location",
            "description": "<p>定位模块.</p>"
          },
          {
            "group": "Parameter",
            "type": "module",
            "optional": false,
            "field": "Measure",
            "description": "<p>测量模块.</p>"
          },
          {
            "group": "Parameter",
            "type": "module",
            "optional": false,
            "field": "Event",
            "description": "<p>事件模块.</p>"
          },
          {
            "group": "Parameter",
            "type": "module",
            "optional": false,
            "field": "Overlay",
            "description": "<p>标注模块.</p>"
          },
          {
            "group": "Parameter",
            "type": "module",
            "optional": false,
            "field": "Menu",
            "description": "<p>菜单模块.</p>"
          },
          {
            "group": "Parameter",
            "type": "module",
            "optional": false,
            "field": "InfoWindow",
            "description": "<p>弹窗模块.</p>"
          },
          {
            "group": "Parameter",
            "type": "module",
            "optional": false,
            "field": "Service",
            "description": "<p>服务模块.</p>"
          },
          {
            "group": "Parameter",
            "type": "module",
            "optional": false,
            "field": "Geocoder",
            "description": "<p>地理编码模块.</p>"
          }
        ]
      }
    },
    "filename": "src/init.js",
    "groupTitle": "介绍"
  },
  {
    "type": "get",
    "url": "locationByLnglat(...lnglat)",
    "title": "根据经纬度定位",
    "name": "locationByLnglat",
    "group": "Location",
    "version": "0.0.1",
    "description": "<p>根据经纬度定位。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number/array",
            "optional": false,
            "field": "params",
            "description": "<p>传入的经纬度参数(可以使数组[120,36]，也可以是两个数值参数120,36，接口会根据传参类型自动适配)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let location = new KGIS.Location();\nlocation.locationByLnglat(120, 36);\nlocation.locationByLnglat([120, 36]);",
        "type": "locationByLnglat"
      }
    ],
    "filename": "src/map/amap/location.js",
    "groupTitle": "定位类"
  },
  {
    "type": "get",
    "url": "locationByLnglat(...lnglat)",
    "title": "根据经纬度定位",
    "name": "locationByLnglat",
    "group": "Location",
    "version": "0.0.1",
    "description": "<p>根据经纬度定位。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number/array",
            "optional": false,
            "field": "params",
            "description": "<p>传入的经纬度参数(可以使数组[120,36]，也可以是两个数值参数120,36，接口会根据传参类型自动适配)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let location = new KGIS.Location();\nlocation.locationByLnglat(120, 36);\nlocation.locationByLnglat([120, 36]);",
        "type": "locationByLnglat"
      }
    ],
    "filename": "src/map/arcgis/location.js",
    "groupTitle": "定位类"
  },
  {
    "type": "get",
    "url": "locationByLnglat(...lnglat)",
    "title": "根据经纬度定位",
    "name": "locationByLnglat",
    "group": "Location",
    "version": "0.0.1",
    "description": "<p>根据经纬度定位。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number/array",
            "optional": false,
            "field": "params",
            "description": "<p>传入的经纬度参数(可以使数组[120,36]，也可以是两个数值参数120,36，接口会根据传参类型自动适配)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let location = new KGIS.Location();\nlocation.locationByLnglat(120, 36);\nlocation.locationByLnglat([120, 36]);",
        "type": "locationByLnglat"
      }
    ],
    "filename": "src/map/bmap/location.js",
    "groupTitle": "定位类"
  },
  {
    "type": "get",
    "url": "locationByLnglat(...lnglat)",
    "title": "根据经纬度定位",
    "name": "locationByLnglat",
    "group": "Location",
    "version": "0.0.1",
    "description": "<p>根据经纬度定位。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number/array",
            "optional": false,
            "field": "params",
            "description": "<p>传入的经纬度参数(可以使数组[120,36]，也可以是两个数值参数120,36，接口会根据传参类型自动适配)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let location = new KGIS.Location();\nlocation.locationByLnglat(120, 36);\nlocation.locationByLnglat([120, 36]);",
        "type": "locationByLnglat"
      }
    ],
    "filename": "src/map/gmap/location.js",
    "groupTitle": "定位类"
  },
  {
    "type": "get",
    "url": "locationByPoint(...point)",
    "title": "根据Point定位",
    "name": "locationByPoint",
    "group": "Location",
    "version": "0.0.1",
    "description": "<p>根据Point定位</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入的point对象，可以通过let map = new KGIS.Map(); map.newPoint(120,36)生成</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let location = new KGIS.Location();\nlet map = new KGIS.Map();\nlet point = new KGIS.Point(120, 36);\nlocation.locationByPoint(point);",
        "type": "locationByPoint"
      }
    ],
    "filename": "src/map/amap/location.js",
    "groupTitle": "定位类"
  },
  {
    "type": "get",
    "url": "locationByPoint(...point)",
    "title": "根据Point定位",
    "name": "locationByPoint",
    "group": "Location",
    "version": "0.0.1",
    "description": "<p>根据Point定位</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入的point对象，可以通过let map = new KGIS.Map(); map.newPoint(120,36)生成</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let location = new KGIS.Location();\nlet map = new KGIS.Map();\nlet point = new KGIS.Point(120, 36);\nlocation.locationByPoint(point);",
        "type": "locationByPoint"
      }
    ],
    "filename": "src/map/arcgis/location.js",
    "groupTitle": "定位类"
  },
  {
    "type": "get",
    "url": "locationByPoint(...point)",
    "title": "根据Point定位",
    "name": "locationByPoint",
    "group": "Location",
    "version": "0.0.1",
    "description": "<p>根据Point定位</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入的point对象，可以通过let map = new KGIS.Map(); map.newPoint(120,36)生成</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let location = new KGIS.Location();\nlet map = new KGIS.Map();\nlet point = new KGIS.Point(120, 36);\nlocation.locationByPoint(point);",
        "type": "locationByPoint"
      }
    ],
    "filename": "src/map/bmap/location.js",
    "groupTitle": "定位类"
  },
  {
    "type": "get",
    "url": "locationByPoint(...point)",
    "title": "根据Point定位",
    "name": "locationByPoint",
    "group": "Location",
    "version": "0.0.1",
    "description": "<p>根据Point定位</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入的point对象，可以通过let map = new KGIS.Map(); map.newPoint(120,36)生成</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let location = new KGIS.Location();\nlet map = new KGIS.Map();\nlet point = new KGIS.Point(120, 36);\nlocation.locationByPoint(point);",
        "type": "locationByPoint"
      }
    ],
    "filename": "src/map/gmap/location.js",
    "groupTitle": "定位类"
  },
  {
    "type": "get",
    "url": "Point(lng,lat)",
    "title": "新建点对象",
    "name": "Point",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>新建点对象，经度在前，纬度在后</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let point = new KGIS.Point(120, 36);",
        "type": "Point"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\npoint对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/point.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "Point(lng,lat)",
    "title": "新建点对象",
    "name": "Point",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>新建点对象，经度在前，纬度在后</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let point = new KGIS.Point(120, 36);",
        "type": "Point"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\npoint对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/point.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "Point(lng,lat)",
    "title": "新建点对象",
    "name": "Point",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>新建点对象，经度在前，纬度在后</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let point = new KGIS.Point(120, 36);",
        "type": "Point"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\npoint对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/point.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "Point(lng,lat)",
    "title": "新建点对象",
    "name": "Point",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>新建点对象，经度在前，纬度在后</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let point = new KGIS.Point(120, 36);",
        "type": "Point"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\npoint对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/point.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "Point(lng,lat)",
    "title": "新建点对象",
    "name": "Point",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>新建点对象，经度在前，纬度在后</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let point = new KGIS.Point(120, 36);",
        "type": "Point"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\npoint对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/leaflet/obj/point.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmap.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmap.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmap.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmap.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmap.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "centerAndZoom(point/cityName)",
    "title": "居中缩放",
    "name": "centerAndZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据城市名/Point进行定位，并缩放到目标层级，参数为动态的。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "params",
            "optional": false,
            "field": "params",
            "description": "<p>params解构出 position和level，其中position可以是string（城市名称）、数组（经纬度）和Point对象，接口会根据传入参数的类型自动适配</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.centerAndZoom(\"济南\", 11);                   // 方法1\nmap.centerAndZoom([120, 36], 11);               // 方法2\nmap.centerAndZoom(map.newPoint(120, 36), 11);   // 方法3",
        "type": "centerAndZoom"
      }
    ],
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "centerAndZoom(point/cityName)",
    "title": "居中缩放",
    "name": "centerAndZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据城市名/Point进行定位，并缩放到目标层级，参数为动态的。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "params",
            "optional": false,
            "field": "params",
            "description": "<p>params解构出 position和level，其中position可以是string（城市名称）、数组（经纬度）和Point对象，接口会根据传入参数的类型自动适配</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.centerAndZoom(\"济南\", 11);                   // TODO 方法1 废弃\nmap.centerAndZoom([120, 36], 11);               // 方法2\nmap.centerAndZoom(map.newPoint(120, 36), 11);   // 方法3",
        "type": "centerAndZoom"
      }
    ],
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "centerAndZoom(point/cityName)",
    "title": "居中缩放",
    "name": "centerAndZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据城市名/Point进行定位，并缩放到目标层级，参数为动态的。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "params",
            "optional": false,
            "field": "params",
            "description": "<p>params解构出 position和level，其中position可以是string（城市名称）、数组（经纬度）和Point对象，接口会根据传入参数的类型自动适配</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.centerAndZoom(\"济南\", 11);                   // TODO 方法1 废弃\nmap.centerAndZoom([120, 36], 11);               // 方法2\nmap.centerAndZoom(map.newPoint(120, 36), 11);   // 方法3",
        "type": "centerAndZoom"
      }
    ],
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "centerAndZoom(point/cityName)",
    "title": "居中缩放",
    "name": "centerAndZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据城市名/Point进行定位，并缩放到目标层级，参数为动态的。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "params",
            "optional": false,
            "field": "params",
            "description": "<p>params解构出 position和level，其中position可以是string（城市名称）、数组（经纬度）和Point对象，接口会根据传入参数的类型自动适配</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.centerAndZoom(\"济南\", 11);                   // 方法1\nmap.centerAndZoom([120, 36], 11);               // 方法2\nmap.centerAndZoom(map.newPoint(120, 36), 11);   // 方法3",
        "type": "centerAndZoom"
      }
    ],
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "centerAndZoom(...params)",
    "title": "居中缩放",
    "name": "centerAndZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据城市名/Point进行定位，并缩放到目标层级，参数为动态的。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "params",
            "optional": false,
            "field": "params",
            "description": "<p>params解构出 position和level，其中position可以是string（城市名称）、数组（经纬度）和Point对象，接口会根据传入参数的类型自动适配</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new this.kmap();\nmap.centerAndZoom(\"济南\", 11);                   // 方法1\nmap.centerAndZoom([120, 36], 11);               // 方法2\nmap.centerAndZoom(map.newPoint(120, 36), 11);   // 方法3",
        "type": "centerAndZoom"
      }
    ],
    "filename": "src/map/gmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "centerAndZoom(point/cityName)",
    "title": "居中缩放",
    "name": "centerAndZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据城市名/Point进行定位，并缩放到目标层级，参数为动态的。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "params",
            "optional": false,
            "field": "params",
            "description": "<p>params解构出 position和level，其中position可以是string（城市名称）、数组（经纬度）和Point对象，接口会根据传入参数的类型自动适配</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.centerAndZoom(\"济南\", 11);                   // TODO 方法1 废弃\nmap.centerAndZoom([120, 36], 11);               // 方法2\nmap.centerAndZoom(map.newPoint(120, 36), 11);   // 方法3",
        "type": "centerAndZoom"
      }
    ],
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "disableDoubleClickZoom()",
    "title": "双击放大-禁用",
    "name": "disableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>禁用双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.disableDoubleClickZoom();",
        "type": "disableDoubleClickZoom"
      }
    ],
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "disableDoubleClickZoom()",
    "title": "双击放大-禁用",
    "name": "disableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>禁用双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.disableDoubleClickZoom();",
        "type": "disableDoubleClickZoom"
      }
    ],
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "disableDoubleClickZoom()",
    "title": "双击放大-禁用",
    "name": "disableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>禁用双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.disableDoubleClickZoom();",
        "type": "disableDoubleClickZoom"
      }
    ],
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "disableDoubleClickZoom()",
    "title": "双击放大-禁用",
    "name": "disableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>禁用双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.disableDoubleClickZoom();",
        "type": "disableDoubleClickZoom"
      }
    ],
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "disableDoubleClickZoom()",
    "title": "双击放大-禁用",
    "name": "disableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>禁用双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new this.kmap();\nmap.disableDoubleClickZoom();",
        "type": "disableDoubleClickZoom"
      }
    ],
    "filename": "src/map/gmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "disableDoubleClickZoom()",
    "title": "双击放大-禁用",
    "name": "disableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>禁用双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.disableDoubleClickZoom();",
        "type": "disableDoubleClickZoom"
      }
    ],
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "enableDoubleClickZoom()",
    "title": "双击放大-开启",
    "name": "enableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.enableDoubleClickZoom();",
        "type": "enableDoubleClickZoom"
      }
    ],
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "enableDoubleClickZoom()",
    "title": "双击放大-开启",
    "name": "enableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.enableDoubleClickZoom();",
        "type": "enableDoubleClickZoom"
      }
    ],
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "enableDoubleClickZoom()",
    "title": "双击放大-开启",
    "name": "enableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.enableDoubleClickZoom();",
        "type": "enableDoubleClickZoom"
      }
    ],
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "enableDoubleClickZoom()",
    "title": "双击放大-开启",
    "name": "enableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.enableDoubleClickZoom();",
        "type": "enableDoubleClickZoom"
      }
    ],
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "enableDoubleClickZoom()",
    "title": "双击放大-开启",
    "name": "enableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new this.kmap();\nmap.enableDoubleClickZoom();",
        "type": "enableDoubleClickZoom"
      }
    ],
    "filename": "src/map/gmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "enableDoubleClickZoom()",
    "title": "双击放大-开启",
    "name": "enableDoubleClickZoom",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>双击鼠标左键放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.enableDoubleClickZoom();",
        "type": "enableDoubleClickZoom"
      }
    ],
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getCenter()",
    "title": "获取地图中心点",
    "name": "getCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取地图中心点</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet point = map.getCenter();",
        "type": "getCenter"
      }
    ],
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getCenter()",
    "title": "获取地图中心点",
    "name": "getCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取地图中心点</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet point = map.setCenter();",
        "type": "getCenter"
      }
    ],
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getCenter()",
    "title": "获取地图中心点",
    "name": "getCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取地图中心点</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet point = map.setCenter();",
        "type": "getCenter"
      }
    ],
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getCenter()",
    "title": "获取地图中心点",
    "name": "getCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取地图中心点</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet point = map.setCenter();",
        "type": "getCenter"
      }
    ],
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getCenter()",
    "title": "获取地图中心点",
    "name": "getCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取地图中心点</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new this.kmap();\nlet point = map.setCenter();",
        "type": "getCenter"
      }
    ],
    "filename": "src/map/gmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getCenter()",
    "title": "获取地图中心点",
    "name": "getCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取地图中心点</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet point = map.setCenter();",
        "type": "getCenter"
      }
    ],
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getMap()",
    "title": "获取原生地图对象",
    "name": "getMap",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取实例化的地图对象，即div中经过 new TMap.Map(id)实例化的对象</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet origin_map = map.getMap();",
        "type": "getMap"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\n实例化的Map对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getMap()",
    "title": "获取原生地图对象",
    "name": "getMap",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取实例化的地图对象，即div中经过 new TMap.Map(id)实例化的对象</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet origin_map = map.getMap();",
        "type": "getMap"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\n实例化的Map对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getMap()",
    "title": "获取原生地图对象",
    "name": "getMap",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取实例化的地图对象，即div中经过 new TMap.Map(id)实例化的对象</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet origin_map = map.getMap();",
        "type": "getMap"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\n实例化的Map对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getMap()",
    "title": "获取原生地图对象",
    "name": "getMap",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取实例化的地图对象，即div中经过 new TMap.Map(id)实例化的对象</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet origin_map = map.getMap();",
        "type": "getMap"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\n实例化的Map对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getMap()",
    "title": "获取原生地图对象",
    "name": "getMap",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取实例化的地图对象，即div中经过 new TMap.Map(id)实例化的对象</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new this.kmap();\nlet origin_map = map.getMap();",
        "type": "getMap"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\n实例化的Map对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getMap()",
    "title": "获取原生地图对象",
    "name": "getMap",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取实例化的地图对象，即div中经过 new TMap.Map(id)实例化的对象</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet origin_map = map.getMap();",
        "type": "getMap"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\n实例化的Map对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "getView()",
    "title": "获取原生地图容器",
    "name": "getView",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>获取实例化的地图对象，即div中经过 new TMap.Map(id)实例化的对象</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nlet origin_view = map.getView();",
        "type": "getMap"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\n实例化的Map对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "panTo(...position)",
    "title": "移动到点的位置",
    "name": "panTo",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据传入的点的坐标，移动到该处。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array/object",
            "optional": false,
            "field": "position",
            "description": "<p>参数可以是数组和LngLat对象，接口根据传入参数自动适配。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.panTo(120, 36);                  // 方法1\nmap.panTo([120, 36]);                // 方法2\nmap.panTo(map.newPoint(120, 36));    // 方法3",
        "type": "panTo"
      }
    ],
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "panTo(...position)",
    "title": "移动到点的位置",
    "name": "panTo",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据传入的点的坐标，移动到该处。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array/object",
            "optional": false,
            "field": "position",
            "description": "<p>参数可以是数组和LngLat对象，接口根据传入参数自动适配。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.panTo(120, 36);                  // 方法1\nmap.panTo([120, 36]);                // 方法2\nmap.panTo(map.newPoint(120, 36));    // 方法3",
        "type": "panTo"
      }
    ],
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "panTo(...position)",
    "title": "移动到点的位置",
    "name": "panTo",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据传入的点的坐标，移动到该处。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array/object",
            "optional": false,
            "field": "position",
            "description": "<p>参数可以是数组和LngLat对象，接口根据传入参数自动适配。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.panTo(120, 36);                  // 方法1\nmap.panTo([120, 36]);                // 方法2\nmap.panTo(map.newPoint(120, 36));    // 方法3",
        "type": "panTo"
      }
    ],
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "panTo(...position)",
    "title": "移动到点的位置",
    "name": "panTo",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据传入的点的坐标，移动到该处。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array/object",
            "optional": false,
            "field": "position",
            "description": "<p>参数可以是数组和LngLat对象，接口根据传入参数自动适配。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.panTo(120, 36);                  // 方法1\nmap.panTo([120, 36]);                // 方法2\nmap.panTo(map.newPoint(120, 36));    // 方法3",
        "type": "panTo"
      }
    ],
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "panTo(...position)",
    "title": "移动到点的位置",
    "name": "panTo",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据传入的点的坐标，移动到该处。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array/object",
            "optional": false,
            "field": "position",
            "description": "<p>参数可以是数组和LngLat对象，接口根据传入参数自动适配。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new this.kmap();\nmap.panTo(120, 36);                  // 方法1\nmap.panTo([120, 36]);                // 方法2\nmap.panTo(map.newPoint(120, 36));    // 方法3",
        "type": "panTo"
      }
    ],
    "filename": "src/map/gmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "panTo(...position)",
    "title": "移动到点的位置",
    "name": "panTo",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>根据传入的点的坐标，移动到该处。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array/object",
            "optional": false,
            "field": "position",
            "description": "<p>参数可以是数组和LngLat对象，接口根据传入参数自动适配。</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.panTo(120, 36);                  // 方法1\nmap.panTo([120, 36]);                // 方法2\nmap.panTo(map.newPoint(120, 36));    // 方法3",
        "type": "panTo"
      }
    ],
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setCenter(point)",
    "title": "设置地图中心点",
    "name": "setCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图中心点</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>点坐标对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.setCenter(point);",
        "type": "setCenter"
      }
    ],
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setCenter(point)",
    "title": "设置地图中心点",
    "name": "setCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图中心点</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>点坐标对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.setCenter(point);",
        "type": "setCenter"
      }
    ],
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setCenter(point)",
    "title": "设置地图中心点",
    "name": "setCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图中心点</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>点坐标对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.setCenter(point);",
        "type": "setCenter"
      }
    ],
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setCenter(point)",
    "title": "设置地图中心点",
    "name": "setCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图中心点</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>点坐标对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.setCenter(point);",
        "type": "setCenter"
      }
    ],
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setCenter(point)",
    "title": "设置地图中心点",
    "name": "setCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图中心点</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>点坐标对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new this.kmap();\nmap.setCenter(point);",
        "type": "setCenter"
      }
    ],
    "filename": "src/map/gmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setCenter(point)",
    "title": "设置地图中心点",
    "name": "setCenter",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图中心点</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>点坐标对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.setCenter(point);",
        "type": "setCenter"
      }
    ],
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setMapType(type)",
    "title": "设置地图类型",
    "name": "setMapType",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图类型</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.setMapType(\"normal\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\nmap.setMapType(\"hybrid\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\n1.normal-正常地图\n2.hybrid-卫星影像图（带路网）",
        "type": "setMapType"
      }
    ],
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setMapType(type)",
    "title": "设置地图类型",
    "name": "setMapType",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图类型</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.setMapType(\"normal\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\nmap.setMapType(\"hybrid\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\n1.normal-正常地图\n2.hybrid-卫星影像图（带路网）",
        "type": "setMapType"
      }
    ],
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setMapType(type)",
    "title": "设置地图类型",
    "name": "setMapType",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图类型</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.setMapType(\"normal\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\nmap.setMapType(\"hybrid\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\n1.normal-正常地图\n2.hybrid-卫星影像图（带路网）",
        "type": "setMapType"
      }
    ],
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setMapType(type)",
    "title": "设置地图类型",
    "name": "setMapType",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图类型</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.setMapType(\"normal\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\nmap.setMapType(\"hybrid\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\n1.normal-正常地图\n2.hybrid-卫星影像图（带路网）",
        "type": "setMapType"
      }
    ],
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setMapType(type)",
    "title": "设置地图类型",
    "name": "setMapType",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图类型</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new this.kmap();\nmap.setMapType(\"normal\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\nmap.setMapType(\"hybrid\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\n1.normal-正常地图\n2.hybrid-卫星影像图（带路网）",
        "type": "setMapType"
      }
    ],
    "filename": "src/map/gmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "setMapType(type)",
    "title": "设置地图类型",
    "name": "setMapType",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>设置地图类型</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.setMapType(\"normal\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\nmap.setMapType(\"hybrid\"); // 初始化地图类型为普通地图，显示普通和混合地图类型\n1.normal-正常地图\n2.hybrid-卫星影像图（带路网）",
        "type": "setMapType"
      }
    ],
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomIn()",
    "title": "缩放-放大",
    "name": "zoomIn",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.zoomIn();",
        "type": "zoomIn"
      }
    ],
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomIn()",
    "title": "缩放-放大",
    "name": "zoomIn",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.zoomIn();",
        "type": "zoomIn"
      }
    ],
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomIn()",
    "title": "缩放-放大",
    "name": "zoomIn",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.zoomIn();",
        "type": "zoomIn"
      }
    ],
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomIn()",
    "title": "缩放-放大",
    "name": "zoomIn",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.zoomIn();",
        "type": "zoomIn"
      }
    ],
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomIn()",
    "title": "缩放-放大",
    "name": "zoomIn",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new this.kmap();\nmap.zoomIn();",
        "type": "zoomIn"
      }
    ],
    "filename": "src/map/gmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomIn()",
    "title": "缩放-放大",
    "name": "zoomIn",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>放大一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.zoomIn();",
        "type": "zoomIn"
      }
    ],
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomOut()",
    "title": "缩放-缩小",
    "name": "zoomOut",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>缩小一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.zoomOut();",
        "type": "zoomOut"
      }
    ],
    "filename": "src/map/amap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomOut()",
    "title": "缩放-缩小",
    "name": "zoomOut",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>缩小一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.zoomOut();",
        "type": "zoomOut"
      }
    ],
    "filename": "src/map/arcgis/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomOut()",
    "title": "缩放-缩小",
    "name": "zoomOut",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>缩小一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.zoomOut();",
        "type": "zoomOut"
      }
    ],
    "filename": "src/map/arcgis4/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomOut()",
    "title": "缩放-缩小",
    "name": "zoomOut",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>缩小一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.zoomOut();",
        "type": "zoomOut"
      }
    ],
    "filename": "src/map/bmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomOut()",
    "title": "缩放-缩小",
    "name": "zoomOut",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>缩小一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new this.kmap();\nmap.zoomOut();",
        "type": "zoomOut"
      }
    ],
    "filename": "src/map/gmap/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "zoomOut()",
    "title": "缩放-缩小",
    "name": "zoomOut",
    "group": "Map",
    "version": "0.0.1",
    "description": "<p>缩小一级视图</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.zoomOut();",
        "type": "zoomOut"
      }
    ],
    "filename": "src/map/leaflet/map.js",
    "groupTitle": "地图类"
  },
  {
    "type": "get",
    "url": "closeMeasureArea(measureArea)",
    "title": "结束测量面积",
    "name": "closeMeasureArea",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>结束测量面积</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureArea",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureArea(map);\nmeasure.closeMeasureArea(measureArea);",
        "type": "closeMeasureArea"
      }
    ],
    "filename": "src/map/amap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "closeMeasureArea(measureArea)",
    "title": "结束测量面积",
    "name": "closeMeasureArea",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>结束测量面积</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureArea",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureArea(map);\nmeasure.closeMeasureArea(measureArea);",
        "type": "closeMeasureArea"
      }
    ],
    "filename": "src/map/arcgis/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "closeMeasureArea(measureArea)",
    "title": "结束测量面积",
    "name": "closeMeasureArea",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>结束测量面积</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureArea",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureArea(map);\nmeasure.closeMeasureArea(measureArea);",
        "type": "closeMeasureArea"
      }
    ],
    "filename": "src/map/bmap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "closeMeasureArea(measureArea)",
    "title": "结束测量面积",
    "name": "closeMeasureArea",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>结束测量面积</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureArea",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureArea(map);\nmeasure.closeMeasureArea(measureArea);",
        "type": "closeMeasureArea"
      }
    ],
    "filename": "src/map/gmap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "closeMeasureLine(measureLine)",
    "title": "结束测量线段长度",
    "name": "closeMeasureLine",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>结束测量线段长度</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureLine",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureLine(map);\nmeasure.closeMeasureLine(measureLine);",
        "type": "closeMeasureLine"
      }
    ],
    "filename": "src/map/amap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "closeMeasureLine(measureLine)",
    "title": "结束测量线段长度",
    "name": "closeMeasureLine",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>结束测量线段长度</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureLine",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureLine(map);\nmeasure.closeMeasureLine(measureLine);",
        "type": "closeMeasureLine"
      }
    ],
    "filename": "src/map/arcgis/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "closeMeasureLine(measureLine)",
    "title": "结束测量线段长度",
    "name": "closeMeasureLine",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>结束测量线段长度</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureLine",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureLine(map);\nmeasure.closeMeasureLine(measureLine);",
        "type": "closeMeasureLine"
      }
    ],
    "filename": "src/map/bmap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "closeMeasureLine(measureLine)",
    "title": "结束测量线段长度",
    "name": "closeMeasureLine",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>结束测量线段长度</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureLine",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureLine(map);\nmeasure.closeMeasureLine(measureLine);",
        "type": "closeMeasureLine"
      }
    ],
    "filename": "src/map/gmap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "openMeasureArea(measureArea)",
    "title": "开始测量面积",
    "name": "openMeasureArea",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>开始测量面积，双击结束</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureArea",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureArea(map);\nmeasure.openMeasureArea(measureArea);",
        "type": "openMeasureArea"
      }
    ],
    "filename": "src/map/amap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "openMeasureArea(measureArea)",
    "title": "开始测量面积",
    "name": "openMeasureArea",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>开始测量面积，双击结束</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureArea",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureArea(map);\nmeasure.openMeasureArea(measureArea);",
        "type": "openMeasureArea"
      }
    ],
    "filename": "src/map/arcgis/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "openMeasureArea(measureArea)",
    "title": "开始测量面积",
    "name": "openMeasureArea",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>开始测量面积，双击结束</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureArea",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureArea(map);\nmeasure.openMeasureArea(measureArea);",
        "type": "openMeasureArea"
      }
    ],
    "filename": "src/map/bmap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "openMeasureArea(measureArea)",
    "title": "开始测量面积",
    "name": "openMeasureArea",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>开始测量面积，双击结束</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureArea",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureArea(map);\nmeasure.openMeasureArea(measureArea);",
        "type": "openMeasureArea"
      }
    ],
    "filename": "src/map/gmap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "openMeasureLine(measureLine)",
    "title": "开始测量线段长度",
    "name": "openMeasureLine",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>开始测量线段长度，双击结束</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureLine",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureLine(map);\nmeasure.openMeasureLine(measureLine);",
        "type": "openMeasureLine"
      }
    ],
    "filename": "src/map/amap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "openMeasureLine(measureLine)",
    "title": "开始测量线段长度",
    "name": "openMeasureLine",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>开始测量线段长度，双击结束</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureLine",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureLine(map);\nmeasure.openMeasureLine(measureLine);",
        "type": "openMeasureLine"
      }
    ],
    "filename": "src/map/arcgis/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "openMeasureLine(measureLine)",
    "title": "开始测量线段长度",
    "name": "openMeasureLine",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>开始测量线段长度，双击结束</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureLine",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureLine(map);\nmeasure.openMeasureLine(measureLine);",
        "type": "openMeasureLine"
      }
    ],
    "filename": "src/map/bmap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "openMeasureLine(measureLine)",
    "title": "开始测量线段长度",
    "name": "openMeasureLine",
    "group": "Measure",
    "version": "0.0.1",
    "description": "<p>开始测量线段长度，双击结束</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "measureLine",
            "description": "<p>实例化的测量对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let measure = new KGIS.Measure();\nlet measureLine = new KGIS.MeasureLine(map);\nmeasure.openMeasureLine(measureLine);",
        "type": "openMeasureLine"
      }
    ],
    "filename": "src/map/gmap/measure.js",
    "groupTitle": "测量类"
  },
  {
    "type": "get",
    "url": "Menu()",
    "title": "新建菜单",
    "name": "Menu",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>新建菜单。</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu(map);",
        "type": "MeasureLine"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nMenu对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "Menu()",
    "title": "新建菜单",
    "name": "Menu",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>新建菜单。</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu(map);",
        "type": "MeasureLine"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nMenu对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "Menu()",
    "title": "新建菜单",
    "name": "Menu",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>新建菜单。</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu(map);",
        "type": "MeasureLine"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nMenu对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "addMenuItem(menuItemOptions,callback)",
    "title": "增加右键菜单项",
    "name": "addMenuItem",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>增加右键菜单项（适用于地图、标注物点、标注物线、标注物面的右键菜单）。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>指定此菜单项的文字描述.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>单击该菜单项后的回调函数.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet name = \"点右键菜单\";\nmenu.addMenuItem(name, function (info) {\n  layer.msg(JSON.stringify(info), {\n    icon: 1\n  });\n});",
        "type": "addMenuItem"
      }
    ],
    "filename": "src/map/amap/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "addMenuItem(menuItemOptions,callback)",
    "title": "增加右键菜单项",
    "name": "addMenuItem",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>增加右键菜单项（适用于地图、标注物点、标注物线、标注物面的右键菜单）。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>指定此菜单项的文字描述.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>单击该菜单项后的回调函数.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet name = \"点右键菜单\";\nmenu.addMenuItem(name, function (info) {\n  layer.msg(JSON.stringify(info), {\n    icon: 1\n  });\n});",
        "type": "addMenuItem"
      }
    ],
    "filename": "src/map/arcgis/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "addMenuItem(menuItemOptions,callback)",
    "title": "增加右键菜单项",
    "name": "addMenuItem",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>增加右键菜单项（适用于地图、标注物点、标注物线、标注物面的右键菜单）。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>指定此菜单项的文字描述.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>单击该菜单项后的回调函数.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet name = \"点右键菜单\";\nmenu.addMenuItem(name, function (info) {\n  layer.msg(JSON.stringify(info), {\n    icon: 1\n  });\n});",
        "type": "addMenuItem"
      }
    ],
    "filename": "src/map/bmap/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "addMenuItem(menuItemOptions,callback)",
    "title": "增加右键菜单项",
    "name": "addMenuItem",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>增加右键菜单项（适用于地图、标注物点、标注物线、标注物面的右键菜单）。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>指定此菜单项的文字描述.</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>单击该菜单项后的回调函数.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet name = \"点右键菜单\";\nmenu.addMenuItem(name, function (info) {\n  layer.msg(JSON.stringify(info), {\n    icon: 1\n  });\n});",
        "type": "addMenuItem"
      }
    ],
    "filename": "src/map/gmap/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "addMenuSeparator(menu)",
    "title": "增加右键菜单项分隔符",
    "name": "addMenuSeparator",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>增加右键菜单项分隔符（适用于地图、标注物点、标注物线、标注物面的右键菜单）。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要增加菜单项分隔符的菜单(可以是地图右键菜单、标注物点右键菜单、标注物线右键菜单、标注物面右键菜单).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nmenu.addMenuSeparator(markermenu);",
        "type": "addMenuSeparator"
      }
    ],
    "filename": "src/map/amap/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "addMenuSeparator(menu)",
    "title": "增加右键菜单项分隔符",
    "name": "addMenuSeparator",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>增加右键菜单项分隔符（适用于地图、标注物点、标注物线、标注物面的右键菜单）。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要增加菜单项分隔符的菜单(可以是地图右键菜单、标注物点右键菜单、标注物线右键菜单、标注物面右键菜单).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet markermenu = menu.getMarkerMenu();\nmenu.addMenuSeparator(markermenu);",
        "type": "addMenuSeparator"
      }
    ],
    "filename": "src/map/arcgis/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "addMenuSeparator(menu)",
    "title": "增加右键菜单项分隔符",
    "name": "addMenuSeparator",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>增加右键菜单项分隔符（适用于地图、标注物点、标注物线、标注物面的右键菜单）。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要增加菜单项分隔符的菜单(可以是地图右键菜单、标注物点右键菜单、标注物线右键菜单、标注物面右键菜单).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet markermenu = menu.getMarkerMenu();\nmenu.addMenuSeparator(markermenu);",
        "type": "addMenuSeparator"
      }
    ],
    "filename": "src/map/bmap/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "addMenuSeparator(menu)",
    "title": "增加右键菜单项分隔符",
    "name": "addMenuSeparator",
    "group": "Menu",
    "version": "0.0.1",
    "description": "<p>增加右键菜单项分隔符（适用于地图、标注物点、标注物线、标注物面的右键菜单）。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要增加菜单项分隔符的菜单(可以是地图右键菜单、标注物点右键菜单、标注物线右键菜单、标注物面右键菜单).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nmenu.addMenuSeparator(markermenu);",
        "type": "addMenuSeparator"
      }
    ],
    "filename": "src/map/gmap/menu.js",
    "groupTitle": "菜单类"
  },
  {
    "type": "get",
    "url": "Icon(iconOptions)",
    "title": "新建图标",
    "name": "Icon",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：iconOptions现在支持url、size、imageOffset</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "iconOptions",
            "description": "<p>传入icon配置参数，现在支持url、size、imageOffset</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet iconOptions = {\n  url:'./img/marker.png',\n  size:overlay.size(36,36), // 默认是36\n  imageOffset:overlay.size(5,5), // 图片相对于可视域的偏移值\n  map: map\n};\nlet icon = new KGIS.Icon(iconOptions);",
        "type": "Icon"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nIcon对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/icon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Icon(iconOptions)",
    "title": "新建图标",
    "name": "Icon",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：iconOptions现在支持url、size、imageOffset</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "iconOptions",
            "description": "<p>传入icon配置参数，现在支持url、size、imageOffset</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet iconOptions = {\n  url:'./img/marker.png',\n  size: new KGIS.Size(36,36), // 默认是36\n  imageOffset:overlay.size(5,5) // 图片相对于可视域的偏移值\n};\nlet icon = new KGIS.Icon(iconOptions);",
        "type": "Icon"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nIcon对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/icon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Icon(iconOptions)",
    "title": "新建图标",
    "name": "Icon",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：iconOptions现在支持url、size、imageOffset</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "iconOptions",
            "description": "<p>传入icon配置参数，现在支持url、size、imageOffset</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet iconOptions = {\n  url:'./img/marker.png',\n  size:overlay.size(36,36), // 默认是36\n  imageOffset:overlay.size(5,5) // 图片相对于可视域的偏移值\n};\nlet icon = new KGIS.Icon(iconOptions);",
        "type": "Icon"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nIcon对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/icon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Icon(iconOptions)",
    "title": "新建图标",
    "name": "Icon",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：iconOptions现在支持url、size、imageOffset</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "iconOptions",
            "description": "<p>传入icon配置参数，现在支持url、size、imageOffset</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet iconOptions = {\n  url:'./img/marker.png',\n  size:overlay.size(36,36), // 默认是36\n  imageOffset:overlay.size(5,5), // 图片相对于可视域的偏移值\n  map: map\n};\nlet icon = new KGIS.Icon(iconOptions);",
        "type": "Icon"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nIcon对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/icon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Label(content,labelOptions)",
    "title": "新建文字标注",
    "name": "Label",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：传入point、options，其中options现在支持offset、position</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入标注内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "labelOptions",
            "description": "<p>传入label的配置参数，现在支持offset、position</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let labelOptions = {\n  offset:new KGIS.Size(10,5),\n  position:new KGIS.Point(117.02, 36.70),\n  map: map\n};\nlet label = new KGIS.Label(\"我是文字标注\", labelOptions);\nmap.addOverlay(label);",
        "type": "Label"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nlabel对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/label.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Marker(content,labelOptions)",
    "title": "新建文字标注",
    "name": "Label",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：传入point、options，其中options现在支持offset、position</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入标注内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "labelOptions",
            "description": "<p>传入label的配置参数，现在支持offset、position</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let labelOptions = {\n  offset:new KGIS.Size(10,5),\n  position:new KGIS.Point(117.02, 36.70)\n};\nlet label = new KGIS.Label(\"我是文字标注\", labelOptions);\nmap.addOverlay(label);",
        "type": "Marker"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nlabel对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/label.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Marker(content,labelOptions)",
    "title": "新建文字标注",
    "name": "Label",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：传入point、options，其中options现在支持offset、position</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入标注内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "labelOptions",
            "description": "<p>传入label的配置参数，现在支持offset、position</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let labelOptions = {\n  offset:new KGIS.Size(10,5),\n  position:new KGIS.Point(117.02, 36.70),\n  map: map\n};\nlet label = new KGIS.Label(\"我是文字标注\", labelOptions);\nmap.addOverlay(label);",
        "type": "Marker"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nlabel对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/label.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Label(content,labelOptions)",
    "title": "新建文字标注",
    "name": "Label",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：传入point、options，其中options现在支持offset、position</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入标注内容.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "labelOptions",
            "description": "<p>传入label的配置参数，现在支持offset、position</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let labelOptions = {\n  offset:new KGIS.Size(10,5),\n  position:new KGIS.Point(117.02, 36.70),\n  map: map\n};\nlet label = new KGIS.Label(\"我是文字标注\", labelOptions);\nmap.addOverlay(label);",
        "type": "Label"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nlabel对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/label.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Marker(point,markerOptions)",
    "title": "新建标注点",
    "name": "Marker",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：传入point、options，其中options现在支持offset、icon、enableDragging、raiseOnDrag、rotation、title</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入marker的配置参数，现在支持offset、icon、enableDragging、raiseOnDrag、rotation、title</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet map = new KGIS.Map();\nlet iconOptions = {\n url:'./img/marker.png',\n size:overlay.size(36,36), // 默认是36\n imageOffset:overlay.size(5,5) // 图片相对于可视域的偏移值\n};\nlet icon = new KGIS.Icon(iconOptions);\nlet markerOptions = {\n offset:overlay.size(10,5),\n icon:icon,\n enableDragging:true,\n raiseOnDrag:true,\n rotation:0,\n title:\"新建标注点\",\n map: map\n};\nlet marker = new KGIS.Marker(map.newPoint(120, 36), markerOptions);\nmap.addOverlay(marker);",
        "type": "Marker"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nMarker对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/marker.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Marker(point,markerOptions)",
    "title": "新建标注点",
    "name": "Marker",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：传入point、options，其中options现在支持offset、icon、enableDragging、raiseOnDrag、rotation、title</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入marker的配置参数，现在支持offset、icon、enableDragging、raiseOnDrag、rotation、title</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet map = new KGIS.Map();\nlet iconOptions = {\n url:'./img/marker.png',\n size:new KGIS.Size(36,36), // 默认是36\n imageOffset:new KGIS.size(5,5) // 图片相对于可视域的偏移值\n};\nlet icon = new KGIS.Icon(iconOptions);\nlet markerOptions = {\n offset:new KGIS.size(10,5),\n icon:icon,\n enableDragging:true,\n raiseOnDrag:true,\n rotation:0,\n title:\"新建标注点\"\n};\nlet marker = new KGIS.Marker(new KGIS.Point(120, 36), markerOptions);\nmap.addOverlay(marker);",
        "type": "Marker"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nMarker对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/marker.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Marker(point,markerOptions)",
    "title": "新建标注点",
    "name": "Marker",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：传入point、options，其中options现在支持offset、icon、enableDragging、raiseOnDrag、rotation、title</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入marker的配置参数，现在支持offset、icon、enableDragging、raiseOnDrag、rotation、title</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet map = new KGIS.Map();\nlet iconOptions = {\n url:'./img/marker.png',\n size:overlay.size(36,36), // 默认是36\n imageOffset:overlay.size(5,5) // 图片相对于可视域的偏移值\n};\nlet icon = new KGIS.Icon(iconOptions);\nlet markerOptions = {\n offset:overlay.size(10,5),\n icon:icon,\n enableDragging:true,\n raiseOnDrag:true,\n rotation:0,\n title:\"新建标注点\",\n map: map\n};\nlet marker = new KGIS.Marker(map.newPoint(120, 36), markerOptions);\nmap.addOverlay(marker);",
        "type": "Marker"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nMarker对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/marker.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Marker(point,markerOptions)",
    "title": "新建标注点",
    "name": "Marker",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注点：传入point、options，其中options现在支持offset、icon、enableDragging、raiseOnDrag、rotation、title</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "point",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入marker的配置参数，现在支持offset、icon、enableDragging、raiseOnDrag、rotation、title</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet map = new KGIS.Map();\nlet iconOptions = {\n url:'./img/marker.png',\n size:overlay.size(36,36), // 默认是36\n imageOffset:overlay.size(5,5) // 图片相对于可视域的偏移值\n};\nlet icon = new KGIS.Icon(iconOptions);\nlet markerOptions = {\n offset:overlay.size(10,5),\n icon:icon,\n enableDragging:true,\n raiseOnDrag:true,\n rotation:0,\n title:\"新建标注点\",\n map: map\n};\nlet marker = new KGIS.Marker(map.newPoint(120, 36), markerOptions);\nmap.addOverlay(marker);",
        "type": "Marker"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nMarker对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/marker.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Polygon(pointArray,polygonOptions)",
    "title": "新建标注面",
    "name": "Polygon",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注折线：传入pointArray、options，其中options现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "pointArray",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入polyline的配置参数，现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": " let overlay = new KGIS.Overlay();\n let map  = new KGIS.Map();\n map.centerAndZoom([120.122,36.430], 16);\n let pArr = [\n    new KGIS.Point(120.120,36.432),\n    new KGIS.Point(120.121,36.431),\n    new KGIS.Point(120.122,36.430),\n    new KGIS.Point(120.123,36.433),\n    new KGIS.Point(120.124,36.434),\n    new KGIS.Point(120.125,36.436)];\nlet polygonOptions = {\n strokeColor:\"#FF0000\",\n fillColor:\"#00cc00\",\n strokeWeight:3,\n strokeOpacity:1,\n strokeStyle:\"solid\",\n map: map\n};\nlet polygon = new KGIS.Polygon(pArr, polygonOptions);\nmap.addOverlay(polygon);",
        "type": "Polygon"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nPolygon对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/polygon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Polygon(pointArray,polygonOptions)",
    "title": "新建标注面",
    "name": "Polygon",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注折线：传入pointArray、options，其中options现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "pointArray",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入polyline的配置参数，现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": " let overlay = new KGIS.Overlay();\n let map  = new KGIS.Map();\n map.centerAndZoom([120.122,36.430], 16);\n let pArr = [\n    map.newPoint(120.120,36.432),\n    map.newPoint(120.121,36.431),\n    map.newPoint(120.122,36.430),\n    map.newPoint(120.123,36.433),\n    map.newPoint(120.124,36.434),\n    map.newPoint(120.125,36.436)];\nlet polygonOptions = {\n strokeColor:\"#FF0000\",\n fillColor:\"#00cc00\",\n strokeWeight:3,\n strokeOpacity:1,\n strokeStyle:\"solid\"\n};\nlet polygon = new KGIS.Polygon(pArr, polygonOptions);\nmap.addOverlay(polygon);",
        "type": "Polygon"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nPolygon对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/polygon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Polygon(pointArray,polygonOptions)",
    "title": "新建标注面",
    "name": "Polygon",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注折线：传入pointArray、options，其中options现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "pointArray",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入polyline的配置参数，现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": " let overlay = new KGIS.Overlay();\n let map  = new KGIS.Map();\n map.centerAndZoom([120.122,36.430], 16);\n let pArr = [\n    map.newPoint(120.120,36.432),\n    map.newPoint(120.121,36.431),\n    map.newPoint(120.122,36.430),\n    map.newPoint(120.123,36.433),\n    map.newPoint(120.124,36.434),\n    map.newPoint(120.125,36.436)];\nlet polygonOptions = {\n strokeColor:\"#FF0000\",\n fillColor:\"#00cc00\",\n strokeWeight:3,\n strokeOpacity:1,\n strokeStyle:\"solid\",\n map: map\n};\nlet polygon = new KGIS.Polygon(pArr, polygonOptions);\nmap.addOverlay(polygon);",
        "type": "Polygon"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nPolygon对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/polygon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Polygon(pointArray,polygonOptions)",
    "title": "新建标注面",
    "name": "Polygon",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注折线：传入pointArray、options，其中options现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "pointArray",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入polyline的配置参数，现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": " let overlay = new KGIS.Overlay();\n let map  = new KGIS.Map();\n map.centerAndZoom([120.122,36.430], 16);\n let pArr = [\n    new KGIS.Point(120.120,36.432),\n    new KGIS.Point(120.121,36.431),\n    new KGIS.Point(120.122,36.430),\n    new KGIS.Point(120.123,36.433),\n    new KGIS.Point(120.124,36.434),\n    new KGIS.Point(120.125,36.436)];\nlet polygonOptions = {\n strokeColor:\"#FF0000\",\n fillColor:\"#00cc00\",\n strokeWeight:3,\n strokeOpacity:1,\n strokeStyle:\"solid\",\n map: map\n};\nlet polygon = new KGIS.Polygon(pArr, polygonOptions);\nmap.addOverlay(polygon);",
        "type": "Polygon"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nPolygon对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/polygon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Polyline(pointArray,polylineOptions)",
    "title": "新建标注折线",
    "name": "Polyline",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注折线：传入pointArray、options，其中options现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "pointArray",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入polyline的配置参数，现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet map  = new KGIS.Map();\nmap.centerAndZoom([120.122,36.430], 16);\nlet pArr = [\n   new KGIS.Point(120.120,36.432),\n   new KGIS.Point(120.121,36.431),\n   new KGIS.Point(120.122,36.430),\n   new KGIS.Point(120.123,36.433),\n   new KGIS.Point(120.124,36.434),\n   new KGIS.Point(120.125,36.436)];\nlet polylineOptions = {\n strokeColor:\"#FF0000\",\n strokeWeight:3,\n strokeOpacity:1,\n strokeStyle:\"solid\",\n map: map\n};\nlet polyline = new KGIS.Polyline(pArr, polylineOptions);\nmap.addOverlay(polyline);",
        "type": "Polyline"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nPolyline对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/polyline.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Polyline(pointArray,polylineOptions)",
    "title": "新建标注折线",
    "name": "Polyline",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注折线：传入pointArray、options，其中options现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "pointArray",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入polyline的配置参数，现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet map  = new KGIS.Map();\nmap.centerAndZoom([120.122,36.430], 16);\nlet pArr = [\n   map.newPoint(120.120,36.432),\n   map.newPoint(120.121,36.431),\n   map.newPoint(120.122,36.430),\n   map.newPoint(120.123,36.433),\n   map.newPoint(120.124,36.434),\n   map.newPoint(120.125,36.436)];\nlet polylineOptions = {\n strokeColor:\"#FF0000\",\n strokeWeight:3,\n strokeOpacity:1,\n strokeStyle:\"solid\"\n};\nlet polyline = new KGIS.Polyline(pArr, polylineOptions);\nmap.addOverlay(polyline);",
        "type": "Polyline"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nPolyline对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/polyline.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Polyline(pointArray,polylineOptions)",
    "title": "新建标注折线",
    "name": "Polyline",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注折线：传入pointArray、options，其中options现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "pointArray",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入polyline的配置参数，现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet map  = new KGIS.Map();\nmap.centerAndZoom([120.122,36.430], 16);\nlet pArr = [\n   map.newPoint(120.120,36.432),\n   map.newPoint(120.121,36.431),\n   map.newPoint(120.122,36.430),\n   map.newPoint(120.123,36.433),\n   map.newPoint(120.124,36.434),\n   map.newPoint(120.125,36.436)];\nlet polylineOptions = {\n strokeColor:\"#FF0000\",\n strokeWeight:3,\n strokeOpacity:1,\n strokeStyle:\"solid\",\n map: map\n};\nlet polyline = new KGIS.Polyline(pArr, polylineOptions);\nmap.addOverlay(polyline);",
        "type": "Polyline"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nPolyline对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/polyline.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "Polyline(pointArray,polylineOptions)",
    "title": "新建标注折线",
    "name": "Polyline",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建标注折线：传入pointArray、options，其中options现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "pointArray",
            "description": "<p>传入点坐标.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "markerOptions",
            "description": "<p>传入polyline的配置参数，现在支持strokerColor、strokerWeight、strokerOpacity、strokerStyle</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let overlay = new KGIS.Overlay();\nlet map  = new KGIS.Map();\nmap.centerAndZoom([120.122,36.430], 16);\nlet pArr = [\n   new KGIS.Point(120.120,36.432),\n   new KGIS.Point(120.121,36.431),\n   new KGIS.Point(120.122,36.430),\n   new KGIS.Point(120.123,36.433),\n   new KGIS.Point(120.124,36.434),\n   new KGIS.Point(120.125,36.436)];\nlet polylineOptions = {\n strokeColor:\"#FF0000\",\n strokeWeight:3,\n strokeOpacity:1,\n strokeStyle:\"solid\",\n map: map\n};\nlet polyline = new KGIS.Polyline(pArr, polylineOptions);\nmap.addOverlay(polyline);",
        "type": "Polyline"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nPolyline对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/polyline.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmarker.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/amap/obj/marker.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmarker.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/amap/obj/polygon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmarker.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/amap/obj/polyline.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmarker.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/arcgis/obj/marker.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmarker.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/arcgis/obj/polygon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmarker.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/arcgis/obj/polyline.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmarker.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/bmap/obj/marker.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmarker.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/bmap/obj/polygon.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addContextMenu(menu)",
    "title": "绑定菜单到地图",
    "name": "addContextMenu",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>绑定菜单到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "menu",
            "description": "<p>需要绑定的菜单.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let menu = new KGIS.Menu();\nlet menuItemOtions = {\n  id:\"1\",\n  name: \"地图放大右键菜单\",\n  width: 200,\n  iconUrl: BMAP_CONTEXT_MENU_ICON_ZOOMIN\n}\nmenu.addMenuItem(menuItemOtions, function (e,ee,obj) {\n  map.zoomIn();\n});\nmarker.addContextMenu(menu);",
        "type": "addContextMenu"
      }
    ],
    "filename": "src/map/bmap/obj/polyline.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addOverlay(obj,callback)",
    "title": "将覆盖物添加到地图上",
    "name": "addOverlay",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将覆盖物添加到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>传入的覆盖物对象</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>添加覆盖物的回调</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.addOverlay(obj,function(){\n console.log(\"添加成功\");\n});",
        "type": "addOverlay"
      }
    ],
    "filename": "src/map/amap/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addOverlay(obj,callback)",
    "title": "将覆盖物添加到地图上",
    "name": "addOverlay",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将覆盖物添加到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>传入的覆盖物对象</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>添加覆盖物的回调</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.addOverlay(obj,function(){\n console.log(\"添加成功\");\n});",
        "type": "addOverlay"
      }
    ],
    "filename": "src/map/arcgis/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addOverlay(obj,callback)",
    "title": "将覆盖物添加到地图上",
    "name": "addOverlay",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将覆盖物添加到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>传入的覆盖物对象</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>添加覆盖物的回调</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.addOverlay(obj,function(){\n console.log(\"添加成功\");\n});",
        "type": "addOverlay"
      }
    ],
    "filename": "src/map/bmap/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "addOverlay(obj,callback)",
    "title": "将覆盖物添加到地图上",
    "name": "addOverlay",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将覆盖物添加到地图上</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>传入的覆盖物对象</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>添加覆盖物的回调</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.addOverlay(obj,function(){\n console.log(\"添加成功\");\n});",
        "type": "addOverlay"
      }
    ],
    "filename": "src/map/gmap/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "clearOverlays()",
    "title": "移除所有覆盖物",
    "name": "clearOverlays",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将所有覆盖物从地图上移除</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.clearOverlays()",
        "type": "clearOverlays"
      }
    ],
    "filename": "src/map/amap/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "clearOverlays()",
    "title": "移除所有覆盖物",
    "name": "clearOverlays",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将所有覆盖物从地图上移除</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.clearOverlays()",
        "type": "clearOverlays"
      }
    ],
    "filename": "src/map/arcgis/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "clearOverlays()",
    "title": "移除所有覆盖物",
    "name": "clearOverlays",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将所有覆盖物从地图上移除</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.clearOverlays()",
        "type": "clearOverlays"
      }
    ],
    "filename": "src/map/bmap/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "clearOverlays()",
    "title": "移除所有覆盖物",
    "name": "clearOverlays",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将所有覆盖物从地图上移除</p>",
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.clearOverlays()",
        "type": "clearOverlays"
      }
    ],
    "filename": "src/map/gmap/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "removeOverlay(obj,callback)",
    "title": "将覆盖物从地图上移除",
    "name": "removeOverlay",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将覆盖物从地图上移除</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>传入的覆盖物对象</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>删除覆盖物后的回调</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.removeOverlay(obj,function(){\n console.log(\"移除成功\");\n});",
        "type": "removeOverlay"
      }
    ],
    "filename": "src/map/amap/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "removeOverlay(obj,callback)",
    "title": "将覆盖物从地图上移除",
    "name": "removeOverlay",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将覆盖物从地图上移除</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>传入的覆盖物对象</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>删除覆盖物后的回调</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.removeOverlay(obj,function(){\n console.log(\"移除成功\");\n});",
        "type": "removeOverlay"
      }
    ],
    "filename": "src/map/arcgis/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "removeOverlay(obj,callback)",
    "title": "将覆盖物从地图上移除",
    "name": "removeOverlay",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将覆盖物从地图上移除</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>传入的覆盖物对象</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>删除覆盖物后的回调</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.removeOverlay(obj,function(){\n console.log(\"移除成功\");\n});",
        "type": "removeOverlay"
      }
    ],
    "filename": "src/map/bmap/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "removeOverlay(obj,callback)",
    "title": "将覆盖物从地图上移除",
    "name": "removeOverlay",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>将覆盖物从地图上移除</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "obj",
            "description": "<p>传入的覆盖物对象</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>删除覆盖物后的回调</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let map = new KGIS.Map();\nmap.removeOverlay(obj,function(){\n console.log(\"移除成功\");\n});",
        "type": "removeOverlay"
      }
    ],
    "filename": "src/map/gmap/overlay.js",
    "groupTitle": "标注类"
  },
  {
    "type": "构造函数",
    "url": "Size(width,height)",
    "title": "新建Size尺寸",
    "name": "size",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建Size尺寸</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "width",
            "description": "<p>传入宽度.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "height",
            "description": "<p>传入高度.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let size = new KGIS.Size(20, 20);",
        "type": "size"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nSize对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/size.js",
    "groupTitle": "标注类"
  },
  {
    "type": "构造函数",
    "url": "Size(width,height)",
    "title": "新建Size尺寸",
    "name": "size",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建Size尺寸</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "width",
            "description": "<p>传入宽度.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "height",
            "description": "<p>传入高度.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let size = new KGIS.Size(20, 20);",
        "type": "size"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nSize对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/arcgis/obj/size.js",
    "groupTitle": "标注类"
  },
  {
    "type": "构造函数",
    "url": "Size(width,height)",
    "title": "新建Size尺寸",
    "name": "size",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建Size尺寸</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "width",
            "description": "<p>传入宽度.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "height",
            "description": "<p>传入高度.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let size = new KGIS.Size(20, 20);",
        "type": "size"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nSize对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/size.js",
    "groupTitle": "标注类"
  },
  {
    "type": "构造函数",
    "url": "Size(width,height)",
    "title": "新建Size尺寸",
    "name": "size",
    "group": "Overlay",
    "version": "0.0.1",
    "description": "<p>新建Size尺寸</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "width",
            "description": "<p>传入宽度.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "height",
            "description": "<p>传入高度.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let size = new KGIS.Size(20, 20);",
        "type": "size"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nSize对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/gmap/obj/size.js",
    "groupTitle": "标注类"
  },
  {
    "type": "get",
    "url": "DrivingRoute()",
    "title": "新建驾车对象",
    "name": "DrivingRoute",
    "group": "Route",
    "version": "0.0.1",
    "description": "<p>新建驾车对象。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "map",
            "description": "<p>需要绑定的地图实例</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "policy",
            "description": "<p>规划路线类型</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let drivingRoute = new KGIS.DrivingRoute(map, 1);",
        "type": "DrivingRoute"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nDrivingRoute对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/driving-route.js",
    "groupTitle": "路线规划类"
  },
  {
    "type": "get",
    "url": "DrivingRoute()",
    "title": "新建驾车对象",
    "name": "DrivingRoute",
    "group": "Route",
    "version": "0.0.1",
    "description": "<p>新建驾车对象。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "map",
            "description": "<p>需要绑定的地图实例</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "policy",
            "description": "<p>规划路线类型</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let drivingRoute = new KGIS.DrivingRoute(map, 1);",
        "type": "DrivingRoute"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\nDrivingRoute对象",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/driving-route.js",
    "groupTitle": "路线规划类"
  },
  {
    "type": "get",
    "url": "clearRoute()",
    "title": "清除驾车路线",
    "name": "clearRoute",
    "group": "Route",
    "version": "0.0.1",
    "description": "<p>清除驾车路线。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "drivingRoute",
            "description": "<p>规划路线对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let dr = new KGIS.DrivingRoute(map, 1);\ndr.clearRoute(dr);",
        "type": "clearRoute"
      }
    ],
    "filename": "src/map/amap/obj/driving-route.js",
    "groupTitle": "路线规划类"
  },
  {
    "type": "get",
    "url": "clearRoute()",
    "title": "清除驾车路线",
    "name": "clearRoute",
    "group": "Route",
    "version": "0.0.1",
    "description": "<p>清除驾车路线。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "drivingRoute",
            "description": "<p>规划路线对象</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let dr = new KGIS.DrivingRoute(map, 1);\ndr.clearRoute(dr);",
        "type": "clearRoute"
      }
    ],
    "filename": "src/map/bmap/obj/driving-route.js",
    "groupTitle": "路线规划类"
  },
  {
    "type": "get",
    "url": "search()",
    "title": "规划驾车路线",
    "name": "search",
    "group": "Route",
    "version": "0.0.1",
    "description": "<p>规划驾车路线。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "drivingRoute",
            "description": "<p>规划路线对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "start",
            "description": "<p>规划路线的起点</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "end",
            "description": "<p>规划路线的终点</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let dr = new KGIS.DrivingRoute(map, 1);\nlet start = new KGIS.Point(116, 37);\nlet end = new KGIS.Point(117, 36);\ndr.search(start, end);",
        "type": "search"
      }
    ],
    "filename": "src/map/amap/obj/driving-route.js",
    "groupTitle": "路线规划类"
  },
  {
    "type": "get",
    "url": "search()",
    "title": "规划驾车路线",
    "name": "search",
    "group": "Route",
    "version": "0.0.1",
    "description": "<p>规划驾车路线。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "drivingRoute",
            "description": "<p>规划路线对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "start",
            "description": "<p>规划路线的起点</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "end",
            "description": "<p>规划路线的终点</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "let dr = new KGIS.DrivingRoute(map, 1);\nlet start = new KGIS.Point(116, 37);\nlet end = new KGIS.Point(117, 36);\ndr.search(start, end);",
        "type": "search"
      }
    ],
    "filename": "src/map/bmap/obj/driving-route.js",
    "groupTitle": "路线规划类"
  },
  {
    "type": "get",
    "url": "AutoComplete(id,callback)",
    "title": "自动提示",
    "name": "AutoComplete",
    "group": "Service",
    "version": "0.0.1",
    "description": "<p>自动提示</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>需要绑定的容器id</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>完成自动提示后的回调</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "new KGIS.AutoComplete(\"search\", callback)",
        "type": "Icon"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\n响应自动提示",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/amap/obj/autocomplete.js",
    "groupTitle": "服务类"
  },
  {
    "type": "get",
    "url": "AutoComplete(id,callback)",
    "title": "自动提示",
    "name": "AutoComplete",
    "group": "Service",
    "version": "0.0.1",
    "description": "<p>自动提示</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>需要绑定的容器id</p>"
          },
          {
            "group": "Parameter",
            "type": "function",
            "optional": false,
            "field": "callback",
            "description": "<p>完成自动提示后的回调</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "使用示例:",
        "content": "new KGIS.AutoComplete(\"search\", callback)",
        "type": "Icon"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "响应成功:",
          "content": "HTTP/1.1 200 OK\n响应自动提示",
          "type": "json"
        }
      ]
    },
    "filename": "src/map/bmap/obj/autocomplete.js",
    "groupTitle": "服务类"
  }
] });
