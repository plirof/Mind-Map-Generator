! function(t) {
  var n = {};

  function e(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
  }
  e.m = t, e.c = n, e.d = function(t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, {
      enumerable: !0,
      get: r
    })
  }, e.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, e.t = function(t, n) {
    if (1 & n && (t = e(t)), 8 & n) return t;
    if (4 & n && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (e.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & n && "string" != typeof t)
      for (var o in t) e.d(r, o, function(n) {
        return t[n]
      }.bind(null, o));
    return r
  }, e.n = function(t) {
    var n = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return e.d(n, "a", n), n
  }, e.o = function(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n)
  }, e.p = "", e(e.s = 23)
}([function(t, n) {
  t.exports = function(t, n, e) {
    return n in t ? Object.defineProperty(t, n, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = e, t
  }
}, function(t, n, e) {
  var r = e(13),
    o = e(18),
    i = e(9),
    a = e(14);
  t.exports = function(t, n) {
    return r(t) || o(t, n) || i(t, n) || a()
  }
}, function(t, n, e) {
  var r = e(16),
    o = e(12),
    i = e(9),
    a = e(17);
  t.exports = function(t) {
    return r(t) || o(t) || i(t) || a()
  }
}, function(t, n, e) {
  t.exports = e(19)
}, function(t, n) {
  function e(t, n, e, r, o, i, a) {
    try {
      var u = t[i](a),
        c = u.value
    } catch (t) {
      return void e(t)
    }
    u.done ? n(c) : Promise.resolve(c).then(r, o)
  }
  t.exports = function(t) {
    return function() {
      var n = this,
        r = arguments;
      return new Promise((function(o, i) {
        var a = t.apply(n, r);

        function u(t) {
          e(a, o, i, u, c, "next", t)
        }

        function c(t) {
          e(a, o, i, u, c, "throw", t)
        }
        u(void 0)
      }))
    }
  }
}, function(t, n) {
  t.exports = function(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
  }
}, function(t, n) {
  function e(t, n) {
    for (var e = 0; e < n.length; e++) {
      var r = n[e];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }
  t.exports = function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t
  }
}, function(t, n, e) {
  var r = e(13),
    o = e(12),
    i = e(9),
    a = e(14);
  t.exports = function(t) {
    return r(t) || o(t) || i(t) || a()
  }
}, function(t, n, e) {
  var r = e(20);
  t.exports = function(t, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), n && r(t, n)
  }
}, function(t, n, e) {
  var r = e(11);
  t.exports = function(t, n) {
    if (t) {
      if ("string" == typeof t) return r(t, n);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? r(t, n) : void 0
    }
  }
}, function(t, n) {
  function e(n) {
    return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    }, e(n)
  }
  t.exports = e
}, function(t, n) {
  t.exports = function(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
  }
}, function(t, n) {
  t.exports = function(t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
  }
}, function(t, n) {
  t.exports = function(t) {
    if (Array.isArray(t)) return t
  }
}, function(t, n) {
  t.exports = function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }
}, function(t, n, e) {
  var r = e(21),
    o = e(22);
  t.exports = function(t, n) {
    return !n || "object" !== r(n) && "function" != typeof n ? o(t) : n
  }
}, function(t, n, e) {
  var r = e(11);
  t.exports = function(t) {
    if (Array.isArray(t)) return r(t)
  }
}, function(t, n) {
  t.exports = function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }
}, function(t, n) {
  t.exports = function(t, n) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
      var e = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == u.return || u.return()
        } finally {
          if (o) throw i
        }
      }
      return e
    }
  }
}, function(t, n, e) {
  var r = function(t) {
    "use strict";
    var n = Object.prototype,
      e = n.hasOwnProperty,
      r = "function" == typeof Symbol ? Symbol : {},
      o = r.iterator || "@@iterator",
      i = r.asyncIterator || "@@asyncIterator",
      a = r.toStringTag || "@@toStringTag";

    function u(t, n, e) {
      return Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[n]
    }
    try {
      u({}, "")
    } catch (t) {
      u = function(t, n, e) {
        return t[n] = e
      }
    }

    function c(t, n, e, r) {
      var o = n && n.prototype instanceof l ? n : l,
        i = Object.create(o.prototype),
        a = new T(r || []);
      return i._invoke = function(t, n, e) {
        var r = "suspendedStart";
        return function(o, i) {
          if ("executing" === r) throw new Error("Generator is already running");
          if ("completed" === r) {
            if ("throw" === o) throw i;
            return E()
          }
          for (e.method = o, e.arg = i;;) {
            var a = e.delegate;
            if (a) {
              var u = I(a, e);
              if (u) {
                if (u === s) continue;
                return u
              }
            }
            if ("next" === e.method) e.sent = e._sent = e.arg;
            else if ("throw" === e.method) {
              if ("suspendedStart" === r) throw r = "completed", e.arg;
              e.dispatchException(e.arg)
            } else "return" === e.method && e.abrupt("return", e.arg);
            r = "executing";
            var c = f(t, n, e);
            if ("normal" === c.type) {
              if (r = e.done ? "completed" : "suspendedYield", c.arg === s) continue;
              return {
                value: c.arg,
                done: e.done
              }
            }
            "throw" === c.type && (r = "completed", e.method = "throw", e.arg = c.arg)
          }
        }
      }(t, e, a), i
    }

    function f(t, n, e) {
      try {
        return {
          type: "normal",
          arg: t.call(n, e)
        }
      } catch (t) {
        return {
          type: "throw",
          arg: t
        }
      }
    }
    t.wrap = c;
    var s = {};

    function l() {}

    function p() {}

    function h() {}
    var y = {};
    y[o] = function() {
      return this
    };
    var d = Object.getPrototypeOf,
      v = d && d(d(w([])));
    v && v !== n && e.call(v, o) && (y = v);
    var g = h.prototype = l.prototype = Object.create(y);

    function m(t) {
      ["next", "throw", "return"].forEach((function(n) {
        u(t, n, (function(t) {
          return this._invoke(n, t)
        }))
      }))
    }

    function x(t, n) {
      var r;
      this._invoke = function(o, i) {
        function a() {
          return new n((function(r, a) {
            ! function r(o, i, a, u) {
              var c = f(t[o], t, i);
              if ("throw" !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && "object" == typeof l && e.call(l, "__await") ? n.resolve(l.__await).then((function(t) {
                  r("next", t, a, u)
                }), (function(t) {
                  r("throw", t, a, u)
                })) : n.resolve(l).then((function(t) {
                  s.value = t, a(s)
                }), (function(t) {
                  return r("throw", t, a, u)
                }))
              }
              u(c.arg)
            }(o, i, r, a)
          }))
        }
        return r = r ? r.then(a, a) : a()
      }
    }

    function I(t, n) {
      var e = t.iterator[n.method];
      if (void 0 === e) {
        if (n.delegate = null, "throw" === n.method) {
          if (t.iterator.return && (n.method = "return", n.arg = void 0, I(t, n), "throw" === n.method)) return s;
          n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
        }
        return s
      }
      var r = f(e, t.iterator, n.arg);
      if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, s;
      var o = r.arg;
      return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = void 0), n.delegate = null, s) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, s)
    }

    function O(t) {
      var n = {
        tryLoc: t[0]
      };
      1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n)
    }

    function b(t) {
      var n = t.completion || {};
      n.type = "normal", delete n.arg, t.completion = n
    }

    function T(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(O, this), this.reset(!0)
    }

    function w(t) {
      if (t) {
        var n = t[o];
        if (n) return n.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var r = -1,
            i = function n() {
              for (; ++r < t.length;)
                if (e.call(t, r)) return n.value = t[r], n.done = !1, n;
              return n.value = void 0, n.done = !0, n
            };
          return i.next = i
        }
      }
      return {
        next: E
      }
    }

    function E() {
      return {
        value: void 0,
        done: !0
      }
    }
    return p.prototype = g.constructor = h, h.constructor = p, p.displayName = u(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
      var n = "function" == typeof t && t.constructor;
      return !!n && (n === p || "GeneratorFunction" === (n.displayName || n.name))
    }, t.mark = function(t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, u(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
    }, t.awrap = function(t) {
      return {
        __await: t
      }
    }, m(x.prototype), x.prototype[i] = function() {
      return this
    }, t.AsyncIterator = x, t.async = function(n, e, r, o, i) {
      void 0 === i && (i = Promise);
      var a = new x(c(n, e, r, o), i);
      return t.isGeneratorFunction(e) ? a : a.next().then((function(t) {
        return t.done ? t.value : a.next()
      }))
    }, m(g), u(g, a, "Generator"), g[o] = function() {
      return this
    }, g.toString = function() {
      return "[object Generator]"
    }, t.keys = function(t) {
      var n = [];
      for (var e in t) n.push(e);
      return n.reverse(),
        function e() {
          for (; n.length;) {
            var r = n.pop();
            if (r in t) return e.value = r, e.done = !1, e
          }
          return e.done = !0, e
        }
    }, t.values = w, T.prototype = {
      constructor: T,
      reset: function(t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(b), !t)
          for (var n in this) "t" === n.charAt(0) && e.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = void 0)
      },
      stop: function() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval
      },
      dispatchException: function(t) {
        if (this.done) throw t;
        var n = this;

        function r(e, r) {
          return a.type = "throw", a.arg = t, n.next = e, r && (n.method = "next", n.arg = void 0), !!r
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return r("end");
          if (i.tryLoc <= this.prev) {
            var u = e.call(i, "catchLoc"),
              c = e.call(i, "finallyLoc");
            if (u && c) {
              if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return r(i.finallyLoc)
            } else if (u) {
              if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
            } else {
              if (!c) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return r(i.finallyLoc)
            }
          }
        }
      },
      abrupt: function(t, n) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= n && n <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = n, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
      },
      complete: function(t, n) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), s
      },
      finish: function(t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var e = this.tryEntries[n];
          if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), b(e), s
        }
      },
      catch: function(t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var e = this.tryEntries[n];
          if (e.tryLoc === t) {
            var r = e.completion;
            if ("throw" === r.type) {
              var o = r.arg;
              b(e)
            }
            return o
          }
        }
        throw new Error("illegal catch attempt")
      },
      delegateYield: function(t, n, e) {
        return this.delegate = {
          iterator: w(t),
          resultName: n,
          nextLoc: e
        }, "next" === this.method && (this.arg = void 0), s
      }
    }, t
  }(t.exports);
  try {
    regeneratorRuntime = r
  } catch (t) {
    Function("r", "regeneratorRuntime = r")(r)
  }
}, function(t, n) {
  function e(n, r) {
    return t.exports = e = Object.setPrototypeOf || function(t, n) {
      return t.__proto__ = n, t
    }, e(n, r)
  }
  t.exports = e
}, function(t, n) {
  function e(n) {
    return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = e = function(t) {
      return typeof t
    } : t.exports = e = function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, e(n)
  }
  t.exports = e
}, function(t, n) {
  t.exports = function(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }
}, function(t, n, e) {
  "use strict";
  e.r(n);
  var r = {};
  e.r(r);
  var o, i, a, u = e(2),
    c = e.n(u),
    f = e(1),
    s = e.n(f),
    l = e(0),
    p = e.n(l),
    h = "UP",
    y = "DOWN",
    d = "RIGHT",
    v = "LEFT",
    g = "LEFT_UP",
    m = "LEFT_DOWN",
    x = "RIGHT_UP",
    I = "RIGHT_DOWN",
    O = "TOPIC",
    b = function(t) {
      return null != t
    },
    T = function(t, n) {
      return function(t) {
        return t.reduce((function(t, n) {
          return t.concat(n)
        }), [])
      }(t.map(n))
    },
    w = function(t, n) {
      return {
        x: t.x + n.x,
        y: t.y + n.y
      }
    },
    E = function(t, n) {
      return {
        x: t.x - n.x,
        y: t.y - n.y
      }
    },
    _ = function(t) {
      return 0 === t.length
    },
    S = function(t, n) {
      return console.error(t)
    },
    N = (requestAnimationFrame.bind(window), 0),
    G = function() {
      var t = function() {
        return t = 150, 100 + parseInt(Math.random() * t);
        var t
      };
      return "rgb(".concat(t(), ", ").concat(t(), ", ").concat(t(), ")")
    },
    P = function() {
      for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
      if (0 !== n.length) {
        var r = n.map((function(t) {
            return t.x * t.x + t.y * t.y
          })),
          o = 0,
          i = r[0];
        return r.forEach((function(t, n) {
          t > i && (i = t, o = n)
        })), n[o]
      }
      S("Arguments are empty")
    },
    R = (o = {}, p()(o, y, .5 * Math.PI), p()(o, h, 1.5 * Math.PI), p()(o, d, 0), p()(o, v, Math.PI), p()(o, I, 1 / 3 * Math.PI), p()(o, m, 2 / 3 * Math.PI), p()(o, g, 4 / 3 * Math.PI), p()(o, x, 5 / 3 * Math.PI), o),
    L = function(t) {
      var n = R[t];
      return {
        x: Math.cos(n),
        y: Math.sin(n)
      }
    },
    A = function(t, n) {
      var e = (t.y > 0 ? 1 : -1) * n;
      return {
        x: e / t.y * t.x,
        y: e
      }
    },
    j = function(t, n) {
      var e = (t.x > 0 ? 1 : -1) * n;
      return {
        x: e,
        y: e / t.x * t.y
      }
    },
    k = function(t) {
      var n = t.pos.x,
        e = t.pos.y;
      return {
        x1: n,
        x2: n + t.size.width,
        y1: e,
        y2: e + t.size.height
      }
    },
    U = (i = document.createElement("canvas").getContext("2d"), function(t, n) {
      var e = n.fontStyle,
        r = n.fontWeight,
        o = n.fontSize,
        a = n.fontFamily,
        u = function(t) {
          return t <= 12 ? [t, 1] : [12, t / 12]
        }(o),
        f = s()(u, 2),
        l = f[0],
        p = f[1],
        h = [e, r, l + "px", a];
      i.font = h.filter((function(t) {
        return t
      })).join(" ");
      var y = t.split("\n"),
        d = y.map((function(t) {
          return i.measureText(t).width
        }));
      return {
        width: Math.ceil(Math.max.apply(Math, c()(d)) * p),
        height: Math.ceil(y.length * o)
      }
    }),
    D = e(3),
    M = e.n(D),
    H = e(4),
    F = e.n(H),
    C = null,
    z = null,
    J = function(t, n) {
      (0, C.mutations[t])(C.state, n)
    },
    V = function() {
      var t = F()(M.a.mark((function t(n, e) {
        var r;
        return M.a.wrap((function(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return r = C.actions[n], t.next = 3, r({
                commit: J
              }, e);
            case 3:
              return t.next = 5, z(C.state);
            case 5:
            case "end":
              return t.stop()
          }
        }), t)
      })));
      return function(n, e) {
        return t.apply(this, arguments)
      }
    }(),
    W = e(7),
    B = e.n(W),
    Y = e(8),
    q = e.n(Y),
    $ = e(15),
    Q = e.n($),
    X = e(10),
    Z = e.n(X),
    K = e(5),
    tt = e.n(K),
    nt = e(6),
    et = e.n(nt),
    rt = function(t, n, e) {
      var r = e.y > 0 ? [t, n] : [n, t],
        o = s()(r, 2),
        i = o[0],
        a = o[1],
        u = e.y > 0 ? 1 : -1,
        c = Math.max(i.margin[2], a.margin[0]),
        f = u * (i.size.height - i.getJoint().y + c + a.getJoint().y);
      return {
        x: f / e.y * e.x,
        y: f
      }
    },
    ot = function(t, n, e) {
      var r = e.x > 0 ? [t, n] : [n, t],
        o = s()(r, 2),
        i = o[0],
        a = o[1],
        u = e.x > 0 ? 1 : -1,
        c = Math.max(i.margin[1], a.margin[3]),
        f = u * (i.size.width - i.getJoint().x + c + a.getJoint().x);
      return {
        x: f,
        y: f / e.x * e.y
      }
    },
    it = function(t) {
      return function(n, e) {
        for (var r = [{
            x: 0,
            y: 0
          }], o = 1; o < n.length; o++) {
          var i = t(n[o - 1], n[o], e);
          r.push(w(r[o - 1], i))
        }
        return r
      }
    },
    at = function(t, n) {
      return function(e, r) {
        var o = {
          x: 0,
          y: 0
        };
        if (0 === e.length) return [];
        if (1 === e.length) return [o];
        for (var i = [o, w(o, n(e[0], e[1], r))], a = 2; a < e.length; a++) {
          var u = e[a - 2],
            c = e[a - 1],
            f = e[a],
            s = i[a - 2],
            l = i[a - 1],
            p = P(w(s, t(u, f, r)), w(l, n(c, f, r)));
          i.push(p)
        }
        return i
      }
    },
    ut = it(ot),
    ct = it(rt),
    ft = at(ot, (function(t, n, e) {
      var r = e.x > 0 ? [t, n] : [n, t],
        o = s()(r, 2),
        i = o[0],
        a = o[1],
        u = e.x > 0 ? 1 : -1,
        c = Math.max(i.margin[1], a.margin[3]),
        f = u * (i.getChildJoint(d).x - i.getJoint().x + c + a.getJoint().x);
      return {
        x: f,
        y: f / e.x * e.y
      }
    })),
    st = at(rt, (function(t, n, e) {
      var r = e.y > 0 ? [t, n] : [n, t],
        o = s()(r, 2),
        i = o[0],
        a = o[1],
        u = e.y > 0 ? 1 : -1,
        c = Math.max(i.margin[2], a.margin[0]),
        f = u * (i.getChildJoint(y).y - i.getJoint().y + c + a.getJoint().y);
      return {
        x: f / e.y * e.x,
        y: f
      }
    })),
    lt = function(t) {
      var n = t.dir.split("-"),
        e = s()(n, 2),
        r = e[0],
        o = e[1],
        i = L(r),
        a = function(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = n ? [st, ft] : [ct, ut],
            r = s()(e, 2),
            o = r[0],
            i = r[1];
          switch (t) {
            case y:
            case h:
            case I:
            case m:
            case g:
            case x:
              return o;
            case d:
            case v:
              return i
          }
        }(r, b(o)),
        u = gt(t.elts, i, a),
        c = s()(u, 2),
        f = c[0],
        l = c[1];
      return t.margin = l, t.size = {
        width: f.width,
        height: f.height
      }, t
    },
    pt = function(t, n) {
      return function t(e, r) {
        return null == e ? S("Rel is not ancestor", 0) : e === n ? r : t(e.parent, w(e.pos, r))
      }(t, {
        x: 0,
        y: 0
      })
    },
    ht = function(t, n) {
      var e, r = function(n) {
        var e = pt(n, t);
        return w(e, n.getJoint())
      };
      switch (n) {
        case g:
        case x:
        case m:
        case I:
          return r(t.elts[0]);
        case h:
        case y:
        case v:
        case d:
          var o = t.elts.map(r),
            i = (e = {
              x1: 1 / 0,
              x2: -1 / 0,
              y1: 1 / 0,
              y2: -1 / 0
            }, o.forEach((function(t) {
              e.x1 = Math.min(e.x1, t.x), e.y1 = Math.min(e.y1, t.y), e.x2 = Math.max(e.x2, t.x), e.y2 = Math.max(e.y2, t.y)
            })), e),
            a = {
              size: dt(i)
            },
            u = {
              x: i.x1,
              y: i.y1
            };
          return w(u, yt(a, n))
      }
    },
    yt = function(t, n) {
      var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        r = t.size,
        o = r.width,
        i = r.height;
      switch (n) {
        case h:
          return {
            x: o / 2, y: -e
          };
        case y:
          return {
            x: o / 2, y: i + e
          };
        case v:
          return {
            x: -e, y: i / 2
          };
        case d:
          return {
            x: o + e, y: i / 2
          };
        case g:
          return {
            x: -e, y: 0
          };
        case m:
          return {
            x: -e, y: i
          };
        case x:
          return {
            x: o + e, y: 0
          };
        case I:
          return {
            x: o + e, y: i
          };
        default:
          S("Unknown dir", 0)
      }
    },
    dt = function(t) {
      return {
        width: t.x2 - t.x1,
        height: t.y2 - t.y1
      }
    },
    vt = function(t, n, e) {
      t.forEach((function(t, r) {
        t.pos = E(e[r], n[r])
      }));
      var r = function(t) {
          var n = {
            x1: 1 / 0,
            x2: -1 / 0,
            y1: 1 / 0,
            y2: -1 / 0
          };
          return t.forEach((function(t) {
            var e = k(t),
              r = e.x1,
              o = e.x2,
              i = e.y1,
              a = e.y2;
            n.x1 = Math.min(n.x1, r), n.y1 = Math.min(n.y1, i), n.x2 = Math.max(n.x2, o), n.y2 = Math.max(n.y2, a)
          })), n
        }(t),
        o = function(t) {
          var n = {
            x1: 1 / 0,
            x2: -1 / 0,
            y1: 1 / 0,
            y2: -1 / 0
          };
          return t.forEach((function(t) {
            var e = k(t),
              r = e.x1,
              o = e.x2,
              i = e.y1,
              a = e.y2,
              u = s()(t.margin, 4),
              c = u[0],
              f = u[1],
              l = u[2],
              p = u[3];
            n.x1 = Math.min(n.x1, r - p), n.y1 = Math.min(n.y1, i - c), n.x2 = Math.max(n.x2, o + f), n.y2 = Math.max(n.y2, a + l)
          })), n
        }(t),
        i = {
          x: r.x1,
          y: r.y1
        };
      return t.forEach((function(t) {
        t.pos = E(t.pos, i)
      })), [dt(r), function(t, n) {
        var e = -(n.x1 - t.x1);
        return [-(n.y1 - t.y1), n.x2 - t.x2, n.y2 - t.y2, e]
      }(r, o)]
    },
    gt = function(t, n, e) {
      var r = e(t, n),
        o = t.map((function(t) {
          return t.getJoint()
        }));
      return vt(t, o, r)
    },
    mt = (a = {}, p()(a, "MAP", {
      OUTS: [d, v],
      LineStyle: "ANGLE_VERT"
    }), p()(a, "LOGIC_R", {
      IN: v,
      OUTS: [d],
      GroupIN: v,
      GroupDIR: y,
      LineStyle: "ANGLE_VERT"
    }), p()(a, "LOGIC_L", {
      IN: d,
      OUTS: [v],
      GroupIN: d,
      GroupDIR: y,
      LineStyle: "ANGLE_VERT"
    }), p()(a, "ORG", {
      IN: h,
      OUTS: [y],
      GroupIN: h,
      GroupDIR: d,
      LineStyle: "ANGLE_HORI"
    }), p()(a, "ORG_UP", {
      IN: y,
      OUTS: [h],
      GroupIN: y,
      GroupDIR: d,
      LineStyle: "ANGLE_HORI"
    }), p()(a, "TREE_L", {
      IN: d,
      OUTS: [y],
      GroupIN: x,
      GroupAlign: h,
      GroupDIR: y,
      LineStyle: "ANGLE_VERT"
    }), p()(a, "TREE_R", {
      IN: v,
      OUTS: [y],
      GroupIN: g,
      GroupAlign: h,
      GroupDIR: y,
      LineStyle: "ANGLE_VERT"
    }), p()(a, "TIME_V", {
      IN: h,
      OUTS: [y],
      GroupIN: h,
      GroupAlign: h,
      GroupDIR: "DOWN-INTER",
      LineStyle: "ANGLE_VERT"
    }), p()(a, "TIME_UP", {
      IN: v,
      OUTS: [h],
      GroupIN: m,
      GroupAlign: y,
      GroupDIR: y,
      Child: "LOGIC_R",
      LineStyle: "ANGLE_VERT"
    }), p()(a, "TIME_DOWN", {
      IN: v,
      OUTS: [y],
      GroupIN: g,
      GroupAlign: h,
      GroupDIR: y,
      Child: "LOGIC_R",
      LineStyle: "ANGLE_VERT"
    }), p()(a, "TIME_H_UP", {
      IN: v,
      OUTS: [d],
      GroupIN: v,
      GroupDIR: d,
      Child: "TIME_UP"
    }), p()(a, "TIME_H_DOWN", {
      IN: v,
      OUTS: [d],
      GroupIN: v,
      GroupDIR: d,
      Child: "TIME_DOWN"
    }), p()(a, "TIME_H", {
      IN: v,
      OUTS: [d],
      GroupIN: v,
      GroupDIR: "RIGHT-INTER"
    }), p()(a, "FISH_RIGHT_UP_IN", {
      IN: m,
      OUTS: [I],
      GroupIN: m,
      GroupDIR: x
    }), p()(a, "FISH_RIGHT_DOWN_IN", {
      IN: g,
      OUTS: [I],
      GroupIN: g,
      GroupDIR: I,
      TopicIN: m
    }), p()(a, "FISH_LEFT_UP_IN", {
      IN: I,
      OUTS: [m],
      GroupIN: I,
      GroupDIR: g
    }), p()(a, "FISH_LEFT_DOWN_IN", {
      IN: x,
      OUTS: [m],
      GroupIN: x,
      GroupDIR: m,
      TopicIN: I
    }), p()(a, "FISH_RIGHT_UP", {
      IN: m,
      OUTS: [d],
      GroupIN: v,
      GroupDIR: d,
      Child: "FISH_RIGHT_UP_IN"
    }), p()(a, "FISH_RIGHT_DOWN", {
      IN: g,
      OUTS: [d],
      GroupIN: v,
      GroupDIR: d,
      Child: "FISH_RIGHT_DOWN_IN"
    }), p()(a, "FISH_LEFT_UP", {
      IN: I,
      OUTS: [v],
      GroupIN: d,
      GroupDIR: v,
      Child: "FISH_LEFT_UP_IN"
    }), p()(a, "FISH_LEFT_DOWN", {
      IN: x,
      OUTS: [v],
      GroupIN: d,
      GroupDIR: v,
      Child: "FISH_LEFT_DOWN_IN"
    }), p()(a, "FISH_RIGHT", {
      IN: v,
      OUTS: [d],
      GroupIN: v,
      GroupDIR: "RIGHT-INTER"
    }), p()(a, "FISH_LEFT", {
      IN: d,
      OUTS: [v],
      GroupIN: d,
      GroupDIR: "LEFT-INTER"
    }), a),
    xt = [10, 10, 10, 10],
    It = "Helvetica, Arial, sans-serif",
    Ot = [{
      text: {
        content: "Central Topic",
        fontSize: 24,
        fontFamily: It
      },
      padding: [10, 10, 10, 10]
    }, {
      text: {
        content: "Main Topic",
        fontSize: 16,
        fontFamily: It
      },
      padding: [10, 10, 10, 10]
    }, {
      text: {
        content: "Subtopic",
        fontSize: 12,
        fontFamily: It
      },
      padding: [5, 5, 5, 5]
    }];

  function bt(t) {
    var n = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
      } catch (t) {
        return !1
      }
    }();
    return function() {
      var e, r = Z()(t);
      if (n) {
        var o = Z()(this).constructor;
        e = Reflect.construct(r, arguments, o)
      } else e = r.apply(this, arguments);
      return Q()(this, e)
    }
  }
  var Tt = function() {
      function t(n) {
        var e = this;
        tt()(this, t), this.id = n.id || ++N, this.pos = n.pos || {
          x: 0,
          y: 0
        }, this.size = n.size || {
          width: 0,
          height: 0
        }, this.text = n.text, this.padding = n.padding || [0, 0, 0, 0], this.margin = n.margin || [0, 0, 0, 0];
        var r = s()(this.padding, 4),
          o = r[0],
          i = r[1],
          a = r[2],
          u = r[3];
        this.size.width += u + i, this.size.height += o + a, this.elts = n.elts || [], this.elts.forEach((function(t) {
          return t.parent = e
        })), this.IN = n.IN
      }
      return et()(t, [{
        key: "getJoint",
        value: function() {
          S("Undefined method", this.getJoint)
        }
      }]), t
    }(),
    wt = function(t) {
      q()(e, t);
      var n = bt(e);

      function e(t) {
        var r;
        return tt()(this, e), (r = n.call(this, t)).type = O, r.color = t.color, r
      }
      return et()(e, [{
        key: "getJoint",
        value: function() {
          var t = b(this.IN) ? this.IN : this.parent.IN;
          return yt(this, t)
        }
      }, {
        key: "getTopic",
        value: function() {
          return this
        }
      }]), e
    }(Tt),
    Et = function(t) {
      q()(e, t);
      var n = bt(e);

      function e(t) {
        var r;
        return tt()(this, e), (r = n.call(this, t)).type = "GROUP", r.dir = t.dir, r.align = t.align, r.color = t.color, r
      }
      return et()(e, [{
        key: "getJoint",
        value: function() {
          return function(t, n) {
            var e = ht(t, n);
            if (!t.align) return e;
            var r = t.align,
              o = L(r);
            switch (r) {
              case v:
                var i = j(o, e.x);
                return w(e, i);
              case d:
                var a = j(o, t.size.width - e.x);
                return w(e, a);
              case h:
              case g:
              case x:
                var u = A(o, e.y);
                return w(e, u);
              case y:
              case m:
              case I:
                var c = A(o, t.size.height - e.y);
                return w(e, c)
            }
          }(this, this.IN)
        }
      }, {
        key: "getTopic",
        value: function() {
          return this.elts[0].getTopic()
        }
      }, {
        key: "getTopics",
        value: function() {
          return this.elts.map((function(t) {
            return t.getTopic()
          }))
        }
      }, {
        key: "getChildJoint",
        value: function(t) {
          var n = this.elts[this.elts.length - 1],
            e = yt(n, t);
          return w(pt(n, this), e)
        }
      }]), e
    }(Tt),
    _t = function(t) {
      q()(e, t);
      var n = bt(e);

      function e(t) {
        var r;
        return tt()(this, e), (r = n.call(this, t)).type = "BRANCH", r.OUTS = t.OUTS, r.struct = t.struct, r.padding = t.padding || c()(xt), r
      }
      return et()(e, [{
        key: "getJoint",
        value: function() {
          return function(t, n) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              r = t.getTopic(),
              o = pt(r, t),
              i = w(o, r.getJoint()),
              a = L(n);
            switch (n) {
              case v:
                var u = j(a, i.x + e);
                return w(i, u);
              case d:
                var c = j(a, t.size.width - i.x + e);
                return w(i, c);
              case h:
              case g:
              case x:
                var f = A(a, i.y + e);
                return w(i, f);
              case y:
              case m:
              case I:
                var s = A(a, t.size.height - i.y + e);
                return w(i, s)
            }
          }(this, this.IN)
        }
      }, {
        key: "getTopic",
        value: function() {
          return this.elts[0]
        }
      }, {
        key: "getChildJoint",
        value: function(t) {
          var n = this.getTopic(),
            e = yt(n, t);
          return w(pt(n, this), e)
        }
      }, {
        key: "getOutPoints",
        value: function() {
          var t = this.getTopic();
          return this.OUTS.map((function(n) {
            return yt(t, n, 10)
          }))
        }
      }, {
        key: "createOutConns",
        value: function() {
          var t = this.getTopic();
          return this.OUTS.map((function(n) {
            var e = {
                tok: t,
                pos: yt(t, n)
              },
              r = {
                tok: t,
                pos: yt(t, n, 10)
              };
            return new St(e, r)
          }))
        }
      }]), e
    }(Tt),
    St = function() {
      function t(n, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        tt()(this, t), this.points = [n, e], this.type = "CONN", this.style = r.style, this.dir = r.dir
      }
      return et()(t, [{
        key: "generate",
        value: function() {
          var t = this.points.map((function(t) {
            return w(t.tok.pos, t.pos)
          }));
          return {
            p1: t[0],
            p2: t[1]
          }
        }
      }]), t
    }(),
    Nt = function(t, n) {
      var e = Object.assign({}, n.text, t.text),
        r = U(e.content, e);
      return new wt({
        id: t.id,
        size: Object.assign({}, r),
        margin: [5, 5, 5, 5],
        color: t.color || G(),
        text: e,
        padding: t.padding || n.padding
      })
    },
    Gt = document.createTextNode.bind(document),
    Pt = function(t) {
      return t.replace(/[A-Z]/g, (function(t) {
        return "-" + t.toLowerCase()
      }))
    },
    Rt = function(t, n) {
      var e = [],
        r = [],
        o = [];
      for (var i in t) {
        var a = t[i],
          u = n[i];
        void 0 === u ? e.push(i) : a !== u && r.push(i)
      }
      for (var c in n) {
        void 0 === t[c] && o.push(c)
      }
      return [e, r, o]
    },
    Lt = function t(n) {
      if ("txt" === n.tag) n.tok = Gt(n.id);
      else {
        var e = (u = n.tag, document.createElementNS("http://www.w3.org/2000/svg", u));
        for (var r in n.attributes) e.setAttribute(Pt(r), n.attributes[r]);
        for (var o in n.data) e.dataset[o] = n.data[o];
        for (var i in n.children) {
          var a = n.children[i];
          t(a), e.appendChild(a.tok)
        }
        e.dataset.id = n.id, n.tok = e
      }
      var u
    },
    At = function(t, n) {
      n ? function t(n, e) {
        var r = e.tok,
          o = Rt(n.attributes, e.attributes),
          i = s()(o, 3),
          a = i[0],
          u = i[1],
          c = i[2];
        a.forEach((function(t) {
          return r.setAttribute(Pt(t), n.attributes[t])
        })), u.forEach((function(t) {
          return r.setAttribute(Pt(t), n.attributes[t])
        })), c.forEach((function(t) {
          return r.removeAttribute(Pt(t))
        }));
        var f = Rt(n.data, e.data),
          l = s()(f, 3),
          p = l[0],
          h = l[1],
          y = l[2];
        p.forEach((function(t) {
          return r.dataset[t] = n.data[t]
        })), h.forEach((function(t) {
          return r.dataset[t] = n.data[t]
        })), y.forEach((function(t) {
          return delete r.dataset[t]
        }));
        var d = Rt(n.children, e.children),
          v = s()(d, 3),
          g = v[0],
          m = v[1],
          x = v[2];
        g.forEach((function(t) {
          var e = n.children[t];
          Lt(e), r.appendChild(e.tok)
        })), m.forEach((function(r) {
          return t(n.children[r], e.children[r])
        })), x.forEach((function(t) {
          return function t(n) {
            for (var e in n.children) t(n.children[e]);
            n.tok.remove(), delete n.children, delete n.attributes, delete n.tok
          }(e.children[t])
        })), delete e.tok, n.tok = r
      }(t, n) : Lt(t)
    },
    jt = function(t, n) {
      var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return {
        id: t,
        tag: n,
        attributes: e,
        data: r,
        children: {}
      }
    },
    kt = function(t, n) {
      return t.children[n.id] = n
    },
    Ut = null,
    Dt = null,
    Mt = !1,
    Ht = function(t) {
      t && ((!Mt || Dt !== t) && Ut && (t.appendChild(Ut.tok), Mt = !0), Dt = t)
    };

  function Ft(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n && (r = r.filter((function(n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable
      }))), e.push.apply(e, r)
    }
    return e
  }

  function Ct(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2 ? Ft(Object(e), !0).forEach((function(n) {
        p()(t, n, e[n])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Ft(Object(e)).forEach((function(n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
      }))
    }
    return t
  }
  var zt = {},
    Jt = function(t, n) {
      return zt.SVG = jt("SVG", "svg", n), zt.PATH_G = jt("PATH_G", "g"), zt.BOUNDARY_G = jt("BOUNDARY_G", "g"), zt.TOPIC_G = jt("TOPIC_G", "g"), kt(zt.SVG, zt.PATH_G), kt(zt.SVG, zt.BOUNDARY_G), kt(zt.SVG, zt.TOPIC_G), Ht(t), zt.SVG
    },
    Vt = function() {
      return t = zt.SVG, At(t, Ut), Ut = t, void Ht(Dt);
      var t
    },
    Wt = function(t) {
      var n = t.generate(),
        e = function(t, n, e) {
          switch (e) {
            case "ANGLE_VERT":
              return "M ".concat(t.x, " ").concat(t.y, " L ").concat(t.x, " ").concat(n.y, " L ").concat(n.x, " ").concat(n.y);
            case "ANGLE_HORI":
              return "M ".concat(t.x, " ").concat(t.y, " L ").concat(n.x, " ").concat(t.y, " L ").concat(n.x, " ").concat(n.y);
            default:
              return "M ".concat(t.x, " ").concat(t.y, " L ").concat(n.x, " ").concat(n.y)
          }
        }(n.p1, n.p2, t.style),
        r = jt(e, "path", {
          stroke: "black",
          fill: "none",
          d: e
        });
      return kt(zt.PATH_G, r), r
    },
    Bt = function(t) {
      var n = t.id,
        e = t.pos,
        r = t.size,
        o = (t.color, t.padding),
        i = jt(n, "g", {
          transform: "translate(".concat(e.x, " ").concat(e.y, ")")
        }, {
          type: O
        }),
        a = jt("TOPIC_RECT_ID", "rect", Ct(Ct({}, r), {}, {
          stroke: "black",
          fill: "white",
          rx: 3,
          ry: 3
        })),
        u = function(t, n) {
          var e = t.content,
            r = t.fontSize,
            o = t.fontFamily,
            i = {
              transform: "translate(".concat(n.x, " ").concat(n.y, ")"),
              style: "-moz-transform: translateY(".concat(n.y + r, "px)"),
              fill: "#000",
              fontSize: r,
              fontFamily: o,
              "alignment-baseline": "before-edge"
            },
            a = jt("TEXT_ID", "text", i),
            u = function(t) {
              return {
                id: t,
                tag: "txt",
                attributes: {},
                data: {},
                children: {}
              }
            }(e);
          return kt(a, u), a
        }(t.text, {
          x: o[3],
          y: o[0]
        });
      return kt(i, a), kt(i, u), kt(zt.TOPIC_G, i), i
    },
    Yt = function(t) {
      var n = t.id,
        e = t.pos,
        r = t.size,
        o = t.color,
        i = Ct(Ct({}, r), {}, {
          fill: o,
          transform: "translate(".concat(e.x, " ").concat(e.y, ")"),
          fillOpacity: "0.3",
          rx: 6,
          ry: 6
        }),
        a = jt(n, "rect", i, {
          type: "BOUNDARY"
        });
      return kt(zt.BOUNDARY_G, a), a
    },
    qt = {
      Linear: function(t, n, e, r) {
        return e * t / r + n
      },
      Quad: {
        easeIn: function(t, n, e, r) {
          return e * (t /= r) * t + n
        },
        easeOut: function(t, n, e, r) {
          return -e * (t /= r) * (t - 2) + n
        },
        easeInOut: function(t, n, e, r) {
          return (t /= r / 2) < 1 ? e / 2 * t * t + n : -e / 2 * (--t * (t - 2) - 1) + n
        }
      }
    }.Quad.easeInOut,
    $t = function t(n) {
      switch (n.type) {
        case O:
          return n;
        case "GROUP":
          return n.elts.forEach(t), lt(n), n;
        case "BRANCH":
          return n.elts.forEach(t),
            function(t) {
              var n = B()(t.elts),
                e = (n[0], n.slice(1)),
                r = t.getOutPoints(),
                o = {
                  x: 0,
                  y: 0
                },
                i = [o].concat(c()(r)),
                a = e.map((function(t) {
                  return t.getJoint()
                })),
                u = [o].concat(c()(a)),
                f = vt(t.elts, u, i),
                l = s()(f, 2),
                p = l[0],
                h = l[1];
              t.margin = h;
              var y = t.padding;
              t.size = {
                width: p.width + y[1] + y[3],
                height: p.height + y[0] + y[2]
              }, t.elts.forEach((function(t) {
                t.pos.x += y[3], t.pos.y += y[0]
              }))
            }(n), n;
        default:
          logErr("Unexpect tok.type", t, n)
      }
    },
    Qt = function(t) {
      var n = [];
      return function t(e) {
        switch (e.type) {
          case O:
            break;
          case "GROUP":
            e.elts.forEach(t);
            break;
          case "BRANCH":
            var r = mt[e.struct],
              o = r.OUTS,
              i = r.LineStyle,
              a = B()(e.elts),
              u = a[0],
              c = a.slice(1);
            c.forEach(t), c.forEach((function(t, e) {
              var r = o[e],
                a = {
                  tok: u,
                  pos: yt(u, r)
                },
                c = {
                  tok: u,
                  pos: yt(u, r, 10)
                },
                f = function t(e) {
                  switch (e.type) {
                    case O:
                      return [{
                        tok: e,
                        pos: e.getJoint()
                      }];
                    case "GROUP":
                      return T(e.elts, t);
                    case "BRANCH":
                      var r = e.getTopic(),
                        o = {
                          tok: r,
                          pos: E(e.getJoint(), r.pos)
                        },
                        i = {
                          tok: r,
                          pos: r.getJoint()
                        };
                      return n.push(new St(o, i)), [o]
                  }
                }(t);
              n.push(new St(a, c, {
                dir: r
              })), f.forEach((function(t) {
                n.push(new St(c, t, {
                  dir: r,
                  style: i
                }))
              }))
            }))
        }
      }(t), n
    },
    Xt = function(t) {
      return function t(n, e) {
        if (n.pos = w(n.pos, e), n.parent = null, function(t) {
            return t.type === O
          }(n)) return [n];
        var r = T(n.elts, (function(e) {
          return t(e, n.pos)
        }));
        return function(t) {
          return "GROUP" === t.type
        }(n) && ! function(t) {
          return !t.color
        }(n) ? [n].concat(c()(r)) : r
      }(t, {
        x: 0,
        y: 0
      })
    },
    Zt = function(t) {
      return T(t, (function(t) {
        switch (t.type) {
          case O:
            return [Bt(t)];
          case "GROUP":
            return [Yt(t)];
          case "CONN":
            return [Wt(t)];
          default:
            return
        }
      }))
    };

  function Kt(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n && (r = r.filter((function(n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable
      }))), e.push.apply(e, r)
    }
    return e
  }

  function tn(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2 ? Kt(Object(e), !0).forEach((function(n) {
        p()(t, n, e[n])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Kt(Object(e)).forEach((function(n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
      }))
    }
    return t
  }
  var nn = function(t, n) {
      var e, r, o = t.struct || mt[n].Child || n,
        i = mt[n].IN,
        a = mt[o].OUTS,
        u = {
          IN: i,
          struct: o
        },
        c = t.tok;
      if (c.IN = mt[o].TopicIN, null == t.children || _(t.children)) return new _t(tn({
        elts: [c],
        OUTS: []
      }, u));
      switch (o) {
        case "MAP":
          var f = (e = t.children, r = Math.ceil(e.length / 2), [e.slice(0, r), e.slice(r)]),
            l = s()(f, 2),
            p = l[0],
            h = l[1],
            y = on(p, "LOGIC_R");
          if (_(h)) return new _t(tn({
            elts: [c, y],
            OUTS: a.slice(0, 1)
          }, u));
          var d = on(h, "LOGIC_L");
          return new _t(tn({
            elts: [c, y, d],
            OUTS: a
          }, u));
        default:
          var v = on(t.children, o);
          return new _t(tn({
            elts: [c, v],
            OUTS: a
          }, u))
      }
    },
    en = function(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "MAP",
        e = "rgb(190, 190, 244)";
      return Array.isArray(t) ? on(t, n, e) : nn(t, n)
    },
    rn = function(t) {
      return function(n, e) {
        var r = e % 2 == 0 ? t[0] : t[1];
        return en(n, r)
      }
    },
    on = function(t, n, e) {
      var r = function(t, n) {
          switch (n) {
            case "TIME_H":
              var e = rn(["TIME_H_UP", "TIME_H_DOWN"]);
              return t.map(e);
            case "TIME_V":
              var r = rn(["TREE_R", "TREE_L"]);
              return t.map(r);
            case "FISH_RIGHT":
              var o = rn(["FISH_RIGHT_UP", "FISH_RIGHT_DOWN"]);
              return t.map(o);
            case "FISH_LEFT":
              var i = rn(["FISH_LEFT_UP", "FISH_LEFT_DOWN"]);
              return t.map(i);
            default:
              return t.map((function(t) {
                return en(t, n)
              }))
          }
        }(t, n),
        o = mt[n].GroupIN,
        i = mt[n].GroupDIR,
        a = mt[n].GroupAlign;
      return new Et({
        elts: r,
        IN: o,
        dir: i,
        align: a,
        color: e,
        ctx: n
      })
    };

  function an(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n && (r = r.filter((function(n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable
      }))), e.push.apply(e, r)
    }
    return e
  }

  function un(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = null != arguments[n] ? arguments[n] : {};
      n % 2 ? an(Object(e), !0).forEach((function(n) {
        p()(t, n, e[n])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : an(Object(e)).forEach((function(n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
      }))
    }
    return t
  }
  var cn = {},
    fn = function(t) {
      var n = Qt(t),
        e = Xt(t);
      ! function(t) {
        t.forEach((function(t) {
          var n = cn[t.id];
          n ? (t.beginPos = un({}, n.pos), t.endPos = {
            x: t.pos.x - t.beginPos.x,
            y: t.pos.y - t.beginPos.y
          }) : (t.beginPos = {
            x: 0,
            y: 0
          }, t.endPos = un({}, t.pos)), t.pos = un({}, t.beginPos)
        }))
      }(e);
      var r = 0;
      ! function t() {
        r++,
        function(t, n, e) {
          t.forEach((function(t) {
            t.pos.x = qt(n, t.beginPos.x, t.endPos.x, e), t.pos.y = qt(n, t.beginPos.y, t.endPos.y, e)
          }))
        }(e, r, 15), Jt(void 0, {
          width: 1e4,
          height: 1e4
        }), Zt([].concat(c()(n), c()(e))), Vt(), r < 15 && requestAnimationFrame(t)
      }(),
      function(t) {
        cn = {}, t.forEach((function(t) {
          return cn[t.id] = t
        }))
      }(e)
    },
    sn = function(t) {
      return t = function t(n) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (Array.isArray(n)) return n.forEach((function(n) {
          return t(n, e)
        }));
        var r = Math.min(e, Ot.length - 1),
          o = Ot[r],
          i = Nt(n, o);
        return n.tok = i, n.children && n.children.forEach((function(n) {
          return t(n, e + 1)
        })), n
      }(t), t = en(t), t = $t(t), fn(t)
    },
    ln = {
      state: {
        el: null,
        root: {}
      },
      mutations: {
        SET_CONTAINER: function(t, n) {
          t.el = n
        },
        SET_ROOT: function(t, n) {
          t.root = n
        }
      },
      actions: {
        INIT_STATE: function(t, n) {
          return F()(M.a.mark((function e() {
            var r, o, i;
            return M.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  r = t.commit, o = n.el, i = n.root, o && r("SET_CONTAINER", o), i && r("SET_ROOT", i);
                case 4:
                case "end":
                  return e.stop()
              }
            }), e)
          })))()
        },
        UPDATE_ROOT: function(t, n) {
          return F()(M.a.mark((function e() {
            return M.a.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  (0, t.commit)("SET_ROOT", n);
                case 2:
                case "end":
                  return e.stop()
              }
            }), e)
          })))()
        }
      }
    },
    pn = {},
    hn = document.body,
    yn = function() {
      var t = F()(M.a.mark((function t(n) {
        var e, r, o, i, a;
        return M.a.wrap((function(t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              e = n.target, r = !0;
            case 2:
              if (!r || e === hn) {
                t.next = 18;
                break
              }
              if (o = e.dataset.type, !(i = pn[n.type][o])) {
                t.next = 15;
                break
              }
              a = 0;
            case 7:
              if (!(a < i.length)) {
                t.next = 15;
                break
              }
              return t.next = 10, i[a](n);
            case 10:
              !1 === t.sent && (n.stopPropagation(), n.preventDefault(), r = !1);
            case 12:
              a++, t.next = 7;
              break;
            case 15:
              e = e.parentNode, t.next = 2;
              break;
            case 18:
            case "end":
              return t.stop()
          }
        }), t)
      })));
      return function(n) {
        return t.apply(this, arguments)
      }
    }();
  (function(t, n, e) {
    pn[t] || (document.body.addEventListener(t, yn), pn[t] = {}), pn[t][n] = pn[t][n] || [], pn[t][n].push(e)
  })("click", O, (function(t) {
    console.log("click topic", t)
  }));
  z = function(t) {
      var n = t.el,
        e = t.root;
      Jt(n), sn(e)
    },
    function(t) {
      var n = t.state,
        e = t.mutations,
        r = t.actions,
        o = t.render;
      C = {
        state: n,
        mutations: e,
        actions: r,
        render: o
      }
    }(ln);
  var dn = 0,
    vn = function() {
      return ++dn
    },
    gn = /^(\s+)(.*)$/,
    mn = function(t) {
      var n = gn.exec(t);
      if (null === n) return null;
      var e = n[2],
        r = n[1].length;
      return {
        id: vn(),
        text: {
          content: e
        },
        children: [],
        depth: r
      }
    };

  function xn(t, n) {
    var e;
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
      if (Array.isArray(t) || (e = function(t, n) {
          if (!t) return;
          if ("string" == typeof t) return In(t, n);
          var e = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === e && t.constructor && (e = t.constructor.name);
          if ("Map" === e || "Set" === e) return Array.from(t);
          if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return In(t, n)
        }(t)) || n && t && "number" == typeof t.length) {
        e && (t = e);
        var r = 0,
          o = function() {};
        return {
          s: o,
          n: function() {
            return r >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[r++]
            }
          },
          e: function(t) {
            throw t
          },
          f: o
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, a = !0,
      u = !1;
    return {
      s: function() {
        e = t[Symbol.iterator]()
      },
      n: function() {
        var t = e.next();
        return a = t.done, t
      },
      e: function(t) {
        u = !0, i = t
      },
      f: function() {
        try {
          a || null == e.return || e.return()
        } finally {
          if (u) throw i
        }
      }
    }
  }

  function In(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r
  }
  var On = function(t, n) {
      return n.getImageData(t, 0, 1, 1e4).data
    },
    bn = function(t, n) {
      return n.getImageData(0, t, 1e4, 1).data
    },
    Tn = function(t) {
      var n, e = t[0],
        r = xn(t);
      try {
        for (r.s(); !(n = r.n()).done;) {
          var o = n.value;
          o > e && (e = o)
        }
      } catch (t) {
        r.e(t)
      } finally {
        r.f()
      }
      return e
    },
    wn = {
      text: localStorage.getItem("mind_map_text") || "ΕΡΓΑΣΙΕΣ ΕΒΔΟΜΑΔΑΣ\n ΔΕΥΤΕΡΑ-ΠΑΡΑΣΚΕΥΗ\n  ΞΥΠΝΑΩ\n  ΝΤΥΝΟΜΑΙ\n  ΤΡΩΩ\n  ΠΑΩ ΣΧΟΛΕΙΟ\n   ΓΛΩΣΣΑ\n   ΜΑΘΗΜΑΤΙΚΑ\n ΣΑΒΒΑΤΟ\n  ΞΥΠΝΑΩ\n  ΝΤΥΝΟΜΑΙ\n  ΤΡΩΩ\n   ΑΥΓΑ ΜΕ ΜΠΕΙΚΟΝ\n ΚΥΡΙΑΚΗ\n  ΚΟΙΜΑΜΑΙ ΠΙΟ ΠΟΛΥ\n   ΧΟΥΖΟΥΡΕΥΩ\n  ΝΤΥΝΟΜΑΙ\n  ΤΡΩΩ\n  ",
      struct: "MAP"
    },
    En = document.getElementById("mind-map"),
    _n = document.getElementById("text-area"),
    Sn = document.getElementById("download-button"),
    Nn = function() {
      var t = function(t) {
        var n = t.split("\n").filter((function(t) {
            return "" !== t.trim()
          })),
          e = {
            id: vn(),
            text: {
              content: n[0]
            },
            children: [],
            depth: 0
          },
          r = n.slice(1).map(mn).filter((function(t) {
            return t
          }));
        return dn = 0,
          function t(n, e) {
            for (;;) {
              if (n === r.length) return n;
              var o = r[n];
              if (o.depth <= e.depth) return n;
              e.children.push(o), n = t(n + 1, o)
            }
          }(0, e), e
      }(wn.text);
      t.struct = wn.struct,
        function(t, n) {
          V("INIT_STATE", {
            el: t,
            root: n
          })
        }(En, t)
    };
  _n.timeout = null, _n.addEventListener("input", (function(t) {
    clearTimeout(_n.timeout), _n.timeout = setTimeout((function() {
      wn.text = _n.value, localStorage.setItem("mind_map_text", _n.value), Nn()
    }), 1e3)
  }));
  var Gn = function(t) {
    var n = document.createElement("canvas");
    n.width = 1e4, n.height = 1e4;
    var e = n.getContext("2d");
    return e.drawImage(t, 0, 0, 1e4, 1e4),
      function(t) {
        for (var n = !1, e = 0, r = 0; r < 1e4; r++)
          if (n || 0 === Tn(bn(r, t))) {
            if (n && 0 === Tn(bn(r, t))) {
              e = r;
              break
            }
          } else n = !0;
        n = !1;
        for (var o = 0, i = 0; i < 1e4; i++)
          if (n || 0 === Tn(On(i, t))) {
            if (n && 0 === Tn(On(i, t))) {
              o = i;
              break
            }
          } else n = !0;
        return {
          width: o,
          height: e
        }
      }(e)
  };
  Sn.addEventListener("click", (function(t) {
    if ("" !== _n.value.trim()) {
      var n = document.querySelector("#mind-map > svg"),
        e = (new XMLSerializer).serializeToString(n),
        r = "data:image/svg+xml;base64," + btoa(e),
        o = new Image;
      o.onload = function() {
        var t = Gn(o),
          n = t.width,
          e = t.height,
          r = document.createElement("canvas");
        r.height = e + 20, r.width = n + 20, r.getContext("2d").drawImage(o, 0, 0, 1e4, 1e4);
        var i = r.toDataURL(),
          a = document.createElement("a");
        a.download = "mindmap.png", a.style.opacity = "0", document.body.appendChild(a), a.href = i, a.click(), a.remove()
      }, o.onerror = function() {
        for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
        return console.error(n)
      }, o.src = r
    }
  })), _n.value = wn.text, Nn()
}]);