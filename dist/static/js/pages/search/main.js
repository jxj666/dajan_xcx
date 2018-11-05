global.webpackJsonp([3],{

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(90);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_9ad779ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(93);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9ad779ae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_9ad779ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ad779ae", Component.options)
  } else {
    hotAPI.reload("data-v-9ad779ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mainTitle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_videoCard__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_searchBox__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_station__ = __webpack_require__(6);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    var _ref;

    return _ref = {
      loading: false,

      thisPage: "search",
      prePage: undefined,
      leftNone: false,
      dataList: []
    }, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "prePage", undefined), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "listShow", true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "listHide", false), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "hideSearch", false), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "searchNew", 0), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "animation", true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "searchText", ""), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_ref, "title", ""), _ref;
  },


  components: {
    mainTitle: __WEBPACK_IMPORTED_MODULE_2__components_mainTitle__["a" /* default */],
    videoCard: __WEBPACK_IMPORTED_MODULE_3__components_videoCard__["a" /* default */],
    searchBox: __WEBPACK_IMPORTED_MODULE_4__components_searchBox__["a" /* default */],
    station: __WEBPACK_IMPORTED_MODULE_5__components_station__["a" /* default */]
  },

  methods: {
    escape2Html: function escape2Html(str) {
      str = str || "";

      var arrEntities = {
        lt: "<",
        gt: ">",
        nbsp: " ",
        amp: "&",
        quot: '"'
      };
      return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
        return arrEntities[t];
      });
    },
    toSearch: function toSearch() {
      var _this = this;

      this.hideSearch = true;
      this.listHide = true;
      setTimeout(function () {
        _this.searchNew = +new Date();
        _this.listShow = false;
      }, 500);
    },
    toVideo: function toVideo(x) {
      wx.setStorage({
        key: "video",
        data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(x)
      });

      wx.setStorageSync("pre_page", this.thisPage);
      wx.setStorageSync("player", {
        data: this.dataList,
        video: x
      });
      var url = "../player/main";
      wx.setStorageSync("share_player_video", x.id);

      wx.setStorageSync("share_player", {
        video: x,
        page: "search"
      });
      wx.navigateTo({
        url: url
      });
    },
    showDetail: function showDetail(options) {
      var _this2 = this;

      var x = options.key1;
      if (!x) {
        return;
      }
      var Fly = __webpack_require__(1);
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(function (request) {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      wx.setStorageSync("searchText", x);
      fly.get(wx.getStorageSync("url") + "/search", {
        keyword: x
      }).then(function (d) {
        //输出请求数据
        console.log("req", d.data);
        if (d.data.data.list.length > 0) {
          wx.setStorage({
            key: "goods",
            data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(x)
          });
          console.log(d);
          if (_this2.searchPage != "search") {
            wx.setStorageSync("search_page", _this2.searchPage);
          } else {
            wx.setStorageSync("search_page", false);
          }
          wx.setStorageSync("pre_page", _this2.searchPage);
          wx.setStorageSync("search", {
            data: d.data,
            title: x
          });
        } else {
          _this2.searchRes = false;
          retrun;
        }
        _this2.showStart();
      }).catch(function (err) {
        console.log(err.status, err.message);
      });
    },
    getList: function getList() {
      var _this3 = this;

      this.leftNone = false;
      setTimeout(function () {
        _this3.leftNone = true;
      }, 200);
    },
    exit: function exit() {
      // var SP = wx.getStorageSync("search_page");
      // console.log(SP);
      // if (SP) {
      //   wx.setStorageSync("search_page", false);
      //   return;
      // }
      this.leftNone = false;
      this.listShow = true;
      this.listHide = false;
      this.dataList = [];
      this.hideSearch = false;
      this.animation = true;

      this._watchers = [];
    },
    showStart: function showStart() {
      wx.showShareMenu({
        withShareTicket: false,
        success: function success() {},
        fail: function fail() {},
        complete: function complete() {}
      });

      this.searchText = wx.getStorageSync("searchText");
      this.prePage = wx.getStorageSync("pre_page");
      if (this.prePage == "none") {
        this.animation = false;
      } else {
        this.exit();
      }
      var data = wx.getStorageSync("search");
      console.log("search", data);
      this.dataList = data.data.data.list;
      wx.setStorageSync("pre_page", "none");
      this.title = this.escape2Html(data.title) || "搜索结果"; //页面标题为路由参数
      wx.setNavigationBarTitle({
        title: this.title
      });
      this.getList();
    },

    getQueryString: function getQueryString(url, name) {
      var reg = new RegExp("(^|&|/?)" + name + "=([^&|/?]*)(&|/?|$)", "i");
      var r = url.substr(1).match(reg);
      if (r != null) {
        return r[2];
      }
      return null;
    }
  },
  created: function created() {},
  onLoad: function onLoad(options) {
    console.log("options", options);

    // 线上
    wx.setStorageSync("url", "https://feishou-baike.djiits.com");
    wx.setStorageSync("media_url", "https://feishou-baike.djicdn.com");
    if (options.q) {
      var q = decodeURIComponent(options.q);
      wx.setStorageSync("options", {
        share: true,
        key1: this.getQueryString(q, "key1"),
        title: "大疆飞手百科"
      });
    } else {
      wx.setStorageSync("options", options);
    }
  },
  onShow: function onShow() {
    this.loading = false;

    var options = wx.getStorageSync("options");
    console.log("k", options);

    wx.setStorageSync("options", {});
    wx.setStorageSync("share_player_page", "search");
    if (options.share) {
      console.log("/pages/search/main?share=true&key1=" + options.key1);
      wx.setStorageSync("o_key1", options.key1);

      this.showDetail(options);
    } else {
      this.loading = true;

      this.showStart();
    }
  },
  onHide: function onHide() {
    this.exit();
  },
  onUnload: function onUnload() {
    this.exit();
  },

  onShareAppMessage: function onShareAppMessage() {
    var x = wx.getStorageSync("share_childIndex") || {};
    if (!x.id) {
      x.id = wx.getStorageSync("o_key1");
    }

    var path = "/pages/search/main?share=true&key1=" + x + "&title=" + this.title;
    return {
      title: this.title,
      path: path,
      success: function success(res) {
        console.log("转发成功!", res, path);
      },
      fail: function fail(res) {
        console.log("转发失败!", res);
      }
    };
  }
});

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "max_width"
  }, [_c('div', [_c('main-title', {
    attrs: {
      "thisPage": _vm.thisPage,
      "hideSearch": _vm.hideSearch,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "toSearch": _vm.toSearch
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "contentBox"
  }, [(_vm.listHide) ? _c('div', {
    staticClass: "searchBox"
  }, [_c('search-box', {
    attrs: {
      "searchPage": _vm.thisPage,
      "searchNew": _vm.searchNew,
      "mpcomid": '1'
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.listShow && _vm.dataList.length > 0) ? _c('div', {
    staticClass: "listBox",
    class: {
      listHide: _vm.listHide
    }
  }, [_c('div', {
    staticClass: "search"
  }, [_vm._v("\n          “" + _vm._s(_vm.searchText) + "”搜索到 " + _vm._s(_vm.dataList.length) + " 条结果\n        ")]), _vm._v(" "), _c('div', _vm._l((_vm.dataList), function(x, key) {
    return _c('div', {
      key: key
    }, [_c('video-card', {
      attrs: {
        "animation": _vm.animation,
        "videos": x,
        "index": key,
        "leftNone": _vm.leftNone,
        "eventid": '1-' + key,
        "mpcomid": '2-' + key
      },
      on: {
        "toVideo": _vm.toVideo
      }
    })], 1)
  }))]) : _vm._e(), _vm._v(" "), (_vm.dataList.length == 0 && _vm.loading) ? _c('station', {
    attrs: {
      "mpcomid": '3'
    }
  }) : _vm._e()], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-9ad779ae", esExports)
  }
}

/***/ })

},[89]);
//# sourceMappingURL=main.js.map