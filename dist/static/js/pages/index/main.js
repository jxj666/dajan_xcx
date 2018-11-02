global.webpackJsonp([2],{

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(75);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_0ce52447_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(79);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(76)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ce52447"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_0ce52447_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ce52447", Component.options)
  } else {
    hotAPI.reload("data-v-0ce52447", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 76:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainTitle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_indexCard__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_searchBox__ = __webpack_require__(5);

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
      thisPage: "index",
      prePage: undefined,
      leftNone: false,
      dataList: [],
      listShow: true,
      listHide: false,
      hideSearch: false,
      searchNew: 0,
      animation: true,
      title: "大疆飞手百科"
    };
  },

  components: {
    mainTitle: __WEBPACK_IMPORTED_MODULE_1__components_mainTitle__["a" /* default */],
    indexCard: __WEBPACK_IMPORTED_MODULE_2__components_indexCard__["a" /* default */],
    searchBox: __WEBPACK_IMPORTED_MODULE_3__components_searchBox__["a" /* default */]
  },
  methods: {
    hideSearchBox: function hideSearchBox() {
      console.log(123);
      wx.setStorageSync("search_page", false);

      this.hideSearch = false;
      this.listHide = false;
      this.listShow = true;
    },
    showIndex: function showIndex() {
      var data = wx.getStorageSync("index");
      console.log(data);
      if (!data) {
        return;
      }
      this.dataList = data.data.data;
      if (this.prePage == "none") {
        this.animation = false;
      }
      wx.setStorageSync("pre_page", "none");
      wx.setNavigationBarTitle({
        title: this.title
      });
      this.getList();
    },
    get_user: function get_user() {
      wx.setStorageSync("data_box", [{ pre_page: "begin" }]);
      wx.setStorageSync("pre_page", "begin");
      var _this = this;
      wx.login({
        success: function success(res) {
          if (res.code) {
            console.log(res);
            var Fly = __webpack_require__(1);
            var fly = new Fly();
            fly.post(wx.getStorageSync("url") + "/wechatLogin", {
              code: res.code
            }).then(function (d) {
              //输出请求数据
              console.log("req", d.data);
              wx.setStorageSync("YX-SESSIONID", d.data.data.sessionId);

              _this.start_index();
            }).catch(function (err) {
              console.log(err.status, err.message);
            });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    start_index: function start_index() {
      var _this2 = this;

      var Fly = __webpack_require__(1);
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(function (request) {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      fly.get(wx.getStorageSync("url") + "/", {}).then(function (d) {
        //输出请求数据
        console.log("req", d.data);
        wx.setStorageSync("index", {
          pre_page: _this2.thisPage,
          data: d.data,
          page: "index"
        });
        // wx.setStorageSync("pre_page", this.thisPage);
        _this2.showIndex();
      }).catch(function (err) {
        console.log(err.status, err.message);
      });
    },
    toSearch: function toSearch() {
      var _this3 = this;

      this.hideSearch = true;
      this.listHide = true;
      setTimeout(function () {
        _this3.listShow = false;
        _this3.searchNew = +new Date();
      }, 500);
    },
    toDetail: function toDetail(x) {
      var _this4 = this;

      var Fly = __webpack_require__(1);
      var fly = new Fly();
      var header = wx.getStorageSync("YX-SESSIONID");
      fly.interceptors.request.use(function (request) {
        request.headers["YX-SESSIONID"] = header;
        return request;
      });
      fly.get(wx.getStorageSync("url") + "/type/" + x.id, {}).then(function (d) {
        //输出请求数据
        console.log("req", d.data);
        wx.setStorage({
          key: "goods",
          data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(x)
        });
        wx.setStorageSync("pre_page", _this4.thisPage);

        var url;
        if (d.data.data.type == "series") {
          wx.setStorageSync("childIndex", {
            title: x.title,
            data: d.data
          });

          url = "../childIndex/main";
          wx.setStorageSync("share_childIndex", x);
        } else {
          wx.setStorageSync("explain", {
            title: x.title,
            data: d.data
          });
          url = "../explain/main";
          wx.setStorageSync("share_explain", x);
          wx.setStorageSync("share_player_list", x.id);
        }
        wx.navigateTo({ url: url });
      }).catch(function (err) {
        console.log(err.status, err.message);
      });
    },
    getList: function getList() {
      var _this5 = this;

      this.leftNone = false;
      setTimeout(function () {
        _this5.leftNone = true;
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
    }
  },

  onShow: function onShow() {
    wx.showShareMenu({
      withShareTicket: false,
      success: function success() {},
      fail: function fail() {},
      complete: function complete() {}
    });

    // 线上
    wx.setStorageSync("url", "https://feishou-baike.djiits.com");
    wx.setStorageSync("media_url", "https://feishou-baike.djicdn.com");

    // // 测试
    // wx.setStorageSync("url", "https://dj.majiangyun.com");
    // wx.setStorageSync("media_url",'https://bj-crm-wechat-mini-program-test.s3.cn-north-1.amazonaws.com.cn')

    wx.setStorageSync("search_page", "none");
    this.prePage = wx.getStorageSync("pre_page");
    if (this.prePage == "none") {
      this.animation = false;
    } else {
      this.exit();
    }

    if (this.prePage == "none") {
      console.log("back");
      this.showIndex();
    } else {
      console.log("start");
      this.get_user();
    }
  },
  onHide: function onHide() {
    this.exit();
  },
  onUnload: function onUnload() {
    this.exit();
  },

  onShareAppMessage: function onShareAppMessage() {
    console.log(this.title);
    return {
      title: this.title,
      path: "/pages/index/main"
    };
  },
  onLoad: function onLoad(options) {
    console.log('options', options);

    // 线上
    wx.setStorageSync("url", "https://feishou-baike.djiits.com");
    wx.setStorageSync("media_url", "https://feishou-baike.djicdn.com");

    var mta = __webpack_require__(78);
    mta.App.init({
      appID: "500649139",
      // eventID: "500015824", // 高级功能-自定义事件统计ID，配置开通后在初始化处填写
      lauchOpts: {}, //渠道分析,需在onLaunch方法传入options,如onLaunch:function(options){...}
      statPullDownFresh: true, // 使用分析-下拉刷新次数/人数，必须先开通自定义事件，并配置了合法的eventID
      statShareApp: true, // 使用分析-分享次数/人数，必须先开通自定义事件，并配置了合法的eventID
      statReachBottom: true // 使用分析-页面触底次数/人数，必须先开通自定义事件，并配置了合法的eventID
    });
    mta.Page.init();
  }
});

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

var MTA_CONFIG = { app_id: "", event_id: "", api_base: "https://pingtas.qq.com/pingd", prefix: "_mta_", version: "1.3.6", stat_share_app: !1, stat_pull_down_fresh: !1, stat_reach_bottom: !1 };function getNetworkType(a) {
  wx.getNetworkType({ success: function success(b) {
      a(b.networkType);
    } });
}function getSystemInfo() {
  var a = wx.getSystemInfoSync();return { adt: encodeURIComponent(a.model), scl: a.pixelRatio, scr: a.windowWidth + "x" + a.windowHeight, lg: a.language, fl: a.version, jv: encodeURIComponent(a.system), tz: encodeURIComponent(a.platform) };
}
function getUID() {
  try {
    return wx.getStorageSync(MTA_CONFIG.prefix + "auid");
  } catch (a) {}
}function setUID() {
  try {
    var a = getRandom();wx.setStorageSync(MTA_CONFIG.prefix + "auid", a);return a;
  } catch (b) {}
}function getSID() {
  try {
    return wx.getStorageSync(MTA_CONFIG.prefix + "ssid");
  } catch (a) {}
}function setSID() {
  try {
    var a = "s" + getRandom();wx.setStorageSync(MTA_CONFIG.prefix + "ssid", a);return a;
  } catch (b) {}
}
function getRandom(a) {
  for (var b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], c = 10; 1 < c; c--) {
    var d = Math.floor(10 * Math.random()),
        f = b[d];b[d] = b[c - 1];b[c - 1] = f;
  }for (c = d = 0; 5 > c; c++) {
    d = 10 * d + b[c];
  }return (a || "") + (d + "" + +new Date());
}function getPagePath() {
  try {
    var a = getCurrentPages(),
        b = "/";0 < a.length && (b = a.pop().__route__);return b;
  } catch (c) {
    console.log("get current page path error:" + c);
  }
}
function getMainInfo() {
  var a = { dm: "wechat.apps.xx", url: getPagePath(), pvi: "", si: "", ty: 0 };a.pvi = function () {
    var b = getUID();b || (b = setUID(), a.ty = 1);return b;
  }();a.si = function () {
    var a = getSID();a || (a = setSID());return a;
  }();return a;
}function getBasicInfo() {
  var a = getSystemInfo();getNetworkType(function (a) {
    try {
      wx.setStorageSync(MTA_CONFIG.prefix + "ntdata", a);
    } catch (c) {}
  });a.ct = wx.getStorageSync(MTA_CONFIG.prefix + "ntdata") || "4g";return a;
}
function getExtentInfo() {
  var a = MTA.Data.userInfo;var b = [],
      c;for (c in a) {
    a.hasOwnProperty(c) && b.push(c + "=" + a[c]);
  }a = b.join(";");return { r2: MTA_CONFIG.app_id, r4: "wx", ext: "v=" + MTA_CONFIG.version + (null !== a && "" !== a ? ";ui=" + encodeURIComponent(a) : "") };
}
var MTA = { App: { init: function init(a) {
      "appID" in a && (MTA_CONFIG.app_id = a.appID);"eventID" in a && (MTA_CONFIG.event_id = a.eventID);"statShareApp" in a && (MTA_CONFIG.stat_share_app = a.statShareApp);"statPullDownFresh" in a && (MTA_CONFIG.stat_pull_down_fresh = a.statPullDownFresh);"statReachBottom" in a && (MTA_CONFIG.stat_reach_bottom = a.statReachBottom);setSID();try {
        "lauchOpts" in a && (MTA.Data.lanchInfo = a.lauchOpts, MTA.Data.lanchInfo.landing = 1);
      } catch (b) {}
    } }, Page: { init: function init() {
      var a = getCurrentPages()[getCurrentPages().length - 1];a.onShow && !function () {
        var b = a.onShow;a.onShow = function () {
          MTA.Page.stat();b.call(this, arguments);
        };
      }();MTA_CONFIG.stat_pull_down_fresh && a.onPullDownRefresh && !function () {
        var b = a.onPullDownRefresh;a.onPullDownRefresh = function () {
          MTA.Event.stat(MTA_CONFIG.prefix + "pulldownfresh", { url: a.__route__ });b.call(this, arguments);
        };
      }();MTA_CONFIG.stat_reach_bottom && a.onReachBottom && !function () {
        var b = a.onReachBottom;a.onReachBottom = function () {
          MTA.Event.stat(MTA_CONFIG.prefix + "reachbottom", { url: a.__route__ });b.call(this, arguments);
        };
      }();MTA_CONFIG.stat_share_app && a.onShareAppMessage && !function () {
        var b = a.onShareAppMessage;a.onShareAppMessage = function () {
          MTA.Event.stat(MTA_CONFIG.prefix + "shareapp", { url: a.__route__ });return b.call(this, arguments);
        };
      }();
    }, multiStat: function multiStat(a, b) {
      if (1 == b) MTA.Page.stat(a), !0;else {
        var c = getCurrentPages()[getCurrentPages().length - 1];c.onShow && !function () {
          var b = c.onShow;c.onShow = function () {
            MTA.Page.stat(a);b.call(this, arguments);
          };
        }();
      }
    }, stat: function stat(a) {
      if ("" != MTA_CONFIG.app_id) {
        var b = [],
            c = getExtentInfo();
        a && (c.r2 = a);a = [getMainInfo(), c, getBasicInfo()];if (MTA.Data.lanchInfo) {
          a.push({ ht: MTA.Data.lanchInfo.scene, rdm: "/", rurl: MTA.Data.lanchInfo.path });MTA.Data.lanchInfo.query && MTA.Data.lanchInfo.query._mta_ref_id && a.push({ rarg: MTA.Data.lanchInfo.query._mta_ref_id });try {
            1 == MTA.Data.lanchInfo.landing && (c.ext += ";lp=1", MTA.Data.lanchInfo.landing = 0);
          } catch (e) {}
        }a.push({ rand: +new Date() });c = 0;for (var d = a.length; c < d; c++) {
          for (var f in a[c]) {
            a[c].hasOwnProperty(f) && b.push(f + "=" + ("undefined" == typeof a[c][f] ? "" : a[c][f]));
          }
        }wx.request({ url: MTA_CONFIG.api_base + "?" + b.join("&").toLowerCase() });
      }
    } }, Event: { stat: function stat(a, b) {
      if ("" != MTA_CONFIG.event_id) {
        var c = [],
            d = getMainInfo(),
            f = getExtentInfo();d.dm = "wxapps.click";d.url = a;f.r2 = MTA_CONFIG.event_id;var e = "undefined" === typeof b ? {} : b;var k = [],
            g;for (g in e) {
          e.hasOwnProperty(g) && k.push(encodeURIComponent(g) + "=" + encodeURIComponent(e[g]));
        }e = k.join(";");f.r5 = e;e = 0;d = [d, f, getBasicInfo(), { rand: +new Date() }];for (f = d.length; e < f; e++) {
          for (var h in d[e]) {
            d[e].hasOwnProperty(h) && c.push(h + "=" + ("undefined" == typeof d[e][h] ? "" : d[e][h]));
          }
        }wx.request({ url: MTA_CONFIG.api_base + "?" + c.join("&").toLowerCase() });
      }
    } }, Data: { userInfo: null, lanchInfo: null } };module.exports = MTA;

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "scorll_box"
  }, [_c('div', [_c('main-title', {
    attrs: {
      "thisPage": _vm.thisPage,
      "hideSearch": _vm.hideSearch,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "hideSearchBox": _vm.hideSearchBox,
      "toSearch": _vm.toSearch
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "contentBox"
  }, [(_vm.listShow) ? _c('div', {
    staticClass: "listBox",
    class: {
      listHide: _vm.listHide
    }
  }, _vm._l((_vm.dataList), function(x, key) {
    return _c('div', {
      key: key
    }, [_c('index-card', {
      attrs: {
        "animation": _vm.animation,
        "goods": x,
        "index": key,
        "leftNone": _vm.leftNone,
        "eventid": '1-' + key,
        "mpcomid": '1-' + key
      },
      on: {
        "toDetail": _vm.toDetail
      }
    })], 1)
  })) : _vm._e(), _vm._v(" "), (_vm.listHide) ? _c('div', {
    staticClass: "searchBox"
  }, [_c('search-box', {
    attrs: {
      "searchPage": _vm.thisPage,
      "searchNew": _vm.searchNew,
      "mpcomid": '2'
    }
  })], 1) : _vm._e()])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0ce52447", esExports)
  }
}

/***/ })

},[74]);
//# sourceMappingURL=main.js.map