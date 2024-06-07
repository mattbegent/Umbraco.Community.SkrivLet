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

  // node_modules/@editorjs/raw/dist/bundle.js
  var require_bundle = __commonJS({
    "node_modules/@editorjs/raw/dist/bundle.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.RawTool = t() : e.RawTool = t();
      }(window, function() {
        return function(e) {
          var t = {};
          function n(r) {
            if (t[r])
              return t[r].exports;
            var o3 = t[r] = { i: r, l: false, exports: {} };
            return e[r].call(o3.exports, o3, o3.exports, n), o3.l = true, o3.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, r) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
          }, n.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n.t = function(e2, t2) {
            if (1 & t2 && (e2 = n(e2)), 8 & t2)
              return e2;
            if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
              return e2;
            var r = /* @__PURE__ */ Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
              for (var o3 in e2)
                n.d(r, o3, function(t3) {
                  return e2[t3];
                }.bind(null, o3));
            return r;
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "/", n(n.s = 5);
        }([function(e, t, n) {
          var r = n(1);
          "string" == typeof r && (r = [[e.i, r, ""]]);
          var o3 = { hmr: true, transform: void 0, insertInto: void 0 };
          n(3)(r, o3);
          r.locals && (e.exports = r.locals);
        }, function(e, t, n) {
          (e.exports = n(2)(false)).push([e.i, ".ce-rawtool__textarea {\n  min-height: 200px;\n  resize: vertical;\n  border-radius: 8px;\n  border: 0;\n  background-color: #1e2128;\n  font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 12px;\n  line-height: 1.6;\n  letter-spacing: -0.2px;\n  color: #a1a7b6;\n  overscroll-behavior: contain;\n}\n", ""]);
        }, function(e, t) {
          e.exports = function(e2) {
            var t2 = [];
            return t2.toString = function() {
              return this.map(function(t3) {
                var n = function(e3, t4) {
                  var n2 = e3[1] || "", r = e3[3];
                  if (!r)
                    return n2;
                  if (t4 && "function" == typeof btoa) {
                    var o3 = (a3 = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a3)))) + " */"), i2 = r.sources.map(function(e4) {
                      return "/*# sourceURL=" + r.sourceRoot + e4 + " */";
                    });
                    return [n2].concat(i2).concat([o3]).join("\n");
                  }
                  var a3;
                  return [n2].join("\n");
                }(t3, e2);
                return t3[2] ? "@media " + t3[2] + "{" + n + "}" : n;
              }).join("");
            }, t2.i = function(e3, n) {
              "string" == typeof e3 && (e3 = [[null, e3, ""]]);
              for (var r = {}, o3 = 0; o3 < this.length; o3++) {
                var i2 = this[o3][0];
                "number" == typeof i2 && (r[i2] = true);
              }
              for (o3 = 0; o3 < e3.length; o3++) {
                var a3 = e3[o3];
                "number" == typeof a3[0] && r[a3[0]] || (n && !a3[2] ? a3[2] = n : n && (a3[2] = "(" + a3[2] + ") and (" + n + ")"), t2.push(a3));
              }
            }, t2;
          };
        }, function(e, t, n) {
          var r, o3, i2 = {}, a3 = (r = function() {
            return window && document && document.all && !window.atob;
          }, function() {
            return void 0 === o3 && (o3 = r.apply(this, arguments)), o3;
          }), s = function(e2) {
            return document.querySelector(e2);
          }, u3 = function(e2) {
            var t2 = {};
            return function(e3) {
              if ("function" == typeof e3)
                return e3();
              if (void 0 === t2[e3]) {
                var n2 = s.call(this, e3);
                if (window.HTMLIFrameElement && n2 instanceof window.HTMLIFrameElement)
                  try {
                    n2 = n2.contentDocument.head;
                  } catch (e4) {
                    n2 = null;
                  }
                t2[e3] = n2;
              }
              return t2[e3];
            };
          }(), c3 = null, l2 = 0, f2 = [], p2 = n(4);
          function d5(e2, t2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var r2 = e2[n2], o4 = i2[r2.id];
              if (o4) {
                o4.refs++;
                for (var a4 = 0; a4 < o4.parts.length; a4++)
                  o4.parts[a4](r2.parts[a4]);
                for (; a4 < r2.parts.length; a4++)
                  o4.parts.push(g3(r2.parts[a4], t2));
              } else {
                var s2 = [];
                for (a4 = 0; a4 < r2.parts.length; a4++)
                  s2.push(g3(r2.parts[a4], t2));
                i2[r2.id] = { id: r2.id, refs: 1, parts: s2 };
              }
            }
          }
          function h2(e2, t2) {
            for (var n2 = [], r2 = {}, o4 = 0; o4 < e2.length; o4++) {
              var i3 = e2[o4], a4 = t2.base ? i3[0] + t2.base : i3[0], s2 = { css: i3[1], media: i3[2], sourceMap: i3[3] };
              r2[a4] ? r2[a4].parts.push(s2) : n2.push(r2[a4] = { id: a4, parts: [s2] });
            }
            return n2;
          }
          function v(e2, t2) {
            var n2 = u3(e2.insertInto);
            if (!n2)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r2 = f2[f2.length - 1];
            if ("top" === e2.insertAt)
              r2 ? r2.nextSibling ? n2.insertBefore(t2, r2.nextSibling) : n2.appendChild(t2) : n2.insertBefore(t2, n2.firstChild), f2.push(t2);
            else if ("bottom" === e2.insertAt)
              n2.appendChild(t2);
            else {
              if ("object" != typeof e2.insertAt || !e2.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
              var o4 = u3(e2.insertInto + " " + e2.insertAt.before);
              n2.insertBefore(t2, o4);
            }
          }
          function b(e2) {
            if (null === e2.parentNode)
              return false;
            e2.parentNode.removeChild(e2);
            var t2 = f2.indexOf(e2);
            t2 >= 0 && f2.splice(t2, 1);
          }
          function y(e2) {
            var t2 = document.createElement("style");
            return void 0 === e2.attrs.type && (e2.attrs.type = "text/css"), m4(t2, e2.attrs), v(e2, t2), t2;
          }
          function m4(e2, t2) {
            Object.keys(t2).forEach(function(n2) {
              e2.setAttribute(n2, t2[n2]);
            });
          }
          function g3(e2, t2) {
            var n2, r2, o4, i3;
            if (t2.transform && e2.css) {
              if (!(i3 = t2.transform(e2.css)))
                return function() {
                };
              e2.css = i3;
            }
            if (t2.singleton) {
              var a4 = l2++;
              n2 = c3 || (c3 = y(t2)), r2 = L2.bind(null, n2, a4, false), o4 = L2.bind(null, n2, a4, true);
            } else
              e2.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n2 = function(e3) {
                var t3 = document.createElement("link");
                return void 0 === e3.attrs.type && (e3.attrs.type = "text/css"), e3.attrs.rel = "stylesheet", m4(t3, e3.attrs), v(e3, t3), t3;
              }(t2), r2 = j2.bind(null, n2, t2), o4 = function() {
                b(n2), n2.href && URL.revokeObjectURL(n2.href);
              }) : (n2 = y(t2), r2 = C3.bind(null, n2), o4 = function() {
                b(n2);
              });
            return r2(e2), function(t3) {
              if (t3) {
                if (t3.css === e2.css && t3.media === e2.media && t3.sourceMap === e2.sourceMap)
                  return;
                r2(e2 = t3);
              } else
                o4();
            };
          }
          e.exports = function(e2, t2) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
              throw new Error("The style-loader cannot be used in a non-browser environment");
            (t2 = t2 || {}).attrs = "object" == typeof t2.attrs ? t2.attrs : {}, t2.singleton || "boolean" == typeof t2.singleton || (t2.singleton = a3()), t2.insertInto || (t2.insertInto = "head"), t2.insertAt || (t2.insertAt = "bottom");
            var n2 = h2(e2, t2);
            return d5(n2, t2), function(e3) {
              for (var r2 = [], o4 = 0; o4 < n2.length; o4++) {
                var a4 = n2[o4];
                (s2 = i2[a4.id]).refs--, r2.push(s2);
              }
              e3 && d5(h2(e3, t2), t2);
              for (o4 = 0; o4 < r2.length; o4++) {
                var s2;
                if (0 === (s2 = r2[o4]).refs) {
                  for (var u4 = 0; u4 < s2.parts.length; u4++)
                    s2.parts[u4]();
                  delete i2[s2.id];
                }
              }
            };
          };
          var x, w2 = (x = [], function(e2, t2) {
            return x[e2] = t2, x.filter(Boolean).join("\n");
          });
          function L2(e2, t2, n2, r2) {
            var o4 = n2 ? "" : r2.css;
            if (e2.styleSheet)
              e2.styleSheet.cssText = w2(t2, o4);
            else {
              var i3 = document.createTextNode(o4), a4 = e2.childNodes;
              a4[t2] && e2.removeChild(a4[t2]), a4.length ? e2.insertBefore(i3, a4[t2]) : e2.appendChild(i3);
            }
          }
          function C3(e2, t2) {
            var n2 = t2.css, r2 = t2.media;
            if (r2 && e2.setAttribute("media", r2), e2.styleSheet)
              e2.styleSheet.cssText = n2;
            else {
              for (; e2.firstChild; )
                e2.removeChild(e2.firstChild);
              e2.appendChild(document.createTextNode(n2));
            }
          }
          function j2(e2, t2, n2) {
            var r2 = n2.css, o4 = n2.sourceMap, i3 = void 0 === t2.convertToAbsoluteUrls && o4;
            (t2.convertToAbsoluteUrls || i3) && (r2 = p2(r2)), o4 && (r2 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o4)))) + " */");
            var a4 = new Blob([r2], { type: "text/css" }), s2 = e2.href;
            e2.href = URL.createObjectURL(a4), s2 && URL.revokeObjectURL(s2);
          }
        }, function(e, t) {
          e.exports = function(e2) {
            var t2 = "undefined" != typeof window && window.location;
            if (!t2)
              throw new Error("fixUrls requires window.location");
            if (!e2 || "string" != typeof e2)
              return e2;
            var n = t2.protocol + "//" + t2.host, r = n + t2.pathname.replace(/\/[^\/]*$/, "/");
            return e2.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e3, t3) {
              var o3, i2 = t3.trim().replace(/^"(.*)"$/, function(e4, t4) {
                return t4;
              }).replace(/^'(.*)'$/, function(e4, t4) {
                return t4;
              });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i2) ? e3 : (o3 = 0 === i2.indexOf("//") ? i2 : 0 === i2.indexOf("/") ? n + i2 : r + i2.replace(/^\.\//, ""), "url(" + JSON.stringify(o3) + ")");
            });
          };
        }, function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, "default", function() {
            return i2;
          });
          n(0);
          function r(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var r2 = t2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
            }
          }
          function o3(e2, t2, n2) {
            return t2 && r(e2.prototype, t2), n2 && r(e2, n2), e2;
          }
          var i2 = function() {
            function e2(t2) {
              var n2 = t2.data, r2 = t2.config, o4 = t2.api, i3 = t2.readOnly;
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this.api = o4, this.readOnly = i3, this.placeholder = r2.placeholder || e2.DEFAULT_PLACEHOLDER, this.CSS = { baseClass: this.api.styles.block, input: this.api.styles.input, wrapper: "ce-rawtool", textarea: "ce-rawtool__textarea" }, this.data = { html: n2.html || "" }, this.textarea = null, this.resizeDebounce = null;
            }
            return o3(e2, null, [{ key: "isReadOnlySupported", get: function() {
              return true;
            } }, { key: "displayInToolbox", get: function() {
              return true;
            } }, { key: "enableLineBreaks", get: function() {
              return true;
            } }, { key: "toolbox", get: function() {
              return { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>', title: "Raw HTML" };
            } }]), o3(e2, [{ key: "render", value: function() {
              var e3 = this, t2 = document.createElement("div");
              return this.textarea = document.createElement("textarea"), t2.classList.add(this.CSS.baseClass, this.CSS.wrapper), this.textarea.classList.add(this.CSS.textarea, this.CSS.input), this.textarea.textContent = this.data.html, this.textarea.placeholder = this.placeholder, this.readOnly ? this.textarea.disabled = true : this.textarea.addEventListener("input", function() {
                e3.onInput();
              }), t2.appendChild(this.textarea), setTimeout(function() {
                e3.resize();
              }, 100), t2;
            } }, { key: "save", value: function(e3) {
              return { html: e3.querySelector("textarea").value };
            } }, { key: "onInput", value: function() {
              var e3 = this;
              this.resizeDebounce && clearTimeout(this.resizeDebounce), this.resizeDebounce = setTimeout(function() {
                e3.resize();
              }, 200);
            } }, { key: "resize", value: function() {
              this.textarea.style.height = "auto", this.textarea.style.height = this.textarea.scrollHeight + "px";
            } }], [{ key: "DEFAULT_PLACEHOLDER", get: function() {
              return "Enter HTML code";
            } }, { key: "sanitize", get: function() {
              return { html: true };
            } }]), e2;
          }();
        }]).default;
      });
    }
  });

  // node_modules/@editorjs/quote/dist/bundle.js
  var require_bundle2 = __commonJS({
    "node_modules/@editorjs/quote/dist/bundle.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Quote = e() : t.Quote = e();
      }(window, function() {
        return function(t) {
          var e = {};
          function n(r) {
            if (e[r])
              return e[r].exports;
            var o3 = e[r] = { i: r, l: false, exports: {} };
            return t[r].call(o3.exports, o3, o3.exports, n), o3.l = true, o3.exports;
          }
          return n.m = t, n.c = e, n.d = function(t2, e2, r) {
            n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: r });
          }, n.r = function(t2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          }, n.t = function(t2, e2) {
            if (1 & e2 && (t2 = n(t2)), 8 & e2)
              return t2;
            if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
              return t2;
            var r = /* @__PURE__ */ Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
              for (var o3 in t2)
                n.d(r, o3, function(e3) {
                  return t2[e3];
                }.bind(null, o3));
            return r;
          }, n.n = function(t2) {
            var e2 = t2 && t2.__esModule ? function() {
              return t2.default;
            } : function() {
              return t2;
            };
            return n.d(e2, "a", e2), e2;
          }, n.o = function(t2, e2) {
            return Object.prototype.hasOwnProperty.call(t2, e2);
          }, n.p = "/", n(n.s = 5);
        }([function(t, e, n) {
          var r = n(1);
          "string" == typeof r && (r = [[t.i, r, ""]]);
          var o3 = { hmr: true, transform: void 0, insertInto: void 0 };
          n(3)(r, o3);
          r.locals && (t.exports = r.locals);
        }, function(t, e, n) {
          (t.exports = n(2)(false)).push([t.i, ".cdx-quote-icon svg {\n  transform: rotate(180deg);\n}\n\n.cdx-quote {\n  margin: 0;\n}\n\n.cdx-quote__text {\n  min-height: 158px;\n  margin-bottom: 10px;\n}\n\n.cdx-quote__caption {}\n\n.cdx-quote [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-quote-settings {\n  display: flex;\n}\n\n.cdx-quote-settings .cdx-settings-button {\n  width: 50%;\n}\n", ""]);
        }, function(t, e) {
          t.exports = function(t2) {
            var e2 = [];
            return e2.toString = function() {
              return this.map(function(e3) {
                var n = function(t3, e4) {
                  var n2 = t3[1] || "", r = t3[3];
                  if (!r)
                    return n2;
                  if (e4 && "function" == typeof btoa) {
                    var o3 = (a3 = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a3)))) + " */"), i2 = r.sources.map(function(t4) {
                      return "/*# sourceURL=" + r.sourceRoot + t4 + " */";
                    });
                    return [n2].concat(i2).concat([o3]).join("\n");
                  }
                  var a3;
                  return [n2].join("\n");
                }(e3, t2);
                return e3[2] ? "@media " + e3[2] + "{" + n + "}" : n;
              }).join("");
            }, e2.i = function(t3, n) {
              "string" == typeof t3 && (t3 = [[null, t3, ""]]);
              for (var r = {}, o3 = 0; o3 < this.length; o3++) {
                var i2 = this[o3][0];
                "number" == typeof i2 && (r[i2] = true);
              }
              for (o3 = 0; o3 < t3.length; o3++) {
                var a3 = t3[o3];
                "number" == typeof a3[0] && r[a3[0]] || (n && !a3[2] ? a3[2] = n : n && (a3[2] = "(" + a3[2] + ") and (" + n + ")"), e2.push(a3));
              }
            }, e2;
          };
        }, function(t, e, n) {
          var r, o3, i2 = {}, a3 = (r = function() {
            return window && document && document.all && !window.atob;
          }, function() {
            return void 0 === o3 && (o3 = r.apply(this, arguments)), o3;
          }), s = function(t2) {
            var e2 = {};
            return function(t3) {
              if ("function" == typeof t3)
                return t3();
              if (void 0 === e2[t3]) {
                var n2 = function(t4) {
                  return document.querySelector(t4);
                }.call(this, t3);
                if (window.HTMLIFrameElement && n2 instanceof window.HTMLIFrameElement)
                  try {
                    n2 = n2.contentDocument.head;
                  } catch (t4) {
                    n2 = null;
                  }
                e2[t3] = n2;
              }
              return e2[t3];
            };
          }(), c3 = null, u3 = 0, l2 = [], f2 = n(4);
          function d5(t2, e2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var r2 = t2[n2], o4 = i2[r2.id];
              if (o4) {
                o4.refs++;
                for (var a4 = 0; a4 < o4.parts.length; a4++)
                  o4.parts[a4](r2.parts[a4]);
                for (; a4 < r2.parts.length; a4++)
                  o4.parts.push(b(r2.parts[a4], e2));
              } else {
                var s2 = [];
                for (a4 = 0; a4 < r2.parts.length; a4++)
                  s2.push(b(r2.parts[a4], e2));
                i2[r2.id] = { id: r2.id, refs: 1, parts: s2 };
              }
            }
          }
          function p2(t2, e2) {
            for (var n2 = [], r2 = {}, o4 = 0; o4 < t2.length; o4++) {
              var i3 = t2[o4], a4 = e2.base ? i3[0] + e2.base : i3[0], s2 = { css: i3[1], media: i3[2], sourceMap: i3[3] };
              r2[a4] ? r2[a4].parts.push(s2) : n2.push(r2[a4] = { id: a4, parts: [s2] });
            }
            return n2;
          }
          function h2(t2, e2) {
            var n2 = s(t2.insertInto);
            if (!n2)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r2 = l2[l2.length - 1];
            if ("top" === t2.insertAt)
              r2 ? r2.nextSibling ? n2.insertBefore(e2, r2.nextSibling) : n2.appendChild(e2) : n2.insertBefore(e2, n2.firstChild), l2.push(e2);
            else if ("bottom" === t2.insertAt)
              n2.appendChild(e2);
            else {
              if ("object" != typeof t2.insertAt || !t2.insertAt.before)
                throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
              var o4 = s(t2.insertInto + " " + t2.insertAt.before);
              n2.insertBefore(e2, o4);
            }
          }
          function v(t2) {
            if (null === t2.parentNode)
              return false;
            t2.parentNode.removeChild(t2);
            var e2 = l2.indexOf(t2);
            e2 >= 0 && l2.splice(e2, 1);
          }
          function y(t2) {
            var e2 = document.createElement("style");
            return void 0 === t2.attrs.type && (t2.attrs.type = "text/css"), g3(e2, t2.attrs), h2(t2, e2), e2;
          }
          function g3(t2, e2) {
            Object.keys(e2).forEach(function(n2) {
              t2.setAttribute(n2, e2[n2]);
            });
          }
          function b(t2, e2) {
            var n2, r2, o4, i3;
            if (e2.transform && t2.css) {
              if (!(i3 = e2.transform(t2.css)))
                return function() {
                };
              t2.css = i3;
            }
            if (e2.singleton) {
              var a4 = u3++;
              n2 = c3 || (c3 = y(e2)), r2 = x.bind(null, n2, a4, false), o4 = x.bind(null, n2, a4, true);
            } else
              t2.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n2 = function(t3) {
                var e3 = document.createElement("link");
                return void 0 === t3.attrs.type && (t3.attrs.type = "text/css"), t3.attrs.rel = "stylesheet", g3(e3, t3.attrs), h2(t3, e3), e3;
              }(e2), r2 = function(t3, e3, n3) {
                var r3 = n3.css, o5 = n3.sourceMap, i4 = void 0 === e3.convertToAbsoluteUrls && o5;
                (e3.convertToAbsoluteUrls || i4) && (r3 = f2(r3));
                o5 && (r3 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o5)))) + " */");
                var a5 = new Blob([r3], { type: "text/css" }), s2 = t3.href;
                t3.href = URL.createObjectURL(a5), s2 && URL.revokeObjectURL(s2);
              }.bind(null, n2, e2), o4 = function() {
                v(n2), n2.href && URL.revokeObjectURL(n2.href);
              }) : (n2 = y(e2), r2 = function(t3, e3) {
                var n3 = e3.css, r3 = e3.media;
                r3 && t3.setAttribute("media", r3);
                if (t3.styleSheet)
                  t3.styleSheet.cssText = n3;
                else {
                  for (; t3.firstChild; )
                    t3.removeChild(t3.firstChild);
                  t3.appendChild(document.createTextNode(n3));
                }
              }.bind(null, n2), o4 = function() {
                v(n2);
              });
            return r2(t2), function(e3) {
              if (e3) {
                if (e3.css === t2.css && e3.media === t2.media && e3.sourceMap === t2.sourceMap)
                  return;
                r2(t2 = e3);
              } else
                o4();
            };
          }
          t.exports = function(t2, e2) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
              throw new Error("The style-loader cannot be used in a non-browser environment");
            (e2 = e2 || {}).attrs = "object" == typeof e2.attrs ? e2.attrs : {}, e2.singleton || "boolean" == typeof e2.singleton || (e2.singleton = a3()), e2.insertInto || (e2.insertInto = "head"), e2.insertAt || (e2.insertAt = "bottom");
            var n2 = p2(t2, e2);
            return d5(n2, e2), function(t3) {
              for (var r2 = [], o4 = 0; o4 < n2.length; o4++) {
                var a4 = n2[o4];
                (s2 = i2[a4.id]).refs--, r2.push(s2);
              }
              t3 && d5(p2(t3, e2), e2);
              for (o4 = 0; o4 < r2.length; o4++) {
                var s2;
                if (0 === (s2 = r2[o4]).refs) {
                  for (var c4 = 0; c4 < s2.parts.length; c4++)
                    s2.parts[c4]();
                  delete i2[s2.id];
                }
              }
            };
          };
          var m4, w2 = (m4 = [], function(t2, e2) {
            return m4[t2] = e2, m4.filter(Boolean).join("\n");
          });
          function x(t2, e2, n2, r2) {
            var o4 = n2 ? "" : r2.css;
            if (t2.styleSheet)
              t2.styleSheet.cssText = w2(e2, o4);
            else {
              var i3 = document.createTextNode(o4), a4 = t2.childNodes;
              a4[e2] && t2.removeChild(a4[e2]), a4.length ? t2.insertBefore(i3, a4[e2]) : t2.appendChild(i3);
            }
          }
        }, function(t, e) {
          t.exports = function(t2) {
            var e2 = "undefined" != typeof window && window.location;
            if (!e2)
              throw new Error("fixUrls requires window.location");
            if (!t2 || "string" != typeof t2)
              return t2;
            var n = e2.protocol + "//" + e2.host, r = n + e2.pathname.replace(/\/[^\/]*$/, "/");
            return t2.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t3, e3) {
              var o3, i2 = e3.trim().replace(/^"(.*)"$/, function(t4, e4) {
                return e4;
              }).replace(/^'(.*)'$/, function(t4, e4) {
                return e4;
              });
              return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i2) ? t3 : (o3 = 0 === i2.indexOf("//") ? i2 : 0 === i2.indexOf("/") ? n + i2 : r + i2.replace(/^\.\//, ""), "url(" + JSON.stringify(o3) + ")");
            });
          };
        }, function(t, e, n) {
          "use strict";
          n.r(e);
          n(0);
          function r(t2) {
            return function(t3) {
              if (Array.isArray(t3)) {
                for (var e2 = 0, n2 = new Array(t3.length); e2 < t3.length; e2++)
                  n2[e2] = t3[e2];
                return n2;
              }
            }(t2) || function(t3) {
              if (Symbol.iterator in Object(t3) || "[object Arguments]" === Object.prototype.toString.call(t3))
                return Array.from(t3);
            }(t2) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
          }
          function o3(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var r2 = e2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
            }
          }
          function i2(t2, e2, n2) {
            return e2 && o3(t2.prototype, e2), n2 && o3(t2, n2), t2;
          }
          n.d(e, "default", function() {
            return a3;
          });
          var a3 = function() {
            function t2(e2) {
              var n2 = e2.data, r2 = e2.config, o4 = e2.api, i3 = e2.readOnly;
              !function(t3, e3) {
                if (!(t3 instanceof e3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var a4 = t2.ALIGNMENTS, s = t2.DEFAULT_ALIGNMENT;
              this.api = o4, this.readOnly = i3, this.quotePlaceholder = r2.quotePlaceholder || t2.DEFAULT_QUOTE_PLACEHOLDER, this.captionPlaceholder = r2.captionPlaceholder || t2.DEFAULT_CAPTION_PLACEHOLDER, this.data = { text: n2.text || "", caption: n2.caption || "", alignment: Object.values(a4).includes(n2.alignment) && n2.alignment || r2.defaultAlignment || s };
            }
            return i2(t2, [{ key: "CSS", get: function() {
              return { baseClass: this.api.styles.block, wrapper: "cdx-quote", text: "cdx-quote__text", input: this.api.styles.input, caption: "cdx-quote__caption" };
            } }, { key: "settings", get: function() {
              return [{ name: "left", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>' }, { name: "center", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>' }];
            } }], [{ key: "isReadOnlySupported", get: function() {
              return true;
            } }, { key: "toolbox", get: function() {
              return { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>', title: "Quote" };
            } }, { key: "contentless", get: function() {
              return true;
            } }, { key: "enableLineBreaks", get: function() {
              return true;
            } }, { key: "DEFAULT_QUOTE_PLACEHOLDER", get: function() {
              return "Enter a quote";
            } }, { key: "DEFAULT_CAPTION_PLACEHOLDER", get: function() {
              return "Enter a caption";
            } }, { key: "ALIGNMENTS", get: function() {
              return { left: "left", center: "center" };
            } }, { key: "DEFAULT_ALIGNMENT", get: function() {
              return t2.ALIGNMENTS.left;
            } }, { key: "conversionConfig", get: function() {
              return { import: "text", export: function(t3) {
                return t3.caption ? "".concat(t3.text, " \u2014 ").concat(t3.caption) : t3.text;
              } };
            } }]), i2(t2, [{ key: "render", value: function() {
              var t3 = this._make("blockquote", [this.CSS.baseClass, this.CSS.wrapper]), e2 = this._make("div", [this.CSS.input, this.CSS.text], { contentEditable: !this.readOnly, innerHTML: this.data.text }), n2 = this._make("div", [this.CSS.input, this.CSS.caption], { contentEditable: !this.readOnly, innerHTML: this.data.caption });
              return e2.dataset.placeholder = this.quotePlaceholder, n2.dataset.placeholder = this.captionPlaceholder, t3.appendChild(e2), t3.appendChild(n2), t3;
            } }, { key: "save", value: function(t3) {
              var e2 = t3.querySelector(".".concat(this.CSS.text)), n2 = t3.querySelector(".".concat(this.CSS.caption));
              return Object.assign(this.data, { text: e2.innerHTML, caption: n2.innerHTML });
            } }, { key: "renderSettings", value: function() {
              var t3 = this;
              return this.settings.map(function(e2) {
                return { icon: e2.icon, label: t3.api.i18n.t("Align ".concat((n2 = e2.name, n2[0].toUpperCase() + n2.substr(1)))), onActivate: function() {
                  return t3._toggleTune(e2.name);
                }, isActive: t3.data.alignment === e2.name, closeOnActivate: true };
                var n2;
              });
            } }, { key: "_toggleTune", value: function(t3) {
              this.data.alignment = t3;
            } }, { key: "_make", value: function(t3) {
              var e2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i3 = document.createElement(t3);
              Array.isArray(n2) ? (e2 = i3.classList).add.apply(e2, r(n2)) : n2 && i3.classList.add(n2);
              for (var a4 in o4)
                i3[a4] = o4[a4];
              return i3;
            } }], [{ key: "sanitize", get: function() {
              return { text: { br: true }, caption: { br: true }, alignment: {} };
            } }]), t2;
          }();
        }]).default;
      });
    }
  });

  // node_modules/@editorjs/code/dist/bundle.js
  var require_bundle3 = __commonJS({
    "node_modules/@editorjs/code/dist/bundle.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.CodeTool = t() : e.CodeTool = t();
      }(window, function() {
        return function(e) {
          var t = {};
          function n(r) {
            if (t[r])
              return t[r].exports;
            var o3 = t[r] = { i: r, l: false, exports: {} };
            return e[r].call(o3.exports, o3, o3.exports, n), o3.l = true, o3.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, r) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
          }, n.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n.t = function(e2, t2) {
            if (1 & t2 && (e2 = n(e2)), 8 & t2)
              return e2;
            if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
              return e2;
            var r = /* @__PURE__ */ Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
              for (var o3 in e2)
                n.d(r, o3, function(t3) {
                  return e2[t3];
                }.bind(null, o3));
            return r;
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "/", n(n.s = 4);
        }([function(e, t, n) {
          var r = n(1), o3 = n(2);
          "string" == typeof (o3 = o3.__esModule ? o3.default : o3) && (o3 = [[e.i, o3, ""]]);
          var a3 = { insert: "head", singleton: false };
          r(o3, a3);
          e.exports = o3.locals || {};
        }, function(e, t, n) {
          "use strict";
          var r, o3 = function() {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
          }, a3 = function() {
            var e2 = {};
            return function(t2) {
              if (void 0 === e2[t2]) {
                var n2 = document.querySelector(t2);
                if (window.HTMLIFrameElement && n2 instanceof window.HTMLIFrameElement)
                  try {
                    n2 = n2.contentDocument.head;
                  } catch (e3) {
                    n2 = null;
                  }
                e2[t2] = n2;
              }
              return e2[t2];
            };
          }(), i2 = [];
          function c3(e2) {
            for (var t2 = -1, n2 = 0; n2 < i2.length; n2++)
              if (i2[n2].identifier === e2) {
                t2 = n2;
                break;
              }
            return t2;
          }
          function s(e2, t2) {
            for (var n2 = {}, r2 = [], o4 = 0; o4 < e2.length; o4++) {
              var a4 = e2[o4], s2 = t2.base ? a4[0] + t2.base : a4[0], u4 = n2[s2] || 0, l3 = "".concat(s2, " ").concat(u4);
              n2[s2] = u4 + 1;
              var d6 = c3(l3), f3 = { css: a4[1], media: a4[2], sourceMap: a4[3] };
              -1 !== d6 ? (i2[d6].references++, i2[d6].updater(f3)) : i2.push({ identifier: l3, updater: b(f3, t2), references: 1 }), r2.push(l3);
            }
            return r2;
          }
          function u3(e2) {
            var t2 = document.createElement("style"), r2 = e2.attributes || {};
            if (void 0 === r2.nonce) {
              var o4 = n.nc;
              o4 && (r2.nonce = o4);
            }
            if (Object.keys(r2).forEach(function(e3) {
              t2.setAttribute(e3, r2[e3]);
            }), "function" == typeof e2.insert)
              e2.insert(t2);
            else {
              var i3 = a3(e2.insert || "head");
              if (!i3)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
              i3.appendChild(t2);
            }
            return t2;
          }
          var l2, d5 = (l2 = [], function(e2, t2) {
            return l2[e2] = t2, l2.filter(Boolean).join("\n");
          });
          function f2(e2, t2, n2, r2) {
            var o4 = n2 ? "" : r2.media ? "@media ".concat(r2.media, " {").concat(r2.css, "}") : r2.css;
            if (e2.styleSheet)
              e2.styleSheet.cssText = d5(t2, o4);
            else {
              var a4 = document.createTextNode(o4), i3 = e2.childNodes;
              i3[t2] && e2.removeChild(i3[t2]), i3.length ? e2.insertBefore(a4, i3[t2]) : e2.appendChild(a4);
            }
          }
          function p2(e2, t2, n2) {
            var r2 = n2.css, o4 = n2.media, a4 = n2.sourceMap;
            if (o4 ? e2.setAttribute("media", o4) : e2.removeAttribute("media"), a4 && btoa && (r2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a4)))), " */")), e2.styleSheet)
              e2.styleSheet.cssText = r2;
            else {
              for (; e2.firstChild; )
                e2.removeChild(e2.firstChild);
              e2.appendChild(document.createTextNode(r2));
            }
          }
          var h2 = null, v = 0;
          function b(e2, t2) {
            var n2, r2, o4;
            if (t2.singleton) {
              var a4 = v++;
              n2 = h2 || (h2 = u3(t2)), r2 = f2.bind(null, n2, a4, false), o4 = f2.bind(null, n2, a4, true);
            } else
              n2 = u3(t2), r2 = p2.bind(null, n2, t2), o4 = function() {
                !function(e3) {
                  if (null === e3.parentNode)
                    return false;
                  e3.parentNode.removeChild(e3);
                }(n2);
              };
            return r2(e2), function(t3) {
              if (t3) {
                if (t3.css === e2.css && t3.media === e2.media && t3.sourceMap === e2.sourceMap)
                  return;
                r2(e2 = t3);
              } else
                o4();
            };
          }
          e.exports = function(e2, t2) {
            (t2 = t2 || {}).singleton || "boolean" == typeof t2.singleton || (t2.singleton = o3());
            var n2 = s(e2 = e2 || [], t2);
            return function(e3) {
              if (e3 = e3 || [], "[object Array]" === Object.prototype.toString.call(e3)) {
                for (var r2 = 0; r2 < n2.length; r2++) {
                  var o4 = c3(n2[r2]);
                  i2[o4].references--;
                }
                for (var a4 = s(e3, t2), u4 = 0; u4 < n2.length; u4++) {
                  var l3 = c3(n2[u4]);
                  0 === i2[l3].references && (i2[l3].updater(), i2.splice(l3, 1));
                }
                n2 = a4;
              }
            };
          };
        }, function(e, t, n) {
          (t = n(3)(false)).push([e.i, ".ce-code__textarea {\n    min-height: 200px;\n    font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n    color: #41314e;\n    line-height: 1.6em;\n    font-size: 12px;\n    background: #f8f7fa;\n    border: 1px solid #f1f1f4;\n    box-shadow: none;\n    white-space: pre;\n    word-wrap: normal;\n    overflow-x: auto;\n    resize: vertical;\n}\n", ""]), e.exports = t;
        }, function(e, t, n) {
          "use strict";
          e.exports = function(e2) {
            var t2 = [];
            return t2.toString = function() {
              return this.map(function(t3) {
                var n2 = function(e3, t4) {
                  var n3 = e3[1] || "", r = e3[3];
                  if (!r)
                    return n3;
                  if (t4 && "function" == typeof btoa) {
                    var o3 = (i2 = r, c3 = btoa(unescape(encodeURIComponent(JSON.stringify(i2)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c3), "/*# ".concat(s, " */")), a3 = r.sources.map(function(e4) {
                      return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e4, " */");
                    });
                    return [n3].concat(a3).concat([o3]).join("\n");
                  }
                  var i2, c3, s;
                  return [n3].join("\n");
                }(t3, e2);
                return t3[2] ? "@media ".concat(t3[2], " {").concat(n2, "}") : n2;
              }).join("");
            }, t2.i = function(e3, n2, r) {
              "string" == typeof e3 && (e3 = [[null, e3, ""]]);
              var o3 = {};
              if (r)
                for (var a3 = 0; a3 < this.length; a3++) {
                  var i2 = this[a3][0];
                  null != i2 && (o3[i2] = true);
                }
              for (var c3 = 0; c3 < e3.length; c3++) {
                var s = [].concat(e3[c3]);
                r && o3[s[0]] || (n2 && (s[2] ? s[2] = "".concat(n2, " and ").concat(s[2]) : s[2] = n2), t2.push(s));
              }
            }, t2;
          };
        }, function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, "default", function() {
            return a3;
          });
          n(0);
          function r(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var r2 = t2[n2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
            }
          }
          function o3(e2, t2, n2) {
            return t2 && r(e2.prototype, t2), n2 && r(e2, n2), e2;
          }
          var a3 = function() {
            function e2(t2) {
              var n2 = t2.data, r2 = t2.config, o4 = t2.api, a4 = t2.readOnly;
              !function(e3, t3) {
                if (!(e3 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, e2), this.api = o4, this.readOnly = a4, this.placeholder = this.api.i18n.t(r2.placeholder || e2.DEFAULT_PLACEHOLDER), this.CSS = { baseClass: this.api.styles.block, input: this.api.styles.input, wrapper: "ce-code", textarea: "ce-code__textarea" }, this.nodes = { holder: null, textarea: null }, this.data = { code: n2.code || "" }, this.nodes.holder = this.drawView();
            }
            return o3(e2, null, [{ key: "isReadOnlySupported", get: function() {
              return true;
            } }, { key: "enableLineBreaks", get: function() {
              return true;
            } }]), o3(e2, [{ key: "drawView", value: function() {
              var e3 = this, t2 = document.createElement("div"), n2 = document.createElement("textarea");
              return t2.classList.add(this.CSS.baseClass, this.CSS.wrapper), n2.classList.add(this.CSS.textarea, this.CSS.input), n2.textContent = this.data.code, n2.placeholder = this.placeholder, this.readOnly && (n2.disabled = true), t2.appendChild(n2), n2.addEventListener("keydown", function(t3) {
                switch (t3.code) {
                  case "Tab":
                    e3.tabHandler(t3);
                }
              }), this.nodes.textarea = n2, t2;
            } }, { key: "render", value: function() {
              return this.nodes.holder;
            } }, { key: "save", value: function(e3) {
              return { code: e3.querySelector("textarea").value };
            } }, { key: "onPaste", value: function(e3) {
              var t2 = e3.detail.data;
              this.data = { code: t2.textContent };
            } }, { key: "tabHandler", value: function(e3) {
              e3.stopPropagation(), e3.preventDefault();
              var t2, n2 = e3.target, r2 = e3.shiftKey, o4 = n2.selectionStart, a4 = n2.value;
              if (r2) {
                var i2 = function(e4, t3) {
                  for (var n3 = ""; "\n" !== n3 && t3 > 0; )
                    t3 -= 1, n3 = e4.substr(t3, 1);
                  return "\n" === n3 && (t3 += 1), t3;
                }(a4, o4);
                if ("  " !== a4.substr(i2, "  ".length))
                  return;
                n2.value = a4.substring(0, i2) + a4.substring(i2 + "  ".length), t2 = o4 - "  ".length;
              } else
                t2 = o4 + "  ".length, n2.value = a4.substring(0, o4) + "  " + a4.substring(o4);
              n2.setSelectionRange(t2, t2);
            } }, { key: "data", get: function() {
              return this._data;
            }, set: function(e3) {
              this._data = e3, this.nodes.textarea && (this.nodes.textarea.textContent = e3.code);
            } }], [{ key: "toolbox", get: function() {
              return { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>', title: "Code" };
            } }, { key: "DEFAULT_PLACEHOLDER", get: function() {
              return "Enter a code";
            } }, { key: "pasteConfig", get: function() {
              return { tags: ["pre"] };
            } }, { key: "sanitize", get: function() {
              return { code: true };
            } }]), e2;
          }();
        }]).default;
      });
    }
  });

  // node_modules/@editorjs/editorjs/dist/editorjs.mjs
  var Ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function xe(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
  }
  function Be() {
  }
  Object.assign(Be, {
    default: Be,
    register: Be,
    revert: function() {
    },
    __esModule: true
  });
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
    const e = (this.document || this.ownerDocument).querySelectorAll(s);
    let t = e.length;
    for (; --t >= 0 && e.item(t) !== this; )
      ;
    return t > -1;
  });
  Element.prototype.closest || (Element.prototype.closest = function(s) {
    let e = this;
    if (!document.documentElement.contains(e))
      return null;
    do {
      if (e.matches(s))
        return e;
      e = e.parentElement || e.parentNode;
    } while (e !== null);
    return null;
  });
  Element.prototype.prepend || (Element.prototype.prepend = function(e) {
    const t = document.createDocumentFragment();
    Array.isArray(e) || (e = [e]), e.forEach((o3) => {
      const i2 = o3 instanceof Node;
      t.appendChild(i2 ? o3 : document.createTextNode(o3));
    }), this.insertBefore(t, this.firstChild);
  });
  Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(s) {
    s = arguments.length === 0 ? true : !!s;
    const e = this.parentNode, t = window.getComputedStyle(e, null), o3 = parseInt(t.getPropertyValue("border-top-width")), i2 = parseInt(t.getPropertyValue("border-left-width")), n = this.offsetTop - e.offsetTop < e.scrollTop, r = this.offsetTop - e.offsetTop + this.clientHeight - o3 > e.scrollTop + e.clientHeight, a3 = this.offsetLeft - e.offsetLeft < e.scrollLeft, l2 = this.offsetLeft - e.offsetLeft + this.clientWidth - i2 > e.scrollLeft + e.clientWidth, c3 = n && !r;
    (n || r) && s && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o3 + this.clientHeight / 2), (a3 || l2) && s && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i2 + this.clientWidth / 2), (n || r || a3 || l2) && !s && this.scrollIntoView(c3);
  });
  window.requestIdleCallback = window.requestIdleCallback || function(s) {
    const e = Date.now();
    return setTimeout(function() {
      s({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - e));
        }
      });
    }, 1);
  };
  window.cancelIdleCallback = window.cancelIdleCallback || function(s) {
    clearTimeout(s);
  };
  var At = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
  var it = /* @__PURE__ */ ((s) => (s.VERBOSE = "VERBOSE", s.INFO = "INFO", s.WARN = "WARN", s.ERROR = "ERROR", s))(it || {});
  var B = {
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
    META: 91
  };
  var _t = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
  function be(s, e, t = "log", o3, i2 = "color: inherit") {
    if (!("console" in window) || !window.console[t])
      return;
    const n = ["info", "log", "warn", "error"].includes(t), r = [];
    switch (be.logLevel) {
      case "ERROR":
        if (t !== "error")
          return;
        break;
      case "WARN":
        if (!["error", "warn"].includes(t))
          return;
        break;
      case "INFO":
        if (!n || s)
          return;
        break;
    }
    o3 && r.push(o3);
    const a3 = "Editor.js 2.28.2", l2 = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
    s && (n ? (r.unshift(l2, i2), e = `%c${a3}%c ${e}`) : e = `( ${a3} )${e}`);
    try {
      n ? o3 ? console[t](`${e} %o`, ...r) : console[t](e, ...r) : console[t](e);
    } catch {
    }
  }
  be.logLevel = "VERBOSE";
  function Nt(s) {
    be.logLevel = s;
  }
  var L = be.bind(window, false);
  var K = be.bind(window, true);
  function oe(s) {
    return Object.prototype.toString.call(s).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }
  function D(s) {
    return oe(s) === "function" || oe(s) === "asyncfunction";
  }
  function z(s) {
    return oe(s) === "object";
  }
  function J(s) {
    return oe(s) === "string";
  }
  function Rt(s) {
    return oe(s) === "boolean";
  }
  function qe(s) {
    return oe(s) === "number";
  }
  function Ze(s) {
    return oe(s) === "undefined";
  }
  function V(s) {
    return s ? Object.keys(s).length === 0 && s.constructor === Object : true;
  }
  function nt(s) {
    return s > 47 && s < 58 || // number keys
    s === 32 || s === 13 || // Space bar & return key(s)
    s === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
    s > 64 && s < 91 || // letter keys
    s > 95 && s < 112 || // Numpad keys
    s > 185 && s < 193 || // ;=,-./` (in order)
    s > 218 && s < 223;
  }
  async function Dt(s, e = () => {
  }, t = () => {
  }) {
    async function o3(i2, n, r) {
      try {
        await i2.function(i2.data), await n(Ze(i2.data) ? {} : i2.data);
      } catch {
        r(Ze(i2.data) ? {} : i2.data);
      }
    }
    return s.reduce(async (i2, n) => (await i2, o3(n, e, t)), Promise.resolve());
  }
  function st(s) {
    return Array.prototype.slice.call(s);
  }
  function re(s, e) {
    return function() {
      const t = this, o3 = arguments;
      window.setTimeout(() => s.apply(t, o3), e);
    };
  }
  function Pt(s) {
    return s.name.split(".").pop();
  }
  function Ft(s) {
    return /^[-\w]+\/([-+\w]+|\*)$/.test(s);
  }
  function Ht(s, e, t) {
    let o3;
    return (...i2) => {
      const n = this, r = () => {
        o3 = null, t || s.apply(n, i2);
      }, a3 = t && !o3;
      window.clearTimeout(o3), o3 = window.setTimeout(r, e), a3 && s.apply(n, i2);
    };
  }
  function Ce(s, e, t = void 0) {
    let o3, i2, n, r = null, a3 = 0;
    t || (t = {});
    const l2 = function() {
      a3 = t.leading === false ? 0 : Date.now(), r = null, n = s.apply(o3, i2), r || (o3 = i2 = null);
    };
    return function() {
      const c3 = Date.now();
      !a3 && t.leading === false && (a3 = c3);
      const u3 = e - (c3 - a3);
      return o3 = this, i2 = arguments, u3 <= 0 || u3 > e ? (r && (clearTimeout(r), r = null), a3 = c3, n = s.apply(o3, i2), r || (o3 = i2 = null)) : !r && t.trailing !== false && (r = setTimeout(l2, u3)), n;
    };
  }
  function jt() {
    const s = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    }, e = Object.keys(s).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
    return e && (s[e] = true), s;
  }
  function ae(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  function Se(s, ...e) {
    if (!e.length)
      return s;
    const t = e.shift();
    if (z(s) && z(t))
      for (const o3 in t)
        z(t[o3]) ? (s[o3] || Object.assign(s, { [o3]: {} }), Se(s[o3], t[o3])) : Object.assign(s, { [o3]: t[o3] });
    return Se(s, ...e);
  }
  function Re(s) {
    const e = jt();
    return s = s.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), e.mac ? s = s.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : s = s.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), s;
  }
  function zt(s) {
    try {
      return new URL(s).href;
    } catch {
    }
    return s.substring(0, 2) === "//" ? window.location.protocol + s : window.location.origin + s;
  }
  function Ut() {
    return At(10);
  }
  function $t(s) {
    window.open(s, "_blank");
  }
  function Wt(s = "") {
    return `${s}${Math.floor(Math.random() * 1e8).toString(16)}`;
  }
  function Ie(s, e, t) {
    const o3 = `\xAB${e}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${t}\xBB instead.`;
    s && K(o3, "warn");
  }
  function ce(s, e, t) {
    const o3 = t.value ? "value" : "get", i2 = t[o3], n = `#${e}Cache`;
    if (t[o3] = function(...r) {
      return this[n] === void 0 && (this[n] = i2.apply(this, ...r)), this[n];
    }, o3 === "get" && t.set) {
      const r = t.set;
      t.set = function(a3) {
        delete s[n], r.apply(this, a3);
      };
    }
    return t;
  }
  var rt = 650;
  function te() {
    return window.matchMedia(`(max-width: ${rt}px)`).matches;
  }
  var Ge = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  function Yt(s, e) {
    const t = Array.isArray(s) || z(s), o3 = Array.isArray(e) || z(e);
    return t || o3 ? JSON.stringify(s) === JSON.stringify(e) : s === e;
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
    static make(e, t = null, o3 = {}) {
      const i2 = document.createElement(e);
      Array.isArray(t) ? i2.classList.add(...t) : t && i2.classList.add(t);
      for (const n in o3)
        Object.prototype.hasOwnProperty.call(o3, n) && (i2[n] = o3[n]);
      return i2;
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
      Array.isArray(t) ? t.forEach((o3) => e.appendChild(o3)) : e.appendChild(t);
    }
    /**
     * Append element or a couple to the beginning of the parent elements
     *
     * @param {Element} parent - where to append
     * @param {Element|Element[]} elements - element or elements list
     */
    static prepend(e, t) {
      Array.isArray(t) ? (t = t.reverse(), t.forEach((o3) => e.prepend(o3))) : e.prepend(t);
    }
    /**
     * Swap two elements in parent
     *
     * @param {HTMLElement} el1 - from
     * @param {HTMLElement} el2 - to
     * @deprecated
     */
    static swap(e, t) {
      const o3 = document.createElement("div"), i2 = e.parentNode;
      i2.insertBefore(o3, e), i2.insertBefore(e, t), i2.insertBefore(t, o3), i2.removeChild(o3);
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
      return st(e.querySelectorAll(_d.allInputsSelector)).reduce((t, o3) => _d.isNativeInput(o3) || _d.containsOnlyInlineElements(o3) ? [...t, o3] : [...t, ..._d.getDeepestBlockElements(o3)], []);
    }
    /**
     * Search for deepest node which is Leaf.
     * Leaf is the vertex that doesn't have any child nodes
     *
     * @description Method recursively goes throw the all Node until it finds the Leaf
     * @param {Node} node - root Node. From this vertex we start Deep-first search
     *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
     * @param {boolean} [atLast] - find last text node
     * @returns {Node} - it can be text Node or Element Node, so that caret will able to work with it
     */
    static getDeepestNode(e, t = false) {
      const o3 = t ? "lastChild" : "firstChild", i2 = t ? "previousSibling" : "nextSibling";
      if (e && e.nodeType === Node.ELEMENT_NODE && e[o3]) {
        let n = e[o3];
        if (_d.isSingleTag(n) && !_d.isNativeInput(n) && !_d.isLineBreakTag(n))
          if (n[i2])
            n = n[i2];
          else if (n.parentNode[i2])
            n = n.parentNode[i2];
          else
            return n.parentNode;
        return this.getDeepestNode(n, t);
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
      return qe(e) ? false : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
    }
    /**
     * Check if object is DocumentFragment node
     *
     * @param {object} node - object to check
     * @returns {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isFragment(e) {
      return qe(e) ? false : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
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
     * @returns {boolean} true if it is empty
     */
    static isNodeEmpty(e) {
      let t;
      return this.isSingleTag(e) && !this.isLineBreakTag(e) ? false : (this.isElement(e) && this.isNativeInput(e) ? t = e.value : t = e.textContent.replace("\u200B", ""), t.trim().length === 0);
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
     * @returns {boolean}
     */
    static isEmpty(e) {
      e.normalize();
      const t = [e];
      for (; t.length > 0; )
        if (e = t.shift(), !!e) {
          if (this.isLeaf(e) && !this.isNodeEmpty(e))
            return false;
          e.childNodes && t.push(...Array.from(e.childNodes));
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
      J(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
      const o3 = (i2) => !_d.blockElements.includes(i2.tagName.toLowerCase()) && Array.from(i2.children).every(o3);
      return Array.from(t.children).every(o3);
    }
    /**
     * Find and return all block elements in the passed parent (including subtree)
     *
     * @param {HTMLElement} parent - root element
     * @returns {HTMLElement[]}
     */
    static getDeepestBlockElements(e) {
      return _d.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o3) => [...t, ..._d.getDeepestBlockElements(o3)], []);
    }
    /**
     * Helper for get holder from {string} or return HTMLElement
     *
     * @param {string | HTMLElement} element - holder's id or holder's HTML Element
     * @returns {HTMLElement}
     */
    static getHolder(e) {
      return J(e) ? document.getElementById(e) : e;
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
      const t = e.getBoundingClientRect(), o3 = window.pageXOffset || document.documentElement.scrollLeft, i2 = window.pageYOffset || document.documentElement.scrollTop, n = t.top + i2, r = t.left + o3;
      return {
        top: n,
        left: r,
        bottom: n + t.height,
        right: r + t.width
      };
    }
  };
  var Kt = {
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
      "Nothing found": ""
    }
  };
  var Xt = {
    Text: "",
    Link: "",
    Bold: "",
    Italic: ""
  };
  var Vt = {
    link: {
      "Add a link": ""
    },
    stub: {
      "The block can not be displayed correctly.": ""
    }
  };
  var qt = {
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
  var at = {
    ui: Kt,
    toolNames: Xt,
    tools: Vt,
    blockTunes: qt
  };
  var ie = class {
    /**
     * Type-safe translation for internal UI texts:
     * Perform translation of the string by namespace and a key
     *
     * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
     * @param internalNamespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static ui(s, e) {
      return ie._t(s, e);
    }
    /**
     * Translate for external strings that is not presented in default dictionary.
     * For example, for user-specified tool names
     *
     * @param namespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static t(s, e) {
      return ie._t(s, e);
    }
    /**
     * Adjust module for using external dictionary
     *
     * @param dictionary - new messages list to override default
     */
    static setDictionary(s) {
      ie.currentDictionary = s;
    }
    /**
     * Perform translation both for internal and external namespaces
     * If there is no translation found, returns passed key as a translated message
     *
     * @param namespace - path to translated string in dictionary
     * @param dictKey - dictionary key. Better to use default locale original text
     */
    static _t(s, e) {
      const t = ie.getNamespace(s);
      return !t || !t[e] ? e : t[e];
    }
    /**
     * Find messages section by namespace path
     *
     * @param namespace - path to section
     */
    static getNamespace(s) {
      return s.split(".").reduce((t, o3) => !t || !Object.keys(t).length ? {} : t[o3], ie.currentDictionary);
    }
  };
  var $ = ie;
  $.currentDictionary = at;
  var lt = class extends Error {
  };
  var we = class {
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
      const o3 = (i2) => {
        const n = t(i2), r = this.subscribers[e].indexOf(o3);
        return r !== -1 && this.subscribers[e].splice(r, 1), n;
      };
      this.subscribers[e].push(o3);
    }
    /**
     * Emit callbacks with passed data
     *
     * @param eventName - event name
     * @param data - subscribers get this data when they were fired
     */
    emit(e, t) {
      V(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o3, i2) => {
        const n = i2(o3);
        return n !== void 0 ? n : o3;
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
      for (let o3 = 0; o3 < this.subscribers[e].length; o3++)
        if (this.subscribers[e][o3] === t) {
          delete this.subscribers[e][o3];
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
  function ee(s) {
    Object.setPrototypeOf(this, {
      /**
       * Block id
       *
       * @returns {string}
       */
      get id() {
        return s.id;
      },
      /**
       * Tool name
       *
       * @returns {string}
       */
      get name() {
        return s.name;
      },
      /**
       * Tool config passed on Editor's initialization
       *
       * @returns {ToolConfig}
       */
      get config() {
        return s.config;
      },
      /**
       * .ce-block element, that wraps plugin contents
       *
       * @returns {HTMLElement}
       */
      get holder() {
        return s.holder;
      },
      /**
       * True if Block content is empty
       *
       * @returns {boolean}
       */
      get isEmpty() {
        return s.isEmpty;
      },
      /**
       * True if Block is selected with Cross-Block selection
       *
       * @returns {boolean}
       */
      get selected() {
        return s.selected;
      },
      /**
       * Set Block's stretch state
       *
       * @param {boolean} state — state to set
       */
      set stretched(t) {
        s.stretched = t;
      },
      /**
       * True if Block is stretched
       *
       * @returns {boolean}
       */
      get stretched() {
        return s.stretched;
      },
      /**
       * Call Tool method with errors handler under-the-hood
       *
       * @param {string} methodName - method to call
       * @param {object} param - object with parameters
       * @returns {unknown}
       */
      call(t, o3) {
        return s.call(t, o3);
      },
      /**
       * Save Block content
       *
       * @returns {Promise<void|SavedData>}
       */
      save() {
        return s.save();
      },
      /**
       * Validate Block data
       *
       * @param {BlockToolData} data - data to validate
       * @returns {Promise<boolean>}
       */
      validate(t) {
        return s.validate(t);
      },
      /**
       * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
       * Can be useful for block changes invisible for editor core.
       */
      dispatchChange() {
        s.dispatchChange();
      }
    });
  }
  var De = class {
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
    on(e, t, o3, i2 = false) {
      const n = Wt("l"), r = {
        id: n,
        element: e,
        eventType: t,
        handler: o3,
        options: i2
      };
      if (!this.findOne(e, t, o3))
        return this.allListeners.push(r), e.addEventListener(t, o3, i2), n;
    }
    /**
     * Removes event listener from element
     *
     * @param {EventTarget} element - DOM element that we removing listener
     * @param {string} eventType - event type
     * @param {Function} handler - remove handler, if element listens several handlers on the same event type
     * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
     */
    off(e, t, o3, i2) {
      const n = this.findAll(e, t, o3);
      n.forEach((r, a3) => {
        const l2 = this.allListeners.indexOf(n[a3]);
        l2 > -1 && (this.allListeners.splice(l2, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
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
    findOne(e, t, o3) {
      const i2 = this.findAll(e, t, o3);
      return i2.length > 0 ? i2[0] : null;
    }
    /**
     * Return all stored listeners by passed params
     *
     * @param {EventTarget} element - event target
     * @param {string} eventType - event type
     * @param {Function} handler - event handler
     * @returns {ListenerData[]}
     */
    findAll(e, t, o3) {
      let i2;
      const n = e ? this.findByEventTarget(e) : [];
      return e && t && o3 ? i2 = n.filter((r) => r.eventType === t && r.handler === o3) : e && t ? i2 = n.filter((r) => r.eventType === t) : i2 = n, i2;
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
  var C = class _C {
    /**
     * @class
     * @param options - Module options
     * @param options.config - Module config
     * @param options.eventsDispatcher - Common event bus
     */
    constructor({ config: e, eventsDispatcher: t }) {
      if (this.nodes = {}, this.listeners = new De(), this.readOnlyMutableListeners = {
        /**
         * Assigns event listener on DOM element and pushes into special array that might be removed
         *
         * @param {EventTarget} element - DOM Element
         * @param {string} eventType - Event name
         * @param {Function} handler - Event handler
         * @param {boolean|AddEventListenerOptions} options - Listening options
         */
        on: (o3, i2, n, r = false) => {
          this.mutableListenerIds.push(
            this.listeners.on(o3, i2, n, r)
          );
        },
        /**
         * Clears all mutable listeners
         */
        clearAll: () => {
          for (const o3 of this.mutableListenerIds)
            this.listeners.offById(o3);
          this.mutableListenerIds = [];
        }
      }, this.mutableListenerIds = [], new.target === _C)
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
  var m = class _m {
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
      return this.isSelectionAtEditor(_m.get());
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
      let o3 = null;
      return t && t instanceof Element && (o3 = t.closest(`.${_m.CSS.editorZone}`)), o3 ? o3.nodeType === Node.ELEMENT_NODE : false;
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
      let o3 = null;
      return t && t instanceof Element && (o3 = t.closest(`.${_m.CSS.editorZone}`)), o3 ? o3.nodeType === Node.ELEMENT_NODE : false;
    }
    /**
     * Methods return boolean that true if selection exists on the page
     */
    static get isSelectionExists() {
      return !!_m.get().anchorNode;
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
      let e = document.selection, t, o3 = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      if (e && e.type !== "Control")
        return e = e, t = e.createRange(), o3.x = t.boundingLeft, o3.y = t.boundingTop, o3.width = t.boundingWidth, o3.height = t.boundingHeight, o3;
      if (!window.getSelection)
        return L("Method window.getSelection is not supported", "warn"), o3;
      if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
        return L("Method SelectionUtils.rangeCount is not supported", "warn"), o3;
      if (e.rangeCount === 0)
        return o3;
      if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o3 = t.getBoundingClientRect()), o3.x === 0 && o3.y === 0) {
        const i2 = document.createElement("span");
        if (i2.getBoundingClientRect) {
          i2.appendChild(document.createTextNode("\u200B")), t.insertNode(i2), o3 = i2.getBoundingClientRect();
          const n = i2.parentNode;
          n.removeChild(i2), n.normalize();
        }
      }
      return o3;
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
      const o3 = document.createRange(), i2 = window.getSelection();
      return d.isNativeInput(e) ? d.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o3.setStart(e, t), o3.setEnd(e, t), i2.removeAllRanges(), i2.addRange(o3), o3.getBoundingClientRect());
    }
    /**
     * Check if current range exists and belongs to container
     *
     * @param container - where range should be
     */
    static isRangeInsideContainer(e) {
      const t = _m.range;
      return t === null ? false : e.contains(t.startContainer);
    }
    /**
     * Adds fake cursor to the current range
     */
    static addFakeCursor() {
      const e = _m.range;
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
      this.savedSelectionRange = _m.range;
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
    findParentTag(e, t, o3 = 10) {
      const i2 = window.getSelection();
      let n = null;
      return !i2 || !i2.anchorNode || !i2.focusNode ? null : ([
        /** the Node in which the selection begins */
        i2.anchorNode,
        /** the Node in which the selection ends */
        i2.focusNode
      ].forEach((a3) => {
        let l2 = o3;
        for (; l2 > 0 && a3.parentNode && !(a3.tagName === e && (n = a3, t && a3.classList && !a3.classList.contains(t) && (n = null), n)); )
          a3 = a3.parentNode, l2--;
      }), n);
    }
    /**
     * Expands selection range to the passed parent node
     *
     * @param {HTMLElement} element - element which contents should be selected
     */
    expandToTag(e) {
      const t = window.getSelection();
      t.removeAllRanges();
      const o3 = document.createRange();
      o3.selectNodeContents(e), t.addRange(o3);
    }
  };
  function Zt(s, e) {
    const { type: t, target: o3, addedNodes: i2, removedNodes: n } = s;
    if (o3 === e)
      return true;
    if (["characterData", "attributes"].includes(t)) {
      const l2 = o3.nodeType === Node.TEXT_NODE ? o3.parentNode : o3;
      return e.contains(l2);
    }
    const r = Array.from(i2).some((l2) => e.contains(l2)), a3 = Array.from(n).some((l2) => e.contains(l2));
    return r || a3;
  }
  var Me = "redactor dom changed";
  var ct = "block changed";
  var dt = "fake cursor is about to be toggled";
  var ht = "fake cursor have been set";
  function Je(s, e) {
    return s.mergeable && s.name === e.name;
  }
  function Gt(s, e) {
    const t = e == null ? void 0 : e.export;
    return D(t) ? t(s) : J(t) ? s[t] : (t !== void 0 && L("Conversion \xABexport\xBB property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
  }
  function Jt(s, e) {
    const t = e == null ? void 0 : e.import;
    return D(t) ? t(s) : J(t) ? {
      [t]: s
    } : (t !== void 0 && L("Conversion \xABimport\xBB property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
  }
  var q = /* @__PURE__ */ ((s) => (s.APPEND_CALLBACK = "appendCallback", s.RENDERED = "rendered", s.MOVED = "moved", s.UPDATED = "updated", s.REMOVED = "removed", s.ON_PASTE = "onPaste", s))(q || {});
  var F = class _F extends we {
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
      id: e = Ut(),
      data: t,
      tool: o3,
      api: i2,
      readOnly: n,
      tunesData: r
    }, a3) {
      super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
        this.dropInputsCache(), this.updateCurrentInput();
      }, this.didMutated = (l2 = void 0) => {
        const c3 = l2 === void 0, u3 = l2 instanceof InputEvent;
        !c3 && !u3 && this.detectToolRootChange(l2);
        let h2;
        c3 || u3 ? h2 = true : h2 = !(l2.length > 0 && l2.every((k2) => {
          const { addedNodes: p2, removedNodes: v, target: A } = k2;
          return [
            ...Array.from(p2),
            ...Array.from(v),
            A
          ].some((_) => d.isElement(_) ? _.dataset.mutationFree === "true" : false);
        })), h2 && (this.dropInputsCache(), this.updateCurrentInput(), this.call(
          "updated"
          /* UPDATED */
        ), this.emit("didMutated", this));
      }, this.name = o3.name, this.id = e, this.settings = o3.settings, this.config = o3.settings.config || {}, this.api = i2, this.editorEventBus = a3 || null, this.blockAPI = new ee(this), this.tool = o3, this.toolInstance = o3.create(t, this.blockAPI, n), this.tunes = o3.tunes, this.composeTunes(r), this.holder = this.compose(), window.requestIdleCallback(() => {
        this.watchBlockMutations(), this.addInputEvents();
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
        focused: "ce-block--focused",
        selected: "ce-block--selected",
        dropTarget: "ce-block--drop-target"
      };
    }
    /**
     * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
     *
     * @returns {HTMLElement[]}
     */
    get inputs() {
      if (this.cachedInputs.length !== 0)
        return this.cachedInputs;
      const e = d.findAllInputs(this.holder);
      return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
    }
    /**
     * Return current Tool`s input
     *
     * @returns {HTMLElement}
     */
    get currentInput() {
      return this.inputs[this.inputIndex];
    }
    /**
     * Set input index to the passed element
     *
     * @param {HTMLElement | Node} element - HTML Element to set as current input
     */
    set currentInput(e) {
      const t = this.inputs.findIndex((o3) => o3 === e || o3.contains(e));
      t !== -1 && (this.inputIndex = t);
    }
    /**
     * Return first Tool`s input
     *
     * @returns {HTMLElement}
     */
    get firstInput() {
      return this.inputs[0];
    }
    /**
     * Return first Tool`s input
     *
     * @returns {HTMLElement}
     */
    get lastInput() {
      const e = this.inputs;
      return e[e.length - 1];
    }
    /**
     * Return next Tool`s input or undefined if it doesn't exist
     *
     * @returns {HTMLElement}
     */
    get nextInput() {
      return this.inputs[this.inputIndex + 1];
    }
    /**
     * Return previous Tool`s input or undefined if it doesn't exist
     *
     * @returns {HTMLElement}
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
      return D(this.toolInstance.merge);
    }
    /**
     * Check block for emptiness
     *
     * @returns {boolean}
     */
    get isEmpty() {
      const e = d.isEmpty(this.pluginsContent), t = !this.hasMedia;
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
     * Set focused state
     *
     * @param {boolean} state - 'true' to select, 'false' to remove selection
     */
    set focused(e) {
      this.holder.classList.toggle(_F.CSS.focused, e);
    }
    /**
     * Get Block's focused state
     */
    get focused() {
      return this.holder.classList.contains(_F.CSS.focused);
    }
    /**
     * Set selected state
     * We don't need to mark Block as Selected when it is empty
     *
     * @param {boolean} state - 'true' to select, 'false' to remove selection
     */
    set selected(e) {
      var i2, n;
      this.holder.classList.toggle(_F.CSS.selected, e);
      const t = e === true && m.isRangeInsideContainer(this.holder), o3 = e === false && m.isFakeCursorInsideContainer(this.holder);
      (t || o3) && ((i2 = this.editorEventBus) == null || i2.emit(dt, { state: e }), t ? m.addFakeCursor() : m.removeFakeCursor(this.holder), (n = this.editorEventBus) == null || n.emit(ht, { state: e }));
    }
    /**
     * Returns True if it is Selected
     *
     * @returns {boolean}
     */
    get selected() {
      return this.holder.classList.contains(_F.CSS.selected);
    }
    /**
     * Set stretched state
     *
     * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
     */
    set stretched(e) {
      this.holder.classList.toggle(_F.CSS.wrapperStretched, e);
    }
    /**
     * Return Block's stretched state
     *
     * @returns {boolean}
     */
    get stretched() {
      return this.holder.classList.contains(_F.CSS.wrapperStretched);
    }
    /**
     * Toggle drop target state
     *
     * @param {boolean} state - 'true' if block is drop target, false otherwise
     */
    set dropTarget(e) {
      this.holder.classList.toggle(_F.CSS.dropTarget, e);
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
      if (D(this.toolInstance[e])) {
        e === "appendCallback" && L(
          "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
          "warn"
        );
        try {
          this.toolInstance[e].call(this.toolInstance, t);
        } catch (o3) {
          L(`Error during '${e}' call: ${o3.message}`, "error");
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
      ].forEach(([n, r]) => {
        if (D(r.save))
          try {
            t[n] = r.save();
          } catch (a3) {
            L(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", a3);
          }
      });
      const o3 = window.performance.now();
      let i2;
      return Promise.resolve(e).then((n) => (i2 = window.performance.now(), {
        id: this.id,
        tool: this.name,
        data: n,
        tunes: t,
        time: i2 - o3
      })).catch((n) => {
        L(`Saving process for ${this.name} tool failed due to the ${n}`, "log", "red");
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
     * Returns data to render in tunes menu.
     * Splits block tunes settings into 2 groups: popover items and custom html.
     */
    getTunes() {
      const e = document.createElement("div"), t = [], o3 = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [], i2 = [
        ...this.tunesInstances.values(),
        ...this.defaultTunesInstances.values()
      ].map((n) => n.render());
      return [o3, i2].flat().forEach((n) => {
        d.isElement(n) ? e.appendChild(n) : Array.isArray(n) ? t.push(...n) : t.push(n);
      }), [t, e];
    }
    /**
     * Update current input index with selection anchor node
     */
    updateCurrentInput() {
      this.currentInput = d.isNativeInput(document.activeElement) || !m.anchorNode ? document.activeElement : m.anchorNode;
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
      this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), D(this.toolInstance.destroy) && this.toolInstance.destroy();
    }
    /**
     * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
     * This method returns the entry that is related to the Block (depended on the Block data)
     */
    async getActiveToolboxEntry() {
      const e = this.tool.toolbox;
      if (e.length === 1)
        return Promise.resolve(this.tool.toolbox[0]);
      const t = await this.data;
      return e.find((i2) => Object.entries(i2.data).some(([n, r]) => t[n] && Yt(t[n], r)));
    }
    /**
     * Exports Block data as string using conversion config
     */
    async exportDataAsString() {
      const e = await this.data;
      return Gt(e, this.tool.conversionConfig);
    }
    /**
     * Make default Block wrappers and put Tool`s content there
     *
     * @returns {HTMLDivElement}
     */
    compose() {
      const e = d.make("div", _F.CSS.wrapper), t = d.make("div", _F.CSS.content), o3 = this.toolInstance.render();
      e.dataset.id = this.id, this.toolRenderedElement = o3, t.appendChild(this.toolRenderedElement);
      let i2 = t;
      return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((n) => {
        if (D(n.wrap))
          try {
            i2 = n.wrap(i2);
          } catch (r) {
            L(`Tune ${n.constructor.name} wrap method throws an Error %o`, "warn", r);
          }
      }), e.appendChild(i2), e;
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
      }), Object.entries(e).forEach(([t, o3]) => {
        this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o3);
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
        const { mutations: o3 } = t;
        o3.some((n) => Zt(n, this.toolRenderedElement)) && this.didMutated(o3);
      }, (e = this.editorEventBus) == null || e.on(Me, this.redactorDomChangedCallback);
    }
    /**
     * Remove redactor dom change event listener
     */
    unwatchBlockMutations() {
      var e;
      (e = this.editorEventBus) == null || e.off(Me, this.redactorDomChangedCallback);
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
          const i2 = t.addedNodes[t.addedNodes.length - 1];
          this.toolRenderedElement = i2;
        }
      });
    }
    /**
     * Clears inputs cached value
     */
    dropInputsCache() {
      this.cachedInputs = [];
    }
  };
  var Qt = class extends C {
    constructor() {
      super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o3 = {}, i2, n, r, a3) => {
        const l2 = this.Editor.BlockManager.insert({
          id: a3,
          tool: e,
          data: t,
          index: i2,
          needToFocus: n,
          replace: r
        });
        return new ee(l2);
      }, this.composeBlockData = async (e) => {
        const t = this.Editor.Tools.blockTools.get(e);
        return new F({
          tool: t,
          api: this.Editor.API,
          readOnly: true,
          data: {},
          tunesData: {}
        }).data;
      }, this.update = async (e, t) => {
        const { BlockManager: o3 } = this.Editor, i2 = o3.getBlockById(e);
        if (i2 === void 0)
          throw new Error(`Block with id "${e}" not found`);
        const n = await o3.update(i2, t);
        return new ee(n);
      }, this.convert = (e, t, o3) => {
        var h2, f2;
        const { BlockManager: i2, Tools: n } = this.Editor, r = i2.getBlockById(e);
        if (!r)
          throw new Error(`Block with id "${e}" not found`);
        const a3 = n.blockTools.get(r.name), l2 = n.blockTools.get(t);
        if (!l2)
          throw new Error(`Block Tool with type "${t}" not found`);
        const c3 = ((h2 = a3 == null ? void 0 : a3.conversionConfig) == null ? void 0 : h2.export) !== void 0, u3 = ((f2 = l2.conversionConfig) == null ? void 0 : f2.import) !== void 0;
        if (c3 && u3)
          i2.convert(r, t, o3);
        else {
          const k2 = [
            c3 ? false : ae(r.name),
            u3 ? false : ae(t)
          ].filter(Boolean).join(" and ");
          throw new Error(`Conversion from "${r.name}" to "${t}" is not possible. ${k2} tool(s) should provide a "conversionConfig"`);
        }
      }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
        this.validateIndex(t);
        const o3 = e.map(({ id: i2, type: n, data: r }) => this.Editor.BlockManager.composeBlock({
          id: i2,
          tool: n || this.config.defaultBlock,
          data: r
        }));
        return this.Editor.BlockManager.insertMany(o3, t), o3.map((i2) => new ee(i2));
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
        K("There is no block with id `" + e + "`", "warn");
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
        K("There is no block at index `" + e + "`", "warn");
        return;
      }
      return new ee(t);
    }
    /**
     * Returns BlockAPI object by Block id
     *
     * @param id - id of block to get
     */
    getById(e) {
      const t = this.Editor.BlockManager.getBlockById(e);
      return t === void 0 ? (K("There is no block with id `" + e + "`", "warn"), null) : new ee(t);
    }
    /**
     * Call Block Manager method that swap Blocks
     *
     * @param {number} fromIndex - position of first Block
     * @param {number} toIndex - position of second Block
     * @deprecated — use 'move' instead
     */
    swap(e, t) {
      L(
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
        K(t, "warn");
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
      Ie(
        true,
        "blocks.stretchBlock()",
        "BlockAPI"
      );
      const o3 = this.Editor.BlockManager.getBlockByIndex(e);
      o3 && (o3.stretched = t);
    }
    /**
     * Insert new Block
     * After set caret to this Block
     *
     * @todo remove in 3.0.0
     * @deprecated with insert() method
     */
    insertNewBlock() {
      L("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
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
  var eo = class extends C {
    constructor() {
      super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), true) : false, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), true) : false, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), true) : false, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), true) : false, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o3 = 0) => this.Editor.BlockManager.blocks[e] ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.blocks[e], t, o3), true) : false, this.focus = (e = false) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
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
  var to = class extends C {
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
  var Pe = class _Pe extends C {
    /**
     * Return namespace section for tool or block tune
     *
     * @param tool - tool object
     */
    static getNamespace(e) {
      return e.isTune() ? `blockTunes.${e.name}` : `tools.${e.name}`;
    }
    /**
     * Return I18n API methods with global dictionary access
     */
    get methods() {
      return {
        t: () => {
          K("I18n.t() method can be accessed only from Tools", "warn");
        }
      };
    }
    /**
     * Return I18n API methods with tool namespaced dictionary
     *
     * @param tool - Tool object
     */
    getMethodsForTool(e) {
      return Object.assign(
        this.methods,
        {
          t: (t) => $.t(_Pe.getNamespace(e), t)
        }
      );
    }
  };
  var oo = class extends C {
    /**
     * Editor.js Core API modules
     */
    get methods() {
      return {
        blocks: this.Editor.BlocksAPI.methods,
        caret: this.Editor.CaretAPI.methods,
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
     * @param tool - tool object
     */
    getMethodsForTool(e) {
      return Object.assign(
        this.methods,
        {
          i18n: this.Editor.I18nAPI.getMethodsForTool(e)
        }
      );
    }
  };
  var io = class extends C {
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
  var no = class extends C {
    /**
     * Available methods
     *
     * @returns {Listeners}
     */
    get methods() {
      return {
        on: (e, t, o3, i2) => this.on(e, t, o3, i2),
        off: (e, t, o3, i2) => this.off(e, t, o3, i2),
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
    on(e, t, o3, i2) {
      return this.listeners.on(e, t, o3, i2);
    }
    /**
     * Removes DOM listener from element
     *
     * @param {Element} element - Element to remove handler from
     * @param eventType - event type
     * @param handler - event handler
     * @param {boolean} useCapture - capture event or not
     */
    off(e, t, o3, i2) {
      this.listeners.off(e, t, o3, i2);
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
  var Le = {};
  var so = {
    get exports() {
      return Le;
    },
    set exports(s) {
      Le = s;
    }
  };
  (function(s, e) {
    (function(t, o3) {
      s.exports = o3();
    })(window, function() {
      return function(t) {
        var o3 = {};
        function i2(n) {
          if (o3[n])
            return o3[n].exports;
          var r = o3[n] = { i: n, l: false, exports: {} };
          return t[n].call(r.exports, r, r.exports, i2), r.l = true, r.exports;
        }
        return i2.m = t, i2.c = o3, i2.d = function(n, r, a3) {
          i2.o(n, r) || Object.defineProperty(n, r, { enumerable: true, get: a3 });
        }, i2.r = function(n) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: true });
        }, i2.t = function(n, r) {
          if (1 & r && (n = i2(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
            return n;
          var a3 = /* @__PURE__ */ Object.create(null);
          if (i2.r(a3), Object.defineProperty(a3, "default", { enumerable: true, value: n }), 2 & r && typeof n != "string")
            for (var l2 in n)
              i2.d(a3, l2, function(c3) {
                return n[c3];
              }.bind(null, l2));
          return a3;
        }, i2.n = function(n) {
          var r = n && n.__esModule ? function() {
            return n.default;
          } : function() {
            return n;
          };
          return i2.d(r, "a", r), r;
        }, i2.o = function(n, r) {
          return Object.prototype.hasOwnProperty.call(n, r);
        }, i2.p = "/", i2(i2.s = 0);
      }([function(t, o3, i2) {
        i2(1), /*!
        * Codex JavaScript Notification module
        * https://github.com/codex-team/js-notifier
        */
        t.exports = function() {
          var n = i2(6), r = "cdx-notify--bounce-in", a3 = null;
          return { show: function(l2) {
            if (l2.message) {
              (function() {
                if (a3)
                  return true;
                a3 = n.getWrapper(), document.body.appendChild(a3);
              })();
              var c3 = null, u3 = l2.time || 8e3;
              switch (l2.type) {
                case "confirm":
                  c3 = n.confirm(l2);
                  break;
                case "prompt":
                  c3 = n.prompt(l2);
                  break;
                default:
                  c3 = n.alert(l2), window.setTimeout(function() {
                    c3.remove();
                  }, u3);
              }
              a3.appendChild(c3), c3.classList.add(r);
            }
          } };
        }();
      }, function(t, o3, i2) {
        var n = i2(2);
        typeof n == "string" && (n = [[t.i, n, ""]]);
        var r = { hmr: true, transform: void 0, insertInto: void 0 };
        i2(4)(n, r), n.locals && (t.exports = n.locals);
      }, function(t, o3, i2) {
        (t.exports = i2(3)(false)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
      }, function(t, o3) {
        t.exports = function(i2) {
          var n = [];
          return n.toString = function() {
            return this.map(function(r) {
              var a3 = function(l2, c3) {
                var u3 = l2[1] || "", h2 = l2[3];
                if (!h2)
                  return u3;
                if (c3 && typeof btoa == "function") {
                  var f2 = (p2 = h2, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(p2)))) + " */"), k2 = h2.sources.map(function(v) {
                    return "/*# sourceURL=" + h2.sourceRoot + v + " */";
                  });
                  return [u3].concat(k2).concat([f2]).join(`
`);
                }
                var p2;
                return [u3].join(`
`);
              }(r, i2);
              return r[2] ? "@media " + r[2] + "{" + a3 + "}" : a3;
            }).join("");
          }, n.i = function(r, a3) {
            typeof r == "string" && (r = [[null, r, ""]]);
            for (var l2 = {}, c3 = 0; c3 < this.length; c3++) {
              var u3 = this[c3][0];
              typeof u3 == "number" && (l2[u3] = true);
            }
            for (c3 = 0; c3 < r.length; c3++) {
              var h2 = r[c3];
              typeof h2[0] == "number" && l2[h2[0]] || (a3 && !h2[2] ? h2[2] = a3 : a3 && (h2[2] = "(" + h2[2] + ") and (" + a3 + ")"), n.push(h2));
            }
          }, n;
        };
      }, function(t, o3, i2) {
        var n, r, a3 = {}, l2 = (n = function() {
          return window && document && document.all && !window.atob;
        }, function() {
          return r === void 0 && (r = n.apply(this, arguments)), r;
        }), c3 = function(b) {
          var g3 = {};
          return function(E) {
            if (typeof E == "function")
              return E();
            if (g3[E] === void 0) {
              var T = function(O) {
                return document.querySelector(O);
              }.call(this, E);
              if (window.HTMLIFrameElement && T instanceof window.HTMLIFrameElement)
                try {
                  T = T.contentDocument.head;
                } catch {
                  T = null;
                }
              g3[E] = T;
            }
            return g3[E];
          };
        }(), u3 = null, h2 = 0, f2 = [], k2 = i2(5);
        function p2(b, g3) {
          for (var E = 0; E < b.length; E++) {
            var T = b[E], O = a3[T.id];
            if (O) {
              O.refs++;
              for (var S = 0; S < O.parts.length; S++)
                O.parts[S](T.parts[S]);
              for (; S < T.parts.length; S++)
                O.parts.push(x(T.parts[S], g3));
            } else {
              var H = [];
              for (S = 0; S < T.parts.length; S++)
                H.push(x(T.parts[S], g3));
              a3[T.id] = { id: T.id, refs: 1, parts: H };
            }
          }
        }
        function v(b, g3) {
          for (var E = [], T = {}, O = 0; O < b.length; O++) {
            var S = b[O], H = g3.base ? S[0] + g3.base : S[0], M = { css: S[1], media: S[2], sourceMap: S[3] };
            T[H] ? T[H].parts.push(M) : E.push(T[H] = { id: H, parts: [M] });
          }
          return E;
        }
        function A(b, g3) {
          var E = c3(b.insertInto);
          if (!E)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var T = f2[f2.length - 1];
          if (b.insertAt === "top")
            T ? T.nextSibling ? E.insertBefore(g3, T.nextSibling) : E.appendChild(g3) : E.insertBefore(g3, E.firstChild), f2.push(g3);
          else if (b.insertAt === "bottom")
            E.appendChild(g3);
          else {
            if (typeof b.insertAt != "object" || !b.insertAt.before)
              throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
            var O = c3(b.insertInto + " " + b.insertAt.before);
            E.insertBefore(g3, O);
          }
        }
        function N(b) {
          if (b.parentNode === null)
            return false;
          b.parentNode.removeChild(b);
          var g3 = f2.indexOf(b);
          g3 >= 0 && f2.splice(g3, 1);
        }
        function _(b) {
          var g3 = document.createElement("style");
          return b.attrs.type === void 0 && (b.attrs.type = "text/css"), y(g3, b.attrs), A(b, g3), g3;
        }
        function y(b, g3) {
          Object.keys(g3).forEach(function(E) {
            b.setAttribute(E, g3[E]);
          });
        }
        function x(b, g3) {
          var E, T, O, S;
          if (g3.transform && b.css) {
            if (!(S = g3.transform(b.css)))
              return function() {
              };
            b.css = S;
          }
          if (g3.singleton) {
            var H = h2++;
            E = u3 || (u3 = _(g3)), T = R.bind(null, E, H, false), O = R.bind(null, E, H, true);
          } else
            b.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (E = function(M) {
              var W = document.createElement("link");
              return M.attrs.type === void 0 && (M.attrs.type = "text/css"), M.attrs.rel = "stylesheet", y(W, M.attrs), A(M, W), W;
            }(g3), T = function(M, W, de) {
              var Q = de.css, Ee = de.sourceMap, Mt = W.convertToAbsoluteUrls === void 0 && Ee;
              (W.convertToAbsoluteUrls || Mt) && (Q = k2(Q)), Ee && (Q += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Ee)))) + " */");
              var Lt = new Blob([Q], { type: "text/css" }), Ve = M.href;
              M.href = URL.createObjectURL(Lt), Ve && URL.revokeObjectURL(Ve);
            }.bind(null, E, g3), O = function() {
              N(E), E.href && URL.revokeObjectURL(E.href);
            }) : (E = _(g3), T = function(M, W) {
              var de = W.css, Q = W.media;
              if (Q && M.setAttribute("media", Q), M.styleSheet)
                M.styleSheet.cssText = de;
              else {
                for (; M.firstChild; )
                  M.removeChild(M.firstChild);
                M.appendChild(document.createTextNode(de));
              }
            }.bind(null, E), O = function() {
              N(E);
            });
          return T(b), function(M) {
            if (M) {
              if (M.css === b.css && M.media === b.media && M.sourceMap === b.sourceMap)
                return;
              T(b = M);
            } else
              O();
          };
        }
        t.exports = function(b, g3) {
          if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
            throw new Error("The style-loader cannot be used in a non-browser environment");
          (g3 = g3 || {}).attrs = typeof g3.attrs == "object" ? g3.attrs : {}, g3.singleton || typeof g3.singleton == "boolean" || (g3.singleton = l2()), g3.insertInto || (g3.insertInto = "head"), g3.insertAt || (g3.insertAt = "bottom");
          var E = v(b, g3);
          return p2(E, g3), function(T) {
            for (var O = [], S = 0; S < E.length; S++) {
              var H = E[S];
              (M = a3[H.id]).refs--, O.push(M);
            }
            for (T && p2(v(T, g3), g3), S = 0; S < O.length; S++) {
              var M;
              if ((M = O[S]).refs === 0) {
                for (var W = 0; W < M.parts.length; W++)
                  M.parts[W]();
                delete a3[M.id];
              }
            }
          };
        };
        var w2, I = (w2 = [], function(b, g3) {
          return w2[b] = g3, w2.filter(Boolean).join(`
`);
        });
        function R(b, g3, E, T) {
          var O = E ? "" : T.css;
          if (b.styleSheet)
            b.styleSheet.cssText = I(g3, O);
          else {
            var S = document.createTextNode(O), H = b.childNodes;
            H[g3] && b.removeChild(H[g3]), H.length ? b.insertBefore(S, H[g3]) : b.appendChild(S);
          }
        }
      }, function(t, o3) {
        t.exports = function(i2) {
          var n = typeof window < "u" && window.location;
          if (!n)
            throw new Error("fixUrls requires window.location");
          if (!i2 || typeof i2 != "string")
            return i2;
          var r = n.protocol + "//" + n.host, a3 = r + n.pathname.replace(/\/[^\/]*$/, "/");
          return i2.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(l2, c3) {
            var u3, h2 = c3.trim().replace(/^"(.*)"$/, function(f2, k2) {
              return k2;
            }).replace(/^'(.*)'$/, function(f2, k2) {
              return k2;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h2) ? l2 : (u3 = h2.indexOf("//") === 0 ? h2 : h2.indexOf("/") === 0 ? r + h2 : a3 + h2.replace(/^\.\//, ""), "url(" + JSON.stringify(u3) + ")");
          });
        };
      }, function(t, o3, i2) {
        var n, r, a3, l2, c3, u3, h2, f2, k2;
        t.exports = (n = "cdx-notifies", r = "cdx-notify", a3 = "cdx-notify__cross", l2 = "cdx-notify__button--confirm", c3 = "cdx-notify__button--cancel", u3 = "cdx-notify__input", h2 = "cdx-notify__button", f2 = "cdx-notify__btns-wrapper", { alert: k2 = function(p2) {
          var v = document.createElement("DIV"), A = document.createElement("DIV"), N = p2.message, _ = p2.style;
          return v.classList.add(r), _ && v.classList.add(r + "--" + _), v.innerHTML = N, A.classList.add(a3), A.addEventListener("click", v.remove.bind(v)), v.appendChild(A), v;
        }, confirm: function(p2) {
          var v = k2(p2), A = document.createElement("div"), N = document.createElement("button"), _ = document.createElement("button"), y = v.querySelector("." + a3), x = p2.cancelHandler, w2 = p2.okHandler;
          return A.classList.add(f2), N.innerHTML = p2.okText || "Confirm", _.innerHTML = p2.cancelText || "Cancel", N.classList.add(h2), _.classList.add(h2), N.classList.add(l2), _.classList.add(c3), x && typeof x == "function" && (_.addEventListener("click", x), y.addEventListener("click", x)), w2 && typeof w2 == "function" && N.addEventListener("click", w2), N.addEventListener("click", v.remove.bind(v)), _.addEventListener("click", v.remove.bind(v)), A.appendChild(N), A.appendChild(_), v.appendChild(A), v;
        }, prompt: function(p2) {
          var v = k2(p2), A = document.createElement("div"), N = document.createElement("button"), _ = document.createElement("input"), y = v.querySelector("." + a3), x = p2.cancelHandler, w2 = p2.okHandler;
          return A.classList.add(f2), N.innerHTML = p2.okText || "Ok", N.classList.add(h2), N.classList.add(l2), _.classList.add(u3), p2.placeholder && _.setAttribute("placeholder", p2.placeholder), p2.default && (_.value = p2.default), p2.inputType && (_.type = p2.inputType), x && typeof x == "function" && y.addEventListener("click", x), w2 && typeof w2 == "function" && N.addEventListener("click", function() {
            w2(_.value);
          }), N.addEventListener("click", v.remove.bind(v)), A.appendChild(_), A.appendChild(N), v.appendChild(A), v;
        }, getWrapper: function() {
          var p2 = document.createElement("DIV");
          return p2.classList.add(n), p2;
        } });
      }]);
    });
  })(so);
  var ro = /* @__PURE__ */ xe(Le);
  var ao = class {
    /**
     * Show web notification
     *
     * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
     */
    show(e) {
      ro.show(e);
    }
  };
  var lo = class extends C {
    /**
     * @param moduleConfiguration - Module Configuration
     * @param moduleConfiguration.config - Editor's config
     * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
     */
    constructor({ config: e, eventsDispatcher: t }) {
      super({
        config: e,
        eventsDispatcher: t
      }), this.notifier = new ao();
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
  var co = class extends C {
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
  var Oe = {};
  var ho = {
    get exports() {
      return Oe;
    },
    set exports(s) {
      Oe = s;
    }
  };
  (function(s, e) {
    (function(t, o3) {
      s.exports = o3();
    })(Ot, function() {
      function t(h2) {
        var f2 = h2.tags, k2 = Object.keys(f2), p2 = k2.map(function(v) {
          return typeof f2[v];
        }).every(function(v) {
          return v === "object" || v === "boolean" || v === "function";
        });
        if (!p2)
          throw new Error("The configuration was invalid");
        this.config = h2;
      }
      var o3 = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
      function i2(h2) {
        return o3.indexOf(h2.nodeName) !== -1;
      }
      var n = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
      function r(h2) {
        return n.indexOf(h2.nodeName) !== -1;
      }
      t.prototype.clean = function(h2) {
        const f2 = document.implementation.createHTMLDocument(), k2 = f2.createElement("div");
        return k2.innerHTML = h2, this._sanitize(f2, k2), k2.innerHTML;
      }, t.prototype._sanitize = function(h2, f2) {
        var k2 = a3(h2, f2), p2 = k2.firstChild();
        if (p2)
          do {
            if (p2.nodeType === Node.TEXT_NODE)
              if (p2.data.trim() === "" && (p2.previousElementSibling && i2(p2.previousElementSibling) || p2.nextElementSibling && i2(p2.nextElementSibling))) {
                f2.removeChild(p2), this._sanitize(h2, f2);
                break;
              } else
                continue;
            if (p2.nodeType === Node.COMMENT_NODE) {
              f2.removeChild(p2), this._sanitize(h2, f2);
              break;
            }
            var v = r(p2), A;
            v && (A = Array.prototype.some.call(p2.childNodes, i2));
            var N = !!f2.parentNode, _ = i2(f2) && i2(p2) && N, y = p2.nodeName.toLowerCase(), x = l2(this.config, y, p2), w2 = v && A;
            if (w2 || c3(p2, x) || !this.config.keepNestedBlockElements && _) {
              if (!(p2.nodeName === "SCRIPT" || p2.nodeName === "STYLE"))
                for (; p2.childNodes.length > 0; )
                  f2.insertBefore(p2.childNodes[0], p2);
              f2.removeChild(p2), this._sanitize(h2, f2);
              break;
            }
            for (var I = 0; I < p2.attributes.length; I += 1) {
              var R = p2.attributes[I];
              u3(R, x, p2) && (p2.removeAttribute(R.name), I = I - 1);
            }
            this._sanitize(h2, p2);
          } while (p2 = k2.nextSibling());
      };
      function a3(h2, f2) {
        return h2.createTreeWalker(
          f2,
          NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
          null,
          false
        );
      }
      function l2(h2, f2, k2) {
        return typeof h2.tags[f2] == "function" ? h2.tags[f2](k2) : h2.tags[f2];
      }
      function c3(h2, f2) {
        return typeof f2 > "u" ? true : typeof f2 == "boolean" ? !f2 : false;
      }
      function u3(h2, f2, k2) {
        var p2 = h2.name.toLowerCase();
        return f2 === true ? false : typeof f2[p2] == "function" ? !f2[p2](h2.value, k2) : typeof f2[p2] > "u" || f2[p2] === false ? true : typeof f2[p2] == "string" ? f2[p2] !== h2.value : false;
      }
      return t;
    });
  })(ho);
  var uo = Oe;
  function ut(s, e) {
    return s.map((t) => {
      const o3 = D(e) ? e(t.tool) : e;
      return V(o3) || (t.data = Fe(t.data, o3)), t;
    });
  }
  function Z(s, e = {}) {
    const t = {
      tags: e
    };
    return new uo(t).clean(s);
  }
  function Fe(s, e) {
    return Array.isArray(s) ? po(s, e) : z(s) ? fo(s, e) : J(s) ? go(s, e) : s;
  }
  function po(s, e) {
    return s.map((t) => Fe(t, e));
  }
  function fo(s, e) {
    const t = {};
    for (const o3 in s) {
      if (!Object.prototype.hasOwnProperty.call(s, o3))
        continue;
      const i2 = s[o3], n = bo(e[o3]) ? e[o3] : e;
      t[o3] = Fe(i2, n);
    }
    return t;
  }
  function go(s, e) {
    return z(e) ? Z(s, e) : e === false ? Z(s, {}) : s;
  }
  function bo(s) {
    return z(s) || Rt(s) || D(s);
  }
  var mo = class extends C {
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
      return Z(e, t);
    }
  };
  var ko = class extends C {
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
      return this.Editor.ReadOnly.isEnabled ? (K(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
    }
  };
  var vo = class extends C {
    /**
     * Available methods
     *
     * @returns {SelectionAPIInterface}
     */
    get methods() {
      return {
        findParentTag: (e, t) => this.findParentTag(e, t),
        expandToTag: (e) => this.expandToTag(e)
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
      return new m().findParentTag(e, t);
    }
    /**
     * Expand selection to passed tag
     *
     * @param {HTMLElement} node - tag that should contain selection
     */
    expandToTag(e) {
      new m().expandToTag(e);
    }
  };
  var xo = class extends C {
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
  var wo = class extends C {
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
        K("Could't toggle the Toolbar because there is no block selected ", "warn");
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
        K("Could't toggle the Toolbox because there is no block selected ", "warn");
        return;
      }
      e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
    }
  };
  var Ae = {};
  var yo = {
    get exports() {
      return Ae;
    },
    set exports(s) {
      Ae = s;
    }
  };
  (function(s, e) {
    (function(t, o3) {
      s.exports = o3();
    })(window, function() {
      return function(t) {
        var o3 = {};
        function i2(n) {
          if (o3[n])
            return o3[n].exports;
          var r = o3[n] = { i: n, l: false, exports: {} };
          return t[n].call(r.exports, r, r.exports, i2), r.l = true, r.exports;
        }
        return i2.m = t, i2.c = o3, i2.d = function(n, r, a3) {
          i2.o(n, r) || Object.defineProperty(n, r, { enumerable: true, get: a3 });
        }, i2.r = function(n) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: true });
        }, i2.t = function(n, r) {
          if (1 & r && (n = i2(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
            return n;
          var a3 = /* @__PURE__ */ Object.create(null);
          if (i2.r(a3), Object.defineProperty(a3, "default", { enumerable: true, value: n }), 2 & r && typeof n != "string")
            for (var l2 in n)
              i2.d(a3, l2, function(c3) {
                return n[c3];
              }.bind(null, l2));
          return a3;
        }, i2.n = function(n) {
          var r = n && n.__esModule ? function() {
            return n.default;
          } : function() {
            return n;
          };
          return i2.d(r, "a", r), r;
        }, i2.o = function(n, r) {
          return Object.prototype.hasOwnProperty.call(n, r);
        }, i2.p = "", i2(i2.s = 0);
      }([function(t, o3, i2) {
        t.exports = i2(1);
      }, function(t, o3, i2) {
        i2.r(o3), i2.d(o3, "default", function() {
          return n;
        });
        class n {
          constructor() {
            this.nodes = { wrapper: null, content: null }, this.showed = false, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
              this.showed && this.hide(true);
            }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: true });
          }
          get CSS() {
            return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
          }
          show(a3, l2, c3) {
            this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
            const u3 = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c3);
            if (u3.hidingDelay && (this.hidingDelay = u3.hidingDelay), this.nodes.content.innerHTML = "", typeof l2 == "string")
              this.nodes.content.appendChild(document.createTextNode(l2));
            else {
              if (!(l2 instanceof Node))
                throw Error("[CodeX Tooltip] Wrong type of \xABcontent\xBB passed. It should be an instance of Node or String. But " + typeof l2 + " given.");
              this.nodes.content.appendChild(l2);
            }
            switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u3.placement) {
              case "top":
                this.placeTop(a3, u3);
                break;
              case "left":
                this.placeLeft(a3, u3);
                break;
              case "right":
                this.placeRight(a3, u3);
                break;
              case "bottom":
              default:
                this.placeBottom(a3, u3);
            }
            u3 && u3.delay ? this.showingTimeout = setTimeout(() => {
              this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
            }, u3.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
          }
          hide(a3 = false) {
            if (this.hidingDelay && !a3)
              return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
                this.hide(true);
              }, this.hidingDelay));
            this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = false, this.showingTimeout && clearTimeout(this.showingTimeout);
          }
          onHover(a3, l2, c3) {
            a3.addEventListener("mouseenter", () => {
              this.show(a3, l2, c3);
            }), a3.addEventListener("mouseleave", () => {
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
            const a3 = "codex-tooltips-style";
            if (document.getElementById(a3))
              return;
            const l2 = i2(2), c3 = this.make("style", null, { textContent: l2.toString(), id: a3 });
            this.prepend(document.head, c3);
          }
          placeBottom(a3, l2) {
            const c3 = a3.getBoundingClientRect(), u3 = c3.left + a3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h2 = c3.bottom + window.pageYOffset + this.offsetTop + l2.marginTop;
            this.applyPlacement("bottom", u3, h2);
          }
          placeTop(a3, l2) {
            const c3 = a3.getBoundingClientRect(), u3 = c3.left + a3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h2 = c3.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
            this.applyPlacement("top", u3, h2);
          }
          placeLeft(a3, l2) {
            const c3 = a3.getBoundingClientRect(), u3 = c3.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l2.marginLeft, h2 = c3.top + window.pageYOffset + a3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("left", u3, h2);
          }
          placeRight(a3, l2) {
            const c3 = a3.getBoundingClientRect(), u3 = c3.right + this.offsetRight + l2.marginRight, h2 = c3.top + window.pageYOffset + a3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
            this.applyPlacement("right", u3, h2);
          }
          applyPlacement(a3, l2, c3) {
            this.nodes.wrapper.classList.add(this.CSS.placement[a3]), this.nodes.wrapper.style.left = l2 + "px", this.nodes.wrapper.style.top = c3 + "px";
          }
          make(a3, l2 = null, c3 = {}) {
            const u3 = document.createElement(a3);
            Array.isArray(l2) ? u3.classList.add(...l2) : l2 && u3.classList.add(l2);
            for (const h2 in c3)
              c3.hasOwnProperty(h2) && (u3[h2] = c3[h2]);
            return u3;
          }
          append(a3, l2) {
            Array.isArray(l2) ? l2.forEach((c3) => a3.appendChild(c3)) : a3.appendChild(l2);
          }
          prepend(a3, l2) {
            Array.isArray(l2) ? (l2 = l2.reverse()).forEach((c3) => a3.prepend(c3)) : a3.prepend(l2);
          }
        }
      }, function(t, o3) {
        t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
      }]).default;
    });
  })(yo);
  var Eo = /* @__PURE__ */ xe(Ae);
  var He = class {
    constructor() {
      this.lib = new Eo();
    }
    /**
     * Release the library
     */
    destroy() {
      this.lib.destroy();
    }
    /**
     * Shows tooltip on element with passed HTML content
     *
     * @param {HTMLElement} element - any HTML element in DOM
     * @param content - tooltip's content
     * @param options - showing settings
     */
    show(e, t, o3) {
      this.lib.show(e, t, o3);
    }
    /**
     * Hides tooltip
     *
     * @param skipHidingDelay — pass true to immediately hide the tooltip
     */
    hide(e = false) {
      this.lib.hide(e);
    }
    /**
     * Binds 'mouseenter' and 'mouseleave' events that shows/hides the Tooltip
     *
     * @param {HTMLElement} element - any HTML element in DOM
     * @param content - tooltip's content
     * @param options - showing settings
     */
    onHover(e, t, o3) {
      this.lib.onHover(e, t, o3);
    }
  };
  var Bo = class extends C {
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
      }), this.tooltip = new He();
    }
    /**
     * Destroy Module
     */
    destroy() {
      this.tooltip.destroy();
    }
    /**
     * Available methods
     */
    get methods() {
      return {
        show: (e, t, o3) => this.show(e, t, o3),
        hide: () => this.hide(),
        onHover: (e, t, o3) => this.onHover(e, t, o3)
      };
    }
    /**
     * Method show tooltip on element with passed HTML content
     *
     * @param {HTMLElement} element - element on which tooltip should be shown
     * @param {TooltipContent} content - tooltip content
     * @param {TooltipOptions} options - tooltip options
     */
    show(e, t, o3) {
      this.tooltip.show(e, t, o3);
    }
    /**
     * Method hides tooltip on HTML page
     */
    hide() {
      this.tooltip.hide();
    }
    /**
     * Decorator for showing Tooltip by mouseenter/mouseleave
     *
     * @param {HTMLElement} element - element on which tooltip should be shown
     * @param {TooltipContent} content - tooltip content
     * @param {TooltipOptions} options - tooltip options
     */
    onHover(e, t, o3) {
      this.tooltip.onHover(e, t, o3);
    }
  };
  var To = class extends C {
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
  function pt(s, e) {
    const t = {};
    return Object.entries(s).forEach(([o3, i2]) => {
      if (z(i2)) {
        const n = e ? `${e}.${o3}` : o3;
        Object.values(i2).every((a3) => J(a3)) ? t[o3] = n : t[o3] = pt(i2, n);
        return;
      }
      t[o3] = i2;
    }), t;
  }
  var X = pt(at);
  function Co(s, e) {
    const t = {};
    return Object.keys(s).forEach((o3) => {
      const i2 = e[o3];
      i2 !== void 0 ? t[i2] = s[o3] : t[o3] = s[o3];
    }), t;
  }
  var So = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>';
  var ft = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>';
  var Io = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>';
  var Mo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>';
  var Lo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>';
  var Oo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>';
  var Qe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>';
  var Ao = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>';
  var _o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>';
  var No = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var Ro = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
  var Do = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
  var P = class _P {
    /**
     * Constructs popover item instance
     *
     * @param params - popover item construction params
     */
    constructor(e) {
      this.nodes = {
        root: null,
        icon: null
      }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
        this.nodes.root.classList.remove(_P.CSS.noFocus);
      }, this.removeSpecialHoverBehavior = () => {
        this.nodes.root.classList.remove(_P.CSS.noHover);
      }, this.onErrorAnimationEnd = () => {
        this.nodes.icon.classList.remove(_P.CSS.wobbleAnimation), this.nodes.icon.removeEventListener("animationend", this.onErrorAnimationEnd);
      }, this.params = e, this.nodes.root = this.make(e);
    }
    /**
     * True if item is disabled and hence not clickable
     */
    get isDisabled() {
      return this.params.isDisabled;
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
     * True if popover should close once item is activated
     */
    get closeOnActivate() {
      return this.params.closeOnActivate;
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
      return this.nodes.root.classList.contains(_P.CSS.focused);
    }
    /**
     * Popover item CSS classes
     */
    static get CSS() {
      return {
        container: "ce-popover-item",
        title: "ce-popover-item__title",
        secondaryTitle: "ce-popover-item__secondary-title",
        icon: "ce-popover-item__icon",
        active: "ce-popover-item--active",
        disabled: "ce-popover-item--disabled",
        focused: "ce-popover-item--focused",
        hidden: "ce-popover-item--hidden",
        confirmationState: "ce-popover-item--confirmation",
        noHover: "ce-popover-item--no-hover",
        noFocus: "ce-popover-item--no-focus",
        wobbleAnimation: "wobble"
      };
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
      if (this.isConfirmationStateEnabled) {
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
      this.nodes.root.classList.toggle(_P.CSS.active, e);
    }
    /**
     * Toggles item hidden state
     *
     * @param isHidden - true if item should be hidden
     */
    toggleHidden(e) {
      this.nodes.root.classList.toggle(_P.CSS.hidden, e);
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
     */
    make(e) {
      const t = d.make("div", _P.CSS.container);
      return e.name && (t.dataset.itemName = e.name), this.nodes.icon = d.make("div", _P.CSS.icon, {
        innerHTML: e.icon || Lo
      }), t.appendChild(this.nodes.icon), t.appendChild(d.make("div", _P.CSS.title, {
        innerHTML: e.title || ""
      })), e.secondaryLabel && t.appendChild(d.make("div", _P.CSS.secondaryTitle, {
        textContent: e.secondaryLabel
      })), e.isActive && t.classList.add(_P.CSS.active), e.isDisabled && t.classList.add(_P.CSS.disabled), t;
    }
    /**
     * Activates confirmation mode for the item.
     *
     * @param newState - new popover item params that should be applied
     */
    enableConfirmationMode(e) {
      const t = {
        ...this.params,
        ...e,
        confirmation: e.confirmation
      }, o3 = this.make(t);
      this.nodes.root.innerHTML = o3.innerHTML, this.nodes.root.classList.add(_P.CSS.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
    }
    /**
     * Returns item to its original state
     */
    disableConfirmationMode() {
      const e = this.make(this.params);
      this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(_P.CSS.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
    }
    /**
     * Enables special focus and hover behavior for item in confirmation state.
     * This is needed to prevent item from being highlighted as hovered/focused just after click.
     */
    enableSpecialHoverAndFocusBehavior() {
      this.nodes.root.classList.add(_P.CSS.noHover), this.nodes.root.classList.add(_P.CSS.noFocus), this.nodes.root.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: true });
    }
    /**
     * Disables special focus and hover behavior
     */
    disableSpecialHoverAndFocusBehavior() {
      this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), this.nodes.root.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
    }
    /**
     * Executes item's onActivate callback if the item has no confirmation configured
     *
     * @param item - item to activate or bring to confirmation mode
     */
    activateOrEnableConfirmationMode(e) {
      if (e.confirmation === void 0)
        try {
          e.onActivate(e), this.disableConfirmationMode();
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
      this.nodes.icon.classList.contains(_P.CSS.wobbleAnimation) || (this.nodes.icon.classList.add(_P.CSS.wobbleAnimation), this.nodes.icon.addEventListener("animationend", this.onErrorAnimationEnd));
    }
  };
  var he = class {
    /**
     * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
     * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
     */
    constructor(s, e) {
      this.cursor = -1, this.items = [], this.items = s || [], this.focusedCssClass = e;
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
    setCursor(s) {
      s < this.items.length && s >= -1 && (this.dropCursor(), this.cursor = s, this.items[this.cursor].classList.add(this.focusedCssClass));
    }
    /**
     * Sets items. Can be used when iterable items changed dynamically
     *
     * @param {HTMLElement[]} nodeList - nodes to iterate
     */
    setItems(s) {
      this.items = s;
    }
    /**
     * Sets cursor next to the current
     */
    next() {
      this.cursor = this.leafNodesAndReturnIndex(he.directions.RIGHT);
    }
    /**
     * Sets cursor before current
     */
    previous() {
      this.cursor = this.leafNodesAndReturnIndex(he.directions.LEFT);
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
    leafNodesAndReturnIndex(s) {
      if (this.items.length === 0)
        return this.cursor;
      let e = this.cursor;
      return e === -1 ? e = s === he.directions.RIGHT ? -1 : 0 : this.items[e].classList.remove(this.focusedCssClass), s === he.directions.RIGHT ? e = (e + 1) % this.items.length : e = (this.items.length + e - 1) % this.items.length, d.canSetCaret(this.items[e]) && re(() => m.setCursor(this.items[e]), 50)(), this.items[e].classList.add(this.focusedCssClass), e;
    }
  };
  var ne = he;
  ne.directions = {
    RIGHT: "right",
    LEFT: "left"
  };
  var G = class _G {
    /**
     * @param {FlipperOptions} options - different constructing settings
     */
    constructor(e) {
      this.iterator = null, this.activated = false, this.flipCallbacks = [], this.onKeyDown = (t) => {
        if (this.isEventReadyForHandling(t))
          switch (_G.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
            case B.TAB:
              this.handleTabPress(t);
              break;
            case B.LEFT:
            case B.UP:
              this.flipLeft();
              break;
            case B.RIGHT:
            case B.DOWN:
              this.flipRight();
              break;
            case B.ENTER:
              this.handleEnterPress(t);
              break;
          }
      }, this.iterator = new ne(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || _G.usedKeys;
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
        B.TAB,
        B.LEFT,
        B.RIGHT,
        B.ENTER,
        B.UP,
        B.DOWN
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
      switch (e.shiftKey ? ne.directions.LEFT : ne.directions.RIGHT) {
        case ne.directions.RIGHT:
          this.flipRight();
          break;
        case ne.directions.LEFT:
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
      this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), D(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
    }
    /**
     * Fired after flipping in any direction
     */
    flipCallback() {
      this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
    }
  };
  var pe = class _pe {
    /**
     * Styles
     */
    static get CSS() {
      return {
        wrapper: "cdx-search-field",
        icon: "cdx-search-field__icon",
        input: "cdx-search-field__input"
      };
    }
    /**
     * @param options - available config
     * @param options.items - searchable items list
     * @param options.onSearch - search callback
     * @param options.placeholder - input placeholder
     */
    constructor({ items: e, onSearch: t, placeholder: o3 }) {
      this.listeners = new De(), this.items = e, this.onSearch = t, this.render(o3);
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
      this.input.value = "", this.searchQuery = "", this.onSearch("", this.foundItems);
    }
    /**
     * Clears memory
     */
    destroy() {
      this.listeners.removeAll();
    }
    /**
     * Creates the search field
     *
     * @param placeholder - input placeholder
     */
    render(e) {
      this.wrapper = d.make("div", _pe.CSS.wrapper);
      const t = d.make("div", _pe.CSS.icon, {
        innerHTML: No
      });
      this.input = d.make("input", _pe.CSS.input, {
        placeholder: e
      }), this.wrapper.appendChild(t), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
        this.searchQuery = this.input.value, this.onSearch(this.searchQuery, this.foundItems);
      });
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
      var i2;
      const t = ((i2 = e.title) == null ? void 0 : i2.toLowerCase()) || "", o3 = this.searchQuery.toLowerCase();
      return t.includes(o3);
    }
  };
  var ue = class {
    /**
     * Locks body element scroll
     */
    lock() {
      Ge ? this.lockHard() : document.body.classList.add(ue.CSS.scrollLocked);
    }
    /**
     * Unlocks body element scroll
     */
    unlock() {
      Ge ? this.unlockHard() : document.body.classList.remove(ue.CSS.scrollLocked);
    }
    /**
     * Locks scroll in a hard way (via setting fixed position to body element)
     */
    lockHard() {
      this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
        "--window-scroll-offset",
        `${this.scrollPosition}px`
      ), document.body.classList.add(ue.CSS.scrollLockedHard);
    }
    /**
     * Unlocks hard scroll lock
     */
    unlockHard() {
      document.body.classList.remove(ue.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
    }
  };
  var gt = ue;
  gt.CSS = {
    scrollLocked: "ce-scroll-locked",
    scrollLockedHard: "ce-scroll-locked--hard"
  };
  var Po = Object.defineProperty;
  var Fo = Object.getOwnPropertyDescriptor;
  var Ho = (s, e, t, o3) => {
    for (var i2 = o3 > 1 ? void 0 : o3 ? Fo(e, t) : e, n = s.length - 1, r; n >= 0; n--)
      (r = s[n]) && (i2 = (o3 ? r(e, t, i2) : r(i2)) || i2);
    return o3 && i2 && Po(e, t, i2), i2;
  };
  var ge = /* @__PURE__ */ ((s) => (s.Close = "close", s))(ge || {});
  var j = class extends we {
    /**
     * Constructs the instance
     *
     * @param params - popover construction params
     */
    constructor(s) {
      super(), this.scopeElement = document.body, this.listeners = new De(), this.scrollLocker = new gt(), this.nodes = {
        wrapper: null,
        popover: null,
        nothingFoundMessage: null,
        customContent: null,
        items: null,
        overlay: null
      }, this.messages = {
        nothingFound: "Nothing found",
        search: "Search"
      }, this.onFlip = () => {
        this.items.find((t) => t.isFocused).onFocus();
      }, this.items = s.items.map((e) => new P(e)), s.scopeElement !== void 0 && (this.scopeElement = s.scopeElement), s.messages && (this.messages = {
        ...this.messages,
        ...s.messages
      }), s.customContentFlippableItems && (this.customContentFlippableItems = s.customContentFlippableItems), this.make(), s.customContent && this.addCustomContent(s.customContent), s.searchable && this.addSearch(), this.initializeFlipper();
    }
    /**
     * Popover CSS classes
     */
    static get CSS() {
      return {
        popover: "ce-popover",
        popoverOpenTop: "ce-popover--open-top",
        popoverOpened: "ce-popover--opened",
        search: "ce-popover__search",
        nothingFoundMessage: "ce-popover__nothing-found-message",
        nothingFoundMessageDisplayed: "ce-popover__nothing-found-message--displayed",
        customContent: "ce-popover__custom-content",
        customContentHidden: "ce-popover__custom-content--hidden",
        items: "ce-popover__items",
        overlay: "ce-popover__overlay",
        overlayHidden: "ce-popover__overlay--hidden"
      };
    }
    /**
     * Returns HTML element corresponding to the popover
     */
    getElement() {
      return this.nodes.wrapper;
    }
    /**
     * Returns true if some item inside popover is focused
     */
    hasFocus() {
      return this.flipper.hasFocus();
    }
    /**
     * Open popover
     */
    show() {
      this.shouldOpenBottom || (this.nodes.popover.style.setProperty("--popover-height", this.height + "px"), this.nodes.popover.classList.add(j.CSS.popoverOpenTop)), this.nodes.overlay.classList.remove(j.CSS.overlayHidden), this.nodes.popover.classList.add(j.CSS.popoverOpened), this.flipper.activate(this.flippableElements), this.search !== void 0 && setTimeout(() => {
        this.search.focus();
      }, 100), te() && this.scrollLocker.lock();
    }
    /**
     * Closes popover
     */
    hide() {
      this.nodes.popover.classList.remove(j.CSS.popoverOpened), this.nodes.popover.classList.remove(j.CSS.popoverOpenTop), this.nodes.overlay.classList.add(j.CSS.overlayHidden), this.flipper.deactivate(), this.items.forEach((s) => s.reset()), this.search !== void 0 && this.search.clear(), te() && this.scrollLocker.unlock(), this.emit(
        "close"
        /* Close */
      );
    }
    /**
     * Clears memory
     */
    destroy() {
      this.flipper.deactivate(), this.listeners.removeAll(), te() && this.scrollLocker.unlock();
    }
    /**
     * Constructs HTML element corresponding to popover
     */
    make() {
      this.nodes.popover = d.make("div", [j.CSS.popover]), this.nodes.nothingFoundMessage = d.make("div", [j.CSS.nothingFoundMessage], {
        textContent: this.messages.nothingFound
      }), this.nodes.popover.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d.make("div", [j.CSS.items]), this.items.forEach((s) => {
        this.nodes.items.appendChild(s.getElement());
      }), this.nodes.popover.appendChild(this.nodes.items), this.listeners.on(this.nodes.popover, "click", (s) => {
        const e = this.getTargetItem(s);
        e !== void 0 && this.handleItemClick(e);
      }), this.nodes.wrapper = d.make("div"), this.nodes.overlay = d.make("div", [j.CSS.overlay, j.CSS.overlayHidden]), this.listeners.on(this.nodes.overlay, "click", () => {
        this.hide();
      }), this.nodes.wrapper.appendChild(this.nodes.overlay), this.nodes.wrapper.appendChild(this.nodes.popover);
    }
    /**
     * Adds search to the popover
     */
    addSearch() {
      this.search = new pe({
        items: this.items,
        placeholder: this.messages.search,
        onSearch: (e, t) => {
          this.items.forEach((i2) => {
            const n = !t.includes(i2);
            i2.toggleHidden(n);
          }), this.toggleNothingFoundMessage(t.length === 0), this.toggleCustomContent(e !== "");
          const o3 = e === "" ? this.flippableElements : t.map((i2) => i2.getElement());
          this.flipper.isActivated && (this.flipper.deactivate(), this.flipper.activate(o3));
        }
      });
      const s = this.search.getElement();
      s.classList.add(j.CSS.search), this.nodes.popover.insertBefore(s, this.nodes.popover.firstChild);
    }
    /**
     * Adds custom html content to the popover
     *
     * @param content - html content to append
     */
    addCustomContent(s) {
      this.nodes.customContent = s, this.nodes.customContent.classList.add(j.CSS.customContent), this.nodes.popover.insertBefore(s, this.nodes.popover.firstChild);
    }
    /**
     * Retrieves popover item that is the target of the specified event
     *
     * @param event - event to retrieve popover item from
     */
    getTargetItem(s) {
      return this.items.find((e) => s.composedPath().includes(e.getElement()));
    }
    /**
     * Handles item clicks
     *
     * @param item - item to handle click of
     */
    handleItemClick(s) {
      s.isDisabled || (this.items.filter((e) => e !== s).forEach((e) => e.reset()), s.handleClick(), this.toggleItemActivenessIfNeeded(s), s.closeOnActivate && this.hide());
    }
    /**
     * Creates Flipper instance which allows to navigate between popover items via keyboard
     */
    initializeFlipper() {
      this.flipper = new G({
        items: this.flippableElements,
        focusedItemClass: P.CSS.focused,
        allowedKeys: [
          B.TAB,
          B.UP,
          B.DOWN,
          B.ENTER
        ]
      }), this.flipper.onFlip(this.onFlip);
    }
    /**
     * Returns list of elements available for keyboard navigation.
     * Contains both usual popover items elements and custom html content.
     */
    get flippableElements() {
      const s = this.items.map((t) => t.getElement());
      return (this.customContentFlippableItems || []).concat(s);
    }
    get height() {
      let s = 0;
      if (this.nodes.popover === null)
        return s;
      const e = this.nodes.popover.cloneNode(true);
      return e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-1000px", e.classList.add(j.CSS.popoverOpened), document.body.appendChild(e), s = e.offsetHeight, e.remove(), s;
    }
    /**
     * Checks if popover should be opened bottom.
     * It should happen when there is enough space below or not enough space above
     */
    get shouldOpenBottom() {
      const s = this.nodes.popover.getBoundingClientRect(), e = this.scopeElement.getBoundingClientRect(), t = this.height, o3 = s.top + t, i2 = s.top - t, n = Math.min(window.innerHeight, e.bottom);
      return i2 < e.top || o3 <= n;
    }
    /**
     * Toggles nothing found message visibility
     *
     * @param isDisplayed - true if the message should be displayed
     */
    toggleNothingFoundMessage(s) {
      this.nodes.nothingFoundMessage.classList.toggle(j.CSS.nothingFoundMessageDisplayed, s);
    }
    /**
     * Toggles custom content visibility
     *
     * @param isDisplayed - true if custom content should be displayed
     */
    toggleCustomContent(s) {
      var e;
      (e = this.nodes.customContent) == null || e.classList.toggle(j.CSS.customContentHidden, s);
    }
    /**
     * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
     *
     * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
     * (All the other items with the same key get inactive, and the item gets active)
     *
     * @param clickedItem - popover item that was clicked
     */
    toggleItemActivenessIfNeeded(s) {
      if (s.toggle === true && s.toggleActive(), typeof s.toggle == "string") {
        const e = this.items.filter((t) => t.toggle === s.toggle);
        if (e.length === 1) {
          s.toggleActive();
          return;
        }
        e.forEach((t) => {
          t.toggleActive(t === s);
        });
      }
    }
  };
  var je = j;
  Ho([
    ce
  ], je.prototype, "height", 1);
  var jo = class extends C {
    constructor() {
      super(...arguments), this.opened = false, this.selection = new m(), this.onPopoverClose = () => {
        this.close();
      };
    }
    /**
     * Module Events
     *
     * @returns {{opened: string, closed: string}}
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
      return (e = this.popover) == null ? void 0 : e.flipper;
    }
    /**
     * Panel with block settings with 2 sections:
     *  - Tool's Settings
     *  - Default Settings [Move, Remove, etc]
     */
    make() {
      this.nodes.wrapper = d.make("div", [this.CSS.settings]);
    }
    /**
     * Destroys module
     */
    destroy() {
      this.removeAllNodes();
    }
    /**
     * Open Block Settings pane
     *
     * @param targetBlock - near which Block we should open BlockSettings
     */
    open(e = this.Editor.BlockManager.currentBlock) {
      this.opened = true, this.selection.save(), e.selected = true, this.Editor.BlockSelection.clearCache();
      const [t, o3] = e.getTunes();
      this.eventsDispatcher.emit(this.events.opened), this.popover = new je({
        searchable: true,
        items: t.map((i2) => this.resolveTuneAliases(i2)),
        customContent: o3,
        customContentFlippableItems: this.getControls(o3),
        scopeElement: this.Editor.API.methods.ui.nodes.redactor,
        messages: {
          nothingFound: $.ui(X.ui.popover, "Nothing found"),
          search: $.ui(X.ui.popover, "Filter")
        }
      }), this.popover.on(ge.Close, this.onPopoverClose), this.nodes.wrapper.append(this.popover.getElement()), this.popover.show();
    }
    /**
     * Returns root block settings element
     */
    getElement() {
      return this.nodes.wrapper;
    }
    /**
     * Close Block Settings pane
     */
    close() {
      this.opened = false, m.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = false), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(ge.Close, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null);
    }
    /**
     * Returns list of buttons and inputs inside specified container
     *
     * @param container - container to query controls inside of
     */
    getControls(e) {
      const { StylesAPI: t } = this.Editor, o3 = e.querySelectorAll(
        `.${t.classes.settingsButton}, ${d.allInputsSelector}`
      );
      return Array.from(o3);
    }
    /**
     * Resolves aliases in tunes menu items
     *
     * @param item - item with resolved aliases
     */
    resolveTuneAliases(e) {
      const t = Co(e, { label: "title" });
      return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
    }
  };
  var Y = class _Y extends C {
    constructor() {
      super(...arguments), this.opened = false, this.tools = [], this.flipper = null, this.togglingCallback = null;
    }
    /**
     * CSS getter
     */
    static get CSS() {
      return {
        conversionToolbarWrapper: "ce-conversion-toolbar",
        conversionToolbarShowed: "ce-conversion-toolbar--showed",
        conversionToolbarTools: "ce-conversion-toolbar__tools",
        conversionToolbarLabel: "ce-conversion-toolbar__label",
        conversionTool: "ce-conversion-tool",
        conversionToolHidden: "ce-conversion-tool--hidden",
        conversionToolIcon: "ce-conversion-tool__icon",
        conversionToolSecondaryLabel: "ce-conversion-tool__secondary-label",
        conversionToolFocused: "ce-conversion-tool--focused",
        conversionToolActive: "ce-conversion-tool--active"
      };
    }
    /**
     * Create UI of Conversion Toolbar
     */
    make() {
      this.nodes.wrapper = d.make("div", [
        _Y.CSS.conversionToolbarWrapper,
        ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
      ]), this.nodes.tools = d.make("div", _Y.CSS.conversionToolbarTools);
      const e = d.make("div", _Y.CSS.conversionToolbarLabel, {
        textContent: $.ui(X.ui.inlineToolbar.converter, "Convert to")
      });
      return this.addTools(), this.enableFlipper(), d.append(this.nodes.wrapper, e), d.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
    }
    /**
     * Deactivates flipper and removes all nodes
     */
    destroy() {
      this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
    }
    /**
     * Toggle conversion dropdown visibility
     *
     * @param {Function} [togglingCallback] — callback that will accept opening state
     */
    toggle(e) {
      this.opened ? this.close() : this.open(), D(e) && (this.togglingCallback = e);
    }
    /**
     * Shows Conversion Toolbar
     */
    open() {
      this.filterTools(), this.opened = true, this.nodes.wrapper.classList.add(_Y.CSS.conversionToolbarShowed), window.requestAnimationFrame(() => {
        this.flipper.activate(this.tools.map((e) => e.button).filter((e) => !e.classList.contains(_Y.CSS.conversionToolHidden))), this.flipper.focusFirst(), D(this.togglingCallback) && this.togglingCallback(true);
      });
    }
    /**
     * Closes Conversion Toolbar
     */
    close() {
      this.opened = false, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(_Y.CSS.conversionToolbarShowed), D(this.togglingCallback) && this.togglingCallback(false);
    }
    /**
     * Returns true if it has more than one tool available for convert in
     */
    hasTools() {
      return this.tools.length === 1 ? this.tools[0].name !== this.config.defaultBlock : true;
    }
    /**
     * Replaces one Block with another
     * For that Tools must provide import/export methods
     *
     * @param {string} replacingToolName - name of Tool which replaces current
     * @param blockDataOverrides - If this conversion fired by the one of multiple Toolbox items, extend converted data with this item's "data" overrides
     */
    async replaceWithBlock(e, t) {
      const { BlockManager: o3, BlockSelection: i2, InlineToolbar: n, Caret: r } = this.Editor;
      o3.convert(this.Editor.BlockManager.currentBlock, e, t), i2.clearSelection(), this.close(), n.close(), window.requestAnimationFrame(() => {
        r.setToBlock(this.Editor.BlockManager.currentBlock, r.positions.END);
      });
    }
    /**
     * Iterates existing Tools and inserts to the ConversionToolbar
     * if tools have ability to import
     */
    addTools() {
      const e = this.Editor.Tools.blockTools;
      Array.from(e.entries()).forEach(([t, o3]) => {
        var n;
        const i2 = o3.conversionConfig;
        !i2 || !i2.import || (n = o3.toolbox) == null || n.forEach(
          (r) => this.addToolIfValid(t, r)
        );
      });
    }
    /**
     * Inserts a tool to the ConversionToolbar if the tool's toolbox config is valid
     *
     * @param name - tool's name
     * @param toolboxSettings - tool's single toolbox setting
     */
    addToolIfValid(e, t) {
      V(t) || !t.icon || this.addTool(e, t);
    }
    /**
     * Add tool to the Conversion Toolbar
     *
     * @param toolName - name of Tool to add
     * @param toolboxItem - tool's toolbox item data
     */
    addTool(e, t) {
      var r;
      const o3 = d.make("div", [_Y.CSS.conversionTool]), i2 = d.make("div", [_Y.CSS.conversionToolIcon]);
      o3.dataset.tool = e, i2.innerHTML = t.icon, d.append(o3, i2), d.append(o3, d.text($.t(X.toolNames, t.title || ae(e))));
      const n = (r = this.Editor.Tools.blockTools.get(e)) == null ? void 0 : r.shortcut;
      if (n) {
        const a3 = d.make("span", _Y.CSS.conversionToolSecondaryLabel, {
          innerText: Re(n)
        });
        d.append(o3, a3);
      }
      d.append(this.nodes.tools, o3), this.tools.push({
        name: e,
        button: o3,
        toolboxItem: t
      }), this.listeners.on(o3, "click", async () => {
        await this.replaceWithBlock(e, t.data);
      });
    }
    /**
     * Hide current Tool and show others
     */
    async filterTools() {
      const { currentBlock: e } = this.Editor.BlockManager, t = await e.getActiveToolboxEntry();
      function o3(i2, n) {
        return i2.icon === n.icon && i2.title === n.title;
      }
      this.tools.forEach((i2) => {
        let n = false;
        if (t) {
          const r = o3(t, i2.toolboxItem);
          n = i2.button.dataset.tool === e.name && r;
        }
        i2.button.hidden = n, i2.button.classList.toggle(_Y.CSS.conversionToolHidden, n);
      });
    }
    /**
     * Prepare Flipper to be able to leaf tools by arrows/tab
     */
    enableFlipper() {
      this.flipper = new G({
        focusedItemClass: _Y.CSS.conversionToolFocused
      });
    }
  };
  var _e = {};
  var zo = {
    get exports() {
      return _e;
    },
    set exports(s) {
      _e = s;
    }
  };
  (function(s, e) {
    (function(t, o3) {
      s.exports = o3();
    })(window, function() {
      return function(t) {
        var o3 = {};
        function i2(n) {
          if (o3[n])
            return o3[n].exports;
          var r = o3[n] = { i: n, l: false, exports: {} };
          return t[n].call(r.exports, r, r.exports, i2), r.l = true, r.exports;
        }
        return i2.m = t, i2.c = o3, i2.d = function(n, r, a3) {
          i2.o(n, r) || Object.defineProperty(n, r, { enumerable: true, get: a3 });
        }, i2.r = function(n) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: true });
        }, i2.t = function(n, r) {
          if (1 & r && (n = i2(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
            return n;
          var a3 = /* @__PURE__ */ Object.create(null);
          if (i2.r(a3), Object.defineProperty(a3, "default", { enumerable: true, value: n }), 2 & r && typeof n != "string")
            for (var l2 in n)
              i2.d(a3, l2, function(c3) {
                return n[c3];
              }.bind(null, l2));
          return a3;
        }, i2.n = function(n) {
          var r = n && n.__esModule ? function() {
            return n.default;
          } : function() {
            return n;
          };
          return i2.d(r, "a", r), r;
        }, i2.o = function(n, r) {
          return Object.prototype.hasOwnProperty.call(n, r);
        }, i2.p = "", i2(i2.s = 0);
      }([function(t, o3, i2) {
        function n(l2, c3) {
          for (var u3 = 0; u3 < c3.length; u3++) {
            var h2 = c3[u3];
            h2.enumerable = h2.enumerable || false, h2.configurable = true, "value" in h2 && (h2.writable = true), Object.defineProperty(l2, h2.key, h2);
          }
        }
        function r(l2, c3, u3) {
          return c3 && n(l2.prototype, c3), u3 && n(l2, u3), l2;
        }
        i2.r(o3);
        var a3 = function() {
          function l2(c3) {
            var u3 = this;
            (function(h2, f2) {
              if (!(h2 instanceof f2))
                throw new TypeError("Cannot call a class as a function");
            })(this, l2), this.commands = {}, this.keys = {}, this.name = c3.name, this.parseShortcutName(c3.name), this.element = c3.on, this.callback = c3.callback, this.executeShortcut = function(h2) {
              u3.execute(h2);
            }, this.element.addEventListener("keydown", this.executeShortcut, false);
          }
          return r(l2, null, [{ key: "supportedCommands", get: function() {
            return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
          } }, { key: "keyCodes", get: function() {
            return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
          } }]), r(l2, [{ key: "parseShortcutName", value: function(c3) {
            c3 = c3.split("+");
            for (var u3 = 0; u3 < c3.length; u3++) {
              c3[u3] = c3[u3].toUpperCase();
              var h2 = false;
              for (var f2 in l2.supportedCommands)
                if (l2.supportedCommands[f2].includes(c3[u3])) {
                  h2 = this.commands[f2] = true;
                  break;
                }
              h2 || (this.keys[c3[u3]] = true);
            }
            for (var k2 in l2.supportedCommands)
              this.commands[k2] || (this.commands[k2] = false);
          } }, { key: "execute", value: function(c3) {
            var u3, h2 = { CMD: c3.ctrlKey || c3.metaKey, SHIFT: c3.shiftKey, ALT: c3.altKey }, f2 = true;
            for (u3 in this.commands)
              this.commands[u3] !== h2[u3] && (f2 = false);
            var k2, p2 = true;
            for (k2 in this.keys)
              p2 = p2 && c3.keyCode === l2.keyCodes[k2];
            f2 && p2 && this.callback(c3);
          } }, { key: "remove", value: function() {
            this.element.removeEventListener("keydown", this.executeShortcut);
          } }]), l2;
        }();
        o3.default = a3;
      }]).default;
    });
  })(zo);
  var Uo = /* @__PURE__ */ xe(_e);
  var $o = class {
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
      const o3 = new Uo({
        name: e.name,
        on: e.on,
        callback: e.handler
      }), i2 = this.registeredShortcuts.get(e.on) || [];
      this.registeredShortcuts.set(e.on, [...i2, o3]);
    }
    /**
     * Remove shortcut
     *
     * @param element - Element shortcut is set for
     * @param name - shortcut name
     */
    remove(e, t) {
      const o3 = this.findShortcut(e, t);
      if (!o3)
        return;
      o3.remove();
      const i2 = this.registeredShortcuts.get(e);
      this.registeredShortcuts.set(e, i2.filter((n) => n !== o3));
    }
    /**
     * Get Shortcut instance if exist
     *
     * @param element - Element shorcut is set for
     * @param shortcut - shortcut name
     * @returns {number} index - shortcut index if exist
     */
    findShortcut(e, t) {
      return (this.registeredShortcuts.get(e) || []).find(({ name: i2 }) => i2 === t);
    }
  };
  var le = new $o();
  var Wo = Object.defineProperty;
  var Yo = Object.getOwnPropertyDescriptor;
  var bt = (s, e, t, o3) => {
    for (var i2 = o3 > 1 ? void 0 : o3 ? Yo(e, t) : e, n = s.length - 1, r; n >= 0; n--)
      (r = s[n]) && (i2 = (o3 ? r(e, t, i2) : r(i2)) || i2);
    return o3 && i2 && Wo(e, t, i2), i2;
  };
  var me = /* @__PURE__ */ ((s) => (s.Opened = "toolbox-opened", s.Closed = "toolbox-closed", s.BlockAdded = "toolbox-block-added", s))(me || {});
  var mt = class extends we {
    /**
     * Toolbox constructor
     *
     * @param options - available parameters
     * @param options.api - Editor API methods
     * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
     */
    constructor({ api: s, tools: e, i18nLabels: t }) {
      super(), this.opened = false, this.nodes = {
        toolbox: null
      }, this.onPopoverClose = () => {
        this.opened = false, this.emit(
          "toolbox-closed"
          /* Closed */
        );
      }, this.api = s, this.tools = e, this.i18nLabels = t;
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
     *
     * @returns {Object<string, string>}
     */
    static get CSS() {
      return {
        toolbox: "ce-toolbox"
      };
    }
    /**
     * Makes the Toolbox
     */
    make() {
      return this.popover = new je({
        scopeElement: this.api.ui.nodes.redactor,
        searchable: true,
        messages: {
          nothingFound: this.i18nLabels.nothingFound,
          search: this.i18nLabels.filter
        },
        items: this.toolboxItemsToBeDisplayed
      }), this.popover.on(ge.Close, this.onPopoverClose), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox.classList.add(mt.CSS.toolbox), this.nodes.toolbox;
    }
    /**
     * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
     */
    hasFocus() {
      var s;
      return (s = this.popover) == null ? void 0 : s.hasFocus();
    }
    /**
     * Destroy Module
     */
    destroy() {
      var s;
      super.destroy(), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.removeAllShortcuts(), (s = this.popover) == null || s.off(ge.Close, this.onPopoverClose);
    }
    /**
     * Toolbox Tool's button click handler
     *
     * @param toolName - tool type to be activated
     * @param blockDataOverrides - Block data predefined by the activated Toolbox item
     */
    toolButtonActivated(s, e) {
      this.insertNewBlock(s, e);
    }
    /**
     * Open Toolbox with Tools
     */
    open() {
      var s;
      this.isEmpty || ((s = this.popover) == null || s.show(), this.opened = true, this.emit(
        "toolbox-opened"
        /* Opened */
      ));
    }
    /**
     * Close Toolbox
     */
    close() {
      var s;
      (s = this.popover) == null || s.hide(), this.opened = false, this.emit(
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
    get toolsToBeDisplayed() {
      const s = [];
      return this.tools.forEach((e) => {
        e.toolbox && s.push(e);
      }), s;
    }
    get toolboxItemsToBeDisplayed() {
      const s = (e, t) => ({
        icon: e.icon,
        title: $.t(X.toolNames, e.title || ae(t.name)),
        name: t.name,
        onActivate: () => {
          this.toolButtonActivated(t.name, e.data);
        },
        secondaryLabel: t.shortcut ? Re(t.shortcut) : ""
      });
      return this.toolsToBeDisplayed.reduce((e, t) => (Array.isArray(t.toolbox) ? t.toolbox.forEach((o3) => {
        e.push(s(o3, t));
      }) : t.toolbox !== void 0 && e.push(s(t.toolbox, t)), e), []);
    }
    /**
     * Iterate all tools and enable theirs shortcuts if specified
     */
    enableShortcuts() {
      this.toolsToBeDisplayed.forEach((s) => {
        const e = s.shortcut;
        e && this.enableShortcutForTool(s.name, e);
      });
    }
    /**
     * Enable shortcut Block Tool implemented shortcut
     *
     * @param {string} toolName - Tool name
     * @param {string} shortcut - shortcut according to the ShortcutData Module format
     */
    enableShortcutForTool(s, e) {
      le.add({
        name: e,
        on: this.api.ui.nodes.redactor,
        handler: (t) => {
          t.preventDefault();
          const o3 = this.api.blocks.getCurrentBlockIndex(), i2 = this.api.blocks.getBlockByIndex(o3);
          if (i2)
            try {
              this.api.blocks.convert(i2.id, s), window.requestAnimationFrame(() => {
                this.api.caret.setToBlock(o3, "end");
              });
              return;
            } catch {
            }
          this.insertNewBlock(s);
        }
      });
    }
    /**
     * Removes all added shortcuts
     * Fired when the Read-Only mode is activated
     */
    removeAllShortcuts() {
      this.toolsToBeDisplayed.forEach((s) => {
        const e = s.shortcut;
        e && le.remove(this.api.ui.nodes.redactor, e);
      });
    }
    /**
     * Inserts new block
     * Can be called when button clicked on Toolbox or by ShortcutData
     *
     * @param {string} toolName - Tool name
     * @param blockDataOverrides - predefined Block data
     */
    async insertNewBlock(s, e) {
      const t = this.api.blocks.getCurrentBlockIndex(), o3 = this.api.blocks.getBlockByIndex(t);
      if (!o3)
        return;
      const i2 = o3.isEmpty ? t : t + 1;
      let n;
      if (e) {
        const a3 = await this.api.blocks.composeBlockData(s);
        n = Object.assign(a3, e);
      }
      const r = this.api.blocks.insert(
        s,
        n,
        void 0,
        i2,
        void 0,
        o3.isEmpty
      );
      r.call(q.APPEND_CALLBACK), this.api.caret.setToBlock(i2), this.emit("toolbox-block-added", {
        block: r
      }), this.api.toolbar.close();
    }
  };
  var ze = mt;
  bt([
    ce
  ], ze.prototype, "toolsToBeDisplayed", 1);
  bt([
    ce
  ], ze.prototype, "toolboxItemsToBeDisplayed", 1);
  var kt = "block hovered";
  var Ko = class extends C {
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
      }), this.toolboxInstance = null, this.tooltip = new He();
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
            L("toolbox.open() called before initialization is finished", "warn");
            return;
          }
          this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
        },
        toggle: () => {
          if (this.toolboxInstance === null) {
            L("toolbox.toggle() called before initialization is finished", "warn");
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
        L("Can't open Toolbar since Editor initialization is not finished yet", "warn");
        return;
      }
      if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
        return;
      this.hoveredBlock = e;
      const t = e.holder, { isMobile: o3 } = this.Editor.UI, i2 = e.pluginsContent, n = window.getComputedStyle(i2), r = parseInt(n.paddingTop, 10), a3 = t.offsetHeight;
      let l2;
      o3 ? l2 = t.offsetTop + a3 : l2 = t.offsetTop + r, this.nodes.wrapper.style.top = `${Math.floor(l2)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
    }
    /**
     * Close the Toolbar
     */
    close() {
      var e;
      this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (e = this.toolboxInstance) == null || e.close(), this.Editor.BlockSettings.close());
    }
    /**
     * Open Toolbar with Plus Button and Actions
     *
     * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
     *                                     This flag allows to open Toolbar without Actions.
     */
    open(e = true) {
      re(() => {
        this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
      }, 50)();
    }
    /**
     * Draws Toolbar elements
     */
    make() {
      this.nodes.wrapper = d.make("div", this.CSS.toolbar), ["content", "actions"].forEach((t) => {
        this.nodes[t] = d.make("div", this.CSS[t]);
      }), d.append(this.nodes.wrapper, this.nodes.content), d.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = d.make("div", this.CSS.plusButton, {
        innerHTML: _o
      }), d.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
        this.tooltip.hide(true), this.plusButtonClicked();
      }, false);
      const e = d.make("div");
      e.appendChild(document.createTextNode($.ui(X.ui.toolbar.toolbox, "Add"))), e.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
        textContent: "\u21E5 Tab"
      })), this.tooltip.onHover(this.nodes.plusButton, e, {
        hidingDelay: 400
      }), this.nodes.settingsToggler = d.make("span", this.CSS.settingsToggler, {
        innerHTML: Ao
      }), d.append(this.nodes.actions, this.nodes.settingsToggler), this.tooltip.onHover(
        this.nodes.settingsToggler,
        $.ui(X.ui.blockTunes.toggler, "Click to tune"),
        {
          hidingDelay: 400
        }
      ), d.append(this.nodes.actions, this.makeToolbox()), d.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
    }
    /**
     * Creates the Toolbox instance and return it's rendered element
     */
    makeToolbox() {
      return this.toolboxInstance = new ze({
        api: this.Editor.API.methods,
        tools: this.Editor.Tools.blockTools,
        i18nLabels: {
          filter: $.ui(X.ui.popover, "Filter"),
          nothingFound: $.ui(X.ui.popover, "Nothing found")
        }
      }), this.toolboxInstance.on(me.Opened, () => {
        this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
      }), this.toolboxInstance.on(me.Closed, () => {
        this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
      }), this.toolboxInstance.on(me.BlockAdded, ({ block: e }) => {
        const { BlockManager: t, Caret: o3 } = this.Editor, i2 = t.getBlockById(e.id);
        i2.inputs.length === 0 && (i2 === t.lastBlock ? (t.insertAtEnd(), o3.setToBlock(t.lastBlock)) : o3.setToBlock(t.nextBlock));
      }), this.toolboxInstance.make();
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
        e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), this.tooltip.hide(true);
      }, true), te() || this.eventsDispatcher.on(kt, (e) => {
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
      this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy(), this.tooltip.destroy();
    }
  };
  var ye = /* @__PURE__ */ ((s) => (s[s.Block = 0] = "Block", s[s.Inline = 1] = "Inline", s[s.Tune = 2] = "Tune", s))(ye || {});
  var ke = /* @__PURE__ */ ((s) => (s.Shortcut = "shortcut", s.Toolbox = "toolbox", s.EnabledInlineTools = "inlineToolbar", s.EnabledBlockTunes = "tunes", s.Config = "config", s))(ke || {});
  var vt = /* @__PURE__ */ ((s) => (s.Shortcut = "shortcut", s.SanitizeConfig = "sanitize", s))(vt || {});
  var se = /* @__PURE__ */ ((s) => (s.IsEnabledLineBreaks = "enableLineBreaks", s.Toolbox = "toolbox", s.ConversionConfig = "conversionConfig", s.IsReadOnlySupported = "isReadOnlySupported", s.PasteConfig = "pasteConfig", s))(se || {});
  var Ue = /* @__PURE__ */ ((s) => (s.IsInline = "isInline", s.Title = "title", s))(Ue || {});
  var xt = /* @__PURE__ */ ((s) => (s.IsTune = "isTune", s))(xt || {});
  var $e = class {
    /**
     * @class
     * @param {ConstructorOptions} options - Constructor options
     */
    constructor({
      name: e,
      constructable: t,
      config: o3,
      api: i2,
      isDefault: n,
      isInternal: r = false,
      defaultPlaceholder: a3
    }) {
      this.api = i2, this.name = e, this.constructable = t, this.config = o3, this.isDefault = n, this.isInternal = r, this.defaultPlaceholder = a3;
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
      if (D(this.constructable.reset))
        return this.constructable.reset();
    }
    /**
     * Calls Tool's prepare method
     */
    prepare() {
      if (D(this.constructable.prepare))
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
      return this.type === 1;
    }
    /**
     * Returns true if Tools is block
     */
    isBlock() {
      return this.type === 0;
    }
    /**
     * Returns true if Tools is tune
     */
    isTune() {
      return this.type === 2;
    }
  };
  var Xo = class extends C {
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
      }), this.CSS = {
        inlineToolbar: "ce-inline-toolbar",
        inlineToolbarShowed: "ce-inline-toolbar--showed",
        inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
        inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
        inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
        buttonsWrapper: "ce-inline-toolbar__buttons",
        actionsWrapper: "ce-inline-toolbar__actions",
        inlineToolButton: "ce-inline-tool",
        inputField: "cdx-input",
        focusedButton: "ce-inline-tool--focused",
        conversionToggler: "ce-inline-toolbar__dropdown",
        conversionTogglerArrow: "ce-inline-toolbar__dropdown-arrow",
        conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
        conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
        togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
      }, this.opened = false, this.toolbarVerticalMargin = te() ? 20 : 6, this.buttonsList = null, this.width = 0, this.flipper = null, this.tooltip = new He();
    }
    /**
     * Toggles read-only mode
     *
     * @param {boolean} readOnlyEnabled - read-only mode
     */
    toggleReadOnly(e) {
      e ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : window.requestIdleCallback(() => {
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
     * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
     */
    tryToShow(e = false, t = true) {
      if (!this.allowedToShow()) {
        e && this.close();
        return;
      }
      this.move(), this.open(t), this.Editor.Toolbar.close();
    }
    /**
     * Move Toolbar to the selected text
     */
    move() {
      const e = m.rect, t = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), o3 = {
        x: e.x - t.left,
        y: e.y + e.height - // + window.scrollY
        t.top + this.toolbarVerticalMargin
      };
      e.width && (o3.x += Math.floor(e.width / 2));
      const i2 = o3.x - this.width / 2, n = o3.x + this.width / 2;
      this.nodes.wrapper.classList.toggle(
        this.CSS.inlineToolbarLeftOriented,
        i2 < this.Editor.UI.contentRect.left
      ), this.nodes.wrapper.classList.toggle(
        this.CSS.inlineToolbarRightOriented,
        n > this.Editor.UI.contentRect.right
      ), this.nodes.wrapper.style.left = Math.floor(o3.x) + "px", this.nodes.wrapper.style.top = Math.floor(o3.y) + "px";
    }
    /**
     * Hides Inline Toolbar
     */
    close() {
      this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(([e, t]) => {
        const o3 = this.getToolShortcut(e);
        o3 && le.remove(this.Editor.UI.nodes.redactor, o3), D(t.clear) && t.clear();
      }), this.opened = false, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
    }
    /**
     * Shows Inline Toolbar
     *
     * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
     */
    open(e = true) {
      if (this.opened)
        return;
      this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(`.${this.CSS.inlineToolButton}`), this.opened = true, e && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = true;
      let t = Array.from(this.buttonsList);
      t.unshift(this.nodes.conversionToggler), t = t.filter((o3) => !o3.hidden), this.flipper.activate(t);
    }
    /**
     * Check if node is contained by Inline Toolbar
     *
     * @param {Node} node — node to check
     */
    containsNode(e) {
      return this.nodes.wrapper.contains(e);
    }
    /**
     * Removes UI and its components
     */
    destroy() {
      this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
    }
    /**
     * Making DOM
     */
    make() {
      this.nodes.wrapper = d.make("div", [
        this.CSS.inlineToolbar,
        ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
      ]), this.nodes.togglerAndButtonsWrapper = d.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = d.make("div", this.CSS.buttonsWrapper), this.nodes.actions = d.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", (e) => {
        e.target.closest(`.${this.CSS.actionsWrapper}`) || e.preventDefault();
      }), d.append(this.nodes.wrapper, [this.nodes.togglerAndButtonsWrapper, this.nodes.actions]), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), d.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), window.requestAnimationFrame(() => {
        this.recalculateWidth();
      }), this.enableFlipper();
    }
    /**
     * Need to show Inline Toolbar or not
     */
    allowedToShow() {
      const e = ["IMG", "INPUT"], t = m.get(), o3 = m.text;
      if (!t || !t.anchorNode || t.isCollapsed || o3.length < 1)
        return false;
      const i2 = d.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
      if (t && e.includes(i2.tagName) || i2.closest('[contenteditable="true"]') === null)
        return false;
      const r = this.Editor.BlockManager.getBlock(t.anchorNode);
      return r ? r.tool.inlineTools.size !== 0 : false;
    }
    /**
     * Recalculate inline toolbar width
     */
    recalculateWidth() {
      this.width = this.nodes.wrapper.offsetWidth;
    }
    /**
     * Create a toggler for Conversion Dropdown
     * and prepend it to the buttons list
     */
    addConversionToggler() {
      this.nodes.conversionToggler = d.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = d.make("div", this.CSS.conversionTogglerContent);
      const e = d.make("div", this.CSS.conversionTogglerArrow, {
        innerHTML: ft
      });
      this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", () => {
        this.Editor.ConversionToolbar.toggle((t) => {
          !t && this.opened ? this.flipper.activate() : this.opened && this.flipper.deactivate();
        });
      }), te() === false && this.tooltip.onHover(this.nodes.conversionToggler, $.ui(X.ui.inlineToolbar.converter, "Convert to"), {
        placement: "top",
        hidingDelay: 100
      });
    }
    /**
     * Changes Conversion Dropdown content for current block's Tool
     */
    async setConversionTogglerContent() {
      const { BlockManager: e } = this.Editor, { currentBlock: t } = e, o3 = t.name, i2 = t.tool.conversionConfig, n = i2 && i2.export;
      this.nodes.conversionToggler.hidden = !n, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !n);
      const r = await t.getActiveToolboxEntry() || {};
      this.nodes.conversionTogglerContent.innerHTML = r.icon || r.title || ae(o3);
    }
    /**
     * Makes the Conversion Dropdown
     */
    prepareConversionToolbar() {
      const e = this.Editor.ConversionToolbar.make();
      d.append(this.nodes.wrapper, e);
    }
    /**
     *  Working with Tools
     *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */
    /**
     * Append only allowed Tools
     */
    addToolsFiltered() {
      const e = m.get(), t = this.Editor.BlockManager.getBlock(e.anchorNode);
      this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), Array.from(t.tool.inlineTools.values()).forEach((o3) => {
        this.addTool(o3);
      }), this.recalculateWidth();
    }
    /**
     * Add tool button and activate clicks
     *
     * @param {InlineTool} tool - InlineTool object
     */
    addTool(e) {
      const t = e.create(), o3 = t.render();
      if (!o3) {
        L("Render method must return an instance of Node", "warn", e.name);
        return;
      }
      if (o3.dataset.tool = e.name, this.nodes.buttons.appendChild(o3), this.toolsInstances.set(e.name, t), D(t.renderActions)) {
        const a3 = t.renderActions();
        this.nodes.actions.appendChild(a3);
      }
      this.listeners.on(o3, "click", (a3) => {
        this.toolClicked(t), a3.preventDefault();
      });
      const i2 = this.getToolShortcut(e.name);
      if (i2)
        try {
          this.enableShortcuts(t, i2);
        } catch {
        }
      const n = d.make("div"), r = $.t(
        X.toolNames,
        e.title || ae(e.name)
      );
      n.appendChild(d.text(r)), i2 && n.appendChild(d.make("div", this.CSS.inlineToolbarShortcut, {
        textContent: Re(i2)
      })), te() === false && this.tooltip.onHover(o3, n, {
        placement: "top",
        hidingDelay: 100
      }), t.checkState(m.get());
    }
    /**
     * Get shortcut name for tool
     *
     * @param toolName — Tool name
     */
    getToolShortcut(e) {
      const { Tools: t } = this.Editor, o3 = t.inlineTools.get(e), i2 = t.internal.inlineTools;
      return Array.from(i2.keys()).includes(e) ? this.inlineTools[e][vt.Shortcut] : o3.shortcut;
    }
    /**
     * Enable Tool shortcut with Editor Shortcuts Module
     *
     * @param {InlineTool} tool - Tool instance
     * @param {string} shortcut - shortcut according to the ShortcutData Module format
     */
    enableShortcuts(e, t) {
      le.add({
        name: t,
        handler: (o3) => {
          const { currentBlock: i2 } = this.Editor.BlockManager;
          i2 && i2.tool.enabledInlineTools && (o3.preventDefault(), this.toolClicked(e));
        },
        on: this.Editor.UI.nodes.redactor
      });
    }
    /**
     * Inline Tool button clicks
     *
     * @param {InlineTool} tool - Tool's instance
     */
    toolClicked(e) {
      const t = m.range;
      e.surround(t), this.checkToolsState(), e.renderActions !== void 0 && this.flipper.deactivate();
    }
    /**
     * Check Tools` state by selection
     */
    checkToolsState() {
      this.toolsInstances.forEach((e) => {
        e.checkState(m.get());
      });
    }
    /**
     * Get inline tools tools
     * Tools that has isInline is true
     */
    get inlineTools() {
      const e = {};
      return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o3]) => {
        e[t] = o3.create();
      }), e;
    }
    /**
     * Allow to leaf buttons by arrows / tab
     * Buttons will be filled on opening
     */
    enableFlipper() {
      this.flipper = new G({
        focusedItemClass: this.CSS.focusedButton,
        allowedKeys: [
          B.ENTER,
          B.TAB
        ]
      });
    }
  };
  var Vo = class extends C {
    /**
     * All keydowns on Block
     *
     * @param {KeyboardEvent} event - keydown
     */
    keydown(e) {
      switch (this.beforeKeydownProcessing(e), e.keyCode) {
        case B.BACKSPACE:
          this.backspace(e);
          break;
        case B.DELETE:
          this.delete(e);
          break;
        case B.ENTER:
          this.enter(e);
          break;
        case B.DOWN:
        case B.RIGHT:
          this.arrowRightAndDown(e);
          break;
        case B.UP:
        case B.LEFT:
          this.arrowLeftAndUp(e);
          break;
        case B.TAB:
          this.tabPressed(e);
          break;
      }
    }
    /**
     * Fires on keydown before event processing
     *
     * @param {KeyboardEvent} event - keydown
     */
    beforeKeydownProcessing(e) {
      this.needToolbarClosing(e) && nt(e.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(e)));
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
     * Open Toolbox to leaf Tools
     *
     * @param {KeyboardEvent} event - tab keydown event
     */
    tabPressed(e) {
      this.Editor.BlockSelection.clearSelection(e);
      const { BlockManager: t, InlineToolbar: o3, ConversionToolbar: i2 } = this.Editor, n = t.currentBlock;
      if (!n)
        return;
      const r = n.isEmpty, a3 = n.tool.isDefault && r, l2 = !r && i2.opened, c3 = !r && !m.isCollapsed && o3.opened;
      a3 ? this.activateToolbox() : !l2 && !c3 && this.activateBlockSettings();
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
      const { BlockSelection: t, BlockManager: o3, Caret: i2 } = this.Editor;
      t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
        const n = o3.removeSelectedBlocks(), r = o3.insertDefaultBlockAtIndex(n, true);
        i2.setToBlock(r, i2.positions.START), t.clearSelection(e);
      });
    }
    /**
     * ENTER pressed on block
     *
     * @param {KeyboardEvent} event - keydown
     */
    enter(e) {
      const { BlockManager: t, UI: o3 } = this.Editor;
      if (t.currentBlock.tool.isLineBreaksEnabled || o3.someToolbarOpened && o3.someFlipperButtonFocused || e.shiftKey)
        return;
      let n = this.Editor.BlockManager.currentBlock;
      this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : this.Editor.Caret.isAtEnd ? n = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : n = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(n), this.Editor.Toolbar.moveAndOpen(n), e.preventDefault();
    }
    /**
     * Handle backspace keydown on Block
     *
     * @param {KeyboardEvent} event - keydown
     */
    backspace(e) {
      const { BlockManager: t, Caret: o3 } = this.Editor, { currentBlock: i2, previousBlock: n } = t;
      if (!m.isCollapsed || !o3.isAtStart)
        return;
      if (e.preventDefault(), this.Editor.Toolbar.close(), !(i2.currentInput === i2.firstInput)) {
        o3.navigatePrevious();
        return;
      }
      if (n === null)
        return;
      if (n.isEmpty) {
        t.removeBlock(n);
        return;
      }
      if (i2.isEmpty) {
        t.removeBlock(i2);
        const l2 = t.currentBlock;
        o3.setToBlock(l2, o3.positions.END);
        return;
      }
      Je(i2, n) ? this.mergeBlocks(n, i2) : o3.setToBlock(n, o3.positions.END);
    }
    /**
     * Handles delete keydown on Block
     * Removes char after the caret.
     * If caret is at the end of the block, merge next block with current
     *
     * @param {KeyboardEvent} event - keydown
     */
    delete(e) {
      const { BlockManager: t, Caret: o3 } = this.Editor, { currentBlock: i2, nextBlock: n } = t;
      if (!m.isCollapsed || !o3.isAtEnd)
        return;
      if (e.preventDefault(), this.Editor.Toolbar.close(), !(i2.currentInput === i2.lastInput)) {
        o3.navigateNext();
        return;
      }
      if (n === null)
        return;
      if (n.isEmpty) {
        t.removeBlock(n);
        return;
      }
      if (i2.isEmpty) {
        t.removeBlock(i2), o3.setToBlock(n, o3.positions.START);
        return;
      }
      Je(i2, n) ? this.mergeBlocks(i2, n) : o3.setToBlock(n, o3.positions.START);
    }
    /**
     * Merge passed Blocks
     *
     * @param targetBlock - to which Block we want to merge
     * @param blockToMerge - what Block we want to merge
     */
    mergeBlocks(e, t) {
      const { BlockManager: o3, Caret: i2, Toolbar: n } = this.Editor;
      i2.createShadow(e.pluginsContent), o3.mergeBlocks(e, t).then(() => {
        window.requestAnimationFrame(() => {
          i2.restoreCaret(e.pluginsContent), e.pluginsContent.normalize(), n.close();
        });
      });
    }
    /**
     * Handle right and down keyboard keys
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    arrowRightAndDown(e) {
      const t = G.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === B.TAB);
      if (this.Editor.UI.someToolbarOpened && t)
        return;
      this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
      const o3 = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
      if (e.shiftKey && e.keyCode === B.DOWN && o3) {
        this.Editor.CrossBlockSelection.toggleBlockSelectedState();
        return;
      }
      (e.keyCode === B.DOWN || e.keyCode === B.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? e.preventDefault() : re(() => {
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
        if (G.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === B.TAB))
          return;
        this.Editor.UI.closeAllToolbars();
      }
      this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
      const t = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
      if (e.shiftKey && e.keyCode === B.UP && t) {
        this.Editor.CrossBlockSelection.toggleBlockSelectedState(false);
        return;
      }
      (e.keyCode === B.UP || e.keyCode === B.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? e.preventDefault() : re(() => {
        this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
      }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Cases when we need to close Toolbar
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    needToolbarClosing(e) {
      const t = e.keyCode === B.ENTER && this.Editor.Toolbar.toolbox.opened, o3 = e.keyCode === B.ENTER && this.Editor.BlockSettings.opened, i2 = e.keyCode === B.ENTER && this.Editor.InlineToolbar.opened, n = e.keyCode === B.ENTER && this.Editor.ConversionToolbar.opened, r = e.keyCode === B.TAB;
      return !(e.shiftKey || r || t || o3 || i2 || n);
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
      this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = true, this.Editor.Toolbar.moveAndOpen()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
    }
  };
  var Te = class {
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
      return st(this.workingArea.children);
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
    static set(e, t, o3) {
      return isNaN(Number(t)) ? (Reflect.set(e, t, o3), true) : (e.insert(+t, o3), true);
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
      const o3 = this.blocks[t];
      d.swap(this.blocks[e].holder, o3.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o3;
    }
    /**
     * Move a block from one to another index
     *
     * @param {number} toIndex - new index of the block
     * @param {number} fromIndex - block to move
     */
    move(e, t) {
      const o3 = this.blocks.splice(t, 1)[0], i2 = e - 1, n = Math.max(0, i2), r = this.blocks[n];
      e > 0 ? this.insertToDOM(o3, "afterend", r) : this.insertToDOM(o3, "beforebegin", r), this.blocks.splice(e, 0, o3);
      const a3 = this.composeBlockEvent("move", {
        fromIndex: t,
        toIndex: e
      });
      o3.call(q.MOVED, a3);
    }
    /**
     * Insert new Block at passed index
     *
     * @param {number} index — index to insert Block
     * @param {Block} block — Block to insert
     * @param {boolean} replace — it true, replace block on given index
     */
    insert(e, t, o3 = false) {
      if (!this.length) {
        this.push(t);
        return;
      }
      e > this.length && (e = this.length), o3 && (this.blocks[e].holder.remove(), this.blocks[e].call(q.REMOVED));
      const i2 = o3 ? 1 : 0;
      if (this.blocks.splice(e, i2, t), e > 0) {
        const n = this.blocks[e - 1];
        this.insertToDOM(t, "afterend", n);
      } else {
        const n = this.blocks[e + 1];
        n ? this.insertToDOM(t, "beforebegin", n) : this.insertToDOM(t);
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
      const o3 = new DocumentFragment();
      for (const i2 of e)
        o3.appendChild(i2.holder);
      if (this.length > 0) {
        if (t > 0) {
          const i2 = Math.min(t - 1, this.length - 1);
          this.blocks[i2].holder.after(o3);
        } else
          t === 0 && this.workingArea.prepend(o3);
        this.blocks.splice(t, 0, ...e);
      } else
        this.blocks.push(...e), this.workingArea.appendChild(o3);
      e.forEach((i2) => i2.call(q.RENDERED));
    }
    /**
     * Remove block
     *
     * @param {number} index - index of Block to remove
     */
    remove(e) {
      isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(q.REMOVED), this.blocks.splice(e, 1);
    }
    /**
     * Remove all blocks
     */
    removeAll() {
      this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(q.REMOVED)), this.blocks.length = 0;
    }
    /**
     * Insert Block after passed target
     *
     * @todo decide if this method is necessary
     * @param {Block} targetBlock — target after which Block should be inserted
     * @param {Block} newBlock — Block to insert
     */
    insertAfter(e, t) {
      const o3 = this.blocks.indexOf(e);
      this.insert(o3 + 1, t);
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
    insertToDOM(e, t, o3) {
      t ? o3.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(q.RENDERED);
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
  var et = "block-removed";
  var tt = "block-added";
  var qo = "block-moved";
  var ot = "block-changed";
  var Zo = class {
    constructor() {
      this.completed = Promise.resolve();
    }
    /**
     * Add new promise to queue
     *
     * @param operation - promise should be added to queue
     */
    add(e) {
      return new Promise((t, o3) => {
        this.completed = this.completed.then(e).then(t).catch(o3);
      });
    }
  };
  var Go = class extends C {
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
      const e = new Te(this.Editor.UI.nodes.redactor);
      this._blocks = new Proxy(e, {
        set: Te.set,
        get: Te.get
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
      id: o3 = void 0,
      tunes: i2 = {}
    }) {
      const n = this.Editor.ReadOnly.isEnabled, r = this.Editor.Tools.blockTools.get(e), a3 = new F({
        id: o3,
        data: t,
        tool: r,
        api: this.Editor.API,
        readOnly: n,
        tunesData: i2
      }, this.eventsDispatcher);
      return n || window.requestIdleCallback(() => {
        this.bindBlockEvents(a3);
      }, { timeout: 2e3 }), a3;
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
      data: o3 = {},
      index: i2,
      needToFocus: n = true,
      replace: r = false,
      tunes: a3 = {}
    } = {}) {
      let l2 = i2;
      l2 === void 0 && (l2 = this.currentBlockIndex + (r ? 0 : 1));
      const c3 = this.composeBlock({
        id: e,
        tool: t,
        data: o3,
        tunes: a3
      });
      return r && this.blockDidMutated(et, this.getBlockByIndex(l2), {
        index: l2
      }), this._blocks.insert(l2, c3, r), this.blockDidMutated(tt, c3, {
        index: l2
      }), n ? this.currentBlockIndex = l2 : l2 <= this.currentBlockIndex && this.currentBlockIndex++, c3;
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
     * Should not trigger 'block-removed' or 'block-added' events
     *
     * @param block - block to update
     * @param data - new data
     */
    async update(e, t) {
      const o3 = await e.data, i2 = this.composeBlock({
        id: e.id,
        tool: e.name,
        data: Object.assign({}, o3, t),
        tunes: e.tunes
      }), n = this.getBlockIndex(e);
      return this._blocks.replace(n, i2), this.blockDidMutated(ot, i2, {
        index: n
      }), i2;
    }
    /**
     * Replace passed Block with the new one with specified Tool and data
     *
     * @param block - block to replace
     * @param newTool - new Tool name
     * @param data - new Tool data
     */
    replace(e, t, o3) {
      const i2 = this.getBlockIndex(e);
      this.insert({
        tool: t,
        data: o3,
        index: i2,
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
    paste(e, t, o3 = false) {
      const i2 = this.insert({
        tool: e,
        replace: o3
      });
      try {
        window.requestIdleCallback(() => {
          i2.call(q.ON_PASTE, t);
        });
      } catch (n) {
        L(`${e}: onPaste callback call is failed`, "error", n);
      }
      return i2;
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
      const o3 = this.composeBlock({ tool: this.config.defaultBlock });
      return this._blocks[e] = o3, this.blockDidMutated(tt, o3, {
        index: e
      }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o3;
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
      const o3 = await t.data;
      V(o3) || await e.mergeWith(o3), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e);
    }
    /**
     * Remove passed Block
     *
     * @param block - Block to remove
     * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
     */
    removeBlock(e, t = true) {
      return new Promise((o3) => {
        const i2 = this._blocks.indexOf(e);
        if (!this.validateIndex(i2))
          throw new Error("Can't find a Block to remove");
        e.destroy(), this._blocks.remove(i2), this.blockDidMutated(et, e, {
          index: i2
        }), this.currentBlockIndex >= i2 && this.currentBlockIndex--, this.blocks.length ? i2 === 0 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, t && this.insert()), o3();
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
      this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
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
      const o3 = {
        text: d.isEmpty(t) ? "" : t.innerHTML
      };
      return this.insert({ data: o3 });
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
      const t = this._blocks.nodes, o3 = e.closest(`.${F.CSS.wrapper}`), i2 = t.indexOf(o3);
      if (i2 >= 0)
        return this._blocks[i2];
    }
    /**
     * Remove selection from all Blocks then highlight only Current Block
     */
    highlightCurrentNode() {
      this.clearFocused(), this.currentBlock.focused = true;
    }
    /**
     * Remove selection from all Blocks
     */
    clearFocused() {
      this.blocks.forEach((e) => {
        e.focused = false;
      });
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
      const t = e.closest(`.${F.CSS.wrapper}`);
      if (!t)
        return;
      const o3 = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
      if (o3 != null && o3.isEqualNode(this.Editor.UI.nodes.wrapper))
        return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
    }
    /**
     * Return block which contents passed node
     *
     * @param {Node} childNode - node to get Block by
     * @returns {Block}
     */
    getBlockByChildNode(e) {
      d.isElement(e) || (e = e.parentNode);
      const t = e.closest(`.${F.CSS.wrapper}`);
      return this.blocks.find((o3) => o3.holder === t);
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
        L("Warning during 'move' call: incorrect indices provided.", "warn");
        return;
      }
      if (!this.validateIndex(e) || !this.validateIndex(t)) {
        L("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
        return;
      }
      this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(qo, this.currentBlock, {
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
    async convert(e, t, o3) {
      if (!await e.save())
        throw new Error("Could not convert Block. Failed to extract original Block data.");
      const n = this.Editor.Tools.blockTools.get(t);
      if (!n)
        throw new Error(`Could not convert Block. Tool \xAB${t}\xBB not found.`);
      const r = await e.exportDataAsString(), a3 = Z(
        r,
        n.sanitizeConfig
      );
      let l2 = Jt(a3, n.conversionConfig);
      o3 && (l2 = Object.assign(l2, o3)), this.replace(e, n.name, l2);
    }
    /**
     * Sets current Block Index -1 which means unknown
     * and clear highlights
     */
    dropPointer() {
      this.currentBlockIndex = -1, this.clearFocused();
    }
    /**
     * Clears Editor
     *
     * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
     *                                             we don't need to add an empty default block
     *                                        2) in api.blocks.clear we should add empty block
     */
    async clear(e = false) {
      const t = new Zo();
      this.blocks.forEach((o3) => {
        t.add(async () => {
          await this.removeBlock(o3, false);
        });
      }), await t.completed, this.dropPointer(), e && this.insert(), this.Editor.UI.checkEmptiness();
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
      this.readOnlyMutableListeners.on(e.holder, "keydown", (o3) => {
        t.keydown(o3);
      }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o3) => {
        t.keyup(o3);
      }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o3) => {
        t.dragOver(o3);
      }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o3) => {
        t.dragLeave(o3);
      }), e.on("didMutated", (o3) => this.blockDidMutated(ot, o3, {
        index: this.getBlockIndex(o3)
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
    blockDidMutated(e, t, o3) {
      const i2 = new CustomEvent(e, {
        detail: {
          target: new ee(t),
          ...o3
        }
      });
      return this.eventsDispatcher.emit(ct, {
        event: i2
      }), t;
    }
  };
  var Jo = class extends C {
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
      t.blocks.forEach((o3) => {
        o3.selected = e;
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
      this.selection = new m(), le.add({
        name: "CMD+A",
        handler: (e) => {
          const { BlockManager: t, ReadOnly: o3 } = this.Editor;
          if (o3.isEnabled) {
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
      m.get().removeAllRanges(), this.allBlocksSelected = false;
    }
    /**
     * Remove selection of Block
     *
     * @param {number?} index - Block index according to the BlockManager's indexes
     */
    unSelectBlockByIndex(e) {
      const { BlockManager: t } = this.Editor;
      let o3;
      isNaN(e) ? o3 = t.currentBlock : o3 = t.getBlockByIndex(e), o3.selected = false, this.clearCache();
    }
    /**
     * Clear selection from Blocks
     *
     * @param {Event} reason - event caused clear of selection
     * @param {boolean} restoreSelection - if true, restore saved selection
     */
    clearSelection(e, t = false) {
      const { BlockManager: o3, Caret: i2, RectangleSelection: n } = this.Editor;
      this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
      const r = e && e instanceof KeyboardEvent, a3 = r && nt(e.keyCode);
      if (this.anyBlockSelected && r && a3 && !m.isSelectionExists) {
        const l2 = o3.removeSelectedBlocks();
        o3.insertDefaultBlockAtIndex(l2, true), i2.setToBlock(o3.currentBlock), re(() => {
          const c3 = e.key;
          i2.insertContentAtCaretPosition(c3.length > 1 ? "" : c3);
        }, 20)();
      }
      if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || n.isRectActivated()) {
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
      this.selectedBlocks.forEach((n) => {
        const r = Z(n.holder.innerHTML, this.sanitizerConfig), a3 = d.make("p");
        a3.innerHTML = r, t.appendChild(a3);
      });
      const o3 = Array.from(t.childNodes).map((n) => n.textContent).join(`

`), i2 = t.innerHTML;
      return e.clipboardData.setData("text/plain", o3), e.clipboardData.setData("text/html", i2), Promise.all(this.selectedBlocks.map((n) => n.save())).then((n) => {
        try {
          e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(n));
        } catch {
        }
      });
    }
    /**
     * select Block
     *
     * @param {number?} index - Block index according to the BlockManager's indexes
     */
    selectBlockByIndex(e) {
      const { BlockManager: t } = this.Editor;
      t.clearFocused();
      let o3;
      isNaN(e) ? o3 = t.currentBlock : o3 = t.getBlockByIndex(e), this.selection.save(), m.get().removeAllRanges(), o3.selected = true, this.clearCache(), this.Editor.InlineToolbar.close();
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
      le.remove(this.Editor.UI.nodes.redactor, "CMD+A");
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
      const o3 = this.Editor.BlockManager.getBlock(e.target).inputs;
      if (o3.length > 1 && !this.readyToBlockSelection) {
        this.readyToBlockSelection = true;
        return;
      }
      if (o3.length === 1 && !this.needToSelectAll) {
        this.needToSelectAll = true;
        return;
      }
      this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = false, this.readyToBlockSelection = false, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = true);
    }
    /**
     * Select All Blocks
     * Each Block has selected setter that makes Block copyable
     */
    selectAllBlocks() {
      this.selection.save(), m.get().removeAllRanges(), this.allBlocksSelected = true, this.Editor.InlineToolbar.close();
    }
  };
  var ve = class _ve extends C {
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
     * Get's deepest first node and checks if offset is zero
     *
     * @returns {boolean}
     */
    get isAtStart() {
      const e = m.get(), t = d.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput);
      let o3 = e.focusNode;
      if (d.isNativeInput(t))
        return t.selectionEnd === 0;
      if (!e.anchorNode)
        return false;
      let i2 = o3.textContent.search(/\S/);
      i2 === -1 && (i2 = 0);
      let n = e.focusOffset;
      return o3.nodeType !== Node.TEXT_NODE && o3.childNodes.length && (o3.childNodes[n] ? (o3 = o3.childNodes[n], n = 0) : (o3 = o3.childNodes[n - 1], n = o3.textContent.length)), (d.isLineBreakTag(t) || d.isEmpty(t)) && this.getHigherLevelSiblings(o3, "left").every((l2) => {
        const c3 = d.isLineBreakTag(l2), u3 = l2.children.length === 1 && d.isLineBreakTag(l2.children[0]), h2 = c3 || u3;
        return d.isEmpty(l2) && !h2;
      }) && n === i2 ? true : t === null || o3 === t && n <= i2;
    }
    /**
     * Get's deepest last node and checks if offset is last node text length
     *
     * @returns {boolean}
     */
    get isAtEnd() {
      const e = m.get();
      let t = e.focusNode;
      const o3 = d.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, true);
      if (d.isNativeInput(o3))
        return o3.selectionEnd === o3.value.length;
      if (!e.focusNode)
        return false;
      let i2 = e.focusOffset;
      if (t.nodeType !== Node.TEXT_NODE && t.childNodes.length && (t.childNodes[i2 - 1] ? (t = t.childNodes[i2 - 1], i2 = t.textContent.length) : (t = t.childNodes[0], i2 = 0)), d.isLineBreakTag(o3) || d.isEmpty(o3)) {
        const r = this.getHigherLevelSiblings(t, "right");
        if (r.every((l2, c3) => c3 === r.length - 1 && d.isLineBreakTag(l2) || d.isEmpty(l2) && !d.isLineBreakTag(l2)) && i2 === t.textContent.length)
          return true;
      }
      const n = o3.textContent.replace(/\s+$/, "");
      return t === o3 && i2 >= n.length;
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
    setToBlock(e, t = this.positions.DEFAULT, o3 = 0) {
      const { BlockManager: i2 } = this.Editor;
      let n;
      switch (t) {
        case this.positions.START:
          n = e.firstInput;
          break;
        case this.positions.END:
          n = e.lastInput;
          break;
        default:
          n = e.currentInput;
      }
      if (!n)
        return;
      const r = d.getDeepestNode(n, t === this.positions.END), a3 = d.getContentLength(r);
      switch (true) {
        case t === this.positions.START:
          o3 = 0;
          break;
        case t === this.positions.END:
        case o3 > a3:
          o3 = a3;
          break;
      }
      re(() => {
        this.set(r, o3);
      }, 20)(), i2.setCurrentBlockByChildNode(e.holder), i2.currentBlock.currentInput = n;
    }
    /**
     * Set caret to the current input of current Block.
     *
     * @param {HTMLElement} input - input where caret should be set
     * @param {string} position - position of the caret.
     *                            If default - leave default behaviour and apply offset if it's passed
     * @param {number} offset - caret offset regarding to the text node
     */
    setToInput(e, t = this.positions.DEFAULT, o3 = 0) {
      const { currentBlock: i2 } = this.Editor.BlockManager, n = d.getDeepestNode(e);
      switch (t) {
        case this.positions.START:
          this.set(n, 0);
          break;
        case this.positions.END:
          this.set(n, d.getContentLength(n));
          break;
        default:
          o3 && this.set(n, o3);
      }
      i2.currentInput = e;
    }
    /**
     * Creates Document Range and sets caret to the element with offset
     *
     * @param {HTMLElement} element - target node.
     * @param {number} offset - offset
     */
    set(e, t = 0) {
      const { top: o3, bottom: i2 } = m.setCursor(e, t), { innerHeight: n } = window;
      o3 < 0 && window.scrollBy(0, o3), i2 > n && window.scrollBy(0, i2 - n);
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
      const e = m.get();
      if (e.rangeCount) {
        const t = e.getRangeAt(0), o3 = this.Editor.BlockManager.currentBlock.currentInput;
        if (t.deleteContents(), o3)
          if (d.isNativeInput(o3)) {
            const i2 = o3, n = document.createDocumentFragment(), r = i2.value.substring(0, i2.selectionStart), a3 = i2.value.substring(i2.selectionStart);
            return n.textContent = a3, i2.value = r, n;
          } else {
            const i2 = t.cloneRange();
            return i2.selectNodeContents(o3), i2.setStart(t.endContainer, t.endOffset), i2.extractContents();
          }
      }
    }
    /**
     * Set's caret to the next Block or Tool`s input
     * Before moving caret, we should check if caret position is at the end of Plugins node
     * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
     *
     * @returns {boolean}
     */
    navigateNext() {
      const { BlockManager: e } = this.Editor, { currentBlock: t, nextContentfulBlock: o3 } = e, { nextInput: i2 } = t, n = this.isAtEnd;
      let r = o3;
      if (!r && !i2) {
        if (t.tool.isDefault || !n)
          return false;
        r = e.insertAtEnd();
      }
      return n ? (i2 ? this.setToInput(i2, this.positions.START) : this.setToBlock(r, this.positions.START), true) : false;
    }
    /**
     * Set's caret to the previous Tool`s input or Block
     * Before moving caret, we should check if caret position is start of the Plugins node
     * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
     *
     * @returns {boolean}
     */
    navigatePrevious() {
      const { currentBlock: e, previousContentfulBlock: t } = this.Editor.BlockManager;
      if (!e)
        return false;
      const { previousInput: o3 } = e;
      return !t && !o3 ? false : this.isAtStart ? (o3 ? this.setToInput(o3, this.positions.END) : this.setToBlock(t, this.positions.END), true) : false;
    }
    /**
     * Inserts shadow element after passed element where caret can be placed
     *
     * @param {Element} element - element after which shadow caret should be inserted
     */
    createShadow(e) {
      const t = document.createElement("span");
      t.classList.add(_ve.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
    }
    /**
     * Restores caret position
     *
     * @param {HTMLElement} element - element where caret should be restored
     */
    restoreCaret(e) {
      const t = e.querySelector(`.${_ve.CSS.shadowCaret}`);
      if (!t)
        return;
      new m().expandToTag(t);
      const i2 = document.createRange();
      i2.selectNode(t), i2.extractContents();
    }
    /**
     * Inserts passed content at caret position
     *
     * @param {string} content - content to insert
     */
    insertContentAtCaretPosition(e) {
      const t = document.createDocumentFragment(), o3 = document.createElement("div"), i2 = m.get(), n = m.range;
      o3.innerHTML = e, Array.from(o3.childNodes).forEach((c3) => t.appendChild(c3)), t.childNodes.length === 0 && t.appendChild(new Text());
      const r = t.lastChild;
      n.deleteContents(), n.insertNode(t);
      const a3 = document.createRange(), l2 = r.nodeType === Node.TEXT_NODE ? r : r.firstChild;
      l2 !== null && l2.textContent !== null && a3.setStart(l2, l2.textContent.length), i2.removeAllRanges(), i2.addRange(a3);
    }
    /**
     * Get all first-level (first child of [contenteditable]) siblings from passed node
     * Then you can check it for emptiness
     *
     * @example
     * <div contenteditable>
     * <p></p>                            |
     * <p></p>                            | left first-level siblings
     * <p></p>                            |
     * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
     * <p></p>                            |
     * <p></p>                            | right first-level siblings
     * <p></p>                            |
     * </div>
     * @param {HTMLElement} from - element from which siblings should be searched
     * @param {'left' | 'right'} direction - direction of search
     * @returns {HTMLElement[]}
     */
    getHigherLevelSiblings(e, t) {
      let o3 = e;
      const i2 = [];
      for (; o3.parentNode && o3.parentNode.contentEditable !== "true"; )
        o3 = o3.parentNode;
      const n = t === "left" ? "previousSibling" : "nextSibling";
      for (; o3[n]; )
        o3 = o3[n], i2.push(o3);
      return i2;
    }
  };
  var Qo = class extends C {
    constructor() {
      super(...arguments), this.onMouseUp = () => {
        this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
      }, this.onMouseOver = (e) => {
        const { BlockManager: t, BlockSelection: o3 } = this.Editor, i2 = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, n = t.getBlockByChildNode(e.target);
        if (!(!i2 || !n) && n !== i2) {
          if (i2 === this.firstSelectedBlock) {
            m.get().removeAllRanges(), i2.selected = true, n.selected = true, o3.clearCache();
            return;
          }
          if (n === this.firstSelectedBlock) {
            i2.selected = false, n.selected = false, o3.clearCache();
            return;
          }
          this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i2, n), this.lastSelectedBlock = n;
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
      if (e.button !== _t.LEFT)
        return;
      const { BlockManager: t } = this.Editor;
      this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
    }
    /**
     * return boolean is cross block selection started
     */
    get isCrossBlockSelectionStarted() {
      return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
    }
    /**
     * Change selection state of the next Block
     * Used for CBS via Shift + arrow keys
     *
     * @param {boolean} next - if true, toggle next block. Previous otherwise
     */
    toggleBlockSelectedState(e = true) {
      const { BlockManager: t, BlockSelection: o3 } = this.Editor;
      this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = true, o3.clearCache(), m.get().removeAllRanges());
      const i2 = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), n = t.blocks[i2];
      n && (this.lastSelectedBlock.selected !== n.selected ? (n.selected = true, o3.clearCache()) : (this.lastSelectedBlock.selected = false, o3.clearCache()), this.lastSelectedBlock = n, this.Editor.InlineToolbar.close(), n.holder.scrollIntoView({
        block: "nearest"
      }));
    }
    /**
     * Clear saved state
     *
     * @param {Event} reason - event caused clear of selection
     */
    clear(e) {
      const { BlockManager: t, BlockSelection: o3, Caret: i2 } = this.Editor, n = t.blocks.indexOf(this.firstSelectedBlock), r = t.blocks.indexOf(this.lastSelectedBlock);
      if (o3.anyBlockSelected && n > -1 && r > -1)
        if (e && e instanceof KeyboardEvent)
          switch (e.keyCode) {
            case B.DOWN:
            case B.RIGHT:
              i2.setToBlock(t.blocks[Math.max(n, r)], i2.positions.END);
              break;
            case B.UP:
            case B.LEFT:
              i2.setToBlock(t.blocks[Math.min(n, r)], i2.positions.START);
              break;
            default:
              i2.setToBlock(t.blocks[Math.max(n, r)], i2.positions.END);
          }
        else
          i2.setToBlock(t.blocks[Math.max(n, r)], i2.positions.END);
      this.firstSelectedBlock = this.lastSelectedBlock = null;
    }
    /**
     * Enables Cross Block Selection
     *
     * @param {MouseEvent} event - mouse down event
     */
    enableCrossBlockSelection(e) {
      const { UI: t } = this.Editor;
      m.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * Change blocks selection state between passed two blocks.
     *
     * @param {Block} firstBlock - first block in range
     * @param {Block} lastBlock - last block in range
     */
    toggleBlocksSelectedState(e, t) {
      const { BlockManager: o3, BlockSelection: i2 } = this.Editor, n = o3.blocks.indexOf(e), r = o3.blocks.indexOf(t), a3 = e.selected !== t.selected;
      for (let l2 = Math.min(n, r); l2 <= Math.max(n, r); l2++) {
        const c3 = o3.blocks[l2];
        c3 !== this.firstSelectedBlock && c3 !== (a3 ? e : t) && (o3.blocks[l2].selected = !o3.blocks[l2].selected, i2.clearCache());
      }
    }
  };
  var ei = class extends C {
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
        Caret: o3,
        Paste: i2
      } = this.Editor;
      e.preventDefault(), t.blocks.forEach((r) => {
        r.dropTarget = false;
      }), m.isAtEditor && !m.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = false;
      const n = t.setCurrentBlockByChildNode(e.target);
      if (n)
        this.Editor.Caret.setToBlock(n, o3.positions.END);
      else {
        const r = t.setCurrentBlockByChildNode(t.lastBlock.holder);
        this.Editor.Caret.setToBlock(r, o3.positions.END);
      }
      await i2.processDataTransfer(e.dataTransfer, true);
    }
    /**
     * Handle drag start event
     */
    processDragStart() {
      m.isAtEditor && !m.isCollapsed && (this.isStartedAtEditor = true), this.Editor.InlineToolbar.close();
    }
    /**
     * @param {DragEvent} dragEvent - drag event
     */
    processDragOver(e) {
      e.preventDefault();
    }
  };
  var ti = class extends C {
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
      }), this.disabled = false, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = 400, this.mutationObserver = new MutationObserver((o3) => {
        this.redactorChanged(o3);
      }), this.eventsDispatcher.on(ct, (o3) => {
        this.particularBlockChanged(o3.event);
      }), this.eventsDispatcher.on(dt, () => {
        this.disable();
      }), this.eventsDispatcher.on(ht, () => {
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
      this.disabled || !D(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
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
      this.eventsDispatcher.emit(Me, {
        mutations: e
      });
    }
  };
  var wt = class extends C {
    constructor() {
      super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (s) => {
        try {
          const e = s.create({}, {}, false);
          if (s.pasteConfig === false) {
            this.exceptionList.push(s.name);
            return;
          }
          if (!D(e.onPaste))
            return;
          this.getTagsConfig(s), this.getFilesConfig(s), this.getPatternsConfig(s);
        } catch (e) {
          L(
            `Paste handling for \xAB${s.name}\xBB Tool hasn't been set up because of the error`,
            "warn",
            e
          );
        }
      }, this.handlePasteEvent = async (s) => {
        const { BlockManager: e, Toolbar: t } = this.Editor, o3 = e.setCurrentBlockByChildNode(s.target);
        !o3 || this.isNativeBehaviour(s.target) && !s.clipboardData.types.includes("Files") || o3 && this.exceptionList.includes(o3.name) || (s.preventDefault(), this.processDataTransfer(s.clipboardData), e.clearFocused(), t.close());
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
    toggleReadOnly(s) {
      s ? this.unsetCallback() : this.setCallback();
    }
    /**
     * Handle pasted or dropped data transfer object
     *
     * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
     * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
     */
    async processDataTransfer(s, e = false) {
      const { Tools: t } = this.Editor, o3 = s.types;
      if ((o3.includes ? o3.includes("Files") : o3.contains("Files")) && !V(this.toolsFiles)) {
        await this.processFiles(s.files);
        return;
      }
      const n = s.getData(this.MIME_TYPE), r = s.getData("text/plain");
      let a3 = s.getData("text/html");
      if (n)
        try {
          this.insertEditorJSData(JSON.parse(n));
          return;
        } catch {
        }
      e && r.trim() && a3.trim() && (a3 = "<p>" + (a3.trim() ? a3 : r) + "</p>");
      const l2 = Object.keys(this.toolsTags).reduce((h2, f2) => (h2[f2.toLowerCase()] = this.toolsTags[f2].sanitizationConfig ?? {}, h2), {}), c3 = Object.assign({}, l2, t.getAllInlineToolsSanitizeConfig(), { br: {} }), u3 = Z(a3, c3);
      !u3.trim() || u3.trim() === r || !d.isHTMLString(u3) ? await this.processText(r) : await this.processText(u3, true);
    }
    /**
     * Process pasted text and divide them into Blocks
     *
     * @param {string} data - text to process. Can be HTML or plain.
     * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
     */
    async processText(s, e = false) {
      const { Caret: t, BlockManager: o3 } = this.Editor, i2 = e ? this.processHTML(s) : this.processPlain(s);
      if (!i2.length)
        return;
      if (i2.length === 1) {
        i2[0].isBlock ? this.processSingleBlock(i2.pop()) : this.processInlinePaste(i2.pop());
        return;
      }
      const r = o3.currentBlock && o3.currentBlock.tool.isDefault && o3.currentBlock.isEmpty;
      i2.map(
        async (a3, l2) => this.insertBlock(a3, l2 === 0 && r)
      ), o3.currentBlock && t.setToBlock(o3.currentBlock, t.positions.END);
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
      const s = this.Editor.Tools.blockTools;
      Array.from(s.values()).forEach(this.processTool);
    }
    /**
     * Get tags name list from either tag name or sanitization config.
     *
     * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
     * @returns {string[]} array of tags.
     */
    collectTagNames(s) {
      return J(s) ? [s] : z(s) ? Object.keys(s) : [];
    }
    /**
     * Get tags to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getTagsConfig(s) {
      if (s.pasteConfig === false)
        return;
      const e = s.pasteConfig.tags || [], t = [];
      e.forEach((o3) => {
        const i2 = this.collectTagNames(o3);
        t.push(...i2), i2.forEach((n) => {
          if (Object.prototype.hasOwnProperty.call(this.toolsTags, n)) {
            L(
              `Paste handler for \xAB${s.name}\xBB Tool on \xAB${n}\xBB tag is skipped because it is already used by \xAB${this.toolsTags[n].tool.name}\xBB Tool.`,
              "warn"
            );
            return;
          }
          const r = z(o3) ? o3[n] : null;
          this.toolsTags[n.toUpperCase()] = {
            tool: s,
            sanitizationConfig: r
          };
        });
      }), this.tagsByTool[s.name] = t.map((o3) => o3.toUpperCase());
    }
    /**
     * Get files` types and extensions to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getFilesConfig(s) {
      if (s.pasteConfig === false)
        return;
      const { files: e = {} } = s.pasteConfig;
      let { extensions: t, mimeTypes: o3 } = e;
      !t && !o3 || (t && !Array.isArray(t) && (L(`\xABextensions\xBB property of the onDrop config for \xAB${s.name}\xBB Tool should be an array`), t = []), o3 && !Array.isArray(o3) && (L(`\xABmimeTypes\xBB property of the onDrop config for \xAB${s.name}\xBB Tool should be an array`), o3 = []), o3 && (o3 = o3.filter((i2) => Ft(i2) ? true : (L(`MIME type value \xAB${i2}\xBB for the \xAB${s.name}\xBB Tool is not a valid MIME type`, "warn"), false))), this.toolsFiles[s.name] = {
        extensions: t || [],
        mimeTypes: o3 || []
      });
    }
    /**
     * Get RegExp patterns to substitute by Tool
     *
     * @param tool - BlockTool object
     */
    getPatternsConfig(s) {
      s.pasteConfig === false || !s.pasteConfig.patterns || V(s.pasteConfig.patterns) || Object.entries(s.pasteConfig.patterns).forEach(([e, t]) => {
        t instanceof RegExp || L(
          `Pattern ${t} for \xAB${s.name}\xBB Tool is skipped because it should be a Regexp instance.`,
          "warn"
        ), this.toolsPatterns.push({
          key: e,
          pattern: t,
          tool: s
        });
      });
    }
    /**
     * Check if browser behavior suits better
     *
     * @param {EventTarget} element - element where content has been pasted
     * @returns {boolean}
     */
    isNativeBehaviour(s) {
      return d.isNativeInput(s);
    }
    /**
     * Get files from data transfer object and insert related Tools
     *
     * @param {FileList} items - pasted or dropped items
     */
    async processFiles(s) {
      const { BlockManager: e } = this.Editor;
      let t;
      t = await Promise.all(
        Array.from(s).map((n) => this.processFile(n))
      ), t = t.filter((n) => !!n);
      const i2 = e.currentBlock.tool.isDefault && e.currentBlock.isEmpty;
      t.forEach(
        (n, r) => {
          e.paste(n.type, n.event, r === 0 && i2);
        }
      );
    }
    /**
     * Get information about file and find Tool to handle it
     *
     * @param {File} file - file to process
     */
    async processFile(s) {
      const e = Pt(s), t = Object.entries(this.toolsFiles).find(([n, { mimeTypes: r, extensions: a3 }]) => {
        const [l2, c3] = s.type.split("/"), u3 = a3.find((f2) => f2.toLowerCase() === e.toLowerCase()), h2 = r.find((f2) => {
          const [k2, p2] = f2.split("/");
          return k2 === l2 && (p2 === c3 || p2 === "*");
        });
        return !!u3 || !!h2;
      });
      if (!t)
        return;
      const [o3] = t;
      return {
        event: this.composePasteEvent("file", {
          file: s
        }),
        type: o3
      };
    }
    /**
     * Split HTML string to blocks and return it as array of Block data
     *
     * @param {string} innerHTML - html string to process
     * @returns {PasteData[]}
     */
    processHTML(s) {
      const { Tools: e } = this.Editor, t = d.make("DIV");
      return t.innerHTML = s, this.getNodes(t).map((i2) => {
        let n, r = e.defaultTool, a3 = false;
        switch (i2.nodeType) {
          case Node.DOCUMENT_FRAGMENT_NODE:
            n = d.make("div"), n.appendChild(i2);
            break;
          case Node.ELEMENT_NODE:
            n = i2, a3 = true, this.toolsTags[n.tagName] && (r = this.toolsTags[n.tagName].tool);
            break;
        }
        const { tags: l2 } = r.pasteConfig || { tags: [] }, c3 = l2.reduce((f2, k2) => (this.collectTagNames(k2).forEach((v) => {
          const A = z(k2) ? k2[v] : null;
          f2[v.toLowerCase()] = A || {};
        }), f2), {}), u3 = Object.assign({}, c3, r.baseSanitizeConfig);
        if (n.tagName.toLowerCase() === "table") {
          const f2 = Z(n.outerHTML, u3);
          n = d.make("div", void 0, {
            innerHTML: f2
          }).firstChild;
        } else
          n.innerHTML = Z(n.innerHTML, u3);
        const h2 = this.composePasteEvent("tag", {
          data: n
        });
        return {
          content: n,
          isBlock: a3,
          tool: r.name,
          event: h2
        };
      }).filter((i2) => {
        const n = d.isEmpty(i2.content), r = d.isSingleTag(i2.content);
        return !n || r;
      });
    }
    /**
     * Split plain text by new line symbols and return it as array of Block data
     *
     * @param {string} plain - string to process
     * @returns {PasteData[]}
     */
    processPlain(s) {
      const { defaultBlock: e } = this.config;
      if (!s)
        return [];
      const t = e;
      return s.split(/\r?\n/).filter((o3) => o3.trim()).map((o3) => {
        const i2 = d.make("div");
        i2.textContent = o3;
        const n = this.composePasteEvent("tag", {
          data: i2
        });
        return {
          content: i2,
          tool: t,
          isBlock: false,
          event: n
        };
      });
    }
    /**
     * Process paste of single Block tool content
     *
     * @param {PasteData} dataToInsert - data of Block to insert
     */
    async processSingleBlock(s) {
      const { Caret: e, BlockManager: t } = this.Editor, { currentBlock: o3 } = t;
      if (!o3 || s.tool !== o3.name || !d.containsOnlyInlineElements(s.content.innerHTML)) {
        this.insertBlock(s, (o3 == null ? void 0 : o3.tool.isDefault) && o3.isEmpty);
        return;
      }
      e.insertContentAtCaretPosition(s.content.innerHTML);
    }
    /**
     * Process paste to single Block:
     * 1. Find patterns` matches
     * 2. Insert new block if it is not the same type as current one
     * 3. Just insert text if there is no substitutions
     *
     * @param {PasteData} dataToInsert - data of Block to insert
     */
    async processInlinePaste(s) {
      const { BlockManager: e, Caret: t } = this.Editor, { content: o3 } = s;
      if (e.currentBlock && e.currentBlock.tool.isDefault && o3.textContent.length < wt.PATTERN_PROCESSING_MAX_LENGTH) {
        const n = await this.processPattern(o3.textContent);
        if (n) {
          const r = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty, a3 = e.paste(n.tool, n.event, r);
          t.setToBlock(a3, t.positions.END);
          return;
        }
      }
      if (e.currentBlock && e.currentBlock.currentInput) {
        const n = e.currentBlock.tool.baseSanitizeConfig;
        document.execCommand(
          "insertHTML",
          false,
          Z(o3.innerHTML, n)
        );
      } else
        this.insertBlock(s);
    }
    /**
     * Get patterns` matches
     *
     * @param {string} text - text to process
     * @returns {Promise<{event: PasteEvent, tool: string}>}
     */
    async processPattern(s) {
      const e = this.toolsPatterns.find((o3) => {
        const i2 = o3.pattern.exec(s);
        return i2 ? s === i2.shift() : false;
      });
      return e ? {
        event: this.composePasteEvent("pattern", {
          key: e.key,
          data: s
        }),
        tool: e.tool.name
      } : void 0;
    }
    /**
     * Insert pasted Block content to Editor
     *
     * @param {PasteData} data - data to insert
     * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
     * @returns {void}
     */
    insertBlock(s, e = false) {
      const { BlockManager: t, Caret: o3 } = this.Editor, { currentBlock: i2 } = t;
      let n;
      if (e && i2 && i2.isEmpty) {
        n = t.paste(s.tool, s.event, true), o3.setToBlock(n, o3.positions.END);
        return;
      }
      n = t.paste(s.tool, s.event), o3.setToBlock(n, o3.positions.END);
    }
    /**
     * Insert data passed as application/x-editor-js JSON
     *
     * @param {Array} blocks — Blocks' data to insert
     * @returns {void}
     */
    insertEditorJSData(s) {
      const { BlockManager: e, Caret: t, Tools: o3 } = this.Editor;
      ut(
        s,
        (n) => o3.blockTools.get(n).sanitizeConfig
      ).forEach(({ tool: n, data: r }, a3) => {
        let l2 = false;
        a3 === 0 && (l2 = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty);
        const c3 = e.insert({
          tool: n,
          data: r,
          replace: l2
        });
        t.setToBlock(c3, t.positions.END);
      });
    }
    /**
     * Fetch nodes from Element node
     *
     * @param {Node} node - current node
     * @param {Node[]} nodes - processed nodes
     * @param {Node} destNode - destination node
     */
    processElementNode(s, e, t) {
      const o3 = Object.keys(this.toolsTags), i2 = s, { tool: n } = this.toolsTags[i2.tagName] || {}, r = this.tagsByTool[n == null ? void 0 : n.name] || [], a3 = o3.includes(i2.tagName), l2 = d.blockElements.includes(i2.tagName.toLowerCase()), c3 = Array.from(i2.children).some(
        ({ tagName: h2 }) => o3.includes(h2) && !r.includes(h2)
      ), u3 = Array.from(i2.children).some(
        ({ tagName: h2 }) => d.blockElements.includes(h2.toLowerCase())
      );
      if (!l2 && !a3 && !c3)
        return t.appendChild(i2), [...e, t];
      if (a3 && !c3 || l2 && !u3 && !c3)
        return [...e, t, i2];
    }
    /**
     * Recursively divide HTML string to two types of nodes:
     * 1. Block element
     * 2. Document Fragments contained text and markup tags like a, b, i etc.
     *
     * @param {Node} wrapper - wrapper of paster HTML content
     * @returns {Node[]}
     */
    getNodes(s) {
      const e = Array.from(s.childNodes);
      let t;
      const o3 = (i2, n) => {
        if (d.isEmpty(n) && !d.isSingleTag(n))
          return i2;
        const r = i2[i2.length - 1];
        let a3 = new DocumentFragment();
        switch (r && d.isFragment(r) && (a3 = i2.pop()), n.nodeType) {
          case Node.ELEMENT_NODE:
            if (t = this.processElementNode(n, i2, a3), t)
              return t;
            break;
          case Node.TEXT_NODE:
            return a3.appendChild(n), [...i2, a3];
          default:
            return [...i2, a3];
        }
        return [...i2, ...Array.from(n.childNodes).reduce(o3, [])];
      };
      return e.reduce(o3, []);
    }
    /**
     * Compose paste event with passed type and detail
     *
     * @param {string} type - event type
     * @param {PasteEventDetail} detail - event detail
     */
    composePasteEvent(s, e) {
      return new CustomEvent(s, {
        detail: e
      });
    }
  };
  var yt = wt;
  yt.PATTERN_PROCESSING_MAX_LENGTH = 450;
  var oi = class extends C {
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
      const { Tools: e } = this.Editor, { blockTools: t } = e, o3 = [];
      Array.from(t.entries()).forEach(([i2, n]) => {
        n.isReadOnlySupported || o3.push(i2);
      }), this.toolsDontSupportReadOnly = o3, this.config.readOnly && o3.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
    }
    /**
     * Set read-only mode or toggle current state
     * Call all Modules `toggleReadOnly` method and re-render Editor
     *
     * @param {boolean} state - (optional) read-only state or toggle
     */
    async toggle(e = !this.readOnlyEnabled) {
      e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
      const t = this.readOnlyEnabled;
      this.readOnlyEnabled = e;
      for (const i2 in this.Editor)
        this.Editor[i2].toggleReadOnly && this.Editor[i2].toggleReadOnly(e);
      if (t === e)
        return this.readOnlyEnabled;
      const o3 = await this.Editor.Saver.save();
      return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(o3.blocks), this.readOnlyEnabled;
    }
    /**
     * Throws an error about tools which don't support read-only mode
     */
    throwCriticalError() {
      throw new lt(
        `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
      );
    }
  };
  var fe = class _fe extends C {
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
      const o3 = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
      o3.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = false, this.clearSelection(), this.stackOfSelected = []);
      const n = [
        `.${F.CSS.content}`,
        `.${this.Editor.Toolbar.CSS.toolbar}`,
        `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
      ], r = o3.closest("." + this.Editor.UI.CSS.editorWrapper), a3 = n.some((l2) => !!o3.closest(l2));
      !r || a3 || (this.mousedown = true, this.startX = e, this.startY = t);
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
      }, false), this.listeners.on(document.body, "mousemove", Ce((t) => {
        this.processMouseMove(t);
      }, 10), {
        passive: true
      }), this.listeners.on(document.body, "mouseleave", () => {
        this.processMouseLeave();
      }), this.listeners.on(window, "scroll", Ce((t) => {
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
      const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o3 = d.make("div", _fe.CSS.overlay, {}), i2 = d.make("div", _fe.CSS.overlayContainer, {}), n = d.make("div", _fe.CSS.rect, {});
      return i2.appendChild(n), o3.appendChild(i2), t.appendChild(o3), this.overlayRectangle = n, {
        container: t,
        overlay: o3
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
      const { rightPos: t, leftPos: o3, index: i2 } = this.genInfoForMouseSelection(), n = this.startX > t && this.mouseX > t, r = this.startX < o3 && this.mouseX < o3;
      this.rectCrossesBlocks = !(n || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = false, this.isRectSelectionActivated = true, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i2 !== void 0 && (this.trySelectNextBlock(i2), this.inverseSelection(), m.get().removeAllRanges());
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
        for (const o3 of this.stackOfSelected)
          this.Editor.BlockSelection.selectBlockByIndex(o3);
      if (!this.rectCrossesBlocks && t)
        for (const o3 of this.stackOfSelected)
          this.Editor.BlockSelection.unSelectBlockByIndex(o3);
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
      const t = document.body.offsetWidth / 2, o3 = this.mouseY - window.pageYOffset, i2 = document.elementFromPoint(t, o3), n = this.Editor.BlockManager.getBlockByChildNode(i2);
      let r;
      n !== void 0 && (r = this.Editor.BlockManager.blocks.findIndex((h2) => h2.holder === n.holder));
      const a3 = this.Editor.BlockManager.lastBlock.holder.querySelector("." + F.CSS.content), l2 = Number.parseInt(window.getComputedStyle(a3).width, 10) / 2, c3 = t - l2, u3 = t + l2;
      return {
        index: r,
        leftPos: c3,
        rightPos: u3
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
      const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o3 = this.stackOfSelected.length, i2 = 1, n = -1, r = 0;
      if (t)
        return;
      const a3 = this.stackOfSelected[o3 - 1] - this.stackOfSelected[o3 - 2] > 0;
      let l2 = r;
      o3 > 1 && (l2 = a3 ? i2 : n);
      const c3 = e > this.stackOfSelected[o3 - 1] && l2 === i2, u3 = e < this.stackOfSelected[o3 - 1] && l2 === n, f2 = !(c3 || u3 || l2 === r);
      if (!f2 && (e > this.stackOfSelected[o3 - 1] || this.stackOfSelected[o3 - 1] === void 0)) {
        let v = this.stackOfSelected[o3 - 1] + 1 || e;
        for (v; v <= e; v++)
          this.addBlockInSelection(v);
        return;
      }
      if (!f2 && e < this.stackOfSelected[o3 - 1]) {
        for (let v = this.stackOfSelected[o3 - 1] - 1; v >= e; v--)
          this.addBlockInSelection(v);
        return;
      }
      if (!f2)
        return;
      let k2 = o3 - 1, p2;
      for (e > this.stackOfSelected[o3 - 1] ? p2 = () => e > this.stackOfSelected[k2] : p2 = () => e < this.stackOfSelected[k2]; p2(); )
        this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[k2]), this.stackOfSelected.pop(), k2--;
    }
  };
  var ii = class extends C {
    /**
     * Renders passed blocks as one batch
     *
     * @param blocksData - blocks to render
     */
    async render(e) {
      return new Promise((t) => {
        const { Tools: o3, BlockManager: i2 } = this.Editor, n = e.map(({ type: r, data: a3, tunes: l2, id: c3 }) => {
          o3.available.has(r) === false && (K(`Tool \xAB${r}\xBB is not found. Check 'tools' property at the Editor.js config.`, "warn"), a3 = this.composeStubDataForTool(r, a3, c3), r = o3.stubTool);
          let u3;
          try {
            u3 = i2.composeBlock({
              id: c3,
              tool: r,
              data: a3,
              tunes: l2
            });
          } catch (h2) {
            L(`Block \xAB${r}\xBB skipped because of plugins error`, "error", {
              data: a3,
              error: h2
            }), a3 = this.composeStubDataForTool(r, a3, c3), r = o3.stubTool, u3 = i2.composeBlock({
              id: c3,
              tool: r,
              data: a3,
              tunes: l2
            });
          }
          return u3;
        });
        i2.insertMany(n), window.requestIdleCallback(() => {
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
    composeStubDataForTool(e, t, o3) {
      const { Tools: i2 } = this.Editor;
      let n = e;
      if (i2.unavailable.has(e)) {
        const r = i2.unavailable.get(e).toolbox;
        r !== void 0 && r[0].title !== void 0 && (n = r[0].title);
      }
      return {
        savedData: {
          id: o3,
          type: e,
          data: t
        },
        title: n
      };
    }
  };
  var ni = class extends C {
    /**
     * Composes new chain of Promises to fire them alternatelly
     *
     * @returns {OutputData}
     */
    async save() {
      const { BlockManager: e, Tools: t } = this.Editor, o3 = e.blocks, i2 = [];
      try {
        o3.forEach((a3) => {
          i2.push(this.getSavedData(a3));
        });
        const n = await Promise.all(i2), r = await ut(n, (a3) => t.blockTools.get(a3).sanitizeConfig);
        return this.makeOutput(r);
      } catch (n) {
        K("Saving failed due to the Error %o", "error", n);
      }
    }
    /**
     * Saves and validates
     *
     * @param {Block} block - Editor's Tool
     * @returns {ValidatedData} - Tool's validated data
     */
    async getSavedData(e) {
      const t = await e.save(), o3 = t && await e.validate(t.data);
      return {
        ...t,
        isValid: o3
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
      return e.forEach(({ id: o3, tool: i2, data: n, tunes: r, isValid: a3 }) => {
        if (!a3) {
          L(`Block \xAB${i2}\xBB skipped because saved data is invalid`);
          return;
        }
        if (i2 === this.Editor.Tools.stubTool) {
          t.push(n);
          return;
        }
        const l2 = {
          id: o3,
          type: i2,
          data: n,
          ...!V(r) && {
            tunes: r
          }
        };
        t.push(l2);
      }), {
        time: +/* @__PURE__ */ new Date(),
        blocks: t,
        version: "2.28.2"
      };
    }
  };
  var Ne = {};
  var si = {
    get exports() {
      return Ne;
    },
    set exports(s) {
      Ne = s;
    }
  };
  (function(s, e) {
    (function(t, o3) {
      s.exports = o3();
    })(window, function() {
      return function(t) {
        var o3 = {};
        function i2(n) {
          if (o3[n])
            return o3[n].exports;
          var r = o3[n] = { i: n, l: false, exports: {} };
          return t[n].call(r.exports, r, r.exports, i2), r.l = true, r.exports;
        }
        return i2.m = t, i2.c = o3, i2.d = function(n, r, a3) {
          i2.o(n, r) || Object.defineProperty(n, r, { enumerable: true, get: a3 });
        }, i2.r = function(n) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: true });
        }, i2.t = function(n, r) {
          if (1 & r && (n = i2(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
            return n;
          var a3 = /* @__PURE__ */ Object.create(null);
          if (i2.r(a3), Object.defineProperty(a3, "default", { enumerable: true, value: n }), 2 & r && typeof n != "string")
            for (var l2 in n)
              i2.d(a3, l2, function(c3) {
                return n[c3];
              }.bind(null, l2));
          return a3;
        }, i2.n = function(n) {
          var r = n && n.__esModule ? function() {
            return n.default;
          } : function() {
            return n;
          };
          return i2.d(r, "a", r), r;
        }, i2.o = function(n, r) {
          return Object.prototype.hasOwnProperty.call(n, r);
        }, i2.p = "/", i2(i2.s = 4);
      }([function(t, o3, i2) {
        var n = i2(1), r = i2(2);
        typeof (r = r.__esModule ? r.default : r) == "string" && (r = [[t.i, r, ""]]);
        var a3 = { insert: "head", singleton: false };
        n(r, a3), t.exports = r.locals || {};
      }, function(t, o3, i2) {
        var n, r = function() {
          return n === void 0 && (n = !!(window && document && document.all && !window.atob)), n;
        }, a3 = function() {
          var y = {};
          return function(x) {
            if (y[x] === void 0) {
              var w2 = document.querySelector(x);
              if (window.HTMLIFrameElement && w2 instanceof window.HTMLIFrameElement)
                try {
                  w2 = w2.contentDocument.head;
                } catch {
                  w2 = null;
                }
              y[x] = w2;
            }
            return y[x];
          };
        }(), l2 = [];
        function c3(y) {
          for (var x = -1, w2 = 0; w2 < l2.length; w2++)
            if (l2[w2].identifier === y) {
              x = w2;
              break;
            }
          return x;
        }
        function u3(y, x) {
          for (var w2 = {}, I = [], R = 0; R < y.length; R++) {
            var b = y[R], g3 = x.base ? b[0] + x.base : b[0], E = w2[g3] || 0, T = "".concat(g3, " ").concat(E);
            w2[g3] = E + 1;
            var O = c3(T), S = { css: b[1], media: b[2], sourceMap: b[3] };
            O !== -1 ? (l2[O].references++, l2[O].updater(S)) : l2.push({ identifier: T, updater: _(S, x), references: 1 }), I.push(T);
          }
          return I;
        }
        function h2(y) {
          var x = document.createElement("style"), w2 = y.attributes || {};
          if (w2.nonce === void 0) {
            var I = i2.nc;
            I && (w2.nonce = I);
          }
          if (Object.keys(w2).forEach(function(b) {
            x.setAttribute(b, w2[b]);
          }), typeof y.insert == "function")
            y.insert(x);
          else {
            var R = a3(y.insert || "head");
            if (!R)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            R.appendChild(x);
          }
          return x;
        }
        var f2, k2 = (f2 = [], function(y, x) {
          return f2[y] = x, f2.filter(Boolean).join(`
`);
        });
        function p2(y, x, w2, I) {
          var R = w2 ? "" : I.media ? "@media ".concat(I.media, " {").concat(I.css, "}") : I.css;
          if (y.styleSheet)
            y.styleSheet.cssText = k2(x, R);
          else {
            var b = document.createTextNode(R), g3 = y.childNodes;
            g3[x] && y.removeChild(g3[x]), g3.length ? y.insertBefore(b, g3[x]) : y.appendChild(b);
          }
        }
        function v(y, x, w2) {
          var I = w2.css, R = w2.media, b = w2.sourceMap;
          if (R ? y.setAttribute("media", R) : y.removeAttribute("media"), b && btoa && (I += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(b)))), " */")), y.styleSheet)
            y.styleSheet.cssText = I;
          else {
            for (; y.firstChild; )
              y.removeChild(y.firstChild);
            y.appendChild(document.createTextNode(I));
          }
        }
        var A = null, N = 0;
        function _(y, x) {
          var w2, I, R;
          if (x.singleton) {
            var b = N++;
            w2 = A || (A = h2(x)), I = p2.bind(null, w2, b, false), R = p2.bind(null, w2, b, true);
          } else
            w2 = h2(x), I = v.bind(null, w2, x), R = function() {
              (function(g3) {
                if (g3.parentNode === null)
                  return false;
                g3.parentNode.removeChild(g3);
              })(w2);
            };
          return I(y), function(g3) {
            if (g3) {
              if (g3.css === y.css && g3.media === y.media && g3.sourceMap === y.sourceMap)
                return;
              I(y = g3);
            } else
              R();
          };
        }
        t.exports = function(y, x) {
          (x = x || {}).singleton || typeof x.singleton == "boolean" || (x.singleton = r());
          var w2 = u3(y = y || [], x);
          return function(I) {
            if (I = I || [], Object.prototype.toString.call(I) === "[object Array]") {
              for (var R = 0; R < w2.length; R++) {
                var b = c3(w2[R]);
                l2[b].references--;
              }
              for (var g3 = u3(I, x), E = 0; E < w2.length; E++) {
                var T = c3(w2[E]);
                l2[T].references === 0 && (l2[T].updater(), l2.splice(T, 1));
              }
              w2 = g3;
            }
          };
        };
      }, function(t, o3, i2) {
        (o3 = i2(3)(false)).push([t.i, `.ce-paragraph {
    line-height: 1.6em;
    outline: none;
}

.ce-paragraph[data-placeholder]:empty::before{
  content: attr(data-placeholder);
  color: #707684;
  font-weight: normal;
  opacity: 0;
}

/** Show placeholder at the first paragraph if Editor is empty */
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {
  opacity: 1;
}

.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {
  opacity: 0;
}

.ce-paragraph p:first-of-type{
    margin-top: 0;
}

.ce-paragraph p:last-of-type{
    margin-bottom: 0;
}
`, ""]), t.exports = o3;
      }, function(t, o3, i2) {
        t.exports = function(n) {
          var r = [];
          return r.toString = function() {
            return this.map(function(a3) {
              var l2 = function(c3, u3) {
                var h2 = c3[1] || "", f2 = c3[3];
                if (!f2)
                  return h2;
                if (u3 && typeof btoa == "function") {
                  var k2 = (v = f2, A = btoa(unescape(encodeURIComponent(JSON.stringify(v)))), N = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A), "/*# ".concat(N, " */")), p2 = f2.sources.map(function(_) {
                    return "/*# sourceURL=".concat(f2.sourceRoot || "").concat(_, " */");
                  });
                  return [h2].concat(p2).concat([k2]).join(`
`);
                }
                var v, A, N;
                return [h2].join(`
`);
              }(a3, n);
              return a3[2] ? "@media ".concat(a3[2], " {").concat(l2, "}") : l2;
            }).join("");
          }, r.i = function(a3, l2, c3) {
            typeof a3 == "string" && (a3 = [[null, a3, ""]]);
            var u3 = {};
            if (c3)
              for (var h2 = 0; h2 < this.length; h2++) {
                var f2 = this[h2][0];
                f2 != null && (u3[f2] = true);
              }
            for (var k2 = 0; k2 < a3.length; k2++) {
              var p2 = [].concat(a3[k2]);
              c3 && u3[p2[0]] || (l2 && (p2[2] ? p2[2] = "".concat(l2, " and ").concat(p2[2]) : p2[2] = l2), r.push(p2));
            }
          }, r;
        };
      }, function(t, o3, i2) {
        i2.r(o3), i2.d(o3, "default", function() {
          return a3;
        }), i2(0);
        function n(l2, c3) {
          for (var u3 = 0; u3 < c3.length; u3++) {
            var h2 = c3[u3];
            h2.enumerable = h2.enumerable || false, h2.configurable = true, "value" in h2 && (h2.writable = true), Object.defineProperty(l2, h2.key, h2);
          }
        }
        function r(l2, c3, u3) {
          return c3 && n(l2.prototype, c3), u3 && n(l2, u3), l2;
        }
        var a3 = function() {
          function l2(c3) {
            var u3 = c3.data, h2 = c3.config, f2 = c3.api, k2 = c3.readOnly;
            (function(p2, v) {
              if (!(p2 instanceof v))
                throw new TypeError("Cannot call a class as a function");
            })(this, l2), this.api = f2, this.readOnly = k2, this._CSS = { block: this.api.styles.block, wrapper: "ce-paragraph" }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = h2.placeholder ? h2.placeholder : l2.DEFAULT_PLACEHOLDER, this._data = {}, this._element = null, this._preserveBlank = h2.preserveBlank !== void 0 && h2.preserveBlank, this.data = u3;
          }
          return r(l2, null, [{ key: "DEFAULT_PLACEHOLDER", get: function() {
            return "";
          } }]), r(l2, [{ key: "onKeyUp", value: function(c3) {
            c3.code !== "Backspace" && c3.code !== "Delete" || this._element.textContent === "" && (this._element.innerHTML = "");
          } }, { key: "drawView", value: function() {
            var c3 = document.createElement("DIV");
            return c3.classList.add(this._CSS.wrapper, this._CSS.block), c3.contentEditable = false, c3.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (c3.contentEditable = true, c3.addEventListener("keyup", this.onKeyUp)), c3;
          } }, { key: "render", value: function() {
            return this._element === null && (this._element = this.drawView()), this.hydrate(), this._element;
          } }, { key: "merge", value: function(c3) {
            var u3 = { text: this.data.text + c3.text };
            this.data = u3;
          } }, { key: "validate", value: function(c3) {
            return !(c3.text.trim() === "" && !this._preserveBlank);
          } }, { key: "save", value: function(c3) {
            return { text: c3.innerHTML };
          } }, { key: "onPaste", value: function(c3) {
            var u3 = { text: c3.detail.data.innerHTML };
            this.data = u3;
          } }, { key: "hydrate", value: function() {
            var c3 = this;
            window.requestAnimationFrame(function() {
              c3._element.innerHTML = c3._data.text || "";
            });
          } }, { key: "data", get: function() {
            if (this._element !== null) {
              var c3 = this._element.innerHTML;
              this._data.text = c3;
            }
            return this._data;
          }, set: function(c3) {
            this._data = c3 || {}, this._element !== null && this.hydrate();
          } }], [{ key: "conversionConfig", get: function() {
            return { export: "text", import: "text" };
          } }, { key: "sanitize", get: function() {
            return { text: { br: true } };
          } }, { key: "isReadOnlySupported", get: function() {
            return true;
          } }, { key: "pasteConfig", get: function() {
            return { tags: ["P"] };
          } }, { key: "toolbox", get: function() {
            return { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>', title: "Text" };
          } }]), l2;
        }();
      }]).default;
    });
  })(si);
  var ri = /* @__PURE__ */ xe(Ne);
  var We = class {
    constructor() {
      this.commandName = "bold", this.CSS = {
        button: "ce-inline-tool",
        buttonActive: "ce-inline-tool--active",
        buttonModifier: "ce-inline-tool--bold"
      }, this.nodes = {
        button: void 0
      };
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
      return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = So, this.nodes.button;
    }
    /**
     * Wrap range with <b> tag
     */
    surround() {
      document.execCommand(this.commandName);
    }
    /**
     * Check selection and set activated state to button if there are <b> tag
     *
     * @returns {boolean}
     */
    checkState() {
      const e = document.queryCommandState(this.commandName);
      return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
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
  We.isInline = true;
  We.title = "Bold";
  var Ye = class {
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
      return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Oo, this.nodes.button;
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
  Ye.isInline = true;
  Ye.title = "Italic";
  var Ke = class {
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
      }, this.inputOpened = false, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new m();
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
      return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Qe, this.nodes.button;
    }
    /**
     * Input for the link
     */
    renderActions() {
      return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
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
        this.nodes.button.innerHTML = Ro, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
        const t = e.getAttribute("href");
        this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
      } else
        this.nodes.button.innerHTML = Qe, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
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
        const t = new m();
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
        }), L("Incorrect Link pasted", "warn", t);
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
      const t = /^\/[^/\s]/.test(e), o3 = e.substring(0, 1) === "#", i2 = /^\/\/[^/\s]/.test(e);
      return !t && !o3 && !i2 && (e = "http://" + e), e;
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
  Ke.isInline = true;
  Ke.title = "Link";
  var Et = class {
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
      const e = d.make("div", this.CSS.wrapper), t = Do, o3 = d.make("div", this.CSS.info), i2 = d.make("div", this.CSS.title, {
        textContent: this.title
      }), n = d.make("div", this.CSS.subtitle, {
        textContent: this.subtitle
      });
      return e.innerHTML = t, o3.appendChild(i2), o3.appendChild(n), e.appendChild(o3), e;
    }
  };
  Et.isReadOnlySupported = true;
  var ai = class extends $e {
    constructor() {
      super(...arguments), this.type = ye.Inline;
    }
    /**
     * Returns title for Inline Tool if specified by user
     */
    get title() {
      return this.constructable[Ue.Title];
    }
    /**
     * Constructs new InlineTool instance from constructable
     */
    create() {
      return new this.constructable({
        api: this.api.getMethodsForTool(this),
        config: this.settings
      });
    }
  };
  var li = class extends $e {
    constructor() {
      super(...arguments), this.type = ye.Tune;
    }
    /**
     * Constructs new BlockTune instance from constructable
     *
     * @param data - Tune data
     * @param block - Block API object
     */
    create(e, t) {
      return new this.constructable({
        api: this.api.getMethodsForTool(this),
        config: this.settings,
        block: t,
        data: e
      });
    }
  };
  var U = class _U extends Map {
    /**
     * Returns Block Tools collection
     */
    get blockTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
      return new _U(e);
    }
    /**
     * Returns Inline Tools collection
     */
    get inlineTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
      return new _U(e);
    }
    /**
     * Returns Block Tunes collection
     */
    get blockTunes() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
      return new _U(e);
    }
    /**
     * Returns internal Tools collection
     */
    get internalTools() {
      const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
      return new _U(e);
    }
    /**
     * Returns Tools collection provided by user
     */
    get externalTools() {
      const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
      return new _U(e);
    }
  };
  var ci = Object.defineProperty;
  var di = Object.getOwnPropertyDescriptor;
  var Bt = (s, e, t, o3) => {
    for (var i2 = o3 > 1 ? void 0 : o3 ? di(e, t) : e, n = s.length - 1, r; n >= 0; n--)
      (r = s[n]) && (i2 = (o3 ? r(e, t, i2) : r(i2)) || i2);
    return o3 && i2 && ci(e, t, i2), i2;
  };
  var Xe = class extends $e {
    constructor() {
      super(...arguments), this.type = ye.Block, this.inlineTools = new U(), this.tunes = new U();
    }
    /**
     * Creates new Tool instance
     *
     * @param data - Tool data
     * @param block - BlockAPI for current Block
     * @param readOnly - True if Editor is in read-only mode
     */
    create(e, t, o3) {
      return new this.constructable({
        data: e,
        block: t,
        readOnly: o3,
        api: this.api.getMethodsForTool(this),
        config: this.settings
      });
    }
    /**
     * Returns true if read-only mode is supported by Tool
     */
    get isReadOnlySupported() {
      return this.constructable[se.IsReadOnlySupported] === true;
    }
    /**
     * Returns true if Tool supports linebreaks
     */
    get isLineBreaksEnabled() {
      return this.constructable[se.IsEnabledLineBreaks];
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
      const e = this.constructable[se.Toolbox], t = this.config[ke.Toolbox];
      if (!V(e) && t !== false)
        return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o3, i2) => {
          const n = e[i2];
          return n ? {
            ...n,
            ...o3
          } : o3;
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
      return this.constructable[se.ConversionConfig];
    }
    /**
     * Returns enabled inline tools for Tool
     */
    get enabledInlineTools() {
      return this.config[ke.EnabledInlineTools] || false;
    }
    /**
     * Returns enabled tunes for Tool
     */
    get enabledBlockTunes() {
      return this.config[ke.EnabledBlockTunes];
    }
    /**
     * Returns Tool paste configuration
     */
    get pasteConfig() {
      return this.constructable[se.PasteConfig] ?? {};
    }
    get sanitizeConfig() {
      const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
      if (V(e))
        return t;
      const o3 = {};
      for (const i2 in e)
        if (Object.prototype.hasOwnProperty.call(e, i2)) {
          const n = e[i2];
          z(n) ? o3[i2] = Object.assign({}, t, n) : o3[i2] = n;
        }
      return o3;
    }
    get baseSanitizeConfig() {
      const e = {};
      return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
    }
  };
  Bt([
    ce
  ], Xe.prototype, "sanitizeConfig", 1);
  Bt([
    ce
  ], Xe.prototype, "baseSanitizeConfig", 1);
  var hi = class {
    /**
     * @class
     * @param config - tools config
     * @param editorConfig - EditorJS config
     * @param api - EditorJS API module
     */
    constructor(e, t, o3) {
      this.api = o3, this.config = e, this.editorConfig = t;
    }
    /**
     * Returns Tool object based on it's type
     *
     * @param name - tool name
     */
    get(e) {
      const { class: t, isInternal: o3 = false, ...i2 } = this.config[e], n = this.getConstructor(t);
      return new n({
        name: e,
        constructable: t,
        config: i2,
        api: this.api,
        isDefault: e === this.editorConfig.defaultBlock,
        defaultPlaceholder: this.editorConfig.placeholder,
        isInternal: o3
      });
    }
    /**
     * Find appropriate Tool object constructor for Tool constructable
     *
     * @param constructable - Tools constructable
     */
    getConstructor(e) {
      switch (true) {
        case e[Ue.IsInline]:
          return ai;
        case e[xt.IsTune]:
          return li;
        default:
          return Xe;
      }
    }
  };
  var Tt = class {
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
        icon: ft,
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
      const o3 = t.holder, i2 = o3.getBoundingClientRect();
      let n = Math.abs(window.innerHeight - o3.offsetHeight);
      i2.top < window.innerHeight && (n = window.scrollY + o3.offsetHeight), window.scrollTo(0, n), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(true);
    }
  };
  Tt.isTune = true;
  var Ct = class {
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
        icon: Mo,
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
  Ct.isTune = true;
  var St = class {
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
        icon: Io,
        title: this.api.i18n.t("Move up"),
        onActivate: () => this.handleClick(),
        name: "move-up"
      };
    }
    /**
     * Move current block up
     */
    handleClick() {
      const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o3 = this.api.blocks.getBlockByIndex(e - 1);
      if (e === 0 || !t || !o3)
        throw new Error("Unable to move Block up since it is already the first");
      const i2 = t.holder, n = o3.holder, r = i2.getBoundingClientRect(), a3 = n.getBoundingClientRect();
      let l2;
      a3.top > 0 ? l2 = Math.abs(r.top) - Math.abs(a3.top) : l2 = Math.abs(r.top) + a3.height, window.scrollBy(0, -1 * l2), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(true);
    }
  };
  St.isTune = true;
  var ui = Object.defineProperty;
  var pi = Object.getOwnPropertyDescriptor;
  var fi = (s, e, t, o3) => {
    for (var i2 = o3 > 1 ? void 0 : o3 ? pi(e, t) : e, n = s.length - 1, r; n >= 0; n--)
      (r = s[n]) && (i2 = (o3 ? r(e, t, i2) : r(i2)) || i2);
    return o3 && i2 && ui(e, t, i2), i2;
  };
  var It = class extends C {
    constructor() {
      super(...arguments), this.stubTool = "stub", this.toolsAvailable = new U(), this.toolsUnavailable = new U();
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
      if (this.validateTools(), this.config.tools = Se({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
        throw Error("Can't start without tools");
      const e = this.prepareConfig();
      this.factory = new hi(e, this.config, this.Editor.API);
      const t = this.getListOfPrepareFunctions(e);
      if (t.length === 0)
        return Promise.resolve();
      await Dt(t, (o3) => {
        this.toolPrepareMethodSuccess(o3);
      }, (o3) => {
        this.toolPrepareMethodFallback(o3);
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
        D(e.reset) && await e.reset();
      });
    }
    /**
     * Returns internal tools
     * Includes Bold, Italic, Link and Paragraph
     */
    get internalTools() {
      return {
        bold: {
          class: We,
          isInternal: true
        },
        italic: {
          class: Ye,
          isInternal: true
        },
        link: {
          class: Ke,
          isInternal: true
        },
        paragraph: {
          class: ri,
          inlineToolbar: true,
          isInternal: true
        },
        stub: {
          class: Et,
          isInternal: true
        },
        moveUp: {
          class: St,
          isInternal: true
        },
        delete: {
          class: Ct,
          isInternal: true
        },
        moveDown: {
          class: Tt,
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
        const i2 = ["render", "surround", "checkState"].filter((n) => !t.create()[n]);
        if (i2.length) {
          L(
            `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
            "warn",
            i2
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
      return Object.entries(e).forEach(([o3, i2]) => {
        t.push({
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          function: D(i2.class.prepare) ? i2.class.prepare : () => {
          },
          data: {
            toolName: o3,
            config: i2.config
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
          e.inlineTools = new U(
            Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
          );
          return;
        }
        Array.isArray(e.enabledInlineTools) && (e.inlineTools = new U(
          e.enabledInlineTools.map((t) => [t, this.inlineTools.get(t)])
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
          const t = new U(
            e.enabledBlockTunes.map((o3) => [o3, this.blockTunes.get(o3)])
          );
          e.tunes = new U([...t, ...this.blockTunes.internalTools]);
          return;
        }
        if (Array.isArray(this.config.tunes)) {
          const t = new U(
            this.config.tunes.map((o3) => [o3, this.blockTunes.get(o3)])
          );
          e.tunes = new U([...t, ...this.blockTunes.internalTools]);
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
          if (!D(t) && !D(t.class))
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
        z(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
      return e;
    }
  };
  fi([
    ce
  ], It.prototype, "getAllInlineToolsSanitizeConfig", 1);
  var gi = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;-webkit-transform:translateX(-50%) translateY(8px) scale(.94);transform:translate(-50%) translateY(8px) scale(.94);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translate(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.94);transform:translate(-23px) translateY(8px) scale(.94)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translate(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.94);transform:translate(-100%) translateY(8px) scale(.94);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translate(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;border-radius:0;line-height:normal}.ce-inline-tool svg{width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:190px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px #c9c9cc7a;border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-conversion-tool__secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-conversion-tool__secondary-label{display:none}}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;line-height:32px}.ce-settings__button svg{width:20px;height:20px}@media (max-width: 650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover: hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{background:rgba(34,186,255,.08)!important}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button--disabled{cursor:not-allowed!important}.ce-settings__button--disabled{opacity:.3}.ce-settings__button--selected{color:#388ae5}@media (min-width: 651px){.codex-editor--narrow .ce-settings .ce-popover{right:0;left:auto;left:initial}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width: 651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button svg{width:20px;height:20px}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0px;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #e8e8eb;--color-shadow: rgba(13,20,33,.13);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #eff2f5;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:0;top:calc(100% + var(--offset-from-target));background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}.ce-popover--open-top{top:calc(-1 * (var(--offset-from-target) + var(--popover-height)))}@media (max-width: 650px){.ce-popover{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}.ce-popover .ce-popover__search{display:none}}.ce-popover__search,.ce-popover__custom-content:not(:empty){margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width: 651px){.ce-popover__custom-content:not(:empty){padding:0}}.ce-popover__custom-content--hidden{display:none}.ce-popover-item{--border-radius: 6px;--icon-size: 20px;--icon-size-mobile: 28px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px;color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{border-radius:5px;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px var(--color-border-icon);box-shadow:0 0 0 1px var(--color-border-icon);background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:var(--icon-size-mobile);height:var(--icon-size-mobile)}}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--active .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--disabled .ce-popover-item__icon{-webkit-box-shadow:0 0 0 1px var(--color-border-icon-disabled);box-shadow:0 0 0 1px var(--color-border-icon-disabled)}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--focused:not(.ce-popover-item--no-focus){-webkit-box-shadow:inset 0 0 0px 1px var(--color-shadow-item-focus);box-shadow:inset 0 0 0 1px var(--color-shadow-item-focus)}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}.ce-popover-item:hover .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__icon{color:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}.ce-popover-item--confirmation .ce-popover-item__icon,.ce-popover-item--active .ce-popover-item__icon,.ce-popover-item--focused .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}
`;
  var bi = class extends C {
    constructor() {
      super(...arguments), this.isMobile = false, this.contentRectCache = void 0, this.resizeDebouncer = Ht(() => {
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
      const e = this.nodes.wrapper.querySelector(`.${F.CSS.content}`);
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
      this.checkIsMobile(), this.make(), this.loadStyles();
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
      e ? this.disableModuleBindings() : this.enableModuleBindings();
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
      const { Toolbar: e, BlockSettings: t, InlineToolbar: o3, ConversionToolbar: i2 } = this.Editor;
      return t.opened || o3.opened || i2.opened || e.toolbox.opened;
    }
    /**
     * Check for some Flipper-buttons is under focus
     */
    get someFlipperButtonFocused() {
      return this.Editor.Toolbar.toolbox.hasFocus() ? true : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof G).some(([e, t]) => t.flipper.hasFocus());
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
      const { Toolbar: e, BlockSettings: t, InlineToolbar: o3, ConversionToolbar: i2 } = this.Editor;
      t.close(), o3.close(), i2.close(), e.toolbox.close();
    }
    /**
     * Check for mobile mode and cache a result
     */
    checkIsMobile() {
      this.isMobile = window.innerWidth < rt;
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
        textContent: gi.toString()
      });
      d.prepend(document.head, t);
    }
    /**
     * Bind events on the Editor.js interface
     */
    enableModuleBindings() {
      this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (e) => {
        this.redactorClicked(e);
      }, false), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (e) => {
        this.documentTouched(e);
      }, true), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (e) => {
        this.documentTouched(e);
      }, true), this.readOnlyMutableListeners.on(document, "keydown", (e) => {
        this.documentKeydown(e);
      }, true), this.readOnlyMutableListeners.on(document, "mousedown", (e) => {
        this.documentClicked(e);
      }, true), this.readOnlyMutableListeners.on(document, "selectionchange", () => {
        this.selectionChanged();
      }, true), this.readOnlyMutableListeners.on(window, "resize", () => {
        this.resizeDebouncer();
      }, {
        passive: true
      }), this.watchBlockHoveredEvents();
    }
    /**
     * Listen redactor mousemove to emit 'block-hovered' event
     */
    watchBlockHoveredEvents() {
      let e;
      this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Ce((t) => {
        const o3 = t.target.closest(".ce-block");
        this.Editor.BlockSelection.anyBlockSelected || o3 && e !== o3 && (e = o3, this.eventsDispatcher.emit(kt, {
          block: this.Editor.BlockManager.getBlockByChildNode(o3)
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
      this.contentRectCache = null, this.checkIsMobile();
    }
    /**
     * All keydowns on document
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    documentKeydown(e) {
      switch (e.keyCode) {
        case B.ENTER:
          this.enterPressed(e);
          break;
        case B.BACKSPACE:
        case B.DELETE:
          this.backspacePressed(e);
          break;
        case B.ESC:
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
      const { currentBlock: t } = this.Editor.BlockManager, o3 = e.target.closest(`.${this.CSS.editorWrapper}`), i2 = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
      if (t !== void 0 && o3 === null) {
        this.Editor.BlockEvents.keydown(e);
        return;
      }
      o3 || t && i2 || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
    }
    /**
     * @param {KeyboardEvent} event - keyboard event
     */
    backspacePressed(e) {
      const { BlockManager: t, BlockSelection: o3, Caret: i2 } = this.Editor;
      if (o3.anyBlockSelected && !m.isSelectionExists) {
        const n = t.removeSelectedBlocks();
        i2.setToBlock(t.insertDefaultBlockAtIndex(n, true), i2.positions.START), o3.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
      }
    }
    /**
     * Escape pressed
     * If some of Toolbar components are opened, then close it otherwise close Toolbar
     *
     * @param {Event} event - escape keydown event
     */
    escapePressed(e) {
      this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
    }
    /**
     * Enter pressed on document
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    enterPressed(e) {
      const { BlockManager: t, BlockSelection: o3 } = this.Editor, i2 = t.currentBlockIndex >= 0;
      if (o3.anyBlockSelected && !m.isSelectionExists) {
        o3.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
        return;
      }
      if (!this.someToolbarOpened && i2 && e.target.tagName === "BODY") {
        const n = this.Editor.BlockManager.insert();
        this.Editor.Caret.setToBlock(n), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.moveAndOpen(n);
      }
      this.Editor.BlockSelection.clearSelection(e);
    }
    /**
     * All clicks on document
     *
     * @param {MouseEvent} event - Click event
     */
    documentClicked(e) {
      if (!e.isTrusted)
        return;
      const t = e.target;
      this.nodes.holder.contains(t) || m.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
      const i2 = this.Editor.BlockSettings.nodes.wrapper.contains(t), n = this.Editor.Toolbar.nodes.settingsToggler.contains(t), r = i2 || n;
      if (this.Editor.BlockSettings.opened && !r) {
        this.Editor.BlockSettings.close();
        const a3 = this.Editor.BlockManager.getBlockByChildNode(t);
        this.Editor.Toolbar.moveAndOpen(a3);
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
        const o3 = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i2 = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
        t = document.elementFromPoint(o3, i2);
      }
      try {
        this.Editor.BlockManager.setCurrentBlockByChildNode(t), this.Editor.BlockManager.highlightCurrentNode();
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
      const { BlockSelection: t } = this.Editor;
      if (!m.isCollapsed)
        return;
      const o3 = () => {
        e.stopImmediatePropagation(), e.stopPropagation();
      }, i2 = e.target, n = e.metaKey || e.ctrlKey;
      if (d.isAnchor(i2) && n) {
        o3();
        const u3 = i2.getAttribute("href"), h2 = zt(u3);
        $t(h2);
        return;
      }
      const r = this.Editor.BlockManager.getBlockByIndex(-1), a3 = d.offset(r.holder).bottom, l2 = e.pageY;
      if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
      * If there is cross block selection started, target will be equal to redactor so we need additional check
      */
      !t.anyBlockSelected && /**
      * Prevent caret jumping (to last block) when clicking between blocks
      */
      a3 < l2) {
        o3();
        const { BlockManager: u3, Caret: h2, Toolbar: f2 } = this.Editor;
        (!u3.lastBlock.tool.isDefault || !u3.lastBlock.isEmpty) && u3.insertAtEnd(), h2.setToTheLastBlock(), f2.moveAndOpen(u3.lastBlock);
      }
    }
    /**
     * Handle selection changes on mobile devices
     * Uses for showing the Inline Toolbar
     */
    selectionChanged() {
      const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o3 = m.anchorElement;
      if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && m.get().removeAllRanges(), !o3) {
        m.range || this.Editor.InlineToolbar.close();
        return;
      }
      const i2 = o3.closest(`.${F.CSS.content}`) === null;
      if (i2 && (this.Editor.InlineToolbar.containsNode(o3) || this.Editor.InlineToolbar.close(), !(o3.dataset.inlineToolbar === "true")))
        return;
      this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o3);
      const n = i2 !== true;
      this.Editor.InlineToolbar.tryToShow(true, n);
    }
  };
  var mi = {
    // API Modules
    BlocksAPI: Qt,
    CaretAPI: eo,
    EventsAPI: to,
    I18nAPI: Pe,
    API: oo,
    InlineToolbarAPI: io,
    ListenersAPI: no,
    NotifierAPI: lo,
    ReadOnlyAPI: co,
    SanitizerAPI: mo,
    SaverAPI: ko,
    SelectionAPI: vo,
    StylesAPI: xo,
    ToolbarAPI: wo,
    TooltipAPI: Bo,
    UiAPI: To,
    // Toolbar Modules
    BlockSettings: jo,
    ConversionToolbar: Y,
    Toolbar: Ko,
    InlineToolbar: Xo,
    // Modules
    BlockEvents: Vo,
    BlockManager: Go,
    BlockSelection: Jo,
    Caret: ve,
    CrossBlockSelection: Qo,
    DragNDrop: ei,
    ModificationsObserver: ti,
    Paste: yt,
    ReadOnly: oi,
    RectangleSelection: fe,
    Renderer: ii,
    Saver: ni,
    Tools: It,
    UI: bi
  };
  var ki = class {
    /**
     * @param {EditorConfig} config - user configuration
     */
    constructor(e) {
      this.moduleInstances = {}, this.eventsDispatcher = new we();
      let t, o3;
      this.isReady = new Promise((i2, n) => {
        t = i2, o3 = n;
      }), Promise.resolve().then(async () => {
        this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
        const { BlockManager: i2, Caret: n, UI: r, ModificationsObserver: a3 } = this.moduleInstances;
        r.checkEmptiness(), a3.enable(), this.configuration.autofocus && (n.setToBlock(i2.blocks[0], n.positions.START), i2.highlightCurrentNode()), t();
      }).catch((i2) => {
        L(`Editor.js is not ready because of ${i2}`, "error"), o3(i2);
      });
    }
    /**
     * Setting for configuration
     *
     * @param {EditorConfig|string} config - Editor's config to set
     */
    set configuration(e) {
      var o3, i2;
      z(e) ? this.config = {
        ...e
      } : this.config = {
        holder: e
      }, Ie(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = it.VERBOSE), Nt(this.config.logLevel), Ie(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
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
      }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : true, (V(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || false, (o3 = this.config.i18n) != null && o3.messages && $.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i2 = this.config.i18n) == null ? void 0 : i2.direction) || "ltr";
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
      if (J(t) && !d.get(t))
        throw Error(`element with ID \xAB${t}\xBB is missing. Pass correct holder's ID.`);
      if (t && z(t) && !d.isElement(t))
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
        (t, o3) => t.then(async () => {
          try {
            await this.moduleInstances[o3].prepare();
          } catch (i2) {
            if (i2 instanceof lt)
              throw new Error(i2.message);
            L(`Module ${o3} was skipped because of %o`, "warn", i2);
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
      Object.entries(mi).forEach(([e, t]) => {
        try {
          this.moduleInstances[e] = new t({
            config: this.configuration,
            eventsDispatcher: this.eventsDispatcher
          });
        } catch (o3) {
          L("[constructModules]", `Module ${e} skipped because`, "error", o3);
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
      for (const o3 in this.moduleInstances)
        o3 !== e && (t[o3] = this.moduleInstances[o3]);
      return t;
    }
  };
  var vi = class {
    /** Editor version */
    static get version() {
      return "2.28.2";
    }
    /**
     * @param {EditorConfig|string|undefined} [configuration] - user configuration
     */
    constructor(e) {
      let t = () => {
      };
      z(e) && D(e.onReady) && (t = e.onReady);
      const o3 = new ki(e);
      this.isReady = o3.isReady.then(() => {
        this.exportAPI(o3), t();
      });
    }
    /**
     * Export external API methods
     *
     * @param {Core} editor — Editor's instance
     */
    exportAPI(e) {
      const t = ["configuration"], o3 = () => {
        Object.values(e.moduleInstances).forEach((n) => {
          D(n.destroy) && n.destroy(), n.listeners.removeAll();
        }), e = null;
        for (const n in this)
          Object.prototype.hasOwnProperty.call(this, n) && delete this[n];
        Object.setPrototypeOf(this, null);
      };
      t.forEach((n) => {
        this[n] = e[n];
      }), this.destroy = o3, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
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
      }).forEach(([n, r]) => {
        Object.entries(r).forEach(([a3, l2]) => {
          this[l2] = e.moduleInstances.API.methods[n][a3];
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
        e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}.ce-header[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;display:none;cursor:text}.ce-header[contentEditable=true][data-placeholder]:empty:before{display:block}.ce-header[contentEditable=true][data-placeholder]:empty:focus:before{display:none}")), document.head.appendChild(e);
      }
    } catch (t) {
      console.error("vite-plugin-css-injected-by-js", t);
    }
  })();
  var i = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>';
  var a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>';
  var l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>';
  var o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>';
  var h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>';
  var d2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>';
  var u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
  var c = class {
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {{data: HeaderData, config: HeaderConfig, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - Editor.js API
     *   readOnly - read only mode flag
     */
    constructor({ data: e, config: t, api: s, readOnly: r }) {
      this.api = s, this.readOnly = r, this._CSS = {
        block: this.api.styles.block,
        wrapper: "ce-header"
      }, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
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
      const t = {};
      return typeof e != "object" && (e = {}), t.text = e.text || "", t.level = parseInt(e.level) || this.defaultLevel.number, t;
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
        isActive: this.currentLevel.number === e.number
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
      const t = {
        text: this.data.text + e.text,
        level: this.data.level
      };
      this.data = t;
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
          svg: i
        },
        {
          number: 2,
          tag: "H2",
          svg: a
        },
        {
          number: 3,
          tag: "H3",
          svg: l
        },
        {
          number: 4,
          tag: "H4",
          svg: o
        },
        {
          number: 5,
          tag: "H5",
          svg: h
        },
        {
          number: 6,
          tag: "H6",
          svg: d2
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
      const t = e.detail.data;
      let s = this.defaultLevel.number;
      switch (t.tagName) {
        case "H1":
          s = 1;
          break;
        case "H2":
          s = 2;
          break;
        case "H3":
          s = 3;
          break;
        case "H4":
          s = 4;
          break;
        case "H5":
          s = 5;
          break;
        case "H6":
          s = 6;
          break;
      }
      this._settings.levels && (s = this._settings.levels.reduce((r, n) => Math.abs(n - s) < Math.abs(r - s) ? n : r)), this.data = {
        level: s,
        text: t.innerHTML
      };
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
        icon: u,
        title: "Heading"
      };
    }
  };

  // editorjs-bundle.js
  var import_raw = __toESM(require_bundle());

  // node_modules/@editorjs/checklist/dist/checklist.mjs
  (function() {
    "use strict";
    try {
      if (typeof document < "u") {
        var e = document.createElement("style");
        e.appendChild(document.createTextNode('.cdx-checklist{gap:6px;display:flex;flex-direction:column}.cdx-checklist__item{display:flex;box-sizing:content-box;align-items:flex-start}.cdx-checklist__item-text{outline:none;flex-grow:1;line-height:1.57em}.cdx-checklist__item-checkbox{width:22px;height:22px;display:flex;align-items:center;margin-right:8px;margin-top:calc(.785em - 11px);cursor:pointer}.cdx-checklist__item-checkbox svg{opacity:0;height:20px;width:20px;position:absolute;left:-1px;top:-1px;max-height:20px}@media (hover: hover){.cdx-checklist__item-checkbox:not(.cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check svg{opacity:1}}.cdx-checklist__item-checkbox-check{cursor:pointer;display:inline-block;flex-shrink:0;position:relative;width:20px;height:20px;box-sizing:border-box;margin-left:0;border-radius:5px;border:1px solid #C9C9C9;background:#fff}.cdx-checklist__item-checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:#369fff;visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}@media (hover: hover){.cdx-checklist__item--checked .cdx-checklist__item-checkbox:not(.cdx-checklist__item--checked .cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check{background:#0059AB;border-color:#0059ab}}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check{background:#369FFF;border-color:#369fff}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg{opacity:1}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg path{stroke:#fff}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}')), document.head.appendChild(e);
      }
    } catch (c3) {
      console.error("vite-plugin-css-injected-by-js", c3);
    }
  })();
  var k = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>';
  var g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
  function d3() {
    const s = document.activeElement, t = window.getSelection().getRangeAt(0), n = t.cloneRange();
    return n.selectNodeContents(s), n.setStart(t.endContainer, t.endOffset), n.extractContents();
  }
  function C2(s) {
    const e = document.createElement("div");
    return e.appendChild(s), e.innerHTML;
  }
  function c2(s, e = null, t = {}) {
    const n = document.createElement(s);
    Array.isArray(e) ? n.classList.add(...e) : e && n.classList.add(e);
    for (const i2 in t)
      n[i2] = t[i2];
    return n;
  }
  function m2(s) {
    return s.innerHTML.replace("<br>", " ").trim();
  }
  function p(s, e = false, t = void 0) {
    const n = document.createRange(), i2 = window.getSelection();
    n.selectNodeContents(s), t !== void 0 && (n.setStart(s, t), n.setEnd(s, t)), n.collapse(e), i2.removeAllRanges(), i2.addRange(n);
  }
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
  Element.prototype.closest || (Element.prototype.closest = function(s) {
    let e = this;
    if (!document.documentElement.contains(e))
      return null;
    do {
      if (e.matches(s))
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
        icon: g,
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
    constructor({ data: e, config: t, api: n, readOnly: i2 }) {
      this._elements = {
        wrapper: null,
        items: []
      }, this.readOnly = i2, this.api = n, this.data = e || {};
    }
    /**
     * Returns checklist tag with items
     *
     * @returns {Element}
     */
    render() {
      return this._elements.wrapper = c2("div", [this.CSS.baseBlock, this.CSS.wrapper]), this.data.items || (this.data.items = [
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
          text: m2(n),
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
      const t = c2("div", this.CSS.item), n = c2("span", this.CSS.checkbox), i2 = c2("div", this.CSS.checkboxContainer), o3 = c2("div", this.CSS.textField, {
        innerHTML: e.text ? e.text : "",
        contentEditable: !this.readOnly
      });
      return e.checked && t.classList.add(this.CSS.itemChecked), n.innerHTML = k, i2.appendChild(n), t.appendChild(i2), t.appendChild(o3), t;
    }
    /**
     * Append new elements to the list by pressing Enter
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    enterPressed(e) {
      e.preventDefault();
      const t = this.items, n = document.activeElement.closest(`.${this.CSS.item}`);
      if (t.indexOf(n) === t.length - 1 && m2(this.getItemInput(n)).length === 0) {
        const u3 = this.api.blocks.getCurrentBlockIndex();
        n.remove(), this.api.blocks.insert(), this.api.caret.setToBlock(u3 + 1);
        return;
      }
      const a3 = d3(), l2 = C2(a3), r = this.createChecklistItem({
        text: l2,
        checked: false
      });
      this._elements.wrapper.insertBefore(r, n.nextSibling), p(this.getItemInput(r), true);
    }
    /**
     * Handle backspace
     *
     * @param {KeyboardEvent} event - keyboard event
     */
    backspace(e) {
      const t = e.target.closest(`.${this.CSS.item}`), n = this.items.indexOf(t), i2 = this.items[n - 1];
      if (!i2 || !(window.getSelection().focusOffset === 0))
        return;
      e.preventDefault();
      const l2 = d3(), r = this.getItemInput(i2), h2 = r.childNodes.length;
      r.appendChild(l2), p(r, void 0, h2), t.remove();
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
  var a2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>';
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
        icon: a2,
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
    constructor({ data: e, config: t, api: r, readOnly: s }) {
      this._elements = {
        wrapper: null
      }, this.api = r, this.readOnly = s, this.settings = [
        {
          name: "unordered",
          label: this.api.i18n.t("Unordered"),
          icon: a2,
          default: t.defaultStyle === "unordered" || false
        },
        {
          name: "ordered",
          label: this.api.i18n.t("Ordered"),
          icon: o2,
          default: t.defaultStyle === "ordered" || true
        }
      ], this._data = {
        style: this.settings.find((i2) => i2.default === true).name,
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
        const [t, r] = [13, 8];
        switch (e.keyCode) {
          case t:
            this.getOutofList(e);
            break;
          case r:
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
      const t = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered, r = e === "ordered" ? "ol" : "ul";
      return this._make(r, [this.CSS.baseBlock, this.CSS.wrapper, t], {
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
      e || (e = {}), this._data.style = e.style || this.settings.find((r) => r.default === true).name, this._data.items = e.items || [];
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
    _make(e, t = null, r = {}) {
      const s = document.createElement(e);
      Array.isArray(t) ? s.classList.add(...t) : t && s.classList.add(t);
      for (const i2 in r)
        s[i2] = r[i2];
      return s;
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
      const r = t[t.length - 1], s = this.currentItem;
      s === r && !r.textContent.trim().length && (s.parentElement.removeChild(s), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex()), e.preventDefault(), e.stopPropagation());
    }
    /**
     * Handle backspace
     *
     * @param {KeyboardEvent} event
     */
    backspace(e) {
      const t = this._elements.wrapper.querySelectorAll("." + this.CSS.item), r = t[0];
      r && t.length < 2 && !r.innerHTML.replace("<br>", " ").trim() && e.preventDefault();
    }
    /**
     * Select LI content by CMD+A
     *
     * @param {KeyboardEvent} event
     */
    selectItem(e) {
      e.preventDefault();
      const t = window.getSelection(), r = t.anchorNode.parentNode, s = r.closest("." + this.CSS.item), i2 = new Range();
      i2.selectNodeContents(s), t.removeAllRanges(), t.addRange(i2);
    }
    /**
     * Handle UL, OL and LI tags paste and returns List data
     *
     * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
     * @returns {ListData}
     */
    pasteHandler(e) {
      const { tagName: t } = e;
      let r;
      switch (t) {
        case "OL":
          r = "ordered";
          break;
        case "UL":
        case "LI":
          r = "unordered";
      }
      const s = {
        style: r,
        items: []
      };
      if (t === "LI")
        s.items = [e.innerHTML];
      else {
        const i2 = Array.from(e.querySelectorAll("LI"));
        s.items = i2.map((n) => n.innerHTML).filter((n) => !!n.trim());
      }
      return s;
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
    } catch (o3) {
      console.error("vite-plugin-css-injected-by-js", o3);
    }
  })();
  var g2 = {
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
      id: ([o3, t]) => {
        if (!t && o3)
          return o3;
        const i2 = {
          start: "start",
          end: "end",
          t: "start",
          // eslint-disable-next-line camelcase
          time_continue: "start",
          list: "list"
        };
        return t = t.slice(1).split("&").map((e) => {
          const [s, n] = e.split("=");
          return !o3 && s === "v" ? (o3 = n, null) : !i2[s] || n === "LL" || n.startsWith("RDMM") || n.startsWith("FL") ? null : `${i2[s]}=${n}`;
        }).filter((e) => !!e), o3 + "?" + t.join("&");
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
      id: (o3) => o3.join("/")
    },
    "yandex-music-playlist": {
      regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
      embedUrl: "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
      html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
      height: 400,
      width: 540,
      id: (o3) => o3.join("/")
    },
    codepen: {
      regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
      embedUrl: "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
      html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
      height: 300,
      width: 600,
      id: (o3) => o3.join("/embed/")
    },
    instagram: {
      regex: /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,
      embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
      html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 505,
      width: 400
    },
    twitter: {
      regex: /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+?.*)?$/,
      embedUrl: "https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",
      html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
      height: 300,
      width: 600,
      id: (o3) => o3.join("/status/")
    },
    pinterest: {
      regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
      embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
      html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
      id: (o3) => o3[1]
    },
    facebook: {
      regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
      html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
      id: (o3) => o3.join("/")
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
      id: (o3) => `${o3.join("/")}.js`
    }
  };
  function u2(o3, t, i2) {
    var e, s, n, r, a3;
    t == null && (t = 100);
    function l2() {
      var h2 = Date.now() - r;
      h2 < t && h2 >= 0 ? e = setTimeout(l2, t - h2) : (e = null, i2 || (a3 = o3.apply(n, s), n = s = null));
    }
    var d5 = function() {
      n = this, s = arguments, r = Date.now();
      var h2 = i2 && !e;
      return e || (e = setTimeout(l2, t)), h2 && (a3 = o3.apply(n, s), n = s = null), a3;
    };
    return d5.clear = function() {
      e && (clearTimeout(e), e = null);
    }, d5.flush = function() {
      e && (a3 = o3.apply(n, s), n = s = null, clearTimeout(e), e = null);
    }, d5;
  }
  u2.debounce = u2;
  var w = u2;
  var m3 = class _m {
    /**
     * @param {{data: EmbedData, config: EmbedConfig, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - Editor.js API
     *   readOnly - read-only mode flag
     */
    constructor({ data: t, api: i2, readOnly: e }) {
      this.api = i2, this._data = {}, this.element = null, this.readOnly = e, this.data = t;
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
    set data(t) {
      if (!(t instanceof Object))
        throw Error("Embed Tool data should be object");
      const { service: i2, source: e, embed: s, width: n, height: r, caption: a3 = "" } = t;
      this._data = {
        service: i2 || this.data.service,
        source: e || this.data.source,
        embed: s || this.data.embed,
        width: n || this.data.width,
        height: r || this.data.height,
        caption: a3 || this.data.caption || ""
      };
      const l2 = this.element;
      l2 && l2.parentNode.replaceChild(this.render(), l2);
    }
    /**
     * @returns {EmbedData}
     */
    get data() {
      if (this.element) {
        const t = this.element.querySelector(`.${this.api.styles.input}`);
        this._data.caption = t ? t.innerHTML : "";
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
        const a3 = document.createElement("div");
        return this.element = a3, a3;
      }
      const { html: t } = _m.services[this.data.service], i2 = document.createElement("div"), e = document.createElement("div"), s = document.createElement("template"), n = this.createPreloader();
      i2.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading), e.classList.add(this.CSS.input, this.CSS.caption), i2.appendChild(n), e.contentEditable = !this.readOnly, e.dataset.placeholder = this.api.i18n.t("Enter a caption"), e.innerHTML = this.data.caption || "", s.innerHTML = t, s.content.firstChild.setAttribute("src", this.data.embed), s.content.firstChild.classList.add(this.CSS.content);
      const r = this.embedIsReady(i2);
      return i2.appendChild(s.content.firstChild), i2.appendChild(e), r.then(() => {
        i2.classList.remove(this.CSS.containerLoading);
      }), this.element = i2, i2;
    }
    /**
     * Creates preloader to append to container while data is loading
     *
     * @returns {HTMLElement}
     */
    createPreloader() {
      const t = document.createElement("preloader"), i2 = document.createElement("div");
      return i2.textContent = this.data.source, t.classList.add(this.CSS.preloader), i2.classList.add(this.CSS.url), t.appendChild(i2), t;
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
    onPaste(t) {
      const { key: i2, data: e } = t.detail, { regex: s, embedUrl: n, width: r, height: a3, id: l2 = (c3) => c3.shift() } = _m.services[i2], d5 = s.exec(e).slice(1), h2 = n.replace(/<%= remote_id %>/g, l2(d5));
      this.data = {
        service: i2,
        source: e,
        embed: h2,
        width: r,
        height: a3
      };
    }
    /**
     * Analyze provided config and make object with services to use
     *
     * @param {EmbedConfig} config - configuration of embed block element
     */
    static prepare({ config: t = {} }) {
      const { services: i2 = {} } = t;
      let e = Object.entries(g2);
      const s = Object.entries(i2).filter(([r, a3]) => typeof a3 == "boolean" && a3 === true).map(([r]) => r), n = Object.entries(i2).filter(([r, a3]) => typeof a3 == "object").filter(([r, a3]) => _m.checkServiceConfig(a3)).map(([r, a3]) => {
        const { regex: l2, embedUrl: d5, html: h2, height: c3, width: p2, id: f2 } = a3;
        return [r, {
          regex: l2,
          embedUrl: d5,
          html: h2,
          height: c3,
          width: p2,
          id: f2
        }];
      });
      s.length && (e = e.filter(([r]) => s.includes(r))), e = e.concat(n), _m.services = e.reduce((r, [a3, l2]) => a3 in r ? (r[a3] = Object.assign({}, r[a3], l2), r) : (r[a3] = l2, r), {}), _m.patterns = e.reduce((r, [a3, l2]) => (r[a3] = l2.regex, r), {});
    }
    /**
     * Check if Service config is valid
     *
     * @param {Service} config - configuration of embed block element
     * @returns {boolean}
     */
    static checkServiceConfig(t) {
      const { regex: i2, embedUrl: e, html: s, height: n, width: r, id: a3 } = t;
      let l2 = i2 && i2 instanceof RegExp && e && typeof e == "string" && s && typeof s == "string";
      return l2 = l2 && (a3 !== void 0 ? a3 instanceof Function : true), l2 = l2 && (n !== void 0 ? Number.isFinite(n) : true), l2 = l2 && (r !== void 0 ? Number.isFinite(r) : true), l2;
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
    embedIsReady(t) {
      let e = null;
      return new Promise((s, n) => {
        e = new MutationObserver(w.debounce(s, 450)), e.observe(t, {
          childList: true,
          subtree: true
        });
      }).then(() => {
        e.disconnect();
      });
    }
  };

  // editorjs-bundle.js
  var import_quote = __toESM(require_bundle2());
  var import_code = __toESM(require_bundle3());
  window.EditorJS = vi;
  window.Header = c;
  window.RawTool = import_raw.default;
  window.Checklist = f;
  window.List = d4;
  window.Embed = m3;
  window.Quote = import_quote.default;
  window.CodeTool = import_code.default;
})();
/*! Bundled license information:

@editorjs/raw/dist/bundle.js:
  (**
   * Raw HTML Tool for CodeX Editor
   *
   * @author CodeX (team@codex.so)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   *)

@editorjs/code/dist/bundle.js:
  (**
   * CodeTool for Editor.js
   *
   * @author CodeX (team@ifmo.su)
   * @copyright CodeX 2018
   * @license MIT
   * @version 2.0.0
   *)

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
*/
