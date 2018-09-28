global.webpackJsonp([2],{

/***/ 140:
/***/ (function(module, exports) {

/**
 * @file 百度移动统计配置文件
 */

module.exports = {
  /**
   * 从百度移动统计获取的AppKey
   * @type {string}
   */
  AppKey: 'd583d8564c',

  /**
   * 是否获取当前的地理位置、速度
   * @type {boolean}
   */
  getLocation: false
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(74);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/childIndex/main', 'pages/childIndex2/main', 'pages/explain/main', 'pages/player/main', 'pages/search/main'],
    plugins: {
      "myPlugin": {
        "version": "1.1.8",
        "provider": "wxa75efa648b60994b"
      }
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '大疆飞手百科',
      navigationBarTextStyle: 'black'
    }
  }
});

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(76);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(75)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e8e6004", Component.options)
  } else {
    hotAPI.reload("data-v-3e8e6004", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var mtjwxsdk = __webpack_require__(77);
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');
  }
});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_integer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_integer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_integer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_get_iterator__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_is_iterable__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_is_iterable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_is_iterable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_symbol_iterator__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_symbol_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_symbol_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_typeof__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_symbol__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_symbol__);











!function () {
  "use strict";
  var c = "1.4.3",
      a = { ns: null, boxjs: null },
      i = {},
      u = {},
      f = { logServerUrl: "https://hmma.baidu.com/mini.gif", maxRequestRetryCount: 5, requestRetryFirstDelay: 1e3, requestRetryMultiple: 4, maxRequestDataLength: 204800, maxUint8: 255, maxUint32: 4294967295, enabledEvents: { app: ["show", "hide", "error"], page: ["show", "hide", "ready"], share: ["action", "success", "fail"], event: "*" }, storageKeys: { appId: "mtj_appid", key: "mtj_key", uuid: "mtj_uuid", shareCount: "mtj_scnt" } },
      o = "function" == typeof __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_symbol___default.a && "symbol" == __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_typeof___default()(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_core_js_symbol_iterator___default.a) ? function (e) {
    return typeof e === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_typeof___default()(e);
  } : function (e) {
    return e && "function" == typeof __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_symbol___default.a && e.constructor === __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_symbol___default.a && e !== __WEBPACK_IMPORTED_MODULE_10_babel_runtime_core_js_symbol___default.a.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_typeof___default()(e);
  },
      l = function l(e, t) {
    if (Array.isArray(e)) return e;if (__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_is_iterable___default()(Object(e))) return function (e, t) {
      var n = [],
          r = !0,
          a = !1,
          o = void 0;try {
        for (var s, c = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_get_iterator___default()(e); !(r = (s = c.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0) {}
      } catch (e) {
        a = !0, o = e;
      } finally {
        try {
          !r && c.return && c.return();
        } finally {
          if (a) throw o;
        }
      }return n;
    }(e, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
  },
      r = function r() {
    return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * f.maxUint32);
  },
      s = function s(e, t) {
    return "[object " + t + "]" === {}.toString.call(e);
  },
      h = function n(r) {
    return (s(r, "Object") || s(r, "Array")) && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(r).forEach(function (e) {
      var t = r[e];s(t, "Object") || s(t, "Array") ? r[e] = n(t) : r[e] = "" + t;
    }), r;
  },
      p = new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set___default.a(),
      d = [],
      n = 0,
      t = function t(e) {
    if (e.data = e.data || {}, e.data.v = c, e.data.rqc = ++n, t = e.data, !(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(t).length <= f.maxRequestDataLength)) return n--, void (e.fail && e.fail(new Error("invalid data")));var t;!function t(n) {
      var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f.requestRetryFirstDelay;return a.ns.request({ url: n.url, data: n.data, header: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ "content-type": "application/json" }, n.header), method: n.method || "POST", dataType: n.dataType || "json", success: function success(e) {
          delete n.data.rtc, n.success && n.success(e);
        }, fail: function fail(e) {
          n.data.rtc = (n.data.rtc || 0) + 1, n.data.rtc <= f.maxRequestRetryCount ? setTimeout(function () {
            return t(n, r * f.requestRetryMultiple);
          }, r) : (delete n.data.rtc, n.fail && n.fail(e));
        } });
    }(e);
  },
      y = function y() {
    return p.has("app.launch") && p.has("app.show");
  },
      g = function g() {
    d.forEach(function (e) {
      e.data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, i, e.data), "show" !== e.data.en && "share" !== e.data.et && "event" !== e.data.et || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(e.data, u), t(e);
    }), d.length = 0;
  },
      m = { sendRequest: t, trackEvent: function trackEvent(e) {
      var t = this;if (p.add(e.et + "." + e.en), "app" === e.et && "launch" === e.en && y() && g(), "*" === f.enabledEvents[e.et] || -1 !== f.enabledEvents[e.et].indexOf(e.en)) {
        e.rid = r(), e.aso = e.aso || {};var n = { url: f.logServerUrl, dataType: "string", data: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, i, e), fail: function fail(e) {
            return t.trackError("sendRequest", e);
          } };y() ? (this.sendRequest(n), "app" === e.et && "show" === e.en && g()) : (i.path && (n.data.path = i.path), i.query && (n.data.query = i.query), "app" === e.et && "show" === e.en ? d.unshift(n) : d.push(n));
      }
    }, trackError: function trackError(e, t) {
      var n = s(t, "Object") ? __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(h(t)) : "" + t;this.sendRequest({ url: f.logServerUrl, dataType: "string", data: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, i, { et: "error", en: e, ep: { ex: n }, rid: r() }) });
    }, clearTrackedEvents: function clearTrackedEvents() {
      p.clear();
    }, ubcLog: function ubcLog(e) {
      a.boxjs.boxjs.log({ name: "ubcFlowJar", data: [e] });
    } },
      v = function v(e) {
    try {
      return a.ns.getStorageSync(e);
    } catch (e) {
      m.trackError("getStorageSync", e);
    }
  },
      S = function S(e, t) {
    try {
      a.ns.setStorageSync(e, t);
    } catch (e) {
      m.trackError("setStorageSync", e);
    }
  },
      b = function b() {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve().then(function () {
      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (e, t) {
        var n = v(f.storageKeys.uuid);if (s(n, "String") && 32 === n.length) return e(n);n = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function (e) {
          return (e ^ ("undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.floor(Math.random() * f.maxUint8)) & 15 >> e / 4).toString(16);
        }), S(f.storageKeys.uuid, n), e(n);
      });
    });
  },
      k = function k(n) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve().then(function () {
      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (t, e) {
        if (!n) return t();try {
          a.ns.getShareInfo({ shareTicket: n, success: function success(e) {
              delete e.errMsg, t(e);
            }, fail: function fail(e) {
              t({});
            } });
        } catch (e) {
          m.trackError("getShareInfo", e), t({});
        }
      });
    });
  },
      w = { onLaunch: function onLaunch() {
      var e = __webpack_require__(140);return e.appKey ? (i.key = e.appKey, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all([b(), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve().then(function () {
        return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (t, e) {
          try {
            a.ns.getSetting({ success: function success(e) {
                e.authSetting && e.authSetting["scope.userInfo"] ? a.ns.checkSession({ success: function success(e) {
                    e && !1 === e.result ? t({}) : a.ns.getUserInfo({ success: function success(e) {
                        delete e.userInfo.errMsg, t(e.userInfo);
                      }, fail: function fail() {
                        t({});
                      } });
                  }, fail: function fail() {
                    t({});
                  } }) : t({});
              }, fail: function fail() {
                t({});
              } });
          } catch (e) {
            m.trackError("getUserInfo", e), t({});
          }
        });
      }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve().then(function () {
        return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (t, e) {
          try {
            a.ns.getSystemInfo({ success: function success(e) {
                delete e.errMsg, t(e);
              }, fail: function fail(e) {
                t({});
              } });
          } catch (e) {
            m.trackError("getSystemInfo", e), t({});
          }
        });
      }), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve().then(function () {
        return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (t, e) {
          try {
            a.ns.getNetworkType({ success: function success(e) {
                delete e.errMsg, t(e);
              }, fail: function fail(e) {
                t({});
              } });
          } catch (e) {
            m.trackError("getNetworkType", e), t({});
          }
        });
      }), e.getLocation ? __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve().then(function () {
        return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (t, e) {
          try {
            a.ns.getLocation({ type: "wgs84", success: function success(e) {
                delete e.errMsg, t(e);
              }, fail: function fail(e) {
                t({});
              } });
          } catch (e) {
            m.trackError("getLocation", e), t({});
          }
        });
      }) : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve()]).then(function (e) {
        var t = l(e, 5),
            n = t[0],
            r = t[1],
            a = t[2],
            o = t[3],
            s = t[4];i.uuid = n, u.user = h(r), u.system = h(a), u.network = h(o), s && (u.location = h(s)), "devtools" === a.platform && f.latestVersion && function (e, t) {
          for (var n = e.split("."), r = t.split("."), a = 0; a < 3; a++) {
            var o = +n[a] || 0,
                s = +r[a] || 0;if (s < o) return 1;if (o < s) return -1;
          }return 0;
        }(c, f.latestVersion) < 0 && console.warn("百度移动统计微信小程序SDK已更新，为不影响您的正常使用，请到SDK下载中心（https://mtj.baidu.com/web/sdk/index）下载最新版本"), m.trackEvent({ et: "app", en: "launch" });
      }).catch(function (e) {
        return m.trackError("app onLaunch", e);
      })) : (console.error("请设置mtj-wx-sdk.config.js文件中的appKey字段"), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve());
    }, onShow: function onShow() {
      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return u.aso = u.aso || {}, (s(i.sid, "Undefined") || t.scene && u.aso.scene !== "" + t.scene) && (i.sid = r(), i.rqc = 0), u.aso.scene = "" + (t.scene || ""), t.referrerInfo && t.referrerInfo.appId ? u.aso.referrerInfo = t.referrerInfo : delete u.aso.referrerInfo, i.path = u.aso.path = t.path || "", i.query = u.aso.query = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(t.query || {}).map(function (e) {
        return { key: e, value: t.query[e] };
      }), k(t.shareTicket).then(function (e) {
        e ? u.aso.shareInfo = e : delete u.aso.shareInfo, m.trackEvent(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "app", en: "show" }, u));
      });
    }, onHide: function onHide() {
      m.trackEvent({ et: "app", en: "hide" });
    }, onError: function onError(e) {
      var t = s(e, "Object") ? __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(h(e)) : "" + e;m.trackEvent({ et: "app", en: "error", ep: { ex: t } });
    } },
      E = function E(e, t) {
    m.trackEvent({ et: "page", en: e, ep: t });
  },
      j = { onLoad: function onLoad() {
      E("load");
    }, onShow: function onShow() {
      var e = getCurrentPages(),
          t = e[e.length - 1];i.path = t.route, i.query = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(t.options).map(function (e) {
        return { key: e, value: t.options[e] };
      }), m.trackEvent(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "page", en: "show" }, u));
    }, onReady: function onReady() {
      E("ready");
    }, onHide: function onHide() {
      E("hide");
    }, onUnload: function onUnload() {
      E("unload");
    }, onPullDownRefresh: function onPullDownRefresh() {
      E("pullDownRefresh");
    }, onReachBottom: function onReachBottom() {
      E("reachBottom");
    }, onPageScroll: function onPageScroll() {
      E("pageScroll");
    }, onTabItemTap: function onTabItemTap(e) {
      E("tabItemTap", e);
    }, onShareAppMessage: function onShareAppMessage(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = v(f.storageKeys.shareCount);n = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_integer___default()(n) ? n : 0) + 1, S(f.storageKeys.shareCount, n);var r = { cnt: n, from: e.from, path: t.path || "" };t.title && (r.title = "" + t.title), e.target && (r.target = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(e.target)), m.trackEvent(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "share", en: "action", ep: r }, u));var a = t.success;t.success = function (e) {
        j.shareSuccess(e), a && a(e);
      };var o = t.fail;return t.fail = function (e) {
        j.shareFail(e), o && o(e);
      }, t;
    }, shareSuccess: function shareSuccess() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = [].concat(e.shareTickets);__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all(t.map(function (e) {
        return k(e);
      })).then(function (e) {
        e && e[0] || (e = []), m.trackEvent({ et: "share", en: "success", ep: { shareInfo: e } });
      });
    }, shareFail: function shareFail(e) {
      m.trackEvent({ et: "share", en: "fail", ep: { ex: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(e) } });
    } },
      O = function O(e) {
    if (t = e.reportName, s(t, "String") && /^[a-z][a-z0-9_]{0,31}$/.test(t)) {
      var t,
          r = e.reportParams || {},
          n = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(r).filter(function (e) {
        return s(n = e, "String") && /^[a-z0-9_]{1,32}$/.test(n) && (t = r[e], s(t, "String") || s(t, "Number"));var t, n;
      }).map(function (e) {
        return { key: "" + e, value: "" + r[e], type: o(r[e]) };
      });m.trackEvent(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "event", en: "" + e.reportName, ep: { data: n } }, u));
    }
  },
      q = function q(e, t, n) {
    var r = t[e];t[e] = function (e) {
      n.call(this, e), r && r.call(this, e);
    };
  };!function () {
    i.type = 1, a.ns = wx;var e = App;App = function App(t) {
      ["onLaunch", "onShow", "onHide", "onError"].forEach(function (e) {
        q(e, t, w[e]);
      }), t.mtj = { trackEvent: function trackEvent(e, t) {
          O({ reportName: e, reportParams: t });
        } }, e(t);
    };var t = Page;Page = function Page(o) {
      ["onLoad", "onShow", "onHide", "onReady"].forEach(function (e) {
        q(e, o, j[e]);
      }), ["onShareAppMessage"].forEach(function (e) {
        var t, n, r, a;n = o, r = j[t = e], a = n[t], n[t] = function (e) {
          var t = a && a.call(this, e);return r.call(this, e, t);
        };
      }), t(o);
    };
  }();
}();

/***/ })

},[72]);
//# sourceMappingURL=app.js.map