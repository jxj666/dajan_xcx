global.webpackJsonp([1],{

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(81);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        "usingComponents": {
            "txv-video": 'plugin://myPlugin/video'
        }
    }

});

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_2e73f5bc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(88);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(82)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e73f5bc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_2e73f5bc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\player\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e73f5bc", Component.options)
  } else {
    hotAPI.reload("data-v-2e73f5bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainTitle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_videoCard__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_textCard__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_searchBox__ = __webpack_require__(5);

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
    return {
      thisPage: "player",
      prePage: undefined,
      leftNone: true,
      fixed: false,
      scrollHeight: "500px",
      dataList: [],
      // src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
      // src: "http://static.video.qq.com/TPout.swf?vid=w0766f4ngw3&auto=1",
      src: "",
      listShow: true,
      listHide: false,
      hideSearch: false,
      searchNew: 0,
      videoContext: {},
      vid: "w0766f4ngw3",
      playerObj: {},
      autoplay: false,
      title: "",
      shareImg: ""
    };
  },


  components: {
    mainTitle: __WEBPACK_IMPORTED_MODULE_1__components_mainTitle__["a" /* default */],
    videoCard: __WEBPACK_IMPORTED_MODULE_2__components_videoCard__["a" /* default */],
    textCard: __WEBPACK_IMPORTED_MODULE_3__components_textCard__["a" /* default */],
    searchBox: __WEBPACK_IMPORTED_MODULE_4__components_searchBox__["a" /* default */]
  },
  computed: {
    src_fix: function src_fix() {
      if (this.playerObj.class == 2) {
        return wx.getStorageSync("media_url") + "/" + this.playerObj.video_url;
      } else {
        return "";
      }
    },
    scrollHeight_fix: function scrollHeight_fix() {
      var rule = 750 / wx.getSystemInfoSync().windowWidth;
      var height = wx.getSystemInfoSync().windowHeight;
      this.scrollHeight = height * rule - (103 + 423) + "rpx";
      return height * rule - (103 + 423) + "rpx";
    }
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
    getList: function getList(bol) {
      var that = this;
      wx.getNetworkType({
        success: function success(res) {
          if (res.networkType == "wifi") {
            that.autoplay = true;
            if (that.playerObj.class == 1) {
              var TxvContext = requirePlugin("myPlugin");
              var txvContext = TxvContext.getTxvContext("showVideoBox1");
              txvContext.play();
              console.log("auto1");
            } else if (that.playerObj.class == 2) {
              that.videoContext = wx.createVideoContext("showVideoBox2");
              that.videoContext.play();
              console.log("auto2");
            } else {
              that.videoContext = wx.createVideoContext("showVideoBox3");
              that.videoContext.play();
              console.log("auto3");
            }
          }
        }
      });
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
      var data = wx.getStorageSync("player");
      this.dataList = data.data;
      this.playerObj = data.video;
      this.title = this.escape2Html(data.video.typeTitle) || this.escape2Html(data.video.title);
      this.shareImg = wx.getStorageSync("media_url") + "/" + data.video.image_url;
      wx.setStorageSync("pre_page", "none");
      wx.setNavigationBarTitle({
        title: this.title //页面标题为路由参数
      });

      wx.setStorageSync("pre_page", "none");
      var Fly = __webpack_require__(1);
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(function (request) {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      fly.post(wx.getStorageSync("url") + "/uploadProductStatic", {
        productId: this.playerObj.id
      }).then(function (d) {
        //输出请求数据
        console.log("req", d.data);
      }).catch(function (err) {
        console.log(err.status, err.message);
      });
      this.getList(true);
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

      this._watchers = [];
    },
    showStart: function showStart() {
      wx.showShareMenu({
        withShareTicket: false,
        success: function success() {},
        fail: function fail() {},
        complete: function complete() {}
      });
      this.prePage = wx.getStorageSync("pre_page");
      if (this.prePage == "none") {
        this.animation = false;
      } else {
        this.exit();
      }
      var data = wx.getStorageSync("player");
      this.dataList = data.data;
      this.playerObj = data.video;
      this.title = this.escape2Html(data.video.typeTitle) || this.escape2Html(data.video.title);
      this.shareImg = wx.getStorageSync("media_url") + "/" + data.video.image_url;
      wx.setStorageSync("pre_page", "none");
      wx.setNavigationBarTitle({
        title: this.title //页面标题为路由参数
      });

      var Fly = __webpack_require__(1);
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(function (request) {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      fly.post(wx.getStorageSync("url") + "/uploadProductStatic", {
        productId: this.playerObj.id
      }).then(function (d) {
        //输出请求数据
        console.log("req", d.data);
      }).catch(function (err) {
        console.log(err.status, err.message);
      });
      this.getList();
    },
    showDetail_search: function showDetail_search(options) {
      var _this2 = this;

      console.log("showDetail_search");
      var x = options.key1;
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

        wx.setStorage({
          key: "goods",
          data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(x)
        });

        _this2.share_toVideo(options, d.data.data.list);
      }).catch(function (err) {
        console.log(err.status, err.message);
      });
    },
    showDetail_explain: function showDetail_explain(options) {
      var _this3 = this;

      console.log("showDetail_explain");
      var x = {
        id: options.key1,
        title: options.title
      };
      var Fly = __webpack_require__(1);
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(function (request) {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      fly.get(wx.getStorageSync("url") + "/type/" + x.id, {}).then(function (d) {
        //输出请求数据
        wx.setStorage({
          key: "goods",
          data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(x)
        });
        _this3.share_toVideo(options, d.data.data.list);
      }).catch(function (err) {
        console.log(err.status, err.message);
      });
    },
    share_toVideo: function share_toVideo(options, list) {
      console.log(list);
      var x_id = options.key2;
      var x = {};
      for (var i = 0; i < list.length; i++) {
        if (x_id == list[i].id) {
          var x = list[i];
        }
      }
      wx.setStorage({
        key: "video",
        data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(x)
      });
      wx.setStorageSync("pre_page", this.thisPage);
      wx.setStorageSync("player", {
        data: list,
        video: x,
        page: "explain"
      });
      wx.setStorageSync("share_player", {
        video: x
      });
      this.showStart();
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
        key2: this.getQueryString(q, "key2"),
        page: this.getQueryString(q, "page"),
        title: "大疆飞手百科"
      });
    } else {
      wx.setStorageSync("options", options);
    }
  },
  onShow: function onShow() {
    var options = wx.getStorageSync("options");
    console.log("k", options);

    wx.setStorageSync("options", {});

    if (options.share) {
      console.log("/pages/player/main?share=true&page=" + options.page + "&key1=" + options.key1 + "&key2=" + options.key2);
      wx.setStorageSync("o_page", options.page);
      wx.setStorageSync("o_key1", options.key1);
      wx.setStorageSync("o_key2", options.key2);

      wx.setStorageSync("share_player", options.page);
      wx.setStorageSync("share_player_list", options.key1);
      wx.setStorageSync("share_player_video", options.key2);
      if (options.page == "explain") {
        this.showDetail_explain(options);
      } else {
        this.showDetail_search(options);
      }
    } else {
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

    var page = wx.getStorageSync("share_player_page") || wx.getStorageSync("o_page");
    var key1 = wx.getStorageSync("share_player_list") || wx.getStorageSync("o_key1");
    var key2 = wx.getStorageSync("share_player_video") || wx.getStorageSync("o_key2");

    var path = "/pages/player/main?share=true&page=" + page + "&key1=" + key1 + "&key2=" + key2 + "&title=" + this.title;
    return {
      title: this.title,
      path: path,
      imageUrl: this.shareImg,
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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_textCard_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_e348639a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_textCard_vue__ = __webpack_require__(87);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(85)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e348639a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_textCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_e348639a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_textCard_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\textCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] textCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e348639a", Component.options)
  } else {
    hotAPI.reload("data-v-e348639a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['video']
});

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('h3', [_vm._v(_vm._s(_vm.video.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.video.description))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e348639a", esExports)
  }
}

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "grid-box max_width"
  }, [_c('main-title', {
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
  }, [(_vm.listShow) ? _c('div', {
    staticClass: "listBoxTotal",
    class: {
      listHide: _vm.listHide
    }
  }, [_c('view', {
    staticClass: "videoBox"
  }, [(_vm.playerObj.class == 2) ? _c('video', {
    class: {
      fixedVideo: _vm.fixed
    },
    attrs: {
      "id": "showVideoBox2",
      "objectFit": "fill",
      "src": _vm.src_fix,
      "controls": "",
      "fixed": "true"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.playerObj.class == 3) ? _c('video', {
    class: {
      fixedVideo: _vm.fixed
    },
    attrs: {
      "id": "showVideoBox3",
      "objectFit": "fill",
      "src": _vm.playerObj.video_url,
      "controls": "",
      "fixed": "true",
      "autoplay": _vm.autoplay
    }
  }) : _vm._e(), _vm._v(" "), (_vm.playerObj.class == 1) ? _c('txv-video', {
    attrs: {
      "vid": _vm.playerObj.video_id,
      "playerid": "showVideoBox1",
      "objectFit": "fill",
      "mpcomid": '1'
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "listBox grid-var",
    style: ({
      height: _vm.scrollHeight_fix
    })
  }, [_c('scroll-view', {
    staticClass: "content",
    attrs: {
      "scroll-y": "true"
    }
  }, [_c('div', [_c('text-card', {
    attrs: {
      "video": _vm.playerObj,
      "mpcomid": '2'
    }
  }), _vm._v(" "), _vm._l((_vm.dataList), function(x, key) {
    return _c('div', {
      key: key
    }, [(_vm.playerObj.id != x.id) ? _c('video-card', {
      attrs: {
        "videos": x,
        "index": -1,
        "leftNone": _vm.leftNone,
        "eventid": '1-' + key,
        "mpcomid": '3-' + key
      },
      on: {
        "toVideo": _vm.toVideo
      }
    }) : _vm._e()], 1)
  })], 2)])], 1)]) : _vm._e(), _vm._v(" "), (_vm.listHide) ? _c('div', {
    staticClass: "searchBox"
  }, [_c('search-box', {
    attrs: {
      "searchPage": _vm.thisPage,
      "searchNew": _vm.searchNew,
      "mpcomid": '4'
    }
  })], 1) : _vm._e()])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2e73f5bc", esExports)
  }
}

/***/ })

},[80]);
//# sourceMappingURL=main.js.map