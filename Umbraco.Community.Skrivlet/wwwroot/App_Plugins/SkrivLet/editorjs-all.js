(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/editorjs-drag-drop/dist/bundle.js
  var require_bundle = __commonJS({
    "node_modules/editorjs-drag-drop/dist/bundle.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.DragDrop = t() : e.DragDrop = t();
      }(self, () => (() => {
        "use strict";
        var e = { 523: (e2, t2, r3) => {
          r3.d(t2, { A: () => c2 });
          var n2 = r3(601), o4 = r3.n(n2), i = r3(314), a4 = r3.n(i)()(o4());
          a4.push([e2.id, '.ce-block--drop-target .ce-block__content:before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: -20px;\n  margin-top: -1px;\n  height: 8px;\n  width: 8px;\n  border: solid #a0a0a0;\n  border-width: 1px 1px 0 0;\n  -webkit-transform-origin: right;\n  transform-origin: right;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.ce-block--drop-target .ce-block__content:after {\n  background: none;\n}\n', ""]);
          const c2 = a4;
        }, 314: (e2) => {
          e2.exports = function(e3) {
            var t2 = [];
            return t2.toString = function() {
              return this.map(function(t3) {
                var r3 = "", n2 = void 0 !== t3[5];
                return t3[4] && (r3 += "@supports (".concat(t3[4], ") {")), t3[2] && (r3 += "@media ".concat(t3[2], " {")), n2 && (r3 += "@layer".concat(t3[5].length > 0 ? " ".concat(t3[5]) : "", " {")), r3 += e3(t3), n2 && (r3 += "}"), t3[2] && (r3 += "}"), t3[4] && (r3 += "}"), r3;
              }).join("");
            }, t2.i = function(e4, r3, n2, o4, i) {
              "string" == typeof e4 && (e4 = [[null, e4, void 0]]);
              var a4 = {};
              if (n2) for (var c2 = 0; c2 < this.length; c2++) {
                var s2 = this[c2][0];
                null != s2 && (a4[s2] = true);
              }
              for (var l3 = 0; l3 < e4.length; l3++) {
                var u2 = [].concat(e4[l3]);
                n2 && a4[u2[0]] || (void 0 !== i && (void 0 === u2[5] || (u2[1] = "@layer".concat(u2[5].length > 0 ? " ".concat(u2[5]) : "", " {").concat(u2[1], "}")), u2[5] = i), r3 && (u2[2] ? (u2[1] = "@media ".concat(u2[2], " {").concat(u2[1], "}"), u2[2] = r3) : u2[2] = r3), o4 && (u2[4] ? (u2[1] = "@supports (".concat(u2[4], ") {").concat(u2[1], "}"), u2[4] = o4) : u2[4] = "".concat(o4)), t2.push(u2));
              }
            }, t2;
          };
        }, 601: (e2) => {
          e2.exports = function(e3) {
            return e3[1];
          };
        }, 72: (e2) => {
          var t2 = [];
          function r3(e3) {
            for (var r4 = -1, n3 = 0; n3 < t2.length; n3++) if (t2[n3].identifier === e3) {
              r4 = n3;
              break;
            }
            return r4;
          }
          function n2(e3, n3) {
            for (var i = {}, a4 = [], c2 = 0; c2 < e3.length; c2++) {
              var s2 = e3[c2], l3 = n3.base ? s2[0] + n3.base : s2[0], u2 = i[l3] || 0, d6 = "".concat(l3, " ").concat(u2);
              i[l3] = u2 + 1;
              var f2 = r3(d6), p4 = { css: s2[1], media: s2[2], sourceMap: s2[3], supports: s2[4], layer: s2[5] };
              if (-1 !== f2) t2[f2].references++, t2[f2].updater(p4);
              else {
                var v3 = o4(p4, n3);
                n3.byIndex = c2, t2.splice(c2, 0, { identifier: d6, updater: v3, references: 1 });
              }
              a4.push(d6);
            }
            return a4;
          }
          function o4(e3, t3) {
            var r4 = t3.domAPI(t3);
            return r4.update(e3), function(t4) {
              if (t4) {
                if (t4.css === e3.css && t4.media === e3.media && t4.sourceMap === e3.sourceMap && t4.supports === e3.supports && t4.layer === e3.layer) return;
                r4.update(e3 = t4);
              } else r4.remove();
            };
          }
          e2.exports = function(e3, o5) {
            var i = n2(e3 = e3 || [], o5 = o5 || {});
            return function(e4) {
              e4 = e4 || [];
              for (var a4 = 0; a4 < i.length; a4++) {
                var c2 = r3(i[a4]);
                t2[c2].references--;
              }
              for (var s2 = n2(e4, o5), l3 = 0; l3 < i.length; l3++) {
                var u2 = r3(i[l3]);
                0 === t2[u2].references && (t2[u2].updater(), t2.splice(u2, 1));
              }
              i = s2;
            };
          };
        }, 659: (e2) => {
          var t2 = {};
          e2.exports = function(e3, r3) {
            var n2 = function(e4) {
              if (void 0 === t2[e4]) {
                var r4 = document.querySelector(e4);
                if (window.HTMLIFrameElement && r4 instanceof window.HTMLIFrameElement) try {
                  r4 = r4.contentDocument.head;
                } catch (e5) {
                  r4 = null;
                }
                t2[e4] = r4;
              }
              return t2[e4];
            }(e3);
            if (!n2) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            n2.appendChild(r3);
          };
        }, 540: (e2) => {
          e2.exports = function(e3) {
            var t2 = document.createElement("style");
            return e3.setAttributes(t2, e3.attributes), e3.insert(t2, e3.options), t2;
          };
        }, 56: (e2, t2, r3) => {
          e2.exports = function(e3) {
            var t3 = r3.nc;
            t3 && e3.setAttribute("nonce", t3);
          };
        }, 825: (e2) => {
          e2.exports = function(e3) {
            if ("undefined" == typeof document) return { update: function() {
            }, remove: function() {
            } };
            var t2 = e3.insertStyleElement(e3);
            return { update: function(r3) {
              !function(e4, t3, r4) {
                var n2 = "";
                r4.supports && (n2 += "@supports (".concat(r4.supports, ") {")), r4.media && (n2 += "@media ".concat(r4.media, " {"));
                var o4 = void 0 !== r4.layer;
                o4 && (n2 += "@layer".concat(r4.layer.length > 0 ? " ".concat(r4.layer) : "", " {")), n2 += r4.css, o4 && (n2 += "}"), r4.media && (n2 += "}"), r4.supports && (n2 += "}");
                var i = r4.sourceMap;
                i && "undefined" != typeof btoa && (n2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t3.styleTagTransform(n2, e4, t3.options);
              }(t2, e3, r3);
            }, remove: function() {
              !function(e4) {
                if (null === e4.parentNode) return false;
                e4.parentNode.removeChild(e4);
              }(t2);
            } };
          };
        }, 113: (e2) => {
          e2.exports = function(e3, t2) {
            if (t2.styleSheet) t2.styleSheet.cssText = e3;
            else {
              for (; t2.firstChild; ) t2.removeChild(t2.firstChild);
              t2.appendChild(document.createTextNode(e3));
            }
          };
        } }, t = {};
        function r2(n2) {
          var o4 = t[n2];
          if (void 0 !== o4) return o4.exports;
          var i = t[n2] = { id: n2, exports: {} };
          return e[n2](i, i.exports, r2), i.exports;
        }
        r2.n = (e2) => {
          var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
          return r2.d(t2, { a: t2 }), t2;
        }, r2.d = (e2, t2) => {
          for (var n2 in t2) r2.o(t2, n2) && !r2.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
        }, r2.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r2.nc = void 0;
        var n = {};
        return (() => {
          r2.d(n, { default: () => g5 });
          var e2 = r2(72), t2 = r2.n(e2), o4 = r2(825), i = r2.n(o4), a4 = r2(659), c2 = r2.n(a4), s2 = r2(56), l3 = r2.n(s2), u2 = r2(540), d6 = r2.n(u2), f2 = r2(113), p4 = r2.n(f2), v3 = r2(523), y3 = {};
          function h4(e3) {
            return h4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, h4(e3);
          }
          function b3(e3, t3) {
            for (var r3 = 0; r3 < t3.length; r3++) {
              var n2 = t3[r3];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, m4(n2.key), n2);
            }
          }
          function m4(e3) {
            var t3 = function(e4, t4) {
              if ("object" != h4(e4) || !e4) return e4;
              var r3 = e4[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var n2 = r3.call(e4, "string");
                if ("object" != h4(n2)) return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            }(e3);
            return "symbol" == h4(t3) ? t3 : t3 + "";
          }
          y3.styleTagTransform = p4(), y3.setAttributes = l3(), y3.insert = c2().bind(null, "head"), y3.domAPI = i(), y3.insertStyleElement = d6(), t2()(v3.A, y3), v3.A && v3.A.locals && v3.A.locals;
          var g5 = function() {
            return e3 = function e4(t4, r4) {
              var n2 = t4.configuration, o5 = t4.blocks, i2 = t4.toolbar, a5 = t4.save;
              !function(e5, t5) {
                if (!(e5 instanceof t5)) throw new TypeError("Cannot call a class as a function");
              }(this, e4), this.toolbar = i2, this.borderStyle = r4 || "1px dashed #aaa", this.api = o5, this.holder = "string" == typeof n2.holder ? document.getElementById(n2.holder) : n2.holder, this.readOnly = n2.readOnly, this.startBlock = null, this.endBlock = null, this.save = a5, this.setDragListener(), this.setDropListener();
            }, r3 = [{ key: "isReadOnlySupported", get: function() {
              return true;
            } }], (t3 = [{ key: "setElementCursor", value: function(e4) {
              if (e4) {
                var t4 = document.createRange(), r4 = window.getSelection();
                t4.setStart(e4.childNodes[0], 0), t4.collapse(true), r4.removeAllRanges(), r4.addRange(t4), e4.focus();
              }
            } }, { key: "setDragListener", value: function() {
              var e4 = this;
              if (!this.readOnly) {
                var t4 = this.holder.querySelector(".ce-toolbar__settings-btn");
                if (t4) this.initializeDragListener(t4);
                else {
                  var r4 = new MutationObserver(function(t5, r5) {
                    var n2 = e4.holder.querySelector(".ce-toolbar__settings-btn");
                    n2 && (e4.initializeDragListener(n2), r5.disconnect());
                  });
                  r4.observe(this.holder, { childList: true, subtree: true });
                }
              }
            } }, { key: "initializeDragListener", value: function(e4) {
              var t4 = this;
              e4.setAttribute("draggable", "true"), e4.addEventListener("dragstart", function() {
                t4.startBlock = t4.api.getCurrentBlockIndex();
              }), e4.addEventListener("drag", function() {
                if (t4.toolbar.close(), !t4.isTheOnlyBlock()) {
                  var e5 = t4.holder.querySelectorAll(".ce-block"), r4 = t4.holder.querySelector(".ce-block--drop-target");
                  t4.setElementCursor(r4), t4.setBorderBlocks(e5, r4);
                }
              });
            } }, { key: "setBorderBlocks", value: function(e4, t4) {
              var r4 = this;
              Object.values(e4).forEach(function(n2) {
                var o5 = n2.querySelector(".ce-block__content");
                n2 !== t4 ? (o5.style.removeProperty("border-top"), o5.style.removeProperty("border-bottom")) : Object.keys(e4).find(function(r5) {
                  return e4[r5] === t4;
                }) > r4.startBlock ? o5.style.borderBottom = r4.borderStyle : o5.style.borderTop = r4.borderStyle;
              });
            } }, { key: "setDropListener", value: function() {
              var e4 = this;
              document.addEventListener("drop", function(t4) {
                var r4 = t4.target;
                if (e4.holder.contains(r4) && null !== e4.startBlock) {
                  var n2 = e4.getDropTarget(r4);
                  if (n2) {
                    var o5 = n2.querySelector(".ce-block__content");
                    o5.style.removeProperty("border-top"), o5.style.removeProperty("border-bottom"), e4.endBlock = e4.getTargetPosition(n2), e4.moveBlocks();
                  }
                }
                e4.startBlock = null;
              });
            } }, { key: "getDropTarget", value: function(e4) {
              return e4.classList.contains("ce-block") ? e4 : e4.closest(".ce-block");
            } }, { key: "getTargetPosition", value: function(e4) {
              return Array.from(e4.parentNode.children).indexOf(e4);
            } }, { key: "isTheOnlyBlock", value: function() {
              return 1 === this.api.getBlocksCount();
            } }, { key: "moveBlocks", value: function() {
              this.isTheOnlyBlock() || this.api.move(this.endBlock, this.startBlock);
            } }]) && b3(e3.prototype, t3), r3 && b3(e3, r3), Object.defineProperty(e3, "prototype", { writable: false }), e3;
            var e3, t3, r3;
          }();
        })(), n.default;
      })());
    }
  });

  // node_modules/@editorjs/editorjs/dist/editorjs.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")), document.head.appendChild(e);
      }
    } catch (t) {
      console.error("vite-plugin-css-injected-by-js", t);
    }
  })();
  var ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Fe(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
  }
  function ze() {
  }
  Object.assign(ze, {
    default: ze,
    register: ze,
    revert: function() {
    },
    __esModule: true
  });
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(n) {
    const e = (this.document || this.ownerDocument).querySelectorAll(n);
    let t = e.length;
    for (; --t >= 0 && e.item(t) !== this; )
      ;
    return t > -1;
  });
  Element.prototype.closest || (Element.prototype.closest = function(n) {
    let e = this;
    if (!document.documentElement.contains(e))
      return null;
    do {
      if (e.matches(n))
        return e;
      e = e.parentElement || e.parentNode;
    } while (e !== null);
    return null;
  });
  Element.prototype.prepend || (Element.prototype.prepend = function(e) {
    const t = document.createDocumentFragment();
    Array.isArray(e) || (e = [e]), e.forEach((o4) => {
      const i = o4 instanceof Node;
      t.appendChild(i ? o4 : document.createTextNode(o4));
    }), this.insertBefore(t, this.firstChild);
  });
  Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(n) {
    n = arguments.length === 0 ? true : !!n;
    const e = this.parentNode, t = window.getComputedStyle(e, null), o4 = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), s2 = this.offsetTop - e.offsetTop < e.scrollTop, r2 = this.offsetTop - e.offsetTop + this.clientHeight - o4 > e.scrollTop + e.clientHeight, l3 = this.offsetLeft - e.offsetLeft < e.scrollLeft, a4 = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, c2 = s2 && !r2;
    (s2 || r2) && n && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o4 + this.clientHeight / 2), (l3 || a4) && n && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (s2 || r2 || l3 || a4) && !n && this.scrollIntoView(c2);
  });
  window.requestIdleCallback = window.requestIdleCallback || function(n) {
    const e = Date.now();
    return setTimeout(function() {
      n({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - e));
        }
      });
    }, 1);
  };
  window.cancelIdleCallback = window.cancelIdleCallback || function(n) {
    clearTimeout(n);
  };
  var vo = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
  var It = /* @__PURE__ */ ((n) => (n.VERBOSE = "VERBOSE", n.INFO = "INFO", n.WARN = "WARN", n.ERROR = "ERROR", n))(It || {});
  var w = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  };
  var wo = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
  function Be(n, e, t = "log", o4, i = "color: inherit") {
    if (!("console" in window) || !window.console[t])
      return;
    const s2 = ["info", "log", "warn", "error"].includes(t), r2 = [];
    switch (Be.logLevel) {
      case "ERROR":
        if (t !== "error")
          return;
        break;
      case "WARN":
        if (!["error", "warn"].includes(t))
          return;
        break;
      case "INFO":
        if (!s2 || n)
          return;
        break;
    }
    o4 && r2.push(o4);
    const l3 = "Editor.js 2.30.6", a4 = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
    n && (s2 ? (r2.unshift(a4, i), e = `%c${l3}%c ${e}`) : e = `( ${l3} )${e}`);
    try {
      s2 ? o4 ? console[t](`${e} %o`, ...r2) : console[t](e, ...r2) : console[t](e);
    } catch {
    }
  }
  Be.logLevel = "VERBOSE";
  function xo(n) {
    Be.logLevel = n;
  }
  var I = Be.bind(window, false);
  var X = Be.bind(window, true);
  function re(n) {
    return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  function O(n) {
    return re(n) === "function" || re(n) === "asyncfunction";
  }
  function R(n) {
    return re(n) === "object";
  }
  function Q(n) {
    return re(n) === "string";
  }
  function yo(n) {
    return re(n) === "boolean";
  }
  function bt(n) {
    return re(n) === "number";
  }
  function kt(n) {
    return re(n) === "undefined";
  }
  function V(n) {
    return n ? Object.keys(n).length === 0 && n.constructor === Object : true;
  }
  function Mt(n) {
    return n > 47 && n < 58 || // number keys
    n === 32 || n === 13 || // Space bar & return key(s)
    n === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
    n > 64 && n < 91 || // letter keys
    n > 95 && n < 112 || // Numpad keys
    n > 185 && n < 193 || // ;=,-./` (in order)
    n > 218 && n < 223;
  }
  async function Eo(n, e = () => {
  }, t = () => {
  }) {
    async function o4(i, s2, r2) {
      try {
        await i.function(i.data), await s2(kt(i.data) ? {} : i.data);
      } catch {
        r2(kt(i.data) ? {} : i.data);
      }
    }
    return n.reduce(async (i, s2) => (await i, o4(s2, e, t)), Promise.resolve());
  }
  function At(n) {
    return Array.prototype.slice.call(n);
  }
  function Oe(n, e) {
    return function() {
      const t = this, o4 = arguments;
      window.setTimeout(() => n.apply(t, o4), e);
    };
  }
  function Bo(n) {
    return n.name.split(".").pop();
  }
  function To(n) {
    return /^[-\w]+\/([-+\w]+|\*)$/.test(n);
  }
  function vt(n, e, t) {
    let o4;
    return (...i) => {
      const s2 = this, r2 = () => {
        o4 = null, t || n.apply(s2, i);
      }, l3 = t && !o4;
      window.clearTimeout(o4), o4 = window.setTimeout(r2, e), l3 && n.apply(s2, i);
    };
  }
  function Ve(n, e, t = void 0) {
    let o4, i, s2, r2 = null, l3 = 0;
    t || (t = {});
    const a4 = function() {
      l3 = t.leading === false ? 0 : Date.now(), r2 = null, s2 = n.apply(o4, i), r2 || (o4 = i = null);
    };
    return function() {
      const c2 = Date.now();
      !l3 && t.leading === false && (l3 = c2);
      const u2 = e - (c2 - l3);
      return o4 = this, i = arguments, u2 <= 0 || u2 > e ? (r2 && (clearTimeout(r2), r2 = null), l3 = c2, s2 = n.apply(o4, i), r2 || (o4 = i = null)) : !r2 && t.trailing !== false && (r2 = setTimeout(a4, u2)), s2;
    };
  }
  function Co() {
    const n = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    }, e = Object.keys(n).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
    return e && (n[e] = true), n;
  }
  function Le(n) {
    return n[0].toUpperCase() + n.slice(1);
  }
  function qe(n, ...e) {
    if (!e.length)
      return n;
    const t = e.shift();
    if (R(n) && R(t))
      for (const o4 in t)
        R(t[o4]) ? (n[o4] || Object.assign(n, { [o4]: {} }), qe(n[o4], t[o4])) : Object.assign(n, { [o4]: t[o4] });
    return qe(n, ...e);
  }
  function tt(n) {
    const e = Co();
    return n = n.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), e.mac ? n = n.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
  }
  function So(n) {
    try {
      return new URL(n).href;
    } catch {
    }
    return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
  }
  function Io() {
    return vo(10);
  }
  function Mo(n) {
    window.open(n, "_blank");
  }
  function Ao(n = "") {
    return `${n}${Math.floor(Math.random() * 1e8).toString(16)}`;
  }
  function Ze(n, e, t) {
    const o4 = `\xAB${e}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${t}\xBB instead.`;
    n && X(o4, "warn");
  }
  function ue(n, e, t) {
    const o4 = t.value ? "value" : "get", i = t[o4], s2 = `#${e}Cache`;
    if (t[o4] = function(...r2) {
      return this[s2] === void 0 && (this[s2] = i.apply(this, ...r2)), this[s2];
    }, o4 === "get" && t.set) {
      const r2 = t.set;
      t.set = function(l3) {
        delete n[s2], r2.apply(this, l3);
      };
    }
    return t;
  }
  var Ot = 650;
  function pe() {
    return window.matchMedia(`(max-width: ${Ot}px)`).matches;
  }
  var Ge = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  function Oo(n, e) {
    const t = Array.isArray(n) || R(n), o4 = Array.isArray(e) || R(e);
    return t || o4 ? JSON.stringify(n) === JSON.stringify(e) : n === e;
  }
  var d = class _d {
    /**
     * Check if passed tag has no closed tag
     *
     * @param {HTMLElement} tag - element to check
     * @returns {boolean}
     */
    static isSingleTag(e) {
      return e.tagName && [
        "AREA",
        "BASE",
        "BR",
        "COL",
        "COMMAND",
        "EMBED",
        "HR",
        "IMG",
        "INPUT",
        "KEYGEN",
        "LINK",
        "META",
        "PARAM",
        "SOURCE",
        "TRACK",
        "WBR"
      ].includes(e.tagName);
    }
    /**
     * Check if element is BR or WBR
     *
     * @param {HTMLElement} element - element to check
     * @returns {boolean}
     */
    static isLineBreakTag(e) {
      return e && e.tagName && [
        "BR",
        "WBR"
      ].includes(e.tagName);
    }
    /**
     * Helper for making Elements with class name and attributes
     *
     * @param  {string} tagName - new Element tag name
     * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
     * @param  {object} [attributes] - any attributes
     * @returns {HTMLElement}
     */
    static make(e, t = null, o4 = {}) {
      const i = document.createElement(e);
      if (Array.isArray(t)) {
        const s2 = t.filter((r2) => r2 !== void 0);
        i.classList.add(...s2);
      } else
        t && i.classList.add(t);
      for (const s2 in o4)
        Object.prototype.hasOwnProperty.call(o4, s2) && (i[s2] = o4[s2]);
      return i;
    }
    /**
     * Creates Text Node with the passed content
     *
     * @param {string} content - text content
     * @returns {Text}
     */
    static text(e) {
      return document.createTextNode(e);
    }
    /**
     * Append one or several elements to the parent
     *
     * @param  {Element|DocumentFragment} parent - where to append
     * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
     */
    static append(e, t) {
      Array.isArray(t) ? t.forEach((o4) => e.appendChild(o4)) : e.appendChild(t);
    }
    /**
     * Append element or a couple to the beginning of the parent elements
     *
     * @param {Element} parent - where to append
     * @param {Element|Element[]} elements - element or elements list
     */
    static prepend(e, t) {
      Array.isArray(t) ? (t = t.reverse(), t.forEach((o4) => e.prepend(o4))) : e.prepend(t);
    }
    /**
     * Swap two elements in parent
     *
     * @param {HTMLElement} el1 - from
     * @param {HTMLElement} el2 - to
     * @deprecated
     */
    static swap(e, t) {
      const o4 = document.createElement("div"), i = e.parentNode;
      i.insertBefore(o4, e), i.insertBefore(e, t), i.insertBefore(t, o4), i.removeChild(o4);
    }
    /**
     * Selector Decorator
     *
     * Returns first match
     *
     * @param {Element} el - element we searching inside. Default - DOM Document
     * @param {string} selector - searching string
     * @returns {Element}
     */
    static find(e = document, t) {
      return e.querySelector(t);
    }
    /**
     * Get Element by Id
     *
     * @param {string} id - id to find
     * @returns {HTMLElement | null}
     */
    static get(e) {
      return document.getElementById(e);
    }
    /**
     * Selector Decorator.
     *
     * Returns all matches
     *
     * @param {Element|Document} el - element we searching inside. Default - DOM Document
     * @param {string} selector - searching string
     * @returns {NodeList}
     */
    static findAll(e = document, t) {
      return e.querySelectorAll(t);
    }
    /**
     * Returns CSS selector for all text inputs
     */
    static get allInputsSelector() {
      return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((t) => `input[type="${t}"]`).join(", ");
    }
    /**
     * Find all contenteditable, textarea and editable input elements passed holder contains
     *
     * @param holder - element where to find inputs
     */
    static findAllInputs(e) {
      return At(e.querySelectorAll(_d.allInputsSelector)).reduce((t, o4) => _d.isNativeInput(o4) || _d.containsOnlyInlineElements(o4) ? [...t, o4] : [...t, ..._d.getDeepestBlockElements(o4)], []);
    }
    /**
     * Search for deepest node which is Leaf.
     * Leaf is the vertex that doesn't have any child nodes
     *
     * @description Method recursively goes throw the all Node until it finds the Leaf
     * @param {Node} node - root Node. From this vertex we start Deep-first search
     *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
     * @param {boolean} [atLast] - find last text node
     * @returns - it can be text Node or Element Node, so that caret will able to work with it
     *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
     */
    static getDeepestNode(e, t = false) {
      const o4 = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
      if (e && e.nodeType === Node.ELEMENT_NODE && e[o4]) {
        let s2 = e[o4];
        if (_d.isSingleTag(s2) && !_d.isNativeInput(s2) && !_d.isLineBreakTag(s2))
          if (s2[i])
            s2 = s2[i];
          else if (s2.parentNode[i])
            s2 = s2.parentNode[i];
          else
            return s2.parentNode;
        return this.getDeepestNode(s2, t);
      }
      return e;
    }
    /**
     * Check if object is DOM node
     *
     * @param {*} node - object to check
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isElement(e) {
      return bt(e) ? false : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
    }
    /**
     * Check if object is DocumentFragment node
     *
     * @param {object} node - object to check
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isFragment(e) {
      return bt(e) ? false : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
    }
    /**
     * Check if passed element is contenteditable
     *
     * @param {HTMLElement} element - html element to check
     * @returns {boolean}
     */
    static isContentEditable(e) {
      return e.contentEditable === "true";
    }
    /**
     * Checks target if it is native input
     *
     * @param {*} target - HTML element or string
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isNativeInput(e) {
      const t = [
        "INPUT",
        "TEXTAREA"
      ];
      return e && e.tagName ? t.includes(e.tagName) : false;
    }
    /**
     * Checks if we can set caret
     *
     * @param {HTMLElement} target - target to check
     * @returns {boolean}
     */
    static canSetCaret(e) {
      let t = true;
      if (_d.isNativeInput(e))
        switch (e.type) {
          case "file":
          case "checkbox":
          case "radio":
          case "hidden":
          case "submit":
          case "button":
          case "image":
          case "reset":
            t = false;
            break;
        }
      else
        t = _d.isContentEditable(e);
      return t;
    }
    /**
     * Checks node if it is empty
     *
     * @description Method checks simple Node without any childs for emptiness
     * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
     * @param {Node} node - node to check
     * @param {string} [ignoreChars] - char or substring to treat as empty
     * @returns {boolean} true if it is empty
     */
    static isNodeEmpty(e, t) {
      let o4;
      return this.isSingleTag(e) && !this.isLineBreakTag(e) ? false : (this.isElement(e) && this.isNativeInput(e) ? o4 = e.value : o4 = e.textContent.replace("\u200B", ""), t && (o4 = o4.replace(new RegExp(t, "g"), "")), o4.trim().length === 0);
    }
    /**
     * checks node if it is doesn't have any child nodes
     *
     * @param {Node} node - node to check
     * @returns {boolean}
     */
    static isLeaf(e) {
      return e ? e.childNodes.length === 0 : false;
    }
    /**
     * breadth-first search (BFS)
     * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
     *
     * @description Pushes to stack all DOM leafs and checks for emptiness
     * @param {Node} node - node to check
     * @param {string} [ignoreChars] - char or substring to treat as empty
     * @returns {boolean}
     */
    static isEmpty(e, t) {
      e.normalize();
      const o4 = [e];
      for (; o4.length > 0; )
        if (e = o4.shift(), !!e) {
          if (this.isLeaf(e) && !this.isNodeEmpty(e, t))
            return false;
          e.childNodes && o4.push(...Array.from(e.childNodes));
        }
      return true;
    }
    /**
     * Check if string contains html elements
     *
     * @param {string} str - string to check
     * @returns {boolean}
     */
    static isHTMLString(e) {
      const t = _d.make("div");
      return t.innerHTML = e, t.childElementCount > 0;
    }
    /**
     * Return length of node`s text content
     *
     * @param {Node} node - node with content
     * @returns {number}
     */
    static getContentLength(e) {
      return _d.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
    }
    /**
     * Return array of names of block html elements
     *
     * @returns {string[]}
     */
    static get blockElements() {
      return [
        "address",
        "article",
        "aside",
        "blockquote",
        "canvas",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "hr",
        "li",
        "main",
        "nav",
        "noscript",
        "ol",
        "output",
        "p",
        "pre",
        "ruby",
        "section",
        "table",
        "tbody",
        "thead",
        "tr",
        "tfoot",
        "ul",
        "video"
      ];
    }
    /**
     * Check if passed content includes only inline elements
     *
     * @param {string|HTMLElement} data - element or html string
     * @returns {boolean}
     */
    static containsOnlyInlineElements(e) {
      let t;
      Q(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
      const o4 = (i) => !_d.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o4);
      return Array.from(t.children).every(o4);
    }
    /**
     * Find and return all block elements in the passed parent (including subtree)
     *
     * @param {HTMLElement} parent - root element
     * @returns {HTMLElement[]}
     */
    static getDeepestBlockElements(e) {
      return _d.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o4) => [...t, ..._d.getDeepestBlockElements(o4)], []);
    }
    /**
     * Helper for get holder from {string} or return HTMLElement
     *
     * @param {string | HTMLElement} element - holder's id or holder's HTML Element
     * @returns {HTMLElement}
     */
    static getHolder(e) {
      return Q(e) ? document.getElementById(e) : e;
    }
    /**
     * Returns true if element is anchor (is A tag)
     *
     * @param {Element} element - element to check
     * @returns {boolean}
     */
    static isAnchor(e) {
      return e.tagName.toLowerCase() === "a";
    }
    /**
     * Return element's offset related to the document
     *
     * @todo handle case when editor initialized in scrollable popup
     * @param el - element to compute offset
     */
    static offset(e) {
      const t = e.getBoundingClientRect(), o4 = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, s2 = t.top + i, r2 = t.left + o4;
      return {
        top: s2,
        left: r2,
        bottom: s2 + t.height,
        right: r2 + t.width
      };
    }
  };
  function Lo(n) {
    return !/[^\t\n\r ]/.test(n);
  }
  function _o(n) {
    const e = window.getComputedStyle(n), t = parseFloat(e.fontSize), o4 = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), s2 = parseFloat(e.borderTopWidth), r2 = parseFloat(e.marginTop), l3 = t * 0.8, a4 = (o4 - t) / 2;
    return r2 + s2 + i + a4 + l3;
  }
  function Lt(n) {
    n.dataset.empty = d.isEmpty(n) ? "true" : "false";
  }
  var No = {
    blockTunes: {
      toggler: {
        "Click to tune": "",
        "or drag to move": ""
      }
    },
    inlineToolbar: {
      converter: {
        "Convert to": ""
      }
    },
    toolbar: {
      toolbox: {
        Add: ""
      }
    },
    popover: {
      Filter: "",
      "Nothing found": "",
      "Convert to": ""
    }
  };
  var Po = {
    Text: "",
    Link: "",
    Bold: "",
    Italic: ""
  };
  var Do = {
    link: {
      "Add a link": ""
    },
    stub: {
      "The block can not be displayed correctly.": ""
    }
  };
  var Ro = {
    delete: {
      Delete: "",
      "Click to delete": ""
    },
    moveUp: {
      "Move up": ""
    },
    moveDown: {
      "Move down": ""
    }
  };
  var _t = {
    ui: No,
    toolNames: Po,
    tools: Do,
    blockTunes: Ro
  };
  var Nt = class ae {
    /**
     * Type-safe translation for internal UI texts:
     * Perform translation of the string by namespace and a key
     *
     * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
     * @param internalNamespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static ui(e, t) {
      return ae._t(e, t);
    }
    /**
     * Translate for external strings that is not presented in default dictionary.
     * For example, for user-specified tool names
     *
     * @param namespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static t(e, t) {
      return ae._t(e, t);
    }
    /**
     * Adjust module for using external dictionary
     *
     * @param dictionary - new messages list to override default
     */
    static setDictionary(e) {
      ae.currentDictionary = e;
    }
    /**
     * Perform translation both for internal and external namespaces
     * If there is no translation found, returns passed key as a translated message
     *
     * @param namespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static _t(e, t) {
      const o4 = ae.getNamespace(e);
      return !o4 || !o4[t] ? t : o4[t];
    }
    /**
     * Find messages section by namespace path
     *
     * @param namespace - path to section
     */
    static getNamespace(e) {
      return e.split(".").reduce((o4, i) => !o4 || !Object.keys(o4).length ? {} : o4[i], ae.currentDictionary);
    }
  };
  Nt.currentDictionary = _t;
  var z = Nt;
  var Pt = class extends Error {
  };
  var Te = class {
    constructor() {
      this.subscribers = {};
    }
    /**
     * Subscribe any event on callback
     *
     * @param eventName - event name
     * @param callback - subscriber
     */
    on(e, t) {
      e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
    }
    /**
     * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
     *
     * @param eventName - event name
     * @param callback - subscriber
     */
    once(e, t) {
      e in this.subscribers || (this.subscribers[e] = []);
      const o4 = (i) => {
        const s2 = t(i), r2 = this.subscribers[e].indexOf(o4);
        return r2 !== -1 && this.subscribers[e].splice(r2, 1), s2;
      };
      this.subscribers[e].push(o4);
    }
    /**
     * Emit callbacks with passed data
     *
     * @param eventName - event name
     * @param data - subscribers get this data when they were fired
     */
    emit(e, t) {
      V(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o4, i) => {
        const s2 = i(o4);
        return s2 !== void 0 ? s2 : o4;
      }, t);
    }
    /**
     * Unsubscribe callback from event
     *
     * @param eventName - event name
     * @param callback - event handler
     */
    off(e, t) {
      if (this.subscribers[e] === void 0) {
        console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
        return;
      }
      for (let o4 = 0; o4 < this.subscribers[e].length; o4++)
        if (this.subscribers[e][o4] === t) {
          delete this.subscribers[e][o4];
          break;
        }
    }
    /**
     * Destroyer
     * clears subscribers list
     */
    destroy() {
      this.subscribers = {};
    }
  };
  function G(n) {
    Object.setPrototypeOf(this, {
      /**
       * Block id
       *
       * @returns {string}
       */
      get id() {
        return n.id;
      },
      /**
       * Tool name
       *
       * @returns {string}
       */
      get name() {
        return n.name;
      },
      /**
       * Tool config passed on Editor's initialization
       *
       * @returns {ToolConfig}
       */
      get config() {
        return n.config;
      },
      /**
       * .ce-block element, that wraps plugin contents
       *
       * @returns {HTMLElement}
       */
      get holder() {
        return n.holder;
      },
      /**
       * True if Block content is empty
       *
       * @returns {boolean}
       */
      get isEmpty() {
        return n.isEmpty;
      },
      /**
       * True if Block is selected with Cross-Block selection
       *
       * @returns {boolean}
       */
      get selected() {
        return n.selected;
      },
      /**
       * Set Block's stretch state
       *
       * @param {boolean} state — state to set
       */
      set stretched(t) {
        n.stretched = t;
      },
      /**
       * True if Block is stretched
       *
       * @returns {boolean}
       */
      get stretched() {
        return n.stretched;
      },
      /**
       * True if Block has inputs to be focused
       */
      get focusable() {
        return n.focusable;
      },
      /**
       * Call Tool method with errors handler under-the-hood
       *
       * @param {string} methodName - method to call
       * @param {object} param - object with parameters
       * @returns {unknown}
       */
      call(t, o4) {
        return n.call(t, o4);
      },
      /**
       * Save Block content
       *
       * @returns {Promise<void|SavedData>}
       */
      save() {
        return n.save();
      },
      /**
       * Validate Block data
       *
       * @param {BlockToolData} data - data to validate
       * @returns {Promise<boolean>}
       */
      validate(t) {
        return n.validate(t);
      },
      /**
       * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
       * Can be useful for block changes invisible for editor core.
       */
      dispatchChange() {
        n.dispatchChange();
      },
      /**
       * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
       * This method returns the entry that is related to the Block (depended on the Block data)
       */
      getActiveToolboxEntry() {
        return n.getActiveToolboxEntry();
      }
    });
  }
  var Ce = class {
    constructor() {
      this.allListeners = [];
    }
    /**
     * Assigns event listener on element and returns unique identifier
     *
     * @param {EventTarget} element - DOM element that needs to be listened
     * @param {string} eventType - event type
     * @param {Function} handler - method that will be fired on event
     * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
     */
    on(e, t, o4, i = false) {
      const s2 = Ao("l"), r2 = {
        id: s2,
        element: e,
        eventType: t,
        handler: o4,
        options: i
      };
      if (!this.findOne(e, t, o4))
        return this.allListeners.push(r2), e.addEventListener(t, o4, i), s2;
    }
    /**
     * Removes event listener from element
     *
     * @param {EventTarget} element - DOM element that we removing listener
     * @param {string} eventType - event type
     * @param {Function} handler - remove handler, if element listens several handlers on the same event type
     * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
     */
    off(e, t, o4, i) {
      const s2 = this.findAll(e, t, o4);
      s2.forEach((r2, l3) => {
        const a4 = this.allListeners.indexOf(s2[l3]);
        a4 > -1 && (this.allListeners.splice(a4, 1), r2.element.removeEventListener(r2.eventType, r2.handler, r2.options));
      });
    }
    /**
     * Removes listener by id
     *
     * @param {string} id - listener identifier
     */
    offById(e) {
      const t = this.findById(e);
      t && t.element.removeEventListener(t.eventType, t.handler, t.options);
    }
    /**
     * Finds and returns first listener by passed params
     *
     * @param {EventTarget} element - event target
     * @param {string} [eventType] - event type
     * @param {Function} [handler] - event handler
     * @returns {ListenerData|null}
     */
    findOne(e, t, o4) {
      const i = this.findAll(e, t, o4);
      return i.length > 0 ? i[0] : null;
    }
    /**
     * Return all stored listeners by passed params
     *
     * @param {EventTarget} element - event target
     * @param {string} eventType - event type
     * @param {Function} handler - event handler
     * @returns {ListenerData[]}
     */
    findAll(e, t, o4) {
      let i;
      const s2 = e ? this.findByEventTarget(e) : [];
      return e && t && o4 ? i = s2.filter((r2) => r2.eventType === t && r2.handler === o4) : e && t ? i = s2.filter((r2) => r2.eventType === t) : i = s2, i;
    }
    /**
     * Removes all listeners
     */
    removeAll() {
      this.allListeners.map((e) => {
        e.element.removeEventListener(e.eventType, e.handler, e.options);
      }), this.allListeners = [];
    }
    /**
     * Module cleanup on destruction
     */
    destroy() {
      this.removeAll();
    }
    /**
     * Search method: looks for listener by passed element
     *
     * @param {EventTarget} element - searching element
     * @returns {Array} listeners that found on element
     */
    findByEventTarget(e) {
      return this.allListeners.filter((t) => {
        if (t.element === e)
          return t;
      });
    }
    /**
     * Search method: looks for listener by passed event type
     *
     * @param {string} eventType - event type
     * @returns {ListenerData[]} listeners that found on element
     */
    findByType(e) {
      return this.allListeners.filter((t) => {
        if (t.eventType === e)
          return t;
      });
    }
    /**
     * Search method: looks for listener by passed handler
     *
     * @param {Function} handler - event handler
     * @returns {ListenerData[]} listeners that found on element
     */
    findByHandler(e) {
      return this.allListeners.filter((t) => {
        if (t.handler === e)
          return t;
      });
    }
    /**
     * Returns listener data found by id
     *
     * @param {string} id - listener identifier
     * @returns {ListenerData}
     */
    findById(e) {
      return this.allListeners.find((t) => t.id === e);
    }
  };
  var y = class _y {
    /**
     * @class
     * @param options - Module options
     * @param options.config - Module config
     * @param options.eventsDispatcher - Common event bus
     */
    constructor({ config: e, eventsDispatcher: t }) {
      if (this.nodes = {}, this.listeners = new Ce(), this.readOnlyMutableListeners = {
        /**
         * Assigns event listener on DOM element and pushes into special array that might be removed
         *
         * @param {EventTarget} element - DOM Element
         * @param {string} eventType - Event name
         * @param {Function} handler - Event handler
         * @param {boolean|AddEventListenerOptions} options - Listening options
         */
        on: (o4, i, s2, r2 = false) => {
          this.mutableListenerIds.push(
            this.listeners.on(o4, i, s2, r2)
          );
        },
        /**
         * Clears all mutable listeners
         */
        clearAll: () => {
          for (const o4 of this.mutableListenerIds)
            this.listeners.offById(o4);
          this.mutableListenerIds = [];
        }
      }, this.mutableListenerIds = [], new.target === _y)
        throw new TypeError("Constructors for abstract class Module are not allowed.");
      this.config = e, this.eventsDispatcher = t;
    }
    /**
     * Editor modules setter
     *
     * @param {EditorModules} Editor - Editor's Modules
     */
    set state(e) {
      this.Editor = e;
    }
    /**
     * Remove memorized nodes
     */
    removeAllNodes() {
      for (const e in this.nodes) {
        const t = this.nodes[e];
        t instanceof HTMLElement && t.remove();
      }
    }
    /**
     * Returns true if current direction is RTL (Right-To-Left)
     */
    get isRtl() {
      return this.config.i18n.direction === "rtl";
    }
  };
  var b = class _b {
    constructor() {
      this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = false, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
    }
    /**
     * Editor styles
     *
     * @returns {{editorWrapper: string, editorZone: string}}
     */
    static get CSS() {
      return {
        editorWrapper: "codex-editor",
        editorZone: "codex-editor__redactor"
      };
    }
    /**
     * Returns selected anchor
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
     *
     * @returns {Node|null}
     */
    static get anchorNode() {
      const e = window.getSelection();
      return e ? e.anchorNode : null;
    }
    /**
     * Returns selected anchor element
     *
     * @returns {Element|null}
     */
    static get anchorElement() {
      const e = window.getSelection();
      if (!e)
        return null;
      const t = e.anchorNode;
      return t ? d.isElement(t) ? t : t.parentElement : null;
    }
    /**
     * Returns selection offset according to the anchor node
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
     *
     * @returns {number|null}
     */
    static get anchorOffset() {
      const e = window.getSelection();
      return e ? e.anchorOffset : null;
    }
    /**
     * Is current selection range collapsed
     *
     * @returns {boolean|null}
     */
    static get isCollapsed() {
      const e = window.getSelection();
      return e ? e.isCollapsed : null;
    }
    /**
     * Check current selection if it is at Editor's zone
     *
     * @returns {boolean}
     */
    static get isAtEditor() {
      return this.isSelectionAtEditor(_b.get());
    }
    /**
     * Check if passed selection is at Editor's zone
     *
     * @param selection - Selection object to check
     */
    static isSelectionAtEditor(e) {
      if (!e)
        return false;
      let t = e.anchorNode || e.focusNode;
      t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
      let o4 = null;
      return t && t instanceof Element && (o4 = t.closest(`.${_b.CSS.editorZone}`)), o4 ? o4.nodeType === Node.ELEMENT_NODE : false;
    }
    /**
     * Check if passed range at Editor zone
     *
     * @param range - range to check
     */
    static isRangeAtEditor(e) {
      if (!e)
        return;
      let t = e.startContainer;
      t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
      let o4 = null;
      return t && t instanceof Element && (o4 = t.closest(`.${_b.CSS.editorZone}`)), o4 ? o4.nodeType === Node.ELEMENT_NODE : false;
    }
    /**
     * Methods return boolean that true if selection exists on the page
     */
    static get isSelectionExists() {
      return !!_b.get().anchorNode;
    }
    /**
     * Return first range
     *
     * @returns {Range|null}
     */
    static get range() {
      return this.getRangeFromSelection(this.get());
    }
    /**
     * Returns range from passed Selection object
     *
     * @param selection - Selection object to get Range from
     */
    static getRangeFromSelection(e) {
      return e && e.rangeCount ? e.getRangeAt(0) : null;
    }
    /**
     * Calculates position and size of selected text
     *
     * @returns {DOMRect | ClientRect}
     */
    static get rect() {
      let e = document.selection, t, o4 = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      if (e && e.type !== "Control")
        return e = e, t = e.createRange(), o4.x = t.boundingLeft, o4.y = t.boundingTop, o4.width = t.boundingWidth, o4.height = t.boundingHeight, o4;
      if (!window.getSelection)
        return I("Method window.getSelection is not supported", "warn"), o4;
      if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
        return I("Method SelectionUtils.rangeCount is not supported", "warn"), o4;
      if (e.rangeCount === 0)
        return o4;
      if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o4 = t.getBoundingClientRect()), o4.x === 0 && o4.y === 0) {
        const i = document.createElement("span");
        if (i.getBoundingClientRect) {
          i.appendChild(document.createTextNode("\u200B")), t.insertNode(i), o4 = i.getBoundingClientRect();
          const s2 = i.parentNode;
          s2.removeChild(i), s2.normalize();
        }
      }
      return o4;
    }
    /**
     * Returns selected text as String
     *
     * @returns {string}
     */
    static get text() {
      return window.getSelection ? window.getSelection().toString() : "";
    }
    /**
     * Returns window SelectionUtils
     * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
     *
     * @returns {Selection}
     */
    static get() {
      return window.getSelection();
    }
    /**
     * Set focus to contenteditable or native input element
     *
     * @param element - element where to set focus
     * @param offset - offset of cursor
     */
    static setCursor(e, t = 0) {
      const o4 = document.createRange(), i = window.getSelection();
      return d.isNativeInput(e) ? d.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o4.setStart(e, t), o4.setEnd(e, t), i.removeAllRanges(), i.addRange(o4), o4.getBoundingClientRect());
    }
    /**
     * Check if current range exists and belongs to container
     *
     * @param container - where range should be
     */
    static isRangeInsideContainer(e) {
      const t = _b.range;
      return t === null ? false : e.contains(t.startContainer);
    }
    /**
     * Adds fake cursor to the current range
     */
    static addFakeCursor() {
      const e = _b.range;
      if (e === null)
        return;
      const t = d.make("span", "codex-editor__fake-cursor");
      t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
    }
    /**
     * Check if passed element contains a fake cursor
     *
     * @param el - where to check
     */
    static isFakeCursorInsideContainer(e) {
      return d.find(e, ".codex-editor__fake-cursor") !== null;
    }
    /**
     * Removes fake cursor from a container
     *
     * @param container - container to look for
     */
    static removeFakeCursor(e = document.body) {
      const t = d.find(e, ".codex-editor__fake-cursor");
      t && t.remove();
    }
    /**
     * Removes fake background
     */
    removeFakeBackground() {
      this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = false, document.execCommand(this.commandRemoveFormat));
    }
    /**
     * Sets fake background
     */
    setFakeBackground() {
      document.execCommand(this.commandBackground, false, "#a8d6ff"), this.isFakeBackgroundEnabled = true;
    }
    /**
     * Save SelectionUtils's range
     */
    save() {
      this.savedSelectionRange = _b.range;
    }
    /**
     * Restore saved SelectionUtils's range
     */
    restore() {
      if (!this.savedSelectionRange)
        return;
      const e = window.getSelection();
      e.removeAllRanges(), e.addRange(this.savedSelectionRange);
    }
    /**
     * Clears saved selection
     */
    clearSaved() {
      this.savedSelectionRange = null;
    }
    /**
     * Collapse current selection
     */
    collapseToEnd() {
      const e = window.getSelection(), t = document.createRange();
      t.selectNodeContents(e.focusNode), t.collapse(false), e.removeAllRanges(), e.addRange(t);
    }
    /**
     * Looks ahead to find passed tag from current selection
     *
     * @param  {string} tagName       - tag to found
     * @param  {string} [className]   - tag's class name
     * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
     * @returns {HTMLElement|null}
     */
    findParentTag(e, t, o4 = 10) {
      const i = window.getSelection();
      let s2 = null;
      return !i || !i.anchorNode || !i.focusNode ? null : ([
        /** the Node in which the selection begins */
        i.anchorNode,
        /** the Node in which the selection ends */
        i.focusNode
      ].forEach((l3) => {
        let a4 = o4;
        for (; a4 > 0 && l3.parentNode && !(l3.tagName === e && (s2 = l3, t && l3.classList && !l3.classList.contains(t) && (s2 = null), s2)); )
          l3 = l3.parentNode, a4--;
      }), s2);
    }
    /**
     * Expands selection range to the passed parent node
     *
     * @param {HTMLElement} element - element which contents should be selected
     */
    expandToTag(e) {
      const t = window.getSelection();
      t.removeAllRanges();
      const o4 = document.createRange();
      o4.selectNodeContents(e), t.addRange(o4);
    }
  };
  function Fo(n, e) {
    const { type: t, target: o4, addedNodes: i, removedNodes: s2 } = n;
    return n.type === "attributes" && n.attributeName === "data-empty" ? false : !!(e.contains(o4) || t === "childList" && (Array.from(i).some((a4) => a4 === e) || Array.from(s2).some((a4) => a4 === e)));
  }
  var Je = "redactor dom changed";
  var Dt = "block changed";
  var Rt = "fake cursor is about to be toggled";
  var Ft = "fake cursor have been set";
  var ye = "editor mobile layout toggled";
  function Qe(n, e) {
    if (!n.conversionConfig)
      return false;
    const t = n.conversionConfig[e];
    return O(t) || Q(t);
  }
  function _e(n, e) {
    return Qe(n.tool, e);
  }
  function Ht(n, e) {
    return Object.entries(n).some(([t, o4]) => e[t] && Oo(e[t], o4));
  }
  async function zt(n, e) {
    const o4 = (await n.save()).data, i = e.find((s2) => s2.name === n.name);
    return i !== void 0 && !Qe(i, "export") ? [] : e.reduce((s2, r2) => {
      if (!Qe(r2, "import") || r2.toolbox === void 0)
        return s2;
      const l3 = r2.toolbox.filter((a4) => {
        if (V(a4) || a4.icon === void 0)
          return false;
        if (a4.data !== void 0) {
          if (Ht(a4.data, o4))
            return false;
        } else if (r2.name === n.name)
          return false;
        return true;
      });
      return s2.push({
        ...r2,
        toolbox: l3
      }), s2;
    }, []);
  }
  function wt(n, e) {
    return n.mergeable ? n.name === e.name ? true : _e(e, "export") && _e(n, "import") : false;
  }
  function Ho(n, e) {
    const t = e == null ? void 0 : e.export;
    return O(t) ? t(n) : Q(t) ? n[t] : (t !== void 0 && I("Conversion \xABexport\xBB property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
  }
  function xt(n, e) {
    const t = e == null ? void 0 : e.import;
    return O(t) ? t(n) : Q(t) ? {
      [t]: n
    } : (t !== void 0 && I("Conversion \xABimport\xBB property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
  }
  var A = /* @__PURE__ */ ((n) => (n.Default = "default", n.Separator = "separator", n.Html = "html", n))(A || {});
  var J = /* @__PURE__ */ ((n) => (n.APPEND_CALLBACK = "appendCallback", n.RENDERED = "rendered", n.MOVED = "moved", n.UPDATED = "updated", n.REMOVED = "removed", n.ON_PASTE = "onPaste", n))(J || {});
  var D = class _D extends Te {
    /**
     * @param options - block constructor options
     * @param [options.id] - block's id. Will be generated if omitted.
     * @param options.data - Tool's initial data
     * @param options.tool — block's tool
     * @param options.api - Editor API module for pass it to the Block Tunes
     * @param options.readOnly - Read-Only flag
     * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
     */
    constructor({
      id: e = Io(),
      data: t,
      tool: o4,
      readOnly: i,
      tunesData: s2
    }, r2) {
      super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
        this.dropInputsCache(), this.updateCurrentInput();
      }, this.didMutated = (l3 = void 0) => {
        const a4 = l3 === void 0, c2 = l3 instanceof InputEvent;
        !a4 && !c2 && this.detectToolRootChange(l3);
        let u2;
        a4 || c2 ? u2 = true : u2 = !(l3.length > 0 && l3.every((p4) => {
          const { addedNodes: g5, removedNodes: f2, target: k3 } = p4;
          return [
            ...Array.from(g5),
            ...Array.from(f2),
            k3
          ].some((S2) => (d.isElement(S2) || (S2 = S2.parentElement), S2 && S2.closest('[data-mutation-free="true"]') !== null));
        })), u2 && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call(
          "updated"
          /* UPDATED */
        ), this.emit("didMutated", this));
      }, this.name = o4.name, this.id = e, this.settings = o4.settings, this.config = o4.settings.config || {}, this.editorEventBus = r2 || null, this.blockAPI = new G(this), this.tool = o4, this.toolInstance = o4.create(t, this.blockAPI, i), this.tunes = o4.tunes, this.composeTunes(s2), this.holder = this.compose(), window.requestIdleCallback(() => {
        this.watchBlockMutations(), this.addInputEvents(), this.toggleInputsEmptyMark();
      });
    }
    /**
     * CSS classes for the Block
     *
     * @returns {{wrapper: string, content: string}}
     */
    static get CSS() {
      return {
        wrapper: "ce-block",
        wrapperStretched: "ce-block--stretched",
        content: "ce-block__content",
        selected: "ce-block--selected",
        dropTarget: "ce-block--drop-target"
      };
    }
    /**
     * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
     */
    get inputs() {
      if (this.cachedInputs.length !== 0)
        return this.cachedInputs;
      const e = d.findAllInputs(this.holder);
      return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
    }
    /**
     * Return current Tool`s input
     * If Block doesn't contain inputs, return undefined
     */
    get currentInput() {
      return this.inputs[this.inputIndex];
    }
    /**
     * Set input index to the passed element
     *
     * @param element - HTML Element to set as current input
     */
    set currentInput(e) {
      const t = this.inputs.findIndex((o4) => o4 === e || o4.contains(e));
      t !== -1 && (this.inputIndex = t);
    }
    /**
     * Return first Tool`s input
     * If Block doesn't contain inputs, return undefined
     */
    get firstInput() {
      return this.inputs[0];
    }
    /**
     * Return first Tool`s input
     * If Block doesn't contain inputs, return undefined
     */
    get lastInput() {
      const e = this.inputs;
      return e[e.length - 1];
    }
    /**
     * Return next Tool`s input or undefined if it doesn't exist
     * If Block doesn't contain inputs, return undefined
     */
    get nextInput() {
      return this.inputs[this.inputIndex + 1];
    }
    /**
     * Return previous Tool`s input or undefined if it doesn't exist
     * If Block doesn't contain inputs, return undefined
     */
    get previousInput() {
      return this.inputs[this.inputIndex - 1];
    }
    /**
     * Get Block's JSON data
     *
     * @returns {object}
     */
    get data() {
      return this.save().then((e) => e && !V(e.data) ? e.data : {});
    }
    /**
     * Returns tool's sanitizer config
     *
     * @returns {object}
     */
    get sanitize() {
      return this.tool.sanitizeConfig;
    }
    /**
     * is block mergeable
     * We plugin have merge function then we call it mergeable
     *
     * @returns {boolean}
     */
    get mergeable() {
      return O(this.toolInstance.merge);
    }
    /**
     * If Block contains inputs, it is focusable
     */
    get focusable() {
      return this.inputs.length !== 0;
    }
    /**
     * Check block for emptiness
     *
     * @returns {boolean}
     */
    get isEmpty() {
      const e = d.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
      return e && t;
    }
    /**
     * Check if block has a media content such as images, iframe and other
     *
     * @returns {boolean}
     */
    get hasMedia() {
      const e = [
        "img",
        "iframe",
        "video",
        "audio",
        "source",
        "input",
        "textarea",
        "twitterwidget"
      ];
      return !!this.holder.querySelector(e.join(","));
    }
    /**
     * Set selected state
     * We don't need to mark Block as Selected when it is empty
     *
     * @param {boolean} state - 'true' to select, 'false' to remove selection
     */
    set selected(e) {
      var i, s2;
      this.holder.classList.toggle(_D.CSS.selected, e);
      const t = e === true && b.isRangeInsideContainer(this.holder), o4 = e === false && b.isFakeCursorInsideContainer(this.holder);
      (t || o4) && ((i = this.editorEventBus) == null || i.emit(Rt, { state: e }), t ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (s2 = this.editorEventBus) == null || s2.emit(Ft, { state: e }));
    }
    /**
     * Returns True if it is Selected
     *
     * @returns {boolean}
     */
    get selected() {
      return this.holder.classList.contains(_D.CSS.selected);
    }
    /**
     * Set stretched state
     *
     * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
     */
    set stretched(e) {
      this.holder.classList.toggle(_D.CSS.wrapperStretched, e);
    }
    /**
     * Return Block's stretched state
     *
     * @returns {boolean}
     */
    get stretched() {
      return this.holder.classList.contains(_D.CSS.wrapperStretched);
    }
    /**
     * Toggle drop target state
     *
     * @param {boolean} state - 'true' if block is drop target, false otherwise
     */
    set dropTarget(e) {
      this.holder.classList.toggle(_D.CSS.dropTarget, e);
    }
    /**
     * Returns Plugins content
     *
     * @returns {HTMLElement}
     */
    get pluginsContent() {
      return this.toolRenderedElement;
    }
    /**
     * Calls Tool's method
     *
     * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
     *
     * @param {string} methodName - method to call
     * @param {object} params - method argument
     */
    call(e, t) {
      if (O(this.toolInstance[e])) {
        e === "appendCallback" && I(
          "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
          "warn"
        );
        try {
          this.toolInstance[e].call(this.toolInstance, t);
        } catch (o4) {
          I(`Error during '${e}' call: ${o4.message}`, "error");
        }
      }
    }
    /**
     * Call plugins merge method
     *
     * @param {BlockToolData} data - data to merge
     */
    async mergeWith(e) {
      await this.toolInstance.merge(e);
    }
    /**
     * Extracts data from Block
     * Groups Tool's save processing time
     *
     * @returns {object}
     */
    async save() {
      const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
      [
        ...this.tunesInstances.entries(),
        ...this.defaultTunesInstances.entries()
      ].forEach(([s2, r2]) => {
        if (O(r2.save))
          try {
            t[s2] = r2.save();
          } catch (l3) {
            I(`Tune ${r2.constructor.name} save method throws an Error %o`, "warn", l3);
          }
      });
      const o4 = window.performance.now();
      let i;
      return Promise.resolve(e).then((s2) => (i = window.performance.now(), {
        id: this.id,
        tool: this.name,
        data: s2,
        tunes: t,
        time: i - o4
      })).catch((s2) => {
        I(`Saving process for ${this.name} tool failed due to the ${s2}`, "log", "red");
      });
    }
    /**
     * Uses Tool's validation method to check the correctness of output data
     * Tool's validation method is optional
     *
     * @description Method returns true|false whether data passed the validation or not
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>} valid
     */
    async validate(e) {
      let t = true;
      return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
    }
    /**
     * Returns data to render in Block Tunes menu.
     * Splits block tunes into 2 groups: block specific tunes and common tunes
     */
    getTunes() {
      const e = [], t = [], o4 = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [];
      return d.isElement(o4) ? e.push({
        type: A.Html,
        element: o4
      }) : Array.isArray(o4) ? e.push(...o4) : e.push(o4), [
        ...this.tunesInstances.values(),
        ...this.defaultTunesInstances.values()
      ].map((s2) => s2.render()).forEach((s2) => {
        d.isElement(s2) ? t.push({
          type: A.Html,
          element: s2
        }) : Array.isArray(s2) ? t.push(...s2) : t.push(s2);
      }), {
        toolTunes: e,
        commonTunes: t
      };
    }
    /**
     * Update current input index with selection anchor node
     */
    updateCurrentInput() {
      this.currentInput = d.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
    }
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      this.didMutated();
    }
    /**
     * Call Tool instance destroy method
     */
    destroy() {
      this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), O(this.toolInstance.destroy) && this.toolInstance.destroy();
    }
    /**
     * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
     * This method returns the entry that is related to the Block (depended on the Block data)
     */
    async getActiveToolboxEntry() {
      const e = this.tool.toolbox;
      if (e.length === 1)
        return Promise.resolve(this.tool.toolbox[0]);
      const t = await this.data, o4 = e;
      return o4 == null ? void 0 : o4.find((i) => Ht(i.data, t));
    }
    /**
     * Exports Block data as string using conversion config
     */
    async exportDataAsString() {
      const e = await this.data;
      return Ho(e, this.tool.conversionConfig);
    }
    /**
     * Make default Block wrappers and put Tool`s content there
     *
     * @returns {HTMLDivElement}
     */
    compose() {
      const e = d.make("div", _D.CSS.wrapper), t = d.make("div", _D.CSS.content), o4 = this.toolInstance.render();
      e.dataset.id = this.id, this.toolRenderedElement = o4, t.appendChild(this.toolRenderedElement);
      let i = t;
      return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((s2) => {
        if (O(s2.wrap))
          try {
            i = s2.wrap(i);
          } catch (r2) {
            I(`Tune ${s2.constructor.name} wrap method throws an Error %o`, "warn", r2);
          }
      }), e.appendChild(i), e;
    }
    /**
     * Instantiate Block Tunes
     *
     * @param tunesData - current Block tunes data
     * @private
     */
    composeTunes(e) {
      Array.from(this.tunes.values()).forEach((t) => {
        (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
      }), Object.entries(e).forEach(([t, o4]) => {
        this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o4);
      });
    }
    /**
     * Adds focus event listeners to all inputs and contenteditable
     */
    addInputEvents() {
      this.inputs.forEach((e) => {
        e.addEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.addEventListener("input", this.didMutated);
      });
    }
    /**
     * removes focus event listeners from all inputs and contenteditable
     */
    removeInputEvents() {
      this.inputs.forEach((e) => {
        e.removeEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
      });
    }
    /**
     * Listen common editor Dom Changed event and detect mutations related to the  Block
     */
    watchBlockMutations() {
      var e;
      this.redactorDomChangedCallback = (t) => {
        const { mutations: o4 } = t;
        o4.some((s2) => Fo(s2, this.toolRenderedElement)) && this.didMutated(o4);
      }, (e = this.editorEventBus) == null || e.on(Je, this.redactorDomChangedCallback);
    }
    /**
     * Remove redactor dom change event listener
     */
    unwatchBlockMutations() {
      var e;
      (e = this.editorEventBus) == null || e.off(Je, this.redactorDomChangedCallback);
    }
    /**
     * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
     * We need to detect such changes and update a link to tools main element with the new one
     *
     * @param mutations - records of block content mutations
     */
    detectToolRootChange(e) {
      e.forEach((t) => {
        if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
          const i = t.addedNodes[t.addedNodes.length - 1];
          this.toolRenderedElement = i;
        }
      });
    }
    /**
     * Clears inputs cached value
     */
    dropInputsCache() {
      this.cachedInputs = [];
    }
    /**
     * Mark inputs with 'data-empty' attribute with the empty state
     */
    toggleInputsEmptyMark() {
      this.inputs.forEach(Lt);
    }
  };
  var zo = class extends y {
    constructor() {
      super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o4 = {}, i, s2, r2, l3) => {
        const a4 = this.Editor.BlockManager.insert({
          id: l3,
          tool: e,
          data: t,
          index: i,
          needToFocus: s2,
          replace: r2
        });
        return new G(a4);
      }, this.composeBlockData = async (e) => {
        const t = this.Editor.Tools.blockTools.get(e);
        return new D({
          tool: t,
          api: this.Editor.API,
          readOnly: true,
          data: {},
          tunesData: {}
        }).data;
      }, this.update = async (e, t, o4) => {
        const { BlockManager: i } = this.Editor, s2 = i.getBlockById(e);
        if (s2 === void 0)
          throw new Error(`Block with id "${e}" not found`);
        const r2 = await i.update(s2, t, o4);
        return new G(r2);
      }, this.convert = async (e, t, o4) => {
        var h4, p4;
        const { BlockManager: i, Tools: s2 } = this.Editor, r2 = i.getBlockById(e);
        if (!r2)
          throw new Error(`Block with id "${e}" not found`);
        const l3 = s2.blockTools.get(r2.name), a4 = s2.blockTools.get(t);
        if (!a4)
          throw new Error(`Block Tool with type "${t}" not found`);
        const c2 = ((h4 = l3 == null ? void 0 : l3.conversionConfig) == null ? void 0 : h4.export) !== void 0, u2 = ((p4 = a4.conversionConfig) == null ? void 0 : p4.import) !== void 0;
        if (c2 && u2) {
          const g5 = await i.convert(r2, t, o4);
          return new G(g5);
        } else {
          const g5 = [
            c2 ? false : Le(r2.name),
            u2 ? false : Le(t)
          ].filter(Boolean).join(" and ");
          throw new Error(`Conversion from "${r2.name}" to "${t}" is not possible. ${g5} tool(s) should provide a "conversionConfig"`);
        }
      }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
        this.validateIndex(t);
        const o4 = e.map(({ id: i, type: s2, data: r2 }) => this.Editor.BlockManager.composeBlock({
          id: i,
          tool: s2 || this.config.defaultBlock,
          data: r2
        }));
        return this.Editor.BlockManager.insertMany(o4, t), o4.map((i) => new G(i));
      };
    }
    /**
     * Available methods
     *
     * @returns {Blocks}
     */
    get methods() {
      return {
        clear: () => this.clear(),
        render: (e) => this.render(e),
        renderFromHTML: (e) => this.renderFromHTML(e),
        delete: (e) => this.delete(e),
        swap: (e, t) => this.swap(e, t),
        move: (e, t) => this.move(e, t),
        getBlockByIndex: (e) => this.getBlockByIndex(e),
        getById: (e) => this.getById(e),
        getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
        getBlockIndex: (e) => this.getBlockIndex(e),
        getBlocksCount: () => this.getBlocksCount(),
        getBlockByElement: (e) => this.getBlockByElement(e),
        stretchBlock: (e, t = true) => this.stretchBlock(e, t),
        insertNewBlock: () => this.insertNewBlock(),
        insert: this.insert,
        insertMany: this.insertMany,
        update: this.update,
        composeBlockData: this.composeBlockData,
        convert: this.convert
      };
    }
    /**
     * Returns Blocks count
     *
     * @returns {number}
     */
    getBlocksCount() {
      return this.Editor.BlockManager.blocks.length;
    }
    /**
     * Returns current block index
     *
     * @returns {number}
     */
    getCurrentBlockIndex() {
      return this.Editor.BlockManager.currentBlockIndex;
    }
    /**
     * Returns the index of Block by id;
     *
     * @param id - block id
     */
    getBlockIndex(e) {
      const t = this.Editor.BlockManager.getBlockById(e);
      if (!t) {
        X("There is no block with id `" + e + "`", "warn");
        return;
      }
      return this.Editor.BlockManager.getBlockIndex(t);
    }
    /**
     * Returns BlockAPI object by Block index
     *
     * @param {number} index - index to get
     */
    getBlockByIndex(e) {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      if (t === void 0) {
        X("There is no block at index `" + e + "`", "warn");
        return;
      }
      return new G(t);
    }
    /**
     * Returns BlockAPI object by Block id
     *
     * @param id - id of block to get
     */
    getById(e) {
      const t = this.Editor.BlockManager.getBlockById(e);
      return t === void 0 ? (X("There is no block with id `" + e + "`", "warn"), null) : new G(t);
    }
    /**
     * Get Block API object by any child html element
     *
     * @param element - html element to get Block by
     */
    getBlockByElement(e) {
      const t = this.Editor.BlockManager.getBlock(e);
      if (t === void 0) {
        X("There is no block corresponding to element `" + e + "`", "warn");
        return;
      }
      return new G(t);
    }
    /**
     * Call Block Manager method that swap Blocks
     *
     * @param {number} fromIndex - position of first Block
     * @param {number} toIndex - position of second Block
     * @deprecated — use 'move' instead
     */
    swap(e, t) {
      I(
        "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
        "info"
      ), this.Editor.BlockManager.swap(e, t);
    }
    /**
     * Move block from one index to another
     *
     * @param {number} toIndex - index to move to
     * @param {number} fromIndex - index to move from
     */
    move(e, t) {
      this.Editor.BlockManager.move(e, t);
    }
    /**
     * Deletes Block
     *
     * @param {number} blockIndex - index of Block to delete
     */
    delete(e = this.Editor.BlockManager.currentBlockIndex) {
      try {
        const t = this.Editor.BlockManager.getBlockByIndex(e);
        this.Editor.BlockManager.removeBlock(t);
      } catch (t) {
        X(t, "warn");
        return;
      }
      this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
    }
    /**
     * Clear Editor's area
     */
    async clear() {
      await this.Editor.BlockManager.clear(true), this.Editor.InlineToolbar.close();
    }
    /**
     * Fills Editor with Blocks data
     *
     * @param {OutputData} data — Saved Editor data
     */
    async render(e) {
      if (e === void 0 || e.blocks === void 0)
        throw new Error("Incorrect data passed to the render() method");
      this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
    }
    /**
     * Render passed HTML string
     *
     * @param {string} data - HTML string to render
     * @returns {Promise<void>}
     */
    renderFromHTML(e) {
      return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, true);
    }
    /**
     * Stretch Block's content
     *
     * @param {number} index - index of Block to stretch
     * @param {boolean} status - true to enable, false to disable
     * @deprecated Use BlockAPI interface to stretch Blocks
     */
    stretchBlock(e, t = true) {
      Ze(
        true,
        "blocks.stretchBlock()",
        "BlockAPI"
      );
      const o4 = this.Editor.BlockManager.getBlockByIndex(e);
      o4 && (o4.stretched = t);
    }
    /**
     * Insert new Block
     * After set caret to this Block
     *
     * @todo remove in 3.0.0
     * @deprecated with insert() method
     */
    insertNewBlock() {
      I("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
    }
    /**
     * Validated block index and throws an error if it's invalid
     *
     * @param index - index to validate
     */
    validateIndex(e) {
      if (typeof e != "number")
        throw new Error("Index should be a number");
      if (e < 0)
        throw new Error("Index should be greater than or equal to 0");
      if (e === null)
        throw new Error("Index should be greater than or equal to 0");
    }
  };
  function Uo(n, e) {
    return typeof n == "number" ? e.BlockManager.getBlockByIndex(n) : typeof n == "string" ? e.BlockManager.getBlockById(n) : e.BlockManager.getBlockById(n.id);
  }
  var jo = class extends y {
    constructor() {
      super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), true) : false, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), true) : false, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), true) : false, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), true) : false, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o4 = 0) => {
        const i = Uo(e, this.Editor);
        return i === void 0 ? false : (this.Editor.Caret.setToBlock(i, t, o4), true);
      }, this.focus = (e = false) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
    }
    /**
     * Available methods
     *
     * @returns {Caret}
     */
    get methods() {
      return {
        setToFirstBlock: this.setToFirstBlock,
        setToLastBlock: this.setToLastBlock,
        setToPreviousBlock: this.setToPreviousBlock,
        setToNextBlock: this.setToNextBlock,
        setToBlock: this.setToBlock,
        focus: this.focus
      };
    }
  };
  var $o = class extends y {
    /**
     * Available methods
     *
     * @returns {Events}
     */
    get methods() {
      return {
        emit: (e, t) => this.emit(e, t),
        off: (e, t) => this.off(e, t),
        on: (e, t) => this.on(e, t)
      };
    }
    /**
     * Subscribe on Events
     *
     * @param {string} eventName - event name to subscribe
     * @param {Function} callback - event handler
     */
    on(e, t) {
      this.eventsDispatcher.on(e, t);
    }
    /**
     * Emit event with data
     *
     * @param {string} eventName - event to emit
     * @param {object} data - event's data
     */
    emit(e, t) {
      this.eventsDispatcher.emit(e, t);
    }
    /**
     * Unsubscribe from Event
     *
     * @param {string} eventName - event to unsubscribe
     * @param {Function} callback - event handler
     */
    off(e, t) {
      this.eventsDispatcher.off(e, t);
    }
  };
  var ot = class _ot extends y {
    /**
     * Return namespace section for tool or block tune
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    static getNamespace(e, t) {
      return t ? `blockTunes.${e}` : `tools.${e}`;
    }
    /**
     * Return I18n API methods with global dictionary access
     */
    get methods() {
      return {
        t: () => {
          X("I18n.t() method can be accessed only from Tools", "warn");
        }
      };
    }
    /**
     * Return I18n API methods with tool namespaced dictionary
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    getMethodsForTool(e, t) {
      return Object.assign(
        this.methods,
        {
          t: (o4) => z.t(_ot.getNamespace(e, t), o4)
        }
      );
    }
  };
  var Yo = class extends y {
    /**
     * Editor.js Core API modules
     */
    get methods() {
      return {
        blocks: this.Editor.BlocksAPI.methods,
        caret: this.Editor.CaretAPI.methods,
        tools: this.Editor.ToolsAPI.methods,
        events: this.Editor.EventsAPI.methods,
        listeners: this.Editor.ListenersAPI.methods,
        notifier: this.Editor.NotifierAPI.methods,
        sanitizer: this.Editor.SanitizerAPI.methods,
        saver: this.Editor.SaverAPI.methods,
        selection: this.Editor.SelectionAPI.methods,
        styles: this.Editor.StylesAPI.classes,
        toolbar: this.Editor.ToolbarAPI.methods,
        inlineToolbar: this.Editor.InlineToolbarAPI.methods,
        tooltip: this.Editor.TooltipAPI.methods,
        i18n: this.Editor.I18nAPI.methods,
        readOnly: this.Editor.ReadOnlyAPI.methods,
        ui: this.Editor.UiAPI.methods
      };
    }
    /**
     * Returns Editor.js Core API methods for passed tool
     *
     * @param toolName - tool name
     * @param isTune - is tool a block tune
     */
    getMethodsForTool(e, t) {
      return Object.assign(
        this.methods,
        {
          i18n: this.Editor.I18nAPI.getMethodsForTool(e, t)
        }
      );
    }
  };
  var Wo = class extends y {
    /**
     * Available methods
     *
     * @returns {InlineToolbar}
     */
    get methods() {
      return {
        close: () => this.close(),
        open: () => this.open()
      };
    }
    /**
     * Open Inline Toolbar
     */
    open() {
      this.Editor.InlineToolbar.tryToShow();
    }
    /**
     * Close Inline Toolbar
     */
    close() {
      this.Editor.InlineToolbar.close();
    }
  };
  var Ko = class extends y {
    /**
     * Available methods
     *
     * @returns {Listeners}
     */
    get methods() {
      return {
        on: (e, t, o4, i) => this.on(e, t, o4, i),
        off: (e, t, o4, i) => this.off(e, t, o4, i),
        offById: (e) => this.offById(e)
      };
    }
    /**
     * Ads a DOM event listener. Return it's id.
     *
     * @param {HTMLElement} element - Element to set handler to
     * @param {string} eventType - event type
     * @param {() => void} handler - event handler
     * @param {boolean} useCapture - capture event or not
     */
    on(e, t, o4, i) {
      return this.listeners.on(e, t, o4, i);
    }
    /**
     * Removes DOM listener from element
     *
     * @param {Element} element - Element to remove handler from
     * @param eventType - event type
     * @param handler - event handler
     * @param {boolean} useCapture - capture event or not
     */
    off(e, t, o4, i) {
      this.listeners.off(e, t, o4, i);
    }
    /**
     * Removes DOM listener by the listener id
     *
     * @param id - id of the listener to remove
     */
    offById(e) {
      this.listeners.offById(e);
    }
  };
  var Ut = { exports: {} };
  (function(n, e) {
    (function(t, o4) {
      n.exports = o4();
    })(window, function() {
      return function(t) {
        var o4 = {};
        function i(s2) {
          if (o4[s2])
            return o4[s2].exports;
          var r2 = o4[s2] = { i: s2, l: false, exports: {} };
          return t[s2].call(r2.exports, r2, r2.exports, i), r2.l = true, r2.exports;
        }
        return i.m = t, i.c = o4, i.d = function(s2, r2, l3) {
          i.o(s2, r2) || Object.defineProperty(s2, r2, { enumerable: true, get: l3 });
        }, i.r = function(s2) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s2, "__esModule", { value: true });
        }, i.t = function(s2, r2) {
          if (1 & r2 && (s2 = i(s2)), 8 & r2 || 4 & r2 && typeof s2 == "object" && s2 && s2.__esModule)
            return s2;
          var l3 = /* @__PURE__ */ Object.create(null);
          if (i.r(l3), Object.defineProperty(l3, "default", { enumerable: true, value: s2 }), 2 & r2 && typeof s2 != "string")
            for (var a4 in s2)
              i.d(l3, a4, function(c2) {
                return s2[c2];
              }.bind(null, a4));
          return l3;
        }, i.n = function(s2) {
          var r2 = s2 && s2.__esModule ? function() {
            return s2.default;
          } : function() {
            return s2;
          };
          return i.d(r2, "a", r2), r2;
        }, i.o = function(s2, r2) {
          return Object.prototype.hasOwnProperty.call(s2, r2);
        }, i.p = "/", i(i.s = 0);
      }([function(t, o4, i) {
        i(1), /*!
        * Codex JavaScript Notification module
        * https://github.com/codex-team/js-notifier
        */
        t.exports = function() {
          var s2 = i(6), r2 = "cdx-notify--bounce-in", l3 = null;
          return { show: function(a4) {
            if (a4.message) {
              (function() {
                if (l3)
                  return true;
                l3 = s2.getWrapper(), document.body.appendChild(l3);
              })();
              var c2 = null, u2 = a4.time || 8e3;
              switch (a4.type) {
                case "confirm":
                  c2 = s2.confirm(a4);
                  break;
                case "prompt":
                  c2 = s2.prompt(a4);
                  break;
                default:
                  c2 = s2.alert(a4), window.setTimeout(function() {
                    c2.remove();
                  }, u2);
              }
              l3.appendChild(c2), c2.classList.add(r2);
            }
          } };
        }();
      }, function(t, o4, i) {
        var s2 = i(2);
        typeof s2 == "string" && (s2 = [[t.i, s2, ""]]);
        var r2 = { hmr: true, transform: void 0, insertInto: void 0 };
        i(4)(s2, r2), s2.locals && (t.exports = s2.locals);
      }, function(t, o4, i) {
        (t.exports = i(3)(false)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
      }, function(t, o4) {
        t.exports = function(i) {
          var s2 = [];
          return s2.toString = function() {
            return this.map(function(r2) {
              var l3 = function(a4, c2) {
                var u2 = a4[1] || "", h4 = a4[3];
                if (!h4)
                  return u2;
                if (c2 && typeof btoa == "function") {
                  var p4 = (f2 = h4, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f2)))) + " */"), g5 = h4.sources.map(function(k3) {
                    return "/*# sourceURL=" + h4.sourceRoot + k3 + " */";
                  });
                  return [u2].concat(g5).concat([p4]).join(`
`);
                }
                var f2;
                return [u2].join(`
`);
              }(r2, i);
              return r2[2] ? "@media " + r2[2] + "{" + l3 + "}" : l3;
            }).join("");
          }, s2.i = function(r2, l3) {
            typeof r2 == "string" && (r2 = [[null, r2, ""]]);
            for (var a4 = {}, c2 = 0; c2 < this.length; c2++) {
              var u2 = this[c2][0];
              typeof u2 == "number" && (a4[u2] = true);
            }
            for (c2 = 0; c2 < r2.length; c2++) {
              var h4 = r2[c2];
              typeof h4[0] == "number" && a4[h4[0]] || (l3 && !h4[2] ? h4[2] = l3 : l3 && (h4[2] = "(" + h4[2] + ") and (" + l3 + ")"), s2.push(h4));
            }
          }, s2;
        };
      }, function(t, o4, i) {
        var s2, r2, l3 = {}, a4 = (s2 = function() {
          return window && document && document.all && !window.atob;
        }, function() {
          return r2 === void 0 && (r2 = s2.apply(this, arguments)), r2;
        }), c2 = /* @__PURE__ */ function(v3) {
          var m4 = {};
          return function(x2) {
            if (typeof x2 == "function")
              return x2();
            if (m4[x2] === void 0) {
              var E2 = function(M2) {
                return document.querySelector(M2);
              }.call(this, x2);
              if (window.HTMLIFrameElement && E2 instanceof window.HTMLIFrameElement)
                try {
                  E2 = E2.contentDocument.head;
                } catch {
                  E2 = null;
                }
              m4[x2] = E2;
            }
            return m4[x2];
          };
        }(), u2 = null, h4 = 0, p4 = [], g5 = i(5);
        function f2(v3, m4) {
          for (var x2 = 0; x2 < v3.length; x2++) {
            var E2 = v3[x2], M2 = l3[E2.id];
            if (M2) {
              M2.refs++;
              for (var T2 = 0; T2 < M2.parts.length; T2++)
                M2.parts[T2](E2.parts[T2]);
              for (; T2 < E2.parts.length; T2++)
                M2.parts.push(j2(E2.parts[T2], m4));
            } else {
              var P2 = [];
              for (T2 = 0; T2 < E2.parts.length; T2++)
                P2.push(j2(E2.parts[T2], m4));
              l3[E2.id] = { id: E2.id, refs: 1, parts: P2 };
            }
          }
        }
        function k3(v3, m4) {
          for (var x2 = [], E2 = {}, M2 = 0; M2 < v3.length; M2++) {
            var T2 = v3[M2], P2 = m4.base ? T2[0] + m4.base : T2[0], B2 = { css: T2[1], media: T2[2], sourceMap: T2[3] };
            E2[P2] ? E2[P2].parts.push(B2) : x2.push(E2[P2] = { id: P2, parts: [B2] });
          }
          return x2;
        }
        function C3(v3, m4) {
          var x2 = c2(v3.insertInto);
          if (!x2)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var E2 = p4[p4.length - 1];
          if (v3.insertAt === "top")
            E2 ? E2.nextSibling ? x2.insertBefore(m4, E2.nextSibling) : x2.appendChild(m4) : x2.insertBefore(m4, x2.firstChild), p4.push(m4);
          else if (v3.insertAt === "bottom")
            x2.appendChild(m4);
          else {
            if (typeof v3.insertAt != "object" || !v3.insertAt.before)
              throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            var M2 = c2(v3.insertInto + " " + v3.insertAt.before);
            x2.insertBefore(m4, M2);
          }
        }
        function S2(v3) {
          if (v3.parentNode === null)
            return false;
          v3.parentNode.removeChild(v3);
          var m4 = p4.indexOf(v3);
          m4 >= 0 && p4.splice(m4, 1);
        }
        function _2(v3) {
          var m4 = document.createElement("style");
          return v3.attrs.type === void 0 && (v3.attrs.type = "text/css"), ee2(m4, v3.attrs), C3(v3, m4), m4;
        }
        function ee2(v3, m4) {
          Object.keys(m4).forEach(function(x2) {
            v3.setAttribute(x2, m4[x2]);
          });
        }
        function j2(v3, m4) {
          var x2, E2, M2, T2;
          if (m4.transform && v3.css) {
            if (!(T2 = m4.transform(v3.css)))
              return function() {
              };
            v3.css = T2;
          }
          if (m4.singleton) {
            var P2 = h4++;
            x2 = u2 || (u2 = _2(m4)), E2 = fe2.bind(null, x2, P2, false), M2 = fe2.bind(null, x2, P2, true);
          } else
            v3.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (x2 = function(B2) {
              var Y2 = document.createElement("link");
              return B2.attrs.type === void 0 && (B2.attrs.type = "text/css"), B2.attrs.rel = "stylesheet", ee2(Y2, B2.attrs), C3(B2, Y2), Y2;
            }(m4), E2 = function(B2, Y2, ge2) {
              var ie2 = ge2.css, He2 = ge2.sourceMap, mo = Y2.convertToAbsoluteUrls === void 0 && He2;
              (Y2.convertToAbsoluteUrls || mo) && (ie2 = g5(ie2)), He2 && (ie2 += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(He2)))) + " */");
              var bo = new Blob([ie2], { type: "text/css" }), mt2 = B2.href;
              B2.href = URL.createObjectURL(bo), mt2 && URL.revokeObjectURL(mt2);
            }.bind(null, x2, m4), M2 = function() {
              S2(x2), x2.href && URL.revokeObjectURL(x2.href);
            }) : (x2 = _2(m4), E2 = function(B2, Y2) {
              var ge2 = Y2.css, ie2 = Y2.media;
              if (ie2 && B2.setAttribute("media", ie2), B2.styleSheet)
                B2.styleSheet.cssText = ge2;
              else {
                for (; B2.firstChild; )
                  B2.removeChild(B2.firstChild);
                B2.appendChild(document.createTextNode(ge2));
              }
            }.bind(null, x2), M2 = function() {
              S2(x2);
            });
          return E2(v3), function(B2) {
            if (B2) {
              if (B2.css === v3.css && B2.media === v3.media && B2.sourceMap === v3.sourceMap)
                return;
              E2(v3 = B2);
            } else
              M2();
          };
        }
        t.exports = function(v3, m4) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
            throw new Error("The style-loader cannot be used in a non-browser environment");
          (m4 = m4 || {}).attrs = typeof m4.attrs == "object" ? m4.attrs : {}, m4.singleton || typeof m4.singleton == "boolean" || (m4.singleton = a4()), m4.insertInto || (m4.insertInto = "head"), m4.insertAt || (m4.insertAt = "bottom");
          var x2 = k3(v3, m4);
          return f2(x2, m4), function(E2) {
            for (var M2 = [], T2 = 0; T2 < x2.length; T2++) {
              var P2 = x2[T2];
              (B2 = l3[P2.id]).refs--, M2.push(B2);
            }
            for (E2 && f2(k3(E2, m4), m4), T2 = 0; T2 < M2.length; T2++) {
              var B2;
              if ((B2 = M2[T2]).refs === 0) {
                for (var Y2 = 0; Y2 < B2.parts.length; Y2++)
                  B2.parts[Y2]();
                delete l3[B2.id];
              }
            }
          };
        };
        var $2, oe2 = ($2 = [], function(v3, m4) {
          return $2[v3] = m4, $2.filter(Boolean).join(`
`);
        });
        function fe2(v3, m4, x2, E2) {
          var M2 = x2 ? "" : E2.css;
          if (v3.styleSheet)
            v3.styleSheet.cssText = oe2(m4, M2);
          else {
            var T2 = document.createTextNode(M2), P2 = v3.childNodes;
            P2[m4] && v3.removeChild(P2[m4]), P2.length ? v3.insertBefore(T2, P2[m4]) : v3.appendChild(T2);
          }
        }
      }, function(t, o4) {
        t.exports = function(i) {
          var s2 = typeof window < "u" && window.location;
          if (!s2)
            throw new Error("fixUrls requires window.location");
          if (!i || typeof i != "string")
            return i;
          var r2 = s2.protocol + "//" + s2.host, l3 = r2 + s2.pathname.replace(/\/[^\/]*$/, "/");
          return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(a4, c2) {
            var u2, h4 = c2.trim().replace(/^"(.*)"$/, function(p4, g5) {
              return g5;
            }).replace(/^'(.*)'$/, function(p4, g5) {
              return g5;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h4) ? a4 : (u2 = h4.indexOf("//") === 0 ? h4 : h4.indexOf("/") === 0 ? r2 + h4 : l3 + h4.replace(/^\.\//, ""), "url(" + JSON.stringify(u2) + ")");
          });
        };
      }, function(t, o4, i) {
        var s2, r2, l3, a4, c2, u2, h4, p4, g5;
        t.exports = (s2 = "cdx-notifies", r2 = "cdx-notify", l3 = "cdx-notify__cross", a4 = "cdx-notify__button--confirm", c2 = "cdx-notify__button--cancel", u2 = "cdx-notify__input", h4 = "cdx-notify__button", p4 = "cdx-notify__btns-wrapper", { alert: g5 = function(f2) {
          var k3 = document.createElement("DIV"), C3 = document.createElement("DIV"), S2 = f2.message, _2 = f2.style;
          return k3.classList.add(r2), _2 && k3.classList.add(r2 + "--" + _2), k3.innerHTML = S2, C3.classList.add(l3), C3.addEventListener("click", k3.remove.bind(k3)), k3.appendChild(C3), k3;
        }, confirm: function(f2) {
          var k3 = g5(f2), C3 = document.createElement("div"), S2 = document.createElement("button"), _2 = document.createElement("button"), ee2 = k3.querySelector("." + l3), j2 = f2.cancelHandler, $2 = f2.okHandler;
          return C3.classList.add(p4), S2.innerHTML = f2.okText || "Confirm", _2.innerHTML = f2.cancelText || "Cancel", S2.classList.add(h4), _2.classList.add(h4), S2.classList.add(a4), _2.classList.add(c2), j2 && typeof j2 == "function" && (_2.addEventListener("click", j2), ee2.addEventListener("click", j2)), $2 && typeof $2 == "function" && S2.addEventListener("click", $2), S2.addEventListener("click", k3.remove.bind(k3)), _2.addEventListener("click", k3.remove.bind(k3)), C3.appendChild(S2), C3.appendChild(_2), k3.appendChild(C3), k3;
        }, prompt: function(f2) {
          var k3 = g5(f2), C3 = document.createElement("div"), S2 = document.createElement("button"), _2 = document.createElement("input"), ee2 = k3.querySelector("." + l3), j2 = f2.cancelHandler, $2 = f2.okHandler;
          return C3.classList.add(p4), S2.innerHTML = f2.okText || "Ok", S2.classList.add(h4), S2.classList.add(a4), _2.classList.add(u2), f2.placeholder && _2.setAttribute("placeholder", f2.placeholder), f2.default && (_2.value = f2.default), f2.inputType && (_2.type = f2.inputType), j2 && typeof j2 == "function" && ee2.addEventListener("click", j2), $2 && typeof $2 == "function" && S2.addEventListener("click", function() {
            $2(_2.value);
          }), S2.addEventListener("click", k3.remove.bind(k3)), C3.appendChild(_2), C3.appendChild(S2), k3.appendChild(C3), k3;
        }, getWrapper: function() {
          var f2 = document.createElement("DIV");
          return f2.classList.add(s2), f2;
        } });
      }]);
    });
  })(Ut);
  var Xo = Ut.exports;
  var Vo = /* @__PURE__ */ Fe(Xo);
  var qo = class {
    /**
     * Show web notification
     *
     * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
     */
    show(e) {
      Vo.show(e);
    }
  };
  var Zo = class extends y {
    /**
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.notifier = new qo();
    }
    /**
     * Available methods
     */
    get methods() {
      return {
        show: (e) => this.show(e)
      };
    }
    /**
     * Show notification
     *
     * @param {NotifierOptions} options - message option
     */
    show(e) {
      return this.notifier.show(e);
    }
  };
  var Go = class extends y {
    /**
     * Available methods
     */
    get methods() {
      const e = () => this.isEnabled;
      return {
        toggle: (t) => this.toggle(t),
        get isEnabled() {
          return e();
        }
      };
    }
    /**
     * Set or toggle read-only state
     *
     * @param {boolean|undefined} state - set or toggle state
     * @returns {boolean} current value
     */
    toggle(e) {
      return this.Editor.ReadOnly.toggle(e);
    }
    /**
     * Returns current read-only state
     */
    get isEnabled() {
      return this.Editor.ReadOnly.isEnabled;
    }
  };
  var jt = { exports: {} };
  (function(n, e) {
    (function(t, o4) {
      n.exports = o4();
    })(ko, function() {
      function t(h4) {
        var p4 = h4.tags, g5 = Object.keys(p4), f2 = g5.map(function(k3) {
          return typeof p4[k3];
        }).every(function(k3) {
          return k3 === "object" || k3 === "boolean" || k3 === "function";
        });
        if (!f2)
          throw new Error("The configuration was invalid");
        this.config = h4;
      }
      var o4 = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
      function i(h4) {
        return o4.indexOf(h4.nodeName) !== -1;
      }
      var s2 = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
      function r2(h4) {
        return s2.indexOf(h4.nodeName) !== -1;
      }
      t.prototype.clean = function(h4) {
        const p4 = document.implementation.createHTMLDocument(), g5 = p4.createElement("div");
        return g5.innerHTML = h4, this._sanitize(p4, g5), g5.innerHTML;
      }, t.prototype._sanitize = function(h4, p4) {
        var g5 = l3(h4, p4), f2 = g5.firstChild();
        if (f2)
          do {
            if (f2.nodeType === Node.TEXT_NODE)
              if (f2.data.trim() === "" && (f2.previousElementSibling && i(f2.previousElementSibling) || f2.nextElementSibling && i(f2.nextElementSibling))) {
                p4.removeChild(f2), this._sanitize(h4, p4);
                break;
              } else
                continue;
            if (f2.nodeType === Node.COMMENT_NODE) {
              p4.removeChild(f2), this._sanitize(h4, p4);
              break;
            }
            var k3 = r2(f2), C3;
            k3 && (C3 = Array.prototype.some.call(f2.childNodes, i));
            var S2 = !!p4.parentNode, _2 = i(p4) && i(f2) && S2, ee2 = f2.nodeName.toLowerCase(), j2 = a4(this.config, ee2, f2), $2 = k3 && C3;
            if ($2 || c2(f2, j2) || !this.config.keepNestedBlockElements && _2) {
              if (!(f2.nodeName === "SCRIPT" || f2.nodeName === "STYLE"))
                for (; f2.childNodes.length > 0; )
                  p4.insertBefore(f2.childNodes[0], f2);
              p4.removeChild(f2), this._sanitize(h4, p4);
              break;
            }
            for (var oe2 = 0; oe2 < f2.attributes.length; oe2 += 1) {
              var fe2 = f2.attributes[oe2];
              u2(fe2, j2, f2) && (f2.removeAttribute(fe2.name), oe2 = oe2 - 1);
            }
            this._sanitize(h4, f2);
          } while (f2 = g5.nextSibling());
      };
      function l3(h4, p4) {
        return h4.createTreeWalker(
          p4,
          NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
          null,
          false
        );
      }
      function a4(h4, p4, g5) {
        return typeof h4.tags[p4] == "function" ? h4.tags[p4](g5) : h4.tags[p4];
      }
      function c2(h4, p4) {
        return typeof p4 > "u" ? true : typeof p4 == "boolean" ? !p4 : false;
      }
      function u2(h4, p4, g5) {
        var f2 = h4.name.toLowerCase();
        return p4 === true ? false : typeof p4[f2] == "function" ? !p4[f2](h4.value, g5) : typeof p4[f2] > "u" || p4[f2] === false ? true : typeof p4[f2] == "string" ? p4[f2] !== h4.value : false;
      }
      return t;
    });
  })(jt);
  var Jo = jt.exports;
  var Qo = /* @__PURE__ */ Fe(Jo);
  function it(n, e) {
    return n.map((t) => {
      const o4 = O(e) ? e(t.tool) : e;
      return V(o4) || (t.data = st(t.data, o4)), t;
    });
  }
  function q(n, e = {}) {
    const t = {
      tags: e
    };
    return new Qo(t).clean(n);
  }
  function st(n, e) {
    return Array.isArray(n) ? ei(n, e) : R(n) ? ti(n, e) : Q(n) ? oi(n, e) : n;
  }
  function ei(n, e) {
    return n.map((t) => st(t, e));
  }
  function ti(n, e) {
    const t = {};
    for (const o4 in n) {
      if (!Object.prototype.hasOwnProperty.call(n, o4))
        continue;
      const i = n[o4], s2 = ii(e[o4]) ? e[o4] : e;
      t[o4] = st(i, s2);
    }
    return t;
  }
  function oi(n, e) {
    return R(e) ? q(n, e) : e === false ? q(n, {}) : n;
  }
  function ii(n) {
    return R(n) || yo(n) || O(n);
  }
  var si = class extends y {
    /**
     * Available methods
     *
     * @returns {SanitizerConfig}
     */
    get methods() {
      return {
        clean: (e, t) => this.clean(e, t)
      };
    }
    /**
     * Perform sanitizing of a string
     *
     * @param {string} taintString - what to sanitize
     * @param {SanitizerConfig} config - sanitizer config
     * @returns {string}
     */
    clean(e, t) {
      return q(e, t);
    }
  };
  var ni = class extends y {
    /**
     * Available methods
     *
     * @returns {Saver}
     */
    get methods() {
      return {
        save: () => this.save()
      };
    }
    /**
     * Return Editor's data
     *
     * @returns {OutputData}
     */
    save() {
      const e = "Editor's content can not be saved in read-only mode";
      return this.Editor.ReadOnly.isEnabled ? (X(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
    }
  };
  var ri = class extends y {
    constructor() {
      super(...arguments), this.selectionUtils = new b();
    }
    /**
     * Available methods
     *
     * @returns {SelectionAPIInterface}
     */
    get methods() {
      return {
        findParentTag: (e, t) => this.findParentTag(e, t),
        expandToTag: (e) => this.expandToTag(e),
        save: () => this.selectionUtils.save(),
        restore: () => this.selectionUtils.restore(),
        setFakeBackground: () => this.selectionUtils.setFakeBackground(),
        removeFakeBackground: () => this.selectionUtils.removeFakeBackground()
      };
    }
    /**
     * Looks ahead from selection and find passed tag with class name
     *
     * @param {string} tagName - tag to find
     * @param {string} className - tag's class name
     * @returns {HTMLElement|null}
     */
    findParentTag(e, t) {
      return this.selectionUtils.findParentTag(e, t);
    }
    /**
     * Expand selection to passed tag
     *
     * @param {HTMLElement} node - tag that should contain selection
     */
    expandToTag(e) {
      this.selectionUtils.expandToTag(e);
    }
  };
  var li = class extends y {
    /**
     * Available methods
     */
    get methods() {
      return {
        getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values())
      };
    }
  };
  var ai = class extends y {
    /**
     * Exported classes
     */
    get classes() {
      return {
        /**
         * Base Block styles
         */
        block: "cdx-block",
        /**
         * Inline Tools styles
         */
        inlineToolButton: "ce-inline-tool",
        inlineToolButtonActive: "ce-inline-tool--active",
        /**
         * UI elements
         */
        input: "cdx-input",
        loader: "cdx-loader",
        button: "cdx-button",
        /**
         * Settings styles
         */
        settingsButton: "cdx-settings-button",
        settingsButtonActive: "cdx-settings-button--active"
      };
    }
  };
  var ci = class extends y {
    /**
     * Available methods
     *
     * @returns {Toolbar}
     */
    get methods() {
      return {
        close: () => this.close(),
        open: () => this.open(),
        toggleBlockSettings: (e) => this.toggleBlockSettings(e),
        toggleToolbox: (e) => this.toggleToolbox(e)
      };
    }
    /**
     * Open toolbar
     */
    open() {
      this.Editor.Toolbar.moveAndOpen();
    }
    /**
     * Close toolbar and all included elements
     */
    close() {
      this.Editor.Toolbar.close();
    }
    /**
     * Toggles Block Setting of the current block
     *
     * @param {boolean} openingState —  opening state of Block Setting
     */
    toggleBlockSettings(e) {
      if (this.Editor.BlockManager.currentBlockIndex === -1) {
        X("Could't toggle the Toolbar because there is no block selected ", "warn");
        return;
      }
      e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
    }
    /**
     * Open toolbox
     *
     * @param {boolean} openingState - Opening state of toolbox
     */
    toggleToolbox(e) {
      if (this.Editor.BlockManager.currentBlockIndex === -1) {
        X("Could't toggle the Toolbox because there is no block selected ", "warn");
        return;
      }
      e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
    }
  };
  var $t = { exports: {} };
  (function(n, e) {
    (function(t, o4) {
      n.exports = o4();
    })(window, function() {
      return function(t) {
        var o4 = {};
        function i(s2) {
          if (o4[s2])
            return o4[s2].exports;
          var r2 = o4[s2] = { i: s2, l: false, exports: {} };
          return t[s2].call(r2.exports, r2, r2.exports, i), r2.l = true, r2.exports;
        }
        return i.m = t, i.c = o4, i.d = function(s2, r2, l3) {
          i.o(s2, r2) || Object.defineProperty(s2, r2, { enumerable: true, get: l3 });
        }, i.r = function(s2) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s2, "__esModule", { value: true });
        }, i.t = function(s2, r2) {
          if (1 & r2 && (s2 = i(s2)), 8 & r2 || 4 & r2 && typeof s2 == "object" && s2 && s2.__esModule)
            return s2;
          var l3 = /* @__PURE__ */ Object.create(null);
          if (i.r(l3), Object.defineProperty(l3, "default", { enumerable: true, value: s2 }), 2 & r2 && typeof s2 != "string")
            for (var a4 in s2)
              i.d(l3, a4, function(c2) {
                return s2[c2];
              }.bind(null, a4));
          return l3;
        }, i.n = function(s2) {
          var r2 = s2 && s2.__esModule ? function() {
            return s2.default;
          } : function() {
            return s2;
          };
          return i.d(r2, "a", r2), r2;
        }, i.o = function(s2, r2) {
          return Object.prototype.hasOwnProperty.call(s2, r2);
        }, i.p = "", i(i.s = 0);
      }([function(t, o4, i) {
        t.exports = i(1);
      }, function(t, o4, i) {
        i.r(o4), i.d(o4, "default", function() {
          return s2;
        });
        class s2 {
          constructor() {
            this.nodes = { wrapper: null, content: null }, this.showed = false, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
              this.showed && this.hide(true);
            }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: true });
          }
          get CSS() {
            return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
          }
          show(l3, a4, c2) {
            this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
            const u2 = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c2);
            if (u2.hidingDelay && (this.hidingDelay = u2.hidingDelay), this.nodes.content.innerHTML = "", typeof a4 == "string")
              this.nodes.content.appendChild(document.createTextNode(a4));
            else {
              if (!(a4 instanceof Node))
                throw Error("[CodeX Tooltip] Wrong type of \xABcontent\xBB passed. It should be an instance of Node or String. But " + typeof a4 + " given.");
              this.nodes.content.appendChild(a4);
            }
            switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u2.placement) {
              case "top":
                this.placeTop(l3, u2);
                break;
              case "left":
                this.placeLeft(l3, u2);
                break;
              case "right":
                this.placeRight(l3, u2);
                break;
              case "bottom":
              default:
                this.placeBottom(l3, u2);
            }
            u2 && u2.delay ? this.showingTimeout = setTimeout(() => {
              this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
            }, u2.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
          }
          hide(l3 = false) {
            if (this.hidingDelay && !l3)
              return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
                this.hide(true);
              }, this.hidingDelay));
            this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = false, this.showingTimeout && clearTimeout(this.showingTimeout);
          }
          onHover(l3, a4, c2) {
            l3.addEventListener("mouseenter", () => {
              this.show(l3, a4, c2);
            }), l3.addEventListener("mouseleave", () => {
              this.hide();
            });
          }
          destroy() {
            this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
          }
          prepare() {
            this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
          }
          loadStyles() {
            const l3 = "codex-tooltips-style";
            if (document.getElementById(l3))
              return;
            const a4 = i(2), c2 = this.make("style", null, { textContent: a4.toString(), id: l3 });
            this.prepend(document.head, c2);
          }
          placeBottom(l3, a4) {
            const c2 = l3.getBoundingClientRect(), u2 = c2.left + l3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h4 = c2.bottom + window.pageYOffset + this.offsetTop + a4.marginTop;
            this.applyPlacement("bottom", u2, h4);
          }
          placeTop(l3, a4) {
            const c2 = l3.getBoundingClientRect(), u2 = c2.left + l3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h4 = c2.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
            this.applyPlacement("top", u2, h4);
          }
          placeLeft(l3, a4) {
            const c2 = l3.getBoundingClientRect(), u2 = c2.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - a4.marginLeft, h4 = c2.top + window.pageYOffset + l3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("left", u2, h4);
          }
          placeRight(l3, a4) {
            const c2 = l3.getBoundingClientRect(), u2 = c2.right + this.offsetRight + a4.marginRight, h4 = c2.top + window.pageYOffset + l3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("right", u2, h4);
          }
          applyPlacement(l3, a4, c2) {
            this.nodes.wrapper.classList.add(this.CSS.placement[l3]), this.nodes.wrapper.style.left = a4 + "px", this.nodes.wrapper.style.top = c2 + "px";
          }
          make(l3, a4 = null, c2 = {}) {
            const u2 = document.createElement(l3);
            Array.isArray(a4) ? u2.classList.add(...a4) : a4 && u2.classList.add(a4);
            for (const h4 in c2)
              c2.hasOwnProperty(h4) && (u2[h4] = c2[h4]);
            return u2;
          }
          append(l3, a4) {
            Array.isArray(a4) ? a4.forEach((c2) => l3.appendChild(c2)) : l3.appendChild(a4);
          }
          prepend(l3, a4) {
            Array.isArray(a4) ? (a4 = a4.reverse()).forEach((c2) => l3.prepend(c2)) : l3.prepend(a4);
          }
        }
      }, function(t, o4) {
        t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
      }]).default;
    });
  })($t);
  var di = $t.exports;
  var hi = /* @__PURE__ */ Fe(di);
  var U = null;
  function nt() {
    U || (U = new hi());
  }
  function ui(n, e, t) {
    nt(), U == null || U.show(n, e, t);
  }
  function Ne(n = false) {
    nt(), U == null || U.hide(n);
  }
  function Pe(n, e, t) {
    nt(), U == null || U.onHover(n, e, t);
  }
  function pi() {
    U == null || U.destroy(), U = null;
  }
  var fi = class extends y {
    /**
     * @class
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      });
    }
    /**
     * Available methods
     */
    get methods() {
      return {
        show: (e, t, o4) => this.show(e, t, o4),
        hide: () => this.hide(),
        onHover: (e, t, o4) => this.onHover(e, t, o4)
      };
    }
    /**
     * Method show tooltip on element with passed HTML content
     *
     * @param {HTMLElement} element - element on which tooltip should be shown
     * @param {TooltipContent} content - tooltip content
     * @param {TooltipOptions} options - tooltip options
     */
    show(e, t, o4) {
      ui(e, t, o4);
    }
    /**
     * Method hides tooltip on HTML page
     */
    hide() {
      Ne();
    }
    /**
     * Decorator for showing Tooltip by mouseenter/mouseleave
     *
     * @param {HTMLElement} element - element on which tooltip should be shown
     * @param {TooltipContent} content - tooltip content
     * @param {TooltipOptions} options - tooltip options
     */
    onHover(e, t, o4) {
      Pe(e, t, o4);
    }
  };
  var gi = class extends y {
    /**
     * Available methods / getters
     */
    get methods() {
      return {
        nodes: this.editorNodes
        /**
         * There can be added some UI methods, like toggleThinMode() etc
         */
      };
    }
    /**
     * Exported classes
     */
    get editorNodes() {
      return {
        /**
         * Top-level editor instance wrapper
         */
        wrapper: this.Editor.UI.nodes.wrapper,
        /**
         * Element that holds all the Blocks
         */
        redactor: this.Editor.UI.nodes.redactor
      };
    }
  };
  function Yt(n, e) {
    const t = {};
    return Object.entries(n).forEach(([o4, i]) => {
      if (R(i)) {
        const s2 = e ? `${e}.${o4}` : o4;
        Object.values(i).every((l3) => Q(l3)) ? t[o4] = s2 : t[o4] = Yt(i, s2);
        return;
      }
      t[o4] = i;
    }), t;
  }
  var K = Yt(_t);
  function mi(n, e) {
    const t = {};
    return Object.keys(n).forEach((o4) => {
      const i = e[o4];
      i !== void 0 ? t[i] = n[o4] : t[o4] = n[o4];
    }), t;
  }
  var Wt = class ve {
    /**
     * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
     * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
     */
    constructor(e, t) {
      this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = t;
    }
    /**
     * Returns Focused button Node
     *
     * @returns {HTMLElement}
     */
    get currentItem() {
      return this.cursor === -1 ? null : this.items[this.cursor];
    }
    /**
     * Sets cursor to specified position
     *
     * @param cursorPosition - new cursor position
     */
    setCursor(e) {
      e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
    }
    /**
     * Sets items. Can be used when iterable items changed dynamically
     *
     * @param {HTMLElement[]} nodeList - nodes to iterate
     */
    setItems(e) {
      this.items = e;
    }
    /**
     * Sets cursor next to the current
     */
    next() {
      this.cursor = this.leafNodesAndReturnIndex(ve.directions.RIGHT);
    }
    /**
     * Sets cursor before current
     */
    previous() {
      this.cursor = this.leafNodesAndReturnIndex(ve.directions.LEFT);
    }
    /**
     * Sets cursor to the default position and removes CSS-class from previously focused item
     */
    dropCursor() {
      this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
    }
    /**
     * Leafs nodes inside the target list from active element
     *
     * @param {string} direction - leaf direction. Can be 'left' or 'right'
     * @returns {number} index of focused node
     */
    leafNodesAndReturnIndex(e) {
      if (this.items.length === 0)
        return this.cursor;
      let t = this.cursor;
      return t === -1 ? t = e === ve.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === ve.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, d.canSetCaret(this.items[t]) && Oe(() => b.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
    }
  };
  Wt.directions = {
    RIGHT: "right",
    LEFT: "left"
  };
  var me = Wt;
  var le = class _le {
    /**
     * @param options - different constructing settings
     */
    constructor(e) {
      this.iterator = null, this.activated = false, this.flipCallbacks = [], this.onKeyDown = (t) => {
        if (this.isEventReadyForHandling(t))
          switch (_le.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
            case w.TAB:
              this.handleTabPress(t);
              break;
            case w.LEFT:
            case w.UP:
              this.flipLeft();
              break;
            case w.RIGHT:
            case w.DOWN:
              this.flipRight();
              break;
            case w.ENTER:
              this.handleEnterPress(t);
              break;
          }
      }, this.iterator = new me(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || _le.usedKeys;
    }
    /**
     * True if flipper is currently activated
     */
    get isActivated() {
      return this.activated;
    }
    /**
     * Array of keys (codes) that is handled by Flipper
     * Used to:
     *  - preventDefault only for this keys, not all keydowns (@see constructor)
     *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
     */
    static get usedKeys() {
      return [
        w.TAB,
        w.LEFT,
        w.RIGHT,
        w.ENTER,
        w.UP,
        w.DOWN
      ];
    }
    /**
     * Active tab/arrows handling by flipper
     *
     * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
     * @param cursorPosition - index of the item that should be focused once flipper is activated
     */
    activate(e, t) {
      this.activated = true, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, true);
    }
    /**
     * Disable tab/arrows handling by flipper
     */
    deactivate() {
      this.activated = false, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
    }
    /**
     * Focus first item
     */
    focusFirst() {
      this.dropCursor(), this.flipRight();
    }
    /**
     * Focuses previous flipper iterator item
     */
    flipLeft() {
      this.iterator.previous(), this.flipCallback();
    }
    /**
     * Focuses next flipper iterator item
     */
    flipRight() {
      this.iterator.next(), this.flipCallback();
    }
    /**
     * Return true if some button is focused
     */
    hasFocus() {
      return !!this.iterator.currentItem;
    }
    /**
     * Registeres function that should be executed on each navigation action
     *
     * @param cb - function to execute
     */
    onFlip(e) {
      this.flipCallbacks.push(e);
    }
    /**
     * Unregisteres function that is executed on each navigation action
     *
     * @param cb - function to stop executing
     */
    removeOnFlip(e) {
      this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
    }
    /**
     * Drops flipper's iterator cursor
     *
     * @see DomIterator#dropCursor
     */
    dropCursor() {
      this.iterator.dropCursor();
    }
    /**
     * This function is fired before handling flipper keycodes
     * The result of this function defines if it is need to be handled or not
     *
     * @param {KeyboardEvent} event - keydown keyboard event
     * @returns {boolean}
     */
    isEventReadyForHandling(e) {
      return this.activated && this.allowedKeys.includes(e.keyCode);
    }
    /**
     * When flipper is activated tab press will leaf the items
     *
     * @param {KeyboardEvent} event - tab keydown event
     */
    handleTabPress(e) {
      switch (e.shiftKey ? me.directions.LEFT : me.directions.RIGHT) {
        case me.directions.RIGHT:
          this.flipRight();
          break;
        case me.directions.LEFT:
          this.flipLeft();
          break;
      }
    }
    /**
     * Enter press will click current item if flipper is activated
     *
     * @param {KeyboardEvent} event - enter keydown event
     */
    handleEnterPress(e) {
      this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), O(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
    }
    /**
     * Fired after flipping in any direction
     */
    flipCallback() {
      this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
    }
  };
  var bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>';
  var ki = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>';
  var vi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>';
  var wi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>';
  var xi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>';
  var yi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>';
  var Ei = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>';
  var Bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>';
  var yt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>';
  var Ti = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>';
  var Ci = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>';
  var Kt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>';
  var Si = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var Ii = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var Mi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
  var Ai = "__";
  var Oi = "--";
  function te(n) {
    return (e, t) => [[n, e].filter((i) => !!i).join(Ai), t].filter((i) => !!i).join(Oi);
  }
  var be = te("ce-hint");
  var ke = {
    root: be(),
    alignedStart: be(null, "align-left"),
    alignedCenter: be(null, "align-center"),
    title: be("title"),
    description: be("description")
  };
  var Li = class {
    /**
     * Constructs the hint content instance
     *
     * @param params - hint content parameters
     */
    constructor(e) {
      this.nodes = {
        root: d.make("div", [ke.root, e.alignment === "center" ? ke.alignedCenter : ke.alignedStart]),
        title: d.make("div", ke.title, { textContent: e.title })
      }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = d.make("div", ke.description, { textContent: e.description }), this.nodes.root.appendChild(this.nodes.description));
    }
    /**
     * Returns the root element of the hint content
     */
    getElement() {
      return this.nodes.root;
    }
  };
  var rt = class {
    /**
     * Constructs the instance
     *
     * @param params - instance parameters
     */
    constructor(e) {
      this.params = e;
    }
    /**
     * Item name if exists
     */
    get name() {
      if (this.params !== void 0 && "name" in this.params)
        return this.params.name;
    }
    /**
     * Destroys the instance
     */
    destroy() {
      Ne();
    }
    /**
     * Called when children popover is opened (if exists)
     */
    onChildrenOpen() {
      var e;
      this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onOpen) == "function" && this.params.children.onOpen();
    }
    /**
     * Called when children popover is closed (if exists)
     */
    onChildrenClose() {
      var e;
      this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onClose) == "function" && this.params.children.onClose();
    }
    /**
     * Called on popover item click
     */
    handleClick() {
      var e, t;
      this.params !== void 0 && "onActivate" in this.params && ((t = (e = this.params).onActivate) == null || t.call(e, this.params));
    }
    /**
     * Adds hint to the item element if hint data is provided
     *
     * @param itemElement - popover item root element to add hint to
     * @param hintData - hint data
     */
    addHint(e, t) {
      const o4 = new Li(t);
      Pe(e, o4.getElement(), {
        placement: t.position,
        hidingDelay: 100
      });
    }
    /**
     * Returns item children that are represented as popover items
     */
    get children() {
      var e;
      return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.items) !== void 0 ? this.params.children.items : [];
    }
    /**
     * Returns true if item has any type of children
     */
    get hasChildren() {
      return this.children.length > 0;
    }
    /**
     * Returns true if item children should be open instantly after popover is opened and not on item click/hover
     */
    get isChildrenOpen() {
      var e;
      return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.isOpen) === true;
    }
    /**
     * True if item children items should be navigatable via keyboard
     */
    get isChildrenFlippable() {
      var e;
      return !(this.params === void 0 || !("children" in this.params) || ((e = this.params.children) == null ? void 0 : e.isFlippable) === false);
    }
    /**
     * Returns true if item has children that should be searchable
     */
    get isChildrenSearchable() {
      var e;
      return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.searchable) === true;
    }
    /**
     * True if popover should close once item is activated
     */
    get closeOnActivate() {
      return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
    }
    /**
     * True if item is active
     */
    get isActive() {
      return this.params === void 0 || !("isActive" in this.params) ? false : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === true;
    }
  };
  var W = te("ce-popover-item");
  var L = {
    container: W(),
    active: W(null, "active"),
    disabled: W(null, "disabled"),
    focused: W(null, "focused"),
    hidden: W(null, "hidden"),
    confirmationState: W(null, "confirmation"),
    noHover: W(null, "no-hover"),
    noFocus: W(null, "no-focus"),
    title: W("title"),
    secondaryTitle: W("secondary-title"),
    icon: W("icon"),
    iconTool: W("icon", "tool"),
    iconChevronRight: W("icon", "chevron-right"),
    wobbleAnimation: te("wobble")()
  };
  var se = class extends rt {
    /**
     * Constructs popover item instance
     *
     * @param params - popover item construction params
     * @param renderParams - popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t) {
      super(e), this.params = e, this.nodes = {
        root: null,
        icon: null
      }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
        var o4;
        (o4 = this.nodes.root) == null || o4.classList.remove(L.noFocus);
      }, this.removeSpecialHoverBehavior = () => {
        var o4;
        (o4 = this.nodes.root) == null || o4.classList.remove(L.noHover);
      }, this.onErrorAnimationEnd = () => {
        var o4, i;
        (o4 = this.nodes.icon) == null || o4.classList.remove(L.wobbleAnimation), (i = this.nodes.icon) == null || i.removeEventListener("animationend", this.onErrorAnimationEnd);
      }, this.nodes.root = this.make(e, t);
    }
    /**
     * True if item is disabled and hence not clickable
     */
    get isDisabled() {
      return this.params.isDisabled === true;
    }
    /**
     * Exposes popover item toggle parameter
     */
    get toggle() {
      return this.params.toggle;
    }
    /**
     * Item title
     */
    get title() {
      return this.params.title;
    }
    /**
     * True if confirmation state is enabled for popover item
     */
    get isConfirmationStateEnabled() {
      return this.confirmationState !== null;
    }
    /**
     * True if item is focused in keyboard navigation process
     */
    get isFocused() {
      return this.nodes.root === null ? false : this.nodes.root.classList.contains(L.focused);
    }
    /**
     * Returns popover item root element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Called on popover item click
     */
    handleClick() {
      if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
        this.activateOrEnableConfirmationMode(this.confirmationState);
        return;
      }
      this.activateOrEnableConfirmationMode(this.params);
    }
    /**
     * Toggles item active state
     *
     * @param isActive - true if item should strictly should become active
     */
    toggleActive(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(L.active, e);
    }
    /**
     * Toggles item hidden state
     *
     * @param isHidden - true if item should be hidden
     */
    toggleHidden(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(L.hidden, e);
    }
    /**
     * Resets popover item to its original state
     */
    reset() {
      this.isConfirmationStateEnabled && this.disableConfirmationMode();
    }
    /**
     * Method called once item becomes focused during keyboard navigation
     */
    onFocus() {
      this.disableSpecialHoverAndFocusBehavior();
    }
    /**
     * Constructs HTML element corresponding to popover item params
     *
     * @param params - item construction params
     * @param renderParams - popover item render params
     */
    make(e, t) {
      var s2, r2;
      const o4 = (t == null ? void 0 : t.wrapperTag) || "div", i = d.make(o4, L.container, {
        type: o4 === "button" ? "button" : void 0
      });
      return e.name && (i.dataset.itemName = e.name), this.nodes.icon = d.make("div", [L.icon, L.iconTool], {
        innerHTML: e.icon || Ei
      }), i.appendChild(this.nodes.icon), e.title !== void 0 && i.appendChild(d.make("div", L.title, {
        innerHTML: e.title || ""
      })), e.secondaryLabel && i.appendChild(d.make("div", L.secondaryTitle, {
        textContent: e.secondaryLabel
      })), this.hasChildren && i.appendChild(d.make("div", [L.icon, L.iconChevronRight], {
        innerHTML: wi
      })), this.isActive && i.classList.add(L.active), e.isDisabled && i.classList.add(L.disabled), e.hint !== void 0 && ((s2 = t == null ? void 0 : t.hint) == null ? void 0 : s2.enabled) !== false && this.addHint(i, {
        ...e.hint,
        position: ((r2 = t == null ? void 0 : t.hint) == null ? void 0 : r2.position) || "right"
      }), i;
    }
    /**
     * Activates confirmation mode for the item.
     *
     * @param newState - new popover item params that should be applied
     */
    enableConfirmationMode(e) {
      if (this.nodes.root === null)
        return;
      const t = {
        ...this.params,
        ...e,
        confirmation: "confirmation" in e ? e.confirmation : void 0
      }, o4 = this.make(t);
      this.nodes.root.innerHTML = o4.innerHTML, this.nodes.root.classList.add(L.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
    }
    /**
     * Returns item to its original state
     */
    disableConfirmationMode() {
      if (this.nodes.root === null)
        return;
      const e = this.make(this.params);
      this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(L.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
    }
    /**
     * Enables special focus and hover behavior for item in confirmation state.
     * This is needed to prevent item from being highlighted as hovered/focused just after click.
     */
    enableSpecialHoverAndFocusBehavior() {
      var e, t, o4;
      (e = this.nodes.root) == null || e.classList.add(L.noHover), (t = this.nodes.root) == null || t.classList.add(L.noFocus), (o4 = this.nodes.root) == null || o4.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: true });
    }
    /**
     * Disables special focus and hover behavior
     */
    disableSpecialHoverAndFocusBehavior() {
      var e;
      this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e = this.nodes.root) == null || e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
    }
    /**
     * Executes item's onActivate callback if the item has no confirmation configured
     *
     * @param item - item to activate or bring to confirmation mode
     */
    activateOrEnableConfirmationMode(e) {
      var t;
      if (!("confirmation" in e) || e.confirmation === void 0)
        try {
          (t = e.onActivate) == null || t.call(e, e), this.disableConfirmationMode();
        } catch {
          this.animateError();
        }
      else
        this.enableConfirmationMode(e.confirmation);
    }
    /**
     * Animates item which symbolizes that error occured while executing 'onActivate()' callback
     */
    animateError() {
      var e, t, o4;
      (e = this.nodes.icon) != null && e.classList.contains(L.wobbleAnimation) || ((t = this.nodes.icon) == null || t.classList.add(L.wobbleAnimation), (o4 = this.nodes.icon) == null || o4.addEventListener("animationend", this.onErrorAnimationEnd));
    }
  };
  var Ue = te("ce-popover-item-separator");
  var je = {
    container: Ue(),
    line: Ue("line"),
    hidden: Ue(null, "hidden")
  };
  var Xt = class extends rt {
    /**
     * Constructs the instance
     */
    constructor() {
      super(), this.nodes = {
        root: d.make("div", je.container),
        line: d.make("div", je.line)
      }, this.nodes.root.appendChild(this.nodes.line);
    }
    /**
     * Returns popover separator root element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Toggles item hidden state
     *
     * @param isHidden - true if item should be hidden
     */
    toggleHidden(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(je.hidden, e);
    }
  };
  var Z = /* @__PURE__ */ ((n) => (n.Closed = "closed", n.ClosedOnActivate = "closed-on-activate", n))(Z || {});
  var H = te("ce-popover");
  var N = {
    popover: H(),
    popoverContainer: H("container"),
    popoverOpenTop: H(null, "open-top"),
    popoverOpenLeft: H(null, "open-left"),
    popoverOpened: H(null, "opened"),
    search: H("search"),
    nothingFoundMessage: H("nothing-found-message"),
    nothingFoundMessageDisplayed: H("nothing-found-message", "displayed"),
    items: H("items"),
    overlay: H("overlay"),
    overlayHidden: H("overlay", "hidden"),
    popoverNested: H(null, "nested"),
    getPopoverNestedClass: (n) => H(null, `nested-level-${n.toString()}`),
    popoverInline: H(null, "inline"),
    popoverHeader: H("header")
  };
  var de = /* @__PURE__ */ ((n) => (n.NestingLevel = "--nesting-level", n.PopoverHeight = "--popover-height", n.InlinePopoverWidth = "--inline-popover-width", n.TriggerItemLeft = "--trigger-item-left", n.TriggerItemTop = "--trigger-item-top", n))(de || {});
  var Et = te("ce-popover-item-html");
  var Bt = {
    root: Et(),
    hidden: Et(null, "hidden")
  };
  var Ee = class extends rt {
    /**
     * Constructs the instance
     *
     * @param params – instance parameters
     * @param renderParams – popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t) {
      var o4, i;
      super(e), this.nodes = {
        root: d.make("div", Bt.root)
      }, this.nodes.root.appendChild(e.element), e.name && (this.nodes.root.dataset.itemName = e.name), e.hint !== void 0 && ((o4 = t == null ? void 0 : t.hint) == null ? void 0 : o4.enabled) !== false && this.addHint(this.nodes.root, {
        ...e.hint,
        position: ((i = t == null ? void 0 : t.hint) == null ? void 0 : i.position) || "right"
      });
    }
    /**
     * Returns popover item root element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Toggles item hidden state
     *
     * @param isHidden - true if item should be hidden
     */
    toggleHidden(e) {
      var t;
      (t = this.nodes.root) == null || t.classList.toggle(Bt.hidden, e);
    }
    /**
     * Returns list of buttons and inputs inside custom content
     */
    getControls() {
      const e = this.nodes.root.querySelectorAll(
        `button, ${d.allInputsSelector}`
      );
      return Array.from(e);
    }
  };
  var Vt = class extends Te {
    /**
     * Constructs the instance
     *
     * @param params - popover construction params
     * @param itemsRenderParams - popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t = {}) {
      super(), this.params = e, this.itemsRenderParams = t, this.listeners = new Ce(), this.messages = {
        nothingFound: "Nothing found",
        search: "Search"
      }, this.items = this.buildItems(e.items), e.messages && (this.messages = {
        ...this.messages,
        ...e.messages
      }), this.nodes = {}, this.nodes.popoverContainer = d.make("div", [N.popoverContainer]), this.nodes.nothingFoundMessage = d.make("div", [N.nothingFoundMessage], {
        textContent: this.messages.nothingFound
      }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d.make("div", [N.items]), this.items.forEach((o4) => {
        const i = o4.getElement();
        i !== null && this.nodes.items.appendChild(i);
      }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", (o4) => this.handleClick(o4)), this.nodes.popover = d.make("div", [
        N.popover,
        this.params.class
      ]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
    }
    /**
     * List of default popover items that are searchable and may have confirmation state
     */
    get itemsDefault() {
      return this.items.filter((e) => e instanceof se);
    }
    /**
     * Returns HTML element corresponding to the popover
     */
    getElement() {
      return this.nodes.popover;
    }
    /**
     * Open popover
     */
    show() {
      this.nodes.popover.classList.add(N.popoverOpened), this.search !== void 0 && this.search.focus();
    }
    /**
     * Closes popover
     */
    hide() {
      this.nodes.popover.classList.remove(N.popoverOpened), this.nodes.popover.classList.remove(N.popoverOpenTop), this.itemsDefault.forEach((e) => e.reset()), this.search !== void 0 && this.search.clear(), this.emit(Z.Closed);
    }
    /**
     * Clears memory
     */
    destroy() {
      var e;
      this.items.forEach((t) => t.destroy()), this.nodes.popover.remove(), this.listeners.removeAll(), (e = this.search) == null || e.destroy();
    }
    /**
     * Looks for the item by name and imitates click on it
     *
     * @param name - name of the item to activate
     */
    activateItemByName(e) {
      const t = this.items.find((o4) => o4.name === e);
      this.handleItemClick(t);
    }
    /**
     * Factory method for creating popover items
     *
     * @param items - list of items params
     */
    buildItems(e) {
      return e.map((t) => {
        switch (t.type) {
          case A.Separator:
            return new Xt();
          case A.Html:
            return new Ee(t, this.itemsRenderParams[A.Html]);
          default:
            return new se(t, this.itemsRenderParams[A.Default]);
        }
      });
    }
    /**
     * Retrieves popover item that is the target of the specified event
     *
     * @param event - event to retrieve popover item from
     */
    getTargetItem(e) {
      return this.items.filter((t) => t instanceof se || t instanceof Ee).find((t) => {
        const o4 = t.getElement();
        return o4 === null ? false : e.composedPath().includes(o4);
      });
    }
    /**
     * Handles popover item click
     *
     * @param item - item to handle click of
     */
    handleItemClick(e) {
      if (!("isDisabled" in e && e.isDisabled)) {
        if (e.hasChildren) {
          this.showNestedItems(e), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick();
          return;
        }
        this.itemsDefault.filter((t) => t !== e).forEach((t) => t.reset()), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && (this.hide(), this.emit(Z.ClosedOnActivate));
      }
    }
    /**
     * Handles clicks inside popover
     *
     * @param event - item to handle click of
     */
    handleClick(e) {
      const t = this.getTargetItem(e);
      t !== void 0 && this.handleItemClick(t);
    }
    /**
     * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
     *
     * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
     * (All the other items with the same key get inactive, and the item gets active)
     *
     * @param clickedItem - popover item that was clicked
     */
    toggleItemActivenessIfNeeded(e) {
      if (e instanceof se && (e.toggle === true && e.toggleActive(), typeof e.toggle == "string")) {
        const t = this.itemsDefault.filter((o4) => o4.toggle === e.toggle);
        if (t.length === 1) {
          e.toggleActive();
          return;
        }
        t.forEach((o4) => {
          o4.toggleActive(o4 === e);
        });
      }
    }
  };
  var De = /* @__PURE__ */ ((n) => (n.Search = "search", n))(De || {});
  var $e = te("cdx-search-field");
  var Ye = {
    wrapper: $e(),
    icon: $e("icon"),
    input: $e("input")
  };
  var _i = class extends Te {
    /**
     * @param options - available config
     * @param options.items - searchable items list
     * @param options.placeholder - input placeholder
     */
    constructor({ items: e, placeholder: t }) {
      super(), this.listeners = new Ce(), this.items = e, this.wrapper = d.make("div", Ye.wrapper);
      const o4 = d.make("div", Ye.icon, {
        innerHTML: Si
      });
      this.input = d.make("input", Ye.input, {
        placeholder: t,
        /**
         * Used to prevent focusing on the input by Tab key
         * (Popover in the Toolbar lays below the blocks,
         * so Tab in the last block will focus this hidden input if this property is not set)
         */
        tabIndex: -1
      }), this.wrapper.appendChild(o4), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
        this.searchQuery = this.input.value, this.emit(De.Search, {
          query: this.searchQuery,
          items: this.foundItems
        });
      });
    }
    /**
     * Returns search field element
     */
    getElement() {
      return this.wrapper;
    }
    /**
     * Sets focus to the input
     */
    focus() {
      this.input.focus();
    }
    /**
     * Clears search query and results
     */
    clear() {
      this.input.value = "", this.searchQuery = "", this.emit(De.Search, {
        query: "",
        items: this.foundItems
      });
    }
    /**
     * Clears memory
     */
    destroy() {
      this.listeners.removeAll();
    }
    /**
     * Returns list of found items for the current search query
     */
    get foundItems() {
      return this.items.filter((e) => this.checkItem(e));
    }
    /**
     * Contains logic for checking whether passed item conforms the search query
     *
     * @param item - item to be checked
     */
    checkItem(e) {
      var i, s2;
      const t = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "", o4 = (s2 = this.searchQuery) == null ? void 0 : s2.toLowerCase();
      return o4 !== void 0 ? t.includes(o4) : false;
    }
  };
  var Ni = Object.defineProperty;
  var Pi = Object.getOwnPropertyDescriptor;
  var Di = (n, e, t, o4) => {
    for (var i = o4 > 1 ? void 0 : o4 ? Pi(e, t) : e, s2 = n.length - 1, r2; s2 >= 0; s2--)
      (r2 = n[s2]) && (i = (o4 ? r2(e, t, i) : r2(i)) || i);
    return o4 && i && Ni(e, t, i), i;
  };
  var qt = class Zt extends Vt {
    /**
     * Construct the instance
     *
     * @param params - popover params
     * @param itemsRenderParams – popover item render params.
     * The parameters that are not set by user via popover api but rather depend on technical implementation
     */
    constructor(e, t) {
      super(e, t), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
        var o4;
        super.hide(), this.destroyNestedPopoverIfExists(), (o4 = this.flipper) == null || o4.deactivate(), this.previouslyHoveredItem = null;
      }, this.onFlip = () => {
        const o4 = this.itemsDefault.find((i) => i.isFocused);
        o4 == null || o4.onFocus();
      }, this.onSearch = (o4) => {
        var l3;
        const i = o4.query === "", s2 = o4.items.length === 0;
        this.items.forEach((a4) => {
          let c2 = false;
          a4 instanceof se ? c2 = !o4.items.includes(a4) : (a4 instanceof Xt || a4 instanceof Ee) && (c2 = s2 || !i), a4.toggleHidden(c2);
        }), this.toggleNothingFoundMessage(s2);
        const r2 = o4.query === "" ? this.flippableElements : o4.items.map((a4) => a4.getElement());
        (l3 = this.flipper) != null && l3.isActivated && (this.flipper.deactivate(), this.flipper.activate(r2));
      }, e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(N.popoverNested), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", (o4) => this.handleHover(o4)), e.searchable && this.addSearch(), e.flippable !== false && (this.flipper = new le({
        items: this.flippableElements,
        focusedItemClass: L.focused,
        allowedKeys: [
          w.TAB,
          w.UP,
          w.DOWN,
          w.ENTER
        ]
      }), this.flipper.onFlip(this.onFlip));
    }
    /**
     * Returns true if some item inside popover is focused
     */
    hasFocus() {
      return this.flipper === void 0 ? false : this.flipper.hasFocus();
    }
    /**
     * Scroll position inside items container of the popover
     */
    get scrollTop() {
      return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
    }
    /**
     * Returns visible element offset top
     */
    get offsetTop() {
      return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
    }
    /**
     * Open popover
     */
    show() {
      var e;
      this.nodes.popover.style.setProperty(de.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(N.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(N.popoverOpenLeft), super.show(), (e = this.flipper) == null || e.activate(this.flippableElements);
    }
    /**
     * Clears memory
     */
    destroy() {
      this.hide(), super.destroy();
    }
    /**
     * Handles displaying nested items for the item.
     *
     * @param item – item to show nested popover for
     */
    showNestedItems(e) {
      this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e, this.showNestedPopoverForItem(e));
    }
    /**
     * Handles hover events inside popover items container
     *
     * @param event - hover event data
     */
    handleHover(e) {
      const t = this.getTargetItem(e);
      t !== void 0 && this.previouslyHoveredItem !== t && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = t, t.hasChildren && this.showNestedPopoverForItem(t));
    }
    /**
     * Sets CSS variable with position of item near which nested popover should be displayed.
     * Is used for correct positioning of the nested popover
     *
     * @param nestedPopoverEl - nested popover element
     * @param item – item near which nested popover should be displayed
     */
    setTriggerItemPosition(e, t) {
      const o4 = t.getElement(), i = (o4 ? o4.offsetTop : 0) - this.scrollTop, s2 = this.offsetTop + i;
      e.style.setProperty(de.TriggerItemTop, s2 + "px");
    }
    /**
     * Destroys existing nested popover
     */
    destroyNestedPopoverIfExists() {
      var e, t;
      this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(Z.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e = this.flipper) == null || e.activate(this.flippableElements), (t = this.nestedPopoverTriggerItem) == null || t.onChildrenClose());
    }
    /**
     * Creates and displays nested popover for specified item.
     * Is used only on desktop
     *
     * @param item - item to display nested popover by
     */
    showNestedPopoverForItem(e) {
      var o4;
      this.nestedPopover = new Zt({
        searchable: e.isChildrenSearchable,
        items: e.children,
        nestingLevel: this.nestingLevel + 1,
        flippable: e.isChildrenFlippable,
        messages: this.messages
      }), e.onChildrenOpen(), this.nestedPopover.on(Z.ClosedOnActivate, this.hide);
      const t = this.nestedPopover.getElement();
      return this.nodes.popover.appendChild(t), this.setTriggerItemPosition(t, e), t.style.setProperty(de.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (o4 = this.flipper) == null || o4.deactivate(), this.nestedPopover;
    }
    /**
     * Checks if popover should be opened bottom.
     * It should happen when there is enough space below or not enough space above
     */
    get shouldOpenBottom() {
      if (this.nodes.popover === void 0 || this.nodes.popover === null)
        return false;
      const e = this.nodes.popoverContainer.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o4 = this.size.height, i = e.top + o4, s2 = e.top - o4, r2 = Math.min(window.innerHeight, t.bottom);
      return s2 < t.top || i <= r2;
    }
    /**
     * Checks if popover should be opened left.
     * It should happen when there is enough space in the right or not enough space in the left
     */
    get shouldOpenRight() {
      if (this.nodes.popover === void 0 || this.nodes.popover === null)
        return false;
      const e = this.nodes.popover.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o4 = this.size.width, i = e.right + o4, s2 = e.left - o4, r2 = Math.min(window.innerWidth, t.right);
      return s2 < t.left || i <= r2;
    }
    get size() {
      var i;
      const e = {
        height: 0,
        width: 0
      };
      if (this.nodes.popover === null)
        return e;
      const t = this.nodes.popover.cloneNode(true);
      t.style.visibility = "hidden", t.style.position = "absolute", t.style.top = "-1000px", t.classList.add(N.popoverOpened), (i = t.querySelector("." + N.popoverNested)) == null || i.remove(), document.body.appendChild(t);
      const o4 = t.querySelector("." + N.popoverContainer);
      return e.height = o4.offsetHeight, e.width = o4.offsetWidth, t.remove(), e;
    }
    /**
     * Returns list of elements available for keyboard navigation.
     */
    get flippableElements() {
      return this.items.map((t) => {
        if (t instanceof se)
          return t.getElement();
        if (t instanceof Ee)
          return t.getControls();
      }).flat().filter((t) => t != null);
    }
    /**
     * Adds search to the popover
     */
    addSearch() {
      this.search = new _i({
        items: this.itemsDefault,
        placeholder: this.messages.search
      }), this.search.on(De.Search, this.onSearch);
      const e = this.search.getElement();
      e.classList.add(N.search), this.nodes.popoverContainer.insertBefore(e, this.nodes.popoverContainer.firstChild);
    }
    /**
     * Toggles nothing found message visibility
     *
     * @param isDisplayed - true if the message should be displayed
     */
    toggleNothingFoundMessage(e) {
      this.nodes.nothingFoundMessage.classList.toggle(N.nothingFoundMessageDisplayed, e);
    }
  };
  Di([
    ue
  ], qt.prototype, "size", 1);
  var lt = qt;
  var Ri = class extends lt {
    /**
     * Constructs the instance
     *
     * @param params - instance parameters
     */
    constructor(e) {
      const t = !pe();
      super(
        {
          ...e,
          class: N.popoverInline
        },
        {
          [A.Default]: {
            /**
             * We use button instead of div here to fix bug associated with focus loss (which leads to selection change) on click in safari
             *
             * @todo figure out better way to solve the issue
             */
            wrapperTag: "button",
            hint: {
              position: "top",
              alignment: "center",
              enabled: t
            }
          },
          [A.Html]: {
            hint: {
              position: "top",
              alignment: "center",
              enabled: t
            }
          }
        }
      ), this.items.forEach((o4) => {
        !(o4 instanceof se) && !(o4 instanceof Ee) || o4.hasChildren && o4.isChildrenOpen && this.showNestedItems(o4);
      });
    }
    /**
     * Returns visible element offset top
     */
    get offsetLeft() {
      return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetLeft;
    }
    /**
     * Open popover
     */
    show() {
      this.nestingLevel === 0 && this.nodes.popover.style.setProperty(
        de.InlinePopoverWidth,
        this.size.width + "px"
      ), super.show();
    }
    /**
     * Disable hover event handling.
     * Overrides parent's class behavior
     */
    handleHover() {
    }
    /**
     * Sets CSS variable with position of item near which nested popover should be displayed.
     * Is used to position nested popover right below clicked item
     *
     * @param nestedPopoverEl - nested popover element
     * @param item – item near which nested popover should be displayed
     */
    setTriggerItemPosition(e, t) {
      const o4 = t.getElement(), i = o4 ? o4.offsetLeft : 0, s2 = this.offsetLeft + i;
      e.style.setProperty(
        de.TriggerItemLeft,
        s2 + "px"
      );
    }
    /**
     * Handles displaying nested items for the item.
     * Overriding in order to add toggling behaviour
     *
     * @param item – item to toggle nested popover for
     */
    showNestedItems(e) {
      if (this.nestedPopoverTriggerItem === e) {
        this.destroyNestedPopoverIfExists(), this.nestedPopoverTriggerItem = null;
        return;
      }
      super.showNestedItems(e);
    }
    /**
     * Creates and displays nested popover for specified item.
     * Is used only on desktop
     *
     * @param item - item to display nested popover by
     */
    showNestedPopoverForItem(e) {
      const t = super.showNestedPopoverForItem(e);
      return t.getElement().classList.add(N.getPopoverNestedClass(t.nestingLevel)), t;
    }
    /**
     * Overrides default item click handling.
     * Helps to close nested popover once other item is clicked.
     *
     * @param item - clicked item
     */
    handleItemClick(e) {
      var t;
      e !== this.nestedPopoverTriggerItem && ((t = this.nestedPopoverTriggerItem) == null || t.handleClick(), super.destroyNestedPopoverIfExists()), super.handleItemClick(e);
    }
  };
  var Gt = class we {
    constructor() {
      this.scrollPosition = null;
    }
    /**
     * Locks body element scroll
     */
    lock() {
      Ge ? this.lockHard() : document.body.classList.add(we.CSS.scrollLocked);
    }
    /**
     * Unlocks body element scroll
     */
    unlock() {
      Ge ? this.unlockHard() : document.body.classList.remove(we.CSS.scrollLocked);
    }
    /**
     * Locks scroll in a hard way (via setting fixed position to body element)
     */
    lockHard() {
      this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
        "--window-scroll-offset",
        `${this.scrollPosition}px`
      ), document.body.classList.add(we.CSS.scrollLockedHard);
    }
    /**
     * Unlocks hard scroll lock
     */
    unlockHard() {
      document.body.classList.remove(we.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
    }
  };
  Gt.CSS = {
    scrollLocked: "ce-scroll-locked",
    scrollLockedHard: "ce-scroll-locked--hard"
  };
  var Fi = Gt;
  var We = te("ce-popover-header");
  var Ke = {
    root: We(),
    text: We("text"),
    backButton: We("back-button")
  };
  var Hi = class {
    /**
     * Constructs the instance
     *
     * @param params - popover header params
     */
    constructor({ text: e, onBackButtonClick: t }) {
      this.listeners = new Ce(), this.text = e, this.onBackButtonClick = t, this.nodes = {
        root: d.make("div", [Ke.root]),
        backButton: d.make("button", [Ke.backButton]),
        text: d.make("div", [Ke.text])
      }, this.nodes.backButton.innerHTML = vi, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
    }
    /**
     * Returns popover header root html element
     */
    getElement() {
      return this.nodes.root;
    }
    /**
     * Destroys the instance
     */
    destroy() {
      this.nodes.root.remove(), this.listeners.destroy();
    }
  };
  var zi = class {
    constructor() {
      this.history = [];
    }
    /**
     * Push new popover state
     *
     * @param state - new state
     */
    push(e) {
      this.history.push(e);
    }
    /**
     * Pop last popover state
     */
    pop() {
      return this.history.pop();
    }
    /**
     * Title retrieved from the current state
     */
    get currentTitle() {
      return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
    }
    /**
     * Items list retrieved from the current state
     */
    get currentItems() {
      return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
    }
    /**
     * Returns history to initial popover state
     */
    reset() {
      for (; this.history.length > 1; )
        this.pop();
    }
  };
  var Jt = class extends Vt {
    /**
     * Construct the instance
     *
     * @param params - popover params
     */
    constructor(e) {
      super(e, {
        [A.Default]: {
          hint: {
            enabled: false
          }
        },
        [A.Html]: {
          hint: {
            enabled: false
          }
        }
      }), this.scrollLocker = new Fi(), this.history = new zi(), this.isHidden = true, this.nodes.overlay = d.make("div", [N.overlay, N.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
        this.hide();
      }), this.history.push({ items: e.items });
    }
    /**
     * Open popover
     */
    show() {
      this.nodes.overlay.classList.remove(N.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = false;
    }
    /**
     * Closes popover
     */
    hide() {
      this.isHidden || (super.hide(), this.nodes.overlay.classList.add(N.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = true);
    }
    /**
     * Clears memory
     */
    destroy() {
      super.destroy(), this.scrollLocker.unlock();
    }
    /**
     * Handles displaying nested items for the item
     *
     * @param item – item to show nested popover for
     */
    showNestedItems(e) {
      this.updateItemsAndHeader(e.children, e.title), this.history.push({
        title: e.title,
        items: e.children
      });
    }
    /**
     * Removes rendered popover items and header and displays new ones
     *
     * @param items - new popover items
     * @param title - new popover header text
     */
    updateItemsAndHeader(e, t) {
      if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), t !== void 0) {
        this.header = new Hi({
          text: t,
          onBackButtonClick: () => {
            this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
          }
        });
        const o4 = this.header.getElement();
        o4 !== null && this.nodes.popoverContainer.insertBefore(o4, this.nodes.popoverContainer.firstChild);
      }
      this.items.forEach((o4) => {
        var i;
        return (i = o4.getElement()) == null ? void 0 : i.remove();
      }), this.items = this.buildItems(e), this.items.forEach((o4) => {
        var s2;
        const i = o4.getElement();
        i !== null && ((s2 = this.nodes.items) == null || s2.appendChild(i));
      });
    }
  };
  var Ui = class extends y {
    constructor() {
      super(...arguments), this.opened = false, this.selection = new b(), this.popover = null, this.close = () => {
        this.opened && (this.opened = false, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(Z.Closed, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
      }, this.onPopoverClose = () => {
        this.close();
      };
    }
    /**
     * Module Events
     */
    get events() {
      return {
        opened: "block-settings-opened",
        closed: "block-settings-closed"
      };
    }
    /**
     * Block Settings CSS
     */
    get CSS() {
      return {
        settings: "ce-settings"
      };
    }
    /**
     * Getter for inner popover's flipper instance
     *
     * @todo remove once BlockSettings becomes standalone non-module class
     */
    get flipper() {
      var e;
      if (this.popover !== null)
        return "flipper" in this.popover ? (e = this.popover) == null ? void 0 : e.flipper : void 0;
    }
    /**
     * Panel with block settings with 2 sections:
     *  - Tool's Settings
     *  - Default Settings [Move, Remove, etc]
     */
    make() {
      this.nodes.wrapper = d.make("div", [this.CSS.settings]), this.eventsDispatcher.on(ye, this.close);
    }
    /**
     * Destroys module
     */
    destroy() {
      this.removeAllNodes(), this.listeners.destroy(), this.eventsDispatcher.off(ye, this.close);
    }
    /**
     * Open Block Settings pane
     *
     * @param targetBlock - near which Block we should open BlockSettings
     */
    async open(e = this.Editor.BlockManager.currentBlock) {
      var s2;
      this.opened = true, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
      const { toolTunes: t, commonTunes: o4 } = e.getTunes();
      this.eventsDispatcher.emit(this.events.opened);
      const i = pe() ? Jt : lt;
      this.popover = new i({
        searchable: true,
        items: await this.getTunesItems(e, o4, t),
        scopeElement: this.Editor.API.methods.ui.nodes.redactor,
        messages: {
          nothingFound: z.ui(K.ui.popover, "Nothing found"),
          search: z.ui(K.ui.popover, "Filter")
        }
      }), this.popover.on(Z.Closed, this.onPopoverClose), (s2 = this.nodes.wrapper) == null || s2.append(this.popover.getElement()), this.popover.show();
    }
    /**
     * Returns root block settings element
     */
    getElement() {
      return this.nodes.wrapper;
    }
    /**
     * Returns list of items to be displayed in block tunes menu.
     * Merges tool specific tunes, conversion menu and common tunes in one list in predefined order
     *
     * @param currentBlock –  block we are about to open block tunes for
     * @param commonTunes – common tunes
     * @param toolTunes - tool specific tunes
     */
    async getTunesItems(e, t, o4) {
      const i = [];
      o4 !== void 0 && o4.length > 0 && (i.push(...o4), i.push({
        type: A.Separator
      }));
      const s2 = Array.from(this.Editor.Tools.blockTools.values()), l3 = (await zt(e, s2)).reduce((a4, c2) => (c2.toolbox.forEach((u2) => {
        a4.push({
          icon: u2.icon,
          title: z.t(K.toolNames, u2.title),
          name: c2.name,
          closeOnActivate: true,
          onActivate: async () => {
            const { BlockManager: h4, Caret: p4, Toolbar: g5 } = this.Editor, f2 = await h4.convert(e, c2.name, u2.data);
            g5.close(), p4.setToBlock(f2, p4.positions.END);
          }
        });
      }), a4), []);
      return l3.length > 0 && (i.push({
        icon: Kt,
        name: "convert-to",
        title: z.ui(K.ui.popover, "Convert to"),
        children: {
          searchable: true,
          items: l3
        }
      }), i.push({
        type: A.Separator
      })), i.push(...t), i.map((a4) => this.resolveTuneAliases(a4));
    }
    /**
     * Resolves aliases in tunes menu items
     *
     * @param item - item with resolved aliases
     */
    resolveTuneAliases(e) {
      if (e.type === A.Separator || e.type === A.Html)
        return e;
      const t = mi(e, { label: "title" });
      return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
    }
  };
  var Qt = { exports: {} };
  (function(n, e) {
    (function(t, o4) {
      n.exports = o4();
    })(window, function() {
      return function(t) {
        var o4 = {};
        function i(s2) {
          if (o4[s2])
            return o4[s2].exports;
          var r2 = o4[s2] = { i: s2, l: false, exports: {} };
          return t[s2].call(r2.exports, r2, r2.exports, i), r2.l = true, r2.exports;
        }
        return i.m = t, i.c = o4, i.d = function(s2, r2, l3) {
          i.o(s2, r2) || Object.defineProperty(s2, r2, { enumerable: true, get: l3 });
        }, i.r = function(s2) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s2, "__esModule", { value: true });
        }, i.t = function(s2, r2) {
          if (1 & r2 && (s2 = i(s2)), 8 & r2 || 4 & r2 && typeof s2 == "object" && s2 && s2.__esModule)
            return s2;
          var l3 = /* @__PURE__ */ Object.create(null);
          if (i.r(l3), Object.defineProperty(l3, "default", { enumerable: true, value: s2 }), 2 & r2 && typeof s2 != "string")
            for (var a4 in s2)
              i.d(l3, a4, function(c2) {
                return s2[c2];
              }.bind(null, a4));
          return l3;
        }, i.n = function(s2) {
          var r2 = s2 && s2.__esModule ? function() {
            return s2.default;
          } : function() {
            return s2;
          };
          return i.d(r2, "a", r2), r2;
        }, i.o = function(s2, r2) {
          return Object.prototype.hasOwnProperty.call(s2, r2);
        }, i.p = "", i(i.s = 0);
      }([function(t, o4, i) {
        function s2(a4, c2) {
          for (var u2 = 0; u2 < c2.length; u2++) {
            var h4 = c2[u2];
            h4.enumerable = h4.enumerable || false, h4.configurable = true, "value" in h4 && (h4.writable = true), Object.defineProperty(a4, h4.key, h4);
          }
        }
        function r2(a4, c2, u2) {
          return c2 && s2(a4.prototype, c2), u2 && s2(a4, u2), a4;
        }
        i.r(o4);
        var l3 = function() {
          function a4(c2) {
            var u2 = this;
            (function(h4, p4) {
              if (!(h4 instanceof p4))
                throw new TypeError("Cannot call a class as a function");
            })(this, a4), this.commands = {}, this.keys = {}, this.name = c2.name, this.parseShortcutName(c2.name), this.element = c2.on, this.callback = c2.callback, this.executeShortcut = function(h4) {
              u2.execute(h4);
            }, this.element.addEventListener("keydown", this.executeShortcut, false);
          }
          return r2(a4, null, [{ key: "supportedCommands", get: function() {
            return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
          } }, { key: "keyCodes", get: function() {
            return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
          } }]), r2(a4, [{ key: "parseShortcutName", value: function(c2) {
            c2 = c2.split("+");
            for (var u2 = 0; u2 < c2.length; u2++) {
              c2[u2] = c2[u2].toUpperCase();
              var h4 = false;
              for (var p4 in a4.supportedCommands)
                if (a4.supportedCommands[p4].includes(c2[u2])) {
                  h4 = this.commands[p4] = true;
                  break;
                }
              h4 || (this.keys[c2[u2]] = true);
            }
            for (var g5 in a4.supportedCommands)
              this.commands[g5] || (this.commands[g5] = false);
          } }, { key: "execute", value: function(c2) {
            var u2, h4 = { CMD: c2.ctrlKey || c2.metaKey, SHIFT: c2.shiftKey, ALT: c2.altKey }, p4 = true;
            for (u2 in this.commands)
              this.commands[u2] !== h4[u2] && (p4 = false);
            var g5, f2 = true;
            for (g5 in this.keys)
              f2 = f2 && c2.keyCode === a4.keyCodes[g5];
            p4 && f2 && this.callback(c2);
          } }, { key: "remove", value: function() {
            this.element.removeEventListener("keydown", this.executeShortcut);
          } }]), a4;
        }();
        o4.default = l3;
      }]).default;
    });
  })(Qt);
  var ji = Qt.exports;
  var $i = /* @__PURE__ */ Fe(ji);
  var Yi = class {
    constructor() {
      this.registeredShortcuts = /* @__PURE__ */ new Map();
    }
    /**
     * Register shortcut
     *
     * @param shortcut - shortcut options
     */
    add(e) {
      if (this.findShortcut(e.on, e.name))
        throw Error(
          `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
        );
      const o4 = new $i({
        name: e.name,
        on: e.on,
        callback: e.handler
      }), i = this.registeredShortcuts.get(e.on) || [];
      this.registeredShortcuts.set(e.on, [...i, o4]);
    }
    /**
     * Remove shortcut
     *
     * @param element - Element shortcut is set for
     * @param name - shortcut name
     */
    remove(e, t) {
      const o4 = this.findShortcut(e, t);
      if (!o4)
        return;
      o4.remove();
      const i = this.registeredShortcuts.get(e);
      this.registeredShortcuts.set(e, i.filter((s2) => s2 !== o4));
    }
    /**
     * Get Shortcut instance if exist
     *
     * @param element - Element shorcut is set for
     * @param shortcut - shortcut name
     * @returns {number} index - shortcut index if exist
     */
    findShortcut(e, t) {
      return (this.registeredShortcuts.get(e) || []).find(({ name: i }) => i === t);
    }
  };
  var he = new Yi();
  var Wi = Object.defineProperty;
  var Ki = Object.getOwnPropertyDescriptor;
  var eo = (n, e, t, o4) => {
    for (var i = o4 > 1 ? void 0 : o4 ? Ki(e, t) : e, s2 = n.length - 1, r2; s2 >= 0; s2--)
      (r2 = n[s2]) && (i = (o4 ? r2(e, t, i) : r2(i)) || i);
    return o4 && i && Wi(e, t, i), i;
  };
  var Se = /* @__PURE__ */ ((n) => (n.Opened = "toolbox-opened", n.Closed = "toolbox-closed", n.BlockAdded = "toolbox-block-added", n))(Se || {});
  var at = class to extends Te {
    /**
     * Toolbox constructor
     *
     * @param options - available parameters
     * @param options.api - Editor API methods
     * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
     */
    constructor({ api: e, tools: t, i18nLabels: o4 }) {
      super(), this.opened = false, this.listeners = new Ce(), this.popover = null, this.handleMobileLayoutToggle = () => {
        this.destroyPopover(), this.initPopover();
      }, this.onPopoverClose = () => {
        this.opened = false, this.emit(
          "toolbox-closed"
          /* Closed */
        );
      }, this.api = e, this.tools = t, this.i18nLabels = o4, this.enableShortcuts(), this.nodes = {
        toolbox: d.make("div", to.CSS.toolbox)
      }, this.initPopover(), this.api.events.on(ye, this.handleMobileLayoutToggle);
    }
    /**
     * Returns True if Toolbox is Empty and nothing to show
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return this.toolsToBeDisplayed.length === 0;
    }
    /**
     * CSS styles
     */
    static get CSS() {
      return {
        toolbox: "ce-toolbox"
      };
    }
    /**
     * Returns root block settings element
     */
    getElement() {
      return this.nodes.toolbox;
    }
    /**
     * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
     */
    hasFocus() {
      if (this.popover !== null)
        return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
    }
    /**
     * Destroy Module
     */
    destroy() {
      var e;
      super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e = this.popover) == null || e.off(Z.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(ye, this.handleMobileLayoutToggle);
    }
    /**
     * Toolbox Tool's button click handler
     *
     * @param toolName - tool type to be activated
     * @param blockDataOverrides - Block data predefined by the activated Toolbox item
     */
    toolButtonActivated(e, t) {
      this.insertNewBlock(e, t);
    }
    /**
     * Open Toolbox with Tools
     */
    open() {
      var e;
      this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = true, this.emit(
        "toolbox-opened"
        /* Opened */
      ));
    }
    /**
     * Close Toolbox
     */
    close() {
      var e;
      (e = this.popover) == null || e.hide(), this.opened = false, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }
    /**
     * Close Toolbox
     */
    toggle() {
      this.opened ? this.close() : this.open();
    }
    /**
     * Creates toolbox popover and appends it inside wrapper element
     */
    initPopover() {
      var t;
      const e = pe() ? Jt : lt;
      this.popover = new e({
        scopeElement: this.api.ui.nodes.redactor,
        searchable: true,
        messages: {
          nothingFound: this.i18nLabels.nothingFound,
          search: this.i18nLabels.filter
        },
        items: this.toolboxItemsToBeDisplayed
      }), this.popover.on(Z.Closed, this.onPopoverClose), (t = this.nodes.toolbox) == null || t.append(this.popover.getElement());
    }
    /**
     * Destroys popover instance and removes it from DOM
     */
    destroyPopover() {
      this.popover !== null && (this.popover.hide(), this.popover.off(Z.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
    }
    get toolsToBeDisplayed() {
      const e = [];
      return this.tools.forEach((t) => {
        t.toolbox && e.push(t);
      }), e;
    }
    get toolboxItemsToBeDisplayed() {
      const e = (t, o4) => ({
        icon: t.icon,
        title: z.t(K.toolNames, t.title || Le(o4.name)),
        name: o4.name,
        onActivate: () => {
          this.toolButtonActivated(o4.name, t.data);
        },
        secondaryLabel: o4.shortcut ? tt(o4.shortcut) : ""
      });
      return this.toolsToBeDisplayed.reduce((t, o4) => (Array.isArray(o4.toolbox) ? o4.toolbox.forEach((i) => {
        t.push(e(i, o4));
      }) : o4.toolbox !== void 0 && t.push(e(o4.toolbox, o4)), t), []);
    }
    /**
     * Iterate all tools and enable theirs shortcuts if specified
     */
    enableShortcuts() {
      this.toolsToBeDisplayed.forEach((e) => {
        const t = e.shortcut;
        t && this.enableShortcutForTool(e.name, t);
      });
    }
    /**
     * Enable shortcut Block Tool implemented shortcut
     *
     * @param {string} toolName - Tool name
     * @param {string} shortcut - shortcut according to the ShortcutData Module format
     */
    enableShortcutForTool(e, t) {
      he.add({
        name: t,
        on: this.api.ui.nodes.redactor,
        handler: async (o4) => {
          o4.preventDefault();
          const i = this.api.blocks.getCurrentBlockIndex(), s2 = this.api.blocks.getBlockByIndex(i);
          if (s2)
            try {
              const r2 = await this.api.blocks.convert(s2.id, e);
              this.api.caret.setToBlock(r2, "end");
              return;
            } catch {
            }
          this.insertNewBlock(e);
        }
      });
    }
    /**
     * Removes all added shortcuts
     * Fired when the Read-Only mode is activated
     */
    removeAllShortcuts() {
      this.toolsToBeDisplayed.forEach((e) => {
        const t = e.shortcut;
        t && he.remove(this.api.ui.nodes.redactor, t);
      });
    }
    /**
     * Inserts new block
     * Can be called when button clicked on Toolbox or by ShortcutData
     *
     * @param {string} toolName - Tool name
     * @param blockDataOverrides - predefined Block data
     */
    async insertNewBlock(e, t) {
      const o4 = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o4);
      if (!i)
        return;
      const s2 = i.isEmpty ? o4 : o4 + 1;
      let r2;
      if (t) {
        const a4 = await this.api.blocks.composeBlockData(e);
        r2 = Object.assign(a4, t);
      }
      const l3 = this.api.blocks.insert(
        e,
        r2,
        void 0,
        s2,
        void 0,
        i.isEmpty
      );
      l3.call(J.APPEND_CALLBACK), this.api.caret.setToBlock(s2), this.emit("toolbox-block-added", {
        block: l3
      }), this.api.toolbar.close();
    }
  };
  eo([
    ue
  ], at.prototype, "toolsToBeDisplayed", 1);
  eo([
    ue
  ], at.prototype, "toolboxItemsToBeDisplayed", 1);
  var Xi = at;
  var oo = "block hovered";
  async function Vi(n, e) {
    const t = navigator.keyboard;
    if (!t)
      return e;
    try {
      return (await t.getLayoutMap()).get(n) || e;
    } catch (o4) {
      return console.error(o4), e;
    }
  }
  var qi = class extends y {
    /**
     * @class
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.toolboxInstance = null;
    }
    /**
     * CSS styles
     *
     * @returns {object}
     */
    get CSS() {
      return {
        toolbar: "ce-toolbar",
        content: "ce-toolbar__content",
        actions: "ce-toolbar__actions",
        actionsOpened: "ce-toolbar__actions--opened",
        toolbarOpened: "ce-toolbar--opened",
        openedToolboxHolderModifier: "codex-editor--toolbox-opened",
        plusButton: "ce-toolbar__plus",
        plusButtonShortcut: "ce-toolbar__plus-shortcut",
        settingsToggler: "ce-toolbar__settings-btn",
        settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
      };
    }
    /**
     * Returns the Toolbar opening state
     *
     * @returns {boolean}
     */
    get opened() {
      return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
    }
    /**
     * Public interface for accessing the Toolbox
     */
    get toolbox() {
      var e;
      return {
        opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
        close: () => {
          var t;
          (t = this.toolboxInstance) == null || t.close();
        },
        open: () => {
          if (this.toolboxInstance === null) {
            I("toolbox.open() called before initialization is finished", "warn");
            return;
          }
          this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
        },
        toggle: () => {
          if (this.toolboxInstance === null) {
            I("toolbox.toggle() called before initialization is finished", "warn");
            return;
          }
          this.toolboxInstance.toggle();
        },
        hasFocus: () => {
          var t;
          return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
        }
      };
    }
    /**
     * Block actions appearance manipulations
     */
    get blockActions() {
      return {
        hide: () => {
          this.nodes.actions.classList.remove(this.CSS.actionsOpened);
        },
        show: () => {
          this.nodes.actions.classList.add(this.CSS.actionsOpened);
        }
      };
    }
    /**
     * Methods for working with Block Tunes toggler
     */
    get blockTunesToggler() {
      return {
        hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
        show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
      };
    }
    /**
     * Toggles read-only mode
     *
     * @param {boolean} readOnlyEnabled - read-only mode
     */
    toggleReadOnly(e) {
      e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
        this.drawUI(), this.enableModuleBindings();
      }, { timeout: 2e3 });
    }
    /**
     * Move Toolbar to the passed (or current) Block
     *
     * @param block - block to move Toolbar near it
     */
    moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
      if (this.toolboxInstance === null) {
        I("Can't open Toolbar since Editor initialization is not finished yet", "warn");
        return;
      }
      if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
        return;
      this.hoveredBlock = e;
      const t = e.holder, { isMobile: o4 } = this.Editor.UI;
      let i;
      const s2 = 20, r2 = e.firstInput, l3 = t.getBoundingClientRect(), a4 = r2 !== void 0 ? r2.getBoundingClientRect() : null, c2 = a4 !== null ? a4.top - l3.top : null, u2 = c2 !== null ? c2 > s2 : void 0;
      if (o4)
        i = t.offsetTop + t.offsetHeight;
      else if (r2 === void 0 || u2) {
        const h4 = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
        i = t.offsetTop + h4;
      } else {
        const h4 = _o(r2), p4 = parseInt(window.getComputedStyle(this.nodes.plusButton).height, 10), g5 = 8;
        i = t.offsetTop + h4 - p4 + g5 + c2;
      }
      this.nodes.wrapper.style.top = `${Math.floor(i)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
    }
    /**
     * Close the Toolbar
     */
    close() {
      var e, t;
      this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
    }
    /**
     * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
     */
    reset() {
      this.nodes.wrapper.style.top = "unset";
    }
    /**
     * Open Toolbar with Plus Button and Actions
     *
     * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
     *                                     This flag allows to open Toolbar without Actions.
     */
    open(e = true) {
      this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
    }
    /**
     * Draws Toolbar elements
     */
    async make() {
      this.nodes.wrapper = d.make("div", this.CSS.toolbar), ["content", "actions"].forEach((s2) => {
        this.nodes[s2] = d.make("div", this.CSS[s2]);
      }), d.append(this.nodes.wrapper, this.nodes.content), d.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = d.make("div", this.CSS.plusButton, {
        innerHTML: Ci
      }), d.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
        Ne(true), this.plusButtonClicked();
      }, false);
      const e = d.make("div");
      e.appendChild(document.createTextNode(z.ui(K.ui.toolbar.toolbox, "Add"))), e.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
        textContent: "/"
      })), Pe(this.nodes.plusButton, e, {
        hidingDelay: 400
      }), this.nodes.settingsToggler = d.make("span", this.CSS.settingsToggler, {
        innerHTML: Ti
      }), d.append(this.nodes.actions, this.nodes.settingsToggler);
      const t = d.make("div"), o4 = d.text(z.ui(K.ui.blockTunes.toggler, "Click to tune")), i = await Vi("Slash", "/");
      t.appendChild(o4), t.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
        textContent: tt(`CMD + ${i}`)
      })), Pe(this.nodes.settingsToggler, t, {
        hidingDelay: 400
      }), d.append(this.nodes.actions, this.makeToolbox()), d.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
    }
    /**
     * Creates the Toolbox instance and return it's rendered element
     */
    makeToolbox() {
      return this.toolboxInstance = new Xi({
        api: this.Editor.API.methods,
        tools: this.Editor.Tools.blockTools,
        i18nLabels: {
          filter: z.ui(K.ui.popover, "Filter"),
          nothingFound: z.ui(K.ui.popover, "Nothing found")
        }
      }), this.toolboxInstance.on(Se.Opened, () => {
        this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
      }), this.toolboxInstance.on(Se.Closed, () => {
        this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
      }), this.toolboxInstance.on(Se.BlockAdded, ({ block: e }) => {
        const { BlockManager: t, Caret: o4 } = this.Editor, i = t.getBlockById(e.id);
        i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o4.setToBlock(t.lastBlock)) : o4.setToBlock(t.nextBlock));
      }), this.toolboxInstance.getElement();
    }
    /**
     * Handler for Plus Button
     */
    plusButtonClicked() {
      var e;
      this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
    }
    /**
     * Enable bindings
     */
    enableModuleBindings() {
      this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e) => {
        var t;
        e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), Ne(true);
      }, true), pe() || this.eventsDispatcher.on(oo, (e) => {
        var t;
        this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
      });
    }
    /**
     * Disable bindings
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Clicks on the Block Settings toggler
     */
    settingsTogglerClicked() {
      this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
    }
    /**
     * Draws Toolbar UI
     *
     * Toolbar contains BlockSettings and Toolbox.
     * That's why at first we draw its components and then Toolbar itself
     *
     * Steps:
     *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
     *  - Make itself and append dependent nodes to itself
     *
     */
    drawUI() {
      this.Editor.BlockSettings.make(), this.make();
    }
    /**
     * Removes all created and saved HTMLElements
     * It is used in Read-Only mode
     */
    destroy() {
      this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
    }
  };
  var ne = /* @__PURE__ */ ((n) => (n[n.Block = 0] = "Block", n[n.Inline = 1] = "Inline", n[n.Tune = 2] = "Tune", n))(ne || {});
  var Ie = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.Toolbox = "toolbox", n.EnabledInlineTools = "inlineToolbar", n.EnabledBlockTunes = "tunes", n.Config = "config", n))(Ie || {});
  var io = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.SanitizeConfig = "sanitize", n))(io || {});
  var ce = /* @__PURE__ */ ((n) => (n.IsEnabledLineBreaks = "enableLineBreaks", n.Toolbox = "toolbox", n.ConversionConfig = "conversionConfig", n.IsReadOnlySupported = "isReadOnlySupported", n.PasteConfig = "pasteConfig", n))(ce || {});
  var ct = /* @__PURE__ */ ((n) => (n.IsInline = "isInline", n.Title = "title", n))(ct || {});
  var et = /* @__PURE__ */ ((n) => (n.IsTune = "isTune", n))(et || {});
  var dt = class {
    /**
     * @class
     * @param {ConstructorOptions} options - Constructor options
     */
    constructor({
      name: e,
      constructable: t,
      config: o4,
      api: i,
      isDefault: s2,
      isInternal: r2 = false,
      defaultPlaceholder: l3
    }) {
      this.api = i, this.name = e, this.constructable = t, this.config = o4, this.isDefault = s2, this.isInternal = r2, this.defaultPlaceholder = l3;
    }
    /**
     * Returns Tool user configuration
     */
    get settings() {
      const e = this.config.config || {};
      return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
    }
    /**
     * Calls Tool's reset method
     */
    reset() {
      if (O(this.constructable.reset))
        return this.constructable.reset();
    }
    /**
     * Calls Tool's prepare method
     */
    prepare() {
      if (O(this.constructable.prepare))
        return this.constructable.prepare({
          toolName: this.name,
          config: this.settings
        });
    }
    /**
     * Returns shortcut for Tool (internal or specified by user)
     */
    get shortcut() {
      const e = this.constructable.shortcut;
      return this.config.shortcut || e;
    }
    /**
     * Returns Tool's sanitizer configuration
     */
    get sanitizeConfig() {
      return this.constructable.sanitize || {};
    }
    /**
     * Returns true if Tools is inline
     */
    isInline() {
      return this.type === ne.Inline;
    }
    /**
     * Returns true if Tools is block
     */
    isBlock() {
      return this.type === ne.Block;
    }
    /**
     * Returns true if Tools is tune
     */
    isTune() {
      return this.type === ne.Tune;
    }
  };
  var Zi = class extends y {
    /**
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.CSS = {
        inlineToolbar: "ce-inline-toolbar"
      }, this.opened = false, this.popover = null, this.toolbarVerticalMargin = pe() ? 20 : 6, this.toolsInstances = /* @__PURE__ */ new Map();
    }
    /**
     * Toggles read-only mode
     *
     * @param {boolean} readOnlyEnabled - read-only mode
     */
    toggleReadOnly(e) {
      e ? this.destroy() : window.requestIdleCallback(() => {
        this.make();
      }, { timeout: 2e3 });
    }
    /**
     *  Moving / appearance
     *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */
    /**
     * Shows Inline Toolbar if something is selected
     *
     * @param [needToClose] - pass true to close toolbar if it is not allowed.
     *                                  Avoid to use it just for closing IT, better call .close() clearly.
     */
    async tryToShow(e = false) {
      e && this.close(), this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
    }
    /**
     * Hides Inline Toolbar
     */
    close() {
      var e, t;
      this.opened && (this.Editor.ReadOnly.isEnabled || (Array.from(this.toolsInstances.entries()).forEach(([o4, i]) => {
        const s2 = this.getToolShortcut(o4);
        s2 && he.remove(this.Editor.UI.nodes.redactor, s2), O(i.clear) && i.clear();
      }), this.toolsInstances = null, this.reset(), this.opened = false, (e = this.popover) == null || e.hide(), (t = this.popover) == null || t.destroy(), this.popover = null));
    }
    /**
     * Check if node is contained by Inline Toolbar
     *
     * @param {Node} node — node to check
     */
    containsNode(e) {
      return this.nodes.wrapper === void 0 ? false : this.nodes.wrapper.contains(e);
    }
    /**
     * Removes UI and its components
     */
    destroy() {
      var e;
      this.removeAllNodes(), (e = this.popover) == null || e.destroy(), this.popover = null;
    }
    /**
     * Making DOM
     */
    make() {
      this.nodes.wrapper = d.make("div", [
        this.CSS.inlineToolbar,
        ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
      ]), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
    }
    /**
     * Shows Inline Toolbar
     */
    async open() {
      var t;
      if (this.opened)
        return;
      this.opened = true, this.popover !== null && this.popover.destroy();
      const e = await this.getInlineTools();
      this.popover = new Ri({
        items: e,
        scopeElement: this.Editor.API.methods.ui.nodes.redactor,
        messages: {
          nothingFound: z.ui(K.ui.popover, "Nothing found"),
          search: z.ui(K.ui.popover, "Filter")
        }
      }), this.move(this.popover.size.width), (t = this.nodes.wrapper) == null || t.append(this.popover.getElement()), this.popover.show();
    }
    /**
     * Move Toolbar to the selected text
     *
     * @param popoverWidth - width of the toolbar popover
     */
    move(e) {
      const t = b.rect, o4 = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), i = {
        x: t.x - o4.x,
        y: t.y + t.height - // + window.scrollY
        o4.top + this.toolbarVerticalMargin
      };
      i.x + e + o4.x > this.Editor.UI.contentRect.right && (i.x = this.Editor.UI.contentRect.right - e - o4.x), this.nodes.wrapper.style.left = Math.floor(i.x) + "px", this.nodes.wrapper.style.top = Math.floor(i.y) + "px";
    }
    /**
     * Clear orientation classes and reset position
     */
    reset() {
      this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
    }
    /**
     * Need to show Inline Toolbar or not
     */
    allowedToShow() {
      const e = ["IMG", "INPUT"], t = b.get(), o4 = b.text;
      if (!t || !t.anchorNode || t.isCollapsed || o4.length < 1)
        return false;
      const i = d.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
      if (i === null || t && e.includes(i.tagName) || i.closest('[contenteditable="true"]') === null)
        return false;
      const r2 = this.Editor.BlockManager.getBlock(t.anchorNode);
      return r2 ? r2.tool.inlineTools.size !== 0 : false;
    }
    /**
     *  Working with Tools
     *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */
    /**
     * Returns Inline Tools segregated by their appearance type: popover items and custom html elements.
     * Sets this.toolsInstances map
     */
    async getInlineTools() {
      const e = b.get(), t = this.Editor.BlockManager.getBlock(e.anchorNode), o4 = Array.from(t.tool.inlineTools.values()), i = [];
      this.toolsInstances === null && (this.toolsInstances = /* @__PURE__ */ new Map());
      for (let s2 = 0; s2 < o4.length; s2++) {
        const r2 = o4[s2], l3 = r2.create(), a4 = await l3.render();
        this.toolsInstances.set(r2.name, l3);
        const c2 = this.getToolShortcut(r2.name);
        if (c2)
          try {
            this.enableShortcuts(r2.name, c2);
          } catch {
          }
        const u2 = c2 !== void 0 ? tt(c2) : void 0, h4 = z.t(
          K.toolNames,
          r2.title || Le(r2.name)
        );
        [a4].flat().forEach((p4) => {
          var f2, k3;
          const g5 = {
            name: r2.name,
            onActivate: () => {
              this.toolClicked(l3);
            },
            hint: {
              title: h4,
              description: u2
            }
          };
          if (d.isElement(p4)) {
            const C3 = {
              ...g5,
              element: p4,
              type: A.Html
            };
            if (O(l3.renderActions)) {
              const S2 = l3.renderActions();
              C3.children = {
                isOpen: (f2 = l3.checkState) == null ? void 0 : f2.call(l3, b.get()),
                /** Disable keyboard navigation in actions, as it might conflict with enter press handling */
                isFlippable: false,
                items: [
                  {
                    type: A.Html,
                    element: S2
                  }
                ]
              };
            } else
              (k3 = l3.checkState) == null || k3.call(l3, b.get());
            i.push(C3);
          } else if (p4.type === A.Html)
            i.push({
              ...g5,
              ...p4,
              type: A.Html
            });
          else if (p4.type === A.Separator)
            i.push({
              type: A.Separator
            });
          else {
            const C3 = {
              ...g5,
              ...p4,
              type: A.Default
            };
            "children" in C3 && s2 !== 0 && i.push({
              type: A.Separator
            }), i.push(C3), "children" in C3 && s2 < o4.length - 1 && i.push({
              type: A.Separator
            });
          }
        });
      }
      return i;
    }
    /**
     * Get shortcut name for tool
     *
     * @param toolName — Tool name
     */
    getToolShortcut(e) {
      const { Tools: t } = this.Editor, o4 = t.inlineTools.get(e), i = t.internal.inlineTools;
      return Array.from(i.keys()).includes(e) ? this.inlineTools[e][io.Shortcut] : o4 == null ? void 0 : o4.shortcut;
    }
    /**
     * Enable Tool shortcut with Editor Shortcuts Module
     *
     * @param toolName - tool name
     * @param shortcut - shortcut according to the ShortcutData Module format
     */
    enableShortcuts(e, t) {
      he.add({
        name: t,
        handler: (o4) => {
          var s2;
          const { currentBlock: i } = this.Editor.BlockManager;
          i && i.tool.enabledInlineTools && (o4.preventDefault(), (s2 = this.popover) == null || s2.activateItemByName(e));
        },
        on: this.Editor.UI.nodes.redactor
      });
    }
    /**
     * Inline Tool button clicks
     *
     * @param tool - Tool's instance
     */
    toolClicked(e) {
      var o4;
      const t = b.range;
      (o4 = e.surround) == null || o4.call(e, t), this.checkToolsState();
    }
    /**
     * Check Tools` state by selection
     */
    checkToolsState() {
      var e;
      (e = this.toolsInstances) == null || e.forEach((t) => {
        var o4;
        (o4 = t.checkState) == null || o4.call(t, b.get());
      });
    }
    /**
     * Get inline tools tools
     * Tools that has isInline is true
     */
    get inlineTools() {
      const e = {};
      return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o4]) => {
        e[t] = o4.create();
      }), e;
    }
  };
  function so() {
    const n = window.getSelection();
    if (n === null)
      return [null, 0];
    let e = n.focusNode, t = n.focusOffset;
    return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], t = e.textContent.length)), [e, t]);
  }
  function no(n, e, t, o4) {
    const i = document.createRange();
    o4 === "left" ? (i.setStart(n, 0), i.setEnd(e, t)) : (i.setStart(e, t), i.setEnd(n, n.childNodes.length));
    const s2 = i.cloneContents(), r2 = document.createElement("div");
    r2.appendChild(s2);
    const l3 = r2.textContent || "";
    return Lo(l3);
  }
  function Me(n) {
    const e = d.getDeepestNode(n);
    if (e === null || d.isEmpty(n))
      return true;
    if (d.isNativeInput(e))
      return e.selectionEnd === 0;
    if (d.isEmpty(n))
      return true;
    const [t, o4] = so();
    return t === null ? false : no(n, t, o4, "left");
  }
  function Ae(n) {
    const e = d.getDeepestNode(n, true);
    if (e === null)
      return true;
    if (d.isNativeInput(e))
      return e.selectionEnd === e.value.length;
    const [t, o4] = so();
    return t === null ? false : no(n, t, o4, "right");
  }
  var Gi = class extends y {
    /**
     * All keydowns on Block
     *
     * @param {KeyboardEvent} event - keydown
     */
    keydown(e) {
      switch (this.beforeKeydownProcessing(e), e.keyCode) {
        case w.BACKSPACE:
          this.backspace(e);
          break;
        case w.DELETE:
          this.delete(e);
          break;
        case w.ENTER:
          this.enter(e);
          break;
        case w.DOWN:
        case w.RIGHT:
          this.arrowRightAndDown(e);
          break;
        case w.UP:
        case w.LEFT:
          this.arrowLeftAndUp(e);
          break;
        case w.TAB:
          this.tabPressed(e);
          break;
      }
      e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
    }
    /**
     * Fires on keydown before event processing
     *
     * @param {KeyboardEvent} event - keydown
     */
    beforeKeydownProcessing(e) {
      this.needToolbarClosing(e) && Mt(e.keyCode) && (this.Editor.Toolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
    }
    /**
     * Key up on Block:
     * - shows Inline Toolbar if something selected
     * - shows conversion toolbar with 85% of block selection
     *
     * @param {KeyboardEvent} event - keyup event
     */
    keyup(e) {
      e.shiftKey || this.Editor.UI.checkEmptiness();
    }
    /**
     * Add drop target styles
     *
     * @param {DragEvent} event - drag over event
     */
    dragOver(e) {
      const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
      t.dropTarget = true;
    }
    /**
     * Remove drop target style
     *
     * @param {DragEvent} event - drag leave event
     */
    dragLeave(e) {
      const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
      t.dropTarget = false;
    }
    /**
     * Copying selected blocks
     * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
     *
     * @param {ClipboardEvent} event - clipboard event
     */
    handleCommandC(e) {
      const { BlockSelection: t } = this.Editor;
      t.anyBlockSelected && t.copySelectedBlocks(e);
    }
    /**
     * Copy and Delete selected Blocks
     *
     * @param {ClipboardEvent} event - clipboard event
     */
    handleCommandX(e) {
      const { BlockSelection: t, BlockManager: o4, Caret: i } = this.Editor;
      t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
        const s2 = o4.removeSelectedBlocks(), r2 = o4.insertDefaultBlockAtIndex(s2, true);
        i.setToBlock(r2, i.positions.START), t.clearSelection(e);
      });
    }
    /**
     * Tab pressed inside a Block.
     *
     * @param {KeyboardEvent} event - keydown
     */
    tabPressed(e) {
      const { InlineToolbar: t, Caret: o4 } = this.Editor;
      if (t.opened)
        return;
      (e.shiftKey ? o4.navigatePrevious(true) : o4.navigateNext(true)) && e.preventDefault();
    }
    /**
     * '/' + 'command' keydown inside a Block
     */
    commandSlashPressed() {
      this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
    }
    /**
     * '/' keydown inside a Block
     *
     * @param event - keydown
     */
    slashPressed(e) {
      this.Editor.BlockManager.currentBlock.isEmpty && (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
    }
    /**
     * ENTER pressed on block
     *
     * @param {KeyboardEvent} event - keydown
     */
    enter(e) {
      const { BlockManager: t, UI: o4 } = this.Editor, i = t.currentBlock;
      if (i === void 0 || i.tool.isLineBreaksEnabled || o4.someToolbarOpened && o4.someFlipperButtonFocused || e.shiftKey && !Ge)
        return;
      let s2 = i;
      i.currentInput !== void 0 && Me(i.currentInput) && !i.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : i.currentInput && Ae(i.currentInput) ? s2 = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : s2 = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(s2), this.Editor.Toolbar.moveAndOpen(s2), e.preventDefault();
    }
    /**
     * Handle backspace keydown on Block
     *
     * @param {KeyboardEvent} event - keydown
     */
    backspace(e) {
      const { BlockManager: t, Caret: o4 } = this.Editor, { currentBlock: i, previousBlock: s2 } = t;
      if (i === void 0 || !b.isCollapsed || !i.currentInput || !Me(i.currentInput))
        return;
      if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.firstInput)) {
        o4.navigatePrevious();
        return;
      }
      if (s2 === null)
        return;
      if (s2.isEmpty) {
        t.removeBlock(s2);
        return;
      }
      if (i.isEmpty) {
        t.removeBlock(i);
        const a4 = t.currentBlock;
        o4.setToBlock(a4, o4.positions.END);
        return;
      }
      wt(s2, i) ? this.mergeBlocks(s2, i) : o4.setToBlock(s2, o4.positions.END);
    }
    /**
     * Handles delete keydown on Block
     * Removes char after the caret.
     * If caret is at the end of the block, merge next block with current
     *
     * @param {KeyboardEvent} event - keydown
     */
    delete(e) {
      const { BlockManager: t, Caret: o4 } = this.Editor, { currentBlock: i, nextBlock: s2 } = t;
      if (!b.isCollapsed || !Ae(i.currentInput))
        return;
      if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.lastInput)) {
        o4.navigateNext();
        return;
      }
      if (s2 === null)
        return;
      if (s2.isEmpty) {
        t.removeBlock(s2);
        return;
      }
      if (i.isEmpty) {
        t.removeBlock(i), o4.setToBlock(s2, o4.positions.START);
        return;
      }
      wt(i, s2) ? this.mergeBlocks(i, s2) : o4.setToBlock(s2, o4.positions.START);
    }
    /**
     * Merge passed Blocks
     *
     * @param targetBlock - to which Block we want to merge
     * @param blockToMerge - what Block we want to merge
     */
    mergeBlocks(e, t) {
      const { BlockManager: o4, Caret: i, Toolbar: s2 } = this.Editor;
      i.createShadow(e.lastInput), o4.mergeBlocks(e, t).then(() => {
        i.restoreCaret(e.pluginsContent), s2.close();
      });
    }
    /**
     * Handle right and down keyboard keys
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    arrowRightAndDown(e) {
      const t = le.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === w.TAB);
      if (this.Editor.UI.someToolbarOpened && t)
        return;
      this.Editor.Toolbar.close();
      const { currentBlock: o4 } = this.Editor.BlockManager, s2 = ((o4 == null ? void 0 : o4.currentInput) !== void 0 ? Ae(o4.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
      if (e.shiftKey && e.keyCode === w.DOWN && s2) {
        this.Editor.CrossBlockSelection.toggleBlockSelectedState();
        return;
      }
      if (e.keyCode === w.DOWN || e.keyCode === w.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
        e.preventDefault();
        return;
      }
      Oe(() => {
        this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
      }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Handle left and up keyboard keys
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    arrowLeftAndUp(e) {
      if (this.Editor.UI.someToolbarOpened) {
        if (le.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === w.TAB))
          return;
        this.Editor.UI.closeAllToolbars();
      }
      this.Editor.Toolbar.close();
      const { currentBlock: t } = this.Editor.BlockManager, i = ((t == null ? void 0 : t.currentInput) !== void 0 ? Me(t.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
      if (e.shiftKey && e.keyCode === w.UP && i) {
        this.Editor.CrossBlockSelection.toggleBlockSelectedState(false);
        return;
      }
      if (e.keyCode === w.UP || e.keyCode === w.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
        e.preventDefault();
        return;
      }
      Oe(() => {
        this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
      }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Cases when we need to close Toolbar
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    needToolbarClosing(e) {
      const t = e.keyCode === w.ENTER && this.Editor.Toolbar.toolbox.opened, o4 = e.keyCode === w.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === w.ENTER && this.Editor.InlineToolbar.opened, s2 = e.keyCode === w.TAB;
      return !(e.shiftKey || s2 || t || o4 || i);
    }
    /**
     * If Toolbox is not open, then just open it and show plus button
     */
    activateToolbox() {
      this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
    }
    /**
     * Open Toolbar and show BlockSettings before flipping Tools
     */
    activateBlockSettings() {
      this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
    }
  };
  var Xe = class {
    /**
     * @class
     * @param {HTMLElement} workingArea — editor`s working node
     */
    constructor(e) {
      this.blocks = [], this.workingArea = e;
    }
    /**
     * Get length of Block instances array
     *
     * @returns {number}
     */
    get length() {
      return this.blocks.length;
    }
    /**
     * Get Block instances array
     *
     * @returns {Block[]}
     */
    get array() {
      return this.blocks;
    }
    /**
     * Get blocks html elements array
     *
     * @returns {HTMLElement[]}
     */
    get nodes() {
      return At(this.workingArea.children);
    }
    /**
     * Proxy trap to implement array-like setter
     *
     * @example
     * blocks[0] = new Block(...)
     * @param {Blocks} instance — Blocks instance
     * @param {PropertyKey} property — block index or any Blocks class property key to set
     * @param {Block} value — value to set
     * @returns {boolean}
     */
    static set(e, t, o4) {
      return isNaN(Number(t)) ? (Reflect.set(e, t, o4), true) : (e.insert(+t, o4), true);
    }
    /**
     * Proxy trap to implement array-like getter
     *
     * @param {Blocks} instance — Blocks instance
     * @param {PropertyKey} property — Blocks class property key
     * @returns {Block|*}
     */
    static get(e, t) {
      return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
    }
    /**
     * Push new Block to the blocks array and append it to working area
     *
     * @param {Block} block - Block to add
     */
    push(e) {
      this.blocks.push(e), this.insertToDOM(e);
    }
    /**
     * Swaps blocks with indexes first and second
     *
     * @param {number} first - first block index
     * @param {number} second - second block index
     * @deprecated — use 'move' instead
     */
    swap(e, t) {
      const o4 = this.blocks[t];
      d.swap(this.blocks[e].holder, o4.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o4;
    }
    /**
     * Move a block from one to another index
     *
     * @param {number} toIndex - new index of the block
     * @param {number} fromIndex - block to move
     */
    move(e, t) {
      const o4 = this.blocks.splice(t, 1)[0], i = e - 1, s2 = Math.max(0, i), r2 = this.blocks[s2];
      e > 0 ? this.insertToDOM(o4, "afterend", r2) : this.insertToDOM(o4, "beforebegin", r2), this.blocks.splice(e, 0, o4);
      const l3 = this.composeBlockEvent("move", {
        fromIndex: t,
        toIndex: e
      });
      o4.call(J.MOVED, l3);
    }
    /**
     * Insert new Block at passed index
     *
     * @param {number} index — index to insert Block
     * @param {Block} block — Block to insert
     * @param {boolean} replace — it true, replace block on given index
     */
    insert(e, t, o4 = false) {
      if (!this.length) {
        this.push(t);
        return;
      }
      e > this.length && (e = this.length), o4 && (this.blocks[e].holder.remove(), this.blocks[e].call(J.REMOVED));
      const i = o4 ? 1 : 0;
      if (this.blocks.splice(e, i, t), e > 0) {
        const s2 = this.blocks[e - 1];
        this.insertToDOM(t, "afterend", s2);
      } else {
        const s2 = this.blocks[e + 1];
        s2 ? this.insertToDOM(t, "beforebegin", s2) : this.insertToDOM(t);
      }
    }
    /**
     * Replaces block under passed index with passed block
     *
     * @param index - index of existed block
     * @param block - new block
     */
    replace(e, t) {
      if (this.blocks[e] === void 0)
        throw Error("Incorrect index");
      this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
    }
    /**
     * Inserts several blocks at once
     *
     * @param blocks - blocks to insert
     * @param index - index to insert blocks at
     */
    insertMany(e, t) {
      const o4 = new DocumentFragment();
      for (const i of e)
        o4.appendChild(i.holder);
      if (this.length > 0) {
        if (t > 0) {
          const i = Math.min(t - 1, this.length - 1);
          this.blocks[i].holder.after(o4);
        } else
          t === 0 && this.workingArea.prepend(o4);
        this.blocks.splice(t, 0, ...e);
      } else
        this.blocks.push(...e), this.workingArea.appendChild(o4);
      e.forEach((i) => i.call(J.RENDERED));
    }
    /**
     * Remove block
     *
     * @param {number} index - index of Block to remove
     */
    remove(e) {
      isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(J.REMOVED), this.blocks.splice(e, 1);
    }
    /**
     * Remove all blocks
     */
    removeAll() {
      this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(J.REMOVED)), this.blocks.length = 0;
    }
    /**
     * Insert Block after passed target
     *
     * @todo decide if this method is necessary
     * @param {Block} targetBlock — target after which Block should be inserted
     * @param {Block} newBlock — Block to insert
     */
    insertAfter(e, t) {
      const o4 = this.blocks.indexOf(e);
      this.insert(o4 + 1, t);
    }
    /**
     * Get Block by index
     *
     * @param {number} index — Block index
     * @returns {Block}
     */
    get(e) {
      return this.blocks[e];
    }
    /**
     * Return index of passed Block
     *
     * @param {Block} block - Block to find
     * @returns {number}
     */
    indexOf(e) {
      return this.blocks.indexOf(e);
    }
    /**
     * Insert new Block into DOM
     *
     * @param {Block} block - Block to insert
     * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
     * @param {Block} target — Block related to position
     */
    insertToDOM(e, t, o4) {
      t ? o4.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(J.RENDERED);
    }
    /**
     * Composes Block event with passed type and details
     *
     * @param {string} type - event type
     * @param {object} detail - event detail
     */
    composeBlockEvent(e, t) {
      return new CustomEvent(e, {
        detail: t
      });
    }
  };
  var Tt = "block-removed";
  var Ct = "block-added";
  var Ji = "block-moved";
  var St = "block-changed";
  var Qi = class {
    constructor() {
      this.completed = Promise.resolve();
    }
    /**
     * Add new promise to queue
     *
     * @param operation - promise should be added to queue
     */
    add(e) {
      return new Promise((t, o4) => {
        this.completed = this.completed.then(e).then(t).catch(o4);
      });
    }
  };
  var es = class extends y {
    constructor() {
      super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
    }
    /**
     * Returns current Block index
     *
     * @returns {number}
     */
    get currentBlockIndex() {
      return this._currentBlockIndex;
    }
    /**
     * Set current Block index and fire Block lifecycle callbacks
     *
     * @param {number} newIndex - index of Block to set as current
     */
    set currentBlockIndex(e) {
      this._currentBlockIndex = e;
    }
    /**
     * returns first Block
     *
     * @returns {Block}
     */
    get firstBlock() {
      return this._blocks[0];
    }
    /**
     * returns last Block
     *
     * @returns {Block}
     */
    get lastBlock() {
      return this._blocks[this._blocks.length - 1];
    }
    /**
     * Get current Block instance
     *
     * @returns {Block}
     */
    get currentBlock() {
      return this._blocks[this.currentBlockIndex];
    }
    /**
     * Set passed Block as a current
     *
     * @param block - block to set as a current
     */
    set currentBlock(e) {
      this.currentBlockIndex = this.getBlockIndex(e);
    }
    /**
     * Returns next Block instance
     *
     * @returns {Block|null}
     */
    get nextBlock() {
      return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
    }
    /**
     * Return first Block with inputs after current Block
     *
     * @returns {Block | undefined}
     */
    get nextContentfulBlock() {
      return this.blocks.slice(this.currentBlockIndex + 1).find((t) => !!t.inputs.length);
    }
    /**
     * Return first Block with inputs before current Block
     *
     * @returns {Block | undefined}
     */
    get previousContentfulBlock() {
      return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t) => !!t.inputs.length);
    }
    /**
     * Returns previous Block instance
     *
     * @returns {Block|null}
     */
    get previousBlock() {
      return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
    }
    /**
     * Get array of Block instances
     *
     * @returns {Block[]} {@link Blocks#array}
     */
    get blocks() {
      return this._blocks.array;
    }
    /**
     * Check if each Block is empty
     *
     * @returns {boolean}
     */
    get isEditorEmpty() {
      return this.blocks.every((e) => e.isEmpty);
    }
    /**
     * Should be called after Editor.UI preparation
     * Define this._blocks property
     */
    prepare() {
      const e = new Xe(this.Editor.UI.nodes.redactor);
      this._blocks = new Proxy(e, {
        set: Xe.set,
        get: Xe.get
      }), this.listeners.on(
        document,
        "copy",
        (t) => this.Editor.BlockEvents.handleCommandC(t)
      );
    }
    /**
     * Toggle read-only state
     *
     * If readOnly is true:
     *  - Unbind event handlers from created Blocks
     *
     * if readOnly is false:
     *  - Bind event handlers to all existing Blocks
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(e) {
      e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
     * Creates Block instance by tool name
     *
     * @param {object} options - block creation options
     * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
     * @param {string} [options.id] - unique id for this block
     * @param {BlockToolData} [options.data] - constructor params
     * @returns {Block}
     */
    composeBlock({
      tool: e,
      data: t = {},
      id: o4 = void 0,
      tunes: i = {}
    }) {
      const s2 = this.Editor.ReadOnly.isEnabled, r2 = this.Editor.Tools.blockTools.get(e), l3 = new D({
        id: o4,
        data: t,
        tool: r2,
        api: this.Editor.API,
        readOnly: s2,
        tunesData: i
      }, this.eventsDispatcher);
      return s2 || window.requestIdleCallback(() => {
        this.bindBlockEvents(l3);
      }, { timeout: 2e3 }), l3;
    }
    /**
     * Insert new block into _blocks
     *
     * @param {object} options - insert options
     * @param {string} [options.id] - block's unique id
     * @param {string} [options.tool] - plugin name, by default method inserts the default block type
     * @param {object} [options.data] - plugin data
     * @param {number} [options.index] - index where to insert new Block
     * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
     * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
     * @returns {Block}
     */
    insert({
      id: e = void 0,
      tool: t = this.config.defaultBlock,
      data: o4 = {},
      index: i,
      needToFocus: s2 = true,
      replace: r2 = false,
      tunes: l3 = {}
    } = {}) {
      let a4 = i;
      a4 === void 0 && (a4 = this.currentBlockIndex + (r2 ? 0 : 1));
      const c2 = this.composeBlock({
        id: e,
        tool: t,
        data: o4,
        tunes: l3
      });
      return r2 && this.blockDidMutated(Tt, this.getBlockByIndex(a4), {
        index: a4
      }), this._blocks.insert(a4, c2, r2), this.blockDidMutated(Ct, c2, {
        index: a4
      }), s2 ? this.currentBlockIndex = a4 : a4 <= this.currentBlockIndex && this.currentBlockIndex++, c2;
    }
    /**
     * Inserts several blocks at once
     *
     * @param blocks - blocks to insert
     * @param index - index where to insert
     */
    insertMany(e, t = 0) {
      this._blocks.insertMany(e, t);
    }
    /**
     * Update Block data.
     *
     * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
     * Should not trigger 'block-removed' or 'block-added' events.
     *
     * If neither data nor tunes is provided, return the provided block instead.
     *
     * @param block - block to update
     * @param data - (optional) new data
     * @param tunes - (optional) tune data
     */
    async update(e, t, o4) {
      if (!t && !o4)
        return e;
      const i = await e.data, s2 = this.composeBlock({
        id: e.id,
        tool: e.name,
        data: Object.assign({}, i, t ?? {}),
        tunes: o4 ?? e.tunes
      }), r2 = this.getBlockIndex(e);
      return this._blocks.replace(r2, s2), this.blockDidMutated(St, s2, {
        index: r2
      }), s2;
    }
    /**
     * Replace passed Block with the new one with specified Tool and data
     *
     * @param block - block to replace
     * @param newTool - new Tool name
     * @param data - new Tool data
     */
    replace(e, t, o4) {
      const i = this.getBlockIndex(e);
      return this.insert({
        tool: t,
        data: o4,
        index: i,
        replace: true
      });
    }
    /**
     * Insert pasted content. Call onPaste callback after insert.
     *
     * @param {string} toolName - name of Tool to insert
     * @param {PasteEvent} pasteEvent - pasted data
     * @param {boolean} replace - should replace current block
     */
    paste(e, t, o4 = false) {
      const i = this.insert({
        tool: e,
        replace: o4
      });
      try {
        window.requestIdleCallback(() => {
          i.call(J.ON_PASTE, t);
        });
      } catch (s2) {
        I(`${e}: onPaste callback call is failed`, "error", s2);
      }
      return i;
    }
    /**
     * Insert new default block at passed index
     *
     * @param {number} index - index where Block should be inserted
     * @param {boolean} needToFocus - if true, updates current Block index
     *
     * TODO: Remove method and use insert() with index instead (?)
     * @returns {Block} inserted Block
     */
    insertDefaultBlockAtIndex(e, t = false) {
      const o4 = this.composeBlock({ tool: this.config.defaultBlock });
      return this._blocks[e] = o4, this.blockDidMutated(Ct, o4, {
        index: e
      }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o4;
    }
    /**
     * Always inserts at the end
     *
     * @returns {Block}
     */
    insertAtEnd() {
      return this.currentBlockIndex = this.blocks.length - 1, this.insert();
    }
    /**
     * Merge two blocks
     *
     * @param {Block} targetBlock - previous block will be append to this block
     * @param {Block} blockToMerge - block that will be merged with target block
     * @returns {Promise} - the sequence that can be continued
     */
    async mergeBlocks(e, t) {
      let o4;
      if (e.name === t.name && e.mergeable) {
        const i = await t.data;
        if (V(i)) {
          console.error("Could not merge Block. Failed to extract original Block data.");
          return;
        }
        const [s2] = it([i], e.tool.sanitizeConfig);
        o4 = s2;
      } else if (e.mergeable && _e(t, "export") && _e(e, "import")) {
        const i = await t.exportDataAsString(), s2 = q(i, e.tool.sanitizeConfig);
        o4 = xt(s2, e.tool.conversionConfig);
      }
      o4 !== void 0 && (await e.mergeWith(o4), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e));
    }
    /**
     * Remove passed Block
     *
     * @param block - Block to remove
     * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
     */
    removeBlock(e, t = true) {
      return new Promise((o4) => {
        const i = this._blocks.indexOf(e);
        if (!this.validateIndex(i))
          throw new Error("Can't find a Block to remove");
        e.destroy(), this._blocks.remove(i), this.blockDidMutated(Tt, e, {
          index: i
        }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.unsetCurrentBlock(), t && this.insert()), o4();
      });
    }
    /**
     * Remove only selected Blocks
     * and returns first Block index where started removing...
     *
     * @returns {number|undefined}
     */
    removeSelectedBlocks() {
      let e;
      for (let t = this.blocks.length - 1; t >= 0; t--)
        this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
      return e;
    }
    /**
     * Attention!
     * After removing insert the new default typed Block and focus on it
     * Removes all blocks
     */
    removeAllBlocks() {
      for (let e = this.blocks.length - 1; e >= 0; e--)
        this._blocks.remove(e);
      this.unsetCurrentBlock(), this.insert(), this.currentBlock.firstInput.focus();
    }
    /**
     * Split current Block
     * 1. Extract content from Caret position to the Block`s end
     * 2. Insert a new Block below current one with extracted content
     *
     * @returns {Block}
     */
    split() {
      const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = d.make("div");
      t.appendChild(e);
      const o4 = {
        text: d.isEmpty(t) ? "" : t.innerHTML
      };
      return this.insert({ data: o4 });
    }
    /**
     * Returns Block by passed index
     *
     * @param {number} index - index to get. -1 to get last
     * @returns {Block}
     */
    getBlockByIndex(e) {
      return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
    }
    /**
     * Returns an index for passed Block
     *
     * @param block - block to find index
     */
    getBlockIndex(e) {
      return this._blocks.indexOf(e);
    }
    /**
     * Returns the Block by passed id
     *
     * @param id - id of block to get
     * @returns {Block}
     */
    getBlockById(e) {
      return this._blocks.array.find((t) => t.id === e);
    }
    /**
     * Get Block instance by html element
     *
     * @param {Node} element - html element to get Block by
     */
    getBlock(e) {
      d.isElement(e) || (e = e.parentNode);
      const t = this._blocks.nodes, o4 = e.closest(`.${D.CSS.wrapper}`), i = t.indexOf(o4);
      if (i >= 0)
        return this._blocks[i];
    }
    /**
     * 1) Find first-level Block from passed child Node
     * 2) Mark it as current
     *
     * @param {Node} childNode - look ahead from this node.
     * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
     */
    setCurrentBlockByChildNode(e) {
      d.isElement(e) || (e = e.parentNode);
      const t = e.closest(`.${D.CSS.wrapper}`);
      if (!t)
        return;
      const o4 = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
      if (o4 != null && o4.isEqualNode(this.Editor.UI.nodes.wrapper))
        return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
    }
    /**
     * Return block which contents passed node
     *
     * @param {Node} childNode - node to get Block by
     * @returns {Block}
     */
    getBlockByChildNode(e) {
      if (!e || !(e instanceof Node))
        return;
      d.isElement(e) || (e = e.parentNode);
      const t = e.closest(`.${D.CSS.wrapper}`);
      return this.blocks.find((o4) => o4.holder === t);
    }
    /**
     * Swap Blocks Position
     *
     * @param {number} fromIndex - index of first block
     * @param {number} toIndex - index of second block
     * @deprecated — use 'move' instead
     */
    swap(e, t) {
      this._blocks.swap(e, t), this.currentBlockIndex = t;
    }
    /**
     * Move a block to a new index
     *
     * @param {number} toIndex - index where to move Block
     * @param {number} fromIndex - index of Block to move
     */
    move(e, t = this.currentBlockIndex) {
      if (isNaN(e) || isNaN(t)) {
        I("Warning during 'move' call: incorrect indices provided.", "warn");
        return;
      }
      if (!this.validateIndex(e) || !this.validateIndex(t)) {
        I("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
        return;
      }
      this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(Ji, this.currentBlock, {
        fromIndex: t,
        toIndex: e
      });
    }
    /**
     * Converts passed Block to the new Tool
     * Uses Conversion Config
     *
     * @param blockToConvert - Block that should be converted
     * @param targetToolName - name of the Tool to convert to
     * @param blockDataOverrides - optional new Block data overrides
     */
    async convert(e, t, o4) {
      if (!await e.save())
        throw new Error("Could not convert Block. Failed to extract original Block data.");
      const s2 = this.Editor.Tools.blockTools.get(t);
      if (!s2)
        throw new Error(`Could not convert Block. Tool \xAB${t}\xBB not found.`);
      const r2 = await e.exportDataAsString(), l3 = q(
        r2,
        s2.sanitizeConfig
      );
      let a4 = xt(l3, s2.conversionConfig);
      return o4 && (a4 = Object.assign(a4, o4)), this.replace(e, s2.name, a4);
    }
    /**
     * Sets current Block Index -1 which means unknown
     * and clear highlights
     */
    unsetCurrentBlock() {
      this.currentBlockIndex = -1;
    }
    /**
     * Clears Editor
     *
     * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
     *                                             we don't need to add an empty default block
     *                                        2) in api.blocks.clear we should add empty block
     */
    async clear(e = false) {
      const t = new Qi();
      this.blocks.forEach((o4) => {
        t.add(async () => {
          await this.removeBlock(o4, false);
        });
      }), await t.completed, this.unsetCurrentBlock(), e && this.insert(), this.Editor.UI.checkEmptiness();
    }
    /**
     * Cleans up all the block tools' resources
     * This is called when editor is destroyed
     */
    async destroy() {
      await Promise.all(this.blocks.map((e) => e.destroy()));
    }
    /**
     * Bind Block events
     *
     * @param {Block} block - Block to which event should be bound
     */
    bindBlockEvents(e) {
      const { BlockEvents: t } = this.Editor;
      this.readOnlyMutableListeners.on(e.holder, "keydown", (o4) => {
        t.keydown(o4);
      }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o4) => {
        t.keyup(o4);
      }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o4) => {
        t.dragOver(o4);
      }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o4) => {
        t.dragLeave(o4);
      }), e.on("didMutated", (o4) => this.blockDidMutated(St, o4, {
        index: this.getBlockIndex(o4)
      }));
    }
    /**
     * Disable mutable handlers and bindings
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Enables all module handlers and bindings for all Blocks
     */
    enableModuleBindings() {
      this.readOnlyMutableListeners.on(
        document,
        "cut",
        (e) => this.Editor.BlockEvents.handleCommandX(e)
      ), this.blocks.forEach((e) => {
        this.bindBlockEvents(e);
      });
    }
    /**
     * Validates that the given index is not lower than 0 or higher than the amount of blocks
     *
     * @param {number} index - index of blocks array to validate
     * @returns {boolean}
     */
    validateIndex(e) {
      return !(e < 0 || e >= this._blocks.length);
    }
    /**
     * Block mutation callback
     *
     * @param mutationType - what happened with block
     * @param block - mutated block
     * @param detailData - additional data to pass with change event
     */
    blockDidMutated(e, t, o4) {
      const i = new CustomEvent(e, {
        detail: {
          target: new G(t),
          ...o4
        }
      });
      return this.eventsDispatcher.emit(Dt, {
        event: i
      }), t;
    }
  };
  var ts = class extends y {
    constructor() {
      super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
    }
    /**
     * Sanitizer Config
     *
     * @returns {SanitizerConfig}
     */
    get sanitizerConfig() {
      return {
        p: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        ol: {},
        ul: {},
        li: {},
        br: true,
        img: {
          src: true,
          width: true,
          height: true
        },
        a: {
          href: true
        },
        b: {},
        i: {},
        u: {}
      };
    }
    /**
     * Flag that identifies all Blocks selection
     *
     * @returns {boolean}
     */
    get allBlocksSelected() {
      const { BlockManager: e } = this.Editor;
      return e.blocks.every((t) => t.selected === true);
    }
    /**
     * Set selected all blocks
     *
     * @param {boolean} state - state to set
     */
    set allBlocksSelected(e) {
      const { BlockManager: t } = this.Editor;
      t.blocks.forEach((o4) => {
        o4.selected = e;
      }), this.clearCache();
    }
    /**
     * Flag that identifies any Block selection
     *
     * @returns {boolean}
     */
    get anyBlockSelected() {
      const { BlockManager: e } = this.Editor;
      return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === true)), this.anyBlockSelectedCache;
    }
    /**
     * Return selected Blocks array
     *
     * @returns {Block[]}
     */
    get selectedBlocks() {
      return this.Editor.BlockManager.blocks.filter((e) => e.selected);
    }
    /**
     * Module Preparation
     * Registers Shortcuts CMD+A and CMD+C
     * to select all and copy them
     */
    prepare() {
      this.selection = new b(), he.add({
        name: "CMD+A",
        handler: (e) => {
          const { BlockManager: t, ReadOnly: o4 } = this.Editor;
          if (o4.isEnabled) {
            e.preventDefault(), this.selectAllBlocks();
            return;
          }
          t.currentBlock && this.handleCommandA(e);
        },
        on: this.Editor.UI.nodes.redactor
      });
    }
    /**
     * Toggle read-only state
     *
     *  - Remove all ranges
     *  - Unselect all Blocks
     */
    toggleReadOnly() {
      b.get().removeAllRanges(), this.allBlocksSelected = false;
    }
    /**
     * Remove selection of Block
     *
     * @param {number?} index - Block index according to the BlockManager's indexes
     */
    unSelectBlockByIndex(e) {
      const { BlockManager: t } = this.Editor;
      let o4;
      isNaN(e) ? o4 = t.currentBlock : o4 = t.getBlockByIndex(e), o4.selected = false, this.clearCache();
    }
    /**
     * Clear selection from Blocks
     *
     * @param {Event} reason - event caused clear of selection
     * @param {boolean} restoreSelection - if true, restore saved selection
     */
    clearSelection(e, t = false) {
      const { BlockManager: o4, Caret: i, RectangleSelection: s2 } = this.Editor;
      this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
      const r2 = e && e instanceof KeyboardEvent, l3 = r2 && Mt(e.keyCode);
      if (this.anyBlockSelected && r2 && l3 && !b.isSelectionExists) {
        const a4 = o4.removeSelectedBlocks();
        o4.insertDefaultBlockAtIndex(a4, true), i.setToBlock(o4.currentBlock), Oe(() => {
          const c2 = e.key;
          i.insertContentAtCaretPosition(c2.length > 1 ? "" : c2);
        }, 20)();
      }
      if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || s2.isRectActivated()) {
        this.Editor.RectangleSelection.clearSelection();
        return;
      }
      t && this.selection.restore(), this.allBlocksSelected = false;
    }
    /**
     * Reduce each Block and copy its content
     *
     * @param {ClipboardEvent} e - copy/cut event
     * @returns {Promise<void>}
     */
    copySelectedBlocks(e) {
      e.preventDefault();
      const t = d.make("div");
      this.selectedBlocks.forEach((s2) => {
        const r2 = q(s2.holder.innerHTML, this.sanitizerConfig), l3 = d.make("p");
        l3.innerHTML = r2, t.appendChild(l3);
      });
      const o4 = Array.from(t.childNodes).map((s2) => s2.textContent).join(`

`), i = t.innerHTML;
      return e.clipboardData.setData("text/plain", o4), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((s2) => s2.save())).then((s2) => {
        try {
          e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(s2));
        } catch {
        }
      });
    }
    /**
     * Select Block by its index
     *
     * @param {number?} index - Block index according to the BlockManager's indexes
     */
    selectBlockByIndex(e) {
      const { BlockManager: t } = this.Editor, o4 = t.getBlockByIndex(e);
      o4 !== void 0 && this.selectBlock(o4);
    }
    /**
     * Select passed Block
     *
     * @param {Block} block - Block to select
     */
    selectBlock(e) {
      this.selection.save(), b.get().removeAllRanges(), e.selected = true, this.clearCache(), this.Editor.InlineToolbar.close();
    }
    /**
     * Remove selection from passed Block
     *
     * @param {Block} block - Block to unselect
     */
    unselectBlock(e) {
      e.selected = false, this.clearCache();
    }
    /**
     * Clear anyBlockSelected cache
     */
    clearCache() {
      this.anyBlockSelectedCache = null;
    }
    /**
     * Module destruction
     * De-registers Shortcut CMD+A
     */
    destroy() {
      he.remove(this.Editor.UI.nodes.redactor, "CMD+A");
    }
    /**
     * First CMD+A selects all input content by native behaviour,
     * next CMD+A keypress selects all blocks
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    handleCommandA(e) {
      if (this.Editor.RectangleSelection.clearSelection(), d.isNativeInput(e.target) && !this.readyToBlockSelection) {
        this.readyToBlockSelection = true;
        return;
      }
      const t = this.Editor.BlockManager.getBlock(e.target), o4 = t.inputs;
      if (o4.length > 1 && !this.readyToBlockSelection) {
        this.readyToBlockSelection = true;
        return;
      }
      if (o4.length === 1 && !this.needToSelectAll) {
        this.needToSelectAll = true;
        return;
      }
      this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = false, this.readyToBlockSelection = false) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = true);
    }
    /**
     * Select All Blocks
     * Each Block has selected setter that makes Block copyable
     */
    selectAllBlocks() {
      this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = true, this.Editor.InlineToolbar.close();
    }
  };
  var Re = class _Re extends y {
    /**
     * Allowed caret positions in input
     *
     * @static
     * @returns {{START: string, END: string, DEFAULT: string}}
     */
    get positions() {
      return {
        START: "start",
        END: "end",
        DEFAULT: "default"
      };
    }
    /**
     * Elements styles that can be useful for Caret Module
     */
    static get CSS() {
      return {
        shadowCaret: "cdx-shadow-caret"
      };
    }
    /**
     * Method gets Block instance and puts caret to the text node with offset
     * There two ways that method applies caret position:
     *   - first found text node: sets at the beginning, but you can pass an offset
     *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
     *
     * @param {Block} block - Block class
     * @param {string} position - position where to set caret.
     *                            If default - leave default behaviour and apply offset if it's passed
     * @param {number} offset - caret offset regarding to the text node
     */
    setToBlock(e, t = this.positions.DEFAULT, o4 = 0) {
      var c2;
      const { BlockManager: i, BlockSelection: s2 } = this.Editor;
      if (s2.clearSelection(), !e.focusable) {
        (c2 = window.getSelection()) == null || c2.removeAllRanges(), s2.selectBlock(e), i.currentBlock = e;
        return;
      }
      let r2;
      switch (t) {
        case this.positions.START:
          r2 = e.firstInput;
          break;
        case this.positions.END:
          r2 = e.lastInput;
          break;
        default:
          r2 = e.currentInput;
      }
      if (!r2)
        return;
      const l3 = d.getDeepestNode(r2, t === this.positions.END), a4 = d.getContentLength(l3);
      switch (true) {
        case t === this.positions.START:
          o4 = 0;
          break;
        case t === this.positions.END:
        case o4 > a4:
          o4 = a4;
          break;
      }
      this.set(l3, o4), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = r2;
    }
    /**
     * Set caret to the current input of current Block.
     *
     * @param {HTMLElement} input - input where caret should be set
     * @param {string} position - position of the caret.
     *                            If default - leave default behaviour and apply offset if it's passed
     * @param {number} offset - caret offset regarding to the text node
     */
    setToInput(e, t = this.positions.DEFAULT, o4 = 0) {
      const { currentBlock: i } = this.Editor.BlockManager, s2 = d.getDeepestNode(e);
      switch (t) {
        case this.positions.START:
          this.set(s2, 0);
          break;
        case this.positions.END:
          this.set(s2, d.getContentLength(s2));
          break;
        default:
          o4 && this.set(s2, o4);
      }
      i.currentInput = e;
    }
    /**
     * Creates Document Range and sets caret to the element with offset
     *
     * @param {HTMLElement} element - target node.
     * @param {number} offset - offset
     */
    set(e, t = 0) {
      const { top: i, bottom: s2 } = b.setCursor(e, t), { innerHeight: r2 } = window;
      i < 0 ? window.scrollBy(0, i - 30) : s2 > r2 && window.scrollBy(0, s2 - r2 + 30);
    }
    /**
     * Set Caret to the last Block
     * If last block is not empty, append another empty block
     */
    setToTheLastBlock() {
      const e = this.Editor.BlockManager.lastBlock;
      if (e)
        if (e.tool.isDefault && e.isEmpty)
          this.setToBlock(e);
        else {
          const t = this.Editor.BlockManager.insertAtEnd();
          this.setToBlock(t);
        }
    }
    /**
     * Extract content fragment of current Block from Caret position to the end of the Block
     */
    extractFragmentFromCaretPosition() {
      const e = b.get();
      if (e.rangeCount) {
        const t = e.getRangeAt(0), o4 = this.Editor.BlockManager.currentBlock.currentInput;
        if (t.deleteContents(), o4)
          if (d.isNativeInput(o4)) {
            const i = o4, s2 = document.createDocumentFragment(), r2 = i.value.substring(0, i.selectionStart), l3 = i.value.substring(i.selectionStart);
            return s2.textContent = l3, i.value = r2, s2;
          } else {
            const i = t.cloneRange();
            return i.selectNodeContents(o4), i.setStart(t.endContainer, t.endOffset), i.extractContents();
          }
      }
    }
    /**
     * Set's caret to the next Block or Tool`s input
     * Before moving caret, we should check if caret position is at the end of Plugins node
     * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
     *
     * @param {boolean} force - pass true to skip check for caret position
     */
    navigateNext(e = false) {
      const { BlockManager: t } = this.Editor, { currentBlock: o4, nextBlock: i } = t;
      if (o4 === void 0)
        return false;
      const { nextInput: s2, currentInput: r2 } = o4, l3 = r2 !== void 0 ? Ae(r2) : void 0;
      let a4 = i;
      const c2 = e || l3 || !o4.focusable;
      if (s2 && c2)
        return this.setToInput(s2, this.positions.START), true;
      if (a4 === null) {
        if (o4.tool.isDefault || !c2)
          return false;
        a4 = t.insertAtEnd();
      }
      return c2 ? (this.setToBlock(a4, this.positions.START), true) : false;
    }
    /**
     * Set's caret to the previous Tool`s input or Block
     * Before moving caret, we should check if caret position is start of the Plugins node
     * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
     *
     * @param {boolean} force - pass true to skip check for caret position
     */
    navigatePrevious(e = false) {
      const { currentBlock: t, previousBlock: o4 } = this.Editor.BlockManager;
      if (!t)
        return false;
      const { previousInput: i, currentInput: s2 } = t, r2 = s2 !== void 0 ? Me(s2) : void 0, l3 = e || r2 || !t.focusable;
      return i && l3 ? (this.setToInput(i, this.positions.END), true) : o4 !== null && l3 ? (this.setToBlock(o4, this.positions.END), true) : false;
    }
    /**
     * Inserts shadow element after passed element where caret can be placed
     *
     * @param {Element} element - element after which shadow caret should be inserted
     */
    createShadow(e) {
      const t = document.createElement("span");
      t.classList.add(_Re.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
    }
    /**
     * Restores caret position
     *
     * @param {HTMLElement} element - element where caret should be restored
     */
    restoreCaret(e) {
      const t = e.querySelector(`.${_Re.CSS.shadowCaret}`);
      if (!t)
        return;
      new b().expandToTag(t);
      const i = document.createRange();
      i.selectNode(t), i.extractContents();
    }
    /**
     * Inserts passed content at caret position
     *
     * @param {string} content - content to insert
     */
    insertContentAtCaretPosition(e) {
      const t = document.createDocumentFragment(), o4 = document.createElement("div"), i = b.get(), s2 = b.range;
      o4.innerHTML = e, Array.from(o4.childNodes).forEach((c2) => t.appendChild(c2)), t.childNodes.length === 0 && t.appendChild(new Text());
      const r2 = t.lastChild;
      s2.deleteContents(), s2.insertNode(t);
      const l3 = document.createRange(), a4 = r2.nodeType === Node.TEXT_NODE ? r2 : r2.firstChild;
      a4 !== null && a4.textContent !== null && l3.setStart(a4, a4.textContent.length), i.removeAllRanges(), i.addRange(l3);
    }
  };
  var os = class extends y {
    constructor() {
      super(...arguments), this.onMouseUp = () => {
        this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
      }, this.onMouseOver = (e) => {
        const { BlockManager: t, BlockSelection: o4 } = this.Editor;
        if (e.relatedTarget === null && e.target === null)
          return;
        const i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, s2 = t.getBlockByChildNode(e.target);
        if (!(!i || !s2) && s2 !== i) {
          if (i === this.firstSelectedBlock) {
            b.get().removeAllRanges(), i.selected = true, s2.selected = true, o4.clearCache();
            return;
          }
          if (s2 === this.firstSelectedBlock) {
            i.selected = false, s2.selected = false, o4.clearCache();
            return;
          }
          this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, s2), this.lastSelectedBlock = s2;
        }
      };
    }
    /**
     * Module preparation
     *
     * @returns {Promise}
     */
    async prepare() {
      this.listeners.on(document, "mousedown", (e) => {
        this.enableCrossBlockSelection(e);
      });
    }
    /**
     * Sets up listeners
     *
     * @param {MouseEvent} event - mouse down event
     */
    watchSelection(e) {
      if (e.button !== wo.LEFT)
        return;
      const { BlockManager: t } = this.Editor;
      this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
    }
    /**
     * Return boolean is cross block selection started:
     * there should be at least 2 selected blocks
     */
    get isCrossBlockSelectionStarted() {
      return !!this.firstSelectedBlock && !!this.lastSelectedBlock && this.firstSelectedBlock !== this.lastSelectedBlock;
    }
    /**
     * Change selection state of the next Block
     * Used for CBS via Shift + arrow keys
     *
     * @param {boolean} next - if true, toggle next block. Previous otherwise
     */
    toggleBlockSelectedState(e = true) {
      const { BlockManager: t, BlockSelection: o4 } = this.Editor;
      this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = true, o4.clearCache(), b.get().removeAllRanges());
      const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), s2 = t.blocks[i];
      s2 && (this.lastSelectedBlock.selected !== s2.selected ? (s2.selected = true, o4.clearCache()) : (this.lastSelectedBlock.selected = false, o4.clearCache()), this.lastSelectedBlock = s2, this.Editor.InlineToolbar.close(), s2.holder.scrollIntoView({
        block: "nearest"
      }));
    }
    /**
     * Clear saved state
     *
     * @param {Event} reason - event caused clear of selection
     */
    clear(e) {
      const { BlockManager: t, BlockSelection: o4, Caret: i } = this.Editor, s2 = t.blocks.indexOf(this.firstSelectedBlock), r2 = t.blocks.indexOf(this.lastSelectedBlock);
      if (o4.anyBlockSelected && s2 > -1 && r2 > -1 && e && e instanceof KeyboardEvent)
        switch (e.keyCode) {
          case w.DOWN:
          case w.RIGHT:
            i.setToBlock(t.blocks[Math.max(s2, r2)], i.positions.END);
            break;
          case w.UP:
          case w.LEFT:
            i.setToBlock(t.blocks[Math.min(s2, r2)], i.positions.START);
            break;
          default:
            i.setToBlock(t.blocks[Math.max(s2, r2)], i.positions.END);
        }
      this.firstSelectedBlock = this.lastSelectedBlock = null;
    }
    /**
     * Enables Cross Block Selection
     *
     * @param {MouseEvent} event - mouse down event
     */
    enableCrossBlockSelection(e) {
      const { UI: t } = this.Editor;
      b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Change blocks selection state between passed two blocks.
     *
     * @param {Block} firstBlock - first block in range
     * @param {Block} lastBlock - last block in range
     */
    toggleBlocksSelectedState(e, t) {
      const { BlockManager: o4, BlockSelection: i } = this.Editor, s2 = o4.blocks.indexOf(e), r2 = o4.blocks.indexOf(t), l3 = e.selected !== t.selected;
      for (let a4 = Math.min(s2, r2); a4 <= Math.max(s2, r2); a4++) {
        const c2 = o4.blocks[a4];
        c2 !== this.firstSelectedBlock && c2 !== (l3 ? e : t) && (o4.blocks[a4].selected = !o4.blocks[a4].selected, i.clearCache());
      }
    }
  };
  var is = class extends y {
    constructor() {
      super(...arguments), this.isStartedAtEditor = false;
    }
    /**
     * Toggle read-only state
     *
     * if state is true:
     *  - disable all drag-n-drop event handlers
     *
     * if state is false:
     *  - restore drag-n-drop event handlers
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(e) {
      e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
     * Add drag events listeners to editor zone
     */
    enableModuleBindings() {
      const { UI: e } = this.Editor;
      this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
        await this.processDrop(t);
      }, true), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
        this.processDragStart();
      }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
        this.processDragOver(t);
      }, true);
    }
    /**
     * Unbind drag-n-drop event handlers
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Handle drop event
     *
     * @param {DragEvent} dropEvent - drop event
     */
    async processDrop(e) {
      const {
        BlockManager: t,
        Paste: o4,
        Caret: i
      } = this.Editor;
      e.preventDefault(), t.blocks.forEach((r2) => {
        r2.dropTarget = false;
      }), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = false;
      const s2 = t.setCurrentBlockByChildNode(e.target);
      if (s2)
        this.Editor.Caret.setToBlock(s2, i.positions.END);
      else {
        const r2 = t.setCurrentBlockByChildNode(t.lastBlock.holder);
        this.Editor.Caret.setToBlock(r2, i.positions.END);
      }
      await o4.processDataTransfer(e.dataTransfer, true);
    }
    /**
     * Handle drag start event
     */
    processDragStart() {
      b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = true), this.Editor.InlineToolbar.close();
    }
    /**
     * @param {DragEvent} dragEvent - drag event
     */
    processDragOver(e) {
      e.preventDefault();
    }
  };
  var ss = 180;
  var ns = 400;
  var rs = class extends y {
    /**
     * Prepare the module
     *
     * @param options - options used by the modification observer module
     * @param options.config - Editor configuration object
     * @param options.eventsDispatcher - common Editor event bus
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.disabled = false, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = ns, this.mutationObserver = new MutationObserver((o4) => {
        this.redactorChanged(o4);
      }), this.eventsDispatcher.on(Dt, (o4) => {
        this.particularBlockChanged(o4.event);
      }), this.eventsDispatcher.on(Rt, () => {
        this.disable();
      }), this.eventsDispatcher.on(Ft, () => {
        this.enable();
      });
    }
    /**
     * Enables onChange event
     */
    enable() {
      this.mutationObserver.observe(
        this.Editor.UI.nodes.redactor,
        {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true
        }
      ), this.disabled = false;
    }
    /**
     * Disables onChange event
     */
    disable() {
      this.mutationObserver.disconnect(), this.disabled = true;
    }
    /**
     * Call onChange event passed to Editor.js configuration
     *
     * @param event - some of our custom change events
     */
    particularBlockChanged(e) {
      this.disabled || !O(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
        let t;
        this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
      }, this.batchTime));
    }
    /**
     * Fired on every blocks wrapper dom change
     *
     * @param mutations - mutations happened
     */
    redactorChanged(e) {
      this.eventsDispatcher.emit(Je, {
        mutations: e
      });
    }
  };
  var ro = class lo extends y {
    constructor() {
      super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e) => {
        try {
          const t = e.create({}, {}, false);
          if (e.pasteConfig === false) {
            this.exceptionList.push(e.name);
            return;
          }
          if (!O(t.onPaste))
            return;
          this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
        } catch (t) {
          I(
            `Paste handling for \xAB${e.name}\xBB Tool hasn't been set up because of the error`,
            "warn",
            t
          );
        }
      }, this.handlePasteEvent = async (e) => {
        const { BlockManager: t, Toolbar: o4 } = this.Editor, i = t.setCurrentBlockByChildNode(e.target);
        !i || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || i && this.exceptionList.includes(i.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), o4.close());
      };
    }
    /**
     * Set onPaste callback and collect tools` paste configurations
     */
    async prepare() {
      this.processTools();
    }
    /**
     * Set read-only state
     *
     * @param {boolean} readOnlyEnabled - read only flag value
     */
    toggleReadOnly(e) {
      e ? this.unsetCallback() : this.setCallback();
    }
    /**
     * Handle pasted or dropped data transfer object
     *
     * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
     * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
     */
    async processDataTransfer(e, t = false) {
      const { Tools: o4 } = this.Editor, i = e.types;
      if ((i.includes ? i.includes("Files") : i.contains("Files")) && !V(this.toolsFiles)) {
        await this.processFiles(e.files);
        return;
      }
      const r2 = e.getData(this.MIME_TYPE), l3 = e.getData("text/plain");
      let a4 = e.getData("text/html");
      if (r2)
        try {
          this.insertEditorJSData(JSON.parse(r2));
          return;
        } catch {
        }
      t && l3.trim() && a4.trim() && (a4 = "<p>" + (a4.trim() ? a4 : l3) + "</p>");
      const c2 = Object.keys(this.toolsTags).reduce((p4, g5) => (p4[g5.toLowerCase()] = this.toolsTags[g5].sanitizationConfig ?? {}, p4), {}), u2 = Object.assign({}, c2, o4.getAllInlineToolsSanitizeConfig(), { br: {} }), h4 = q(a4, u2);
      !h4.trim() || h4.trim() === l3 || !d.isHTMLString(h4) ? await this.processText(l3) : await this.processText(h4, true);
    }
    /**
     * Process pasted text and divide them into Blocks
     *
     * @param {string} data - text to process. Can be HTML or plain.
     * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
     */
    async processText(e, t = false) {
      const { Caret: o4, BlockManager: i } = this.Editor, s2 = t ? this.processHTML(e) : this.processPlain(e);
      if (!s2.length)
        return;
      if (s2.length === 1) {
        s2[0].isBlock ? this.processSingleBlock(s2.pop()) : this.processInlinePaste(s2.pop());
        return;
      }
      const l3 = i.currentBlock && i.currentBlock.tool.isDefault && i.currentBlock.isEmpty;
      s2.map(
        async (a4, c2) => this.insertBlock(a4, c2 === 0 && l3)
      ), i.currentBlock && o4.setToBlock(i.currentBlock, o4.positions.END);
    }
    /**
     * Set onPaste callback handler
     */
    setCallback() {
      this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
    }
    /**
     * Unset onPaste callback handler
     */
    unsetCallback() {
      this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
    }
    /**
     * Get and process tool`s paste configs
     */
    processTools() {
      const e = this.Editor.Tools.blockTools;
      Array.from(e.values()).forEach(this.processTool);
    }
    /**
     * Get tags name list from either tag name or sanitization config.
     *
     * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
     * @returns {string[]} array of tags.
     */
    collectTagNames(e) {
      return Q(e) ? [e] : R(e) ? Object.keys(e) : [];
    }
    /**
     * Get tags to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getTagsConfig(e) {
      if (e.pasteConfig === false)
        return;
      const t = e.pasteConfig.tags || [], o4 = [];
      t.forEach((i) => {
        const s2 = this.collectTagNames(i);
        o4.push(...s2), s2.forEach((r2) => {
          if (Object.prototype.hasOwnProperty.call(this.toolsTags, r2)) {
            I(
              `Paste handler for \xAB${e.name}\xBB Tool on \xAB${r2}\xBB tag is skipped because it is already used by \xAB${this.toolsTags[r2].tool.name}\xBB Tool.`,
              "warn"
            );
            return;
          }
          const l3 = R(i) ? i[r2] : null;
          this.toolsTags[r2.toUpperCase()] = {
            tool: e,
            sanitizationConfig: l3
          };
        });
      }), this.tagsByTool[e.name] = o4.map((i) => i.toUpperCase());
    }
    /**
     * Get files` types and extensions to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getFilesConfig(e) {
      if (e.pasteConfig === false)
        return;
      const { files: t = {} } = e.pasteConfig;
      let { extensions: o4, mimeTypes: i } = t;
      !o4 && !i || (o4 && !Array.isArray(o4) && (I(`\xABextensions\xBB property of the onDrop config for \xAB${e.name}\xBB Tool should be an array`), o4 = []), i && !Array.isArray(i) && (I(`\xABmimeTypes\xBB property of the onDrop config for \xAB${e.name}\xBB Tool should be an array`), i = []), i && (i = i.filter((s2) => To(s2) ? true : (I(`MIME type value \xAB${s2}\xBB for the \xAB${e.name}\xBB Tool is not a valid MIME type`, "warn"), false))), this.toolsFiles[e.name] = {
        extensions: o4 || [],
        mimeTypes: i || []
      });
    }
    /**
     * Get RegExp patterns to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getPatternsConfig(e) {
      e.pasteConfig === false || !e.pasteConfig.patterns || V(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(([t, o4]) => {
        o4 instanceof RegExp || I(
          `Pattern ${o4} for \xAB${e.name}\xBB Tool is skipped because it should be a Regexp instance.`,
          "warn"
        ), this.toolsPatterns.push({
          key: t,
          pattern: o4,
          tool: e
        });
      });
    }
    /**
     * Check if browser behavior suits better
     *
     * @param {EventTarget} element - element where content has been pasted
     * @returns {boolean}
     */
    isNativeBehaviour(e) {
      return d.isNativeInput(e);
    }
    /**
     * Get files from data transfer object and insert related Tools
     *
     * @param {FileList} items - pasted or dropped items
     */
    async processFiles(e) {
      const { BlockManager: t } = this.Editor;
      let o4;
      o4 = await Promise.all(
        Array.from(e).map((r2) => this.processFile(r2))
      ), o4 = o4.filter((r2) => !!r2);
      const s2 = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
      o4.forEach(
        (r2, l3) => {
          t.paste(r2.type, r2.event, l3 === 0 && s2);
        }
      );
    }
    /**
     * Get information about file and find Tool to handle it
     *
     * @param {File} file - file to process
     */
    async processFile(e) {
      const t = Bo(e), o4 = Object.entries(this.toolsFiles).find(([r2, { mimeTypes: l3, extensions: a4 }]) => {
        const [c2, u2] = e.type.split("/"), h4 = a4.find((g5) => g5.toLowerCase() === t.toLowerCase()), p4 = l3.find((g5) => {
          const [f2, k3] = g5.split("/");
          return f2 === c2 && (k3 === u2 || k3 === "*");
        });
        return !!h4 || !!p4;
      });
      if (!o4)
        return;
      const [i] = o4;
      return {
        event: this.composePasteEvent("file", {
          file: e
        }),
        type: i
      };
    }
    /**
     * Split HTML string to blocks and return it as array of Block data
     *
     * @param {string} innerHTML - html string to process
     * @returns {PasteData[]}
     */
    processHTML(e) {
      const { Tools: t } = this.Editor, o4 = d.make("DIV");
      return o4.innerHTML = e, this.getNodes(o4).map((s2) => {
        let r2, l3 = t.defaultTool, a4 = false;
        switch (s2.nodeType) {
          case Node.DOCUMENT_FRAGMENT_NODE:
            r2 = d.make("div"), r2.appendChild(s2);
            break;
          case Node.ELEMENT_NODE:
            r2 = s2, a4 = true, this.toolsTags[r2.tagName] && (l3 = this.toolsTags[r2.tagName].tool);
            break;
        }
        const { tags: c2 } = l3.pasteConfig || { tags: [] }, u2 = c2.reduce((g5, f2) => (this.collectTagNames(f2).forEach((C3) => {
          const S2 = R(f2) ? f2[C3] : null;
          g5[C3.toLowerCase()] = S2 || {};
        }), g5), {}), h4 = Object.assign({}, u2, l3.baseSanitizeConfig);
        if (r2.tagName.toLowerCase() === "table") {
          const g5 = q(r2.outerHTML, h4);
          r2 = d.make("div", void 0, {
            innerHTML: g5
          }).firstChild;
        } else
          r2.innerHTML = q(r2.innerHTML, h4);
        const p4 = this.composePasteEvent("tag", {
          data: r2
        });
        return {
          content: r2,
          isBlock: a4,
          tool: l3.name,
          event: p4
        };
      }).filter((s2) => {
        const r2 = d.isEmpty(s2.content), l3 = d.isSingleTag(s2.content);
        return !r2 || l3;
      });
    }
    /**
     * Split plain text by new line symbols and return it as array of Block data
     *
     * @param {string} plain - string to process
     * @returns {PasteData[]}
     */
    processPlain(e) {
      const { defaultBlock: t } = this.config;
      if (!e)
        return [];
      const o4 = t;
      return e.split(/\r?\n/).filter((i) => i.trim()).map((i) => {
        const s2 = d.make("div");
        s2.textContent = i;
        const r2 = this.composePasteEvent("tag", {
          data: s2
        });
        return {
          content: s2,
          tool: o4,
          isBlock: false,
          event: r2
        };
      });
    }
    /**
     * Process paste of single Block tool content
     *
     * @param {PasteData} dataToInsert - data of Block to insert
     */
    async processSingleBlock(e) {
      const { Caret: t, BlockManager: o4 } = this.Editor, { currentBlock: i } = o4;
      if (!i || e.tool !== i.name || !d.containsOnlyInlineElements(e.content.innerHTML)) {
        this.insertBlock(e, (i == null ? void 0 : i.tool.isDefault) && i.isEmpty);
        return;
      }
      t.insertContentAtCaretPosition(e.content.innerHTML);
    }
    /**
     * Process paste to single Block:
     * 1. Find patterns` matches
     * 2. Insert new block if it is not the same type as current one
     * 3. Just insert text if there is no substitutions
     *
     * @param {PasteData} dataToInsert - data of Block to insert
     */
    async processInlinePaste(e) {
      const { BlockManager: t, Caret: o4 } = this.Editor, { content: i } = e;
      if (t.currentBlock && t.currentBlock.tool.isDefault && i.textContent.length < lo.PATTERN_PROCESSING_MAX_LENGTH) {
        const r2 = await this.processPattern(i.textContent);
        if (r2) {
          const l3 = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty, a4 = t.paste(r2.tool, r2.event, l3);
          o4.setToBlock(a4, o4.positions.END);
          return;
        }
      }
      if (t.currentBlock && t.currentBlock.currentInput) {
        const r2 = t.currentBlock.tool.baseSanitizeConfig;
        document.execCommand(
          "insertHTML",
          false,
          q(i.innerHTML, r2)
        );
      } else
        this.insertBlock(e);
    }
    /**
     * Get patterns` matches
     *
     * @param {string} text - text to process
     * @returns {Promise<{event: PasteEvent, tool: string}>}
     */
    async processPattern(e) {
      const t = this.toolsPatterns.find((i) => {
        const s2 = i.pattern.exec(e);
        return s2 ? e === s2.shift() : false;
      });
      return t ? {
        event: this.composePasteEvent("pattern", {
          key: t.key,
          data: e
        }),
        tool: t.tool.name
      } : void 0;
    }
    /**
     * Insert pasted Block content to Editor
     *
     * @param {PasteData} data - data to insert
     * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
     * @returns {void}
     */
    insertBlock(e, t = false) {
      const { BlockManager: o4, Caret: i } = this.Editor, { currentBlock: s2 } = o4;
      let r2;
      if (t && s2 && s2.isEmpty) {
        r2 = o4.paste(e.tool, e.event, true), i.setToBlock(r2, i.positions.END);
        return;
      }
      r2 = o4.paste(e.tool, e.event), i.setToBlock(r2, i.positions.END);
    }
    /**
     * Insert data passed as application/x-editor-js JSON
     *
     * @param {Array} blocks — Blocks' data to insert
     * @returns {void}
     */
    insertEditorJSData(e) {
      const { BlockManager: t, Caret: o4, Tools: i } = this.Editor;
      it(
        e,
        (r2) => i.blockTools.get(r2).sanitizeConfig
      ).forEach(({ tool: r2, data: l3 }, a4) => {
        let c2 = false;
        a4 === 0 && (c2 = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty);
        const u2 = t.insert({
          tool: r2,
          data: l3,
          replace: c2
        });
        o4.setToBlock(u2, o4.positions.END);
      });
    }
    /**
     * Fetch nodes from Element node
     *
     * @param {Node} node - current node
     * @param {Node[]} nodes - processed nodes
     * @param {Node} destNode - destination node
     */
    processElementNode(e, t, o4) {
      const i = Object.keys(this.toolsTags), s2 = e, { tool: r2 } = this.toolsTags[s2.tagName] || {}, l3 = this.tagsByTool[r2 == null ? void 0 : r2.name] || [], a4 = i.includes(s2.tagName), c2 = d.blockElements.includes(s2.tagName.toLowerCase()), u2 = Array.from(s2.children).some(
        ({ tagName: p4 }) => i.includes(p4) && !l3.includes(p4)
      ), h4 = Array.from(s2.children).some(
        ({ tagName: p4 }) => d.blockElements.includes(p4.toLowerCase())
      );
      if (!c2 && !a4 && !u2)
        return o4.appendChild(s2), [...t, o4];
      if (a4 && !u2 || c2 && !h4 && !u2)
        return [...t, o4, s2];
    }
    /**
     * Recursively divide HTML string to two types of nodes:
     * 1. Block element
     * 2. Document Fragments contained text and markup tags like a, b, i etc.
     *
     * @param {Node} wrapper - wrapper of paster HTML content
     * @returns {Node[]}
     */
    getNodes(e) {
      const t = Array.from(e.childNodes);
      let o4;
      const i = (s2, r2) => {
        if (d.isEmpty(r2) && !d.isSingleTag(r2))
          return s2;
        const l3 = s2[s2.length - 1];
        let a4 = new DocumentFragment();
        switch (l3 && d.isFragment(l3) && (a4 = s2.pop()), r2.nodeType) {
          case Node.ELEMENT_NODE:
            if (o4 = this.processElementNode(r2, s2, a4), o4)
              return o4;
            break;
          case Node.TEXT_NODE:
            return a4.appendChild(r2), [...s2, a4];
          default:
            return [...s2, a4];
        }
        return [...s2, ...Array.from(r2.childNodes).reduce(i, [])];
      };
      return t.reduce(i, []);
    }
    /**
     * Compose paste event with passed type and detail
     *
     * @param {string} type - event type
     * @param {PasteEventDetail} detail - event detail
     */
    composePasteEvent(e, t) {
      return new CustomEvent(e, {
        detail: t
      });
    }
  };
  ro.PATTERN_PROCESSING_MAX_LENGTH = 450;
  var ls = ro;
  var as = class extends y {
    constructor() {
      super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = false;
    }
    /**
     * Returns state of read only mode
     */
    get isEnabled() {
      return this.readOnlyEnabled;
    }
    /**
     * Set initial state
     */
    async prepare() {
      const { Tools: e } = this.Editor, { blockTools: t } = e, o4 = [];
      Array.from(t.entries()).forEach(([i, s2]) => {
        s2.isReadOnlySupported || o4.push(i);
      }), this.toolsDontSupportReadOnly = o4, this.config.readOnly && o4.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly, true);
    }
    /**
     * Set read-only mode or toggle current state
     * Call all Modules `toggleReadOnly` method and re-render Editor
     *
     * @param state - (optional) read-only state or toggle
     * @param isInitial - (optional) true when editor is initializing
     */
    async toggle(e = !this.readOnlyEnabled, t = false) {
      e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
      const o4 = this.readOnlyEnabled;
      this.readOnlyEnabled = e;
      for (const s2 in this.Editor)
        this.Editor[s2].toggleReadOnly && this.Editor[s2].toggleReadOnly(e);
      if (o4 === e)
        return this.readOnlyEnabled;
      if (t)
        return this.readOnlyEnabled;
      this.Editor.ModificationsObserver.disable();
      const i = await this.Editor.Saver.save();
      return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(i.blocks), this.Editor.ModificationsObserver.enable(), this.readOnlyEnabled;
    }
    /**
     * Throws an error about tools which don't support read-only mode
     */
    throwCriticalError() {
      throw new Pt(
        `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
      );
    }
  };
  var xe = class _xe extends y {
    constructor() {
      super(...arguments), this.isRectSelectionActivated = false, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = false, this.isScrolling = false, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
    }
    /**
     * CSS classes for the Block
     *
     * @returns {{wrapper: string, content: string}}
     */
    static get CSS() {
      return {
        overlay: "codex-editor-overlay",
        overlayContainer: "codex-editor-overlay__container",
        rect: "codex-editor-overlay__rectangle",
        topScrollZone: "codex-editor-overlay__scroll-zone--top",
        bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
      };
    }
    /**
     * Module Preparation
     * Creating rect and hang handlers
     */
    prepare() {
      this.enableModuleBindings();
    }
    /**
     * Init rect params
     *
     * @param {number} pageX - X coord of mouse
     * @param {number} pageY - Y coord of mouse
     */
    startSelection(e, t) {
      const o4 = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
      o4.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = false, this.clearSelection(), this.stackOfSelected = []);
      const s2 = [
        `.${D.CSS.content}`,
        `.${this.Editor.Toolbar.CSS.toolbar}`,
        `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
      ], r2 = o4.closest("." + this.Editor.UI.CSS.editorWrapper), l3 = s2.some((a4) => !!o4.closest(a4));
      !r2 || l3 || (this.mousedown = true, this.startX = e, this.startY = t);
    }
    /**
     * Clear all params to end selection
     */
    endSelection() {
      this.mousedown = false, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
    }
    /**
     * is RectSelection Activated
     */
    isRectActivated() {
      return this.isRectSelectionActivated;
    }
    /**
     * Mark that selection is end
     */
    clearSelection() {
      this.isRectSelectionActivated = false;
    }
    /**
     * Sets Module necessary event handlers
     */
    enableModuleBindings() {
      const { container: e } = this.genHTML();
      this.listeners.on(e, "mousedown", (t) => {
        this.processMouseDown(t);
      }, false), this.listeners.on(document.body, "mousemove", Ve((t) => {
        this.processMouseMove(t);
      }, 10), {
        passive: true
      }), this.listeners.on(document.body, "mouseleave", () => {
        this.processMouseLeave();
      }), this.listeners.on(window, "scroll", Ve((t) => {
        this.processScroll(t);
      }, 10), {
        passive: true
      }), this.listeners.on(document.body, "mouseup", () => {
        this.processMouseUp();
      }, false);
    }
    /**
     * Handle mouse down events
     *
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    processMouseDown(e) {
      if (e.button !== this.MAIN_MOUSE_BUTTON)
        return;
      e.target.closest(d.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
    }
    /**
     * Handle mouse move events
     *
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    processMouseMove(e) {
      this.changingRectangle(e), this.scrollByZones(e.clientY);
    }
    /**
     * Handle mouse leave
     */
    processMouseLeave() {
      this.clearSelection(), this.endSelection();
    }
    /**
     * @param {MouseEvent} mouseEvent - mouse event payload
     */
    processScroll(e) {
      this.changingRectangle(e);
    }
    /**
     * Handle mouse up
     */
    processMouseUp() {
      this.clearSelection(), this.endSelection();
    }
    /**
     * Scroll If mouse in scroll zone
     *
     * @param {number} clientY - Y coord of mouse
     */
    scrollByZones(e) {
      if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
        this.isScrolling = false;
        return;
      }
      this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = true);
    }
    /**
     * Generates required HTML elements
     *
     * @returns {Object<string, Element>}
     */
    genHTML() {
      const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o4 = d.make("div", _xe.CSS.overlay, {}), i = d.make("div", _xe.CSS.overlayContainer, {}), s2 = d.make("div", _xe.CSS.rect, {});
      return i.appendChild(s2), o4.appendChild(i), t.appendChild(o4), this.overlayRectangle = s2, {
        container: t,
        overlay: o4
      };
    }
    /**
     * Activates scrolling if blockSelection is active and mouse is in scroll zone
     *
     * @param {number} speed - speed of scrolling
     */
    scrollVertical(e) {
      if (!(this.inScrollZone && this.mousedown))
        return;
      const t = window.pageYOffset;
      window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
        this.scrollVertical(e);
      }, 0);
    }
    /**
     * Handles the change in the rectangle and its effect
     *
     * @param {MouseEvent} event - mouse event
     */
    changingRectangle(e) {
      if (!this.mousedown)
        return;
      e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
      const { rightPos: t, leftPos: o4, index: i } = this.genInfoForMouseSelection(), s2 = this.startX > t && this.mouseX > t, r2 = this.startX < o4 && this.mouseX < o4;
      this.rectCrossesBlocks = !(s2 || r2), this.isRectSelectionActivated || (this.rectCrossesBlocks = false, this.isRectSelectionActivated = true, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), b.get().removeAllRanges());
    }
    /**
     * Shrink rect to singular point
     */
    shrinkRectangleToPoint() {
      this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
    }
    /**
     * Select or unselect all of blocks in array if rect is out or in selectable area
     */
    inverseSelection() {
      const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
      if (this.rectCrossesBlocks && !t)
        for (const o4 of this.stackOfSelected)
          this.Editor.BlockSelection.selectBlockByIndex(o4);
      if (!this.rectCrossesBlocks && t)
        for (const o4 of this.stackOfSelected)
          this.Editor.BlockSelection.unSelectBlockByIndex(o4);
    }
    /**
     * Updates size of rectangle
     */
    updateRectangleSize() {
      this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
    }
    /**
     * Collects information needed to determine the behavior of the rectangle
     *
     * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
     */
    genInfoForMouseSelection() {
      const t = document.body.offsetWidth / 2, o4 = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t, o4), s2 = this.Editor.BlockManager.getBlockByChildNode(i);
      let r2;
      s2 !== void 0 && (r2 = this.Editor.BlockManager.blocks.findIndex((h4) => h4.holder === s2.holder));
      const l3 = this.Editor.BlockManager.lastBlock.holder.querySelector("." + D.CSS.content), a4 = Number.parseInt(window.getComputedStyle(l3).width, 10) / 2, c2 = t - a4, u2 = t + a4;
      return {
        index: r2,
        leftPos: c2,
        rightPos: u2
      };
    }
    /**
     * Select block with index index
     *
     * @param index - index of block in redactor
     */
    addBlockInSelection(e) {
      this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
    }
    /**
     * Adds a block to the selection and determines which blocks should be selected
     *
     * @param {object} index - index of new block in the reactor
     */
    trySelectNextBlock(e) {
      const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o4 = this.stackOfSelected.length, i = 1, s2 = -1, r2 = 0;
      if (t)
        return;
      const l3 = this.stackOfSelected[o4 - 1] - this.stackOfSelected[o4 - 2] > 0;
      let a4 = r2;
      o4 > 1 && (a4 = l3 ? i : s2);
      const c2 = e > this.stackOfSelected[o4 - 1] && a4 === i, u2 = e < this.stackOfSelected[o4 - 1] && a4 === s2, p4 = !(c2 || u2 || a4 === r2);
      if (!p4 && (e > this.stackOfSelected[o4 - 1] || this.stackOfSelected[o4 - 1] === void 0)) {
        let k3 = this.stackOfSelected[o4 - 1] + 1 || e;
        for (k3; k3 <= e; k3++)
          this.addBlockInSelection(k3);
        return;
      }
      if (!p4 && e < this.stackOfSelected[o4 - 1]) {
        for (let k3 = this.stackOfSelected[o4 - 1] - 1; k3 >= e; k3--)
          this.addBlockInSelection(k3);
        return;
      }
      if (!p4)
        return;
      let g5 = o4 - 1, f2;
      for (e > this.stackOfSelected[o4 - 1] ? f2 = () => e > this.stackOfSelected[g5] : f2 = () => e < this.stackOfSelected[g5]; f2(); )
        this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g5]), this.stackOfSelected.pop(), g5--;
    }
  };
  var cs = class extends y {
    /**
     * Renders passed blocks as one batch
     *
     * @param blocksData - blocks to render
     */
    async render(e) {
      return new Promise((t) => {
        const { Tools: o4, BlockManager: i } = this.Editor;
        if (e.length === 0)
          i.insert();
        else {
          const s2 = e.map(({ type: r2, data: l3, tunes: a4, id: c2 }) => {
            o4.available.has(r2) === false && (X(`Tool \xAB${r2}\xBB is not found. Check 'tools' property at the Editor.js config.`, "warn"), l3 = this.composeStubDataForTool(r2, l3, c2), r2 = o4.stubTool);
            let u2;
            try {
              u2 = i.composeBlock({
                id: c2,
                tool: r2,
                data: l3,
                tunes: a4
              });
            } catch (h4) {
              I(`Block \xAB${r2}\xBB skipped because of plugins error`, "error", {
                data: l3,
                error: h4
              }), l3 = this.composeStubDataForTool(r2, l3, c2), r2 = o4.stubTool, u2 = i.composeBlock({
                id: c2,
                tool: r2,
                data: l3,
                tunes: a4
              });
            }
            return u2;
          });
          i.insertMany(s2);
        }
        window.requestIdleCallback(() => {
          t();
        }, { timeout: 2e3 });
      });
    }
    /**
     * Create data for the Stub Tool that will be used instead of unavailable tool
     *
     * @param tool - unavailable tool name to stub
     * @param data - data of unavailable block
     * @param [id] - id of unavailable block
     */
    composeStubDataForTool(e, t, o4) {
      const { Tools: i } = this.Editor;
      let s2 = e;
      if (i.unavailable.has(e)) {
        const r2 = i.unavailable.get(e).toolbox;
        r2 !== void 0 && r2[0].title !== void 0 && (s2 = r2[0].title);
      }
      return {
        savedData: {
          id: o4,
          type: e,
          data: t
        },
        title: s2
      };
    }
  };
  var ds = class extends y {
    /**
     * Composes new chain of Promises to fire them alternatelly
     *
     * @returns {OutputData}
     */
    async save() {
      const { BlockManager: e, Tools: t } = this.Editor, o4 = e.blocks, i = [];
      try {
        o4.forEach((l3) => {
          i.push(this.getSavedData(l3));
        });
        const s2 = await Promise.all(i), r2 = await it(s2, (l3) => t.blockTools.get(l3).sanitizeConfig);
        return this.makeOutput(r2);
      } catch (s2) {
        X("Saving failed due to the Error %o", "error", s2);
      }
    }
    /**
     * Saves and validates
     *
     * @param {Block} block - Editor's Tool
     * @returns {ValidatedData} - Tool's validated data
     */
    async getSavedData(e) {
      const t = await e.save(), o4 = t && await e.validate(t.data);
      return {
        ...t,
        isValid: o4
      };
    }
    /**
     * Creates output object with saved data, time and version of editor
     *
     * @param {ValidatedData} allExtractedData - data extracted from Blocks
     * @returns {OutputData}
     */
    makeOutput(e) {
      const t = [];
      return e.forEach(({ id: o4, tool: i, data: s2, tunes: r2, isValid: l3 }) => {
        if (!l3) {
          I(`Block \xAB${i}\xBB skipped because saved data is invalid`);
          return;
        }
        if (i === this.Editor.Tools.stubTool) {
          t.push(s2);
          return;
        }
        const a4 = {
          id: o4,
          type: i,
          data: s2,
          ...!V(r2) && {
            tunes: r2
          }
        };
        t.push(a4);
      }), {
        time: +/* @__PURE__ */ new Date(),
        blocks: t,
        version: "2.30.6"
      };
    }
  };
  (function() {
    try {
      if (typeof document < "u") {
        var n = document.createElement("style");
        n.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var hs = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
  function us(n) {
    const e = document.createElement("div");
    e.innerHTML = n.trim();
    const t = document.createDocumentFragment();
    return t.append(...Array.from(e.childNodes)), t;
  }
  var ht = class _ht {
    /**
     * Default placeholder for Paragraph Tool
     *
     * @returns {string}
     * @class
     */
    static get DEFAULT_PLACEHOLDER() {
      return "";
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - constructor params
     * @param {ParagraphData} params.data - previously saved data
     * @param {ParagraphConfig} params.config - user config for Tool
     * @param {object} params.api - editor.js api
     * @param {boolean} readOnly - read only mode flag
     */
    constructor({ data: e, config: t, api: o4, readOnly: i }) {
      this.api = o4, this.readOnly = i, this._CSS = {
        block: this.api.styles.block,
        wrapper: "ce-paragraph"
      }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : _ht.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? false;
    }
    /**
     * Check if text content is empty and set empty string to inner html.
     * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
     *
     * @param {KeyboardEvent} e - key up event
     */
    onKeyUp(e) {
      if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
        return;
      const { textContent: t } = this._element;
      t === "" && (this._element.innerHTML = "");
    }
    /**
     * Create Tool's view
     *
     * @returns {HTMLDivElement}
     * @private
     */
    drawView() {
      const e = document.createElement("DIV");
      return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement}
     */
    render() {
      return this._element = this.drawView(), this._element;
    }
    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * @param {ParagraphData} data
     * @public
     */
    merge(e) {
      if (!this._element)
        return;
      this._data.text += e.text;
      const t = us(e.text);
      this._element.appendChild(t), this._element.normalize();
    }
    /**
     * Validate Paragraph block data:
     * - check for emptiness
     *
     * @param {ParagraphData} savedData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(e) {
      return !(e.text.trim() === "" && !this._preserveBlank);
    }
    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
     * @returns {ParagraphData} - saved data
     * @public
     */
    save(e) {
      return {
        text: e.innerHTML
      };
    }
    /**
     * On paste callback fired from Editor.
     *
     * @param {HTMLPasteEvent} event - event with pasted data
     */
    onPaste(e) {
      const t = {
        text: e.detail.data.innerHTML
      };
      this._data = t, window.requestAnimationFrame(() => {
        this._element && (this._element.innerHTML = this._data.text || "");
      });
    }
    /**
     * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
     * @returns {ConversionConfig}
     */
    static get conversionConfig() {
      return {
        export: "text",
        // to convert Paragraph to other block, use 'text' property of saved data
        import: "text"
        // to covert other block's exported string to Paragraph, fill 'text' property of tool data
      };
    }
    /**
     * Sanitizer rules
     * @returns {SanitizerConfig} - Edtior.js sanitizer config
     */
    static get sanitize() {
      return {
        text: {
          br: true
        }
      };
    }
    /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Used by Editor paste handling API.
     * Provides configuration to handle P tags.
     *
     * @returns {PasteConfig} - Paragraph Paste Setting
     */
    static get pasteConfig() {
      return {
        tags: ["P"]
      };
    }
    /**
     * Icon and title for displaying at the Toolbox
     *
     * @returns {ToolboxConfig} - Paragraph Toolbox Setting
     */
    static get toolbox() {
      return {
        icon: hs,
        title: "Text"
      };
    }
  };
  var ut = class {
    constructor() {
      this.commandName = "bold";
    }
    /**
     * Sanitizer Rule
     * Leave <b> tags
     *
     * @returns {object}
     */
    static get sanitize() {
      return {
        b: {}
      };
    }
    /**
     * Create button for Inline Toolbar
     */
    render() {
      return {
        icon: bi,
        name: "bold",
        onActivate: () => {
          document.execCommand(this.commandName);
        },
        isActive: () => document.queryCommandState(this.commandName)
      };
    }
    /**
     * Set a shortcut
     *
     * @returns {boolean}
     */
    get shortcut() {
      return "CMD+B";
    }
  };
  ut.isInline = true;
  ut.title = "Bold";
  var pt = class {
    constructor() {
      this.commandName = "italic", this.CSS = {
        button: "ce-inline-tool",
        buttonActive: "ce-inline-tool--active",
        buttonModifier: "ce-inline-tool--italic"
      }, this.nodes = {
        button: null
      };
    }
    /**
     * Sanitizer Rule
     * Leave <i> tags
     *
     * @returns {object}
     */
    static get sanitize() {
      return {
        i: {}
      };
    }
    /**
     * Create button for Inline Toolbar
     */
    render() {
      return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Bi, this.nodes.button;
    }
    /**
     * Wrap range with <i> tag
     */
    surround() {
      document.execCommand(this.commandName);
    }
    /**
     * Check selection and set activated state to button if there are <i> tag
     */
    checkState() {
      const e = document.queryCommandState(this.commandName);
      return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
    }
    /**
     * Set a shortcut
     */
    get shortcut() {
      return "CMD+I";
    }
  };
  pt.isInline = true;
  pt.title = "Italic";
  var ft = class {
    /**
     * @param api - Editor.js API
     */
    constructor({ api: e }) {
      this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
        button: "ce-inline-tool",
        buttonActive: "ce-inline-tool--active",
        buttonModifier: "ce-inline-tool--link",
        buttonUnlink: "ce-inline-tool--unlink",
        input: "ce-inline-tool-input",
        inputShowed: "ce-inline-tool-input--showed"
      }, this.nodes = {
        button: null,
        input: null
      }, this.inputOpened = false, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b();
    }
    /**
     * Sanitizer Rule
     * Leave <a> tags
     *
     * @returns {object}
     */
    static get sanitize() {
      return {
        a: {
          href: true,
          target: "_blank",
          rel: "nofollow"
        }
      };
    }
    /**
     * Create button for Inline Toolbar
     */
    render() {
      return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = yt, this.nodes.button;
    }
    /**
     * Input for the link
     */
    renderActions() {
      return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
        e.keyCode === this.ENTER_KEY && this.enterPressed(e);
      }), this.nodes.input;
    }
    /**
     * Handle clicks on the Inline Toolbar icon
     *
     * @param {Range} range - range to wrap with link
     */
    surround(e) {
      if (e) {
        this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
        const t = this.selection.findParentTag("A");
        if (t) {
          this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
          return;
        }
      }
      this.toggleActions();
    }
    /**
     * Check selection and set activated state to button if there are <a> tag
     */
    checkState() {
      const e = this.selection.findParentTag("A");
      if (e) {
        this.nodes.button.innerHTML = Ii, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
        const t = e.getAttribute("href");
        this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
      } else
        this.nodes.button.innerHTML = yt, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
      return !!e;
    }
    /**
     * Function called with Inline Toolbar closing
     */
    clear() {
      this.closeActions();
    }
    /**
     * Set a shortcut
     */
    get shortcut() {
      return "CMD+K";
    }
    /**
     * Show/close link input
     */
    toggleActions() {
      this.inputOpened ? this.closeActions(false) : this.openActions(true);
    }
    /**
     * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
     */
    openActions(e = false) {
      this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = true;
    }
    /**
     * Close input
     *
     * @param {boolean} clearSavedSelection — we don't need to clear saved selection
     *                                        on toggle-clicks on the icon of opened Toolbar
     */
    closeActions(e = true) {
      if (this.selection.isFakeBackgroundEnabled) {
        const t = new b();
        t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
      }
      this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = false;
    }
    /**
     * Enter pressed on input
     *
     * @param {KeyboardEvent} event - enter keydown event
     */
    enterPressed(e) {
      let t = this.nodes.input.value || "";
      if (!t.trim()) {
        this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
        return;
      }
      if (!this.validateURL(t)) {
        this.notifier.show({
          message: "Pasted link is not valid.",
          style: "error"
        }), I("Incorrect Link pasted", "warn", t);
        return;
      }
      t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
    }
    /**
     * Detects if passed string is URL
     *
     * @param {string} str - string to validate
     * @returns {boolean}
     */
    validateURL(e) {
      return !/\s/.test(e);
    }
    /**
     * Process link before injection
     * - sanitize
     * - add protocol for links like 'google.com'
     *
     * @param {string} link - raw user input
     */
    prepareLink(e) {
      return e = e.trim(), e = this.addProtocol(e), e;
    }
    /**
     * Add 'http' protocol to the links like 'vc.ru', 'google.com'
     *
     * @param {string} link - string to process
     */
    addProtocol(e) {
      if (/^(\w+):(\/\/)?/.test(e))
        return e;
      const t = /^\/[^/\s]/.test(e), o4 = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
      return !t && !o4 && !i && (e = "http://" + e), e;
    }
    /**
     * Inserts <a> tag with "href"
     *
     * @param {string} link - "href" value
     */
    insertLink(e) {
      const t = this.selection.findParentTag("A");
      t && this.selection.expandToTag(t), document.execCommand(this.commandLink, false, e);
    }
    /**
     * Removes <a> tag
     */
    unlink() {
      document.execCommand(this.commandUnlink);
    }
  };
  ft.isInline = true;
  ft.title = "Link";
  var ao = class {
    /**
     * @param api - Editor.js API
     */
    constructor({ api: e }) {
      this.i18nAPI = e.i18n, this.blocksAPI = e.blocks, this.selectionAPI = e.selection, this.toolsAPI = e.tools, this.caretAPI = e.caret;
    }
    /**
     * Returns tool's UI config
     */
    async render() {
      const e = b.get(), t = this.blocksAPI.getBlockByElement(e.anchorNode);
      if (t === void 0)
        return [];
      const o4 = this.toolsAPI.getBlockTools(), i = await zt(t, o4);
      if (i.length === 0)
        return [];
      const s2 = i.reduce((c2, u2) => {
        var h4;
        return (h4 = u2.toolbox) == null || h4.forEach((p4) => {
          c2.push({
            icon: p4.icon,
            title: z.t(K.toolNames, p4.title),
            name: u2.name,
            closeOnActivate: true,
            onActivate: async () => {
              const g5 = await this.blocksAPI.convert(t.id, u2.name, p4.data);
              this.caretAPI.setToBlock(g5, "end");
            }
          });
        }), c2;
      }, []), r2 = await t.getActiveToolboxEntry(), l3 = r2 !== void 0 ? r2.icon : Kt, a4 = !pe();
      return {
        icon: l3,
        name: "convert-to",
        hint: {
          title: this.i18nAPI.t("Convert to")
        },
        children: {
          searchable: a4,
          items: s2,
          onOpen: () => {
            a4 && (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
          },
          onClose: () => {
            a4 && (this.selectionAPI.restore(), this.selectionAPI.removeFakeBackground());
          }
        }
      };
    }
  };
  ao.isInline = true;
  var co = class {
    /**
     * @param options - constructor options
     * @param options.data - stub tool data
     * @param options.api - Editor.js API
     */
    constructor({ data: e, api: t }) {
      this.CSS = {
        wrapper: "ce-stub",
        info: "ce-stub__info",
        title: "ce-stub__title",
        subtitle: "ce-stub__subtitle"
      }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
    }
    /**
     * Returns stub holder
     *
     * @returns {HTMLElement}
     */
    render() {
      return this.wrapper;
    }
    /**
     * Return original Tool data
     *
     * @returns {BlockToolData}
     */
    save() {
      return this.savedData;
    }
    /**
     * Create Tool html markup
     *
     * @returns {HTMLElement}
     */
    make() {
      const e = d.make("div", this.CSS.wrapper), t = Mi, o4 = d.make("div", this.CSS.info), i = d.make("div", this.CSS.title, {
        textContent: this.title
      }), s2 = d.make("div", this.CSS.subtitle, {
        textContent: this.subtitle
      });
      return e.innerHTML = t, o4.appendChild(i), o4.appendChild(s2), e.appendChild(o4), e;
    }
  };
  co.isReadOnlySupported = true;
  var ps = class extends dt {
    constructor() {
      super(...arguments), this.type = ne.Inline;
    }
    /**
     * Returns title for Inline Tool if specified by user
     */
    get title() {
      return this.constructable[ct.Title];
    }
    /**
     * Constructs new InlineTool instance from constructable
     */
    create() {
      return new this.constructable({
        api: this.api,
        config: this.settings
      });
    }
  };
  var fs = class extends dt {
    constructor() {
      super(...arguments), this.type = ne.Tune;
    }
    /**
     * Constructs new BlockTune instance from constructable
     *
     * @param data - Tune data
     * @param block - Block API object
     */
    create(e, t) {
      return new this.constructable({
        api: this.api,
        config: this.settings,
        block: t,
        data: e
      });
    }
  };
  var F = class _F extends Map {
    /**
     * Returns Block Tools collection
     */
    get blockTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
      return new _F(e);
    }
    /**
     * Returns Inline Tools collection
     */
    get inlineTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
      return new _F(e);
    }
    /**
     * Returns Block Tunes collection
     */
    get blockTunes() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
      return new _F(e);
    }
    /**
     * Returns internal Tools collection
     */
    get internalTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
      return new _F(e);
    }
    /**
     * Returns Tools collection provided by user
     */
    get externalTools() {
      const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
      return new _F(e);
    }
  };
  var gs = Object.defineProperty;
  var ms = Object.getOwnPropertyDescriptor;
  var ho = (n, e, t, o4) => {
    for (var i = o4 > 1 ? void 0 : o4 ? ms(e, t) : e, s2 = n.length - 1, r2; s2 >= 0; s2--)
      (r2 = n[s2]) && (i = (o4 ? r2(e, t, i) : r2(i)) || i);
    return o4 && i && gs(e, t, i), i;
  };
  var gt = class extends dt {
    constructor() {
      super(...arguments), this.type = ne.Block, this.inlineTools = new F(), this.tunes = new F();
    }
    /**
     * Creates new Tool instance
     *
     * @param data - Tool data
     * @param block - BlockAPI for current Block
     * @param readOnly - True if Editor is in read-only mode
     */
    create(e, t, o4) {
      return new this.constructable({
        data: e,
        block: t,
        readOnly: o4,
        api: this.api,
        config: this.settings
      });
    }
    /**
     * Returns true if read-only mode is supported by Tool
     */
    get isReadOnlySupported() {
      return this.constructable[ce.IsReadOnlySupported] === true;
    }
    /**
     * Returns true if Tool supports linebreaks
     */
    get isLineBreaksEnabled() {
      return this.constructable[ce.IsEnabledLineBreaks];
    }
    /**
     * Returns Tool toolbox configuration (internal or user-specified).
     *
     * Merges internal and user-defined toolbox configs based on the following rules:
     *
     * - If both internal and user-defined toolbox configs are arrays their items are merged.
     * Length of the second one is kept.
     *
     * - If both are objects their properties are merged.
     *
     * - If one is an object and another is an array than internal config is replaced with user-defined
     * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
     */
    get toolbox() {
      const e = this.constructable[ce.Toolbox], t = this.config[Ie.Toolbox];
      if (!V(e) && t !== false)
        return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o4, i) => {
          const s2 = e[i];
          return s2 ? {
            ...s2,
            ...o4
          } : o4;
        }) : [t] : Array.isArray(t) ? t : [
          {
            ...e,
            ...t
          }
        ] : Array.isArray(e) ? e : [e];
    }
    /**
     * Returns Tool conversion configuration
     */
    get conversionConfig() {
      return this.constructable[ce.ConversionConfig];
    }
    /**
     * Returns enabled inline tools for Tool
     */
    get enabledInlineTools() {
      return this.config[Ie.EnabledInlineTools] || false;
    }
    /**
     * Returns enabled tunes for Tool
     */
    get enabledBlockTunes() {
      return this.config[Ie.EnabledBlockTunes];
    }
    /**
     * Returns Tool paste configuration
     */
    get pasteConfig() {
      return this.constructable[ce.PasteConfig] ?? {};
    }
    get sanitizeConfig() {
      const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
      if (V(e))
        return t;
      const o4 = {};
      for (const i in e)
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          const s2 = e[i];
          R(s2) ? o4[i] = Object.assign({}, t, s2) : o4[i] = s2;
        }
      return o4;
    }
    get baseSanitizeConfig() {
      const e = {};
      return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
    }
  };
  ho([
    ue
  ], gt.prototype, "sanitizeConfig", 1);
  ho([
    ue
  ], gt.prototype, "baseSanitizeConfig", 1);
  var bs = class {
    /**
     * @class
     * @param config - tools config
     * @param editorConfig - EditorJS config
     * @param api - EditorJS API module
     */
    constructor(e, t, o4) {
      this.api = o4, this.config = e, this.editorConfig = t;
    }
    /**
     * Returns Tool object based on it's type
     *
     * @param name - tool name
     */
    get(e) {
      const { class: t, isInternal: o4 = false, ...i } = this.config[e], s2 = this.getConstructor(t), r2 = t[et.IsTune];
      return new s2({
        name: e,
        constructable: t,
        config: i,
        api: this.api.getMethodsForTool(e, r2),
        isDefault: e === this.editorConfig.defaultBlock,
        defaultPlaceholder: this.editorConfig.placeholder,
        isInternal: o4
      });
    }
    /**
     * Find appropriate Tool object constructor for Tool constructable
     *
     * @param constructable - Tools constructable
     */
    getConstructor(e) {
      switch (true) {
        case e[ct.IsInline]:
          return ps;
        case e[et.IsTune]:
          return fs;
        default:
          return gt;
      }
    }
  };
  var uo = class {
    /**
     * MoveDownTune constructor
     *
     * @param {API} api — Editor's API
     */
    constructor({ api: e }) {
      this.CSS = {
        animation: "wobble"
      }, this.api = e;
    }
    /**
     * Tune's appearance in block settings menu
     */
    render() {
      return {
        icon: ki,
        title: this.api.i18n.t("Move down"),
        onActivate: () => this.handleClick(),
        name: "move-down"
      };
    }
    /**
     * Handle clicks on 'move down' button
     */
    handleClick() {
      const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
      if (!t)
        throw new Error("Unable to move Block down since it is already the last");
      const o4 = t.holder, i = o4.getBoundingClientRect();
      let s2 = Math.abs(window.innerHeight - o4.offsetHeight);
      i.top < window.innerHeight && (s2 = window.scrollY + o4.offsetHeight), window.scrollTo(0, s2), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(true);
    }
  };
  uo.isTune = true;
  var po = class {
    /**
     * DeleteTune constructor
     *
     * @param {API} api - Editor's API
     */
    constructor({ api: e }) {
      this.api = e;
    }
    /**
     * Tune's appearance in block settings menu
     */
    render() {
      return {
        icon: yi,
        title: this.api.i18n.t("Delete"),
        name: "delete",
        confirmation: {
          title: this.api.i18n.t("Click to delete"),
          onActivate: () => this.handleClick()
        }
      };
    }
    /**
     * Delete block conditions passed
     */
    handleClick() {
      this.api.blocks.delete();
    }
  };
  po.isTune = true;
  var fo = class {
    /**
     * MoveUpTune constructor
     *
     * @param {API} api - Editor's API
     */
    constructor({ api: e }) {
      this.CSS = {
        animation: "wobble"
      }, this.api = e;
    }
    /**
     * Tune's appearance in block settings menu
     */
    render() {
      return {
        icon: xi,
        title: this.api.i18n.t("Move up"),
        onActivate: () => this.handleClick(),
        name: "move-up"
      };
    }
    /**
     * Move current block up
     */
    handleClick() {
      const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o4 = this.api.blocks.getBlockByIndex(e - 1);
      if (e === 0 || !t || !o4)
        throw new Error("Unable to move Block up since it is already the first");
      const i = t.holder, s2 = o4.holder, r2 = i.getBoundingClientRect(), l3 = s2.getBoundingClientRect();
      let a4;
      l3.top > 0 ? a4 = Math.abs(r2.top) - Math.abs(l3.top) : a4 = Math.abs(r2.top) + l3.height, window.scrollBy(0, -1 * a4), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(true);
    }
  };
  fo.isTune = true;
  var ks = Object.defineProperty;
  var vs = Object.getOwnPropertyDescriptor;
  var ws = (n, e, t, o4) => {
    for (var i = o4 > 1 ? void 0 : o4 ? vs(e, t) : e, s2 = n.length - 1, r2; s2 >= 0; s2--)
      (r2 = n[s2]) && (i = (o4 ? r2(e, t, i) : r2(i)) || i);
    return o4 && i && ks(e, t, i), i;
  };
  var go = class extends y {
    constructor() {
      super(...arguments), this.stubTool = "stub", this.toolsAvailable = new F(), this.toolsUnavailable = new F();
    }
    /**
     * Returns available Tools
     */
    get available() {
      return this.toolsAvailable;
    }
    /**
     * Returns unavailable Tools
     */
    get unavailable() {
      return this.toolsUnavailable;
    }
    /**
     * Return Tools for the Inline Toolbar
     */
    get inlineTools() {
      return this.available.inlineTools;
    }
    /**
     * Return editor block tools
     */
    get blockTools() {
      return this.available.blockTools;
    }
    /**
     * Return available Block Tunes
     *
     * @returns {object} - object of Inline Tool's classes
     */
    get blockTunes() {
      return this.available.blockTunes;
    }
    /**
     * Returns default Tool object
     */
    get defaultTool() {
      return this.blockTools.get(this.config.defaultBlock);
    }
    /**
     * Returns internal tools
     */
    get internal() {
      return this.available.internalTools;
    }
    /**
     * Creates instances via passed or default configuration
     *
     * @returns {Promise<void>}
     */
    async prepare() {
      if (this.validateTools(), this.config.tools = qe({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
        throw Error("Can't start without tools");
      const e = this.prepareConfig();
      this.factory = new bs(e, this.config, this.Editor.API);
      const t = this.getListOfPrepareFunctions(e);
      if (t.length === 0)
        return Promise.resolve();
      await Eo(t, (o4) => {
        this.toolPrepareMethodSuccess(o4);
      }, (o4) => {
        this.toolPrepareMethodFallback(o4);
      }), this.prepareBlockTools();
    }
    getAllInlineToolsSanitizeConfig() {
      const e = {};
      return Array.from(this.inlineTools.values()).forEach((t) => {
        Object.assign(e, t.sanitizeConfig);
      }), e;
    }
    /**
     * Calls each Tool reset method to clean up anything set by Tool
     */
    destroy() {
      Object.values(this.available).forEach(async (e) => {
        O(e.reset) && await e.reset();
      });
    }
    /**
     * Returns internal tools
     * Includes Bold, Italic, Link and Paragraph
     */
    get internalTools() {
      return {
        convertTo: {
          class: ao,
          isInternal: true
        },
        link: {
          class: ft,
          isInternal: true
        },
        bold: {
          class: ut,
          isInternal: true
        },
        italic: {
          class: pt,
          isInternal: true
        },
        paragraph: {
          class: ht,
          inlineToolbar: true,
          isInternal: true
        },
        stub: {
          class: co,
          isInternal: true
        },
        moveUp: {
          class: fo,
          isInternal: true
        },
        delete: {
          class: po,
          isInternal: true
        },
        moveDown: {
          class: uo,
          isInternal: true
        }
      };
    }
    /**
     * Tool prepare method success callback
     *
     * @param {object} data - append tool to available list
     */
    toolPrepareMethodSuccess(e) {
      const t = this.factory.get(e.toolName);
      if (t.isInline()) {
        const i = ["render"].filter((s2) => !t.create()[s2]);
        if (i.length) {
          I(
            `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
            "warn",
            i
          ), this.toolsUnavailable.set(t.name, t);
          return;
        }
      }
      this.toolsAvailable.set(t.name, t);
    }
    /**
     * Tool prepare method fail callback
     *
     * @param {object} data - append tool to unavailable list
     */
    toolPrepareMethodFallback(e) {
      this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
    }
    /**
     * Binds prepare function of plugins with user or default config
     *
     * @returns {Array} list of functions that needs to be fired sequentially
     * @param config - tools config
     */
    getListOfPrepareFunctions(e) {
      const t = [];
      return Object.entries(e).forEach(([o4, i]) => {
        t.push({
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          function: O(i.class.prepare) ? i.class.prepare : () => {
          },
          data: {
            toolName: o4,
            config: i.config
          }
        });
      }), t;
    }
    /**
     * Assign enabled Inline Tools and Block Tunes for Block Tool
     */
    prepareBlockTools() {
      Array.from(this.blockTools.values()).forEach((e) => {
        this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
      });
    }
    /**
     * Assign enabled Inline Tools for Block Tool
     *
     * @param tool - Block Tool
     */
    assignInlineToolsToBlockTool(e) {
      if (this.config.inlineToolbar !== false) {
        if (e.enabledInlineTools === true) {
          e.inlineTools = new F(
            Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
          );
          return;
        }
        Array.isArray(e.enabledInlineTools) && (e.inlineTools = new F(
          /** Prepend ConvertTo Inline Tool */
          ["convertTo", ...e.enabledInlineTools].map((t) => [t, this.inlineTools.get(t)])
        ));
      }
    }
    /**
     * Assign enabled Block Tunes for Block Tool
     *
     * @param tool — Block Tool
     */
    assignBlockTunesToBlockTool(e) {
      if (e.enabledBlockTunes !== false) {
        if (Array.isArray(e.enabledBlockTunes)) {
          const t = new F(
            e.enabledBlockTunes.map((o4) => [o4, this.blockTunes.get(o4)])
          );
          e.tunes = new F([...t, ...this.blockTunes.internalTools]);
          return;
        }
        if (Array.isArray(this.config.tunes)) {
          const t = new F(
            this.config.tunes.map((o4) => [o4, this.blockTunes.get(o4)])
          );
          e.tunes = new F([...t, ...this.blockTunes.internalTools]);
          return;
        }
        e.tunes = this.blockTunes.internalTools;
      }
    }
    /**
     * Validate Tools configuration objects and throw Error for user if it is invalid
     */
    validateTools() {
      for (const e in this.config.tools)
        if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
          if (e in this.internalTools)
            return;
          const t = this.config.tools[e];
          if (!O(t) && !O(t.class))
            throw Error(
              `Tool \xAB${e}\xBB must be a constructor function or an object with function in the \xABclass\xBB property`
            );
        }
    }
    /**
     * Unify tools config
     */
    prepareConfig() {
      const e = {};
      for (const t in this.config.tools)
        R(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
      return e;
    }
  };
  ws([
    ue
  ], go.prototype, "getAllInlineToolsSanitizeConfig", 1);
  var xs = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}
`;
  var ys = class extends y {
    constructor() {
      super(...arguments), this.isMobile = false, this.contentRectCache = void 0, this.resizeDebouncer = vt(() => {
        this.windowResize();
      }, 200);
    }
    /**
     * Editor.js UI CSS class names
     *
     * @returns {{editorWrapper: string, editorZone: string}}
     */
    get CSS() {
      return {
        editorWrapper: "codex-editor",
        editorWrapperNarrow: "codex-editor--narrow",
        editorZone: "codex-editor__redactor",
        editorZoneHidden: "codex-editor__redactor--hidden",
        editorEmpty: "codex-editor--empty",
        editorRtlFix: "codex-editor--rtl"
      };
    }
    /**
     * Return Width of center column of Editor
     *
     * @returns {DOMRect}
     */
    get contentRect() {
      if (this.contentRectCache)
        return this.contentRectCache;
      const e = this.nodes.wrapper.querySelector(`.${D.CSS.content}`);
      return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
        width: 650,
        left: 0,
        right: 0
      };
    }
    /**
     * Making main interface
     */
    async prepare() {
      this.setIsMobile(), this.make(), this.loadStyles();
    }
    /**
     * Toggle read-only state
     *
     * If readOnly is true:
     *  - removes all listeners from main UI module elements
     *
     * if readOnly is false:
     *  - enables all listeners to UI module elements
     *
     * @param {boolean} readOnlyEnabled - "read only" state
     */
    toggleReadOnly(e) {
      e ? this.disableModuleBindings() : window.requestIdleCallback(() => {
        this.enableModuleBindings();
      }, {
        timeout: 2e3
      });
    }
    /**
     * Check if Editor is empty and set CSS class to wrapper
     */
    checkEmptiness() {
      const { BlockManager: e } = this.Editor;
      this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
    }
    /**
     * Check if one of Toolbar is opened
     * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
     *
     * @returns {boolean}
     */
    get someToolbarOpened() {
      const { Toolbar: e, BlockSettings: t, InlineToolbar: o4 } = this.Editor;
      return !!(t.opened || o4.opened || e.toolbox.opened);
    }
    /**
     * Check for some Flipper-buttons is under focus
     */
    get someFlipperButtonFocused() {
      return this.Editor.Toolbar.toolbox.hasFocus() ? true : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof le).some(([e, t]) => t.flipper.hasFocus());
    }
    /**
     * Clean editor`s UI
     */
    destroy() {
      this.nodes.holder.innerHTML = "";
    }
    /**
     * Close all Editor's toolbars
     */
    closeAllToolbars() {
      const { Toolbar: e, BlockSettings: t, InlineToolbar: o4 } = this.Editor;
      t.close(), o4.close(), e.toolbox.close();
    }
    /**
     * Check for mobile mode and save the result
     */
    setIsMobile() {
      const e = window.innerWidth < Ot;
      e !== this.isMobile && this.eventsDispatcher.emit(ye, {
        isEnabled: this.isMobile
      }), this.isMobile = e;
    }
    /**
     * Makes Editor.js interface
     */
    make() {
      this.nodes.holder = d.getHolder(this.config.holder), this.nodes.wrapper = d.make("div", [
        this.CSS.editorWrapper,
        ...this.isRtl ? [this.CSS.editorRtlFix] : []
      ]), this.nodes.redactor = d.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
    }
    /**
     * Appends CSS
     */
    loadStyles() {
      const e = "editor-js-styles";
      if (d.get(e))
        return;
      const t = d.make("style", null, {
        id: e,
        textContent: xs.toString()
      });
      this.config.style && !V(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), d.prepend(document.head, t);
    }
    /**
     * Bind events on the Editor.js interface
     */
    enableModuleBindings() {
      this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (t) => {
        this.redactorClicked(t);
      }, false), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (t) => {
        this.documentTouched(t);
      }, {
        capture: true,
        passive: true
      }), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (t) => {
        this.documentTouched(t);
      }, {
        capture: true,
        passive: true
      }), this.readOnlyMutableListeners.on(document, "keydown", (t) => {
        this.documentKeydown(t);
      }, true), this.readOnlyMutableListeners.on(document, "mousedown", (t) => {
        this.documentClicked(t);
      }, true);
      const e = vt(() => {
        this.selectionChanged();
      }, ss);
      this.readOnlyMutableListeners.on(document, "selectionchange", e, true), this.readOnlyMutableListeners.on(window, "resize", () => {
        this.resizeDebouncer();
      }, {
        passive: true
      }), this.watchBlockHoveredEvents(), this.enableInputsEmptyMark();
    }
    /**
     * Listen redactor mousemove to emit 'block-hovered' event
     */
    watchBlockHoveredEvents() {
      let e;
      this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Ve((t) => {
        const o4 = t.target.closest(".ce-block");
        this.Editor.BlockSelection.anyBlockSelected || o4 && e !== o4 && (e = o4, this.eventsDispatcher.emit(oo, {
          block: this.Editor.BlockManager.getBlockByChildNode(o4)
        }));
      }, 20), {
        passive: true
      });
    }
    /**
     * Unbind events on the Editor.js interface
     */
    disableModuleBindings() {
      this.readOnlyMutableListeners.clearAll();
    }
    /**
     * Resize window handler
     */
    windowResize() {
      this.contentRectCache = null, this.setIsMobile();
    }
    /**
     * All keydowns on document
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    documentKeydown(e) {
      switch (e.keyCode) {
        case w.ENTER:
          this.enterPressed(e);
          break;
        case w.BACKSPACE:
        case w.DELETE:
          this.backspacePressed(e);
          break;
        case w.ESC:
          this.escapePressed(e);
          break;
        default:
          this.defaultBehaviour(e);
          break;
      }
    }
    /**
     * Ignore all other document's keydown events
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    defaultBehaviour(e) {
      const { currentBlock: t } = this.Editor.BlockManager, o4 = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
      if (t !== void 0 && o4 === null) {
        this.Editor.BlockEvents.keydown(e);
        return;
      }
      o4 || t && i || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
    }
    /**
     * @param {KeyboardEvent} event - keyboard event
     */
    backspacePressed(e) {
      const { BlockManager: t, BlockSelection: o4, Caret: i } = this.Editor;
      if (o4.anyBlockSelected && !b.isSelectionExists) {
        const s2 = t.removeSelectedBlocks(), r2 = t.insertDefaultBlockAtIndex(s2, true);
        i.setToBlock(r2, i.positions.START), o4.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
      }
    }
    /**
     * Escape pressed
     * If some of Toolbar components are opened, then close it otherwise close Toolbar
     *
     * @param {Event} event - escape keydown event
     */
    escapePressed(e) {
      this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
    }
    /**
     * Enter pressed on document
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    enterPressed(e) {
      const { BlockManager: t, BlockSelection: o4 } = this.Editor;
      if (this.someToolbarOpened)
        return;
      const i = t.currentBlockIndex >= 0;
      if (o4.anyBlockSelected && !b.isSelectionExists) {
        o4.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
        return;
      }
      if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
        const s2 = this.Editor.BlockManager.insert();
        e.preventDefault(), this.Editor.Caret.setToBlock(s2), this.Editor.Toolbar.moveAndOpen(s2);
      }
      this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * All clicks on document
     *
     * @param {MouseEvent} event - Click event
     */
    documentClicked(e) {
      var l3, a4;
      if (!e.isTrusted)
        return;
      const t = e.target;
      this.nodes.holder.contains(t) || b.isAtEditor || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
      const i = (l3 = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : l3.contains(t), s2 = (a4 = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : a4.contains(t), r2 = i || s2;
      if (this.Editor.BlockSettings.opened && !r2) {
        this.Editor.BlockSettings.close();
        const c2 = this.Editor.BlockManager.getBlockByChildNode(t);
        this.Editor.Toolbar.moveAndOpen(c2);
      }
      this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * First touch on editor
     * Fired before click
     *
     * Used to change current block — we need to do it before 'selectionChange' event.
     * Also:
     * - Move and show the Toolbar
     * - Set a Caret
     *
     * @param {MouseEvent | TouchEvent} event - touch or mouse event
     */
    documentTouched(e) {
      let t = e.target;
      if (t === this.nodes.redactor) {
        const o4 = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
        t = document.elementFromPoint(o4, i);
      }
      try {
        this.Editor.BlockManager.setCurrentBlockByChildNode(t);
      } catch {
        this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
      }
      this.Editor.Toolbar.moveAndOpen();
    }
    /**
     * All clicks on the redactor zone
     *
     * @param {MouseEvent} event - click event
     * @description
     * - By clicks on the Editor's bottom zone:
     *      - if last Block is empty, set a Caret to this
     *      - otherwise, add a new empty Block and set a Caret to that
     */
    redactorClicked(e) {
      if (!b.isCollapsed)
        return;
      const t = e.target, o4 = e.metaKey || e.ctrlKey;
      if (d.isAnchor(t) && o4) {
        e.stopImmediatePropagation(), e.stopPropagation();
        const i = t.getAttribute("href"), s2 = So(i);
        Mo(s2);
        return;
      }
      this.processBottomZoneClick(e);
    }
    /**
     * Check if user clicks on the Editor's bottom zone:
     *  - set caret to the last block
     *  - or add new empty block
     *
     * @param event - click event
     */
    processBottomZoneClick(e) {
      const t = this.Editor.BlockManager.getBlockByIndex(-1), o4 = d.offset(t.holder).bottom, i = e.pageY, { BlockSelection: s2 } = this.Editor;
      if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
      * If there is cross block selection started, target will be equal to redactor so we need additional check
      */
      !s2.anyBlockSelected && /**
      * Prevent caret jumping (to last block) when clicking between blocks
      */
      o4 < i) {
        e.stopImmediatePropagation(), e.stopPropagation();
        const { BlockManager: l3, Caret: a4, Toolbar: c2 } = this.Editor;
        (!l3.lastBlock.tool.isDefault || !l3.lastBlock.isEmpty) && l3.insertAtEnd(), a4.setToTheLastBlock(), c2.moveAndOpen(l3.lastBlock);
      }
    }
    /**
     * Handle selection changes on mobile devices
     * Uses for showing the Inline Toolbar
     */
    selectionChanged() {
      const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o4 = b.anchorElement;
      if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && b.get().removeAllRanges(), !o4) {
        b.range || this.Editor.InlineToolbar.close();
        return;
      }
      const i = o4.closest(`.${D.CSS.content}`);
      (i === null || i.closest(`.${b.CSS.editorWrapper}`) !== this.nodes.wrapper) && (this.Editor.InlineToolbar.containsNode(o4) || this.Editor.InlineToolbar.close(), !(o4.dataset.inlineToolbar === "true")) || (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o4), this.Editor.InlineToolbar.tryToShow(true));
    }
    /**
     * Editor.js provides and ability to show placeholders for empty contenteditable elements
     *
     * This method watches for input and focus events and toggles 'data-empty' attribute
     * to workaroud the case, when inputs contains only <br>s and has no visible content
     * Then, CSS could rely on this attribute to show placeholders
     */
    enableInputsEmptyMark() {
      function e(t) {
        const o4 = t.target;
        Lt(o4);
      }
      this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
    }
  };
  var Es = {
    // API Modules
    BlocksAPI: zo,
    CaretAPI: jo,
    EventsAPI: $o,
    I18nAPI: ot,
    API: Yo,
    InlineToolbarAPI: Wo,
    ListenersAPI: Ko,
    NotifierAPI: Zo,
    ReadOnlyAPI: Go,
    SanitizerAPI: si,
    SaverAPI: ni,
    SelectionAPI: ri,
    ToolsAPI: li,
    StylesAPI: ai,
    ToolbarAPI: ci,
    TooltipAPI: fi,
    UiAPI: gi,
    // Toolbar Modules
    BlockSettings: Ui,
    Toolbar: qi,
    InlineToolbar: Zi,
    // Modules
    BlockEvents: Gi,
    BlockManager: es,
    BlockSelection: ts,
    Caret: Re,
    CrossBlockSelection: os,
    DragNDrop: is,
    ModificationsObserver: rs,
    Paste: ls,
    ReadOnly: as,
    RectangleSelection: xe,
    Renderer: cs,
    Saver: ds,
    Tools: go,
    UI: ys
  };
  var Bs = class {
    /**
     * @param {EditorConfig} config - user configuration
     */
    constructor(e) {
      this.moduleInstances = {}, this.eventsDispatcher = new Te();
      let t, o4;
      this.isReady = new Promise((i, s2) => {
        t = i, o4 = s2;
      }), Promise.resolve().then(async () => {
        this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
        const { BlockManager: i, Caret: s2, UI: r2, ModificationsObserver: l3 } = this.moduleInstances;
        r2.checkEmptiness(), l3.enable(), this.configuration.autofocus && s2.setToBlock(i.blocks[0], s2.positions.START), t();
      }).catch((i) => {
        I(`Editor.js is not ready because of ${i}`, "error"), o4(i);
      });
    }
    /**
     * Setting for configuration
     *
     * @param {EditorConfig|string} config - Editor's config to set
     */
    set configuration(e) {
      var o4, i;
      R(e) ? this.config = {
        ...e
      } : this.config = {
        holder: e
      }, Ze(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = It.VERBOSE), xo(this.config.logLevel), Ze(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
      const t = {
        type: this.config.defaultBlock,
        data: {}
      };
      this.config.placeholder = this.config.placeholder || false, this.config.sanitizer = this.config.sanitizer || {
        p: true,
        b: true,
        a: true
      }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : false, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
      }), this.config.onChange = this.config.onChange || (() => {
      }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : true, (V(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || false, (o4 = this.config.i18n) != null && o4.messages && z.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
    }
    /**
     * Returns private property
     *
     * @returns {EditorConfig}
     */
    get configuration() {
      return this.config;
    }
    /**
     * Checks for required fields in Editor's config
     */
    validate() {
      const { holderId: e, holder: t } = this.config;
      if (e && t)
        throw Error("\xABholderId\xBB and \xABholder\xBB param can't assign at the same time.");
      if (Q(t) && !d.get(t))
        throw Error(`element with ID \xAB${t}\xBB is missing. Pass correct holder's ID.`);
      if (t && R(t) && !d.isElement(t))
        throw Error("\xABholder\xBB value must be an Element node");
    }
    /**
     * Initializes modules:
     *  - make and save instances
     *  - configure
     */
    init() {
      this.constructModules(), this.configureModules();
    }
    /**
     * Start Editor!
     *
     * Get list of modules that needs to be prepared and return a sequence (Promise)
     *
     * @returns {Promise<void>}
     */
    async start() {
      await [
        "Tools",
        "UI",
        "BlockManager",
        "Paste",
        "BlockSelection",
        "RectangleSelection",
        "CrossBlockSelection",
        "ReadOnly"
      ].reduce(
        (t, o4) => t.then(async () => {
          try {
            await this.moduleInstances[o4].prepare();
          } catch (i) {
            if (i instanceof Pt)
              throw new Error(i.message);
            I(`Module ${o4} was skipped because of %o`, "warn", i);
          }
        }),
        Promise.resolve()
      );
    }
    /**
     * Render initial data
     */
    render() {
      return this.moduleInstances.Renderer.render(this.config.data.blocks);
    }
    /**
     * Make modules instances and save it to the @property this.moduleInstances
     */
    constructModules() {
      Object.entries(Es).forEach(([e, t]) => {
        try {
          this.moduleInstances[e] = new t({
            config: this.configuration,
            eventsDispatcher: this.eventsDispatcher
          });
        } catch (o4) {
          I("[constructModules]", `Module ${e} skipped because`, "error", o4);
        }
      });
    }
    /**
     * Modules instances configuration:
     *  - pass other modules to the 'state' property
     *  - ...
     */
    configureModules() {
      for (const e in this.moduleInstances)
        Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
    }
    /**
     * Return modules without passed name
     *
     * @param {string} name - module for witch modules difference should be calculated
     */
    getModulesDiff(e) {
      const t = {};
      for (const o4 in this.moduleInstances)
        o4 !== e && (t[o4] = this.moduleInstances[o4]);
      return t;
    }
  };
  var Ts = class {
    /** Editor version */
    static get version() {
      return "2.30.6";
    }
    /**
     * @param {EditorConfig|string|undefined} [configuration] - user configuration
     */
    constructor(e) {
      let t = () => {
      };
      R(e) && O(e.onReady) && (t = e.onReady);
      const o4 = new Bs(e);
      this.isReady = o4.isReady.then(() => {
        this.exportAPI(o4), t();
      });
    }
    /**
     * Export external API methods
     *
     * @param {Core} editor — Editor's instance
     */
    exportAPI(e) {
      const t = ["configuration"], o4 = () => {
        Object.values(e.moduleInstances).forEach((s2) => {
          O(s2.destroy) && s2.destroy(), s2.listeners.removeAll();
        }), pi(), e = null;
        for (const s2 in this)
          Object.prototype.hasOwnProperty.call(this, s2) && delete this[s2];
        Object.setPrototypeOf(this, null);
      };
      t.forEach((s2) => {
        this[s2] = e[s2];
      }), this.destroy = o4, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
        blocks: {
          clear: "clear",
          render: "render"
        },
        caret: {
          focus: "focus"
        },
        events: {
          on: "on",
          off: "off",
          emit: "emit"
        },
        saver: {
          save: "save"
        }
      }).forEach(([s2, r2]) => {
        Object.entries(r2).forEach(([l3, a4]) => {
          this[a4] = e.moduleInstances.API.methods[s2][l3];
        });
      });
    }
  };

  // node_modules/@editorjs/Header/dist/header.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")), document.head.appendChild(e);
      }
    } catch (n) {
      console.error("vite-plugin-css-injected-by-js", n);
    }
  })();
  var a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>';
  var l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>';
  var o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>';
  var h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>';
  var d2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>';
  var u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>';
  var g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
  var v = class {
    constructor({ data: e, config: t, api: s2, readOnly: r2 }) {
      this.api = s2, this.readOnly = r2, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
    }
    /**
     * Styles
     */
    get _CSS() {
      return {
        block: this.api.styles.block,
        wrapper: "ce-header"
      };
    }
    /**
     * Check if data is valid
     * 
     * @param {any} data - data to check
     * @returns {data is HeaderData}
     * @private
     */
    isHeaderData(e) {
      return e.text !== void 0;
    }
    /**
     * Normalize input data
     *
     * @param {HeaderData} data - saved data to process
     *
     * @returns {HeaderData}
     * @private
     */
    normalizeData(e) {
      const t = { text: "", level: this.defaultLevel.number };
      return this.isHeaderData(e) && (t.text = e.text || "", e.level !== void 0 && !isNaN(parseInt(e.level.toString())) && (t.level = parseInt(e.level.toString()))), t;
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLHeadingElement}
     * @public
     */
    render() {
      return this._element;
    }
    /**
     * Returns header block tunes config
     *
     * @returns {Array}
     */
    renderSettings() {
      return this.levels.map((e) => ({
        icon: e.svg,
        label: this.api.i18n.t(`Heading ${e.number}`),
        onActivate: () => this.setLevel(e.number),
        closeOnActivate: true,
        isActive: this.currentLevel.number === e.number,
        render: () => document.createElement("div")
      }));
    }
    /**
     * Callback for Block's settings buttons
     *
     * @param {number} level - level to set
     */
    setLevel(e) {
      this.data = {
        level: e,
        text: this.data.text
      };
    }
    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * @param {HeaderData} data - saved data to merger with current block
     * @public
     */
    merge(e) {
      this._element.insertAdjacentHTML("beforeend", e.text);
    }
    /**
     * Validate Text block data:
     * - check for emptiness
     *
     * @param {HeaderData} blockData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(e) {
      return e.text.trim() !== "";
    }
    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
     * @returns {HeaderData} - saved data
     * @public
     */
    save(e) {
      return {
        text: e.innerHTML,
        level: this.currentLevel.number
      };
    }
    /**
     * Allow Header to be converted to/from other blocks
     */
    static get conversionConfig() {
      return {
        export: "text",
        // use 'text' property for other blocks
        import: "text"
        // fill 'text' property from other block's export string
      };
    }
    /**
     * Sanitizer Rules
     */
    static get sanitize() {
      return {
        level: false,
        text: {}
      };
    }
    /**
     * Returns true to notify core that read-only is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get current Tools`s data
     *
     * @returns {HeaderData} Current data
     * @private
     */
    get data() {
      return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
    }
    /**
     * Store data in plugin:
     * - at the this._data property
     * - at the HTML
     *
     * @param {HeaderData} data — data to set
     * @private
     */
    set data(e) {
      if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
        const t = this.getTag();
        t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
      }
      e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
    }
    /**
     * Get tag for target level
     * By default returns second-leveled header
     *
     * @returns {HTMLElement}
     */
    getTag() {
      const e = document.createElement(this.currentLevel.tag);
      return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
    }
    /**
     * Get current level
     *
     * @returns {level}
     */
    get currentLevel() {
      let e = this.levels.find((t) => t.number === this._data.level);
      return e || (e = this.defaultLevel), e;
    }
    /**
     * Return default level
     *
     * @returns {level}
     */
    get defaultLevel() {
      if (this._settings.defaultLevel) {
        const e = this.levels.find((t) => t.number === this._settings.defaultLevel);
        if (e)
          return e;
        console.warn("(\u0E07'\u0300-'\u0301)\u0E07 Heading Tool: the default level specified was not found in available levels");
      }
      return this.levels[1];
    }
    /**
     * @typedef {object} level
     * @property {number} number - level number
     * @property {string} tag - tag corresponds with level number
     * @property {string} svg - icon
     */
    /**
     * Available header levels
     *
     * @returns {level[]}
     */
    get levels() {
      const e = [
        {
          number: 1,
          tag: "H1",
          svg: a
        },
        {
          number: 2,
          tag: "H2",
          svg: l
        },
        {
          number: 3,
          tag: "H3",
          svg: o
        },
        {
          number: 4,
          tag: "H4",
          svg: h
        },
        {
          number: 5,
          tag: "H5",
          svg: d2
        },
        {
          number: 6,
          tag: "H6",
          svg: u
        }
      ];
      return this._settings.levels ? e.filter(
        (t) => this._settings.levels.includes(t.number)
      ) : e;
    }
    /**
     * Handle H1-H6 tags on paste to substitute it with header Tool
     *
     * @param {PasteEvent} event - event with pasted content
     */
    onPaste(e) {
      const t = e.detail;
      if ("data" in t) {
        const s2 = t.data;
        let r2 = this.defaultLevel.number;
        switch (s2.tagName) {
          case "H1":
            r2 = 1;
            break;
          case "H2":
            r2 = 2;
            break;
          case "H3":
            r2 = 3;
            break;
          case "H4":
            r2 = 4;
            break;
          case "H5":
            r2 = 5;
            break;
          case "H6":
            r2 = 6;
            break;
        }
        this._settings.levels && (r2 = this._settings.levels.reduce((n, i) => Math.abs(i - r2) < Math.abs(n - r2) ? i : n)), this.data = {
          level: r2,
          text: s2.innerHTML
        };
      }
    }
    /**
     * Used by Editor.js paste handling API.
     * Provides configuration to handle H1-H6 tags.
     *
     * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
     */
    static get pasteConfig() {
      return {
        tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
      };
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: g,
        title: "Heading"
      };
    }
  };

  // node_modules/@editorjs/raw/dist/raw.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-rawtool__textarea{min-height:200px;resize:vertical;border-radius:8px;border:0;background-color:#1e2128;font-family:Menlo,Monaco,Consolas,Courier New,monospace;font-size:12px;line-height:1.6;letter-spacing:-.2px;color:#a1a7b6;overscroll-behavior:contain}")), document.head.appendChild(e);
      }
    } catch (o4) {
      console.error("vite-plugin-css-injected-by-js", o4);
    }
  })();
  var a2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>';
  var r = class _r {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Should this tool be displayed at the Editor's Toolbox
     *
     * @returns {boolean}
     * @public
     */
    static get displayInToolbox() {
      return true;
    }
    /**
     * Allow to press Enter inside the RawTool textarea
     *
     * @returns {boolean}
     * @public
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: a2,
        title: "Raw HTML"
      };
    }
    /**
     * @typedef {object} RawData — plugin saved data
     * @param {string} html - previously saved HTML code
     * @property
     */
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {RawData} data — previously saved HTML data
     * @param {object} config - user config for Tool
     * @param {object} api - CodeX Editor API
     * @param {boolean} readOnly - read-only mode flag
     */
    constructor({ data: t, config: e, api: s2, readOnly: i }) {
      this.api = s2, this.readOnly = i, this.placeholder = e.placeholder || _r.DEFAULT_PLACEHOLDER, this.CSS = {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        wrapper: "ce-rawtool",
        textarea: "ce-rawtool__textarea"
      }, this.data = {
        html: t.html || ""
      }, this.textarea = null, this.resizeDebounce = null;
    }
    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement} this.element - RawTool's wrapper
     * @public
     */
    render() {
      const t = document.createElement("div"), e = 100;
      return this.textarea = document.createElement("textarea"), t.classList.add(this.CSS.baseClass, this.CSS.wrapper), this.textarea.classList.add(this.CSS.textarea, this.CSS.input), this.textarea.textContent = this.data.html, this.textarea.placeholder = this.placeholder, this.readOnly ? this.textarea.disabled = true : this.textarea.addEventListener("input", () => {
        this.onInput();
      }), t.appendChild(this.textarea), setTimeout(() => {
        this.resize();
      }, e), t;
    }
    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLDivElement} rawToolsWrapper - RawTool's wrapper, containing textarea with raw HTML code
     * @returns {RawData} - raw HTML code
     * @public
     */
    save(t) {
      return {
        html: t.querySelector("textarea").value
      };
    }
    /**
     * Default placeholder for RawTool's textarea
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_PLACEHOLDER() {
      return "Enter HTML code";
    }
    /**
     * Automatic sanitize config
     */
    static get sanitize() {
      return {
        html: true
        // Allow HTML tags
      };
    }
    /**
     * Textarea change event
     *
     * @returns {void}
     */
    onInput() {
      this.resizeDebounce && clearTimeout(this.resizeDebounce), this.resizeDebounce = setTimeout(() => {
        this.resize();
      }, 200);
    }
    /**
     * Resize textarea to fit whole height
     *
     * @returns {void}
     */
    resize() {
      this.textarea.style.height = "auto", this.textarea.style.height = this.textarea.scrollHeight + "px";
    }
  };

  // node_modules/@editorjs/checklist/dist/checklist.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode('.cdx-checklist{gap:6px;display:flex;flex-direction:column}.cdx-checklist__item{display:flex;box-sizing:content-box;align-items:flex-start}.cdx-checklist__item-text{outline:none;flex-grow:1;line-height:1.57em}.cdx-checklist__item-checkbox{width:22px;height:22px;display:flex;align-items:center;margin-right:8px;margin-top:calc(.785em - 11px);cursor:pointer}.cdx-checklist__item-checkbox svg{opacity:0;height:20px;width:20px;position:absolute;left:-1px;top:-1px;max-height:20px}@media (hover: hover){.cdx-checklist__item-checkbox:not(.cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check svg{opacity:1}}.cdx-checklist__item-checkbox-check{cursor:pointer;display:inline-block;flex-shrink:0;position:relative;width:20px;height:20px;box-sizing:border-box;margin-left:0;border-radius:5px;border:1px solid #C9C9C9;background:#fff}.cdx-checklist__item-checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:#369fff;visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}@media (hover: hover){.cdx-checklist__item--checked .cdx-checklist__item-checkbox:not(.cdx-checklist__item--checked .cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check{background:#0059AB;border-color:#0059ab}}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check{background:#369FFF;border-color:#369fff}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg{opacity:1}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg path{stroke:#fff}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}')), document.head.appendChild(e);
      }
    } catch (c2) {
      console.error("vite-plugin-css-injected-by-js", c2);
    }
  })();
  var k = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>';
  var g2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
  function d3() {
    const s2 = document.activeElement, t = window.getSelection().getRangeAt(0), n = t.cloneRange();
    return n.selectNodeContents(s2), n.setStart(t.endContainer, t.endOffset), n.extractContents();
  }
  function C(s2) {
    const e = document.createElement("div");
    return e.appendChild(s2), e.innerHTML;
  }
  function c(s2, e = null, t = {}) {
    const n = document.createElement(s2);
    Array.isArray(e) ? n.classList.add(...e) : e && n.classList.add(e);
    for (const i in t)
      n[i] = t[i];
    return n;
  }
  function m(s2) {
    return s2.innerHTML.replace("<br>", " ").trim();
  }
  function p(s2, e = false, t = void 0) {
    const n = document.createRange(), i = window.getSelection();
    n.selectNodeContents(s2), t !== void 0 && (n.setStart(s2, t), n.setEnd(s2, t)), n.collapse(e), i.removeAllRanges(), i.addRange(n);
  }
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
  Element.prototype.closest || (Element.prototype.closest = function(s2) {
    let e = this;
    if (!document.documentElement.contains(e))
      return null;
    do {
      if (e.matches(s2))
        return e;
      e = e.parentElement || e.parentNode;
    } while (e !== null && e.nodeType === 1);
    return null;
  });
  var f = class {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allow to use native Enter behaviour
     *
     * @returns {boolean}
     * @public
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: g2,
        title: "Checklist"
      };
    }
    /**
     * Allow Checkbox Tool to be converted to/from other block
     *
     * @returns {{export: Function, import: Function}}
     */
    static get conversionConfig() {
      return {
        /**
         * To create exported string from the checkbox, concatenate items by dot-symbol.
         *
         * @param {ChecklistData} data - checklist data to create a string from that
         * @returns {string}
         */
        export: (e) => e.items.map(({ text: t }) => t).join(". "),
        /**
         * To create a checklist from other block's string, just put it at the first item
         *
         * @param {string} string - string to create list tool data from that
         * @returns {ChecklistData}
         */
        import: (e) => ({
          items: [
            {
              text: e,
              checked: false
            }
          ]
        })
      };
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} options - block constructor options
     * @param {ChecklistData} options.data - previously saved data
     * @param {object} options.config - user config for Tool
     * @param {object} options.api - Editor.js API
     * @param {boolean} options.readOnly - read only mode flag
     */
    constructor({ data: e, config: t, api: n, readOnly: i }) {
      this._elements = {
        wrapper: null,
        items: []
      }, this.readOnly = i, this.api = n, this.data = e || {};
    }
    /**
     * Returns checklist tag with items
     *
     * @returns {Element}
     */
    render() {
      return this._elements.wrapper = c("div", [this.CSS.baseBlock, this.CSS.wrapper]), this.data.items || (this.data.items = [
        {
          text: "",
          checked: false
        }
      ]), this.data.items.forEach((e) => {
        const t = this.createChecklistItem(e);
        this._elements.wrapper.appendChild(t);
      }), this.readOnly ? this._elements.wrapper : (this._elements.wrapper.addEventListener("keydown", (e) => {
        const [t, n] = [13, 8];
        switch (e.keyCode) {
          case t:
            this.enterPressed(e);
            break;
          case n:
            this.backspace(e);
            break;
        }
      }, false), this._elements.wrapper.addEventListener("click", (e) => {
        this.toggleCheckbox(e);
      }), this._elements.wrapper);
    }
    /**
     * Return Checklist data
     *
     * @returns {ChecklistData}
     */
    save() {
      let e = this.items.map((t) => {
        const n = this.getItemInput(t);
        return {
          text: m(n),
          checked: t.classList.contains(this.CSS.itemChecked)
        };
      });
      return e = e.filter((t) => t.text.trim().length !== 0), {
        items: e
      };
    }
    /**
     * Validate data: check if Checklist has items
     *
     * @param {ChecklistData} savedData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(e) {
      return !!e.items.length;
    }
    /**
     * Toggle checklist item state
     *
     * @param {MouseEvent} event - click
     * @returns {void}
     */
    toggleCheckbox(e) {
      const t = e.target.closest(`.${this.CSS.item}`), n = t.querySelector(`.${this.CSS.checkboxContainer}`);
      n.contains(e.target) && (t.classList.toggle(this.CSS.itemChecked), n.classList.add(this.CSS.noHover), n.addEventListener("mouseleave", () => this.removeSpecialHoverBehavior(n), { once: true }));
    }
    /**
     * Create Checklist items
     *
     * @param {ChecklistItem} item - data.item
     * @returns {Element} checkListItem - new element of checklist
     */
    createChecklistItem(e = {}) {
      const t = c("div", this.CSS.item), n = c("span", this.CSS.checkbox), i = c("div", this.CSS.checkboxContainer), o4 = c("div", this.CSS.textField, {
        innerHTML: e.text ? e.text : "",
        contentEditable: !this.readOnly
      });
      return e.checked && t.classList.add(this.CSS.itemChecked), n.innerHTML = k, i.appendChild(n), t.appendChild(i), t.appendChild(o4), t;
    }
    /**
     * Append new elements to the list by pressing Enter
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    enterPressed(e) {
      e.preventDefault();
      const t = this.items, n = document.activeElement.closest(`.${this.CSS.item}`);
      if (t.indexOf(n) === t.length - 1 && m(this.getItemInput(n)).length === 0) {
        const u2 = this.api.blocks.getCurrentBlockIndex();
        n.remove(), this.api.blocks.insert(), this.api.caret.setToBlock(u2 + 1);
        return;
      }
      const a4 = d3(), l3 = C(a4), r2 = this.createChecklistItem({
        text: l3,
        checked: false
      });
      this._elements.wrapper.insertBefore(r2, n.nextSibling), p(this.getItemInput(r2), true);
    }
    /**
     * Handle backspace
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    backspace(e) {
      const t = e.target.closest(`.${this.CSS.item}`), n = this.items.indexOf(t), i = this.items[n - 1];
      if (!i || !(window.getSelection().focusOffset === 0))
        return;
      e.preventDefault();
      const l3 = d3(), r2 = this.getItemInput(i), h4 = r2.childNodes.length;
      r2.appendChild(l3), p(r2, void 0, h4), t.remove();
    }
    /**
     * Styles
     *
     * @private
     * @returns {object<string>}
     */
    get CSS() {
      return {
        baseBlock: this.api.styles.block,
        wrapper: "cdx-checklist",
        item: "cdx-checklist__item",
        itemChecked: "cdx-checklist__item--checked",
        noHover: "cdx-checklist__item-checkbox--no-hover",
        checkbox: "cdx-checklist__item-checkbox-check",
        textField: "cdx-checklist__item-text",
        checkboxContainer: "cdx-checklist__item-checkbox"
      };
    }
    /**
     * Return all items elements
     *
     * @returns {Element[]}
     */
    get items() {
      return Array.from(this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`));
    }
    /**
     * Removes class responsible for special hover behavior on an item
     * 
     * @private
     * @param {Element} el - item wrapper
     * @returns {Element}
     */
    removeSpecialHoverBehavior(e) {
      e.classList.remove(this.CSS.noHover);
    }
    /**
     * Find and return item's content editable element
     *
     * @private
     * @param {Element} el - item wrapper
     * @returns {Element}
     */
    getItemInput(e) {
      return e.querySelector(`.${this.CSS.textField}`);
    }
  };

  // node_modules/@editorjs/list/dist/list.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".cdx-list{margin:0;padding-left:40px;outline:none}.cdx-list__item{padding:5.5px 0 5.5px 3px;line-height:1.6em}.cdx-list--unordered{list-style:disc}.cdx-list--ordered{list-style:decimal}.cdx-list-settings{display:flex}.cdx-list-settings .cdx-settings-button{width:50%}")), document.head.appendChild(e);
      }
    } catch (t) {
      console.error("vite-plugin-css-injected-by-js", t);
    }
  })();
  var a3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>';
  var o2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
  var d4 = class {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allow to use native Enter behaviour
     *
     * @returns {boolean}
     * @public
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: a3,
        title: "List"
      };
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - tool constructor options
     * @param {ListData} params.data - previously saved data
     * @param {object} params.config - user config for Tool
     * @param {object} params.api - Editor.js API
     * @param {boolean} params.readOnly - read-only mode flag
     */
    constructor({ data: e, config: t, api: r2, readOnly: s2 }) {
      this._elements = {
        wrapper: null
      }, this.api = r2, this.readOnly = s2, this.settings = [
        {
          name: "unordered",
          label: this.api.i18n.t("Unordered"),
          icon: a3,
          default: t.defaultStyle === "unordered" || false
        },
        {
          name: "ordered",
          label: this.api.i18n.t("Ordered"),
          icon: o2,
          default: t.defaultStyle === "ordered" || true
        }
      ], this._data = {
        style: this.settings.find((i) => i.default === true).name,
        items: []
      }, this.data = e;
    }
    /**
     * Returns list tag with items
     *
     * @returns {Element}
     * @public
     */
    render() {
      return this._elements.wrapper = this.makeMainTag(this._data.style), this._data.items.length ? this._data.items.forEach((e) => {
        this._elements.wrapper.appendChild(this._make("li", this.CSS.item, {
          innerHTML: e
        }));
      }) : this._elements.wrapper.appendChild(this._make("li", this.CSS.item)), this.readOnly || this._elements.wrapper.addEventListener("keydown", (e) => {
        const [t, r2] = [13, 8];
        switch (e.keyCode) {
          case t:
            this.getOutofList(e);
            break;
          case r2:
            this.backspace(e);
            break;
        }
      }, false), this._elements.wrapper;
    }
    /**
     * @returns {ListData}
     * @public
     */
    save() {
      return this.data;
    }
    /**
     * Allow List Tool to be converted to/from other block
     *
     * @returns {{export: Function, import: Function}}
     */
    static get conversionConfig() {
      return {
        /**
         * To create exported string from list, concatenate items by dot-symbol.
         *
         * @param {ListData} data - list data to create a string from thats
         * @returns {string}
         */
        export: (e) => e.items.join(". "),
        /**
         * To create a list from other block's string, just put it at the first item
         *
         * @param {string} string - string to create list tool data from that
         * @returns {ListData}
         */
        import: (e) => ({
          items: [e],
          style: "unordered"
        })
      };
    }
    /**
     * Sanitizer rules
     *
     * @returns {object}
     */
    static get sanitize() {
      return {
        style: {},
        items: {
          br: true
        }
      };
    }
    /**
     * Settings
     *
     * @public
     * @returns {Array}
     */
    renderSettings() {
      return this.settings.map((e) => ({
        ...e,
        isActive: this._data.style === e.name,
        closeOnActivate: true,
        onActivate: () => this.toggleTune(e.name)
      }));
    }
    /**
     * On paste callback that is fired from Editor
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(e) {
      const t = e.detail.data;
      this.data = this.pasteHandler(t);
    }
    /**
     * List Tool on paste configuration
     *
     * @public
     */
    static get pasteConfig() {
      return {
        tags: ["OL", "UL", "LI"]
      };
    }
    /**
     * Creates main <ul> or <ol> tag depended on style
     *
     * @param {string} style - 'ordered' or 'unordered'
     * @returns {HTMLOListElement|HTMLUListElement}
     */
    makeMainTag(e) {
      const t = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered, r2 = e === "ordered" ? "ol" : "ul";
      return this._make(r2, [this.CSS.baseBlock, this.CSS.wrapper, t], {
        contentEditable: !this.readOnly
      });
    }
    /**
     * Toggles List style
     *
     * @param {string} style - 'ordered'|'unordered'
     */
    toggleTune(e) {
      const t = this.makeMainTag(e);
      for (; this._elements.wrapper.hasChildNodes(); )
        t.appendChild(this._elements.wrapper.firstChild);
      this._elements.wrapper.replaceWith(t), this._elements.wrapper = t, this._data.style = e;
    }
    /**
     * Styles
     *
     * @private
     */
    get CSS() {
      return {
        baseBlock: this.api.styles.block,
        wrapper: "cdx-list",
        wrapperOrdered: "cdx-list--ordered",
        wrapperUnordered: "cdx-list--unordered",
        item: "cdx-list__item"
      };
    }
    /**
     * List data setter
     *
     * @param {ListData} listData
     */
    set data(e) {
      e || (e = {}), this._data.style = e.style || this.settings.find((r2) => r2.default === true).name, this._data.items = e.items || [];
      const t = this._elements.wrapper;
      t && t.parentNode.replaceChild(this.render(), t);
    }
    /**
     * Return List data
     *
     * @returns {ListData}
     */
    get data() {
      this._data.items = [];
      const e = this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`);
      for (let t = 0; t < e.length; t++)
        e[t].innerHTML.replace("<br>", " ").trim() && this._data.items.push(e[t].innerHTML);
      return this._data;
    }
    /**
     * Helper for making Elements with attributes
     *
     * @param  {string} tagName           - new Element tag name
     * @param  {Array|string} classNames  - list or name of CSS classname(s)
     * @param  {object} attributes        - any attributes
     * @returns {Element}
     */
    _make(e, t = null, r2 = {}) {
      const s2 = document.createElement(e);
      Array.isArray(t) ? s2.classList.add(...t) : t && s2.classList.add(t);
      for (const i in r2)
        s2[i] = r2[i];
      return s2;
    }
    /**
     * Returns current List item by the caret position
     *
     * @returns {Element}
     */
    get currentItem() {
      let e = window.getSelection().anchorNode;
      return e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode), e.closest(`.${this.CSS.item}`);
    }
    /**
     * Get out from List Tool
     * by Enter on the empty last item
     *
     * @param {KeyboardEvent} event
     */
    getOutofList(e) {
      const t = this._elements.wrapper.querySelectorAll("." + this.CSS.item);
      if (t.length < 2)
        return;
      const r2 = t[t.length - 1], s2 = this.currentItem;
      s2 === r2 && !r2.textContent.trim().length && (s2.parentElement.removeChild(s2), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex()), e.preventDefault(), e.stopPropagation());
    }
    /**
     * Handle backspace
     *
     * @param {KeyboardEvent} event
     */
    backspace(e) {
      const t = this._elements.wrapper.querySelectorAll("." + this.CSS.item), r2 = t[0];
      r2 && t.length < 2 && !r2.innerHTML.replace("<br>", " ").trim() && e.preventDefault();
    }
    /**
     * Select LI content by CMD+A
     *
     * @param {KeyboardEvent} event
     */
    selectItem(e) {
      e.preventDefault();
      const t = window.getSelection(), r2 = t.anchorNode.parentNode, s2 = r2.closest("." + this.CSS.item), i = new Range();
      i.selectNodeContents(s2), t.removeAllRanges(), t.addRange(i);
    }
    /**
     * Handle UL, OL and LI tags paste and returns List data
     *
     * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
     * @returns {ListData}
     */
    pasteHandler(e) {
      const { tagName: t } = e;
      let r2;
      switch (t) {
        case "OL":
          r2 = "ordered";
          break;
        case "UL":
        case "LI":
          r2 = "unordered";
      }
      const s2 = {
        style: r2,
        items: []
      };
      if (t === "LI")
        s2.items = [e.innerHTML];
      else {
        const i = Array.from(e.querySelectorAll("LI"));
        s2.items = i.map((n) => n.innerHTML).filter((n) => !!n.trim());
      }
      return s2;
    }
  };

  // node_modules/@editorjs/embed/dist/embed.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode('.embed-tool--loading .embed-tool__caption{display:none}.embed-tool--loading .embed-tool__preloader{display:block}.embed-tool--loading .embed-tool__content{display:none}.embed-tool__preloader{display:none;position:relative;height:200px;box-sizing:border-box;border-radius:5px;border:1px solid #e6e9eb}.embed-tool__preloader:before{content:"";position:absolute;z-index:3;left:50%;top:50%;width:30px;height:30px;margin-top:-25px;margin-left:-15px;border-radius:50%;border:2px solid #cdd1e0;border-top-color:#388ae5;box-sizing:border-box;animation:embed-preloader-spin 2s infinite linear}.embed-tool__url{position:absolute;bottom:20px;left:50%;transform:translate(-50%);max-width:250px;color:#7b7e89;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.embed-tool__content{width:100%}.embed-tool__caption{margin-top:7px}.embed-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}@keyframes embed-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(e);
      }
    } catch (o4) {
      console.error("vite-plugin-css-injected-by-js", o4);
    }
  })();
  var g3 = {
    vimeo: {
      regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
      embedUrl: "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
      html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
      height: 320,
      width: 580
    },
    youtube: {
      regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
      embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
      html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
      height: 320,
      width: 580,
      id: ([s2, i]) => {
        if (!i && s2)
          return s2;
        const r2 = {
          start: "start",
          end: "end",
          t: "start",
          // eslint-disable-next-line camelcase
          time_continue: "start",
          list: "list"
        };
        let e = i.slice(1).split("&").map((o4) => {
          const [l3, t] = o4.split("=");
          return !s2 && l3 === "v" ? (s2 = t, null) : !r2[l3] || t === "LL" || t.startsWith("RDMM") || t.startsWith("FL") ? null : `${r2[l3]}=${t}`;
        }).filter((o4) => !!o4);
        return s2 + "?" + e.join("&");
      }
    },
    coub: {
      regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
      embedUrl: "https://coub.com/embed/<%= remote_id %>",
      html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
      height: 320,
      width: 580
    },
    vine: {
      regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
      embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
      html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
      height: 320,
      width: 580
    },
    imgur: {
      regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
      embedUrl: "http://imgur.com/<%= remote_id %>/embed",
      html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
      height: 500,
      width: 540
    },
    gfycat: {
      regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
      embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
      html: `<iframe frameborder='0' scrolling='no' style="width:100%;" height='436' allowfullscreen ></iframe>`,
      height: 436,
      width: 580
    },
    "twitch-channel": {
      regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
      embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
      html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
      height: 366,
      width: 600
    },
    "twitch-video": {
      regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
      embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
      html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
      height: 366,
      width: 600
    },
    "yandex-music-album": {
      regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
      embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
      html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
      height: 400,
      width: 540
    },
    "yandex-music-track": {
      regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
      embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
      html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
      height: 100,
      width: 540,
      id: (s2) => s2.join("/")
    },
    "yandex-music-playlist": {
      regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
      embedUrl: "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
      html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
      height: 400,
      width: 540,
      id: (s2) => s2.join("/")
    },
    codepen: {
      regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
      embedUrl: "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
      html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
      height: 300,
      width: 600,
      id: (s2) => s2.join("/embed/")
    },
    instagram: {
      //it support both reel and post
      regex: /^https:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\/(.*)/,
      embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
      html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 505,
      width: 400,
      id: (s2) => {
        var i;
        return (i = s2 == null ? void 0 : s2[0]) == null ? void 0 : i.split("/")[0];
      }
    },
    twitter: {
      regex: /^https?:\/\/(www\.)?(?:twitter\.com|x\.com)\/.+\/status\/(\d+)/,
      embedUrl: "https://platform.twitter.com/embed/Tweet.html?id=<%= remote_id %>",
      html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 300,
      width: 600,
      id: (s2) => s2[1]
    },
    pinterest: {
      regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
      embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
      html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
      id: (s2) => s2[1]
    },
    facebook: {
      regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
      html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
      id: (s2) => s2.join("/")
    },
    aparat: {
      regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
      embedUrl: "https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",
      html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 300,
      width: 600
    },
    miro: {
      regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
      embedUrl: "https://miro.com/app/live-embed/<%= remote_id %>",
      html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'
    },
    github: {
      regex: /https?:\/\/gist.github.com\/([^\/\?\&]*)\/([^\/\?\&]*)/,
      embedUrl: 'data:text/html;charset=utf-8,<head><base target="_blank" /></head><body><script src="https://gist.github.com/<%= remote_id %>" ><\/script></body>',
      html: '<iframe width="100%" height="350" frameborder="0" style="margin: 0 auto;"></iframe>',
      height: 300,
      width: 600,
      id: (s2) => `${s2.join("/")}.js`
    }
  };
  function p2(s2, i, r2) {
    var e, o4, l3, t, a4;
    i == null && (i = 100);
    function n() {
      var d6 = Date.now() - t;
      d6 < i && d6 >= 0 ? e = setTimeout(n, i - d6) : (e = null, r2 || (a4 = s2.apply(l3, o4), l3 = o4 = null));
    }
    var h4 = function() {
      l3 = this, o4 = arguments, t = Date.now();
      var d6 = r2 && !e;
      return e || (e = setTimeout(n, i)), d6 && (a4 = s2.apply(l3, o4), l3 = o4 = null), a4;
    };
    return h4.clear = function() {
      e && (clearTimeout(e), e = null);
    }, h4.flush = function() {
      e && (a4 = s2.apply(l3, o4), l3 = o4 = null, clearTimeout(e), e = null);
    }, h4;
  }
  p2.debounce = p2;
  var w2 = p2;
  var m2 = class _m {
    /**
     * @param {{data: EmbedData, config: EmbedConfig, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - Editor.js API
     *   readOnly - read-only mode flag
     */
    constructor({ data: i, api: r2, readOnly: e }) {
      this.api = r2, this._data = {}, this.element = null, this.readOnly = e, this.data = i;
    }
    /**
     * @param {EmbedData} data - embed data
     * @param {RegExp} [data.regex] - pattern of source URLs
     * @param {string} [data.embedUrl] - URL scheme to embedded page. Use '<%= remote_id %>' to define a place to insert resource id
     * @param {string} [data.html] - iframe which contains embedded content
     * @param {number} [data.height] - iframe height
     * @param {number} [data.width] - iframe width
     * @param {string} [data.caption] - caption
     */
    set data(i) {
      var h4;
      if (!(i instanceof Object))
        throw Error("Embed Tool data should be object");
      const { service: r2, source: e, embed: o4, width: l3, height: t, caption: a4 = "" } = i;
      this._data = {
        service: r2 || this.data.service,
        source: e || this.data.source,
        embed: o4 || this.data.embed,
        width: l3 || this.data.width,
        height: t || this.data.height,
        caption: a4 || this.data.caption || ""
      };
      const n = this.element;
      n && ((h4 = n.parentNode) == null || h4.replaceChild(this.render(), n));
    }
    /**
     * @returns {EmbedData}
     */
    get data() {
      if (this.element) {
        const i = this.element.querySelector(`.${this.api.styles.input}`);
        this._data.caption = i ? i.innerHTML : "";
      }
      return this._data;
    }
    /**
     * Get plugin styles
     *
     * @returns {object}
     */
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        container: "embed-tool",
        containerLoading: "embed-tool--loading",
        preloader: "embed-tool__preloader",
        caption: "embed-tool__caption",
        url: "embed-tool__url",
        content: "embed-tool__content"
      };
    }
    /**
     * Render Embed tool content
     *
     * @returns {HTMLElement}
     */
    render() {
      if (!this.data.service) {
        const a4 = document.createElement("div");
        return this.element = a4, a4;
      }
      const { html: i } = _m.services[this.data.service], r2 = document.createElement("div"), e = document.createElement("div"), o4 = document.createElement("template"), l3 = this.createPreloader();
      r2.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading), e.classList.add(this.CSS.input, this.CSS.caption), r2.appendChild(l3), e.contentEditable = (!this.readOnly).toString(), e.dataset.placeholder = this.api.i18n.t("Enter a caption"), e.innerHTML = this.data.caption || "", o4.innerHTML = i, o4.content.firstChild.setAttribute("src", this.data.embed), o4.content.firstChild.classList.add(this.CSS.content);
      const t = this.embedIsReady(r2);
      return o4.content.firstChild && r2.appendChild(o4.content.firstChild), r2.appendChild(e), t.then(() => {
        r2.classList.remove(this.CSS.containerLoading);
      }), this.element = r2, r2;
    }
    /**
     * Creates preloader to append to container while data is loading
     *
     * @returns {HTMLElement}
     */
    createPreloader() {
      const i = document.createElement("preloader"), r2 = document.createElement("div");
      return r2.textContent = this.data.source, i.classList.add(this.CSS.preloader), r2.classList.add(this.CSS.url), i.appendChild(r2), i;
    }
    /**
     * Save current content and return EmbedData object
     *
     * @returns {EmbedData}
     */
    save() {
      return this.data;
    }
    /**
     * Handle pasted url and return Service object
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(i) {
      var c2;
      const { key: r2, data: e } = i.detail, { regex: o4, embedUrl: l3, width: t, height: a4, id: n = (u2) => u2.shift() || "" } = _m.services[r2], h4 = (c2 = o4.exec(e)) == null ? void 0 : c2.slice(1), d6 = h4 ? l3.replace(/<%= remote_id %>/g, n(h4)) : "";
      this.data = {
        service: r2,
        source: e,
        embed: d6,
        width: t,
        height: a4
      };
    }
    /**
     * Analyze provided config and make object with services to use
     *
     * @param {EmbedConfig} config - configuration of embed block element
     */
    static prepare({ config: i = {} }) {
      const { services: r2 = {} } = i;
      let e = Object.entries(g3);
      const o4 = Object.entries(r2).filter(([t, a4]) => typeof a4 == "boolean" && a4 === true).map(([t]) => t), l3 = Object.entries(r2).filter(([t, a4]) => typeof a4 == "object").filter(([t, a4]) => _m.checkServiceConfig(a4)).map(([t, a4]) => {
        const { regex: n, embedUrl: h4, html: d6, height: c2, width: u2, id: f2 } = a4;
        return [t, {
          regex: n,
          embedUrl: h4,
          html: d6,
          height: c2,
          width: u2,
          id: f2
        }];
      });
      o4.length && (e = e.filter(([t]) => o4.includes(t))), e = e.concat(l3), _m.services = e.reduce((t, [a4, n]) => a4 in t ? (t[a4] = Object.assign({}, t[a4], n), t) : (t[a4] = n, t), {}), _m.patterns = e.reduce((t, [a4, n]) => (n && typeof n != "boolean" && (t[a4] = n.regex), t), {});
    }
    /**
     * Check if Service config is valid
     *
     * @param {Service} config - configuration of embed block element
     * @returns {boolean}
     */
    static checkServiceConfig(i) {
      const { regex: r2, embedUrl: e, html: o4, height: l3, width: t, id: a4 } = i;
      let n = !!(r2 && r2 instanceof RegExp) && !!(e && typeof e == "string") && !!(o4 && typeof o4 == "string");
      return n = n && (a4 !== void 0 ? a4 instanceof Function : true), n = n && (l3 !== void 0 ? Number.isFinite(l3) : true), n = n && (t !== void 0 ? Number.isFinite(t) : true), n;
    }
    /**
     * Paste configuration to enable pasted URLs processing by Editor
     *
     * @returns {object} - object of patterns which contain regx for pasteConfig
     */
    static get pasteConfig() {
      return {
        patterns: _m.patterns
      };
    }
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Checks that mutations in DOM have finished after appending iframe content
     *
     * @param {HTMLElement} targetNode - HTML-element mutations of which to listen
     * @returns {Promise<any>} - result that all mutations have finished
     */
    embedIsReady(i) {
      let e;
      return new Promise((o4, l3) => {
        e = new MutationObserver(w2.debounce(o4, 450)), e.observe(i, {
          childList: true,
          subtree: true
        });
      }).then(() => {
        e.disconnect();
      });
    }
  };

  // node_modules/@editorjs/quote/dist/quote.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var t = document.createElement("style");
        t.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")), document.head.appendChild(t);
      }
    } catch (e) {
      console.error("vite-plugin-css-injected-by-js", e);
    }
  })();
  var De2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>';
  var He = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>';
  var Re2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
  var b2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Fe2(e) {
    if (e.__esModule)
      return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function r2() {
        return this instanceof r2 ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else
      n = {};
    return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(e).forEach(function(r2) {
      var i = Object.getOwnPropertyDescriptor(e, r2);
      Object.defineProperty(n, r2, i.get ? i : {
        enumerable: true,
        get: function() {
          return e[r2];
        }
      });
    }), n;
  }
  var g4 = {};
  var P = {};
  var j = {};
  Object.defineProperty(j, "__esModule", { value: true });
  j.allInputsSelector = We2;
  function We2() {
    var e = ["text", "password", "email", "number", "search", "tel", "url"];
    return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
      return 'input[type="'.concat(t, '"]');
    }).join(", ");
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.allInputsSelector = void 0;
    var t = j;
    Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
      return t.allInputsSelector;
    } });
  })(P);
  var s = {};
  var T = {};
  Object.defineProperty(T, "__esModule", { value: true });
  T.isNativeInput = Ue2;
  function Ue2(e) {
    var t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : false;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isNativeInput = void 0;
    var t = T;
    Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
      return t.isNativeInput;
    } });
  })(s);
  var ie = {};
  var S = {};
  Object.defineProperty(S, "__esModule", { value: true });
  S.append = qe2;
  function qe2(e, t) {
    Array.isArray(t) ? t.forEach(function(n) {
      e.appendChild(n);
    }) : e.appendChild(t);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.append = void 0;
    var t = S;
    Object.defineProperty(e, "append", { enumerable: true, get: function() {
      return t.append;
    } });
  })(ie);
  var C2 = {};
  var L2 = {};
  Object.defineProperty(L2, "__esModule", { value: true });
  L2.blockElements = ze2;
  function ze2() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.blockElements = void 0;
    var t = L2;
    Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
      return t.blockElements;
    } });
  })(C2);
  var ae2 = {};
  var M = {};
  Object.defineProperty(M, "__esModule", { value: true });
  M.calculateBaseline = Ge2;
  function Ge2(e) {
    var t = window.getComputedStyle(e), n = parseFloat(t.fontSize), r2 = parseFloat(t.lineHeight) || n * 1.2, i = parseFloat(t.paddingTop), a4 = parseFloat(t.borderTopWidth), l3 = parseFloat(t.marginTop), u2 = n * 0.8, d6 = (r2 - n) / 2, c2 = l3 + a4 + i + d6 + u2;
    return c2;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.calculateBaseline = void 0;
    var t = M;
    Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
      return t.calculateBaseline;
    } });
  })(ae2);
  var le2 = {};
  var k2 = {};
  var w3 = {};
  var N2 = {};
  Object.defineProperty(N2, "__esModule", { value: true });
  N2.isContentEditable = Ke2;
  function Ke2(e) {
    return e.contentEditable === "true";
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isContentEditable = void 0;
    var t = N2;
    Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
      return t.isContentEditable;
    } });
  })(w3);
  Object.defineProperty(k2, "__esModule", { value: true });
  k2.canSetCaret = Qe2;
  var Xe2 = s;
  var Ye2 = w3;
  function Qe2(e) {
    var t = true;
    if ((0, Xe2.isNativeInput)(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = false;
          break;
      }
    else
      t = (0, Ye2.isContentEditable)(e);
    return t;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.canSetCaret = void 0;
    var t = k2;
    Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
      return t.canSetCaret;
    } });
  })(le2);
  var _ = {};
  var I2 = {};
  function Ve2(e, t, n) {
    const r2 = n.value !== void 0 ? "value" : "get", i = n[r2], a4 = `#${t}Cache`;
    if (n[r2] = function(...l3) {
      return this[a4] === void 0 && (this[a4] = i.apply(this, l3)), this[a4];
    }, r2 === "get" && n.set) {
      const l3 = n.set;
      n.set = function(u2) {
        delete e[a4], l3.apply(this, u2);
      };
    }
    return n;
  }
  function ue2() {
    const e = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    }, t = Object.keys(e).find((n) => window.navigator.appVersion.toLowerCase().indexOf(n) !== -1);
    return t !== void 0 && (e[t] = true), e;
  }
  function A2(e) {
    return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
  }
  function Ze2(e) {
    return !A2(e);
  }
  var Je2 = () => typeof window < "u" && window.navigator !== null && A2(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  function xe2(e) {
    const t = ue2();
    return e = e.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
  }
  function et2(e) {
    return e[0].toUpperCase() + e.slice(1);
  }
  function tt2(e) {
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
    const n = window.getSelection(), r2 = document.createRange();
    if (r2.selectNode(t), n === null)
      throw new Error("Cannot copy text to clipboard");
    n.removeAllRanges(), n.addRange(r2), document.execCommand("copy"), document.body.removeChild(t);
  }
  function nt2(e, t, n) {
    let r2;
    return (...i) => {
      const a4 = this, l3 = () => {
        r2 = void 0, n !== true && e.apply(a4, i);
      }, u2 = n === true && r2 !== void 0;
      window.clearTimeout(r2), r2 = window.setTimeout(l3, t), u2 && e.apply(a4, i);
    };
  }
  function o3(e) {
    return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  function rt2(e) {
    return o3(e) === "boolean";
  }
  function oe(e) {
    return o3(e) === "function" || o3(e) === "asyncfunction";
  }
  function it2(e) {
    return oe(e) && /^\s*class\s+/.test(e.toString());
  }
  function at2(e) {
    return o3(e) === "number";
  }
  function v2(e) {
    return o3(e) === "object";
  }
  function lt2(e) {
    return Promise.resolve(e) === e;
  }
  function ut2(e) {
    return o3(e) === "string";
  }
  function ot2(e) {
    return o3(e) === "undefined";
  }
  function O2(e, ...t) {
    if (!t.length)
      return e;
    const n = t.shift();
    if (v2(e) && v2(n))
      for (const r2 in n)
        v2(n[r2]) ? (e[r2] === void 0 && Object.assign(e, { [r2]: {} }), O2(e[r2], n[r2])) : Object.assign(e, { [r2]: n[r2] });
    return O2(e, ...t);
  }
  function ct2(e, t, n) {
    const r2 = `\xAB${t}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${n}\xBB instead.`;
    e && console.warn(r2);
  }
  function st2(e) {
    try {
      return new URL(e).href;
    } catch {
    }
    return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
  }
  function dt2(e) {
    return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
  }
  var ft2 = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  };
  var pt2 = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
  var gt2 = class {
    constructor() {
      this.completed = Promise.resolve();
    }
    /**
     * Add new promise to queue
     * @param operation - promise should be added to queue
     */
    add(t) {
      return new Promise((n, r2) => {
        this.completed = this.completed.then(t).then(n).catch(r2);
      });
    }
  };
  function vt2(e, t, n = void 0) {
    let r2, i, a4, l3 = null, u2 = 0;
    n || (n = {});
    const d6 = function() {
      u2 = n.leading === false ? 0 : Date.now(), l3 = null, a4 = e.apply(r2, i), l3 === null && (r2 = i = null);
    };
    return function() {
      const c2 = Date.now();
      !u2 && n.leading === false && (u2 = c2);
      const f2 = t - (c2 - u2);
      return r2 = this, i = arguments, f2 <= 0 || f2 > t ? (l3 && (clearTimeout(l3), l3 = null), u2 = c2, a4 = e.apply(r2, i), l3 === null && (r2 = i = null)) : !l3 && n.trailing !== false && (l3 = setTimeout(d6, f2)), a4;
    };
  }
  var mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    PromiseQueue: gt2,
    beautifyShortcut: xe2,
    cacheable: Ve2,
    capitalize: et2,
    copyTextToClipboard: tt2,
    debounce: nt2,
    deepMerge: O2,
    deprecationAssert: ct2,
    getUserOS: ue2,
    getValidUrl: st2,
    isBoolean: rt2,
    isClass: it2,
    isEmpty: Ze2,
    isFunction: oe,
    isIosDevice: Je2,
    isNumber: at2,
    isObject: v2,
    isPrintableKey: dt2,
    isPromise: lt2,
    isString: ut2,
    isUndefined: ot2,
    keyCodes: ft2,
    mouseButtons: pt2,
    notEmpty: A2,
    throttle: vt2,
    typeOf: o3
  }, Symbol.toStringTag, { value: "Module" }));
  var $ = /* @__PURE__ */ Fe2(mt);
  Object.defineProperty(I2, "__esModule", { value: true });
  I2.containsOnlyInlineElements = yt2;
  var bt2 = $;
  var _t2 = C2;
  function yt2(e) {
    var t;
    (0, bt2.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    var n = function(r2) {
      return !(0, _t2.blockElements)().includes(r2.tagName.toLowerCase()) && Array.from(r2.children).every(n);
    };
    return Array.from(t.children).every(n);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.containsOnlyInlineElements = void 0;
    var t = I2;
    Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
      return t.containsOnlyInlineElements;
    } });
  })(_);
  var ce2 = {};
  var B = {};
  var y2 = {};
  var D2 = {};
  Object.defineProperty(D2, "__esModule", { value: true });
  D2.make = ht2;
  function ht2(e, t, n) {
    var r2;
    t === void 0 && (t = null), n === void 0 && (n = {});
    var i = document.createElement(e);
    if (Array.isArray(t)) {
      var a4 = t.filter(function(u2) {
        return u2 !== void 0;
      });
      (r2 = i.classList).add.apply(r2, a4);
    } else
      t !== null && i.classList.add(t);
    for (var l3 in n)
      Object.prototype.hasOwnProperty.call(n, l3) && (i[l3] = n[l3]);
    return i;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.make = void 0;
    var t = D2;
    Object.defineProperty(e, "make", { enumerable: true, get: function() {
      return t.make;
    } });
  })(y2);
  Object.defineProperty(B, "__esModule", { value: true });
  B.fragmentToString = Ot2;
  var Et2 = y2;
  function Ot2(e) {
    var t = (0, Et2.make)("div");
    return t.appendChild(e), t.innerHTML;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.fragmentToString = void 0;
    var t = B;
    Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
      return t.fragmentToString;
    } });
  })(ce2);
  var se2 = {};
  var H2 = {};
  Object.defineProperty(H2, "__esModule", { value: true });
  H2.getContentLength = jt2;
  var Pt2 = s;
  function jt2(e) {
    var t, n;
    return (0, Pt2.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getContentLength = void 0;
    var t = H2;
    Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
      return t.getContentLength;
    } });
  })(se2);
  var R2 = {};
  var F2 = {};
  var re2 = b2 && b2.__spreadArray || function(e, t, n) {
    if (n || arguments.length === 2)
      for (var r2 = 0, i = t.length, a4; r2 < i; r2++)
        (a4 || !(r2 in t)) && (a4 || (a4 = Array.prototype.slice.call(t, 0, r2)), a4[r2] = t[r2]);
    return e.concat(a4 || Array.prototype.slice.call(t));
  };
  Object.defineProperty(F2, "__esModule", { value: true });
  F2.getDeepestBlockElements = de2;
  var Tt2 = _;
  function de2(e) {
    return (0, Tt2.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n) {
      return re2(re2([], t, true), de2(n), true);
    }, []);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestBlockElements = void 0;
    var t = F2;
    Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
      return t.getDeepestBlockElements;
    } });
  })(R2);
  var fe = {};
  var W2 = {};
  var h2 = {};
  var U2 = {};
  Object.defineProperty(U2, "__esModule", { value: true });
  U2.isLineBreakTag = St2;
  function St2(e) {
    return [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isLineBreakTag = void 0;
    var t = U2;
    Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
      return t.isLineBreakTag;
    } });
  })(h2);
  var E = {};
  var q2 = {};
  Object.defineProperty(q2, "__esModule", { value: true });
  q2.isSingleTag = Ct2;
  function Ct2(e) {
    return [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isSingleTag = void 0;
    var t = q2;
    Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
      return t.isSingleTag;
    } });
  })(E);
  Object.defineProperty(W2, "__esModule", { value: true });
  W2.getDeepestNode = pe2;
  var Lt2 = s;
  var Mt2 = h2;
  var kt2 = E;
  function pe2(e, t) {
    t === void 0 && (t = false);
    var n = t ? "lastChild" : "firstChild", r2 = t ? "previousSibling" : "nextSibling";
    if (e.nodeType === Node.ELEMENT_NODE && e[n]) {
      var i = e[n];
      if ((0, kt2.isSingleTag)(i) && !(0, Lt2.isNativeInput)(i) && !(0, Mt2.isLineBreakTag)(i))
        if (i[r2])
          i = i[r2];
        else if (i.parentNode !== null && i.parentNode[r2])
          i = i.parentNode[r2];
        else
          return i.parentNode;
      return pe2(i, t);
    }
    return e;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestNode = void 0;
    var t = W2;
    Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
      return t.getDeepestNode;
    } });
  })(fe);
  var ge = {};
  var z2 = {};
  var p3 = b2 && b2.__spreadArray || function(e, t, n) {
    if (n || arguments.length === 2)
      for (var r2 = 0, i = t.length, a4; r2 < i; r2++)
        (a4 || !(r2 in t)) && (a4 || (a4 = Array.prototype.slice.call(t, 0, r2)), a4[r2] = t[r2]);
    return e.concat(a4 || Array.prototype.slice.call(t));
  };
  Object.defineProperty(z2, "__esModule", { value: true });
  z2.findAllInputs = $t2;
  var wt2 = _;
  var Nt2 = R2;
  var It2 = P;
  var At2 = s;
  function $t2(e) {
    return Array.from(e.querySelectorAll((0, It2.allInputsSelector)())).reduce(function(t, n) {
      return (0, At2.isNativeInput)(n) || (0, wt2.containsOnlyInlineElements)(n) ? p3(p3([], t, true), [n], false) : p3(p3([], t, true), (0, Nt2.getDeepestBlockElements)(n), true);
    }, []);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.findAllInputs = void 0;
    var t = z2;
    Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
      return t.findAllInputs;
    } });
  })(ge);
  var ve2 = {};
  var G2 = {};
  Object.defineProperty(G2, "__esModule", { value: true });
  G2.isCollapsedWhitespaces = Bt2;
  function Bt2(e) {
    return !/[^\t\n\r ]/.test(e);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isCollapsedWhitespaces = void 0;
    var t = G2;
    Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
      return t.isCollapsedWhitespaces;
    } });
  })(ve2);
  var K2 = {};
  var X2 = {};
  Object.defineProperty(X2, "__esModule", { value: true });
  X2.isElement = Ht2;
  var Dt2 = $;
  function Ht2(e) {
    return (0, Dt2.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isElement = void 0;
    var t = X2;
    Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
      return t.isElement;
    } });
  })(K2);
  var me2 = {};
  var Y = {};
  var Q2 = {};
  var V2 = {};
  Object.defineProperty(V2, "__esModule", { value: true });
  V2.isLeaf = Rt2;
  function Rt2(e) {
    return e === null ? false : e.childNodes.length === 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isLeaf = void 0;
    var t = V2;
    Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
      return t.isLeaf;
    } });
  })(Q2);
  var Z2 = {};
  var J2 = {};
  Object.defineProperty(J2, "__esModule", { value: true });
  J2.isNodeEmpty = zt2;
  var Ft2 = h2;
  var Wt2 = K2;
  var Ut2 = s;
  var qt2 = E;
  function zt2(e, t) {
    var n = "";
    return (0, qt2.isSingleTag)(e) && !(0, Ft2.isLineBreakTag)(e) ? false : ((0, Wt2.isElement)(e) && (0, Ut2.isNativeInput)(e) ? n = e.value : e.textContent !== null && (n = e.textContent.replace("\u200B", "")), t !== void 0 && (n = n.replace(new RegExp(t, "g"), "")), n.trim().length === 0);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isNodeEmpty = void 0;
    var t = J2;
    Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
      return t.isNodeEmpty;
    } });
  })(Z2);
  Object.defineProperty(Y, "__esModule", { value: true });
  Y.isEmpty = Xt2;
  var Gt2 = Q2;
  var Kt2 = Z2;
  function Xt2(e, t) {
    e.normalize();
    for (var n = [e]; n.length > 0; ) {
      var r2 = n.shift();
      if (r2) {
        if (e = r2, (0, Gt2.isLeaf)(e) && !(0, Kt2.isNodeEmpty)(e, t))
          return false;
        n.push.apply(n, Array.from(e.childNodes));
      }
    }
    return true;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isEmpty = void 0;
    var t = Y;
    Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
      return t.isEmpty;
    } });
  })(me2);
  var be2 = {};
  var x = {};
  Object.defineProperty(x, "__esModule", { value: true });
  x.isFragment = Qt2;
  var Yt2 = $;
  function Qt2(e) {
    return (0, Yt2.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isFragment = void 0;
    var t = x;
    Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
      return t.isFragment;
    } });
  })(be2);
  var _e2 = {};
  var ee = {};
  Object.defineProperty(ee, "__esModule", { value: true });
  ee.isHTMLString = Zt2;
  var Vt2 = y2;
  function Zt2(e) {
    var t = (0, Vt2.make)("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.isHTMLString = void 0;
    var t = ee;
    Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
      return t.isHTMLString;
    } });
  })(_e2);
  var ye2 = {};
  var te2 = {};
  Object.defineProperty(te2, "__esModule", { value: true });
  te2.offset = Jt2;
  function Jt2(e) {
    var t = e.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, r2 = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r2, a4 = t.left + n;
    return {
      top: i,
      left: a4,
      bottom: i + t.height,
      right: a4 + t.width
    };
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.offset = void 0;
    var t = te2;
    Object.defineProperty(e, "offset", { enumerable: true, get: function() {
      return t.offset;
    } });
  })(ye2);
  var he2 = {};
  var ne2 = {};
  Object.defineProperty(ne2, "__esModule", { value: true });
  ne2.prepend = xt2;
  function xt2(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n) {
      return e.prepend(n);
    })) : e.prepend(t);
  }
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.prepend = void 0;
    var t = ne2;
    Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
      return t.prepend;
    } });
  })(he2);
  (function(e) {
    Object.defineProperty(e, "__esModule", { value: true }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
    var t = P;
    Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
      return t.allInputsSelector;
    } });
    var n = s;
    Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
      return n.isNativeInput;
    } });
    var r2 = ie;
    Object.defineProperty(e, "append", { enumerable: true, get: function() {
      return r2.append;
    } });
    var i = C2;
    Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
      return i.blockElements;
    } });
    var a4 = ae2;
    Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
      return a4.calculateBaseline;
    } });
    var l3 = le2;
    Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
      return l3.canSetCaret;
    } });
    var u2 = _;
    Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
      return u2.containsOnlyInlineElements;
    } });
    var d6 = ce2;
    Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
      return d6.fragmentToString;
    } });
    var c2 = se2;
    Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
      return c2.getContentLength;
    } });
    var f2 = R2;
    Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
      return f2.getDeepestBlockElements;
    } });
    var Oe2 = fe;
    Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
      return Oe2.getDeepestNode;
    } });
    var Pe2 = ge;
    Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
      return Pe2.findAllInputs;
    } });
    var je2 = ve2;
    Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
      return je2.isCollapsedWhitespaces;
    } });
    var Te2 = w3;
    Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
      return Te2.isContentEditable;
    } });
    var Se2 = K2;
    Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
      return Se2.isElement;
    } });
    var Ce2 = me2;
    Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
      return Ce2.isEmpty;
    } });
    var Le2 = be2;
    Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
      return Le2.isFragment;
    } });
    var Me2 = _e2;
    Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
      return Me2.isHTMLString;
    } });
    var ke2 = Q2;
    Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
      return ke2.isLeaf;
    } });
    var we2 = Z2;
    Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
      return we2.isNodeEmpty;
    } });
    var Ne2 = h2;
    Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
      return Ne2.isLineBreakTag;
    } });
    var Ie2 = E;
    Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
      return Ie2.isSingleTag;
    } });
    var Ae2 = y2;
    Object.defineProperty(e, "make", { enumerable: true, get: function() {
      return Ae2.make;
    } });
    var $e2 = ye2;
    Object.defineProperty(e, "offset", { enumerable: true, get: function() {
      return $e2.offset;
    } });
    var Be2 = he2;
    Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
      return Be2.prepend;
    } });
  })(g4);
  var Ee2 = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e))(Ee2 || {});
  var m3 = class _m {
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - constructor params
     * @param {QuoteData} params.data - previously saved data
     * @param {QuoteConfig} params.config - user config for Tool
     * @param {API} params.api - editor.js api
     * @param {boolean} params.readOnly - read only mode flag
     */
    constructor({ data: t, config: n, api: r2, readOnly: i, block: a4 }) {
      const { DEFAULT_ALIGNMENT: l3 } = _m;
      this.api = r2, this.readOnly = i, this._quotePlaceholder = n.quotePlaceholder || _m.DEFAULT_QUOTE_PLACEHOLDER, this._captionPlaceholder = n.captionPlaceholder || _m.DEFAULT_CAPTION_PLACEHOLDER, this._data = {
        text: t.text || "",
        caption: t.caption || "",
        alignment: Object.values(Ee2).includes(t.alignment) && t.alignment || n.defaultAlignment || l3
      }, this._CSS = {
        baseClass: this.api.styles.block,
        wrapper: "cdx-quote",
        text: "cdx-quote__text",
        input: this.api.styles.input,
        caption: "cdx-quote__caption"
      }, this._block = a4;
    }
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox() {
      return {
        icon: Re2,
        title: "Quote"
      };
    }
    /**
     * Empty Quote is not empty Block
     *
     * @public
     * @returns {boolean}
     */
    static get contentless() {
      return true;
    }
    /**
     * Allow to press Enter inside the Quote
     *
     * @public
     * @returns {boolean}
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Default placeholder for quote text
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_QUOTE_PLACEHOLDER() {
      return "Enter a quote";
    }
    /**
     * Default placeholder for quote caption
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_CAPTION_PLACEHOLDER() {
      return "Enter a caption";
    }
    /**
     * Default quote alignment
     *
     * @public
     * @returns {string}
     */
    static get DEFAULT_ALIGNMENT() {
      return "left";
    }
    /**
     * Allow Quote to be converted to/from other blocks
     */
    static get conversionConfig() {
      return {
        /**
         * To create Quote data from string, simple fill 'text' property
         */
        import: "text",
        /**
         * To create string from Quote data, concatenate text and caption
         *
         * @param {QuoteData} quoteData
         * @returns {string}
         */
        export: function(t) {
          return t.caption ? `${t.text} \u2014 ${t.caption}` : t.text;
        }
      };
    }
    /**
     * Tool`s styles
     *
     * @returns {QuoteCSS}
     */
    get CSS() {
      return {
        baseClass: this.api.styles.block,
        wrapper: "cdx-quote",
        text: "cdx-quote__text",
        input: this.api.styles.input,
        caption: "cdx-quote__caption"
      };
    }
    /**
     * Tool`s settings properties
     *
     * @returns {*[]}
     */
    get settings() {
      return [
        {
          name: "left",
          icon: He
        },
        {
          name: "center",
          icon: De2
        }
      ];
    }
    /**
     * Create Quote Tool container with inputs
     *
     * @returns {Element}
     */
    render() {
      const t = g4.make("blockquote", [
        this._CSS.baseClass,
        this._CSS.wrapper
      ]), n = g4.make("div", [this._CSS.input, this._CSS.text], {
        contentEditable: !this.readOnly,
        innerHTML: this._data.text
      }), r2 = g4.make("div", [this._CSS.input, this._CSS.caption], {
        contentEditable: !this.readOnly,
        innerHTML: this._data.caption
      });
      return n.dataset.placeholder = this._quotePlaceholder, r2.dataset.placeholder = this._captionPlaceholder, t.appendChild(n), t.appendChild(r2), t;
    }
    /**
     * Extract Quote data from Quote Tool element
     *
     * @param {HTMLDivElement} quoteElement - element to save
     * @returns {QuoteData}
     */
    save(t) {
      const n = t.querySelector(`.${this._CSS.text}`), r2 = t.querySelector(`.${this._CSS.caption}`);
      return Object.assign(this._data, {
        text: (n == null ? void 0 : n.innerHTML) ?? "",
        caption: (r2 == null ? void 0 : r2.innerHTML) ?? ""
      });
    }
    /**
     * Sanitizer rules
     */
    static get sanitize() {
      return {
        text: {
          br: true
        },
        caption: {
          br: true
        },
        alignment: {}
      };
    }
    /**
     * Create wrapper for Tool`s settings buttons:
     * 1. Left alignment
     * 2. Center alignment
     *
     * @returns {MenuConfig}
     *
     */
    renderSettings() {
      const t = (n) => n && n[0].toUpperCase() + n.slice(1);
      return this.settings.map((n) => ({
        icon: n.icon,
        label: this.api.i18n.t(`Align ${t(n.name)}`),
        onActivate: () => this._toggleTune(n.name),
        isActive: this._data.alignment === n.name,
        closeOnActivate: true
      }));
    }
    /**
     * Toggle quote`s alignment
     *
     * @param {string} tune - alignment
     * @private
     */
    _toggleTune(t) {
      this._data.alignment = t, this._block.dispatchChange();
    }
  };

  // node_modules/@editorjs/code/dist/code.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")), document.head.appendChild(e);
      }
    } catch (o4) {
      console.error("vite-plugin-css-injected-by-js", o4);
    }
  })();
  function l2(c2, t) {
    let a4 = "";
    for (; a4 !== `
` && t > 0; )
      t = t - 1, a4 = c2.substr(t, 1);
    return a4 === `
` && (t += 1), t;
  }
  var h3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
  var d5 = class _d {
    /**
     * Notify core that read-only mode is supported
     * @returns true if read-only mode is supported
     */
    static get isReadOnlySupported() {
      return true;
    }
    /**
     * Allows pressing Enter key to create line breaks inside the CodeTool textarea
     * This enables multi-line input within the code editor.
     * @returns true if line breaks are allowed in the textarea
     */
    static get enableLineBreaks() {
      return true;
    }
    /**
     * Render plugin`s main Element and fill it with saved data
     * @param options - tool constricting options
     * @param options.data — previously saved plugin code
     * @param options.config - user config for Tool
     * @param options.api - Editor.js API
     * @param options.readOnly - read only mode flag
     */
    constructor({ data: t, config: e, api: a4, readOnly: r2 }) {
      this.api = a4, this.readOnly = r2, this.placeholder = this.api.i18n.t(e.placeholder || _d.DEFAULT_PLACEHOLDER), this.CSS = {
        baseClass: this.api.styles.block,
        input: this.api.styles.input,
        wrapper: "ce-code",
        textarea: "ce-code__textarea"
      }, this.nodes = {
        holder: null,
        textarea: null
      }, this.data = {
        code: t.code ?? ""
      }, this.nodes.holder = this.drawView();
    }
    /**
     * Return Tool's view
     * @returns this.nodes.holder - Code's wrapper
     */
    render() {
      return this.nodes.holder;
    }
    /**
     * Extract Tool's data from the view
     * @param codeWrapper - CodeTool's wrapper, containing textarea with code
     * @returns - saved plugin code
     */
    save(t) {
      return {
        code: t.querySelector("textarea").value
      };
    }
    /**
     * onPaste callback fired from Editor`s core
     * @param event - event with pasted content
     */
    onPaste(t) {
      const e = t.detail;
      if ("data" in e) {
        const a4 = e.data;
        this.data = {
          code: a4 || ""
        };
      }
    }
    /**
     * Returns Tool`s data from private property
     * @returns
     */
    get data() {
      return this._data;
    }
    /**
     * Set Tool`s data to private property and update view
     * @param data - saved tool data
     */
    set data(t) {
      this._data = t, this.nodes.textarea && (this.nodes.textarea.textContent = t.code);
    }
    /**
     * Get Tool toolbox settings.
     * Provides the icon and title to display in the toolbox for the CodeTool.
     * @returns An object containing:
     * - icon: SVG representation of the Tool's icon
     * - title: Title to show in the toolbox
     */
    static get toolbox() {
      return {
        icon: h3,
        title: "Code"
      };
    }
    /**
     * Default placeholder for CodeTool's textarea
     * @returns
     */
    static get DEFAULT_PLACEHOLDER() {
      return "Enter a code";
    }
    /**
     *  Used by Editor.js paste handling API.
     *  Provides configuration to handle CODE tag.
     * @returns
     */
    static get pasteConfig() {
      return {
        tags: ["pre"]
      };
    }
    /**
     * Automatic sanitize config
     * @returns
     */
    static get sanitize() {
      return {
        code: true
        // Allow HTML tags
      };
    }
    /**
     * Handles Tab key pressing (adds/removes indentations)
     * @param event - keydown
     */
    tabHandler(t) {
      t.stopPropagation(), t.preventDefault();
      const e = t.target, a4 = t.shiftKey, r2 = e.selectionStart, s2 = e.value, n = "  ";
      let i;
      if (!a4)
        i = r2 + n.length, e.value = s2.substring(0, r2) + n + s2.substring(r2);
      else {
        const o4 = l2(s2, r2);
        if (s2.substr(o4, n.length) !== n)
          return;
        e.value = s2.substring(0, o4) + s2.substring(o4 + n.length), i = r2 - n.length;
      }
      e.setSelectionRange(i, i);
    }
    /**
     * Create Tool's view
     * @returns
     */
    drawView() {
      const t = document.createElement("div"), e = document.createElement("textarea");
      return t.classList.add(this.CSS.baseClass, this.CSS.wrapper), e.classList.add(this.CSS.textarea, this.CSS.input), e.textContent = this.data.code, e.placeholder = this.placeholder, this.readOnly && (e.disabled = true), t.appendChild(e), e.addEventListener("keydown", (a4) => {
        switch (a4.code) {
          case "Tab":
            this.tabHandler(a4);
            break;
        }
      }), this.nodes.textarea = e, t;
    }
  };

  // editorjs-bundle.js
  var import_editorjs_drag_drop = __toESM(require_bundle());
  window.EditorJS = Ts;
  window.Header = v;
  window.RawTool = r;
  window.Checklist = f;
  window.List = d4;
  window.Embed = m2;
  window.Quote = m3;
  window.CodeTool = d5;
  window.DragDrop = import_editorjs_drag_drop.default;
})();
/*! Bundled license information:

@editorjs/editorjs/dist/editorjs.mjs:
  (*!
   * CodeX.Tooltips
   * 
   * @version 1.0.5
   * 
   * @licence MIT
   * @author CodeX <https://codex.so>
   * 
   * 
   *)
  (*!
   * Library for handling keyboard shortcuts
   * @copyright CodeX (https://codex.so)
   * @license MIT
   * @author CodeX (https://codex.so)
   * @version 1.2.0
   *)
  (**
   * Base Paragraph Block for the Editor.js.
   * Represents a regular text block
   *
   * @author CodeX (team@codex.so)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   *)
  (**
   * Editor.js
   *
   * @license Apache-2.0
   * @see Editor.js <https://editorjs.io>
   * @author CodeX Team <https://codex.so>
   *)

@editorjs/Header/dist/header.mjs:
  (**
   * Header block for the Editor.js.
   *
   * @author CodeX (team@ifmo.su)
   * @copyright CodeX 2018
   * @license MIT
   * @version 2.0.0
   *)

@editorjs/raw/dist/raw.mjs:
  (**
   * Raw HTML Tool for CodeX Editor
   *
   * @author CodeX (team@codex.so)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   *)

@editorjs/code/dist/code.mjs:
  (**
   * CodeTool for Editor.js
   * @version 2.0.0
   * @license MIT
   *)
*/
