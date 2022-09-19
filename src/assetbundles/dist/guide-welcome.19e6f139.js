import { _ as sa, l as Ft, h as qt, k as Pe, d as du, r as dt, c as pl, b as pu, e as tf, u as ao, t as Qn, i as nf, p as rf, j as ga, T as sf, m as af } from "./_plugin-vue_export-helper.54751eae.js";
import { l as yi, d as of, e as lf, t as ml } from "./guide.e341e0e3.js";
const cf = {}, uf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, hf = /* @__PURE__ */ Pe("path", {
  "fill-rule": "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), ff = [
  hf
];
function df(o, e) {
  return Ft(), qt("svg", uf, ff);
}
const pf = /* @__PURE__ */ sa(cf, [["render", df], ["__file", "SvgPause.vue"]]), mf = {}, gf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, _f = /* @__PURE__ */ Pe("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
  "clip-rule": "evenodd"
}, null, -1), xf = [
  _f
];
function vf(o, e) {
  return Ft(), qt("svg", gf, xf);
}
const yf = /* @__PURE__ */ sa(mf, [["render", vf], ["__file", "SvgPlay.vue"]]);
function Rn(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function mu(o, e) {
  o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.__proto__ = e;
}
/*!
 * GSAP 3.11.1
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ut = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, gr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Oo, Jt, nt, Yt = 1e8, Ge = 1 / Yt, oo = Math.PI * 2, Mf = oo / 4, bf = 0, gu = Math.sqrt, Sf = Math.cos, wf = Math.sin, ot = function(e) {
  return typeof e == "string";
}, $e = function(e) {
  return typeof e == "function";
}, kn = function(e) {
  return typeof e == "number";
}, Uo = function(e) {
  return typeof e > "u";
}, xn = function(e) {
  return typeof e == "object";
}, At = function(e) {
  return e !== !1;
}, _u = function() {
  return typeof window < "u";
}, ys = function(e) {
  return $e(e) || ot(e);
}, xu = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, gt = Array.isArray, lo = /(?:-?\.?\d|\.)+/gi, vu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, lr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _a = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, yu = /[+-]=-?[.\d]+/, Mu = /[^,'"\[\]\s]+/gi, Tf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Xe, Xt, co, zo, kt = {}, Ks = {}, bu, Su = function(e) {
  return (Ks = Ii(e, kt)) && Bt;
}, ko = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, $s = function(e, t) {
  return !t && console.warn(e);
}, wu = function(e, t) {
  return e && (kt[e] = t) && Ks && (Ks[e] = t) || kt;
}, ts = function() {
  return 0;
}, Ef = {
  suppressEvents: !0,
  isStart: !0
}, Kr = {
  suppressEvents: !0
}, Bo = {}, ri = [], uo = {}, Tu, Nt = {}, xa = {}, gl = 30, Xs = [], Vo = "", Go = function(e) {
  var t = e[0], n, i;
  if (xn(t) || $e(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
    for (i = Xs.length; i-- && !Xs[i].targetTest(t); )
      ;
    n = Xs[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new ju(e[i], n))) || e.splice(i, 1);
  return e;
}, Ai = function(e) {
  return e._gsap || Go(Kt(e))[0]._gsap;
}, Eu = function(e, t, n) {
  return (n = e[t]) && $e(n) ? e[t]() : Uo(n) && e.getAttribute && e.getAttribute(t) || n;
}, Ct = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, Qe = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, ut = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, hr = function(e, t) {
  var n = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i;
}, Af = function(e, t) {
  for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; )
    ;
  return i < n;
}, Zs = function() {
  var e = ri.length, t = ri.slice(0), n, i;
  for (uo = {}, ri.length = 0, n = 0; n < e; n++)
    i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Au = function(e, t, n, i) {
  ri.length && Zs(), e.render(t, n, i || Jt), ri.length && Zs();
}, Cu = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Mu).length < 2 ? t : ot(e) ? e.trim() : e;
}, Lu = function(e) {
  return e;
}, en = function(e, t) {
  for (var n in t)
    n in e || (e[n] = t[n]);
  return e;
}, Cf = function(e) {
  return function(t, n) {
    for (var i in n)
      i in t || i === "duration" && e || i === "ease" || (t[i] = n[i]);
  };
}, Ii = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, _l = function o(e, t) {
  for (var n in t)
    n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = xn(t[n]) ? o(e[n] || (e[n] = {}), t[n]) : t[n]);
  return e;
}, Js = function(e, t) {
  var n = {}, i;
  for (i in e)
    i in t || (n[i] = e[i]);
  return n;
}, $r = function(e) {
  var t = e.parent || Xe, n = e.keyframes ? Cf(gt(e.keyframes)) : en;
  if (At(e.inherit))
    for (; t; )
      n(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, Lf = function(e, t) {
  for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; )
    ;
  return n < 0;
}, Ru = function(e, t, n, i, r) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var s = e[i], a;
  if (r)
    for (a = t[r]; s && s[r] > a; )
      s = s._prev;
  return s ? (t._next = s._next, s._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e, t;
}, aa = function(e, t, n, i) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var r = t._prev, s = t._next;
  r ? r._next = s : e[n] === t && (e[n] = s), s ? s._prev = r : e[i] === t && (e[i] = r), t._next = t._prev = t.parent = null;
}, Bn = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0;
}, Ci = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var n = e; n; )
      n._dirty = 1, n = n.parent;
  return e;
}, Rf = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, ho = function(e, t, n, i) {
  return e._startAt && (Jt ? e._startAt.revert(Kr) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, Pf = function o(e) {
  return !e || e._ts && o(e.parent);
}, xl = function(e) {
  return e._repeat ? _r(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, _r = function(e, t) {
  var n = Math.floor(e /= t);
  return e && n === e ? n - 1 : n;
}, Qs = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, oa = function(e) {
  return e._end = ut(e._start + (e._tDur / Math.abs(e._ts || e._rts || Ge) || 0));
}, la = function(e, t) {
  var n = e._dp;
  return n && n.smoothChildTiming && e._ts && (e._start = ut(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), oa(e), n._dirty || Ci(n, e)), e;
}, Pu = function(e, t) {
  var n;
  if ((t._time || t._initted && !t._dur) && (n = Qs(e.rawTime(), t), (!t._dur || ps(0, t.totalDuration(), n) - t._tTime > Ge) && t.render(n, !0)), Ci(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (n = e; n._dp; )
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    e._zTime = -Ge;
  }
}, pn = function(e, t, n, i) {
  return t.parent && Bn(t), t._start = ut((kn(n) ? n : n || e !== Xe ? Wt(e, n, t) : e._time) + t._delay), t._end = ut(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ru(e, t, "_first", "_last", e._sort ? "_start" : 0), fo(t) || (e._recent = t), i || Pu(e, t), e._ts < 0 && la(e, e._tTime), e;
}, Du = function(e, t) {
  return (kt.ScrollTrigger || ko("scrollTrigger", t)) && kt.ScrollTrigger.create(t, e);
}, Iu = function(e, t, n, i) {
  if (Wo(e, t), !e._initted)
    return 1;
  if (!n && e._pt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Tu !== Ot.frame)
    return ri.push(e), e._lazy = [t, i], 1;
}, Df = function o(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t));
}, fo = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, If = function(e, t, n, i) {
  var r = e.ratio, s = t < 0 || !t && (!e._start && Df(e) && !(!e._initted && fo(e)) || (e._ts < 0 || e._dp._ts < 0) && !fo(e)) ? 0 : 1, a = e._rDelay, l = 0, c, u, h;
  if (a && e._repeat && (l = ps(0, e._tDur, t), u = _r(l, a), e._yoyo && u & 1 && (s = 1 - s), u !== _r(e._tTime, a) && (r = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== r || Jt || i || e._zTime === Ge || !t && e._zTime) {
    if (!e._initted && Iu(e, t, i, n))
      return;
    for (h = e._zTime, e._zTime = t || (n ? Ge : 0), n || (n = t && !h), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = l, c = e._pt; c; )
      c.r(s, c.d), c = c._next;
    t < 0 && ho(e, t, n, !0), e._onUpdate && !n && $t(e, "onUpdate"), l && e._repeat && !n && e.parent && $t(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && Bn(e, 1), !n && !Jt && ($t(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = t);
}, Ff = function(e, t, n) {
  var i;
  if (n > t)
    for (i = e._first; i && i._start <= n; ) {
      if (i.data === "isPause" && i._start > t)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= n; ) {
      if (i.data === "isPause" && i._start < t)
        return i;
      i = i._prev;
    }
}, xr = function(e, t, n, i) {
  var r = e._repeat, s = ut(t) || 0, a = e._tTime / e._tDur;
  return a && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = r ? r < 0 ? 1e10 : ut(s * (r + 1) + e._rDelay * r) : s, a > 0 && !i ? la(e, e._tTime = e._tDur * a) : e.parent && oa(e), n || Ci(e.parent, e), e;
}, vl = function(e) {
  return e instanceof Et ? Ci(e) : xr(e, e._dur);
}, Nf = {
  _start: 0,
  endTime: ts,
  totalDuration: ts
}, Wt = function o(e, t, n) {
  var i = e.labels, r = e._recent || Nf, s = e.duration() >= Yt ? r.endTime(!1) : e._dur, a, l, c;
  return ot(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), c = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? r : n).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = s), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), c && n && (l = l / 100 * (gt(n) ? n[0] : n).totalDuration()), a > 1 ? o(e, t.substr(0, a - 1), n) + l : s + l)) : t == null ? s : +t;
}, Zr = function(e, t, n) {
  var i = kn(t[1]), r = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = t[r], a, l;
  if (i && (s.duration = t[1]), s.parent = n, e) {
    for (a = s, l = n; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = At(l.vars.inherit) && l.parent;
    s.immediateRender = At(a.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[r - 1];
  }
  return new rt(t[0], s, t[r + 1]);
}, li = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, ps = function(e, t, n) {
  return n < e ? e : n > t ? t : n;
}, mt = function(e, t) {
  return !ot(e) || !(t = Tf.exec(e)) ? "" : t[1];
}, Of = function(e, t, n) {
  return li(n, function(i) {
    return ps(e, t, i);
  });
}, po = [].slice, Fu = function(e, t) {
  return e && xn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && xn(e[0])) && !e.nodeType && e !== Xt;
}, Uf = function(e, t, n) {
  return n === void 0 && (n = []), e.forEach(function(i) {
    var r;
    return ot(i) && !t || Fu(i, 1) ? (r = n).push.apply(r, Kt(i)) : n.push(i);
  }) || n;
}, Kt = function(e, t, n) {
  return nt && !t && nt.selector ? nt.selector(e) : ot(e) && !n && (co || !vr()) ? po.call((t || zo).querySelectorAll(e), 0) : gt(e) ? Uf(e, n) : Fu(e) ? po.call(e, 0) : e ? [e] : [];
}, mo = function(e) {
  return e = Kt(e)[0] || $s("Invalid scope") || {}, function(t) {
    var n = e.current || e.nativeElement || e;
    return Kt(t, n.querySelectorAll ? n : n === e ? $s("Invalid scope") || zo.createElement("div") : e);
  };
}, Nu = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Ou = function(e) {
  if ($e(e))
    return e;
  var t = xn(e) ? e : {
    each: e
  }, n = Li(t.ease), i = t.from || 0, r = parseFloat(t.base) || 0, s = {}, a = i > 0 && i < 1, l = isNaN(i) || a, c = t.axis, u = i, h = i;
  return ot(i) ? u = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (u = i[0], h = i[1]), function(f, m, g) {
    var d = (g || t).length, p = s[d], _, y, M, v, b, E, C, x, w;
    if (!p) {
      if (w = t.grid === "auto" ? 0 : (t.grid || [1, Yt])[1], !w) {
        for (C = -Yt; C < (C = g[w++].getBoundingClientRect().left) && w < d; )
          ;
        w--;
      }
      for (p = s[d] = [], _ = l ? Math.min(w, d) * u - 0.5 : i % w, y = w === Yt ? 0 : l ? d * h / w - 0.5 : i / w | 0, C = 0, x = Yt, E = 0; E < d; E++)
        M = E % w - _, v = y - (E / w | 0), p[E] = b = c ? Math.abs(c === "y" ? v : M) : gu(M * M + v * v), b > C && (C = b), b < x && (x = b);
      i === "random" && Nu(p), p.max = C - x, p.min = x, p.v = d = (parseFloat(t.amount) || parseFloat(t.each) * (w > d ? d - 1 : c ? c === "y" ? d / w : w : Math.max(w, d / w)) || 0) * (i === "edges" ? -1 : 1), p.b = d < 0 ? r - d : r, p.u = mt(t.amount || t.each) || 0, n = n && d < 0 ? Wu(n) : n;
    }
    return d = (p[f] - p.min) / p.max || 0, ut(p.b + (n ? n(d) : d) * p.v) + p.u;
  };
}, go = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(n) {
    var i = ut(Math.round(parseFloat(n) / e) * e * t);
    return (i - i % 1) / t + (kn(n) ? 0 : mt(n));
  };
}, Uu = function(e, t) {
  var n = gt(e), i, r;
  return !n && xn(e) && (i = n = e.radius || Yt, e.values ? (e = Kt(e.values), (r = !kn(e[0])) && (i *= i)) : e = go(e.increment)), li(t, n ? $e(e) ? function(s) {
    return r = e(s), Math.abs(r - s) <= i ? r : s;
  } : function(s) {
    for (var a = parseFloat(r ? s.x : s), l = parseFloat(r ? s.y : 0), c = Yt, u = 0, h = e.length, f, m; h--; )
      r ? (f = e[h].x - a, m = e[h].y - l, f = f * f + m * m) : f = Math.abs(e[h] - a), f < c && (c = f, u = h);
    return u = !i || c <= i ? e[u] : s, r || u === s || kn(s) ? u : u + mt(s);
  } : go(e));
}, zu = function(e, t, n, i) {
  return li(gt(e) ? !t : n === !0 ? !!(n = 0) : !i, function() {
    return gt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * i) / i;
  });
}, zf = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(i) {
    return t.reduce(function(r, s) {
      return s(r);
    }, i);
  };
}, kf = function(e, t) {
  return function(n) {
    return e(parseFloat(n)) + (t || mt(n));
  };
}, Bf = function(e, t, n) {
  return Bu(e, t, 0, 1, n);
}, ku = function(e, t, n) {
  return li(n, function(i) {
    return e[~~t(i)];
  });
}, Vf = function o(e, t, n) {
  var i = t - e;
  return gt(e) ? ku(e, o(0, e.length), t) : li(n, function(r) {
    return (i + (r - e) % i) % i + e;
  });
}, Gf = function o(e, t, n) {
  var i = t - e, r = i * 2;
  return gt(e) ? ku(e, o(0, e.length - 1), t) : li(n, function(s) {
    return s = (r + (s - e) % r) % r || 0, e + (s > i ? r - s : s);
  });
}, ns = function(e) {
  for (var t = 0, n = "", i, r, s, a; ~(i = e.indexOf("random(", t)); )
    s = e.indexOf(")", i), a = e.charAt(i + 7) === "[", r = e.substr(i + 7, s - i - 7).match(a ? Mu : lo), n += e.substr(t, i - t) + zu(a ? r : +r[0], a ? 0 : +r[1], +r[2] || 1e-5), t = s + 1;
  return n + e.substr(t, e.length - t);
}, Bu = function(e, t, n, i, r) {
  var s = t - e, a = i - n;
  return li(r, function(l) {
    return n + ((l - e) / s * a || 0);
  });
}, Hf = function o(e, t, n, i) {
  var r = isNaN(e + t) ? 0 : function(m) {
    return (1 - m) * e + m * t;
  };
  if (!r) {
    var s = ot(e), a = {}, l, c, u, h, f;
    if (n === !0 && (i = 1) && (n = null), s)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (gt(e) && !gt(t)) {
      for (u = [], h = e.length, f = h - 2, c = 1; c < h; c++)
        u.push(o(e[c - 1], e[c]));
      h--, r = function(g) {
        g *= h;
        var d = Math.min(f, ~~g);
        return u[d](g - d);
      }, n = t;
    } else
      i || (e = Ii(gt(e) ? [] : {}, e));
    if (!u) {
      for (l in t)
        Ho.call(a, e, l, "get", t[l]);
      r = function(g) {
        return jo(g, a) || (s ? e.p : e);
      };
    }
  }
  return li(n, r);
}, yl = function(e, t, n) {
  var i = e.labels, r = Yt, s, a, l;
  for (s in i)
    a = i[s] - t, a < 0 == !!n && a && r > (a = Math.abs(a)) && (l = s, r = a);
  return l;
}, $t = function(e, t, n) {
  var i = e.vars, r = i[t], s = nt, a = e._ctx, l, c, u;
  if (!!r)
    return l = i[t + "Params"], c = i.callbackScope || e, n && ri.length && Zs(), a && (nt = a), u = l ? r.apply(c, l) : r.call(c), nt = s, u;
}, Xr = function(e) {
  return Bn(e), e.scrollTrigger && e.scrollTrigger.kill(!1), e.progress() < 1 && $t(e, "onInterrupt"), e;
}, cr, Wf = function(e) {
  e = !e.name && e.default || e;
  var t = e.name, n = $e(e), i = t && !n && e.init ? function() {
    this._props = [];
  } : e, r = {
    init: ts,
    render: jo,
    add: Ho,
    kill: ad,
    modifier: sd,
    rawVars: 0
  }, s = {
    targetTest: 0,
    get: 0,
    getSetter: qo,
    aliases: {},
    register: 0
  };
  if (vr(), e !== i) {
    if (Nt[t])
      return;
    en(i, en(Js(e, r), s)), Ii(i.prototype, Ii(r, Js(e, s))), Nt[i.prop = t] = i, e.targetTest && (Xs.push(i), Bo[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
  }
  wu(t, i), e.register && e.register(Bt, i, Lt);
}, Be = 255, qr = {
  aqua: [0, Be, Be],
  lime: [0, Be, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Be],
  navy: [0, 0, 128],
  white: [Be, Be, Be],
  olive: [128, 128, 0],
  yellow: [Be, Be, 0],
  orange: [Be, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Be, 0, 0],
  pink: [Be, 192, 203],
  cyan: [0, Be, Be],
  transparent: [Be, Be, Be, 0]
}, va = function(e, t, n) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * Be + 0.5 | 0;
}, Vu = function(e, t, n) {
  var i = e ? kn(e) ? [e >> 16, e >> 8 & Be, e & Be] : 0 : qr.black, r, s, a, l, c, u, h, f, m, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), qr[e])
      i = qr[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (r = e.charAt(1), s = e.charAt(2), a = e.charAt(3), e = "#" + r + r + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Be, i & Be, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Be, e & Be];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(lo), !t)
        l = +i[0] % 360 / 360, c = +i[1] / 100, u = +i[2] / 100, s = u <= 0.5 ? u * (c + 1) : u + c - u * c, r = u * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = va(l + 1 / 3, r, s), i[1] = va(l, r, s), i[2] = va(l - 1 / 3, r, s);
      else if (~e.indexOf("="))
        return i = e.match(vu), n && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(lo) || qr.transparent;
    i = i.map(Number);
  }
  return t && !g && (r = i[0] / Be, s = i[1] / Be, a = i[2] / Be, h = Math.max(r, s, a), f = Math.min(r, s, a), u = (h + f) / 2, h === f ? l = c = 0 : (m = h - f, c = u > 0.5 ? m / (2 - h - f) : m / (h + f), l = h === r ? (s - a) / m + (s < a ? 6 : 0) : h === s ? (a - r) / m + 2 : (r - s) / m + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
}, Gu = function(e) {
  var t = [], n = [], i = -1;
  return e.split(si).forEach(function(r) {
    var s = r.match(lr) || [];
    t.push.apply(t, s), n.push(i += s.length + 1);
  }), t.c = n, t;
}, Ml = function(e, t, n) {
  var i = "", r = (e + i).match(si), s = t ? "hsla(" : "rgba(", a = 0, l, c, u, h;
  if (!r)
    return e;
  if (r = r.map(function(f) {
    return (f = Vu(f, t, 1)) && s + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), n && (u = Gu(e), l = n.c, l.join(i) !== u.c.join(i)))
    for (c = e.replace(si, "1").split(lr), h = c.length - 1; a < h; a++)
      i += c[a] + (~l.indexOf(a) ? r.shift() || s + "0,0,0,0)" : (u.length ? u : r.length ? r : n).shift());
  if (!c)
    for (c = e.split(si), h = c.length - 1; a < h; a++)
      i += c[a] + r[a];
  return i + c[h];
}, si = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in qr)
    o += "|" + e + "\\b";
  return new RegExp(o + ")", "gi");
}(), Xf = /hsl[a]?\(/, Hu = function(e) {
  var t = e.join(" "), n;
  if (si.lastIndex = 0, si.test(t))
    return n = Xf.test(t), e[1] = Ml(e[1], n), e[0] = Ml(e[0], n, Gu(e[1])), !0;
}, is, Ot = function() {
  var o = Date.now, e = 500, t = 33, n = o(), i = n, r = 1e3 / 240, s = r, a = [], l, c, u, h, f, m, g = function d(p) {
    var _ = o() - i, y = p === !0, M, v, b, E;
    if (_ > e && (n += _ - t), i += _, b = i - n, M = b - s, (M > 0 || y) && (E = ++h.frame, f = b - h.time * 1e3, h.time = b = b / 1e3, s += M + (M >= r ? 4 : r - M), v = 1), y || (l = c(d)), v)
      for (m = 0; m < a.length; m++)
        a[m](b, f, E, p);
  };
  return h = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(p) {
      return f / (1e3 / (p || 60));
    },
    wake: function() {
      bu && (!co && _u() && (Xt = co = window, zo = Xt.document || {}, kt.gsap = Bt, (Xt.gsapVersions || (Xt.gsapVersions = [])).push(Bt.version), Su(Ks || Xt.GreenSockGlobals || !Xt.gsap && Xt || {}), u = Xt.requestAnimationFrame), l && h.sleep(), c = u || function(p) {
        return setTimeout(p, s - h.time * 1e3 + 1 | 0);
      }, is = 1, g(2));
    },
    sleep: function() {
      (u ? Xt.cancelAnimationFrame : clearTimeout)(l), is = 0, c = ts;
    },
    lagSmoothing: function(p, _) {
      e = p || 1 / Ge, t = Math.min(_, e, 0);
    },
    fps: function(p) {
      r = 1e3 / (p || 240), s = h.time * 1e3 + r;
    },
    add: function(p, _, y) {
      var M = _ ? function(v, b, E, C) {
        p(v, b, E, C), h.remove(M);
      } : p;
      return h.remove(p), a[y ? "unshift" : "push"](M), vr(), M;
    },
    remove: function(p, _) {
      ~(_ = a.indexOf(p)) && a.splice(_, 1) && m >= _ && m--;
    },
    _listeners: a
  }, h;
}(), vr = function() {
  return !is && Ot.wake();
}, Ee = {}, qf = /^[\d.\-M][\d.\-,\s]/, jf = /["']/g, Yf = function(e) {
  for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], r = 1, s = n.length, a, l, c; r < s; r++)
    l = n[r], a = r !== s - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), t[i] = isNaN(c) ? c.replace(jf, "").trim() : +c, i = l.substr(a + 1).trim();
  return t;
}, Kf = function(e) {
  var t = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
}, $f = function(e) {
  var t = (e + "").split("("), n = Ee[t[0]];
  return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Yf(t[1])] : Kf(e).split(",").map(Cu)) : Ee._CE && qf.test(e) ? Ee._CE("", e) : n;
}, Wu = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Xu = function o(e, t) {
  for (var n = e._first, i; n; )
    n instanceof Et ? o(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? o(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next;
}, Li = function(e, t) {
  return e && ($e(e) ? e : Ee[e] || $f(e)) || t;
}, Bi = function(e, t, n, i) {
  n === void 0 && (n = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var r = {
    easeIn: t,
    easeOut: n,
    easeInOut: i
  }, s;
  return Ct(e, function(a) {
    Ee[a] = kt[a] = r, Ee[s = a.toLowerCase()] = n;
    for (var l in r)
      Ee[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Ee[a + "." + l] = r[l];
  }), r;
}, qu = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, ya = function o(e, t, n) {
  var i = t >= 1 ? t : 1, r = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), s = r / oo * (Math.asin(1 / i) || 0), a = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * wf((u - s) * r) + 1;
  }, l = e === "out" ? a : e === "in" ? function(c) {
    return 1 - a(1 - c);
  } : qu(a);
  return r = oo / r, l.config = function(c, u) {
    return o(e, c, u);
  }, l;
}, Ma = function o(e, t) {
  t === void 0 && (t = 1.70158);
  var n = function(s) {
    return s ? --s * s * ((t + 1) * s + t) + 1 : 0;
  }, i = e === "out" ? n : e === "in" ? function(r) {
    return 1 - n(1 - r);
  } : qu(n);
  return i.config = function(r) {
    return o(e, r);
  }, i;
};
Ct("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
  var t = e < 5 ? e + 1 : e;
  Bi(o + ",Power" + (t - 1), e ? function(n) {
    return Math.pow(n, t);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, t);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
  });
});
Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn;
Bi("Elastic", ya("in"), ya("out"), ya());
(function(o, e) {
  var t = 1 / e, n = 2 * t, i = 2.5 * t, r = function(a) {
    return a < t ? o * a * a : a < n ? o * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? o * (a -= 2.25 / e) * a + 0.9375 : o * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  Bi("Bounce", function(s) {
    return 1 - r(1 - s);
  }, r);
})(7.5625, 2.75);
Bi("Expo", function(o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0;
});
Bi("Circ", function(o) {
  return -(gu(1 - o * o) - 1);
});
Bi("Sine", function(o) {
  return o === 1 ? 1 : -Sf(o * Mf) + 1;
});
Bi("Back", Ma("in"), Ma("out"), Ma());
Ee.SteppedEase = Ee.steps = kt.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var n = 1 / e, i = e + (t ? 0 : 1), r = t ? 1 : 0, s = 1 - Ge;
    return function(a) {
      return ((i * ps(0, s, a) | 0) + r) * n;
    };
  }
};
gr.ease = Ee["quad.out"];
Ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return Vo += o + "," + o + "Params,";
});
var ju = function(e, t) {
  this.id = bf++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Eu, this.set = t ? t.getSetter : qo;
}, yr = /* @__PURE__ */ function() {
  function o(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, xr(this, +t.duration, 1, 1), this.data = t.data, nt && (this._ctx = nt, nt.data.push(this)), is || Ot.wake();
  }
  var e = o.prototype;
  return e.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, e.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, xr(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(n, i) {
    if (vr(), !arguments.length)
      return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (la(this, n), !r._dp || r.parent || Pu(r, this); r && r.parent; )
        r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && pn(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === Ge || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Au(this, n, i)), this;
  }, e.time = function(n, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + xl(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(n, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, e.progress = function(n, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + xl(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, e.iteration = function(n, i) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * r, i) : this._repeat ? _r(this._tTime, r) + 1 : 1;
  }, e.timeScale = function(n) {
    if (!arguments.length)
      return this._rts === -Ge ? 0 : this._rts;
    if (this._rts === n)
      return this;
    var i = this.parent && this._ts ? Qs(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -Ge ? 0 : this._rts, this.totalTime(ps(-this._delay, this._tDur, i), !0), oa(this), Rf(this);
  }, e.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (vr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Ge && (this._tTime -= Ge)))), this) : this._ps;
  }, e.startTime = function(n) {
    if (arguments.length) {
      this._start = n;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && pn(i, this, n - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(n) {
    return this._start + (At(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(n) {
    var i = this.parent || this._dp;
    return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Qs(i.rawTime(n), this) : this._tTime : this._tTime;
  }, e.revert = function(n) {
    n === void 0 && (n = Kr);
    var i = Jt;
    return Jt = n, this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents), this.data !== "nested" && Bn(this), Jt = i, this;
  }, e.globalTime = function(n) {
    for (var i = this, r = arguments.length ? n : i.rawTime(); i; )
      r = i._start + r / (i._ts || 1), i = i._dp;
    return !this.parent && this.vars.immediateRender ? -1 : r;
  }, e.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, vl(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(n) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = n, vl(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, e.seek = function(n, i) {
    return this.totalTime(Wt(this, n), At(i));
  }, e.restart = function(n, i) {
    return this.play().totalTime(n ? -this._delay : 0, At(i));
  }, e.play = function(n, i) {
    return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(n, i) {
    return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(n, i) {
    return n != null && this.seek(n, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -Ge : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -Ge, this;
  }, e.isActive = function() {
    var n = this.parent || this._dp, i = this._start, r;
    return !!(!n || this._ts && this._initted && n.isActive() && (r = n.rawTime(!0)) >= i && r < this.endTime(!0) - Ge);
  }, e.eventCallback = function(n, i, r) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[n] = i, r && (s[n + "Params"] = r), n === "onUpdate" && (this._onUpdate = i)) : delete s[n], this) : s[n];
  }, e.then = function(n) {
    var i = this;
    return new Promise(function(r) {
      var s = $e(n) ? n : Lu, a = function() {
        var c = i.then;
        i.then = null, $e(s) && (s = s(i)) && (s.then || s === i) && (i.then = c), r(s), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, e.kill = function() {
    Xr(this);
  }, o;
}();
en(yr.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Ge,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Et = /* @__PURE__ */ function(o) {
  mu(e, o);
  function e(n, i) {
    var r;
    return n === void 0 && (n = {}), r = o.call(this, n) || this, r.labels = {}, r.smoothChildTiming = !!n.smoothChildTiming, r.autoRemoveChildren = !!n.autoRemoveChildren, r._sort = At(n.sortChildren), Xe && pn(n.parent || Xe, Rn(r), i), n.reversed && r.reverse(), n.paused && r.paused(!0), n.scrollTrigger && Du(Rn(r), n.scrollTrigger), r;
  }
  var t = e.prototype;
  return t.to = function(i, r, s) {
    return Zr(0, arguments, this), this;
  }, t.from = function(i, r, s) {
    return Zr(1, arguments, this), this;
  }, t.fromTo = function(i, r, s, a) {
    return Zr(2, arguments, this), this;
  }, t.set = function(i, r, s) {
    return r.duration = 0, r.parent = this, $r(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new rt(i, r, Wt(this, s), 1), this;
  }, t.call = function(i, r, s) {
    return pn(this, rt.delayedCall(0, i, r), s);
  }, t.staggerTo = function(i, r, s, a, l, c, u) {
    return s.duration = r, s.stagger = s.stagger || a, s.onComplete = c, s.onCompleteParams = u, s.parent = this, new rt(i, s, Wt(this, l)), this;
  }, t.staggerFrom = function(i, r, s, a, l, c, u) {
    return s.runBackwards = 1, $r(s).immediateRender = At(s.immediateRender), this.staggerTo(i, r, s, a, l, c, u);
  }, t.staggerFromTo = function(i, r, s, a, l, c, u, h) {
    return a.startAt = s, $r(a).immediateRender = At(a.immediateRender), this.staggerTo(i, r, a, l, c, u, h);
  }, t.render = function(i, r, s) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = i <= 0 ? 0 : ut(i), h = this._zTime < 0 != i < 0 && (this._initted || !c), f, m, g, d, p, _, y, M, v, b, E, C;
    if (this !== Xe && u > l && i >= 0 && (u = l), u !== this._tTime || s || h) {
      if (a !== this._time && c && (u += this._time - a, i += this._time - a), f = u, v = this._start, M = this._ts, _ = !M, h && (c || (a = this._zTime), (i || !r) && (this._zTime = i)), this._repeat) {
        if (E = this._yoyo, p = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(p * 100 + i, r, s);
        if (f = ut(u % p), u === l ? (d = this._repeat, f = c) : (d = ~~(u / p), d && d === u / p && (f = c, d--), f > c && (f = c)), b = _r(this._tTime, p), !a && this._tTime && b !== d && (b = d), E && d & 1 && (f = c - f, C = 1), d !== b && !this._lock) {
          var x = E && b & 1, w = x === (E && d & 1);
          if (d < b && (x = !x), a = x ? 0 : c, this._lock = 1, this.render(a || (C ? 0 : ut(d * p)), r, !c)._lock = 0, this._tTime = u, !r && this.parent && $t(this, "onRepeat"), this.vars.repeatRefresh && !C && (this.invalidate()._lock = 1), a && a !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, w && (this._lock = 2, a = x ? c : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !C && this.invalidate()), this._lock = 0, !this._ts && !_)
            return this;
          Xu(this, C);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = Ff(this, ut(a), ut(f)), y && (u -= f - (f = y._start))), this._tTime = u, this._time = f, this._act = !M, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && f && !r && ($t(this, "onStart"), this._tTime !== u))
        return this;
      if (f >= a && i >= 0)
        for (m = this._first; m; ) {
          if (g = m._next, (m._act || f >= m._start) && m._ts && y !== m) {
            if (m.parent !== this)
              return this.render(i, r, s);
            if (m.render(m._ts > 0 ? (f - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (f - m._start) * m._ts, r, s), f !== this._time || !this._ts && !_) {
              y = 0, g && (u += this._zTime = -Ge);
              break;
            }
          }
          m = g;
        }
      else {
        s = s || Jt, m = this._last;
        for (var L = i < 0 ? i : f; m; ) {
          if (g = m._prev, (m._act || L <= m._end) && m._ts && y !== m) {
            if (m.parent !== this)
              return this.render(i, r, s);
            if (m.render(m._ts > 0 ? (L - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (L - m._start) * m._ts, r, s), f !== this._time || !this._ts && !_) {
              y = 0, g && (u += this._zTime = L ? -Ge : Ge);
              break;
            }
          }
          m = g;
        }
      }
      if (y && !r && (this.pause(), y.render(f >= a ? 0 : -Ge)._zTime = f >= a ? 1 : -1, this._ts))
        return this._start = v, oa(this), this.render(i, r, s);
      this._onUpdate && !r && $t(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && a) && (v === this._start || Math.abs(M) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Bn(this, 1), !r && !(i < 0 && !a) && (u || a || !l) && ($t(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, r) {
    var s = this;
    if (kn(r) || (r = Wt(this, r, i)), !(i instanceof yr)) {
      if (gt(i))
        return i.forEach(function(a) {
          return s.add(a, r);
        }), this;
      if (ot(i))
        return this.addLabel(i, r);
      if ($e(i))
        i = rt.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? pn(this, i, r) : this;
  }, t.getChildren = function(i, r, s, a) {
    i === void 0 && (i = !0), r === void 0 && (r = !0), s === void 0 && (s = !0), a === void 0 && (a = -Yt);
    for (var l = [], c = this._first; c; )
      c._start >= a && (c instanceof rt ? r && l.push(c) : (s && l.push(c), i && l.push.apply(l, c.getChildren(!0, r, s)))), c = c._next;
    return l;
  }, t.getById = function(i) {
    for (var r = this.getChildren(1, 1, 1), s = r.length; s--; )
      if (r[s].vars.id === i)
        return r[s];
  }, t.remove = function(i) {
    return ot(i) ? this.removeLabel(i) : $e(i) ? this.killTweensOf(i) : (aa(this, i), i === this._recent && (this._recent = this._last), Ci(this));
  }, t.totalTime = function(i, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ut(Ot.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), o.prototype.totalTime.call(this, i, r), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, r) {
    return this.labels[i] = Wt(this, r), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, r, s) {
    var a = rt.delayedCall(0, r || ts, s);
    return a.data = "isPause", this._hasPause = 1, pn(this, a, Wt(this, i));
  }, t.removePause = function(i) {
    var r = this._first;
    for (i = Wt(this, i); r; )
      r._start === i && r.data === "isPause" && Bn(r), r = r._next;
  }, t.killTweensOf = function(i, r, s) {
    for (var a = this.getTweensOf(i, s), l = a.length; l--; )
      ei !== a[l] && a[l].kill(i, r);
    return this;
  }, t.getTweensOf = function(i, r) {
    for (var s = [], a = Kt(i), l = this._first, c = kn(r), u; l; )
      l instanceof rt ? Af(l._targets, a) && (c ? (!ei || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && s.push(l) : (u = l.getTweensOf(a, r)).length && s.push.apply(s, u), l = l._next;
    return s;
  }, t.tweenTo = function(i, r) {
    r = r || {};
    var s = this, a = Wt(s, i), l = r, c = l.startAt, u = l.onStart, h = l.onStartParams, f = l.immediateRender, m, g = rt.to(s, en({
      ease: r.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: r.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale()) || Ge,
      onStart: function() {
        if (s.pause(), !m) {
          var p = r.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale());
          g._dur !== p && xr(g, p, 0, 1).render(g._time, !0, !0), m = 1;
        }
        u && u.apply(g, h || []);
      }
    }, r));
    return f ? g.render(0) : g;
  }, t.tweenFromTo = function(i, r, s) {
    return this.tweenTo(r, en({
      startAt: {
        time: Wt(this, i)
      }
    }, s));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), yl(this, Wt(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), yl(this, Wt(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Ge);
  }, t.shiftChildren = function(i, r, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, l = this.labels, c; a; )
      a._start >= s && (a._start += i, a._end += i), a = a._next;
    if (r)
      for (c in l)
        l[c] >= s && (l[c] += i);
    return Ci(this);
  }, t.invalidate = function() {
    var i = this._first;
    for (this._lock = 0; i; )
      i.invalidate(), i = i._next;
    return o.prototype.invalidate.call(this);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var r = this._first, s; r; )
      s = r._next, this.remove(r), r = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Ci(this);
  }, t.totalDuration = function(i) {
    var r = 0, s = this, a = s._last, l = Yt, c, u, h;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (h = s.parent; a; )
        c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && s._sort && a._ts && !s._lock ? (s._lock = 1, pn(s, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (r -= u, (!h && !s._dp || h && h.smoothChildTiming) && (s._start += u / s._ts, s._time -= u, s._tTime -= u), s.shiftChildren(-u, !1, -1 / 0), l = 0), a._end > r && a._ts && (r = a._end), a = c;
      xr(s, s === Xe && s._time > r ? s._time : r, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, e.updateRoot = function(i) {
    if (Xe._ts && (Au(Xe, Qs(i, Xe)), Tu = Ot.frame), Ot.frame >= gl) {
      gl += Ut.autoSleep || 120;
      var r = Xe._first;
      if ((!r || !r._ts) && Ut.autoSleep && Ot._listeners.length < 2) {
        for (; r && !r._ts; )
          r = r._next;
        r || Ot.sleep();
      }
    }
  }, e;
}(yr);
en(Et.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Zf = function(e, t, n, i, r, s, a) {
  var l = new Lt(this._pt, e, t, 0, 1, Qu, null, r), c = 0, u = 0, h, f, m, g, d, p, _, y;
  for (l.b = n, l.e = i, n += "", i += "", (_ = ~i.indexOf("random(")) && (i = ns(i)), s && (y = [n, i], s(y, e, t), n = y[0], i = y[1]), f = n.match(_a) || []; h = _a.exec(i); )
    g = h[0], d = i.substring(c, h.index), m ? m = (m + 1) % 5 : d.substr(-5) === "rgba(" && (m = 1), g !== f[u++] && (p = parseFloat(f[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: d || u === 1 ? d : ",",
      s: p,
      c: g.charAt(1) === "=" ? hr(p, g) - p : parseFloat(g) - p,
      m: m && m < 4 ? Math.round : 0
    }, c = _a.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = a, (yu.test(i) || _) && (l.e = 0), this._pt = l, l;
}, Ho = function(e, t, n, i, r, s, a, l, c, u) {
  $e(i) && (i = i(r || 0, e, s));
  var h = e[t], f = n !== "get" ? n : $e(h) ? c ? e[t.indexOf("set") || !$e(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : h, m = $e(h) ? c ? nd : Zu : Xo, g;
  if (ot(i) && (~i.indexOf("random(") && (i = ns(i)), i.charAt(1) === "=" && (g = hr(f, i) + (mt(f) || 0), (g || g === 0) && (i = g))), !u || f !== i || _o)
    return !isNaN(f * i) && i !== "" ? (g = new Lt(this._pt, e, t, +f || 0, i - (f || 0), typeof h == "boolean" ? rd : Ju, 0, m), c && (g.fp = c), a && g.modifier(a, this, e), this._pt = g) : (!h && !(t in e) && ko(t, i), Zf.call(this, e, t, f, i, m, l || Ut.stringFilter, c));
}, Jf = function(e, t, n, i, r) {
  if ($e(e) && (e = Jr(e, r, t, n, i)), !xn(e) || e.style && e.nodeType || gt(e) || xu(e))
    return ot(e) ? Jr(e, r, t, n, i) : e;
  var s = {}, a;
  for (a in e)
    s[a] = Jr(e[a], r, t, n, i);
  return s;
}, Yu = function(e, t, n, i, r, s) {
  var a, l, c, u;
  if (Nt[e] && (a = new Nt[e]()).init(r, a.rawVars ? t[e] : Jf(t[e], i, r, s, n), n, i, s) !== !1 && (n._pt = l = new Lt(n._pt, r, e, 0, 1, a.render, a, 0, a.priority), n !== cr))
    for (c = n._ptLookup[n._targets.indexOf(r)], u = a._props.length; u--; )
      c[a._props[u]] = l;
  return a;
}, ei, _o, Wo = function o(e, t) {
  var n = e.vars, i = n.ease, r = n.startAt, s = n.immediateRender, a = n.lazy, l = n.onUpdate, c = n.onUpdateParams, u = n.callbackScope, h = n.runBackwards, f = n.yoyoEase, m = n.keyframes, g = n.autoRevert, d = e._dur, p = e._startAt, _ = e._targets, y = e.parent, M = y && y.data === "nested" ? y.vars.targets : _, v = e._overwrite === "auto" && !Oo, b = e.timeline, E, C, x, w, L, z, K, N, P, k, q, G, B;
  if (b && (!m || !i) && (i = "none"), e._ease = Li(i, gr.ease), e._yEase = f ? Wu(Li(f === !0 ? i : f, gr.ease)) : 0, f && e._yoyo && !e._repeat && (f = e._yEase, e._yEase = e._ease, e._ease = f), e._from = !b && !!n.runBackwards, !b || m && !n.stagger) {
    if (N = _[0] ? Ai(_[0]).harness : 0, G = N && n[N.prop], E = Js(n, Bo), p && (t < 0 && h && s && !g ? p.render(-1, !0) : p.revert(h && d ? Kr : Ef), p._lazy = 0), r) {
      if (Bn(e._startAt = rt.set(_, en({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: At(a),
        startAt: null,
        delay: 0,
        onUpdate: l,
        onUpdateParams: c,
        callbackScope: u,
        stagger: 0
      }, r))), t < 0 && (Jt || !s && !g) && e._startAt.revert(Kr), s && d && t <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (h && d && !p) {
      if (t && (s = !1), x = en({
        overwrite: !1,
        data: "isFromStart",
        lazy: s && At(a),
        immediateRender: s,
        stagger: 0,
        parent: y
      }, E), G && (x[N.prop] = G), Bn(e._startAt = rt.set(_, x)), t < 0 && (Jt ? e._startAt.revert(Kr) : e._startAt.render(-1, !0)), e._zTime = t, !s)
        o(e._startAt, Ge);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, a = d && At(a) || a && !d, C = 0; C < _.length; C++) {
      if (L = _[C], K = L._gsap || Go(_)[C]._gsap, e._ptLookup[C] = k = {}, uo[K.id] && ri.length && Zs(), q = M === _ ? C : M.indexOf(L), N && (P = new N()).init(L, G || E, e, q, M) !== !1 && (e._pt = w = new Lt(e._pt, L, P.name, 0, 1, P.render, P, 0, P.priority), P._props.forEach(function(F) {
        k[F] = w;
      }), P.priority && (z = 1)), !N || G)
        for (x in E)
          Nt[x] && (P = Yu(x, E, e, q, L, M)) ? P.priority && (z = 1) : k[x] = w = Ho.call(e, L, x, "get", E[x], q, M, 0, n.stringFilter);
      e._op && e._op[C] && e.kill(L, e._op[C]), v && e._pt && (ei = e, Xe.killTweensOf(L, k, e.globalTime(t)), B = !e.parent, ei = 0), e._pt && a && (uo[K.id] = 1);
    }
    z && eh(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = l, e._initted = (!e._op || e._pt) && !B, m && t <= 0 && b.render(Yt, !0, !0);
}, Qf = function(e, t, n, i, r, s, a) {
  var l = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, u, h, f;
  if (!l)
    for (l = e._ptCache[t] = [], h = e._ptLookup, f = e._targets.length; f--; ) {
      if (c = h[f][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return _o = 1, e.vars[t] = "+=0", Wo(e, a), _o = 0, 1;
      l.push(c);
    }
  for (f = l.length; f--; )
    u = l[f], c = u._pt || u, c.s = (i || i === 0) && !r ? i : c.s + (i || 0) + s * c.c, c.c = n - c.s, u.e && (u.e = Qe(n) + mt(u.e)), u.b && (u.b = c.s + mt(u.b));
}, ed = function(e, t) {
  var n = e[0] ? Ai(e[0]).harness : 0, i = n && n.aliases, r, s, a, l;
  if (!i)
    return t;
  r = Ii({}, t);
  for (s in i)
    if (s in r)
      for (l = i[s].split(","), a = l.length; a--; )
        r[l[a]] = r[s];
  return r;
}, td = function(e, t, n, i) {
  var r = t.ease || i || "power1.inOut", s, a;
  if (gt(t))
    a = n[e] || (n[e] = []), t.forEach(function(l, c) {
      return a.push({
        t: c / (t.length - 1) * 100,
        v: l,
        e: r
      });
    });
  else
    for (s in t)
      a = n[s] || (n[s] = []), s === "ease" || a.push({
        t: parseFloat(e),
        v: t[s],
        e: r
      });
}, Jr = function(e, t, n, i, r) {
  return $e(e) ? e.call(t, n, i, r) : ot(e) && ~e.indexOf("random(") ? ns(e) : e;
}, Ku = Vo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", $u = {};
Ct(Ku + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return $u[o] = 1;
});
var rt = /* @__PURE__ */ function(o) {
  mu(e, o);
  function e(n, i, r, s) {
    var a;
    typeof i == "number" && (r.duration = i, i = r, r = null), a = o.call(this, s ? i : $r(i)) || this;
    var l = a.vars, c = l.duration, u = l.delay, h = l.immediateRender, f = l.stagger, m = l.overwrite, g = l.keyframes, d = l.defaults, p = l.scrollTrigger, _ = l.yoyoEase, y = i.parent || Xe, M = (gt(n) || xu(n) ? kn(n[0]) : "length" in i) ? [n] : Kt(n), v, b, E, C, x, w, L, z;
    if (a._targets = M.length ? Go(M) : $s("GSAP target " + n + " not found. https://greensock.com", !Ut.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = m, g || f || ys(c) || ys(u)) {
      if (i = a.vars, v = a.timeline = new Et({
        data: "nested",
        defaults: d || {},
        targets: y && y.data === "nested" ? y.vars.targets : M
      }), v.kill(), v.parent = v._dp = Rn(a), v._start = 0, f || ys(c) || ys(u)) {
        if (C = M.length, L = f && Ou(f), xn(f))
          for (x in f)
            ~Ku.indexOf(x) && (z || (z = {}), z[x] = f[x]);
        for (b = 0; b < C; b++)
          E = Js(i, $u), E.stagger = 0, _ && (E.yoyoEase = _), z && Ii(E, z), w = M[b], E.duration = +Jr(c, Rn(a), b, w, M), E.delay = (+Jr(u, Rn(a), b, w, M) || 0) - a._delay, !f && C === 1 && E.delay && (a._delay = u = E.delay, a._start += u, E.delay = 0), v.to(w, E, L ? L(b, w, M) : 0), v._ease = Ee.none;
        v.duration() ? c = u = 0 : a.timeline = 0;
      } else if (g) {
        $r(en(v.vars.defaults, {
          ease: "none"
        })), v._ease = Li(g.ease || i.ease || "none");
        var K = 0, N, P, k;
        if (gt(g))
          g.forEach(function(q) {
            return v.to(M, q, ">");
          }), v.duration();
        else {
          E = {};
          for (x in g)
            x === "ease" || x === "easeEach" || td(x, g[x], E, g.easeEach);
          for (x in E)
            for (N = E[x].sort(function(q, G) {
              return q.t - G.t;
            }), K = 0, b = 0; b < N.length; b++)
              P = N[b], k = {
                ease: P.e,
                duration: (P.t - (b ? N[b - 1].t : 0)) / 100 * c
              }, k[x] = P.v, v.to(M, k, K), K += k.duration;
          v.duration() < c && v.to({}, {
            duration: c - v.duration()
          });
        }
      }
      c || a.duration(c = v.duration());
    } else
      a.timeline = 0;
    return m === !0 && !Oo && (ei = Rn(a), Xe.killTweensOf(M), ei = 0), pn(y, Rn(a), r), i.reversed && a.reverse(), i.paused && a.paused(!0), (h || !c && !g && a._start === ut(y._time) && At(h) && Pf(Rn(a)) && y.data !== "nested") && (a._tTime = -Ge, a.render(Math.max(0, -u))), p && Du(Rn(a), p), a;
  }
  var t = e.prototype;
  return t.render = function(i, r, s) {
    var a = this._time, l = this._tDur, c = this._dur, u = i < 0, h = i > l - Ge && !u ? l : i < Ge ? 0 : i, f, m, g, d, p, _, y, M, v;
    if (!c)
      If(this, i, r, s);
    else if (h !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
      if (f = h, M = this.timeline, this._repeat) {
        if (d = c + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(d * 100 + i, r, s);
        if (f = ut(h % d), h === l ? (g = this._repeat, f = c) : (g = ~~(h / d), g && g === h / d && (f = c, g--), f > c && (f = c)), _ = this._yoyo && g & 1, _ && (v = this._yEase, f = c - f), p = _r(this._tTime, d), f === a && !s && this._initted)
          return this._tTime = h, this;
        g !== p && (M && this._yEase && Xu(M, _), this.vars.repeatRefresh && !_ && !this._lock && (this._lock = s = 1, this.render(ut(d * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Iu(this, u ? i : f, s, r))
          return this._tTime = 0, this;
        if (a !== this._time)
          return this;
        if (c !== this._dur)
          return this.render(i, r, s);
      }
      if (this._tTime = h, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (v || this._ease)(f / c), this._from && (this.ratio = y = 1 - y), f && !a && !r && ($t(this, "onStart"), this._tTime !== h))
        return this;
      for (m = this._pt; m; )
        m.r(y, m.d), m = m._next;
      M && M.render(i < 0 ? i : !f && _ ? -Ge : M._dur * M._ease(f / this._dur), r, s) || this._startAt && (this._zTime = i), this._onUpdate && !r && (u && ho(this, i, r, s), $t(this, "onUpdate")), this._repeat && g !== p && this.vars.onRepeat && !r && this.parent && $t(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (u && !this._onUpdate && ho(this, i, !0, !0), (i || !c) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Bn(this, 1), !r && !(u && !a) && (h || a) && ($t(this, h === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function() {
    return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), o.prototype.invalidate.call(this);
  }, t.resetTo = function(i, r, s, a) {
    is || Ot.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Wo(this, l), c = this._ease(l / this._dur), Qf(this, i, r, s, a, c, l) ? this.resetTo(i, r, s, a) : (la(this, 0), this.parent || Ru(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, r) {
    if (r === void 0 && (r = "all"), !i && (!r || r === "all"))
      return this._lazy = this._pt = 0, this.parent ? Xr(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, r, ei && ei.vars.overwrite !== !0)._first || Xr(this), this.parent && s !== this.timeline.totalDuration() && xr(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, l = i ? Kt(i) : a, c = this._ptLookup, u = this._pt, h, f, m, g, d, p, _;
    if ((!r || r === "all") && Lf(a, l))
      return r === "all" && (this._pt = 0), Xr(this);
    for (h = this._op = this._op || [], r !== "all" && (ot(r) && (d = {}, Ct(r, function(y) {
      return d[y] = 1;
    }), r = d), r = ed(a, r)), _ = a.length; _--; )
      if (~l.indexOf(a[_])) {
        f = c[_], r === "all" ? (h[_] = r, g = f, m = {}) : (m = h[_] = h[_] || {}, g = r);
        for (d in g)
          p = f && f[d], p && ((!("kill" in p.d) || p.d.kill(d) === !0) && aa(this, p, "_pt"), delete f[d]), m !== "all" && (m[d] = 1);
      }
    return this._initted && !this._pt && u && Xr(this), this;
  }, e.to = function(i, r) {
    return new e(i, r, arguments[2]);
  }, e.from = function(i, r) {
    return Zr(1, arguments);
  }, e.delayedCall = function(i, r, s, a) {
    return new e(r, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: r,
      onReverseComplete: r,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: a
    });
  }, e.fromTo = function(i, r, s) {
    return Zr(2, arguments);
  }, e.set = function(i, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(i, r);
  }, e.killTweensOf = function(i, r, s) {
    return Xe.killTweensOf(i, r, s);
  }, e;
}(yr);
en(rt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ct("staggerTo,staggerFrom,staggerFromTo", function(o) {
  rt[o] = function() {
    var e = new Et(), t = po.call(arguments, 0);
    return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, t);
  };
});
var Xo = function(e, t, n) {
  return e[t] = n;
}, Zu = function(e, t, n) {
  return e[t](n);
}, nd = function(e, t, n, i) {
  return e[t](i.fp, n);
}, id = function(e, t, n) {
  return e.setAttribute(t, n);
}, qo = function(e, t) {
  return $e(e[t]) ? Zu : Uo(e[t]) && e.setAttribute ? id : Xo;
}, Ju = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, rd = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Qu = function(e, t) {
  var n = t._pt, i = "";
  if (!e && t.b)
    i = t.b;
  else if (e === 1 && t.e)
    i = t.e;
  else {
    for (; n; )
      i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
    i += t.c;
  }
  t.set(t.t, t.p, i, t);
}, jo = function(e, t) {
  for (var n = t._pt; n; )
    n.r(e, n.d), n = n._next;
}, sd = function(e, t, n, i) {
  for (var r = this._pt, s; r; )
    s = r._next, r.p === i && r.modifier(e, t, n), r = s;
}, ad = function(e) {
  for (var t = this._pt, n, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? aa(this, t, "_pt") : t.dep || (n = 1), t = i;
  return !n;
}, od = function(e, t, n, i) {
  i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
}, eh = function(e) {
  for (var t = e._pt, n, i, r, s; t; ) {
    for (n = t._next, i = r; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : s) ? t._prev._next = t : r = t, (t._next = i) ? i._prev = t : s = t, t = n;
  }
  e._pt = r;
}, Lt = /* @__PURE__ */ function() {
  function o(t, n, i, r, s, a, l, c, u) {
    this.t = n, this.s = r, this.c = s, this.p = i, this.r = a || Ju, this.d = l || this, this.set = c || Xo, this.pr = u || 0, this._next = t, t && (t._prev = this);
  }
  var e = o.prototype;
  return e.modifier = function(n, i, r) {
    this.mSet = this.mSet || this.set, this.set = od, this.m = n, this.mt = r, this.tween = i;
  }, o;
}();
Ct(Vo + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return Bo[o] = 1;
});
kt.TweenMax = kt.TweenLite = rt;
kt.TimelineLite = kt.TimelineMax = Et;
Xe = new Et({
  sortChildren: !1,
  defaults: gr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Ut.stringFilter = Hu;
var Mr = [], qs = {}, ld = [], bl = 0, ba = function(e) {
  return (qs[e] || ld).map(function(t) {
    return t();
  });
}, xo = function() {
  var e = Date.now(), t = [];
  e - bl > 2 && (ba("matchMediaInit"), Mr.forEach(function(n) {
    var i = n.queries, r = n.conditions, s, a, l, c;
    for (a in i)
      s = Xt.matchMedia(i[a]).matches, s && (l = 1), s !== r[a] && (r[a] = s, c = 1);
    c && (n.revert(), l && t.push(n));
  }), ba("matchMediaRevert"), t.forEach(function(n) {
    return n.onMatch(n);
  }), bl = e, ba("matchMedia"));
}, th = /* @__PURE__ */ function() {
  function o(t, n) {
    this.selector = n && mo(n), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t);
  }
  var e = o.prototype;
  return e.add = function(n, i, r) {
    $e(n) && (r = i, i = n, n = $e);
    var s = this, a = function() {
      var c = nt, u = s.selector, h;
      return c && c !== s && c.data.push(s), r && (s.selector = mo(r)), nt = s, h = i.apply(s, arguments), $e(h) && s._r.push(h), nt = c, s.selector = u, s.isReverted = !1, h;
    };
    return s.last = a, n === $e ? a(s) : n ? s[n] = a : a;
  }, e.ignore = function(n) {
    var i = nt;
    nt = null, n(this), nt = i;
  }, e.getTweens = function() {
    var n = [];
    return this.data.forEach(function(i) {
      return i instanceof o ? n.push.apply(n, i.getTweens()) : i instanceof rt && n.push(i);
    }), n;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(n, i) {
    var r = this;
    if (n ? (this.getTweens().map(function(a) {
      return {
        g: a.globalTime(0),
        t: a
      };
    }).sort(function(a, l) {
      return l.g - a.g || -1;
    }).forEach(function(a) {
      return a.t.revert(n);
    }), this.data.forEach(function(a) {
      return !(a instanceof yr) && a.revert && a.revert(n);
    }), this._r.forEach(function(a) {
      return a(n, r);
    }), this.isReverted = !0) : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i) {
      var s = Mr.indexOf(this);
      ~s && Mr.splice(s, 1);
    }
  }, e.revert = function(n) {
    this.kill(n || {});
  }, o;
}(), cd = /* @__PURE__ */ function() {
  function o(t) {
    this.contexts = [], this.scope = t;
  }
  var e = o.prototype;
  return e.add = function(n, i, r) {
    xn(n) || (n = {
      matches: n
    });
    var s = new th(0, r || this.scope), a = s.conditions = {}, l, c, u;
    this.contexts.push(s), i = s.add("onMatch", i), s.queries = n;
    for (c in n)
      c === "all" ? u = 1 : (l = Xt.matchMedia(n[c]), l && (Mr.indexOf(s) < 0 && Mr.push(s), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(xo) : l.addEventListener("change", xo)));
    return u && i(s), this;
  }, e.revert = function(n) {
    this.kill(n || {});
  }, e.kill = function(n) {
    this.contexts.forEach(function(i) {
      return i.kill(n, !0);
    });
  }, o;
}(), ea = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    t.forEach(function(i) {
      return Wf(i);
    });
  },
  timeline: function(e) {
    return new Et(e);
  },
  getTweensOf: function(e, t) {
    return Xe.getTweensOf(e, t);
  },
  getProperty: function(e, t, n, i) {
    ot(e) && (e = Kt(e)[0]);
    var r = Ai(e || {}).get, s = n ? Lu : Cu;
    return n === "native" && (n = ""), e && (t ? s((Nt[t] && Nt[t].get || r)(e, t, n, i)) : function(a, l, c) {
      return s((Nt[a] && Nt[a].get || r)(e, a, l, c));
    });
  },
  quickSetter: function(e, t, n) {
    if (e = Kt(e), e.length > 1) {
      var i = e.map(function(u) {
        return Bt.quickSetter(u, t, n);
      }), r = i.length;
      return function(u) {
        for (var h = r; h--; )
          i[h](u);
      };
    }
    e = e[0] || {};
    var s = Nt[t], a = Ai(e), l = a.harness && (a.harness.aliases || {})[t] || t, c = s ? function(u) {
      var h = new s();
      cr._pt = 0, h.init(e, n ? u + n : u, cr, 0, [e]), h.render(1, h), cr._pt && jo(1, cr);
    } : a.set(e, l);
    return s ? c : function(u) {
      return c(e, l, n ? u + n : u, a, 1);
    };
  },
  quickTo: function(e, t, n) {
    var i, r = Bt.to(e, Ii((i = {}, i[t] = "+=0.1", i.paused = !0, i), n || {})), s = function(l, c, u) {
      return r.resetTo(t, l, c, u);
    };
    return s.tween = r, s;
  },
  isTweening: function(e) {
    return Xe.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Li(e.ease, gr.ease)), _l(gr, e || {});
  },
  config: function(e) {
    return _l(Ut, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, n = e.effect, i = e.plugins, r = e.defaults, s = e.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !Nt[a] && !kt[a] && $s(t + " effect requires " + a + " plugin.");
    }), xa[t] = function(a, l, c) {
      return n(Kt(a), en(l || {}, r), c);
    }, s && (Et.prototype[t] = function(a, l, c) {
      return this.add(xa[t](a, xn(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(e, t) {
    Ee[e] = Li(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Li(e, t) : Ee;
  },
  getById: function(e) {
    return Xe.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var n = new Et(e), i, r;
    for (n.smoothChildTiming = At(e.smoothChildTiming), Xe.remove(n), n._dp = 0, n._time = n._tTime = Xe._time, i = Xe._first; i; )
      r = i._next, (t || !(!i._dur && i instanceof rt && i.vars.onComplete === i._targets[0])) && pn(n, i, i._start - i._delay), i = r;
    return pn(Xe, n, 0), n;
  },
  context: function(e, t) {
    return e ? new th(e, t) : nt;
  },
  matchMedia: function(e) {
    return new cd(e);
  },
  matchMediaRefresh: function() {
    return Mr.forEach(function(e) {
      var t = e.conditions, n, i;
      for (i in t)
        t[i] && (t[i] = !1, n = 1);
      n && e.revert();
    }) || xo();
  },
  addEventListener: function(e, t) {
    var n = qs[e] || (qs[e] = []);
    ~n.indexOf(t) || n.push(t);
  },
  removeEventListener: function(e, t) {
    var n = qs[e], i = n && n.indexOf(t);
    i >= 0 && n.splice(i, 1);
  },
  utils: {
    wrap: Vf,
    wrapYoyo: Gf,
    distribute: Ou,
    random: zu,
    snap: Uu,
    normalize: Bf,
    getUnit: mt,
    clamp: Of,
    splitColor: Vu,
    toArray: Kt,
    selector: mo,
    mapRange: Bu,
    pipe: zf,
    unitize: kf,
    interpolate: Hf,
    shuffle: Nu
  },
  install: Su,
  effects: xa,
  ticker: Ot,
  updateRoot: Et.updateRoot,
  plugins: Nt,
  globalTimeline: Xe,
  core: {
    PropTween: Lt,
    globals: wu,
    Tween: rt,
    Timeline: Et,
    Animation: yr,
    getCache: Ai,
    _removeLinkedListItem: aa,
    reverting: function() {
      return Jt;
    },
    context: function(e) {
      return e && nt && (nt.data.push(e), e._ctx = nt), nt;
    },
    suppressOverwrites: function(e) {
      return Oo = e;
    }
  }
};
Ct("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return ea[o] = rt[o];
});
Ot.add(Et.updateRoot);
cr = ea.to({}, {
  duration: 0
});
var ud = function(e, t) {
  for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
    n = n._next;
  return n;
}, hd = function(e, t) {
  var n = e._targets, i, r, s;
  for (i in t)
    for (r = n.length; r--; )
      s = e._ptLookup[r][i], s && (s = s.d) && (s._pt && (s = ud(s, i)), s && s.modifier && s.modifier(t[i], e, n[r], i));
}, Sa = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    init: function(i, r, s) {
      s._onInit = function(a) {
        var l, c;
        if (ot(r) && (l = {}, Ct(r, function(u) {
          return l[u] = 1;
        }), r = l), t) {
          l = {};
          for (c in r)
            l[c] = t(r[c]);
          r = l;
        }
        hd(a, r);
      };
    }
  };
}, Bt = ea.registerPlugin({
  name: "attr",
  init: function(e, t, n, i, r) {
    var s, a, l;
    this.tween = n;
    for (s in t)
      l = e.getAttribute(s) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[s], i, r, 0, 0, s), a.op = s, a.b = l, this._props.push(s);
  },
  render: function(e, t) {
    for (var n = t._pt; n; )
      Jt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var n = t.length; n--; )
      this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
  }
}, Sa("roundProps", go), Sa("modifiers"), Sa("snap", Uu)) || ea;
rt.version = Et.version = Bt.version = "3.11.1";
bu = 1;
_u() && vr();
Ee.Power0;
Ee.Power1;
Ee.Power2;
Ee.Power3;
Ee.Power4;
Ee.Linear;
Ee.Quad;
Ee.Cubic;
Ee.Quart;
Ee.Quint;
Ee.Strong;
Ee.Elastic;
Ee.Back;
Ee.SteppedEase;
Ee.Bounce;
Ee.Sine;
Ee.Expo;
Ee.Circ;
/*!
 * CSSPlugin 3.11.1
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Sl, ti, fr, Yo, bi, wl, Ko, fd = function() {
  return typeof window < "u";
}, Vn = {}, gi = 180 / Math.PI, dr = Math.PI / 180, qi = Math.atan2, Tl = 1e8, $o = /([A-Z])/g, dd = /(left|right|width|margin|padding|x)/i, pd = /[\s,\(]\S/, Fn = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, vo = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, md = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, gd = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, _d = function(e, t) {
  var n = t.s + t.c * e;
  t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
}, nh = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, ih = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, xd = function(e, t, n) {
  return e.style[t] = n;
}, vd = function(e, t, n) {
  return e.style.setProperty(t, n);
}, yd = function(e, t, n) {
  return e._gsap[t] = n;
}, Md = function(e, t, n) {
  return e._gsap.scaleX = e._gsap.scaleY = n;
}, bd = function(e, t, n, i, r) {
  var s = e._gsap;
  s.scaleX = s.scaleY = n, s.renderTransform(r, s);
}, Sd = function(e, t, n, i, r) {
  var s = e._gsap;
  s[t] = n, s.renderTransform(r, s);
}, Ke = "transform", ln = Ke + "Origin", wd = function(e) {
  var t = this, n = this.target, i = n.style;
  if (e in Vn) {
    if (this.tfm = this.tfm || {}, e !== "transform" && (e = Fn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(r) {
      return t.tfm[r] = Dn(n, r);
    }) : this.tfm[e] = n._gsap.x ? n._gsap[e] : Dn(n, e)), this.props.indexOf(Ke) >= 0)
      return;
    n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(ln, "")), e = Ke;
  }
  i && this.props.push(e, i[e]);
}, rh = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Td = function() {
  var e = this.props, t = this.target, n = t.style, i = t._gsap, r, s;
  for (r = 0; r < e.length; r += 2)
    e[r + 1] ? n[e[r]] = e[r + 1] : n.removeProperty(e[r].replace($o, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), r = Ko(), r && !r.isStart && !n[Ke] && (rh(n), i.uncache = 1);
  }
}, sh = function(e, t) {
  var n = {
    target: e,
    props: [],
    revert: Td,
    save: wd
  };
  return t && t.split(",").forEach(function(i) {
    return n.save(i);
  }), n;
}, ah, yo = function(e, t) {
  var n = ti.createElementNS ? ti.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ti.createElement(e);
  return n.style ? n : ti.createElement(e);
}, gn = function o(e, t, n) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace($o, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && o(e, br(t) || t, 1) || "";
}, El = "O,Moz,ms,Ms,Webkit".split(","), br = function(e, t, n) {
  var i = t || bi, r = i.style, s = 5;
  if (e in r && !n)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(El[s] + e in r); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? El[s] : "") + e;
}, Mo = function() {
  fd() && window.document && (Sl = window, ti = Sl.document, fr = ti.documentElement, bi = yo("div") || {
    style: {}
  }, yo("div"), Ke = br(Ke), ln = Ke + "Origin", bi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ah = !!br("perspective"), Ko = Bt.core.reverting, Yo = 1);
}, wa = function o(e) {
  var t = yo("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, i = this.nextSibling, r = this.style.cssText, s;
  if (fr.appendChild(t), t.appendChild(this), this.style.display = "block", e)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = o;
    } catch {
    }
  else
    this._gsapBBox && (s = this._gsapBBox());
  return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), fr.removeChild(t), this.style.cssText = r, s;
}, Al = function(e, t) {
  for (var n = t.length; n--; )
    if (e.hasAttribute(t[n]))
      return e.getAttribute(t[n]);
}, oh = function(e) {
  var t;
  try {
    t = e.getBBox();
  } catch {
    t = wa.call(e, !0);
  }
  return t && (t.width || t.height) || e.getBBox === wa || (t = wa.call(e, !0)), t && !t.width && !t.x && !t.y ? {
    x: +Al(e, ["x", "cx", "x1"]) || 0,
    y: +Al(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, lh = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && oh(e));
}, rs = function(e, t) {
  if (t) {
    var n = e.style;
    t in Vn && t !== ln && (t = Ke), n.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(t.replace($o, "-$1").toLowerCase())) : n.removeAttribute(t);
  }
}, ni = function(e, t, n, i, r, s) {
  var a = new Lt(e._pt, t, n, 0, 1, s ? ih : nh);
  return e._pt = a, a.b = i, a.e = r, e._props.push(n), a;
}, Cl = {
  deg: 1,
  rad: 1,
  turn: 1
}, Ed = {
  grid: 1,
  flex: 1
}, oi = function o(e, t, n, i) {
  var r = parseFloat(n) || 0, s = (n + "").trim().substr((r + "").length) || "px", a = bi.style, l = dd.test(t), c = e.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), h = 100, f = i === "px", m = i === "%", g, d, p, _;
  return i === s || !r || Cl[i] || Cl[s] ? r : (s !== "px" && !f && (r = o(e, t, n, "px")), _ = e.getCTM && lh(e), (m || s === "%") && (Vn[t] || ~t.indexOf("adius")) ? (g = _ ? e.getBBox()[l ? "width" : "height"] : e[u], Qe(m ? r / g * h : r / 100 * g)) : (a[l ? "width" : "height"] = h + (f ? s : i), d = ~t.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, _ && (d = (e.ownerSVGElement || {}).parentNode), (!d || d === ti || !d.appendChild) && (d = ti.body), p = d._gsap, p && m && p.width && l && p.time === Ot.time && !p.uncache ? Qe(r / p.width * h) : ((m || s === "%") && !Ed[gn(d, "display")] && (a.position = gn(e, "position")), d === e && (a.position = "static"), d.appendChild(bi), g = bi[u], d.removeChild(bi), a.position = "absolute", l && m && (p = Ai(d), p.time = Ot.time, p.width = d[u]), Qe(f ? g * r / h : g && r ? h / g * r : 0))));
}, Dn = function(e, t, n, i) {
  var r;
  return Yo || Mo(), t in Fn && t !== "transform" && (t = Fn[t], ~t.indexOf(",") && (t = t.split(",")[0])), Vn[t] && t !== "transform" ? (r = as(e, i), r = t !== "transformOrigin" ? r[t] : r.svg ? r.origin : na(gn(e, ln)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) && (r = ta[t] && ta[t](e, t, n) || gn(e, t) || Eu(e, t) || (t === "opacity" ? 1 : 0))), n && !~(r + "").trim().indexOf(" ") ? oi(e, t, r, n) + n : r;
}, Ad = function(e, t, n, i) {
  if (!n || n === "none") {
    var r = br(t, e, 1), s = r && gn(e, r, 1);
    s && s !== n ? (t = r, n = s) : t === "borderColor" && (n = gn(e, "borderTopColor"));
  }
  var a = new Lt(this._pt, e.style, t, 0, 1, Qu), l = 0, c = 0, u, h, f, m, g, d, p, _, y, M, v, b;
  if (a.b = n, a.e = i, n += "", i += "", i === "auto" && (e.style[t] = i, i = gn(e, t) || i, e.style[t] = n), u = [n, i], Hu(u), n = u[0], i = u[1], f = n.match(lr) || [], b = i.match(lr) || [], b.length) {
    for (; h = lr.exec(i); )
      p = h[0], y = i.substring(l, h.index), g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1), p !== (d = f[c++] || "") && (m = parseFloat(d) || 0, v = d.substr((m + "").length), p.charAt(1) === "=" && (p = hr(m, p) + v), _ = parseFloat(p), M = p.substr((_ + "").length), l = lr.lastIndex - M.length, M || (M = M || Ut.units[t] || v, l === i.length && (i += M, a.e += M)), v !== M && (m = oi(e, t, d, M) || 0), a._pt = {
        _next: a._pt,
        p: y || c === 1 ? y : ",",
        s: m,
        c: _ - m,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = t === "display" && i === "none" ? ih : nh;
  return yu.test(i) && (a.e = 0), this._pt = a, a;
}, Ll = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Cd = function(e) {
  var t = e.split(" "), n = t[0], i = t[1] || "50%";
  return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = Ll[n] || n, t[1] = Ll[i] || i, t.join(" ");
}, Ld = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var n = t.t, i = n.style, r = t.u, s = n._gsap, a, l, c;
    if (r === "all" || r === !0)
      i.cssText = "", l = 1;
    else
      for (r = r.split(","), c = r.length; --c > -1; )
        a = r[c], Vn[a] && (l = 1, a = a === "transformOrigin" ? ln : Ke), rs(n, a);
    l && (rs(n, Ke), s && (s.svg && n.removeAttribute("transform"), as(n, 1), s.uncache = 1, rh(i)));
  }
}, ta = {
  clearProps: function(e, t, n, i, r) {
    if (r.data !== "isFromStart") {
      var s = e._pt = new Lt(e._pt, t, n, 0, 0, Ld);
      return s.u = i, s.pr = -10, s.tween = r, e._props.push(n), 1;
    }
  }
}, ss = [1, 0, 0, 1, 0, 0], ch = {}, uh = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Rl = function(e) {
  var t = gn(e, Ke);
  return uh(t) ? ss : t.substr(7).match(vu).map(Qe);
}, Zo = function(e, t) {
  var n = e._gsap || Ai(e), i = e.style, r = Rl(e), s, a, l, c;
  return n.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, r = [l.a, l.b, l.c, l.d, l.e, l.f], r.join(",") === "1,0,0,1,0,0" ? ss : r) : (r === ss && !e.offsetParent && e !== fr && !n.svg && (l = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (c = 1, a = e.nextElementSibling, fr.appendChild(e)), r = Rl(e), l ? i.display = l : rs(e, "display"), c && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : fr.removeChild(e))), t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, bo = function(e, t, n, i, r, s) {
  var a = e._gsap, l = r || Zo(e, !0), c = a.xOrigin || 0, u = a.yOrigin || 0, h = a.xOffset || 0, f = a.yOffset || 0, m = l[0], g = l[1], d = l[2], p = l[3], _ = l[4], y = l[5], M = t.split(" "), v = parseFloat(M[0]) || 0, b = parseFloat(M[1]) || 0, E, C, x, w;
  n ? l !== ss && (C = m * p - g * d) && (x = v * (p / C) + b * (-d / C) + (d * y - p * _) / C, w = v * (-g / C) + b * (m / C) - (m * y - g * _) / C, v = x, b = w) : (E = oh(e), v = E.x + (~M[0].indexOf("%") ? v / 100 * E.width : v), b = E.y + (~(M[1] || M[0]).indexOf("%") ? b / 100 * E.height : b)), i || i !== !1 && a.smooth ? (_ = v - c, y = b - u, a.xOffset = h + (_ * m + y * d) - _, a.yOffset = f + (_ * g + y * p) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = b, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!n, e.style[ln] = "0px 0px", s && (ni(s, a, "xOrigin", c, v), ni(s, a, "yOrigin", u, b), ni(s, a, "xOffset", h, a.xOffset), ni(s, a, "yOffset", f, a.yOffset)), e.setAttribute("data-svg-origin", v + " " + b);
}, as = function(e, t) {
  var n = e._gsap || new ju(e);
  if ("x" in n && !t && !n.uncache)
    return n;
  var i = e.style, r = n.scaleX < 0, s = "px", a = "deg", l = getComputedStyle(e), c = gn(e, ln) || "0", u, h, f, m, g, d, p, _, y, M, v, b, E, C, x, w, L, z, K, N, P, k, q, G, B, F, O, ee, J, Z, $, re;
  return u = h = f = d = p = _ = y = M = v = 0, m = g = 1, n.svg = !!(e.getCTM && lh(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Ke] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + l[Ke]), i.scale = i.rotate = i.translate = "none"), C = Zo(e, n.svg), n.svg && (n.uncache ? (B = e.getBBox(), c = n.xOrigin - B.x + "px " + (n.yOrigin - B.y) + "px", G = "") : G = !t && e.getAttribute("data-svg-origin"), bo(e, G || c, !!G || n.originIsAbsolute, n.smooth !== !1, C)), b = n.xOrigin || 0, E = n.yOrigin || 0, C !== ss && (z = C[0], K = C[1], N = C[2], P = C[3], u = k = C[4], h = q = C[5], C.length === 6 ? (m = Math.sqrt(z * z + K * K), g = Math.sqrt(P * P + N * N), d = z || K ? qi(K, z) * gi : 0, y = N || P ? qi(N, P) * gi + d : 0, y && (g *= Math.abs(Math.cos(y * dr))), n.svg && (u -= b - (b * z + E * N), h -= E - (b * K + E * P))) : (re = C[6], Z = C[7], O = C[8], ee = C[9], J = C[10], $ = C[11], u = C[12], h = C[13], f = C[14], x = qi(re, J), p = x * gi, x && (w = Math.cos(-x), L = Math.sin(-x), G = k * w + O * L, B = q * w + ee * L, F = re * w + J * L, O = k * -L + O * w, ee = q * -L + ee * w, J = re * -L + J * w, $ = Z * -L + $ * w, k = G, q = B, re = F), x = qi(-N, J), _ = x * gi, x && (w = Math.cos(-x), L = Math.sin(-x), G = z * w - O * L, B = K * w - ee * L, F = N * w - J * L, $ = P * L + $ * w, z = G, K = B, N = F), x = qi(K, z), d = x * gi, x && (w = Math.cos(x), L = Math.sin(x), G = z * w + K * L, B = k * w + q * L, K = K * w - z * L, q = q * w - k * L, z = G, k = B), p && Math.abs(p) + Math.abs(d) > 359.9 && (p = d = 0, _ = 180 - _), m = Qe(Math.sqrt(z * z + K * K + N * N)), g = Qe(Math.sqrt(q * q + re * re)), x = qi(k, q), y = Math.abs(x) > 2e-4 ? x * gi : 0, v = $ ? 1 / ($ < 0 ? -$ : $) : 0), n.svg && (G = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !uh(gn(e, Ke)), G && e.setAttribute("transform", G))), Math.abs(y) > 90 && Math.abs(y) < 270 && (r ? (m *= -1, y += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (g *= -1, y += y <= 0 ? 180 : -180)), t = t || n.uncache, n.x = u - ((n.xPercent = u && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + s, n.y = h - ((n.yPercent = h && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + s, n.z = f + s, n.scaleX = Qe(m), n.scaleY = Qe(g), n.rotation = Qe(d) + a, n.rotationX = Qe(p) + a, n.rotationY = Qe(_) + a, n.skewX = y + a, n.skewY = M + a, n.transformPerspective = v + s, (n.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (i[ln] = na(c)), n.xOffset = n.yOffset = 0, n.force3D = Ut.force3D, n.renderTransform = n.svg ? Pd : ah ? hh : Rd, n.uncache = 0, n;
}, na = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Ta = function(e, t, n) {
  var i = mt(t);
  return Qe(parseFloat(t) + parseFloat(oi(e, "x", n + "px", i))) + i;
}, Rd = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, hh(e, t);
}, hi = "0deg", zr = "0px", fi = ") ", hh = function(e, t) {
  var n = t || this, i = n.xPercent, r = n.yPercent, s = n.x, a = n.y, l = n.z, c = n.rotation, u = n.rotationY, h = n.rotationX, f = n.skewX, m = n.skewY, g = n.scaleX, d = n.scaleY, p = n.transformPerspective, _ = n.force3D, y = n.target, M = n.zOrigin, v = "", b = _ === "auto" && e && e !== 1 || _ === !0;
  if (M && (h !== hi || u !== hi)) {
    var E = parseFloat(u) * dr, C = Math.sin(E), x = Math.cos(E), w;
    E = parseFloat(h) * dr, w = Math.cos(E), s = Ta(y, s, C * w * -M), a = Ta(y, a, -Math.sin(E) * -M), l = Ta(y, l, x * w * -M + M);
  }
  p !== zr && (v += "perspective(" + p + fi), (i || r) && (v += "translate(" + i + "%, " + r + "%) "), (b || s !== zr || a !== zr || l !== zr) && (v += l !== zr || b ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + fi), c !== hi && (v += "rotate(" + c + fi), u !== hi && (v += "rotateY(" + u + fi), h !== hi && (v += "rotateX(" + h + fi), (f !== hi || m !== hi) && (v += "skew(" + f + ", " + m + fi), (g !== 1 || d !== 1) && (v += "scale(" + g + ", " + d + fi), y.style[Ke] = v || "translate(0, 0)";
}, Pd = function(e, t) {
  var n = t || this, i = n.xPercent, r = n.yPercent, s = n.x, a = n.y, l = n.rotation, c = n.skewX, u = n.skewY, h = n.scaleX, f = n.scaleY, m = n.target, g = n.xOrigin, d = n.yOrigin, p = n.xOffset, _ = n.yOffset, y = n.forceCSS, M = parseFloat(s), v = parseFloat(a), b, E, C, x, w;
  l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= dr, c *= dr, b = Math.cos(l) * h, E = Math.sin(l) * h, C = Math.sin(l - c) * -f, x = Math.cos(l - c) * f, c && (u *= dr, w = Math.tan(c - u), w = Math.sqrt(1 + w * w), C *= w, x *= w, u && (w = Math.tan(u), w = Math.sqrt(1 + w * w), b *= w, E *= w)), b = Qe(b), E = Qe(E), C = Qe(C), x = Qe(x)) : (b = h, x = f, E = C = 0), (M && !~(s + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (M = oi(m, "x", s, "px"), v = oi(m, "y", a, "px")), (g || d || p || _) && (M = Qe(M + g - (g * b + d * C) + p), v = Qe(v + d - (g * E + d * x) + _)), (i || r) && (w = m.getBBox(), M = Qe(M + i / 100 * w.width), v = Qe(v + r / 100 * w.height)), w = "matrix(" + b + "," + E + "," + C + "," + x + "," + M + "," + v + ")", m.setAttribute("transform", w), y && (m.style[Ke] = w);
}, Dd = function(e, t, n, i, r) {
  var s = 360, a = ot(r), l = parseFloat(r) * (a && ~r.indexOf("rad") ? gi : 1), c = l - i, u = i + c + "deg", h, f;
  return a && (h = r.split("_")[1], h === "short" && (c %= s, c !== c % (s / 2) && (c += c < 0 ? s : -s)), h === "cw" && c < 0 ? c = (c + s * Tl) % s - ~~(c / s) * s : h === "ccw" && c > 0 && (c = (c - s * Tl) % s - ~~(c / s) * s)), e._pt = f = new Lt(e._pt, t, n, i, c, md), f.e = u, f.u = "deg", e._props.push(n), f;
}, Pl = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, Id = function(e, t, n) {
  var i = Pl({}, n._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", s = n.style, a, l, c, u, h, f, m, g;
  i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), s[Ke] = t, a = as(n, 1), rs(n, Ke), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[Ke], s[Ke] = t, a = as(n, 1), s[Ke] = c);
  for (l in Vn)
    c = i[l], u = a[l], c !== u && r.indexOf(l) < 0 && (m = mt(c), g = mt(u), h = m !== g ? oi(n, l, c, g) : parseFloat(c), f = parseFloat(u), e._pt = new Lt(e._pt, a, l, h, f - h, vo), e._pt.u = g || 0, e._props.push(l));
  Pl(a, i);
};
Ct("padding,margin,Width,Radius", function(o, e) {
  var t = "Top", n = "Right", i = "Bottom", r = "Left", s = (e < 3 ? [t, n, i, r] : [t + r, t + n, i + n, i + r]).map(function(a) {
    return e < 2 ? o + a : "border" + a + o;
  });
  ta[e > 1 ? "border" + o : o] = function(a, l, c, u, h) {
    var f, m;
    if (arguments.length < 4)
      return f = s.map(function(g) {
        return Dn(a, g, c);
      }), m = f.join(" "), m.split(f[0]).length === 5 ? f[0] : m;
    f = (u + "").split(" "), m = {}, s.forEach(function(g, d) {
      return m[g] = f[d] = f[d] || f[(d - 1) / 2 | 0];
    }), a.init(l, m, h);
  };
});
var fh = {
  name: "css",
  register: Mo,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, n, i, r) {
    var s = this._props, a = e.style, l = n.vars.startAt, c, u, h, f, m, g, d, p, _, y, M, v, b, E, C, x;
    Yo || Mo(), this.styles = this.styles || sh(e), x = this.styles.props, this.tween = n;
    for (d in t)
      if (d !== "autoRound" && (u = t[d], !(Nt[d] && Yu(d, t, n, i, e, r)))) {
        if (m = typeof u, g = ta[d], m === "function" && (u = u.call(n, i, e, r), m = typeof u), m === "string" && ~u.indexOf("random(") && (u = ns(u)), g)
          g(this, e, d, u, n) && (C = 1);
        else if (d.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(d) + "").trim(), u += "", si.lastIndex = 0, si.test(c) || (p = mt(c), _ = mt(u)), _ ? p !== _ && (c = oi(e, d, c, _) + _) : p && (u += p), this.add(a, "setProperty", c, u, i, r, 0, 0, d), s.push(d), x.push(d, a[d]);
        else if (m !== "undefined") {
          if (l && d in l ? (c = typeof l[d] == "function" ? l[d].call(n, i, e, r) : l[d], ot(c) && ~c.indexOf("random(") && (c = ns(c)), mt(c + "") || (c += Ut.units[d] || mt(Dn(e, d)) || ""), (c + "").charAt(1) === "=" && (c = Dn(e, d))) : c = Dn(e, d), f = parseFloat(c), y = m === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), h = parseFloat(u), d in Fn && (d === "autoAlpha" && (f === 1 && Dn(e, "visibility") === "hidden" && h && (f = 0), x.push("visibility", a.visibility), ni(this, a, "visibility", f ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), d !== "scale" && d !== "transform" && (d = Fn[d], ~d.indexOf(",") && (d = d.split(",")[0]))), M = d in Vn, M) {
            if (this.styles.save(d), v || (b = e._gsap, b.renderTransform && !t.parseTransform || as(e, t.parseTransform), E = t.smoothOrigin !== !1 && b.smooth, v = this._pt = new Lt(this._pt, a, Ke, 0, 1, b.renderTransform, b, 0, -1), v.dep = 1), d === "scale")
              this._pt = new Lt(this._pt, b, "scaleY", b.scaleY, (y ? hr(b.scaleY, y + h) : h) - b.scaleY || 0, vo), this._pt.u = 0, s.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              x.push(ln, a[ln]), u = Cd(u), b.svg ? bo(e, u, 0, E, 0, this) : (_ = parseFloat(u.split(" ")[2]) || 0, _ !== b.zOrigin && ni(this, b, "zOrigin", b.zOrigin, _), ni(this, a, d, na(c), na(u)));
              continue;
            } else if (d === "svgOrigin") {
              bo(e, u, 1, E, 0, this);
              continue;
            } else if (d in ch) {
              Dd(this, b, d, f, y ? hr(f, y + u) : u);
              continue;
            } else if (d === "smoothOrigin") {
              ni(this, b, "smooth", b.smooth, u);
              continue;
            } else if (d === "force3D") {
              b[d] = u;
              continue;
            } else if (d === "transform") {
              Id(this, u, e);
              continue;
            }
          } else
            d in a || (d = br(d) || d);
          if (M || (h || h === 0) && (f || f === 0) && !pd.test(u) && d in a)
            p = (c + "").substr((f + "").length), h || (h = 0), _ = mt(u) || (d in Ut.units ? Ut.units[d] : p), p !== _ && (f = oi(e, d, c, _)), this._pt = new Lt(this._pt, M ? b : a, d, f, (y ? hr(f, y + h) : h) - f, !M && (_ === "px" || d === "zIndex") && t.autoRound !== !1 ? _d : vo), this._pt.u = _ || 0, p !== _ && _ !== "%" && (this._pt.b = c, this._pt.r = gd);
          else if (d in a)
            Ad.call(this, e, d, c, y ? y + u : u);
          else if (d in e)
            this.add(e, d, c || e[d], y ? y + u : u, i, r);
          else {
            ko(d, u);
            continue;
          }
          M || x.push(d, a[d]), s.push(d);
        }
      }
    C && eh(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Ko())
      for (var n = t._pt; n; )
        n.r(e, n.d), n = n._next;
    else
      t.styles.revert();
  },
  get: Dn,
  aliases: Fn,
  getSetter: function(e, t, n) {
    var i = Fn[t];
    return i && i.indexOf(",") < 0 && (t = i), t in Vn && t !== ln && (e._gsap.x || Dn(e, "x")) ? n && wl === n ? t === "scale" ? Md : yd : (wl = n || {}) && (t === "scale" ? bd : Sd) : e.style && !Uo(e.style[t]) ? xd : ~t.indexOf("-") ? vd : qo(e, t);
  },
  core: {
    _removeProperty: rs,
    _getMatrix: Zo
  }
};
Bt.utils.checkPrefix = br;
Bt.core.getStyleSaver = sh;
(function(o, e, t, n) {
  var i = Ct(o + "," + e + "," + t, function(r) {
    Vn[r] = 1;
  });
  Ct(e, function(r) {
    Ut.units[r] = "deg", ch[r] = 1;
  }), Fn[i[13]] = o + "," + e, Ct(n, function(r) {
    var s = r.split(":");
    Fn[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  Ut.units[o] = "px";
});
Bt.registerPlugin(fh);
var an = Bt.registerPlugin(fh) || Bt;
an.core.Tween;
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Jo = "144", Fd = 0, Dl = 1, Nd = 2, dh = 1, Od = 2, jr = 3, Fi = 0, Qt = 1, Nn = 2, ai = 0, pr = 1, Il = 2, Fl = 3, Nl = 4, Ud = 5, or = 100, zd = 101, kd = 102, Ol = 103, Ul = 104, Bd = 200, Vd = 201, Gd = 202, Hd = 203, ph = 204, mh = 205, Wd = 206, Xd = 207, qd = 208, jd = 209, Yd = 210, Kd = 0, $d = 1, Zd = 2, So = 3, Jd = 4, Qd = 5, ep = 6, tp = 7, gh = 0, np = 1, ip = 2, Un = 0, rp = 1, sp = 2, ap = 3, op = 4, lp = 5, _h = 300, Sr = 301, wr = 302, wo = 303, To = 304, ca = 306, Tr = 1e3, jt = 1001, ia = 1002, ht = 1003, Eo = 1004, Ao = 1005, Tt = 1006, xh = 1007, Rr = 1008, Ni = 1009, cp = 1010, up = 1011, vh = 1012, hp = 1013, Si = 1014, ii = 1015, os = 1016, fp = 1017, dp = 1018, mr = 1020, pp = 1021, mp = 1022, on = 1023, gp = 1024, _p = 1025, Ri = 1026, Er = 1027, xp = 1028, vp = 1029, yp = 1030, Mp = 1031, bp = 1033, Ea = 33776, Aa = 33777, Ca = 33778, La = 33779, zl = 35840, kl = 35841, Bl = 35842, Vl = 35843, Sp = 36196, Gl = 37492, Hl = 37496, Wl = 37808, Xl = 37809, ql = 37810, jl = 37811, Yl = 37812, Kl = 37813, $l = 37814, Zl = 37815, Jl = 37816, Ql = 37817, ec = 37818, tc = 37819, nc = 37820, ic = 37821, rc = 36492, ls = 2300, Ar = 2301, Ra = 2302, sc = 2400, ac = 2401, oc = 2402, wp = 2500, Tp = 1, yh = 2, Oi = 3e3, Ne = 3001, Ep = 3200, Ap = 3201, Qo = 0, Cp = 1, Pn = "srgb", wi = "srgb-linear", Pa = 7680, Lp = 519, Co = 35044, lc = "300 es", Lo = 1035;
class Pr {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, s = i.length; r < s; r++)
        i[r].call(this, e);
      e.target = null;
    }
  }
}
const ft = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let cc = 1234567;
const Qr = Math.PI / 180, cs = 180 / Math.PI;
function cn() {
  const o = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ft[o & 255] + ft[o >> 8 & 255] + ft[o >> 16 & 255] + ft[o >> 24 & 255] + "-" + ft[e & 255] + ft[e >> 8 & 255] + "-" + ft[e >> 16 & 15 | 64] + ft[e >> 24 & 255] + "-" + ft[t & 63 | 128] + ft[t >> 8 & 255] + "-" + ft[t >> 16 & 255] + ft[t >> 24 & 255] + ft[n & 255] + ft[n >> 8 & 255] + ft[n >> 16 & 255] + ft[n >> 24 & 255]).toLowerCase();
}
function yt(o, e, t) {
  return Math.max(e, Math.min(t, o));
}
function el(o, e) {
  return (o % e + e) % e;
}
function Rp(o, e, t, n, i) {
  return n + (o - e) * (i - n) / (t - e);
}
function Pp(o, e, t) {
  return o !== e ? (t - o) / (e - o) : 0;
}
function es(o, e, t) {
  return (1 - t) * o + t * e;
}
function Dp(o, e, t, n) {
  return es(o, e, 1 - Math.exp(-t * n));
}
function Ip(o, e = 1) {
  return e - Math.abs(el(o, e * 2) - e);
}
function Fp(o, e, t) {
  return o <= e ? 0 : o >= t ? 1 : (o = (o - e) / (t - e), o * o * (3 - 2 * o));
}
function Np(o, e, t) {
  return o <= e ? 0 : o >= t ? 1 : (o = (o - e) / (t - e), o * o * o * (o * (o * 6 - 15) + 10));
}
function Op(o, e) {
  return o + Math.floor(Math.random() * (e - o + 1));
}
function Up(o, e) {
  return o + Math.random() * (e - o);
}
function zp(o) {
  return o * (0.5 - Math.random());
}
function kp(o) {
  o !== void 0 && (cc = o);
  let e = cc += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Bp(o) {
  return o * Qr;
}
function Vp(o) {
  return o * cs;
}
function Ro(o) {
  return (o & o - 1) === 0 && o !== 0;
}
function Mh(o) {
  return Math.pow(2, Math.ceil(Math.log(o) / Math.LN2));
}
function ra(o) {
  return Math.pow(2, Math.floor(Math.log(o) / Math.LN2));
}
function Gp(o, e, t, n, i) {
  const r = Math.cos, s = Math.sin, a = r(t / 2), l = s(t / 2), c = r((e + n) / 2), u = s((e + n) / 2), h = r((e - n) / 2), f = s((e - n) / 2), m = r((n - e) / 2), g = s((n - e) / 2);
  switch (i) {
    case "XYX":
      o.set(a * u, l * h, l * f, a * c);
      break;
    case "YZY":
      o.set(l * f, a * u, l * h, a * c);
      break;
    case "ZXZ":
      o.set(l * h, l * f, a * u, a * c);
      break;
    case "XZX":
      o.set(a * u, l * g, l * m, a * c);
      break;
    case "YXY":
      o.set(l * m, a * u, l * g, a * c);
      break;
    case "ZYZ":
      o.set(l * g, l * m, a * u, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function On(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return o / 65535;
    case Uint8Array:
      return o / 255;
    case Int16Array:
      return Math.max(o / 32767, -1);
    case Int8Array:
      return Math.max(o / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ve(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return Math.round(o * 65535);
    case Uint8Array:
      return Math.round(o * 255);
    case Int16Array:
      return Math.round(o * 32767);
    case Int8Array:
      return Math.round(o * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var Hp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DEG2RAD: Qr,
  RAD2DEG: cs,
  generateUUID: cn,
  clamp: yt,
  euclideanModulo: el,
  mapLinear: Rp,
  inverseLerp: Pp,
  lerp: es,
  damp: Dp,
  pingpong: Ip,
  smoothstep: Fp,
  smootherstep: Np,
  randInt: Op,
  randFloat: Up,
  randFloatSpread: zp,
  seededRandom: kp,
  degToRad: Bp,
  radToDeg: Vp,
  isPowerOfTwo: Ro,
  ceilPowerOfTwo: Mh,
  floorPowerOfTwo: ra,
  setQuaternionFromProperEuler: Gp,
  normalize: Ve,
  denormalize: On
});
class Le {
  constructor(e = 0, t = 0) {
    Le.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, s = this.y - e.y;
    return this.x = r * n - s * i + e.x, this.y = r * i + s * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Zt {
  constructor() {
    Zt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, r, s, a, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = a, u[3] = t, u[4] = r, u[5] = l, u[6] = n, u[7] = s, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, s = n[0], a = n[3], l = n[6], c = n[1], u = n[4], h = n[7], f = n[2], m = n[5], g = n[8], d = i[0], p = i[3], _ = i[6], y = i[1], M = i[4], v = i[7], b = i[2], E = i[5], C = i[8];
    return r[0] = s * d + a * y + l * b, r[3] = s * p + a * M + l * E, r[6] = s * _ + a * v + l * C, r[1] = c * d + u * y + h * b, r[4] = c * p + u * M + h * E, r[7] = c * _ + u * v + h * C, r[2] = f * d + m * y + g * b, r[5] = f * p + m * M + g * E, r[8] = f * _ + m * v + g * C, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], s = e[4], a = e[5], l = e[6], c = e[7], u = e[8];
    return t * s * u - t * a * c - n * r * u + n * a * l + i * r * c - i * s * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], s = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = u * s - a * c, f = a * l - u * r, m = c * r - s * l, g = t * h + n * f + i * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const d = 1 / g;
    return e[0] = h * d, e[1] = (i * c - u * n) * d, e[2] = (a * n - i * s) * d, e[3] = f * d, e[4] = (u * t - i * l) * d, e[5] = (i * r - a * t) * d, e[6] = m * d, e[7] = (n * l - c * t) * d, e[8] = (s * t - n * r) * d, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, s, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(
      n * l,
      n * c,
      -n * (l * s + c * a) + s + e,
      -i * c,
      i * l,
      -i * (-c * s + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    const n = this.elements;
    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
  }
  rotate(e) {
    const t = Math.cos(e), n = Math.sin(e), i = this.elements, r = i[0], s = i[3], a = i[6], l = i[1], c = i[4], u = i[7];
    return i[0] = t * r + n * l, i[3] = t * s + n * c, i[6] = t * a + n * u, i[1] = -n * r + t * l, i[4] = -n * s + t * c, i[7] = -n * a + t * u, this;
  }
  translate(e, t) {
    const n = this.elements;
    return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function bh(o) {
  for (let e = o.length - 1; e >= 0; --e)
    if (o[e] >= 65535)
      return !0;
  return !1;
}
function us(o) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", o);
}
function Pi(o) {
  return o < 0.04045 ? o * 0.0773993808 : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
}
function js(o) {
  return o < 31308e-7 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
}
const Da = {
  [Pn]: { [wi]: Pi },
  [wi]: { [Pn]: js }
}, tn = {
  legacyMode: !0,
  get workingColorSpace() {
    return wi;
  },
  set workingColorSpace(o) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(o, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return o;
    if (Da[e] && Da[e][t] !== void 0) {
      const n = Da[e][t];
      return o.r = n(o.r), o.g = n(o.g), o.b = n(o.b), o;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(o, e) {
    return this.convert(o, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(o, e) {
    return this.convert(o, e, this.workingColorSpace);
  }
}, Sh = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, it = { r: 0, g: 0, b: 0 }, nn = { h: 0, s: 0, l: 0 }, Ms = { h: 0, s: 0, l: 0 };
function Ia(o, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o;
}
function bs(o, e) {
  return e.r = o.r, e.g = o.g, e.b = o.b, e;
}
class _e {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Pn) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, tn.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = wi) {
    return this.r = e, this.g = t, this.b = n, tn.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = wi) {
    if (e = el(e, 1), t = yt(t, 0, 1), n = yt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
      this.r = Ia(s, r, e + 1 / 3), this.g = Ia(s, r, e), this.b = Ia(s, r, e - 1 / 3);
    }
    return tn.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Pn) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let r;
      const s = i[1], a = i[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, tn.toWorkingColorSpace(this, t), n(r[4]), this;
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, tn.toWorkingColorSpace(this, t), n(r[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            const l = parseFloat(r[1]) / 360, c = parseFloat(r[2]) / 100, u = parseFloat(r[3]) / 100;
            return n(r[4]), this.setHSL(l, c, u, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], s = r.length;
      if (s === 3)
        return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, tn.toWorkingColorSpace(this, t), this;
      if (s === 6)
        return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, tn.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Pn) {
    const n = Sh[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Pi(e.r), this.g = Pi(e.g), this.b = Pi(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = js(e.r), this.g = js(e.g), this.b = js(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Pn) {
    return tn.fromWorkingColorSpace(bs(this, it), e), yt(it.r * 255, 0, 255) << 16 ^ yt(it.g * 255, 0, 255) << 8 ^ yt(it.b * 255, 0, 255) << 0;
  }
  getHexString(e = Pn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = wi) {
    tn.fromWorkingColorSpace(bs(this, it), t);
    const n = it.r, i = it.g, r = it.b, s = Math.max(n, i, r), a = Math.min(n, i, r);
    let l, c;
    const u = (a + s) / 2;
    if (a === s)
      l = 0, c = 0;
    else {
      const h = s - a;
      switch (c = u <= 0.5 ? h / (s + a) : h / (2 - s - a), s) {
        case n:
          l = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / h + 2;
          break;
        case r:
          l = (n - i) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = wi) {
    return tn.fromWorkingColorSpace(bs(this, it), t), e.r = it.r, e.g = it.g, e.b = it.b, e;
  }
  getStyle(e = Pn) {
    return tn.fromWorkingColorSpace(bs(this, it), e), e !== Pn ? `color(${e} ${it.r} ${it.g} ${it.b})` : `rgb(${it.r * 255 | 0},${it.g * 255 | 0},${it.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(nn), nn.h += e, nn.s += t, nn.l += n, this.setHSL(nn.h, nn.s, nn.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(nn), e.getHSL(Ms);
    const n = es(nn.h, Ms.h, t), i = es(nn.s, Ms.s, t), r = es(nn.l, Ms.l, t);
    return this.setHSL(n, i, r), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
_e.NAMES = Sh;
let ji;
class wh {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      ji === void 0 && (ji = us("canvas")), ji.width = e.width, ji.height = e.height;
      const n = ji.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ji;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = us("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let s = 0; s < r.length; s++)
        r[s] = Pi(r[s] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Pi(t[n] / 255) * 255) : t[n] = Pi(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Th {
  constructor(e = null) {
    this.isSource = !0, this.uuid = cn(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let s = 0, a = i.length; s < a; s++)
          i[s].isDataTexture ? r.push(Fa(i[s].image)) : r.push(Fa(i[s]));
      } else
        r = Fa(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Fa(o) {
  return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? wh.getDataURL(o) : o.data ? {
    data: Array.from(o.data),
    width: o.width,
    height: o.height,
    type: o.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Wp = 0;
class bt extends Pr {
  constructor(e = bt.DEFAULT_IMAGE, t = bt.DEFAULT_MAPPING, n = jt, i = jt, r = Tt, s = Rr, a = on, l = Ni, c = 1, u = Oi) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Wp++ }), this.uuid = cn(), this.name = "", this.source = new Th(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Le(0, 0), this.repeat = new Le(1, 1), this.center = new Le(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Zt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== _h)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Tr:
          e.x = e.x - Math.floor(e.x);
          break;
        case jt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ia:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Tr:
          e.y = e.y - Math.floor(e.y);
          break;
        case jt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ia:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
bt.DEFAULT_IMAGE = null;
bt.DEFAULT_MAPPING = _h;
class He {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    He.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * t + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * t + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * t + s[7] * n + s[11] * i + s[15] * r, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const l = e.elements, c = l[0], u = l[4], h = l[8], f = l[1], m = l[5], g = l[9], d = l[2], p = l[6], _ = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(h - d) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(h + d) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (c + 1) / 2, v = (m + 1) / 2, b = (_ + 1) / 2, E = (u + f) / 4, C = (h + d) / 4, x = (g + p) / 4;
      return M > v && M > b ? M < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(M), i = E / n, r = C / n) : v > b ? v < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(v), n = E / i, r = x / i) : b < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(b), n = C / r, i = x / r), this.set(n, i, r, t), this;
    }
    let y = Math.sqrt((p - g) * (p - g) + (h - d) * (h - d) + (f - u) * (f - u));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (p - g) / y, this.y = (h - d) / y, this.z = (f - u) / y, this.w = Math.acos((c + m + _ - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ui extends Pr {
  constructor(e, t, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new He(0, 0, e, t), this.scissorTest = !1, this.viewport = new He(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new bt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Tt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Th(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Eh extends bt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ht, this.minFilter = ht, this.wrapR = jt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Xp extends bt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ht, this.minFilter = ht, this.wrapR = jt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Vi {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, s, a) {
    let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3];
    const f = r[s + 0], m = r[s + 1], g = r[s + 2], d = r[s + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = g, e[t + 3] = d;
      return;
    }
    if (h !== d || l !== f || c !== m || u !== g) {
      let p = 1 - a;
      const _ = l * f + c * m + u * g + h * d, y = _ >= 0 ? 1 : -1, M = 1 - _ * _;
      if (M > Number.EPSILON) {
        const b = Math.sqrt(M), E = Math.atan2(b, _ * y);
        p = Math.sin(p * E) / b, a = Math.sin(a * E) / b;
      }
      const v = a * y;
      if (l = l * p + f * v, c = c * p + m * v, u = u * p + g * v, h = h * p + d * v, p === 1 - a) {
        const b = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= b, c *= b, u *= b, h *= b;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, s) {
    const a = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = r[s], f = r[s + 1], m = r[s + 2], g = r[s + 3];
    return e[t] = a * g + u * h + l * m - c * f, e[t + 1] = l * g + u * f + c * h - a * m, e[t + 2] = c * g + u * m + a * f - l * h, e[t + 3] = u * g - a * h - l * f - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, r = e._z, s = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), u = a(i / 2), h = a(r / 2), f = l(n / 2), m = l(i / 2), g = l(r / 2);
    switch (s) {
      case "XYZ":
        this._x = f * u * h + c * m * g, this._y = c * m * h - f * u * g, this._z = c * u * g + f * m * h, this._w = c * u * h - f * m * g;
        break;
      case "YXZ":
        this._x = f * u * h + c * m * g, this._y = c * m * h - f * u * g, this._z = c * u * g - f * m * h, this._w = c * u * h + f * m * g;
        break;
      case "ZXY":
        this._x = f * u * h - c * m * g, this._y = c * m * h + f * u * g, this._z = c * u * g + f * m * h, this._w = c * u * h - f * m * g;
        break;
      case "ZYX":
        this._x = f * u * h - c * m * g, this._y = c * m * h + f * u * g, this._z = c * u * g - f * m * h, this._w = c * u * h + f * m * g;
        break;
      case "YZX":
        this._x = f * u * h + c * m * g, this._y = c * m * h + f * u * g, this._z = c * u * g - f * m * h, this._w = c * u * h - f * m * g;
        break;
      case "XZY":
        this._x = f * u * h - c * m * g, this._y = c * m * h - f * u * g, this._z = c * u * g + f * m * h, this._w = c * u * h + f * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], s = t[1], a = t[5], l = t[9], c = t[2], u = t[6], h = t[10], f = n + a + h;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (r - c) * m, this._z = (s - i) * m;
    } else if (n > a && n > h) {
      const m = 2 * Math.sqrt(1 + n - a - h);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (i + s) / m, this._z = (r + c) / m;
    } else if (a > h) {
      const m = 2 * Math.sqrt(1 + a - n - h);
      this._w = (r - c) / m, this._x = (i + s) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + h - n - a);
      this._w = (s - i) / m, this._x = (r + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(yt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, s = e._w, a = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + s * a + i * c - r * l, this._y = i * u + s * l + r * a - n * c, this._z = r * u + s * c + n * l - i * a, this._w = s * u - n * a - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, r = this._z, s = this._w;
    let a = s * e._w + n * e._x + i * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = s, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * s + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * r + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, a), h = Math.sin((1 - t) * u) / c, f = Math.sin(t * u) / c;
    return this._w = s * h + this._w * f, this._x = n * h + this._x * f, this._y = i * h + this._y * f, this._z = r * h + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(uc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(uc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, s = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * s, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, s = e.y, a = e.z, l = e.w, c = l * t + s * i - a * n, u = l * n + a * t - r * i, h = l * i + r * n - s * t, f = -r * t - s * n - a * i;
    return this.x = c * l + f * -r + u * -a - h * -s, this.y = u * l + f * -s + h * -r - c * -a, this.z = h * l + f * -a + c * -s - u * -r, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, s = t.x, a = t.y, l = t.z;
    return this.x = i * l - r * a, this.y = r * s - n * l, this.z = n * a - i * s, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Na.copy(this).projectOnVector(e), this.sub(Na);
  }
  reflect(e) {
    return this.sub(Na.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(yt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Na = /* @__PURE__ */ new R(), uc = /* @__PURE__ */ new Vi();
class Dr {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const u = e[l], h = e[l + 1], f = e[l + 2];
      u < t && (t = u), h < n && (n = h), f < i && (i = f), u > r && (r = u), h > s && (s = h), f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(r, s, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, s = -1 / 0, a = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const u = e.getX(l), h = e.getY(l), f = e.getZ(l);
      u < t && (t = u), h < n && (n = h), f < i && (i = f), u > r && (r = u), h > s && (s = h), f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(r, s, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = di.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let s = 0, a = r.count; s < a; s++)
          di.fromBufferAttribute(r, s).applyMatrix4(e.matrixWorld), this.expandByPoint(di);
      } else
        n.boundingBox === null && n.computeBoundingBox(), Oa.copy(n.boundingBox), Oa.applyMatrix4(e.matrixWorld), this.union(Oa);
    const i = e.children;
    for (let r = 0, s = i.length; r < s; r++)
      this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, di), di.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(kr), Ss.subVectors(this.max, kr), Yi.subVectors(e.a, kr), Ki.subVectors(e.b, kr), $i.subVectors(e.c, kr), Wn.subVectors(Ki, Yi), Xn.subVectors($i, Ki), pi.subVectors(Yi, $i);
    let t = [
      0,
      -Wn.z,
      Wn.y,
      0,
      -Xn.z,
      Xn.y,
      0,
      -pi.z,
      pi.y,
      Wn.z,
      0,
      -Wn.x,
      Xn.z,
      0,
      -Xn.x,
      pi.z,
      0,
      -pi.x,
      -Wn.y,
      Wn.x,
      0,
      -Xn.y,
      Xn.x,
      0,
      -pi.y,
      pi.x,
      0
    ];
    return !Ua(t, Yi, Ki, $i, Ss) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ua(t, Yi, Ki, $i, Ss)) ? !1 : (ws.crossVectors(Wn, Xn), t = [ws.x, ws.y, ws.z], Ua(t, Yi, Ki, $i, Ss));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return di.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(di).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Sn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Sn = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], di = /* @__PURE__ */ new R(), Oa = /* @__PURE__ */ new Dr(), Yi = /* @__PURE__ */ new R(), Ki = /* @__PURE__ */ new R(), $i = /* @__PURE__ */ new R(), Wn = /* @__PURE__ */ new R(), Xn = /* @__PURE__ */ new R(), pi = /* @__PURE__ */ new R(), kr = /* @__PURE__ */ new R(), Ss = /* @__PURE__ */ new R(), ws = /* @__PURE__ */ new R(), mi = /* @__PURE__ */ new R();
function Ua(o, e, t, n, i) {
  for (let r = 0, s = o.length - 3; r <= s; r += 3) {
    mi.fromArray(o, r);
    const a = i.x * Math.abs(mi.x) + i.y * Math.abs(mi.y) + i.z * Math.abs(mi.z), l = e.dot(mi), c = t.dot(mi), u = n.dot(mi);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a)
      return !1;
  }
  return !0;
}
const qp = /* @__PURE__ */ new Dr(), hc = /* @__PURE__ */ new R(), Ts = /* @__PURE__ */ new R(), za = /* @__PURE__ */ new R();
class Ir {
  constructor(e = new R(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : qp.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, s = e.length; r < s; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    za.subVectors(e, this.center);
    const t = za.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.add(za.multiplyScalar(i / n)), this.radius += i;
    }
    return this;
  }
  union(e) {
    return this.center.equals(e.center) === !0 ? Ts.set(0, 0, 1).multiplyScalar(e.radius) : Ts.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(hc.copy(e.center).add(Ts)), this.expandByPoint(hc.copy(e.center).sub(Ts)), this;
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const wn = /* @__PURE__ */ new R(), ka = /* @__PURE__ */ new R(), Es = /* @__PURE__ */ new R(), qn = /* @__PURE__ */ new R(), Ba = /* @__PURE__ */ new R(), As = /* @__PURE__ */ new R(), Va = /* @__PURE__ */ new R();
class tl {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, wn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = wn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (wn.copy(this.direction).multiplyScalar(t).add(this.origin), wn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ka.copy(e).add(t).multiplyScalar(0.5), Es.copy(t).sub(e).normalize(), qn.copy(this.origin).sub(ka);
    const r = e.distanceTo(t) * 0.5, s = -this.direction.dot(Es), a = qn.dot(this.direction), l = -qn.dot(Es), c = qn.lengthSq(), u = Math.abs(1 - s * s);
    let h, f, m, g;
    if (u > 0)
      if (h = s * l - a, f = s * a - l, g = r * u, h >= 0)
        if (f >= -g)
          if (f <= g) {
            const d = 1 / u;
            h *= d, f *= d, m = h * (h + s * f + 2 * a) + f * (s * h + f + 2 * l) + c;
          } else
            f = r, h = Math.max(0, -(s * f + a)), m = -h * h + f * (f + 2 * l) + c;
        else
          f = -r, h = Math.max(0, -(s * f + a)), m = -h * h + f * (f + 2 * l) + c;
      else
        f <= -g ? (h = Math.max(0, -(-s * r + a)), f = h > 0 ? -r : Math.min(Math.max(-r, -l), r), m = -h * h + f * (f + 2 * l) + c) : f <= g ? (h = 0, f = Math.min(Math.max(-r, -l), r), m = f * (f + 2 * l) + c) : (h = Math.max(0, -(s * r + a)), f = h > 0 ? r : Math.min(Math.max(-r, -l), r), m = -h * h + f * (f + 2 * l) + c);
    else
      f = s > 0 ? -r : r, h = Math.max(0, -(s * f + a)), m = -h * h + f * (f + 2 * l) + c;
    return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Es).multiplyScalar(f).add(ka), m;
  }
  intersectSphere(e, t) {
    wn.subVectors(e.center, this.origin);
    const n = wn.dot(this.direction), i = wn.dot(wn) - n * n, r = e.radius * e.radius;
    if (i > r)
      return null;
    const s = Math.sqrt(r - i), a = n - s, l = n + s;
    return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, s, a, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, i = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, i = (e.min.x - f.x) * c), u >= 0 ? (r = (e.min.y - f.y) * u, s = (e.max.y - f.y) * u) : (r = (e.max.y - f.y) * u, s = (e.min.y - f.y) * u), n > s || r > i || ((r > n || n !== n) && (n = r), (s < i || i !== i) && (i = s), h >= 0 ? (a = (e.min.z - f.z) * h, l = (e.max.z - f.z) * h) : (a = (e.max.z - f.z) * h, l = (e.min.z - f.z) * h), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, wn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Ba.subVectors(t, e), As.subVectors(n, e), Va.crossVectors(Ba, As);
    let s = this.direction.dot(Va), a;
    if (s > 0) {
      if (i)
        return null;
      a = 1;
    } else if (s < 0)
      a = -1, s = -s;
    else
      return null;
    qn.subVectors(this.origin, e);
    const l = a * this.direction.dot(As.crossVectors(qn, As));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Ba.cross(qn));
    if (c < 0 || l + c > s)
      return null;
    const u = -a * qn.dot(Va);
    return u < 0 ? null : this.at(u / s, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class De {
  constructor() {
    De.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, r, s, a, l, c, u, h, f, m, g, d, p) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = r, _[5] = s, _[9] = a, _[13] = l, _[2] = c, _[6] = u, _[10] = h, _[14] = f, _[3] = m, _[7] = g, _[11] = d, _[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new De().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Zi.setFromMatrixColumn(e, 0).length(), r = 1 / Zi.setFromMatrixColumn(e, 1).length(), s = 1 / Zi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * s, t[9] = n[9] * s, t[10] = n[10] * s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(r), h = Math.sin(r);
    if (e.order === "XYZ") {
      const f = s * u, m = s * h, g = a * u, d = a * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = m + g * c, t[5] = f - d * c, t[9] = -a * l, t[2] = d - f * c, t[6] = g + m * c, t[10] = s * l;
    } else if (e.order === "YXZ") {
      const f = l * u, m = l * h, g = c * u, d = c * h;
      t[0] = f + d * a, t[4] = g * a - m, t[8] = s * c, t[1] = s * h, t[5] = s * u, t[9] = -a, t[2] = m * a - g, t[6] = d + f * a, t[10] = s * l;
    } else if (e.order === "ZXY") {
      const f = l * u, m = l * h, g = c * u, d = c * h;
      t[0] = f - d * a, t[4] = -s * h, t[8] = g + m * a, t[1] = m + g * a, t[5] = s * u, t[9] = d - f * a, t[2] = -s * c, t[6] = a, t[10] = s * l;
    } else if (e.order === "ZYX") {
      const f = s * u, m = s * h, g = a * u, d = a * h;
      t[0] = l * u, t[4] = g * c - m, t[8] = f * c + d, t[1] = l * h, t[5] = d * c + f, t[9] = m * c - g, t[2] = -c, t[6] = a * l, t[10] = s * l;
    } else if (e.order === "YZX") {
      const f = s * l, m = s * c, g = a * l, d = a * c;
      t[0] = l * u, t[4] = d - f * h, t[8] = g * h + m, t[1] = h, t[5] = s * u, t[9] = -a * u, t[2] = -c * u, t[6] = m * h + g, t[10] = f - d * h;
    } else if (e.order === "XZY") {
      const f = s * l, m = s * c, g = a * l, d = a * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = f * h + d, t[5] = s * u, t[9] = m * h - g, t[2] = g * h - m, t[6] = a * u, t[10] = d * h + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(jp, e, Yp);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Dt.subVectors(e, t), Dt.lengthSq() === 0 && (Dt.z = 1), Dt.normalize(), jn.crossVectors(n, Dt), jn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Dt.x += 1e-4 : Dt.z += 1e-4, Dt.normalize(), jn.crossVectors(n, Dt)), jn.normalize(), Cs.crossVectors(Dt, jn), i[0] = jn.x, i[4] = Cs.x, i[8] = Dt.x, i[1] = jn.y, i[5] = Cs.y, i[9] = Dt.y, i[2] = jn.z, i[6] = Cs.z, i[10] = Dt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, s = n[0], a = n[4], l = n[8], c = n[12], u = n[1], h = n[5], f = n[9], m = n[13], g = n[2], d = n[6], p = n[10], _ = n[14], y = n[3], M = n[7], v = n[11], b = n[15], E = i[0], C = i[4], x = i[8], w = i[12], L = i[1], z = i[5], K = i[9], N = i[13], P = i[2], k = i[6], q = i[10], G = i[14], B = i[3], F = i[7], O = i[11], ee = i[15];
    return r[0] = s * E + a * L + l * P + c * B, r[4] = s * C + a * z + l * k + c * F, r[8] = s * x + a * K + l * q + c * O, r[12] = s * w + a * N + l * G + c * ee, r[1] = u * E + h * L + f * P + m * B, r[5] = u * C + h * z + f * k + m * F, r[9] = u * x + h * K + f * q + m * O, r[13] = u * w + h * N + f * G + m * ee, r[2] = g * E + d * L + p * P + _ * B, r[6] = g * C + d * z + p * k + _ * F, r[10] = g * x + d * K + p * q + _ * O, r[14] = g * w + d * N + p * G + _ * ee, r[3] = y * E + M * L + v * P + b * B, r[7] = y * C + M * z + v * k + b * F, r[11] = y * x + M * K + v * q + b * O, r[15] = y * w + M * N + v * G + b * ee, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], s = e[1], a = e[5], l = e[9], c = e[13], u = e[2], h = e[6], f = e[10], m = e[14], g = e[3], d = e[7], p = e[11], _ = e[15];
    return g * (+r * l * h - i * c * h - r * a * f + n * c * f + i * a * m - n * l * m) + d * (+t * l * m - t * c * f + r * s * f - i * s * m + i * c * u - r * l * u) + p * (+t * c * h - t * a * m - r * s * h + n * s * m + r * a * u - n * c * u) + _ * (-i * a * u - t * l * h + t * a * f + i * s * h - n * s * f + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], s = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], f = e[10], m = e[11], g = e[12], d = e[13], p = e[14], _ = e[15], y = h * p * c - d * f * c + d * l * m - a * p * m - h * l * _ + a * f * _, M = g * f * c - u * p * c - g * l * m + s * p * m + u * l * _ - s * f * _, v = u * d * c - g * h * c + g * a * m - s * d * m - u * a * _ + s * h * _, b = g * h * l - u * d * l - g * a * f + s * d * f + u * a * p - s * h * p, E = t * y + n * M + i * v + r * b;
    if (E === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / E;
    return e[0] = y * C, e[1] = (d * f * r - h * p * r - d * i * m + n * p * m + h * i * _ - n * f * _) * C, e[2] = (a * p * r - d * l * r + d * i * c - n * p * c - a * i * _ + n * l * _) * C, e[3] = (h * l * r - a * f * r - h * i * c + n * f * c + a * i * m - n * l * m) * C, e[4] = M * C, e[5] = (u * p * r - g * f * r + g * i * m - t * p * m - u * i * _ + t * f * _) * C, e[6] = (g * l * r - s * p * r - g * i * c + t * p * c + s * i * _ - t * l * _) * C, e[7] = (s * f * r - u * l * r + u * i * c - t * f * c - s * i * m + t * l * m) * C, e[8] = v * C, e[9] = (g * h * r - u * d * r - g * n * m + t * d * m + u * n * _ - t * h * _) * C, e[10] = (s * d * r - g * a * r + g * n * c - t * d * c - s * n * _ + t * a * _) * C, e[11] = (u * a * r - s * h * r - u * n * c + t * h * c + s * n * m - t * a * m) * C, e[12] = b * C, e[13] = (u * d * i - g * h * i + g * n * f - t * d * f - u * n * p + t * h * p) * C, e[14] = (g * a * i - s * d * i - g * n * l + t * d * l + s * n * p - t * a * p) * C, e[15] = (s * h * i - u * a * i + u * n * l - t * h * l - s * n * f + t * a * f) * C, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, s = e.x, a = e.y, l = e.z, c = r * s, u = r * a;
    return this.set(
      c * s + n,
      c * a - i * l,
      c * l + i * a,
      0,
      c * a + i * l,
      u * a + n,
      u * l - i * s,
      0,
      c * l - i * a,
      u * l + i * s,
      r * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, r, s) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      s,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, s = t._y, a = t._z, l = t._w, c = r + r, u = s + s, h = a + a, f = r * c, m = r * u, g = r * h, d = s * u, p = s * h, _ = a * h, y = l * c, M = l * u, v = l * h, b = n.x, E = n.y, C = n.z;
    return i[0] = (1 - (d + _)) * b, i[1] = (m + v) * b, i[2] = (g - M) * b, i[3] = 0, i[4] = (m - v) * E, i[5] = (1 - (f + _)) * E, i[6] = (p + y) * E, i[7] = 0, i[8] = (g + M) * C, i[9] = (p - y) * C, i[10] = (1 - (f + d)) * C, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Zi.set(i[0], i[1], i[2]).length();
    const s = Zi.set(i[4], i[5], i[6]).length(), a = Zi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], rn.copy(this);
    const c = 1 / r, u = 1 / s, h = 1 / a;
    return rn.elements[0] *= c, rn.elements[1] *= c, rn.elements[2] *= c, rn.elements[4] *= u, rn.elements[5] *= u, rn.elements[6] *= u, rn.elements[8] *= h, rn.elements[9] *= h, rn.elements[10] *= h, t.setFromRotationMatrix(rn), n.x = r, n.y = s, n.z = a, this;
  }
  makePerspective(e, t, n, i, r, s) {
    const a = this.elements, l = 2 * r / (t - e), c = 2 * r / (n - i), u = (t + e) / (t - e), h = (n + i) / (n - i), f = -(s + r) / (s - r), m = -2 * s * r / (s - r);
    return a[0] = l, a[4] = 0, a[8] = u, a[12] = 0, a[1] = 0, a[5] = c, a[9] = h, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = f, a[14] = m, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, s) {
    const a = this.elements, l = 1 / (t - e), c = 1 / (n - i), u = 1 / (s - r), h = (t + e) * l, f = (n + i) * c, m = (s + r) * u;
    return a[0] = 2 * l, a[4] = 0, a[8] = 0, a[12] = -h, a[1] = 0, a[5] = 2 * c, a[9] = 0, a[13] = -f, a[2] = 0, a[6] = 0, a[10] = -2 * u, a[14] = -m, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Zi = /* @__PURE__ */ new R(), rn = /* @__PURE__ */ new De(), jp = /* @__PURE__ */ new R(0, 0, 0), Yp = /* @__PURE__ */ new R(1, 1, 1), jn = /* @__PURE__ */ new R(), Cs = /* @__PURE__ */ new R(), Dt = /* @__PURE__ */ new R(), fc = /* @__PURE__ */ new De(), dc = /* @__PURE__ */ new Vi();
class ms {
  constructor(e = 0, t = 0, n = 0, i = ms.DefaultOrder) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, r = i[0], s = i[4], a = i[8], l = i[1], c = i[5], u = i[9], h = i[2], f = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(yt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-yt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(yt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, m), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-yt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-s, c));
        break;
      case "YZX":
        this._z = Math.asin(yt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-yt(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return fc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(fc, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return dc.setFromEuler(this), this.setFromQuaternion(dc, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
ms.DefaultOrder = "XYZ";
ms.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Ah {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Kp = 0;
const pc = /* @__PURE__ */ new R(), Ji = /* @__PURE__ */ new Vi(), Tn = /* @__PURE__ */ new De(), Ls = /* @__PURE__ */ new R(), Br = /* @__PURE__ */ new R(), $p = /* @__PURE__ */ new R(), Zp = /* @__PURE__ */ new Vi(), mc = /* @__PURE__ */ new R(1, 0, 0), gc = /* @__PURE__ */ new R(0, 1, 0), _c = /* @__PURE__ */ new R(0, 0, 1), Jp = { type: "added" }, xc = { type: "removed" };
class qe extends Pr {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Kp++ }), this.uuid = cn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = qe.DefaultUp.clone();
    const e = new R(), t = new ms(), n = new Vi(), i = new R(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function s() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(s), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new De()
      },
      normalMatrix: {
        value: new Zt()
      }
    }), this.matrix = new De(), this.matrixWorld = new De(), this.matrixAutoUpdate = qe.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = qe.DefaultMatrixWorldAutoUpdate, this.layers = new Ah(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Ji.setFromAxisAngle(e, t), this.quaternion.multiply(Ji), this;
  }
  rotateOnWorldAxis(e, t) {
    return Ji.setFromAxisAngle(e, t), this.quaternion.premultiply(Ji), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(mc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(gc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(_c, e);
  }
  translateOnAxis(e, t) {
    return pc.copy(e).applyQuaternion(this.quaternion), this.position.add(pc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(mc, e);
  }
  translateY(e) {
    return this.translateOnAxis(gc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(_c, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Tn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ls.copy(e) : Ls.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Br.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Tn.lookAt(Br, Ls, this.up) : Tn.lookAt(Ls, Br, this.up), this.quaternion.setFromRotationMatrix(Tn), i && (Tn.extractRotation(i.matrixWorld), Ji.setFromRotationMatrix(Tn), this.quaternion.premultiply(Ji.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Jp)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(xc)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(xc);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Tn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Tn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Tn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const s = this.children[n].getObjectByProperty(e, t);
      if (s !== void 0)
        return s;
    }
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Br, e, $p), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Br, Zp, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let r = 0, s = i.length; r < s; r++) {
        const a = i[r];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            r(e.shapes, h);
          }
        else
          r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(r(e.materials, this.material[l]));
        i.material = a;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const a = s(e.geometries), l = s(e.materials), c = s(e.textures), u = s(e.images), h = s(e.shapes), f = s(e.skeletons), m = s(e.animations), g = s(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function s(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
qe.DefaultUp = /* @__PURE__ */ new R(0, 1, 0);
qe.DefaultMatrixAutoUpdate = !0;
qe.DefaultMatrixWorldAutoUpdate = !0;
const sn = /* @__PURE__ */ new R(), En = /* @__PURE__ */ new R(), Ga = /* @__PURE__ */ new R(), An = /* @__PURE__ */ new R(), Qi = /* @__PURE__ */ new R(), er = /* @__PURE__ */ new R(), vc = /* @__PURE__ */ new R(), Ha = /* @__PURE__ */ new R(), Wa = /* @__PURE__ */ new R(), Xa = /* @__PURE__ */ new R();
class In {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), sn.subVectors(e, t), i.cross(sn);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    sn.subVectors(i, t), En.subVectors(n, t), Ga.subVectors(e, t);
    const s = sn.dot(sn), a = sn.dot(En), l = sn.dot(Ga), c = En.dot(En), u = En.dot(Ga), h = s * c - a * a;
    if (h === 0)
      return r.set(-2, -1, -1);
    const f = 1 / h, m = (c * l - a * u) * f, g = (s * u - a * l) * f;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, An), An.x >= 0 && An.y >= 0 && An.x + An.y <= 1;
  }
  static getUV(e, t, n, i, r, s, a, l) {
    return this.getBarycoord(e, t, n, i, An), l.set(0, 0), l.addScaledVector(r, An.x), l.addScaledVector(s, An.y), l.addScaledVector(a, An.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return sn.subVectors(n, t), En.subVectors(e, t), sn.cross(En).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return sn.subVectors(this.c, this.b), En.subVectors(this.a, this.b), sn.cross(En).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return In.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return In.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return In.getUV(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return In.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return In.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let s, a;
    Qi.subVectors(i, n), er.subVectors(r, n), Ha.subVectors(e, n);
    const l = Qi.dot(Ha), c = er.dot(Ha);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Wa.subVectors(e, i);
    const u = Qi.dot(Wa), h = er.dot(Wa);
    if (u >= 0 && h <= u)
      return t.copy(i);
    const f = l * h - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return s = l / (l - u), t.copy(n).addScaledVector(Qi, s);
    Xa.subVectors(e, r);
    const m = Qi.dot(Xa), g = er.dot(Xa);
    if (g >= 0 && m <= g)
      return t.copy(r);
    const d = m * c - l * g;
    if (d <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(er, a);
    const p = u * g - m * h;
    if (p <= 0 && h - u >= 0 && m - g >= 0)
      return vc.subVectors(r, i), a = (h - u) / (h - u + (m - g)), t.copy(i).addScaledVector(vc, a);
    const _ = 1 / (p + d + f);
    return s = d * _, a = f * _, t.copy(n).addScaledVector(Qi, s).addScaledVector(er, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Qp = 0;
class _n extends Pr {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Qp++ }), this.uuid = cn(), this.name = "", this.type = "Material", this.blending = pr, this.side = Fi, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = ph, this.blendDst = mh, this.blendEquation = or, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = So, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Lp, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Pa, this.stencilZFail = Pa, this.stencilZPass = Pa, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== pr && (n.blending = this.blending), this.side !== Fi && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(r) {
      const s = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, s.push(l);
      }
      return s;
    }
    if (t) {
      const r = i(e.textures), s = i(e.images);
      r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Ti extends _n {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new _e(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = gh, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const tt = /* @__PURE__ */ new R(), Rs = /* @__PURE__ */ new Le();
class zt {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Co, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Rs.fromBufferAttribute(this, t), Rs.applyMatrix3(e), this.setXY(t, Rs.x, Rs.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        tt.fromBufferAttribute(this, t), tt.applyMatrix3(e), this.setXYZ(t, tt.x, tt.y, tt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      tt.fromBufferAttribute(this, t), tt.applyMatrix4(e), this.setXYZ(t, tt.x, tt.y, tt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      tt.fromBufferAttribute(this, t), tt.applyNormalMatrix(e), this.setXYZ(t, tt.x, tt.y, tt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      tt.fromBufferAttribute(this, t), tt.transformDirection(e), this.setXYZ(t, tt.x, tt.y, tt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = On(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = On(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = On(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = On(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array), i = Ve(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array), i = Ve(i, this.array), r = Ve(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== Co && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Ch extends zt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Lh extends zt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class zn extends zt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let em = 0;
const Ht = /* @__PURE__ */ new De(), qa = /* @__PURE__ */ new qe(), tr = /* @__PURE__ */ new R(), It = /* @__PURE__ */ new Dr(), Vr = /* @__PURE__ */ new Dr(), at = /* @__PURE__ */ new R();
class vn extends Pr {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: em++ }), this.uuid = cn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (bh(e) ? Lh : Ch)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Zt().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Ht.makeRotationFromQuaternion(e), this.applyMatrix4(Ht), this;
  }
  rotateX(e) {
    return Ht.makeRotationX(e), this.applyMatrix4(Ht), this;
  }
  rotateY(e) {
    return Ht.makeRotationY(e), this.applyMatrix4(Ht), this;
  }
  rotateZ(e) {
    return Ht.makeRotationZ(e), this.applyMatrix4(Ht), this;
  }
  translate(e, t, n) {
    return Ht.makeTranslation(e, t, n), this.applyMatrix4(Ht), this;
  }
  scale(e, t, n) {
    return Ht.makeScale(e, t, n), this.applyMatrix4(Ht), this;
  }
  lookAt(e) {
    return qa.lookAt(e), qa.updateMatrix(), this.applyMatrix4(qa.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(tr).negate(), this.translate(tr.x, tr.y, tr.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new zn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Dr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          It.setFromBufferAttribute(r), this.morphTargetsRelative ? (at.addVectors(this.boundingBox.min, It.min), this.boundingBox.expandByPoint(at), at.addVectors(this.boundingBox.max, It.max), this.boundingBox.expandByPoint(at)) : (this.boundingBox.expandByPoint(It.min), this.boundingBox.expandByPoint(It.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ir());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (It.setFromBufferAttribute(e), t)
        for (let r = 0, s = t.length; r < s; r++) {
          const a = t[r];
          Vr.setFromBufferAttribute(a), this.morphTargetsRelative ? (at.addVectors(It.min, Vr.min), It.expandByPoint(at), at.addVectors(It.max, Vr.max), It.expandByPoint(at)) : (It.expandByPoint(Vr.min), It.expandByPoint(Vr.max));
        }
      It.getCenter(n);
      let i = 0;
      for (let r = 0, s = e.count; r < s; r++)
        at.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(at));
      if (t)
        for (let r = 0, s = t.length; r < s; r++) {
          const a = t[r], l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            at.fromBufferAttribute(a, c), l && (tr.fromBufferAttribute(e, c), at.add(tr)), i = Math.max(i, n.distanceToSquared(at));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, r = t.normal.array, s = t.uv.array, a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new zt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let L = 0; L < a; L++)
      c[L] = new R(), u[L] = new R();
    const h = new R(), f = new R(), m = new R(), g = new Le(), d = new Le(), p = new Le(), _ = new R(), y = new R();
    function M(L, z, K) {
      h.fromArray(i, L * 3), f.fromArray(i, z * 3), m.fromArray(i, K * 3), g.fromArray(s, L * 2), d.fromArray(s, z * 2), p.fromArray(s, K * 2), f.sub(h), m.sub(h), d.sub(g), p.sub(g);
      const N = 1 / (d.x * p.y - p.x * d.y);
      !isFinite(N) || (_.copy(f).multiplyScalar(p.y).addScaledVector(m, -d.y).multiplyScalar(N), y.copy(m).multiplyScalar(d.x).addScaledVector(f, -p.x).multiplyScalar(N), c[L].add(_), c[z].add(_), c[K].add(_), u[L].add(y), u[z].add(y), u[K].add(y));
    }
    let v = this.groups;
    v.length === 0 && (v = [{
      start: 0,
      count: n.length
    }]);
    for (let L = 0, z = v.length; L < z; ++L) {
      const K = v[L], N = K.start, P = K.count;
      for (let k = N, q = N + P; k < q; k += 3)
        M(
          n[k + 0],
          n[k + 1],
          n[k + 2]
        );
    }
    const b = new R(), E = new R(), C = new R(), x = new R();
    function w(L) {
      C.fromArray(r, L * 3), x.copy(C);
      const z = c[L];
      b.copy(z), b.sub(C.multiplyScalar(C.dot(z))).normalize(), E.crossVectors(x, z);
      const N = E.dot(u[L]) < 0 ? -1 : 1;
      l[L * 4] = b.x, l[L * 4 + 1] = b.y, l[L * 4 + 2] = b.z, l[L * 4 + 3] = N;
    }
    for (let L = 0, z = v.length; L < z; ++L) {
      const K = v[L], N = K.start, P = K.count;
      for (let k = N, q = N + P; k < q; k += 3)
        w(n[k + 0]), w(n[k + 1]), w(n[k + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new zt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const i = new R(), r = new R(), s = new R(), a = new R(), l = new R(), c = new R(), u = new R(), h = new R();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0), d = e.getX(f + 1), p = e.getX(f + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, d), s.fromBufferAttribute(t, p), u.subVectors(s, r), h.subVectors(i, r), u.cross(h), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, d), c.fromBufferAttribute(n, p), a.add(u), l.add(u), c.add(u), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(d, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          i.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), s.fromBufferAttribute(t, f + 2), u.subVectors(s, r), h.subVectors(i, r), u.cross(h), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      at.fromBufferAttribute(e, t), at.normalize(), e.setXYZ(t, at.x, at.y, at.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, u = a.itemSize, h = a.normalized, f = new c.constructor(l.length * u);
      let m = 0, g = 0;
      for (let d = 0, p = l.length; d < p; d++) {
        a.isInterleavedBufferAttribute ? m = l[d] * a.data.stride + a.offset : m = l[d] * u;
        for (let _ = 0; _ < u; _++)
          f[g++] = c[m++];
      }
      return new zt(f, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new vn(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const l = i[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u], m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let a = 0, l = s.length; a < l; a++) {
      const c = s[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, f = c.length; h < f; h++) {
        const m = c[h];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (i[l] = u, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const s = this.groups;
    s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const u = [], h = r[c];
      for (let f = 0, m = h.length; f < m; f++)
        u.push(h[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const s = e.groups;
    for (let c = 0, u = s.length; c < u; c++) {
      const h = s[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const yc = /* @__PURE__ */ new De(), nr = /* @__PURE__ */ new tl(), ja = /* @__PURE__ */ new Ir(), Yn = /* @__PURE__ */ new R(), Kn = /* @__PURE__ */ new R(), $n = /* @__PURE__ */ new R(), Ya = /* @__PURE__ */ new R(), Ka = /* @__PURE__ */ new R(), $a = /* @__PURE__ */ new R(), Ps = /* @__PURE__ */ new R(), Ds = /* @__PURE__ */ new R(), Is = /* @__PURE__ */ new R(), Fs = /* @__PURE__ */ new Le(), Ns = /* @__PURE__ */ new Le(), Os = /* @__PURE__ */ new Le(), Za = /* @__PURE__ */ new R(), Us = /* @__PURE__ */ new R();
class mn extends qe {
  constructor(e = new vn(), t = new Ti()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, s = i.length; r < s; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), ja.copy(n.boundingSphere), ja.applyMatrix4(r), e.ray.intersectsSphere(ja) === !1) || (yc.copy(r).invert(), nr.copy(e.ray).applyMatrix4(yc), n.boundingBox !== null && nr.intersectsBox(n.boundingBox) === !1))
      return;
    let s;
    const a = n.index, l = n.attributes.position, c = n.morphAttributes.position, u = n.morphTargetsRelative, h = n.attributes.uv, f = n.attributes.uv2, m = n.groups, g = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let d = 0, p = m.length; d < p; d++) {
          const _ = m[d], y = i[_.materialIndex], M = Math.max(_.start, g.start), v = Math.min(a.count, Math.min(_.start + _.count, g.start + g.count));
          for (let b = M, E = v; b < E; b += 3) {
            const C = a.getX(b), x = a.getX(b + 1), w = a.getX(b + 2);
            s = zs(this, y, e, nr, l, c, u, h, f, C, x, w), s && (s.faceIndex = Math.floor(b / 3), s.face.materialIndex = _.materialIndex, t.push(s));
          }
        }
      else {
        const d = Math.max(0, g.start), p = Math.min(a.count, g.start + g.count);
        for (let _ = d, y = p; _ < y; _ += 3) {
          const M = a.getX(_), v = a.getX(_ + 1), b = a.getX(_ + 2);
          s = zs(this, i, e, nr, l, c, u, h, f, M, v, b), s && (s.faceIndex = Math.floor(_ / 3), t.push(s));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let d = 0, p = m.length; d < p; d++) {
          const _ = m[d], y = i[_.materialIndex], M = Math.max(_.start, g.start), v = Math.min(l.count, Math.min(_.start + _.count, g.start + g.count));
          for (let b = M, E = v; b < E; b += 3) {
            const C = b, x = b + 1, w = b + 2;
            s = zs(this, y, e, nr, l, c, u, h, f, C, x, w), s && (s.faceIndex = Math.floor(b / 3), s.face.materialIndex = _.materialIndex, t.push(s));
          }
        }
      else {
        const d = Math.max(0, g.start), p = Math.min(l.count, g.start + g.count);
        for (let _ = d, y = p; _ < y; _ += 3) {
          const M = _, v = _ + 1, b = _ + 2;
          s = zs(this, i, e, nr, l, c, u, h, f, M, v, b), s && (s.faceIndex = Math.floor(_ / 3), t.push(s));
        }
      }
  }
}
function tm(o, e, t, n, i, r, s, a) {
  let l;
  if (e.side === Qt ? l = n.intersectTriangle(s, r, i, !0, a) : l = n.intersectTriangle(i, r, s, e.side !== Nn, a), l === null)
    return null;
  Us.copy(a), Us.applyMatrix4(o.matrixWorld);
  const c = t.ray.origin.distanceTo(Us);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Us.clone(),
    object: o
  };
}
function zs(o, e, t, n, i, r, s, a, l, c, u, h) {
  Yn.fromBufferAttribute(i, c), Kn.fromBufferAttribute(i, u), $n.fromBufferAttribute(i, h);
  const f = o.morphTargetInfluences;
  if (r && f) {
    Ps.set(0, 0, 0), Ds.set(0, 0, 0), Is.set(0, 0, 0);
    for (let g = 0, d = r.length; g < d; g++) {
      const p = f[g], _ = r[g];
      p !== 0 && (Ya.fromBufferAttribute(_, c), Ka.fromBufferAttribute(_, u), $a.fromBufferAttribute(_, h), s ? (Ps.addScaledVector(Ya, p), Ds.addScaledVector(Ka, p), Is.addScaledVector($a, p)) : (Ps.addScaledVector(Ya.sub(Yn), p), Ds.addScaledVector(Ka.sub(Kn), p), Is.addScaledVector($a.sub($n), p)));
    }
    Yn.add(Ps), Kn.add(Ds), $n.add(Is);
  }
  o.isSkinnedMesh && (o.boneTransform(c, Yn), o.boneTransform(u, Kn), o.boneTransform(h, $n));
  const m = tm(o, e, t, n, Yn, Kn, $n, Za);
  if (m) {
    a && (Fs.fromBufferAttribute(a, c), Ns.fromBufferAttribute(a, u), Os.fromBufferAttribute(a, h), m.uv = In.getUV(Za, Yn, Kn, $n, Fs, Ns, Os, new Le())), l && (Fs.fromBufferAttribute(l, c), Ns.fromBufferAttribute(l, u), Os.fromBufferAttribute(l, h), m.uv2 = In.getUV(Za, Yn, Kn, $n, Fs, Ns, Os, new Le()));
    const g = {
      a: c,
      b: u,
      c: h,
      normal: new R(),
      materialIndex: 0
    };
    In.getNormal(Yn, Kn, $n, g.normal), m.face = g;
  }
  return m;
}
class gs extends vn {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, s = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: s
    };
    const a = this;
    i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
    const l = [], c = [], u = [], h = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, s, r, 0), g("z", "y", "x", 1, -1, n, t, -e, s, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, s, 2), g("x", "z", "y", 1, -1, e, n, -t, i, s, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new zn(c, 3)), this.setAttribute("normal", new zn(u, 3)), this.setAttribute("uv", new zn(h, 2));
    function g(d, p, _, y, M, v, b, E, C, x, w) {
      const L = v / C, z = b / x, K = v / 2, N = b / 2, P = E / 2, k = C + 1, q = x + 1;
      let G = 0, B = 0;
      const F = new R();
      for (let O = 0; O < q; O++) {
        const ee = O * z - N;
        for (let J = 0; J < k; J++) {
          const Z = J * L - K;
          F[d] = Z * y, F[p] = ee * M, F[_] = P, c.push(F.x, F.y, F.z), F[d] = 0, F[p] = 0, F[_] = E > 0 ? 1 : -1, u.push(F.x, F.y, F.z), h.push(J / C), h.push(1 - O / x), G += 1;
        }
      }
      for (let O = 0; O < x; O++)
        for (let ee = 0; ee < C; ee++) {
          const J = f + ee + k * O, Z = f + ee + k * (O + 1), $ = f + (ee + 1) + k * (O + 1), re = f + (ee + 1) + k * O;
          l.push(J, Z, re), l.push(Z, $, re), B += 6;
        }
      a.addGroup(m, B, w), m += B, f += G;
    }
  }
  static fromJSON(e) {
    return new gs(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Cr(o) {
  const e = {};
  for (const t in o) {
    e[t] = {};
    for (const n in o[t]) {
      const i = o[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function pt(o) {
  const e = {};
  for (let t = 0; t < o.length; t++) {
    const n = Cr(o[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function nm(o) {
  const e = [];
  for (let t = 0; t < o.length; t++)
    e.push(o[t].clone());
  return e;
}
const im = { clone: Cr, merge: pt };
var rm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, sm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class zi extends _n {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = rm, this.fragmentShader = sm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Cr(e.uniforms), this.uniformsGroups = nm(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const s = this.uniforms[i].value;
      s && s.isTexture ? t.uniforms[i] = {
        type: "t",
        value: s.toJSON(e).uuid
      } : s && s.isColor ? t.uniforms[i] = {
        type: "c",
        value: s.getHex()
      } : s && s.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: s.toArray()
      } : s && s.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: s.toArray()
      } : s && s.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: s.toArray()
      } : s && s.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: s.toArray()
      } : s && s.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: s.toArray()
      } : t.uniforms[i] = {
        value: s
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Rh extends qe {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new De(), this.projectionMatrix = new De(), this.projectionMatrixInverse = new De();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Mt extends Rh {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = cs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Qr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return cs * 2 * Math.atan(
      Math.tan(Qr * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, s) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Qr * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = s.fullWidth, c = s.fullHeight;
      r += s.offsetX * i / l, t -= s.offsetY * n / c, i *= s.width / l, n *= s.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const ir = 90, rr = 1;
class am extends qe {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new Mt(ir, rr, e, t);
    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new R(1, 0, 0)), this.add(i);
    const r = new Mt(ir, rr, e, t);
    r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new R(-1, 0, 0)), this.add(r);
    const s = new Mt(ir, rr, e, t);
    s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new R(0, 1, 0)), this.add(s);
    const a = new Mt(ir, rr, e, t);
    a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new R(0, -1, 0)), this.add(a);
    const l = new Mt(ir, rr, e, t);
    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new R(0, 0, 1)), this.add(l);
    const c = new Mt(ir, rr, e, t);
    c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new R(0, 0, -1)), this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, r, s, a, l, c] = this.children, u = e.getRenderTarget(), h = e.toneMapping, f = e.xr.enabled;
    e.toneMapping = Un, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, s), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(u), e.toneMapping = h, e.xr.enabled = f, n.texture.needsPMREMUpdate = !0;
  }
}
class Ph extends bt {
  constructor(e, t, n, i, r, s, a, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Sr, super(e, t, n, i, r, s, a, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class om extends Ui {
  constructor(e, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Ph(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Tt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, i = new gs(5, 5, 5), r = new zi({
      name: "CubemapFromEquirect",
      uniforms: Cr(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Qt,
      blending: ai
    });
    r.uniforms.tEquirect.value = t;
    const s = new mn(i, r), a = t.minFilter;
    return t.minFilter === Rr && (t.minFilter = Tt), new am(1, 10, this).update(e, s), t.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let s = 0; s < 6; s++)
      e.setRenderTarget(this, s), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Ja = /* @__PURE__ */ new R(), lm = /* @__PURE__ */ new R(), cm = /* @__PURE__ */ new Zt();
class _i {
  constructor(e = new R(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Ja.subVectors(n, t).cross(lm.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(Ja), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || cm.getNormalMatrix(e), i = this.coplanarPoint(Ja).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const sr = /* @__PURE__ */ new Ir(), ks = /* @__PURE__ */ new R();
class nl {
  constructor(e = new _i(), t = new _i(), n = new _i(), i = new _i(), r = new _i(), s = new _i()) {
    this.planes = [e, t, n, i, r, s];
  }
  set(e, t, n, i, r, s) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], r = n[1], s = n[2], a = n[3], l = n[4], c = n[5], u = n[6], h = n[7], f = n[8], m = n[9], g = n[10], d = n[11], p = n[12], _ = n[13], y = n[14], M = n[15];
    return t[0].setComponents(a - i, h - l, d - f, M - p).normalize(), t[1].setComponents(a + i, h + l, d + f, M + p).normalize(), t[2].setComponents(a + r, h + c, d + m, M + _).normalize(), t[3].setComponents(a - r, h - c, d - m, M - _).normalize(), t[4].setComponents(a - s, h - u, d - g, M - y).normalize(), t[5].setComponents(a + s, h + u, d + g, M + y).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(sr);
  }
  intersectsSprite(e) {
    return sr.center.set(0, 0, 0), sr.radius = 0.7071067811865476, sr.applyMatrix4(e.matrixWorld), this.intersectsSphere(sr);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (ks.x = i.normal.x > 0 ? e.max.x : e.min.x, ks.y = i.normal.y > 0 ? e.max.y : e.min.y, ks.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(ks) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Dh() {
  let o = null, e = !1, t = null, n = null;
  function i(r, s) {
    t(r, s), n = o.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = o.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      o.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      o = r;
    }
  };
}
function um(o, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, u) {
    const h = c.array, f = c.usage, m = o.createBuffer();
    o.bindBuffer(u, m), o.bufferData(u, h, f), c.onUploadCallback();
    let g;
    if (h instanceof Float32Array)
      g = 5126;
    else if (h instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (h instanceof Int16Array)
      g = 5122;
    else if (h instanceof Uint32Array)
      g = 5125;
    else if (h instanceof Int32Array)
      g = 5124;
    else if (h instanceof Int8Array)
      g = 5120;
    else if (h instanceof Uint8Array)
      g = 5121;
    else if (h instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
    return {
      buffer: m,
      type: g,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function r(c, u, h) {
    const f = u.array, m = u.updateRange;
    o.bindBuffer(h, c), m.count === -1 ? o.bufferSubData(h, 0, f) : (t ? o.bufferSubData(
      h,
      m.offset * f.BYTES_PER_ELEMENT,
      f,
      m.offset,
      m.count
    ) : o.bufferSubData(
      h,
      m.offset * f.BYTES_PER_ELEMENT,
      f.subarray(m.offset, m.offset + m.count)
    ), m.count = -1);
  }
  function s(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (o.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h === void 0 ? n.set(c, i(c, u)) : h.version < c.version && (r(h.buffer, c, u), h.version = c.version);
  }
  return {
    get: s,
    remove: a,
    update: l
  };
}
class il extends vn {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, s = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, u = l + 1, h = e / a, f = t / l, m = [], g = [], d = [], p = [];
    for (let _ = 0; _ < u; _++) {
      const y = _ * f - s;
      for (let M = 0; M < c; M++) {
        const v = M * h - r;
        g.push(v, -y, 0), d.push(0, 0, 1), p.push(M / a), p.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let y = 0; y < a; y++) {
        const M = y + c * _, v = y + c * (_ + 1), b = y + 1 + c * (_ + 1), E = y + 1 + c * _;
        m.push(M, v, E), m.push(v, b, E);
      }
    this.setIndex(m), this.setAttribute("position", new zn(g, 3)), this.setAttribute("normal", new zn(d, 3)), this.setAttribute("uv", new zn(p, 2));
  }
  static fromJSON(e) {
    return new il(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var hm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, fm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, dm = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, pm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, mm = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, gm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, _m = "vec3 transformed = vec3( position );", xm = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, vm = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, ym = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Mm = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, bm = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Sm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, wm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Tm = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Em = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Am = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Cm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Lm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Rm = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Pm = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Dm = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Im = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Fm = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Nm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Om = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Um = "gl_FragColor = linearToOutputTexel( gl_FragColor );", zm = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, km = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Bm = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Vm = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Gm = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Hm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Wm = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Xm = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, qm = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, jm = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Ym = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Km = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, $m = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Zm = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Jm = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`, Qm = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, eg = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, tg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ng = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, ig = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, rg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, sg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, ag = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, og = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, lg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, cg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, ug = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, hg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, fg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, dg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, pg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, mg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, gg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, _g = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, xg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, vg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, yg = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Mg = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, bg = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Sg = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, wg = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, Tg = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Eg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ag = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Cg = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Lg = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Rg = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Pg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Dg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Ig = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Fg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ng = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Og = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Ug = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, zg = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, kg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Bg = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Vg = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Gg = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Hg = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Wg = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, Xg = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, qg = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, jg = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, Yg = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Kg = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, $g = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Zg = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Jg = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Qg = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, e_ = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, t_ = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, n_ = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, i_ = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, r_ = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, s_ = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, a_ = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, o_ = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, l_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const c_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, u_ = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, h_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, f_ = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, d_ = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, p_ = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, m_ = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, g_ = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, __ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, x_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, v_ = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, y_ = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, M_ = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, b_ = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, S_ = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, w_ = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, T_ = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, E_ = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, A_ = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, C_ = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, L_ = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, R_ = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, P_ = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, D_ = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, I_ = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, F_ = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, N_ = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, O_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, U_ = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, z_ = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, k_ = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, B_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, we = {
  alphamap_fragment: hm,
  alphamap_pars_fragment: fm,
  alphatest_fragment: dm,
  alphatest_pars_fragment: pm,
  aomap_fragment: mm,
  aomap_pars_fragment: gm,
  begin_vertex: _m,
  beginnormal_vertex: xm,
  bsdfs: vm,
  iridescence_fragment: ym,
  bumpmap_pars_fragment: Mm,
  clipping_planes_fragment: bm,
  clipping_planes_pars_fragment: Sm,
  clipping_planes_pars_vertex: wm,
  clipping_planes_vertex: Tm,
  color_fragment: Em,
  color_pars_fragment: Am,
  color_pars_vertex: Cm,
  color_vertex: Lm,
  common: Rm,
  cube_uv_reflection_fragment: Pm,
  defaultnormal_vertex: Dm,
  displacementmap_pars_vertex: Im,
  displacementmap_vertex: Fm,
  emissivemap_fragment: Nm,
  emissivemap_pars_fragment: Om,
  encodings_fragment: Um,
  encodings_pars_fragment: zm,
  envmap_fragment: km,
  envmap_common_pars_fragment: Bm,
  envmap_pars_fragment: Vm,
  envmap_pars_vertex: Gm,
  envmap_physical_pars_fragment: eg,
  envmap_vertex: Hm,
  fog_vertex: Wm,
  fog_pars_vertex: Xm,
  fog_fragment: qm,
  fog_pars_fragment: jm,
  gradientmap_pars_fragment: Ym,
  lightmap_fragment: Km,
  lightmap_pars_fragment: $m,
  lights_lambert_fragment: Zm,
  lights_lambert_pars_fragment: Jm,
  lights_pars_begin: Qm,
  lights_toon_fragment: tg,
  lights_toon_pars_fragment: ng,
  lights_phong_fragment: ig,
  lights_phong_pars_fragment: rg,
  lights_physical_fragment: sg,
  lights_physical_pars_fragment: ag,
  lights_fragment_begin: og,
  lights_fragment_maps: lg,
  lights_fragment_end: cg,
  logdepthbuf_fragment: ug,
  logdepthbuf_pars_fragment: hg,
  logdepthbuf_pars_vertex: fg,
  logdepthbuf_vertex: dg,
  map_fragment: pg,
  map_pars_fragment: mg,
  map_particle_fragment: gg,
  map_particle_pars_fragment: _g,
  metalnessmap_fragment: xg,
  metalnessmap_pars_fragment: vg,
  morphcolor_vertex: yg,
  morphnormal_vertex: Mg,
  morphtarget_pars_vertex: bg,
  morphtarget_vertex: Sg,
  normal_fragment_begin: wg,
  normal_fragment_maps: Tg,
  normal_pars_fragment: Eg,
  normal_pars_vertex: Ag,
  normal_vertex: Cg,
  normalmap_pars_fragment: Lg,
  clearcoat_normal_fragment_begin: Rg,
  clearcoat_normal_fragment_maps: Pg,
  clearcoat_pars_fragment: Dg,
  iridescence_pars_fragment: Ig,
  output_fragment: Fg,
  packing: Ng,
  premultiplied_alpha_fragment: Og,
  project_vertex: Ug,
  dithering_fragment: zg,
  dithering_pars_fragment: kg,
  roughnessmap_fragment: Bg,
  roughnessmap_pars_fragment: Vg,
  shadowmap_pars_fragment: Gg,
  shadowmap_pars_vertex: Hg,
  shadowmap_vertex: Wg,
  shadowmask_pars_fragment: Xg,
  skinbase_vertex: qg,
  skinning_pars_vertex: jg,
  skinning_vertex: Yg,
  skinnormal_vertex: Kg,
  specularmap_fragment: $g,
  specularmap_pars_fragment: Zg,
  tonemapping_fragment: Jg,
  tonemapping_pars_fragment: Qg,
  transmission_fragment: e_,
  transmission_pars_fragment: t_,
  uv_pars_fragment: n_,
  uv_pars_vertex: i_,
  uv_vertex: r_,
  uv2_pars_fragment: s_,
  uv2_pars_vertex: a_,
  uv2_vertex: o_,
  worldpos_vertex: l_,
  background_vert: c_,
  background_frag: u_,
  cube_vert: h_,
  cube_frag: f_,
  depth_vert: d_,
  depth_frag: p_,
  distanceRGBA_vert: m_,
  distanceRGBA_frag: g_,
  equirect_vert: __,
  equirect_frag: x_,
  linedashed_vert: v_,
  linedashed_frag: y_,
  meshbasic_vert: M_,
  meshbasic_frag: b_,
  meshlambert_vert: S_,
  meshlambert_frag: w_,
  meshmatcap_vert: T_,
  meshmatcap_frag: E_,
  meshnormal_vert: A_,
  meshnormal_frag: C_,
  meshphong_vert: L_,
  meshphong_frag: R_,
  meshphysical_vert: P_,
  meshphysical_frag: D_,
  meshtoon_vert: I_,
  meshtoon_frag: F_,
  points_vert: N_,
  points_frag: O_,
  shadow_vert: U_,
  shadow_frag: z_,
  sprite_vert: k_,
  sprite_frag: B_
}, ne = {
  common: {
    diffuse: { value: /* @__PURE__ */ new _e(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new Zt() },
    uv2Transform: { value: /* @__PURE__ */ new Zt() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new Le(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new _e(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new _e(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Zt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new _e(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Le(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Zt() }
  }
}, dn = {
  basic: {
    uniforms: /* @__PURE__ */ pt([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.fog
    ]),
    vertexShader: we.meshbasic_vert,
    fragmentShader: we.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ pt([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new _e(0) }
      }
    ]),
    vertexShader: we.meshlambert_vert,
    fragmentShader: we.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ pt([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new _e(0) },
        specular: { value: /* @__PURE__ */ new _e(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: we.meshphong_vert,
    fragmentShader: we.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ pt([
      ne.common,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.roughnessmap,
      ne.metalnessmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new _e(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: we.meshphysical_vert,
    fragmentShader: we.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ pt([
      ne.common,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.gradientmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new _e(0) }
      }
    ]),
    vertexShader: we.meshtoon_vert,
    fragmentShader: we.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ pt([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: we.meshmatcap_vert,
    fragmentShader: we.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ pt([
      ne.points,
      ne.fog
    ]),
    vertexShader: we.points_vert,
    fragmentShader: we.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ pt([
      ne.common,
      ne.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: we.linedashed_vert,
    fragmentShader: we.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ pt([
      ne.common,
      ne.displacementmap
    ]),
    vertexShader: we.depth_vert,
    fragmentShader: we.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ pt([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: we.meshnormal_vert,
    fragmentShader: we.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ pt([
      ne.sprite,
      ne.fog
    ]),
    vertexShader: we.sprite_vert,
    fragmentShader: we.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Zt() },
      t2D: { value: null }
    },
    vertexShader: we.background_vert,
    fragmentShader: we.background_frag
  },
  cube: {
    uniforms: /* @__PURE__ */ pt([
      ne.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: we.cube_vert,
    fragmentShader: we.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: we.equirect_vert,
    fragmentShader: we.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ pt([
      ne.common,
      ne.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: we.distanceRGBA_vert,
    fragmentShader: we.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ pt([
      ne.lights,
      ne.fog,
      {
        color: { value: /* @__PURE__ */ new _e(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: we.shadow_vert,
    fragmentShader: we.shadow_frag
  }
};
dn.physical = {
  uniforms: /* @__PURE__ */ pt([
    dn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Le(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new _e(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Le() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new _e(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new _e(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: we.meshphysical_vert,
  fragmentShader: we.meshphysical_frag
};
function V_(o, e, t, n, i, r) {
  const s = new _e(0);
  let a = i === !0 ? 0 : 1, l, c, u = null, h = 0, f = null;
  function m(d, p) {
    let _ = !1, y = p.isScene === !0 ? p.background : null;
    y && y.isTexture && (y = e.get(y));
    const M = o.xr, v = M.getSession && M.getSession();
    v && v.environmentBlendMode === "additive" && (y = null), y === null ? g(s, a) : y && y.isColor && (g(y, 1), _ = !0), (o.autoClear || _) && o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil), y && (y.isCubeTexture || y.mapping === ca) ? (c === void 0 && (c = new mn(
      new gs(1, 1, 1),
      new zi({
        name: "BackgroundCubeMaterial",
        uniforms: Cr(dn.cube.uniforms),
        vertexShader: dn.cube.vertexShader,
        fragmentShader: dn.cube.fragmentShader,
        side: Qt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(b, E, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(c.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), n.update(c)), c.material.uniforms.envMap.value = y, c.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, (u !== y || h !== y.version || f !== o.toneMapping) && (c.material.needsUpdate = !0, u = y, h = y.version, f = o.toneMapping), c.layers.enableAll(), d.unshift(c, c.geometry, c.material, 0, 0, null)) : y && y.isTexture && (l === void 0 && (l = new mn(
      new il(2, 2),
      new zi({
        name: "BackgroundMaterial",
        uniforms: Cr(dn.background.uniforms),
        vertexShader: dn.background.vertexShader,
        fragmentShader: dn.background.fragmentShader,
        side: Fi,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), n.update(l)), l.material.uniforms.t2D.value = y, y.matrixAutoUpdate === !0 && y.updateMatrix(), l.material.uniforms.uvTransform.value.copy(y.matrix), (u !== y || h !== y.version || f !== o.toneMapping) && (l.material.needsUpdate = !0, u = y, h = y.version, f = o.toneMapping), l.layers.enableAll(), d.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function g(d, p) {
    t.buffers.color.setClear(d.r, d.g, d.b, p, r);
  }
  return {
    getClearColor: function() {
      return s;
    },
    setClearColor: function(d, p = 1) {
      s.set(d), a = p, g(s, a);
    },
    getClearAlpha: function() {
      return a;
    },
    setClearAlpha: function(d) {
      a = d, g(s, a);
    },
    render: m
  };
}
function G_(o, e, t, n) {
  const i = o.getParameter(34921), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), s = n.isWebGL2 || r !== null, a = {}, l = p(null);
  let c = l, u = !1;
  function h(P, k, q, G, B) {
    let F = !1;
    if (s) {
      const O = d(G, q, k);
      c !== O && (c = O, m(c.object)), F = _(P, G, q, B), F && y(P, G, q, B);
    } else {
      const O = k.wireframe === !0;
      (c.geometry !== G.id || c.program !== q.id || c.wireframe !== O) && (c.geometry = G.id, c.program = q.id, c.wireframe = O, F = !0);
    }
    B !== null && t.update(B, 34963), (F || u) && (u = !1, x(P, k, q, G), B !== null && o.bindBuffer(34963, t.get(B).buffer));
  }
  function f() {
    return n.isWebGL2 ? o.createVertexArray() : r.createVertexArrayOES();
  }
  function m(P) {
    return n.isWebGL2 ? o.bindVertexArray(P) : r.bindVertexArrayOES(P);
  }
  function g(P) {
    return n.isWebGL2 ? o.deleteVertexArray(P) : r.deleteVertexArrayOES(P);
  }
  function d(P, k, q) {
    const G = q.wireframe === !0;
    let B = a[P.id];
    B === void 0 && (B = {}, a[P.id] = B);
    let F = B[k.id];
    F === void 0 && (F = {}, B[k.id] = F);
    let O = F[G];
    return O === void 0 && (O = p(f()), F[G] = O), O;
  }
  function p(P) {
    const k = [], q = [], G = [];
    for (let B = 0; B < i; B++)
      k[B] = 0, q[B] = 0, G[B] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: k,
      enabledAttributes: q,
      attributeDivisors: G,
      object: P,
      attributes: {},
      index: null
    };
  }
  function _(P, k, q, G) {
    const B = c.attributes, F = k.attributes;
    let O = 0;
    const ee = q.getAttributes();
    for (const J in ee)
      if (ee[J].location >= 0) {
        const $ = B[J];
        let re = F[J];
        if (re === void 0 && (J === "instanceMatrix" && P.instanceMatrix && (re = P.instanceMatrix), J === "instanceColor" && P.instanceColor && (re = P.instanceColor)), $ === void 0 || $.attribute !== re || re && $.data !== re.data)
          return !0;
        O++;
      }
    return c.attributesNum !== O || c.index !== G;
  }
  function y(P, k, q, G) {
    const B = {}, F = k.attributes;
    let O = 0;
    const ee = q.getAttributes();
    for (const J in ee)
      if (ee[J].location >= 0) {
        let $ = F[J];
        $ === void 0 && (J === "instanceMatrix" && P.instanceMatrix && ($ = P.instanceMatrix), J === "instanceColor" && P.instanceColor && ($ = P.instanceColor));
        const re = {};
        re.attribute = $, $ && $.data && (re.data = $.data), B[J] = re, O++;
      }
    c.attributes = B, c.attributesNum = O, c.index = G;
  }
  function M() {
    const P = c.newAttributes;
    for (let k = 0, q = P.length; k < q; k++)
      P[k] = 0;
  }
  function v(P) {
    b(P, 0);
  }
  function b(P, k) {
    const q = c.newAttributes, G = c.enabledAttributes, B = c.attributeDivisors;
    q[P] = 1, G[P] === 0 && (o.enableVertexAttribArray(P), G[P] = 1), B[P] !== k && ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](P, k), B[P] = k);
  }
  function E() {
    const P = c.newAttributes, k = c.enabledAttributes;
    for (let q = 0, G = k.length; q < G; q++)
      k[q] !== P[q] && (o.disableVertexAttribArray(q), k[q] = 0);
  }
  function C(P, k, q, G, B, F) {
    n.isWebGL2 === !0 && (q === 5124 || q === 5125) ? o.vertexAttribIPointer(P, k, q, B, F) : o.vertexAttribPointer(P, k, q, G, B, F);
  }
  function x(P, k, q, G) {
    if (n.isWebGL2 === !1 && (P.isInstancedMesh || G.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    M();
    const B = G.attributes, F = q.getAttributes(), O = k.defaultAttributeValues;
    for (const ee in F) {
      const J = F[ee];
      if (J.location >= 0) {
        let Z = B[ee];
        if (Z === void 0 && (ee === "instanceMatrix" && P.instanceMatrix && (Z = P.instanceMatrix), ee === "instanceColor" && P.instanceColor && (Z = P.instanceColor)), Z !== void 0) {
          const $ = Z.normalized, re = Z.itemSize, Y = t.get(Z);
          if (Y === void 0)
            continue;
          const Oe = Y.buffer, me = Y.type, fe = Y.bytesPerElement;
          if (Z.isInterleavedBufferAttribute) {
            const oe = Z.data, We = oe.stride, Se = Z.offset;
            if (oe.isInstancedInterleavedBuffer) {
              for (let ge = 0; ge < J.locationSize; ge++)
                b(J.location + ge, oe.meshPerAttribute);
              P.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else
              for (let ge = 0; ge < J.locationSize; ge++)
                v(J.location + ge);
            o.bindBuffer(34962, Oe);
            for (let ge = 0; ge < J.locationSize; ge++)
              C(
                J.location + ge,
                re / J.locationSize,
                me,
                $,
                We * fe,
                (Se + re / J.locationSize * ge) * fe
              );
          } else {
            if (Z.isInstancedBufferAttribute) {
              for (let oe = 0; oe < J.locationSize; oe++)
                b(J.location + oe, Z.meshPerAttribute);
              P.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = Z.meshPerAttribute * Z.count);
            } else
              for (let oe = 0; oe < J.locationSize; oe++)
                v(J.location + oe);
            o.bindBuffer(34962, Oe);
            for (let oe = 0; oe < J.locationSize; oe++)
              C(
                J.location + oe,
                re / J.locationSize,
                me,
                $,
                re * fe,
                re / J.locationSize * oe * fe
              );
          }
        } else if (O !== void 0) {
          const $ = O[ee];
          if ($ !== void 0)
            switch ($.length) {
              case 2:
                o.vertexAttrib2fv(J.location, $);
                break;
              case 3:
                o.vertexAttrib3fv(J.location, $);
                break;
              case 4:
                o.vertexAttrib4fv(J.location, $);
                break;
              default:
                o.vertexAttrib1fv(J.location, $);
            }
        }
      }
    }
    E();
  }
  function w() {
    K();
    for (const P in a) {
      const k = a[P];
      for (const q in k) {
        const G = k[q];
        for (const B in G)
          g(G[B].object), delete G[B];
        delete k[q];
      }
      delete a[P];
    }
  }
  function L(P) {
    if (a[P.id] === void 0)
      return;
    const k = a[P.id];
    for (const q in k) {
      const G = k[q];
      for (const B in G)
        g(G[B].object), delete G[B];
      delete k[q];
    }
    delete a[P.id];
  }
  function z(P) {
    for (const k in a) {
      const q = a[k];
      if (q[P.id] === void 0)
        continue;
      const G = q[P.id];
      for (const B in G)
        g(G[B].object), delete G[B];
      delete q[P.id];
    }
  }
  function K() {
    N(), u = !0, c !== l && (c = l, m(c.object));
  }
  function N() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: h,
    reset: K,
    resetDefaultState: N,
    dispose: w,
    releaseStatesOfGeometry: L,
    releaseStatesOfProgram: z,
    initAttributes: M,
    enableAttribute: v,
    disableUnusedAttributes: E
  };
}
function H_(o, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function s(c) {
    r = c;
  }
  function a(c, u) {
    o.drawArrays(r, c, u), t.update(u, r, 1);
  }
  function l(c, u, h) {
    if (h === 0)
      return;
    let f, m;
    if (i)
      f = o, m = "drawArraysInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[m](r, c, u, h), t.update(u, r, h);
  }
  this.setMode = s, this.render = a, this.renderInstances = l;
}
function W_(o, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const C = e.get("EXT_texture_filter_anisotropic");
      n = o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(C) {
    if (C === "highp") {
      if (o.getShaderPrecisionFormat(35633, 36338).precision > 0 && o.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      C = "mediump";
    }
    return C === "mediump" && o.getShaderPrecisionFormat(35633, 36337).precision > 0 && o.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const s = typeof WebGL2RenderingContext < "u" && o instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && o instanceof WebGL2ComputeRenderingContext;
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = r(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = s || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = o.getParameter(34930), f = o.getParameter(35660), m = o.getParameter(3379), g = o.getParameter(34076), d = o.getParameter(34921), p = o.getParameter(36347), _ = o.getParameter(36348), y = o.getParameter(36349), M = f > 0, v = s || e.has("OES_texture_float"), b = M && v, E = s ? o.getParameter(36183) : 0;
  return {
    isWebGL2: s,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: d,
    maxVertexUniforms: p,
    maxVaryings: _,
    maxFragmentUniforms: y,
    vertexTextures: M,
    floatFragmentTextures: v,
    floatVertexTextures: b,
    maxSamples: E
  };
}
function X_(o) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const s = new _i(), a = new Zt(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f, m) {
    const g = h.length !== 0 || f || n !== 0 || i;
    return i = f, t = u(h, m, 0), n = h.length, g;
  }, this.beginShadows = function() {
    r = !0, u(null);
  }, this.endShadows = function() {
    r = !1, c();
  }, this.setState = function(h, f, m) {
    const g = h.clippingPlanes, d = h.clipIntersection, p = h.clipShadows, _ = o.get(h);
    if (!i || g === null || g.length === 0 || r && !p)
      r ? u(null) : c();
    else {
      const y = r ? 0 : n, M = y * 4;
      let v = _.clippingState || null;
      l.value = v, v = u(g, f, M, m);
      for (let b = 0; b !== M; ++b)
        v[b] = t[b];
      _.clippingState = v, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, f, m, g) {
    const d = h !== null ? h.length : 0;
    let p = null;
    if (d !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const _ = m + d * 4, y = f.matrixWorldInverse;
        a.getNormalMatrix(y), (p === null || p.length < _) && (p = new Float32Array(_));
        for (let M = 0, v = m; M !== d; ++M, v += 4)
          s.copy(h[M]).applyMatrix4(y, a), s.normal.toArray(p, v), p[v + 3] = s.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = d, e.numIntersection = 0, p;
  }
}
function q_(o) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, a) {
    return a === wo ? s.mapping = Sr : a === To && (s.mapping = wr), s;
  }
  function n(s) {
    if (s && s.isTexture && s.isRenderTargetTexture === !1) {
      const a = s.mapping;
      if (a === wo || a === To)
        if (e.has(s)) {
          const l = e.get(s).texture;
          return t(l, s.mapping);
        } else {
          const l = s.image;
          if (l && l.height > 0) {
            const c = new om(l.height / 2);
            return c.fromEquirectangularTexture(o, s), e.set(s, c), s.addEventListener("dispose", i), t(c.texture, s.mapping);
          } else
            return null;
        }
    }
    return s;
  }
  function i(s) {
    const a = s.target;
    a.removeEventListener("dispose", i);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class rl extends Rh {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, s) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, s = n + e, a = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, s = r + c * this.view.width, a -= u * this.view.offsetY, l = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, s, a, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const ur = 4, Mc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Mi = 20, Qa = /* @__PURE__ */ new rl(), bc = /* @__PURE__ */ new _e();
let eo = null;
const xi = (1 + Math.sqrt(5)) / 2, ar = 1 / xi, Sc = [
  /* @__PURE__ */ new R(1, 1, 1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(0, xi, ar),
  /* @__PURE__ */ new R(0, xi, -ar),
  /* @__PURE__ */ new R(ar, 0, xi),
  /* @__PURE__ */ new R(-ar, 0, xi),
  /* @__PURE__ */ new R(xi, ar, 0),
  /* @__PURE__ */ new R(-xi, ar, 0)
];
class wc {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    eo = this._renderer.getRenderTarget(), this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ac(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ec(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(eo), e.scissorTest = !1, Bs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Sr || e.mapping === wr ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), eo = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Tt,
      minFilter: Tt,
      generateMipmaps: !1,
      type: os,
      format: on,
      encoding: Oi,
      depthBuffer: !1
    }, i = Tc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Tc(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = j_(r)), this._blurMaterial = Y_(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new mn(this._lodPlanes[0], e);
    this._renderer.compile(t, Qa);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Mt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, f = u.toneMapping;
    u.getClearColor(bc), u.toneMapping = Un, u.autoClear = !1;
    const m = new Ti({
      name: "PMREM.Background",
      side: Qt,
      depthWrite: !1,
      depthTest: !1
    }), g = new mn(new gs(), m);
    let d = !1;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, d = !0) : (m.color.copy(bc), d = !0);
    for (let _ = 0; _ < 6; _++) {
      const y = _ % 3;
      y === 0 ? (a.up.set(0, l[_], 0), a.lookAt(c[_], 0, 0)) : y === 1 ? (a.up.set(0, 0, l[_]), a.lookAt(0, c[_], 0)) : (a.up.set(0, l[_], 0), a.lookAt(0, 0, c[_]));
      const M = this._cubeSize;
      Bs(i, y * M, _ > 2 ? M : 0, M, M), u.setRenderTarget(i), d && u.render(g, a), u.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = f, u.autoClear = h, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Sr || e.mapping === wr;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ac()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ec());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, s = new mn(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    Bs(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(s, Qa);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), s = Sc[(i - 1) % Sc.length];
      this._blur(e, i - 1, i, r, s);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const s = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      s,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      s,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, i, r, s, a) {
    const l = this._renderer, c = this._blurMaterial;
    s !== "latitudinal" && s !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new mn(this._lodPlanes[i], c), f = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Mi - 1), d = r / g, p = isFinite(r) ? 1 + Math.floor(u * d) : Mi;
    p > Mi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mi}`);
    const _ = [];
    let y = 0;
    for (let C = 0; C < Mi; ++C) {
      const x = C / d, w = Math.exp(-x * x / 2);
      _.push(w), C === 0 ? y += w : C < p && (y += 2 * w);
    }
    for (let C = 0; C < _.length; C++)
      _[C] = _[C] / y;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = _, f.latitudinal.value = s === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: M } = this;
    f.dTheta.value = g, f.mipInt.value = M - n;
    const v = this._sizeLods[i], b = 3 * v * (i > M - ur ? i - M + ur : 0), E = 4 * (this._cubeSize - v);
    Bs(t, b, E, 3 * v, 2 * v), l.setRenderTarget(t), l.render(h, Qa);
  }
}
function j_(o) {
  const e = [], t = [], n = [];
  let i = o;
  const r = o - ur + 1 + Mc.length;
  for (let s = 0; s < r; s++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    s > o - ur ? l = Mc[s - o + ur - 1] : s === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), u = -c, h = 1 + c, f = [u, u, h, u, h, h, u, u, h, h, u, h], m = 6, g = 6, d = 3, p = 2, _ = 1, y = new Float32Array(d * g * m), M = new Float32Array(p * g * m), v = new Float32Array(_ * g * m);
    for (let E = 0; E < m; E++) {
      const C = E % 3 * 2 / 3 - 1, x = E > 2 ? 0 : -1, w = [
        C,
        x,
        0,
        C + 2 / 3,
        x,
        0,
        C + 2 / 3,
        x + 1,
        0,
        C,
        x,
        0,
        C + 2 / 3,
        x + 1,
        0,
        C,
        x + 1,
        0
      ];
      y.set(w, d * g * E), M.set(f, p * g * E);
      const L = [E, E, E, E, E, E];
      v.set(L, _ * g * E);
    }
    const b = new vn();
    b.setAttribute("position", new zt(y, d)), b.setAttribute("uv", new zt(M, p)), b.setAttribute("faceIndex", new zt(v, _)), e.push(b), i > ur && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Tc(o, e, t) {
  const n = new Ui(o, e, t);
  return n.texture.mapping = ca, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Bs(o, e, t, n, i) {
  o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i);
}
function Y_(o, e, t) {
  const n = new Float32Array(Mi), i = new R(0, 1, 0);
  return new zi({
    name: "SphericalGaussianBlur",
    defines: {
      n: Mi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${o}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: sl(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: ai,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ec() {
  return new zi({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: sl(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: ai,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ac() {
  return new zi({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: sl(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: ai,
    depthTest: !1,
    depthWrite: !1
  });
}
function sl() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function K_(o) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === wo || l === To, u = l === Sr || l === wr;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let h = e.get(a);
          return t === null && (t = new wc(o)), h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), e.set(a, h), h.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const h = a.image;
            if (c && h && h.height > 0 || u && h && i(h)) {
              t === null && (t = new wc(o));
              const f = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", r), f.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      a[u] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: s
  };
}
function $_(o) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = o.getExtension("WEBGL_depth_texture") || o.getExtension("MOZ_WEBGL_depth_texture") || o.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = o.getExtension("EXT_texture_filter_anisotropic") || o.getExtension("MOZ_EXT_texture_filter_anisotropic") || o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = o.getExtension("WEBGL_compressed_texture_s3tc") || o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = o.getExtension("WEBGL_compressed_texture_pvrtc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = o.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Z_(o, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function s(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes)
      e.remove(f.attributes[g]);
    f.removeEventListener("dispose", s), delete i[f.id];
    const m = r.get(f);
    m && (e.remove(m), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(h, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", s), i[f.id] = !0, t.memory.geometries++), f;
  }
  function l(h) {
    const f = h.attributes;
    for (const g in f)
      e.update(f[g], 34962);
    const m = h.morphAttributes;
    for (const g in m) {
      const d = m[g];
      for (let p = 0, _ = d.length; p < _; p++)
        e.update(d[p], 34962);
    }
  }
  function c(h) {
    const f = [], m = h.index, g = h.attributes.position;
    let d = 0;
    if (m !== null) {
      const y = m.array;
      d = m.version;
      for (let M = 0, v = y.length; M < v; M += 3) {
        const b = y[M + 0], E = y[M + 1], C = y[M + 2];
        f.push(b, E, E, C, C, b);
      }
    } else {
      const y = g.array;
      d = g.version;
      for (let M = 0, v = y.length / 3 - 1; M < v; M += 3) {
        const b = M + 0, E = M + 1, C = M + 2;
        f.push(b, E, E, C, C, b);
      }
    }
    const p = new (bh(f) ? Lh : Ch)(f, 1);
    p.version = d;
    const _ = r.get(h);
    _ && e.remove(_), r.set(h, p);
  }
  function u(h) {
    const f = r.get(h);
    if (f) {
      const m = h.index;
      m !== null && f.version < m.version && c(h);
    } else
      c(h);
    return r.get(h);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: u
  };
}
function J_(o, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function s(f) {
    r = f;
  }
  let a, l;
  function c(f) {
    a = f.type, l = f.bytesPerElement;
  }
  function u(f, m) {
    o.drawElements(r, m, a, f * l), t.update(m, r, 1);
  }
  function h(f, m, g) {
    if (g === 0)
      return;
    let d, p;
    if (i)
      d = o, p = "drawElementsInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", d === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[p](r, m, a, f * l, g), t.update(m, r, g);
  }
  this.setMode = s, this.setIndex = c, this.render = u, this.renderInstances = h;
}
function Q_(o) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, s, a) {
    switch (t.calls++, s) {
      case 4:
        t.triangles += a * (r / 3);
        break;
      case 1:
        t.lines += a * (r / 2);
        break;
      case 3:
        t.lines += a * (r - 1);
        break;
      case 2:
        t.lines += a * r;
        break;
      case 0:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", s);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function e0(o, e) {
  return o[0] - e[0];
}
function t0(o, e) {
  return Math.abs(e[1]) - Math.abs(o[1]);
}
function n0(o, e, t) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), s = new He(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, u, h, f) {
    const m = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, d = g !== void 0 ? g.length : 0;
      let p = r.get(u);
      if (p === void 0 || p.count !== d) {
        let k = function() {
          N.dispose(), r.delete(u), u.removeEventListener("dispose", k);
        };
        p !== void 0 && p.texture.dispose();
        const M = u.morphAttributes.position !== void 0, v = u.morphAttributes.normal !== void 0, b = u.morphAttributes.color !== void 0, E = u.morphAttributes.position || [], C = u.morphAttributes.normal || [], x = u.morphAttributes.color || [];
        let w = 0;
        M === !0 && (w = 1), v === !0 && (w = 2), b === !0 && (w = 3);
        let L = u.attributes.position.count * w, z = 1;
        L > e.maxTextureSize && (z = Math.ceil(L / e.maxTextureSize), L = e.maxTextureSize);
        const K = new Float32Array(L * z * 4 * d), N = new Eh(K, L, z, d);
        N.type = ii, N.needsUpdate = !0;
        const P = w * 4;
        for (let q = 0; q < d; q++) {
          const G = E[q], B = C[q], F = x[q], O = L * z * 4 * q;
          for (let ee = 0; ee < G.count; ee++) {
            const J = ee * P;
            M === !0 && (s.fromBufferAttribute(G, ee), K[O + J + 0] = s.x, K[O + J + 1] = s.y, K[O + J + 2] = s.z, K[O + J + 3] = 0), v === !0 && (s.fromBufferAttribute(B, ee), K[O + J + 4] = s.x, K[O + J + 5] = s.y, K[O + J + 6] = s.z, K[O + J + 7] = 0), b === !0 && (s.fromBufferAttribute(F, ee), K[O + J + 8] = s.x, K[O + J + 9] = s.y, K[O + J + 10] = s.z, K[O + J + 11] = F.itemSize === 4 ? s.w : 1);
          }
        }
        p = {
          count: d,
          texture: N,
          size: new Le(L, z)
        }, r.set(u, p), u.addEventListener("dispose", k);
      }
      let _ = 0;
      for (let M = 0; M < m.length; M++)
        _ += m[M];
      const y = u.morphTargetsRelative ? 1 : 1 - _;
      f.getUniforms().setValue(o, "morphTargetBaseInfluence", y), f.getUniforms().setValue(o, "morphTargetInfluences", m), f.getUniforms().setValue(o, "morphTargetsTexture", p.texture, t), f.getUniforms().setValue(o, "morphTargetsTextureSize", p.size);
    } else {
      const g = m === void 0 ? 0 : m.length;
      let d = n[u.id];
      if (d === void 0 || d.length !== g) {
        d = [];
        for (let v = 0; v < g; v++)
          d[v] = [v, 0];
        n[u.id] = d;
      }
      for (let v = 0; v < g; v++) {
        const b = d[v];
        b[0] = v, b[1] = m[v];
      }
      d.sort(t0);
      for (let v = 0; v < 8; v++)
        v < g && d[v][1] ? (a[v][0] = d[v][0], a[v][1] = d[v][1]) : (a[v][0] = Number.MAX_SAFE_INTEGER, a[v][1] = 0);
      a.sort(e0);
      const p = u.morphAttributes.position, _ = u.morphAttributes.normal;
      let y = 0;
      for (let v = 0; v < 8; v++) {
        const b = a[v], E = b[0], C = b[1];
        E !== Number.MAX_SAFE_INTEGER && C ? (p && u.getAttribute("morphTarget" + v) !== p[E] && u.setAttribute("morphTarget" + v, p[E]), _ && u.getAttribute("morphNormal" + v) !== _[E] && u.setAttribute("morphNormal" + v, _[E]), i[v] = C, y += C) : (p && u.hasAttribute("morphTarget" + v) === !0 && u.deleteAttribute("morphTarget" + v), _ && u.hasAttribute("morphNormal" + v) === !0 && u.deleteAttribute("morphNormal" + v), i[v] = 0);
      }
      const M = u.morphTargetsRelative ? 1 : 1 - y;
      f.getUniforms().setValue(o, "morphTargetBaseInfluence", M), f.getUniforms().setValue(o, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function i0(o, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, u = l.geometry, h = e.get(l, u);
    return i.get(h) !== c && (e.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), h;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: r,
    dispose: s
  };
}
const Ih = /* @__PURE__ */ new bt(), Fh = /* @__PURE__ */ new Eh(), Nh = /* @__PURE__ */ new Xp(), Oh = /* @__PURE__ */ new Ph(), Cc = [], Lc = [], Rc = new Float32Array(16), Pc = new Float32Array(9), Dc = new Float32Array(4);
function Fr(o, e, t) {
  const n = o[0];
  if (n <= 0 || n > 0)
    return o;
  const i = e * t;
  let r = Cc[i];
  if (r === void 0 && (r = new Float32Array(i), Cc[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let s = 1, a = 0; s !== e; ++s)
      a += t, o[s].toArray(r, a);
  }
  return r;
}
function St(o, e) {
  if (o.length !== e.length)
    return !1;
  for (let t = 0, n = o.length; t < n; t++)
    if (o[t] !== e[t])
      return !1;
  return !0;
}
function wt(o, e) {
  for (let t = 0, n = e.length; t < n; t++)
    o[t] = e[t];
}
function ua(o, e) {
  let t = Lc[e];
  t === void 0 && (t = new Int32Array(e), Lc[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = o.allocateTextureUnit();
  return t;
}
function r0(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1f(this.addr, e), t[0] = e);
}
function s0(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (o.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (St(t, e))
      return;
    o.uniform2fv(this.addr, e), wt(t, e);
  }
}
function a0(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (o.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (St(t, e))
      return;
    o.uniform3fv(this.addr, e), wt(t, e);
  }
}
function o0(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (St(t, e))
      return;
    o.uniform4fv(this.addr, e), wt(t, e);
  }
}
function l0(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e))
      return;
    o.uniformMatrix2fv(this.addr, !1, e), wt(t, e);
  } else {
    if (St(t, n))
      return;
    Dc.set(n), o.uniformMatrix2fv(this.addr, !1, Dc), wt(t, n);
  }
}
function c0(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e))
      return;
    o.uniformMatrix3fv(this.addr, !1, e), wt(t, e);
  } else {
    if (St(t, n))
      return;
    Pc.set(n), o.uniformMatrix3fv(this.addr, !1, Pc), wt(t, n);
  }
}
function u0(o, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (St(t, e))
      return;
    o.uniformMatrix4fv(this.addr, !1, e), wt(t, e);
  } else {
    if (St(t, n))
      return;
    Rc.set(n), o.uniformMatrix4fv(this.addr, !1, Rc), wt(t, n);
  }
}
function h0(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1i(this.addr, e), t[0] = e);
}
function f0(o, e) {
  const t = this.cache;
  St(t, e) || (o.uniform2iv(this.addr, e), wt(t, e));
}
function d0(o, e) {
  const t = this.cache;
  St(t, e) || (o.uniform3iv(this.addr, e), wt(t, e));
}
function p0(o, e) {
  const t = this.cache;
  St(t, e) || (o.uniform4iv(this.addr, e), wt(t, e));
}
function m0(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1ui(this.addr, e), t[0] = e);
}
function g0(o, e) {
  const t = this.cache;
  St(t, e) || (o.uniform2uiv(this.addr, e), wt(t, e));
}
function _0(o, e) {
  const t = this.cache;
  St(t, e) || (o.uniform3uiv(this.addr, e), wt(t, e));
}
function x0(o, e) {
  const t = this.cache;
  St(t, e) || (o.uniform4uiv(this.addr, e), wt(t, e));
}
function v0(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || Ih, i);
}
function y0(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Nh, i);
}
function M0(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Oh, i);
}
function b0(o, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Fh, i);
}
function S0(o) {
  switch (o) {
    case 5126:
      return r0;
    case 35664:
      return s0;
    case 35665:
      return a0;
    case 35666:
      return o0;
    case 35674:
      return l0;
    case 35675:
      return c0;
    case 35676:
      return u0;
    case 5124:
    case 35670:
      return h0;
    case 35667:
    case 35671:
      return f0;
    case 35668:
    case 35672:
      return d0;
    case 35669:
    case 35673:
      return p0;
    case 5125:
      return m0;
    case 36294:
      return g0;
    case 36295:
      return _0;
    case 36296:
      return x0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return v0;
    case 35679:
    case 36299:
    case 36307:
      return y0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return M0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return b0;
  }
}
function w0(o, e) {
  o.uniform1fv(this.addr, e);
}
function T0(o, e) {
  const t = Fr(e, this.size, 2);
  o.uniform2fv(this.addr, t);
}
function E0(o, e) {
  const t = Fr(e, this.size, 3);
  o.uniform3fv(this.addr, t);
}
function A0(o, e) {
  const t = Fr(e, this.size, 4);
  o.uniform4fv(this.addr, t);
}
function C0(o, e) {
  const t = Fr(e, this.size, 4);
  o.uniformMatrix2fv(this.addr, !1, t);
}
function L0(o, e) {
  const t = Fr(e, this.size, 9);
  o.uniformMatrix3fv(this.addr, !1, t);
}
function R0(o, e) {
  const t = Fr(e, this.size, 16);
  o.uniformMatrix4fv(this.addr, !1, t);
}
function P0(o, e) {
  o.uniform1iv(this.addr, e);
}
function D0(o, e) {
  o.uniform2iv(this.addr, e);
}
function I0(o, e) {
  o.uniform3iv(this.addr, e);
}
function F0(o, e) {
  o.uniform4iv(this.addr, e);
}
function N0(o, e) {
  o.uniform1uiv(this.addr, e);
}
function O0(o, e) {
  o.uniform2uiv(this.addr, e);
}
function U0(o, e) {
  o.uniform3uiv(this.addr, e);
}
function z0(o, e) {
  o.uniform4uiv(this.addr, e);
}
function k0(o, e, t) {
  const n = e.length, i = ua(t, n);
  o.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r)
    t.setTexture2D(e[r] || Ih, i[r]);
}
function B0(o, e, t) {
  const n = e.length, i = ua(t, n);
  o.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r)
    t.setTexture3D(e[r] || Nh, i[r]);
}
function V0(o, e, t) {
  const n = e.length, i = ua(t, n);
  o.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r)
    t.setTextureCube(e[r] || Oh, i[r]);
}
function G0(o, e, t) {
  const n = e.length, i = ua(t, n);
  o.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r)
    t.setTexture2DArray(e[r] || Fh, i[r]);
}
function H0(o) {
  switch (o) {
    case 5126:
      return w0;
    case 35664:
      return T0;
    case 35665:
      return E0;
    case 35666:
      return A0;
    case 35674:
      return C0;
    case 35675:
      return L0;
    case 35676:
      return R0;
    case 5124:
    case 35670:
      return P0;
    case 35667:
    case 35671:
      return D0;
    case 35668:
    case 35672:
      return I0;
    case 35669:
    case 35673:
      return F0;
    case 5125:
      return N0;
    case 36294:
      return O0;
    case 36295:
      return U0;
    case 36296:
      return z0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return k0;
    case 35679:
    case 36299:
    case 36307:
      return B0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return V0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return G0;
  }
}
class W0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = S0(t.type);
  }
}
class X0 {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = H0(t.type);
  }
}
class q0 {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, s = i.length; r !== s; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const to = /(\w+)(\])?(\[|\.)?/g;
function Ic(o, e) {
  o.seq.push(e), o.map[e.id] = e;
}
function j0(o, e, t) {
  const n = o.name, i = n.length;
  for (to.lastIndex = 0; ; ) {
    const r = to.exec(n), s = to.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && s + 2 === i) {
      Ic(t, c === void 0 ? new W0(a, o, e) : new X0(a, o, e));
      break;
    } else {
      let h = t.map[a];
      h === void 0 && (h = new q0(a), Ic(t, h)), t = h;
    }
  }
}
class Ys {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), s = e.getUniformLocation(t, r.name);
      j0(r, s, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, s = t.length; r !== s; ++r) {
      const a = t[r], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const s = e[i];
      s.id in t && n.push(s);
    }
    return n;
  }
}
function Fc(o, e, t) {
  const n = o.createShader(e);
  return o.shaderSource(n, t), o.compileShader(n), n;
}
let Y0 = 0;
function K0(o, e) {
  const t = o.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let s = i; s < r; s++) {
    const a = s + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[s]}`);
  }
  return n.join(`
`);
}
function $0(o) {
  switch (o) {
    case Oi:
      return ["Linear", "( value )"];
    case Ne:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", o), ["Linear", "( value )"];
  }
}
function Nc(o, e, t) {
  const n = o.getShaderParameter(e, 35713), i = o.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const s = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + K0(o.getShaderSource(e), s);
  } else
    return i;
}
function Z0(o, e) {
  const t = $0(e);
  return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function J0(o, e) {
  let t;
  switch (e) {
    case rp:
      t = "Linear";
      break;
    case sp:
      t = "Reinhard";
      break;
    case ap:
      t = "OptimizedCineon";
      break;
    case op:
      t = "ACESFilmic";
      break;
    case lp:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Q0(o) {
  return [
    o.extensionDerivatives || !!o.envMapCubeUVHeight || o.bumpMap || o.tangentSpaceNormalMap || o.clearcoatNormalMap || o.flatShading || o.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (o.extensionFragDepth || o.logarithmicDepthBuffer) && o.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    o.extensionDrawBuffers && o.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (o.extensionShaderTextureLOD || o.envMap || o.transmission) && o.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Yr).join(`
`);
}
function ex(o) {
  const e = [];
  for (const t in o) {
    const n = o[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function tx(o, e) {
  const t = {}, n = o.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const r = o.getActiveAttrib(e, i), s = r.name;
    let a = 1;
    r.type === 35674 && (a = 2), r.type === 35675 && (a = 3), r.type === 35676 && (a = 4), t[s] = {
      type: r.type,
      location: o.getAttribLocation(e, s),
      locationSize: a
    };
  }
  return t;
}
function Yr(o) {
  return o !== "";
}
function Oc(o, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return o.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Uc(o, e) {
  return o.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const nx = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Po(o) {
  return o.replace(nx, ix);
}
function ix(o, e) {
  const t = we[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Po(t);
}
const rx = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function zc(o) {
  return o.replace(rx, sx);
}
function sx(o, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function kc(o) {
  let e = "precision " + o.precision + ` float;
precision ` + o.precision + " int;";
  return o.precision === "highp" ? e += `
#define HIGH_PRECISION` : o.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : o.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function ax(o) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return o.shadowMapType === dh ? e = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === Od ? e = "SHADOWMAP_TYPE_PCF_SOFT" : o.shadowMapType === jr && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function ox(o) {
  let e = "ENVMAP_TYPE_CUBE";
  if (o.envMap)
    switch (o.envMapMode) {
      case Sr:
      case wr:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ca:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function lx(o) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (o.envMap)
    switch (o.envMapMode) {
      case wr:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function cx(o) {
  let e = "ENVMAP_BLENDING_NONE";
  if (o.envMap)
    switch (o.combine) {
      case gh:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case np:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case ip:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function ux(o) {
  const e = o.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function hx(o, e, t, n) {
  const i = o.getContext(), r = t.defines;
  let s = t.vertexShader, a = t.fragmentShader;
  const l = ax(t), c = ox(t), u = lx(t), h = cx(t), f = ux(t), m = t.isWebGL2 ? "" : Q0(t), g = ex(r), d = i.createProgram();
  let p, _, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    g
  ].filter(Yr).join(`
`), p.length > 0 && (p += `
`), _ = [
    m,
    g
  ].filter(Yr).join(`
`), _.length > 0 && (_ += `
`)) : (p = [
    kc(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Yr).join(`
`), _ = [
    m,
    kc(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Un ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Un ? we.tonemapping_pars_fragment : "",
    t.toneMapping !== Un ? J0("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    we.encodings_pars_fragment,
    Z0("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Yr).join(`
`)), s = Po(s), s = Oc(s, t), s = Uc(s, t), a = Po(a), a = Oc(a, t), a = Uc(a, t), s = zc(s), a = zc(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, p = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, _ = [
    "#define varying in",
    t.glslVersion === lc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === lc ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + _);
  const M = y + p + s, v = y + _ + a, b = Fc(i, 35633, M), E = Fc(i, 35632, v);
  if (i.attachShader(d, b), i.attachShader(d, E), t.index0AttributeName !== void 0 ? i.bindAttribLocation(d, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(d, 0, "position"), i.linkProgram(d), o.debug.checkShaderErrors) {
    const w = i.getProgramInfoLog(d).trim(), L = i.getShaderInfoLog(b).trim(), z = i.getShaderInfoLog(E).trim();
    let K = !0, N = !0;
    if (i.getProgramParameter(d, 35714) === !1) {
      K = !1;
      const P = Nc(i, b, "vertex"), k = Nc(i, E, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(d, 35715) + `

Program Info Log: ` + w + `
` + P + `
` + k
      );
    } else
      w !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", w) : (L === "" || z === "") && (N = !1);
    N && (this.diagnostics = {
      runnable: K,
      programLog: w,
      vertexShader: {
        log: L,
        prefix: p
      },
      fragmentShader: {
        log: z,
        prefix: _
      }
    });
  }
  i.deleteShader(b), i.deleteShader(E);
  let C;
  this.getUniforms = function() {
    return C === void 0 && (C = new Ys(i, d)), C;
  };
  let x;
  return this.getAttributes = function() {
    return x === void 0 && (x = tx(i, d)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(d), this.program = void 0;
  }, this.name = t.shaderName, this.id = Y0++, this.cacheKey = e, this.usedTimes = 1, this.program = d, this.vertexShader = b, this.fragmentShader = E, this;
}
let fx = 0;
class dx {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), s = this._getShaderCacheForMaterial(e);
    return s.has(i) === !1 && (s.add(i), i.usedTimes++), s.has(r) === !1 && (s.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new px(e), t.set(e, n)), n;
  }
}
class px {
  constructor(e) {
    this.id = fx++, this.code = e, this.usedTimes = 0;
  }
}
function mx(o, e, t, n, i, r, s) {
  const a = new Ah(), l = new dx(), c = [], u = i.isWebGL2, h = i.logarithmicDepthBuffer, f = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function d(x, w, L, z, K) {
    const N = z.fog, P = K.geometry, k = x.isMeshStandardMaterial ? z.environment : null, q = (x.isMeshStandardMaterial ? t : e).get(x.envMap || k), G = !!q && q.mapping === ca ? q.image.height : null, B = g[x.type];
    x.precision !== null && (m = i.getMaxPrecision(x.precision), m !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", m, "instead."));
    const F = P.morphAttributes.position || P.morphAttributes.normal || P.morphAttributes.color, O = F !== void 0 ? F.length : 0;
    let ee = 0;
    P.morphAttributes.position !== void 0 && (ee = 1), P.morphAttributes.normal !== void 0 && (ee = 2), P.morphAttributes.color !== void 0 && (ee = 3);
    let J, Z, $, re;
    if (B) {
      const We = dn[B];
      J = We.vertexShader, Z = We.fragmentShader;
    } else
      J = x.vertexShader, Z = x.fragmentShader, l.update(x), $ = l.getVertexShaderID(x), re = l.getFragmentShaderID(x);
    const Y = o.getRenderTarget(), Oe = x.alphaTest > 0, me = x.clearcoat > 0, fe = x.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: B,
      shaderName: x.type,
      vertexShader: J,
      fragmentShader: Z,
      defines: x.defines,
      customVertexShaderID: $,
      customFragmentShaderID: re,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: K.isInstancedMesh === !0,
      instancingColor: K.isInstancedMesh === !0 && K.instanceColor !== null,
      supportsVertexTextures: f,
      outputEncoding: Y === null ? o.outputEncoding : Y.isXRRenderTarget === !0 ? Y.texture.encoding : Oi,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!q,
      envMapMode: q && q.mapping,
      envMapCubeUVHeight: G,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === Cp,
      tangentSpaceNormalMap: x.normalMapType === Qo,
      decodeVideoTexture: !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === Ne,
      clearcoat: me,
      clearcoatMap: me && !!x.clearcoatMap,
      clearcoatRoughnessMap: me && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: me && !!x.clearcoatNormalMap,
      iridescence: fe,
      iridescenceMap: fe && !!x.iridescenceMap,
      iridescenceThicknessMap: fe && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === pr,
      alphaMap: !!x.alphaMap,
      alphaTest: Oe,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!P.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!P.attributes.color && P.attributes.color.itemSize === 4,
      vertexUvs: !!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatMap || !!x.clearcoatRoughnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || !!x.displacementMap || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || !!x.sheenColorMap || !!x.sheenRoughnessMap,
      uvsVertexOnly: !(!!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || x.transmission > 0 || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || x.sheen > 0 || !!x.sheenColorMap || !!x.sheenRoughnessMap) && !!x.displacementMap,
      fog: !!N,
      useFog: x.fog === !0,
      fogExp2: N && N.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: h,
      skinning: K.isSkinnedMesh === !0,
      morphTargets: P.morphAttributes.position !== void 0,
      morphNormals: P.morphAttributes.normal !== void 0,
      morphColors: P.morphAttributes.color !== void 0,
      morphTargetsCount: O,
      morphTextureStride: ee,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: o.shadowMap.enabled && L.length > 0,
      shadowMapType: o.shadowMap.type,
      toneMapping: x.toneMapped ? o.toneMapping : Un,
      physicallyCorrectLights: o.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === Nn,
      flipSided: x.side === Qt,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
  }
  function p(x) {
    const w = [];
    if (x.shaderID ? w.push(x.shaderID) : (w.push(x.customVertexShaderID), w.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const L in x.defines)
        w.push(L), w.push(x.defines[L]);
    return x.isRawShaderMaterial === !1 && (_(w, x), y(w, x), w.push(o.outputEncoding)), w.push(x.customProgramCacheKey), w.join();
  }
  function _(x, w) {
    x.push(w.precision), x.push(w.outputEncoding), x.push(w.envMapMode), x.push(w.envMapCubeUVHeight), x.push(w.combine), x.push(w.vertexUvs), x.push(w.fogExp2), x.push(w.sizeAttenuation), x.push(w.morphTargetsCount), x.push(w.morphAttributeCount), x.push(w.numDirLights), x.push(w.numPointLights), x.push(w.numSpotLights), x.push(w.numSpotLightMaps), x.push(w.numHemiLights), x.push(w.numRectAreaLights), x.push(w.numDirLightShadows), x.push(w.numPointLightShadows), x.push(w.numSpotLightShadows), x.push(w.numSpotLightShadowsWithMaps), x.push(w.shadowMapType), x.push(w.toneMapping), x.push(w.numClippingPlanes), x.push(w.numClipIntersection), x.push(w.depthPacking);
  }
  function y(x, w) {
    a.disableAll(), w.isWebGL2 && a.enable(0), w.supportsVertexTextures && a.enable(1), w.instancing && a.enable(2), w.instancingColor && a.enable(3), w.map && a.enable(4), w.matcap && a.enable(5), w.envMap && a.enable(6), w.lightMap && a.enable(7), w.aoMap && a.enable(8), w.emissiveMap && a.enable(9), w.bumpMap && a.enable(10), w.normalMap && a.enable(11), w.objectSpaceNormalMap && a.enable(12), w.tangentSpaceNormalMap && a.enable(13), w.clearcoat && a.enable(14), w.clearcoatMap && a.enable(15), w.clearcoatRoughnessMap && a.enable(16), w.clearcoatNormalMap && a.enable(17), w.iridescence && a.enable(18), w.iridescenceMap && a.enable(19), w.iridescenceThicknessMap && a.enable(20), w.displacementMap && a.enable(21), w.specularMap && a.enable(22), w.roughnessMap && a.enable(23), w.metalnessMap && a.enable(24), w.gradientMap && a.enable(25), w.alphaMap && a.enable(26), w.alphaTest && a.enable(27), w.vertexColors && a.enable(28), w.vertexAlphas && a.enable(29), w.vertexUvs && a.enable(30), w.vertexTangents && a.enable(31), w.uvsVertexOnly && a.enable(32), x.push(a.mask), a.disableAll(), w.fog && a.enable(0), w.useFog && a.enable(1), w.flatShading && a.enable(2), w.logarithmicDepthBuffer && a.enable(3), w.skinning && a.enable(4), w.morphTargets && a.enable(5), w.morphNormals && a.enable(6), w.morphColors && a.enable(7), w.premultipliedAlpha && a.enable(8), w.shadowMapEnabled && a.enable(9), w.physicallyCorrectLights && a.enable(10), w.doubleSided && a.enable(11), w.flipSided && a.enable(12), w.useDepthPacking && a.enable(13), w.dithering && a.enable(14), w.specularIntensityMap && a.enable(15), w.specularColorMap && a.enable(16), w.transmission && a.enable(17), w.transmissionMap && a.enable(18), w.thicknessMap && a.enable(19), w.sheen && a.enable(20), w.sheenColorMap && a.enable(21), w.sheenRoughnessMap && a.enable(22), w.decodeVideoTexture && a.enable(23), w.opaque && a.enable(24), x.push(a.mask);
  }
  function M(x) {
    const w = g[x.type];
    let L;
    if (w) {
      const z = dn[w];
      L = im.clone(z.uniforms);
    } else
      L = x.uniforms;
    return L;
  }
  function v(x, w) {
    let L;
    for (let z = 0, K = c.length; z < K; z++) {
      const N = c[z];
      if (N.cacheKey === w) {
        L = N, ++L.usedTimes;
        break;
      }
    }
    return L === void 0 && (L = new hx(o, w, x, r), c.push(L)), L;
  }
  function b(x) {
    if (--x.usedTimes === 0) {
      const w = c.indexOf(x);
      c[w] = c[c.length - 1], c.pop(), x.destroy();
    }
  }
  function E(x) {
    l.remove(x);
  }
  function C() {
    l.dispose();
  }
  return {
    getParameters: d,
    getProgramCacheKey: p,
    getUniforms: M,
    acquireProgram: v,
    releaseProgram: b,
    releaseShaderCache: E,
    programs: c,
    dispose: C
  };
}
function gx() {
  let o = /* @__PURE__ */ new WeakMap();
  function e(r) {
    let s = o.get(r);
    return s === void 0 && (s = {}, o.set(r, s)), s;
  }
  function t(r) {
    o.delete(r);
  }
  function n(r, s, a) {
    o.get(r)[s] = a;
  }
  function i() {
    o = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function _x(o, e) {
  return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.material.id !== e.material.id ? o.material.id - e.material.id : o.z !== e.z ? o.z - e.z : o.id - e.id;
}
function Bc(o, e) {
  return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.z !== e.z ? e.z - o.z : o.id - e.id;
}
function Vc() {
  const o = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function s(h, f, m, g, d, p) {
    let _ = o[e];
    return _ === void 0 ? (_ = {
      id: h.id,
      object: h,
      geometry: f,
      material: m,
      groupOrder: g,
      renderOrder: h.renderOrder,
      z: d,
      group: p
    }, o[e] = _) : (_.id = h.id, _.object = h, _.geometry = f, _.material = m, _.groupOrder = g, _.renderOrder = h.renderOrder, _.z = d, _.group = p), e++, _;
  }
  function a(h, f, m, g, d, p) {
    const _ = s(h, f, m, g, d, p);
    m.transmission > 0 ? n.push(_) : m.transparent === !0 ? i.push(_) : t.push(_);
  }
  function l(h, f, m, g, d, p) {
    const _ = s(h, f, m, g, d, p);
    m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : t.unshift(_);
  }
  function c(h, f) {
    t.length > 1 && t.sort(h || _x), n.length > 1 && n.sort(f || Bc), i.length > 1 && i.sort(f || Bc);
  }
  function u() {
    for (let h = e, f = o.length; h < f; h++) {
      const m = o[h];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: a,
    unshift: l,
    finish: u,
    sort: c
  };
}
function xx() {
  let o = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = o.get(n);
    let s;
    return r === void 0 ? (s = new Vc(), o.set(n, [s])) : i >= r.length ? (s = new Vc(), r.push(s)) : s = r[i], s;
  }
  function t() {
    o = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function vx() {
  const o = {};
  return {
    get: function(e) {
      if (o[e.id] !== void 0)
        return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new R(),
            color: new _e()
          };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new _e(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new R(),
            color: new _e(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new R(),
            skyColor: new _e(),
            groundColor: new _e()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new _e(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return o[e.id] = t, t;
    }
  };
}
function yx() {
  const o = {};
  return {
    get: function(e) {
      if (o[e.id] !== void 0)
        return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return o[e.id] = t, t;
    }
  };
}
let Mx = 0;
function bx(o, e) {
  return (e.castShadow ? 2 : 0) - (o.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (o.map ? 1 : 0);
}
function Sx(o, e) {
  const t = new vx(), n = yx(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let u = 0; u < 9; u++)
    i.probe.push(new R());
  const r = new R(), s = new De(), a = new De();
  function l(u, h) {
    let f = 0, m = 0, g = 0;
    for (let z = 0; z < 9; z++)
      i.probe[z].set(0, 0, 0);
    let d = 0, p = 0, _ = 0, y = 0, M = 0, v = 0, b = 0, E = 0, C = 0, x = 0;
    u.sort(bx);
    const w = h !== !0 ? Math.PI : 1;
    for (let z = 0, K = u.length; z < K; z++) {
      const N = u[z], P = N.color, k = N.intensity, q = N.distance, G = N.shadow && N.shadow.map ? N.shadow.map.texture : null;
      if (N.isAmbientLight)
        f += P.r * k * w, m += P.g * k * w, g += P.b * k * w;
      else if (N.isLightProbe)
        for (let B = 0; B < 9; B++)
          i.probe[B].addScaledVector(N.sh.coefficients[B], k);
      else if (N.isDirectionalLight) {
        const B = t.get(N);
        if (B.color.copy(N.color).multiplyScalar(N.intensity * w), N.castShadow) {
          const F = N.shadow, O = n.get(N);
          O.shadowBias = F.bias, O.shadowNormalBias = F.normalBias, O.shadowRadius = F.radius, O.shadowMapSize = F.mapSize, i.directionalShadow[d] = O, i.directionalShadowMap[d] = G, i.directionalShadowMatrix[d] = N.shadow.matrix, v++;
        }
        i.directional[d] = B, d++;
      } else if (N.isSpotLight) {
        const B = t.get(N);
        B.position.setFromMatrixPosition(N.matrixWorld), B.color.copy(P).multiplyScalar(k * w), B.distance = q, B.coneCos = Math.cos(N.angle), B.penumbraCos = Math.cos(N.angle * (1 - N.penumbra)), B.decay = N.decay, i.spot[_] = B;
        const F = N.shadow;
        if (N.map && (i.spotLightMap[C] = N.map, C++, F.updateMatrices(N), N.castShadow && x++), i.spotLightMatrix[_] = F.matrix, N.castShadow) {
          const O = n.get(N);
          O.shadowBias = F.bias, O.shadowNormalBias = F.normalBias, O.shadowRadius = F.radius, O.shadowMapSize = F.mapSize, i.spotShadow[_] = O, i.spotShadowMap[_] = G, E++;
        }
        _++;
      } else if (N.isRectAreaLight) {
        const B = t.get(N);
        B.color.copy(P).multiplyScalar(k), B.halfWidth.set(N.width * 0.5, 0, 0), B.halfHeight.set(0, N.height * 0.5, 0), i.rectArea[y] = B, y++;
      } else if (N.isPointLight) {
        const B = t.get(N);
        if (B.color.copy(N.color).multiplyScalar(N.intensity * w), B.distance = N.distance, B.decay = N.decay, N.castShadow) {
          const F = N.shadow, O = n.get(N);
          O.shadowBias = F.bias, O.shadowNormalBias = F.normalBias, O.shadowRadius = F.radius, O.shadowMapSize = F.mapSize, O.shadowCameraNear = F.camera.near, O.shadowCameraFar = F.camera.far, i.pointShadow[p] = O, i.pointShadowMap[p] = G, i.pointShadowMatrix[p] = N.shadow.matrix, b++;
        }
        i.point[p] = B, p++;
      } else if (N.isHemisphereLight) {
        const B = t.get(N);
        B.skyColor.copy(N.color).multiplyScalar(k * w), B.groundColor.copy(N.groundColor).multiplyScalar(k * w), i.hemi[M] = B, M++;
      }
    }
    y > 0 && (e.isWebGL2 || o.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_FLOAT_1, i.rectAreaLTC2 = ne.LTC_FLOAT_2) : o.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_HALF_1, i.rectAreaLTC2 = ne.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = f, i.ambient[1] = m, i.ambient[2] = g;
    const L = i.hash;
    (L.directionalLength !== d || L.pointLength !== p || L.spotLength !== _ || L.rectAreaLength !== y || L.hemiLength !== M || L.numDirectionalShadows !== v || L.numPointShadows !== b || L.numSpotShadows !== E || L.numSpotMaps !== C) && (i.directional.length = d, i.spot.length = _, i.rectArea.length = y, i.point.length = p, i.hemi.length = M, i.directionalShadow.length = v, i.directionalShadowMap.length = v, i.pointShadow.length = b, i.pointShadowMap.length = b, i.spotShadow.length = E, i.spotShadowMap.length = E, i.directionalShadowMatrix.length = v, i.pointShadowMatrix.length = b, i.spotLightMatrix.length = E + C - x, i.spotLightMap.length = C, i.numSpotLightShadowsWithMaps = x, L.directionalLength = d, L.pointLength = p, L.spotLength = _, L.rectAreaLength = y, L.hemiLength = M, L.numDirectionalShadows = v, L.numPointShadows = b, L.numSpotShadows = E, L.numSpotMaps = C, i.version = Mx++);
  }
  function c(u, h) {
    let f = 0, m = 0, g = 0, d = 0, p = 0;
    const _ = h.matrixWorldInverse;
    for (let y = 0, M = u.length; y < M; y++) {
      const v = u[y];
      if (v.isDirectionalLight) {
        const b = i.directional[f];
        b.direction.setFromMatrixPosition(v.matrixWorld), r.setFromMatrixPosition(v.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(_), f++;
      } else if (v.isSpotLight) {
        const b = i.spot[g];
        b.position.setFromMatrixPosition(v.matrixWorld), b.position.applyMatrix4(_), b.direction.setFromMatrixPosition(v.matrixWorld), r.setFromMatrixPosition(v.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(_), g++;
      } else if (v.isRectAreaLight) {
        const b = i.rectArea[d];
        b.position.setFromMatrixPosition(v.matrixWorld), b.position.applyMatrix4(_), a.identity(), s.copy(v.matrixWorld), s.premultiply(_), a.extractRotation(s), b.halfWidth.set(v.width * 0.5, 0, 0), b.halfHeight.set(0, v.height * 0.5, 0), b.halfWidth.applyMatrix4(a), b.halfHeight.applyMatrix4(a), d++;
      } else if (v.isPointLight) {
        const b = i.point[m];
        b.position.setFromMatrixPosition(v.matrixWorld), b.position.applyMatrix4(_), m++;
      } else if (v.isHemisphereLight) {
        const b = i.hemi[p];
        b.direction.setFromMatrixPosition(v.matrixWorld), b.direction.transformDirection(_), p++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function Gc(o, e) {
  const t = new Sx(o, e), n = [], i = [];
  function r() {
    n.length = 0, i.length = 0;
  }
  function s(h) {
    n.push(h);
  }
  function a(h) {
    i.push(h);
  }
  function l(h) {
    t.setup(n, h);
  }
  function c(h) {
    t.setupView(n, h);
  }
  return {
    init: r,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: s,
    pushShadow: a
  };
}
function wx(o, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, s = 0) {
    const a = t.get(r);
    let l;
    return a === void 0 ? (l = new Gc(o, e), t.set(r, [l])) : s >= a.length ? (l = new Gc(o, e), a.push(l)) : l = a[s], l;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Tx extends _n {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ep, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ex extends _n {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new R(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Ax = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Cx = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Lx(o, e, t) {
  let n = new nl();
  const i = new Le(), r = new Le(), s = new He(), a = new Tx({ depthPacking: Ap }), l = new Ex(), c = {}, u = t.maxTextureSize, h = { 0: Qt, 1: Fi, 2: Nn }, f = new zi({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Le() },
      radius: { value: 4 }
    },
    vertexShader: Ax,
    fragmentShader: Cx
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new vn();
  g.setAttribute(
    "position",
    new zt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const d = new mn(g, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = dh, this.render = function(v, b, E) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || v.length === 0)
      return;
    const C = o.getRenderTarget(), x = o.getActiveCubeFace(), w = o.getActiveMipmapLevel(), L = o.state;
    L.setBlending(ai), L.buffers.color.setClear(1, 1, 1, 1), L.buffers.depth.setTest(!0), L.setScissorTest(!1);
    for (let z = 0, K = v.length; z < K; z++) {
      const N = v[z], P = N.shadow;
      if (P === void 0) {
        console.warn("THREE.WebGLShadowMap:", N, "has no shadow.");
        continue;
      }
      if (P.autoUpdate === !1 && P.needsUpdate === !1)
        continue;
      i.copy(P.mapSize);
      const k = P.getFrameExtents();
      if (i.multiply(k), r.copy(P.mapSize), (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / k.x), i.x = r.x * k.x, P.mapSize.x = r.x), i.y > u && (r.y = Math.floor(u / k.y), i.y = r.y * k.y, P.mapSize.y = r.y)), P.map === null) {
        const G = this.type !== jr ? { minFilter: ht, magFilter: ht } : {};
        P.map = new Ui(i.x, i.y, G), P.map.texture.name = N.name + ".shadowMap", P.camera.updateProjectionMatrix();
      }
      o.setRenderTarget(P.map), o.clear();
      const q = P.getViewportCount();
      for (let G = 0; G < q; G++) {
        const B = P.getViewport(G);
        s.set(
          r.x * B.x,
          r.y * B.y,
          r.x * B.z,
          r.y * B.w
        ), L.viewport(s), P.updateMatrices(N, G), n = P.getFrustum(), M(b, E, P.camera, N, this.type);
      }
      P.isPointLightShadow !== !0 && this.type === jr && _(P, E), P.needsUpdate = !1;
    }
    p.needsUpdate = !1, o.setRenderTarget(C, x, w);
  };
  function _(v, b) {
    const E = e.update(d);
    f.defines.VSM_SAMPLES !== v.blurSamples && (f.defines.VSM_SAMPLES = v.blurSamples, m.defines.VSM_SAMPLES = v.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), v.mapPass === null && (v.mapPass = new Ui(i.x, i.y)), f.uniforms.shadow_pass.value = v.map.texture, f.uniforms.resolution.value = v.mapSize, f.uniforms.radius.value = v.radius, o.setRenderTarget(v.mapPass), o.clear(), o.renderBufferDirect(b, null, E, f, d, null), m.uniforms.shadow_pass.value = v.mapPass.texture, m.uniforms.resolution.value = v.mapSize, m.uniforms.radius.value = v.radius, o.setRenderTarget(v.map), o.clear(), o.renderBufferDirect(b, null, E, m, d, null);
  }
  function y(v, b, E, C, x, w) {
    let L = null;
    const z = E.isPointLight === !0 ? v.customDistanceMaterial : v.customDepthMaterial;
    if (z !== void 0 ? L = z : L = E.isPointLight === !0 ? l : a, o.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0) {
      const K = L.uuid, N = b.uuid;
      let P = c[K];
      P === void 0 && (P = {}, c[K] = P);
      let k = P[N];
      k === void 0 && (k = L.clone(), P[N] = k), L = k;
    }
    return L.visible = b.visible, L.wireframe = b.wireframe, w === jr ? L.side = b.shadowSide !== null ? b.shadowSide : b.side : L.side = b.shadowSide !== null ? b.shadowSide : h[b.side], L.alphaMap = b.alphaMap, L.alphaTest = b.alphaTest, L.clipShadows = b.clipShadows, L.clippingPlanes = b.clippingPlanes, L.clipIntersection = b.clipIntersection, L.displacementMap = b.displacementMap, L.displacementScale = b.displacementScale, L.displacementBias = b.displacementBias, L.wireframeLinewidth = b.wireframeLinewidth, L.linewidth = b.linewidth, E.isPointLight === !0 && L.isMeshDistanceMaterial === !0 && (L.referencePosition.setFromMatrixPosition(E.matrixWorld), L.nearDistance = C, L.farDistance = x), L;
  }
  function M(v, b, E, C, x) {
    if (v.visible === !1)
      return;
    if (v.layers.test(b.layers) && (v.isMesh || v.isLine || v.isPoints) && (v.castShadow || v.receiveShadow && x === jr) && (!v.frustumCulled || n.intersectsObject(v))) {
      v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, v.matrixWorld);
      const z = e.update(v), K = v.material;
      if (Array.isArray(K)) {
        const N = z.groups;
        for (let P = 0, k = N.length; P < k; P++) {
          const q = N[P], G = K[q.materialIndex];
          if (G && G.visible) {
            const B = y(v, G, C, E.near, E.far, x);
            o.renderBufferDirect(E, null, z, B, v, q);
          }
        }
      } else if (K.visible) {
        const N = y(v, K, C, E.near, E.far, x);
        o.renderBufferDirect(E, null, z, N, v, null);
      }
    }
    const L = v.children;
    for (let z = 0, K = L.length; z < K; z++)
      M(L[z], b, E, C, x);
  }
}
function Rx(o, e, t) {
  const n = t.isWebGL2;
  function i() {
    let D = !1;
    const le = new He();
    let H = null;
    const ae = new He(0, 0, 0, 0);
    return {
      setMask: function(ie) {
        H !== ie && !D && (o.colorMask(ie, ie, ie, ie), H = ie);
      },
      setLocked: function(ie) {
        D = ie;
      },
      setClear: function(ie, Re, st, Je, Gn) {
        Gn === !0 && (ie *= Je, Re *= Je, st *= Je), le.set(ie, Re, st, Je), ae.equals(le) === !1 && (o.clearColor(ie, Re, st, Je), ae.copy(le));
      },
      reset: function() {
        D = !1, H = null, ae.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let D = !1, le = null, H = null, ae = null;
    return {
      setTest: function(ie) {
        ie ? Oe(2929) : me(2929);
      },
      setMask: function(ie) {
        le !== ie && !D && (o.depthMask(ie), le = ie);
      },
      setFunc: function(ie) {
        if (H !== ie) {
          if (ie)
            switch (ie) {
              case Kd:
                o.depthFunc(512);
                break;
              case $d:
                o.depthFunc(519);
                break;
              case Zd:
                o.depthFunc(513);
                break;
              case So:
                o.depthFunc(515);
                break;
              case Jd:
                o.depthFunc(514);
                break;
              case Qd:
                o.depthFunc(518);
                break;
              case ep:
                o.depthFunc(516);
                break;
              case tp:
                o.depthFunc(517);
                break;
              default:
                o.depthFunc(515);
            }
          else
            o.depthFunc(515);
          H = ie;
        }
      },
      setLocked: function(ie) {
        D = ie;
      },
      setClear: function(ie) {
        ae !== ie && (o.clearDepth(ie), ae = ie);
      },
      reset: function() {
        D = !1, le = null, H = null, ae = null;
      }
    };
  }
  function s() {
    let D = !1, le = null, H = null, ae = null, ie = null, Re = null, st = null, Je = null, Gn = null;
    return {
      setTest: function(je) {
        D || (je ? Oe(2960) : me(2960));
      },
      setMask: function(je) {
        le !== je && !D && (o.stencilMask(je), le = je);
      },
      setFunc: function(je, bn, Vt) {
        (H !== je || ae !== bn || ie !== Vt) && (o.stencilFunc(je, bn, Vt), H = je, ae = bn, ie = Vt);
      },
      setOp: function(je, bn, Vt) {
        (Re !== je || st !== bn || Je !== Vt) && (o.stencilOp(je, bn, Vt), Re = je, st = bn, Je = Vt);
      },
      setLocked: function(je) {
        D = je;
      },
      setClear: function(je) {
        Gn !== je && (o.clearStencil(je), Gn = je);
      },
      reset: function() {
        D = !1, le = null, H = null, ae = null, ie = null, Re = null, st = null, Je = null, Gn = null;
      }
    };
  }
  const a = new i(), l = new r(), c = new s(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
  let f = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), d = [], p = null, _ = !1, y = null, M = null, v = null, b = null, E = null, C = null, x = null, w = !1, L = null, z = null, K = null, N = null, P = null;
  const k = o.getParameter(35661);
  let q = !1, G = 0;
  const B = o.getParameter(7938);
  B.indexOf("WebGL") !== -1 ? (G = parseFloat(/^WebGL (\d)/.exec(B)[1]), q = G >= 1) : B.indexOf("OpenGL ES") !== -1 && (G = parseFloat(/^OpenGL ES (\d)/.exec(B)[1]), q = G >= 2);
  let F = null, O = {};
  const ee = o.getParameter(3088), J = o.getParameter(2978), Z = new He().fromArray(ee), $ = new He().fromArray(J);
  function re(D, le, H) {
    const ae = new Uint8Array(4), ie = o.createTexture();
    o.bindTexture(D, ie), o.texParameteri(D, 10241, 9728), o.texParameteri(D, 10240, 9728);
    for (let Re = 0; Re < H; Re++)
      o.texImage2D(le + Re, 0, 6408, 1, 1, 0, 6408, 5121, ae);
    return ie;
  }
  const Y = {};
  Y[3553] = re(3553, 3553, 1), Y[34067] = re(34067, 34069, 6), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Oe(2929), l.setFunc(So), _t(!1), un(Dl), Oe(2884), lt(ai);
  function Oe(D) {
    f[D] !== !0 && (o.enable(D), f[D] = !0);
  }
  function me(D) {
    f[D] !== !1 && (o.disable(D), f[D] = !1);
  }
  function fe(D, le) {
    return m[D] !== le ? (o.bindFramebuffer(D, le), m[D] = le, n && (D === 36009 && (m[36160] = le), D === 36160 && (m[36009] = le)), !0) : !1;
  }
  function oe(D, le) {
    let H = d, ae = !1;
    if (D)
      if (H = g.get(le), H === void 0 && (H = [], g.set(le, H)), D.isWebGLMultipleRenderTargets) {
        const ie = D.texture;
        if (H.length !== ie.length || H[0] !== 36064) {
          for (let Re = 0, st = ie.length; Re < st; Re++)
            H[Re] = 36064 + Re;
          H.length = ie.length, ae = !0;
        }
      } else
        H[0] !== 36064 && (H[0] = 36064, ae = !0);
    else
      H[0] !== 1029 && (H[0] = 1029, ae = !0);
    ae && (t.isWebGL2 ? o.drawBuffers(H) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H));
  }
  function We(D) {
    return p !== D ? (o.useProgram(D), p = D, !0) : !1;
  }
  const Se = {
    [or]: 32774,
    [zd]: 32778,
    [kd]: 32779
  };
  if (n)
    Se[Ol] = 32775, Se[Ul] = 32776;
  else {
    const D = e.get("EXT_blend_minmax");
    D !== null && (Se[Ol] = D.MIN_EXT, Se[Ul] = D.MAX_EXT);
  }
  const ge = {
    [Bd]: 0,
    [Vd]: 1,
    [Gd]: 768,
    [ph]: 770,
    [Yd]: 776,
    [qd]: 774,
    [Wd]: 772,
    [Hd]: 769,
    [mh]: 771,
    [jd]: 775,
    [Xd]: 773
  };
  function lt(D, le, H, ae, ie, Re, st, Je) {
    if (D === ai) {
      _ === !0 && (me(3042), _ = !1);
      return;
    }
    if (_ === !1 && (Oe(3042), _ = !0), D !== Ud) {
      if (D !== y || Je !== w) {
        if ((M !== or || E !== or) && (o.blendEquation(32774), M = or, E = or), Je)
          switch (D) {
            case pr:
              o.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Il:
              o.blendFunc(1, 1);
              break;
            case Fl:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Nl:
              o.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        else
          switch (D) {
            case pr:
              o.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Il:
              o.blendFunc(770, 1);
              break;
            case Fl:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Nl:
              o.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", D);
              break;
          }
        v = null, b = null, C = null, x = null, y = D, w = Je;
      }
      return;
    }
    ie = ie || le, Re = Re || H, st = st || ae, (le !== M || ie !== E) && (o.blendEquationSeparate(Se[le], Se[ie]), M = le, E = ie), (H !== v || ae !== b || Re !== C || st !== x) && (o.blendFuncSeparate(ge[H], ge[ae], ge[Re], ge[st]), v = H, b = ae, C = Re, x = st), y = D, w = null;
  }
  function Rt(D, le) {
    D.side === Nn ? me(2884) : Oe(2884);
    let H = D.side === Qt;
    le && (H = !H), _t(H), D.blending === pr && D.transparent === !1 ? lt(ai) : lt(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.premultipliedAlpha), l.setFunc(D.depthFunc), l.setTest(D.depthTest), l.setMask(D.depthWrite), a.setMask(D.colorWrite);
    const ae = D.stencilWrite;
    c.setTest(ae), ae && (c.setMask(D.stencilWriteMask), c.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), c.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), ke(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? Oe(32926) : me(32926);
  }
  function _t(D) {
    L !== D && (D ? o.frontFace(2304) : o.frontFace(2305), L = D);
  }
  function un(D) {
    D !== Fd ? (Oe(2884), D !== z && (D === Dl ? o.cullFace(1029) : D === Nd ? o.cullFace(1028) : o.cullFace(1032))) : me(2884), z = D;
  }
  function ct(D) {
    D !== K && (q && o.lineWidth(D), K = D);
  }
  function ke(D, le, H) {
    D ? (Oe(32823), (N !== le || P !== H) && (o.polygonOffset(le, H), N = le, P = H)) : me(32823);
  }
  function Mn(D) {
    D ? Oe(3089) : me(3089);
  }
  function hn(D) {
    D === void 0 && (D = 33984 + k - 1), F !== D && (o.activeTexture(D), F = D);
  }
  function A(D, le) {
    F === null && hn();
    let H = O[F];
    H === void 0 && (H = { type: void 0, texture: void 0 }, O[F] = H), (H.type !== D || H.texture !== le) && (o.bindTexture(D, le || Y[D]), H.type = D, H.texture = le);
  }
  function S() {
    const D = O[F];
    D !== void 0 && D.type !== void 0 && (o.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function X() {
    try {
      o.compressedTexImage2D.apply(o, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Q() {
    try {
      o.texSubImage2D.apply(o, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function te() {
    try {
      o.texSubImage3D.apply(o, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function se() {
    try {
      o.compressedTexSubImage2D.apply(o, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ve() {
    try {
      o.texStorage2D.apply(o, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function V() {
    try {
      o.texStorage3D.apply(o, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function de() {
    try {
      o.texImage2D.apply(o, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ce() {
    try {
      o.texImage3D.apply(o, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function he(D) {
    Z.equals(D) === !1 && (o.scissor(D.x, D.y, D.z, D.w), Z.copy(D));
  }
  function ue(D) {
    $.equals(D) === !1 && (o.viewport(D.x, D.y, D.z, D.w), $.copy(D));
  }
  function Me(D, le) {
    let H = h.get(le);
    H === void 0 && (H = /* @__PURE__ */ new WeakMap(), h.set(le, H));
    let ae = H.get(D);
    ae === void 0 && (ae = o.getUniformBlockIndex(le, D.name), H.set(D, ae));
  }
  function Ie(D, le) {
    const ae = h.get(le).get(D);
    u.get(D) !== ae && (o.uniformBlockBinding(le, ae, D.__bindingPointIndex), u.set(D, ae));
  }
  function Ze() {
    o.disable(3042), o.disable(2884), o.disable(2929), o.disable(32823), o.disable(3089), o.disable(2960), o.disable(32926), o.blendEquation(32774), o.blendFunc(1, 0), o.blendFuncSeparate(1, 0, 1, 0), o.colorMask(!0, !0, !0, !0), o.clearColor(0, 0, 0, 0), o.depthMask(!0), o.depthFunc(513), o.clearDepth(1), o.stencilMask(4294967295), o.stencilFunc(519, 0, 4294967295), o.stencilOp(7680, 7680, 7680), o.clearStencil(0), o.cullFace(1029), o.frontFace(2305), o.polygonOffset(0, 0), o.activeTexture(33984), o.bindFramebuffer(36160, null), n === !0 && (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)), o.useProgram(null), o.lineWidth(1), o.scissor(0, 0, o.canvas.width, o.canvas.height), o.viewport(0, 0, o.canvas.width, o.canvas.height), f = {}, F = null, O = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), d = [], p = null, _ = !1, y = null, M = null, v = null, b = null, E = null, C = null, x = null, w = !1, L = null, z = null, K = null, N = null, P = null, Z.set(0, 0, o.canvas.width, o.canvas.height), $.set(0, 0, o.canvas.width, o.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: Oe,
    disable: me,
    bindFramebuffer: fe,
    drawBuffers: oe,
    useProgram: We,
    setBlending: lt,
    setMaterial: Rt,
    setFlipSided: _t,
    setCullFace: un,
    setLineWidth: ct,
    setPolygonOffset: ke,
    setScissorTest: Mn,
    activeTexture: hn,
    bindTexture: A,
    unbindTexture: S,
    compressedTexImage2D: X,
    texImage2D: de,
    texImage3D: ce,
    updateUBOMapping: Me,
    uniformBlockBinding: Ie,
    texStorage2D: ve,
    texStorage3D: V,
    texSubImage2D: Q,
    texSubImage3D: te,
    compressedTexSubImage2D: se,
    scissor: he,
    viewport: ue,
    reset: Ze
  };
}
function Px(o, e, t, n, i, r, s) {
  const a = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let d;
  const p = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function y(A, S) {
    return _ ? new OffscreenCanvas(A, S) : us("canvas");
  }
  function M(A, S, X, Q) {
    let te = 1;
    if ((A.width > Q || A.height > Q) && (te = Q / Math.max(A.width, A.height)), te < 1 || S === !0)
      if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap) {
        const se = S ? ra : Math.floor, ve = se(te * A.width), V = se(te * A.height);
        d === void 0 && (d = y(ve, V));
        const de = X ? y(ve, V) : d;
        return de.width = ve, de.height = V, de.getContext("2d").drawImage(A, 0, 0, ve, V), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + A.width + "x" + A.height + ") to (" + ve + "x" + V + ")."), de;
      } else
        return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + A.width + "x" + A.height + ")."), A;
    return A;
  }
  function v(A) {
    return Ro(A.width) && Ro(A.height);
  }
  function b(A) {
    return a ? !1 : A.wrapS !== jt || A.wrapT !== jt || A.minFilter !== ht && A.minFilter !== Tt;
  }
  function E(A, S) {
    return A.generateMipmaps && S && A.minFilter !== ht && A.minFilter !== Tt;
  }
  function C(A) {
    o.generateMipmap(A);
  }
  function x(A, S, X, Q, te = !1) {
    if (a === !1)
      return S;
    if (A !== null) {
      if (o[A] !== void 0)
        return o[A];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'");
    }
    let se = S;
    return S === 6403 && (X === 5126 && (se = 33326), X === 5131 && (se = 33325), X === 5121 && (se = 33321)), S === 33319 && (X === 5126 && (se = 33328), X === 5131 && (se = 33327), X === 5121 && (se = 33323)), S === 6408 && (X === 5126 && (se = 34836), X === 5131 && (se = 34842), X === 5121 && (se = Q === Ne && te === !1 ? 35907 : 32856), X === 32819 && (se = 32854), X === 32820 && (se = 32855)), (se === 33325 || se === 33326 || se === 33327 || se === 33328 || se === 34842 || se === 34836) && e.get("EXT_color_buffer_float"), se;
  }
  function w(A, S, X) {
    return E(A, X) === !0 || A.isFramebufferTexture && A.minFilter !== ht && A.minFilter !== Tt ? Math.log2(Math.max(S.width, S.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? S.mipmaps.length : 1;
  }
  function L(A) {
    return A === ht || A === Eo || A === Ao ? 9728 : 9729;
  }
  function z(A) {
    const S = A.target;
    S.removeEventListener("dispose", z), N(S), S.isVideoTexture && g.delete(S);
  }
  function K(A) {
    const S = A.target;
    S.removeEventListener("dispose", K), k(S);
  }
  function N(A) {
    const S = n.get(A);
    if (S.__webglInit === void 0)
      return;
    const X = A.source, Q = p.get(X);
    if (Q) {
      const te = Q[S.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && P(A), Object.keys(Q).length === 0 && p.delete(X);
    }
    n.remove(A);
  }
  function P(A) {
    const S = n.get(A);
    o.deleteTexture(S.__webglTexture);
    const X = A.source, Q = p.get(X);
    delete Q[S.__cacheKey], s.memory.textures--;
  }
  function k(A) {
    const S = A.texture, X = n.get(A), Q = n.get(S);
    if (Q.__webglTexture !== void 0 && (o.deleteTexture(Q.__webglTexture), s.memory.textures--), A.depthTexture && A.depthTexture.dispose(), A.isWebGLCubeRenderTarget)
      for (let te = 0; te < 6; te++)
        o.deleteFramebuffer(X.__webglFramebuffer[te]), X.__webglDepthbuffer && o.deleteRenderbuffer(X.__webglDepthbuffer[te]);
    else {
      if (o.deleteFramebuffer(X.__webglFramebuffer), X.__webglDepthbuffer && o.deleteRenderbuffer(X.__webglDepthbuffer), X.__webglMultisampledFramebuffer && o.deleteFramebuffer(X.__webglMultisampledFramebuffer), X.__webglColorRenderbuffer)
        for (let te = 0; te < X.__webglColorRenderbuffer.length; te++)
          X.__webglColorRenderbuffer[te] && o.deleteRenderbuffer(X.__webglColorRenderbuffer[te]);
      X.__webglDepthRenderbuffer && o.deleteRenderbuffer(X.__webglDepthRenderbuffer);
    }
    if (A.isWebGLMultipleRenderTargets)
      for (let te = 0, se = S.length; te < se; te++) {
        const ve = n.get(S[te]);
        ve.__webglTexture && (o.deleteTexture(ve.__webglTexture), s.memory.textures--), n.remove(S[te]);
      }
    n.remove(S), n.remove(A);
  }
  let q = 0;
  function G() {
    q = 0;
  }
  function B() {
    const A = q;
    return A >= l && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + l), q += 1, A;
  }
  function F(A) {
    const S = [];
    return S.push(A.wrapS), S.push(A.wrapT), S.push(A.magFilter), S.push(A.minFilter), S.push(A.anisotropy), S.push(A.internalFormat), S.push(A.format), S.push(A.type), S.push(A.generateMipmaps), S.push(A.premultiplyAlpha), S.push(A.flipY), S.push(A.unpackAlignment), S.push(A.encoding), S.join();
  }
  function O(A, S) {
    const X = n.get(A);
    if (A.isVideoTexture && Mn(A), A.isRenderTargetTexture === !1 && A.version > 0 && X.__version !== A.version) {
      const Q = A.image;
      if (Q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        me(X, A, S);
        return;
      }
    }
    t.activeTexture(33984 + S), t.bindTexture(3553, X.__webglTexture);
  }
  function ee(A, S) {
    const X = n.get(A);
    if (A.version > 0 && X.__version !== A.version) {
      me(X, A, S);
      return;
    }
    t.activeTexture(33984 + S), t.bindTexture(35866, X.__webglTexture);
  }
  function J(A, S) {
    const X = n.get(A);
    if (A.version > 0 && X.__version !== A.version) {
      me(X, A, S);
      return;
    }
    t.activeTexture(33984 + S), t.bindTexture(32879, X.__webglTexture);
  }
  function Z(A, S) {
    const X = n.get(A);
    if (A.version > 0 && X.__version !== A.version) {
      fe(X, A, S);
      return;
    }
    t.activeTexture(33984 + S), t.bindTexture(34067, X.__webglTexture);
  }
  const $ = {
    [Tr]: 10497,
    [jt]: 33071,
    [ia]: 33648
  }, re = {
    [ht]: 9728,
    [Eo]: 9984,
    [Ao]: 9986,
    [Tt]: 9729,
    [xh]: 9985,
    [Rr]: 9987
  };
  function Y(A, S, X) {
    if (X ? (o.texParameteri(A, 10242, $[S.wrapS]), o.texParameteri(A, 10243, $[S.wrapT]), (A === 32879 || A === 35866) && o.texParameteri(A, 32882, $[S.wrapR]), o.texParameteri(A, 10240, re[S.magFilter]), o.texParameteri(A, 10241, re[S.minFilter])) : (o.texParameteri(A, 10242, 33071), o.texParameteri(A, 10243, 33071), (A === 32879 || A === 35866) && o.texParameteri(A, 32882, 33071), (S.wrapS !== jt || S.wrapT !== jt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), o.texParameteri(A, 10240, L(S.magFilter)), o.texParameteri(A, 10241, L(S.minFilter)), S.minFilter !== ht && S.minFilter !== Tt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (S.type === ii && e.has("OES_texture_float_linear") === !1 || a === !1 && S.type === os && e.has("OES_texture_half_float_linear") === !1)
        return;
      (S.anisotropy > 1 || n.get(S).__currentAnisotropy) && (o.texParameterf(A, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(S.anisotropy, i.getMaxAnisotropy())), n.get(S).__currentAnisotropy = S.anisotropy);
    }
  }
  function Oe(A, S) {
    let X = !1;
    A.__webglInit === void 0 && (A.__webglInit = !0, S.addEventListener("dispose", z));
    const Q = S.source;
    let te = p.get(Q);
    te === void 0 && (te = {}, p.set(Q, te));
    const se = F(S);
    if (se !== A.__cacheKey) {
      te[se] === void 0 && (te[se] = {
        texture: o.createTexture(),
        usedTimes: 0
      }, s.memory.textures++, X = !0), te[se].usedTimes++;
      const ve = te[A.__cacheKey];
      ve !== void 0 && (te[A.__cacheKey].usedTimes--, ve.usedTimes === 0 && P(S)), A.__cacheKey = se, A.__webglTexture = te[se].texture;
    }
    return X;
  }
  function me(A, S, X) {
    let Q = 3553;
    S.isDataArrayTexture && (Q = 35866), S.isData3DTexture && (Q = 32879);
    const te = Oe(A, S), se = S.source;
    if (t.activeTexture(33984 + X), t.bindTexture(Q, A.__webglTexture), se.version !== se.__currentVersion || te === !0) {
      o.pixelStorei(37440, S.flipY), o.pixelStorei(37441, S.premultiplyAlpha), o.pixelStorei(3317, S.unpackAlignment), o.pixelStorei(37443, 0);
      const ve = b(S) && v(S.image) === !1;
      let V = M(S.image, ve, !1, u);
      V = hn(S, V);
      const de = v(V) || a, ce = r.convert(S.format, S.encoding);
      let he = r.convert(S.type), ue = x(S.internalFormat, ce, he, S.encoding, S.isVideoTexture);
      Y(Q, S, de);
      let Me;
      const Ie = S.mipmaps, Ze = a && S.isVideoTexture !== !0, D = se.__currentVersion === void 0 || te === !0, le = w(S, V, de);
      if (S.isDepthTexture)
        ue = 6402, a ? S.type === ii ? ue = 36012 : S.type === Si ? ue = 33190 : S.type === mr ? ue = 35056 : ue = 33189 : S.type === ii && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), S.format === Ri && ue === 6402 && S.type !== vh && S.type !== Si && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), S.type = Si, he = r.convert(S.type)), S.format === Er && ue === 6402 && (ue = 34041, S.type !== mr && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), S.type = mr, he = r.convert(S.type))), D && (Ze ? t.texStorage2D(3553, 1, ue, V.width, V.height) : t.texImage2D(3553, 0, ue, V.width, V.height, 0, ce, he, null));
      else if (S.isDataTexture)
        if (Ie.length > 0 && de) {
          Ze && D && t.texStorage2D(3553, le, ue, Ie[0].width, Ie[0].height);
          for (let H = 0, ae = Ie.length; H < ae; H++)
            Me = Ie[H], Ze ? t.texSubImage2D(3553, H, 0, 0, Me.width, Me.height, ce, he, Me.data) : t.texImage2D(3553, H, ue, Me.width, Me.height, 0, ce, he, Me.data);
          S.generateMipmaps = !1;
        } else
          Ze ? (D && t.texStorage2D(3553, le, ue, V.width, V.height), t.texSubImage2D(3553, 0, 0, 0, V.width, V.height, ce, he, V.data)) : t.texImage2D(3553, 0, ue, V.width, V.height, 0, ce, he, V.data);
      else if (S.isCompressedTexture) {
        Ze && D && t.texStorage2D(3553, le, ue, Ie[0].width, Ie[0].height);
        for (let H = 0, ae = Ie.length; H < ae; H++)
          Me = Ie[H], S.format !== on ? ce !== null ? Ze ? t.compressedTexSubImage2D(3553, H, 0, 0, Me.width, Me.height, ce, Me.data) : t.compressedTexImage2D(3553, H, ue, Me.width, Me.height, 0, Me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ze ? t.texSubImage2D(3553, H, 0, 0, Me.width, Me.height, ce, he, Me.data) : t.texImage2D(3553, H, ue, Me.width, Me.height, 0, ce, he, Me.data);
      } else if (S.isDataArrayTexture)
        Ze ? (D && t.texStorage3D(35866, le, ue, V.width, V.height, V.depth), t.texSubImage3D(35866, 0, 0, 0, 0, V.width, V.height, V.depth, ce, he, V.data)) : t.texImage3D(35866, 0, ue, V.width, V.height, V.depth, 0, ce, he, V.data);
      else if (S.isData3DTexture)
        Ze ? (D && t.texStorage3D(32879, le, ue, V.width, V.height, V.depth), t.texSubImage3D(32879, 0, 0, 0, 0, V.width, V.height, V.depth, ce, he, V.data)) : t.texImage3D(32879, 0, ue, V.width, V.height, V.depth, 0, ce, he, V.data);
      else if (S.isFramebufferTexture) {
        if (D)
          if (Ze)
            t.texStorage2D(3553, le, ue, V.width, V.height);
          else {
            let H = V.width, ae = V.height;
            for (let ie = 0; ie < le; ie++)
              t.texImage2D(3553, ie, ue, H, ae, 0, ce, he, null), H >>= 1, ae >>= 1;
          }
      } else if (Ie.length > 0 && de) {
        Ze && D && t.texStorage2D(3553, le, ue, Ie[0].width, Ie[0].height);
        for (let H = 0, ae = Ie.length; H < ae; H++)
          Me = Ie[H], Ze ? t.texSubImage2D(3553, H, 0, 0, ce, he, Me) : t.texImage2D(3553, H, ue, ce, he, Me);
        S.generateMipmaps = !1;
      } else
        Ze ? (D && t.texStorage2D(3553, le, ue, V.width, V.height), t.texSubImage2D(3553, 0, 0, 0, ce, he, V)) : t.texImage2D(3553, 0, ue, ce, he, V);
      E(S, de) && C(Q), se.__currentVersion = se.version, S.onUpdate && S.onUpdate(S);
    }
    A.__version = S.version;
  }
  function fe(A, S, X) {
    if (S.image.length !== 6)
      return;
    const Q = Oe(A, S), te = S.source;
    if (t.activeTexture(33984 + X), t.bindTexture(34067, A.__webglTexture), te.version !== te.__currentVersion || Q === !0) {
      o.pixelStorei(37440, S.flipY), o.pixelStorei(37441, S.premultiplyAlpha), o.pixelStorei(3317, S.unpackAlignment), o.pixelStorei(37443, 0);
      const se = S.isCompressedTexture || S.image[0].isCompressedTexture, ve = S.image[0] && S.image[0].isDataTexture, V = [];
      for (let H = 0; H < 6; H++)
        !se && !ve ? V[H] = M(S.image[H], !1, !0, c) : V[H] = ve ? S.image[H].image : S.image[H], V[H] = hn(S, V[H]);
      const de = V[0], ce = v(de) || a, he = r.convert(S.format, S.encoding), ue = r.convert(S.type), Me = x(S.internalFormat, he, ue, S.encoding), Ie = a && S.isVideoTexture !== !0, Ze = te.__currentVersion === void 0 || Q === !0;
      let D = w(S, de, ce);
      Y(34067, S, ce);
      let le;
      if (se) {
        Ie && Ze && t.texStorage2D(34067, D, Me, de.width, de.height);
        for (let H = 0; H < 6; H++) {
          le = V[H].mipmaps;
          for (let ae = 0; ae < le.length; ae++) {
            const ie = le[ae];
            S.format !== on ? he !== null ? Ie ? t.compressedTexSubImage2D(34069 + H, ae, 0, 0, ie.width, ie.height, he, ie.data) : t.compressedTexImage2D(34069 + H, ae, Me, ie.width, ie.height, 0, ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ie ? t.texSubImage2D(34069 + H, ae, 0, 0, ie.width, ie.height, he, ue, ie.data) : t.texImage2D(34069 + H, ae, Me, ie.width, ie.height, 0, he, ue, ie.data);
          }
        }
      } else {
        le = S.mipmaps, Ie && Ze && (le.length > 0 && D++, t.texStorage2D(34067, D, Me, V[0].width, V[0].height));
        for (let H = 0; H < 6; H++)
          if (ve) {
            Ie ? t.texSubImage2D(34069 + H, 0, 0, 0, V[H].width, V[H].height, he, ue, V[H].data) : t.texImage2D(34069 + H, 0, Me, V[H].width, V[H].height, 0, he, ue, V[H].data);
            for (let ae = 0; ae < le.length; ae++) {
              const Re = le[ae].image[H].image;
              Ie ? t.texSubImage2D(34069 + H, ae + 1, 0, 0, Re.width, Re.height, he, ue, Re.data) : t.texImage2D(34069 + H, ae + 1, Me, Re.width, Re.height, 0, he, ue, Re.data);
            }
          } else {
            Ie ? t.texSubImage2D(34069 + H, 0, 0, 0, he, ue, V[H]) : t.texImage2D(34069 + H, 0, Me, he, ue, V[H]);
            for (let ae = 0; ae < le.length; ae++) {
              const ie = le[ae];
              Ie ? t.texSubImage2D(34069 + H, ae + 1, 0, 0, he, ue, ie.image[H]) : t.texImage2D(34069 + H, ae + 1, Me, he, ue, ie.image[H]);
            }
          }
      }
      E(S, ce) && C(34067), te.__currentVersion = te.version, S.onUpdate && S.onUpdate(S);
    }
    A.__version = S.version;
  }
  function oe(A, S, X, Q, te) {
    const se = r.convert(X.format, X.encoding), ve = r.convert(X.type), V = x(X.internalFormat, se, ve, X.encoding);
    n.get(S).__hasExternalTextures || (te === 32879 || te === 35866 ? t.texImage3D(te, 0, V, S.width, S.height, S.depth, 0, se, ve, null) : t.texImage2D(te, 0, V, S.width, S.height, 0, se, ve, null)), t.bindFramebuffer(36160, A), ke(S) ? f.framebufferTexture2DMultisampleEXT(36160, Q, te, n.get(X).__webglTexture, 0, ct(S)) : o.framebufferTexture2D(36160, Q, te, n.get(X).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function We(A, S, X) {
    if (o.bindRenderbuffer(36161, A), S.depthBuffer && !S.stencilBuffer) {
      let Q = 33189;
      if (X || ke(S)) {
        const te = S.depthTexture;
        te && te.isDepthTexture && (te.type === ii ? Q = 36012 : te.type === Si && (Q = 33190));
        const se = ct(S);
        ke(S) ? f.renderbufferStorageMultisampleEXT(36161, se, Q, S.width, S.height) : o.renderbufferStorageMultisample(36161, se, Q, S.width, S.height);
      } else
        o.renderbufferStorage(36161, Q, S.width, S.height);
      o.framebufferRenderbuffer(36160, 36096, 36161, A);
    } else if (S.depthBuffer && S.stencilBuffer) {
      const Q = ct(S);
      X && ke(S) === !1 ? o.renderbufferStorageMultisample(36161, Q, 35056, S.width, S.height) : ke(S) ? f.renderbufferStorageMultisampleEXT(36161, Q, 35056, S.width, S.height) : o.renderbufferStorage(36161, 34041, S.width, S.height), o.framebufferRenderbuffer(36160, 33306, 36161, A);
    } else {
      const Q = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
      for (let te = 0; te < Q.length; te++) {
        const se = Q[te], ve = r.convert(se.format, se.encoding), V = r.convert(se.type), de = x(se.internalFormat, ve, V, se.encoding), ce = ct(S);
        X && ke(S) === !1 ? o.renderbufferStorageMultisample(36161, ce, de, S.width, S.height) : ke(S) ? f.renderbufferStorageMultisampleEXT(36161, ce, de, S.width, S.height) : o.renderbufferStorage(36161, de, S.width, S.height);
      }
    }
    o.bindRenderbuffer(36161, null);
  }
  function Se(A, S) {
    if (S && S.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, A), !(S.depthTexture && S.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(S.depthTexture).__webglTexture || S.depthTexture.image.width !== S.width || S.depthTexture.image.height !== S.height) && (S.depthTexture.image.width = S.width, S.depthTexture.image.height = S.height, S.depthTexture.needsUpdate = !0), O(S.depthTexture, 0);
    const Q = n.get(S.depthTexture).__webglTexture, te = ct(S);
    if (S.depthTexture.format === Ri)
      ke(S) ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q, 0, te) : o.framebufferTexture2D(36160, 36096, 3553, Q, 0);
    else if (S.depthTexture.format === Er)
      ke(S) ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q, 0, te) : o.framebufferTexture2D(36160, 33306, 3553, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function ge(A) {
    const S = n.get(A), X = A.isWebGLCubeRenderTarget === !0;
    if (A.depthTexture && !S.__autoAllocateDepthBuffer) {
      if (X)
        throw new Error("target.depthTexture not supported in Cube render targets");
      Se(S.__webglFramebuffer, A);
    } else if (X) {
      S.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(36160, S.__webglFramebuffer[Q]), S.__webglDepthbuffer[Q] = o.createRenderbuffer(), We(S.__webglDepthbuffer[Q], A, !1);
    } else
      t.bindFramebuffer(36160, S.__webglFramebuffer), S.__webglDepthbuffer = o.createRenderbuffer(), We(S.__webglDepthbuffer, A, !1);
    t.bindFramebuffer(36160, null);
  }
  function lt(A, S, X) {
    const Q = n.get(A);
    S !== void 0 && oe(Q.__webglFramebuffer, A, A.texture, 36064, 3553), X !== void 0 && ge(A);
  }
  function Rt(A) {
    const S = A.texture, X = n.get(A), Q = n.get(S);
    A.addEventListener("dispose", K), A.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = o.createTexture()), Q.__version = S.version, s.memory.textures++);
    const te = A.isWebGLCubeRenderTarget === !0, se = A.isWebGLMultipleRenderTargets === !0, ve = v(A) || a;
    if (te) {
      X.__webglFramebuffer = [];
      for (let V = 0; V < 6; V++)
        X.__webglFramebuffer[V] = o.createFramebuffer();
    } else {
      if (X.__webglFramebuffer = o.createFramebuffer(), se)
        if (i.drawBuffers) {
          const V = A.texture;
          for (let de = 0, ce = V.length; de < ce; de++) {
            const he = n.get(V[de]);
            he.__webglTexture === void 0 && (he.__webglTexture = o.createTexture(), s.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && A.samples > 0 && ke(A) === !1) {
        const V = se ? S : [S];
        X.__webglMultisampledFramebuffer = o.createFramebuffer(), X.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, X.__webglMultisampledFramebuffer);
        for (let de = 0; de < V.length; de++) {
          const ce = V[de];
          X.__webglColorRenderbuffer[de] = o.createRenderbuffer(), o.bindRenderbuffer(36161, X.__webglColorRenderbuffer[de]);
          const he = r.convert(ce.format, ce.encoding), ue = r.convert(ce.type), Me = x(ce.internalFormat, he, ue, ce.encoding), Ie = ct(A);
          o.renderbufferStorageMultisample(36161, Ie, Me, A.width, A.height), o.framebufferRenderbuffer(36160, 36064 + de, 36161, X.__webglColorRenderbuffer[de]);
        }
        o.bindRenderbuffer(36161, null), A.depthBuffer && (X.__webglDepthRenderbuffer = o.createRenderbuffer(), We(X.__webglDepthRenderbuffer, A, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (te) {
      t.bindTexture(34067, Q.__webglTexture), Y(34067, S, ve);
      for (let V = 0; V < 6; V++)
        oe(X.__webglFramebuffer[V], A, S, 36064, 34069 + V);
      E(S, ve) && C(34067), t.unbindTexture();
    } else if (se) {
      const V = A.texture;
      for (let de = 0, ce = V.length; de < ce; de++) {
        const he = V[de], ue = n.get(he);
        t.bindTexture(3553, ue.__webglTexture), Y(3553, he, ve), oe(X.__webglFramebuffer, A, he, 36064 + de, 3553), E(he, ve) && C(3553);
      }
      t.unbindTexture();
    } else {
      let V = 3553;
      (A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (a ? V = A.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(V, Q.__webglTexture), Y(V, S, ve), oe(X.__webglFramebuffer, A, S, 36064, V), E(S, ve) && C(V), t.unbindTexture();
    }
    A.depthBuffer && ge(A);
  }
  function _t(A) {
    const S = v(A) || a, X = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [A.texture];
    for (let Q = 0, te = X.length; Q < te; Q++) {
      const se = X[Q];
      if (E(se, S)) {
        const ve = A.isWebGLCubeRenderTarget ? 34067 : 3553, V = n.get(se).__webglTexture;
        t.bindTexture(ve, V), C(ve), t.unbindTexture();
      }
    }
  }
  function un(A) {
    if (a && A.samples > 0 && ke(A) === !1) {
      const S = A.isWebGLMultipleRenderTargets ? A.texture : [A.texture], X = A.width, Q = A.height;
      let te = 16384;
      const se = [], ve = A.stencilBuffer ? 33306 : 36096, V = n.get(A), de = A.isWebGLMultipleRenderTargets === !0;
      if (de)
        for (let ce = 0; ce < S.length; ce++)
          t.bindFramebuffer(36160, V.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064 + ce, 36161, null), t.bindFramebuffer(36160, V.__webglFramebuffer), o.framebufferTexture2D(36009, 36064 + ce, 3553, null, 0);
      t.bindFramebuffer(36008, V.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, V.__webglFramebuffer);
      for (let ce = 0; ce < S.length; ce++) {
        se.push(36064 + ce), A.depthBuffer && se.push(ve);
        const he = V.__ignoreDepthValues !== void 0 ? V.__ignoreDepthValues : !1;
        if (he === !1 && (A.depthBuffer && (te |= 256), A.stencilBuffer && (te |= 1024)), de && o.framebufferRenderbuffer(36008, 36064, 36161, V.__webglColorRenderbuffer[ce]), he === !0 && (o.invalidateFramebuffer(36008, [ve]), o.invalidateFramebuffer(36009, [ve])), de) {
          const ue = n.get(S[ce]).__webglTexture;
          o.framebufferTexture2D(36009, 36064, 3553, ue, 0);
        }
        o.blitFramebuffer(0, 0, X, Q, 0, 0, X, Q, te, 9728), m && o.invalidateFramebuffer(36008, se);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), de)
        for (let ce = 0; ce < S.length; ce++) {
          t.bindFramebuffer(36160, V.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064 + ce, 36161, V.__webglColorRenderbuffer[ce]);
          const he = n.get(S[ce]).__webglTexture;
          t.bindFramebuffer(36160, V.__webglFramebuffer), o.framebufferTexture2D(36009, 36064 + ce, 3553, he, 0);
        }
      t.bindFramebuffer(36009, V.__webglMultisampledFramebuffer);
    }
  }
  function ct(A) {
    return Math.min(h, A.samples);
  }
  function ke(A) {
    const S = n.get(A);
    return a && A.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && S.__useRenderToTexture !== !1;
  }
  function Mn(A) {
    const S = s.render.frame;
    g.get(A) !== S && (g.set(A, S), A.update());
  }
  function hn(A, S) {
    const X = A.encoding, Q = A.format, te = A.type;
    return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || A.format === Lo || X !== Oi && (X === Ne ? a === !1 ? e.has("EXT_sRGB") === !0 && Q === on ? (A.format = Lo, A.minFilter = Tt, A.generateMipmaps = !1) : S = wh.sRGBToLinear(S) : (Q !== on || te !== Ni) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", X)), S;
  }
  this.allocateTextureUnit = B, this.resetTextureUnits = G, this.setTexture2D = O, this.setTexture2DArray = ee, this.setTexture3D = J, this.setTextureCube = Z, this.rebindTextures = lt, this.setupRenderTarget = Rt, this.updateRenderTargetMipmap = _t, this.updateMultisampleRenderTarget = un, this.setupDepthRenderbuffer = ge, this.setupFrameBufferTexture = oe, this.useMultisampledRTT = ke;
}
function Dx(o, e, t) {
  const n = t.isWebGL2;
  function i(r, s = null) {
    let a;
    if (r === Ni)
      return 5121;
    if (r === fp)
      return 32819;
    if (r === dp)
      return 32820;
    if (r === cp)
      return 5120;
    if (r === up)
      return 5122;
    if (r === vh)
      return 5123;
    if (r === hp)
      return 5124;
    if (r === Si)
      return 5125;
    if (r === ii)
      return 5126;
    if (r === os)
      return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (r === pp)
      return 6406;
    if (r === on)
      return 6408;
    if (r === gp)
      return 6409;
    if (r === _p)
      return 6410;
    if (r === Ri)
      return 6402;
    if (r === Er)
      return 34041;
    if (r === xp)
      return 6403;
    if (r === mp)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (r === Lo)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === vp)
      return 36244;
    if (r === yp)
      return 33319;
    if (r === Mp)
      return 33320;
    if (r === bp)
      return 36249;
    if (r === Ea || r === Aa || r === Ca || r === La)
      if (s === Ne)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (r === Ea)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Aa)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Ca)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === La)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (r === Ea)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Aa)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Ca)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === La)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === zl || r === kl || r === Bl || r === Vl)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (r === zl)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === kl)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Bl)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Vl)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === Sp)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === Gl || r === Hl)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (r === Gl)
          return s === Ne ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === Hl)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === Wl || r === Xl || r === ql || r === jl || r === Yl || r === Kl || r === $l || r === Zl || r === Jl || r === Ql || r === ec || r === tc || r === nc || r === ic)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (r === Wl)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Xl)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === ql)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === jl)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === Yl)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === Kl)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === $l)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === Zl)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Jl)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === Ql)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === ec)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === tc)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === nc)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === ic)
          return s === Ne ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === rc)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (r === rc)
          return s === Ne ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return r === mr ? n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : o[r] !== void 0 ? o[r] : null;
  }
  return { convert: i };
}
class Ix extends Mt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Ei extends qe {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Fx = { type: "move" };
class no {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Ei(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ei(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Ei(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, s = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        s = !0;
        for (const d of e.hand.values()) {
          const p = t.getJointPose(d, n);
          if (c.joints[d.jointName] === void 0) {
            const y = new Ei();
            y.matrixAutoUpdate = !1, y.visible = !1, c.joints[d.jointName] = y, c.add(y);
          }
          const _ = c.joints[d.jointName];
          p !== null && (_.matrix.fromArray(p.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = p.radius), _.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], f = u.position.distanceTo(h.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && f > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && f <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Fx)));
    }
    return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = s !== null), this;
  }
}
class Nx extends bt {
  constructor(e, t, n, i, r, s, a, l, c, u) {
    if (u = u !== void 0 ? u : Ri, u !== Ri && u !== Er)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Ri && (n = Si), n === void 0 && u === Er && (n = mr), super(null, i, r, s, a, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : ht, this.minFilter = l !== void 0 ? l : ht, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Ox extends Pr {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, s = null, a = "local-floor", l = null, c = null, u = null, h = null, f = null, m = null;
    const g = t.getContextAttributes();
    let d = null, p = null;
    const _ = [], y = [], M = new Mt();
    M.layers.enable(1), M.viewport = new He();
    const v = new Mt();
    v.layers.enable(2), v.viewport = new He();
    const b = [M, v], E = new Ix();
    E.layers.enable(1), E.layers.enable(2);
    let C = null, x = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(F) {
      let O = _[F];
      return O === void 0 && (O = new no(), _[F] = O), O.getTargetRaySpace();
    }, this.getControllerGrip = function(F) {
      let O = _[F];
      return O === void 0 && (O = new no(), _[F] = O), O.getGripSpace();
    }, this.getHand = function(F) {
      let O = _[F];
      return O === void 0 && (O = new no(), _[F] = O), O.getHandSpace();
    };
    function w(F) {
      const O = y.indexOf(F.inputSource);
      if (O === -1)
        return;
      const ee = _[O];
      ee !== void 0 && ee.dispatchEvent({ type: F.type, data: F.inputSource });
    }
    function L() {
      i.removeEventListener("select", w), i.removeEventListener("selectstart", w), i.removeEventListener("selectend", w), i.removeEventListener("squeeze", w), i.removeEventListener("squeezestart", w), i.removeEventListener("squeezeend", w), i.removeEventListener("end", L), i.removeEventListener("inputsourceschange", z);
      for (let F = 0; F < _.length; F++) {
        const O = y[F];
        O !== null && (y[F] = null, _[F].disconnect(O));
      }
      C = null, x = null, e.setRenderTarget(d), f = null, h = null, u = null, i = null, p = null, B.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(F) {
      r = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(F) {
      a = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || s;
    }, this.setReferenceSpace = function(F) {
      l = F;
    }, this.getBaseLayer = function() {
      return h !== null ? h : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(F) {
      if (i = F, i !== null) {
        if (d = e.getRenderTarget(), i.addEventListener("select", w), i.addEventListener("selectstart", w), i.addEventListener("selectend", w), i.addEventListener("squeeze", w), i.addEventListener("squeezestart", w), i.addEventListener("squeezeend", w), i.addEventListener("end", L), i.addEventListener("inputsourceschange", z), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const O = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(i, t, O), i.updateRenderState({ baseLayer: f }), p = new Ui(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: on,
              type: Ni,
              encoding: e.outputEncoding,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let O = null, ee = null, J = null;
          g.depth && (J = g.stencil ? 35056 : 33190, O = g.stencil ? Er : Ri, ee = g.stencil ? mr : Si);
          const Z = {
            colorFormat: 32856,
            depthFormat: J,
            scaleFactor: r
          };
          u = new XRWebGLBinding(i, t), h = u.createProjectionLayer(Z), i.updateRenderState({ layers: [h] }), p = new Ui(
            h.textureWidth,
            h.textureHeight,
            {
              format: on,
              type: Ni,
              depthTexture: new Nx(h.textureWidth, h.textureHeight, ee, void 0, void 0, void 0, void 0, void 0, void 0, O),
              stencilBuffer: g.stencil,
              encoding: e.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const $ = e.properties.get(p);
          $.__ignoreDepthValues = h.ignoreDepthValues;
        }
        p.isXRRenderTarget = !0, this.setFoveation(1), l = null, s = await i.requestReferenceSpace(a), B.setContext(i), B.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function z(F) {
      for (let O = 0; O < F.removed.length; O++) {
        const ee = F.removed[O], J = y.indexOf(ee);
        J >= 0 && (y[J] = null, _[J].dispatchEvent({ type: "disconnected", data: ee }));
      }
      for (let O = 0; O < F.added.length; O++) {
        const ee = F.added[O];
        let J = y.indexOf(ee);
        if (J === -1) {
          for (let $ = 0; $ < _.length; $++)
            if ($ >= y.length) {
              y.push(ee), J = $;
              break;
            } else if (y[$] === null) {
              y[$] = ee, J = $;
              break;
            }
          if (J === -1)
            break;
        }
        const Z = _[J];
        Z && Z.dispatchEvent({ type: "connected", data: ee });
      }
    }
    const K = new R(), N = new R();
    function P(F, O, ee) {
      K.setFromMatrixPosition(O.matrixWorld), N.setFromMatrixPosition(ee.matrixWorld);
      const J = K.distanceTo(N), Z = O.projectionMatrix.elements, $ = ee.projectionMatrix.elements, re = Z[14] / (Z[10] - 1), Y = Z[14] / (Z[10] + 1), Oe = (Z[9] + 1) / Z[5], me = (Z[9] - 1) / Z[5], fe = (Z[8] - 1) / Z[0], oe = ($[8] + 1) / $[0], We = re * fe, Se = re * oe, ge = J / (-fe + oe), lt = ge * -fe;
      O.matrixWorld.decompose(F.position, F.quaternion, F.scale), F.translateX(lt), F.translateZ(ge), F.matrixWorld.compose(F.position, F.quaternion, F.scale), F.matrixWorldInverse.copy(F.matrixWorld).invert();
      const Rt = re + ge, _t = Y + ge, un = We - lt, ct = Se + (J - lt), ke = Oe * Y / _t * Rt, Mn = me * Y / _t * Rt;
      F.projectionMatrix.makePerspective(un, ct, ke, Mn, Rt, _t);
    }
    function k(F, O) {
      O === null ? F.matrixWorld.copy(F.matrix) : F.matrixWorld.multiplyMatrices(O.matrixWorld, F.matrix), F.matrixWorldInverse.copy(F.matrixWorld).invert();
    }
    this.updateCamera = function(F) {
      if (i === null)
        return;
      E.near = v.near = M.near = F.near, E.far = v.far = M.far = F.far, (C !== E.near || x !== E.far) && (i.updateRenderState({
        depthNear: E.near,
        depthFar: E.far
      }), C = E.near, x = E.far);
      const O = F.parent, ee = E.cameras;
      k(E, O);
      for (let Z = 0; Z < ee.length; Z++)
        k(ee[Z], O);
      E.matrixWorld.decompose(E.position, E.quaternion, E.scale), F.matrix.copy(E.matrix), F.matrix.decompose(F.position, F.quaternion, F.scale);
      const J = F.children;
      for (let Z = 0, $ = J.length; Z < $; Z++)
        J[Z].updateMatrixWorld(!0);
      ee.length === 2 ? P(E, M, v) : E.projectionMatrix.copy(M.projectionMatrix);
    }, this.getCamera = function() {
      return E;
    }, this.getFoveation = function() {
      if (h !== null)
        return h.fixedFoveation;
      if (f !== null)
        return f.fixedFoveation;
    }, this.setFoveation = function(F) {
      h !== null && (h.fixedFoveation = F), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = F);
    };
    let q = null;
    function G(F, O) {
      if (c = O.getViewerPose(l || s), m = O, c !== null) {
        const ee = c.views;
        f !== null && (e.setRenderTargetFramebuffer(p, f.framebuffer), e.setRenderTarget(p));
        let J = !1;
        ee.length !== E.cameras.length && (E.cameras.length = 0, J = !0);
        for (let Z = 0; Z < ee.length; Z++) {
          const $ = ee[Z];
          let re = null;
          if (f !== null)
            re = f.getViewport($);
          else {
            const Oe = u.getViewSubImage(h, $);
            re = Oe.viewport, Z === 0 && (e.setRenderTargetTextures(
              p,
              Oe.colorTexture,
              h.ignoreDepthValues ? void 0 : Oe.depthStencilTexture
            ), e.setRenderTarget(p));
          }
          let Y = b[Z];
          Y === void 0 && (Y = new Mt(), Y.layers.enable(Z), Y.viewport = new He(), b[Z] = Y), Y.matrix.fromArray($.transform.matrix), Y.projectionMatrix.fromArray($.projectionMatrix), Y.viewport.set(re.x, re.y, re.width, re.height), Z === 0 && E.matrix.copy(Y.matrix), J === !0 && E.cameras.push(Y);
        }
      }
      for (let ee = 0; ee < _.length; ee++) {
        const J = y[ee], Z = _[ee];
        J !== null && Z !== void 0 && Z.update(J, O, l || s);
      }
      q && q(F, O), m = null;
    }
    const B = new Dh();
    B.setAnimationLoop(G), this.setAnimationLoop = function(F) {
      q = F;
    }, this.dispose = function() {
    };
  }
}
function Ux(o, e) {
  function t(d, p) {
    d.fogColor.value.copy(p.color), p.isFog ? (d.fogNear.value = p.near, d.fogFar.value = p.far) : p.isFogExp2 && (d.fogDensity.value = p.density);
  }
  function n(d, p, _, y, M) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? i(d, p) : p.isMeshToonMaterial ? (i(d, p), u(d, p)) : p.isMeshPhongMaterial ? (i(d, p), c(d, p)) : p.isMeshStandardMaterial ? (i(d, p), h(d, p), p.isMeshPhysicalMaterial && f(d, p, M)) : p.isMeshMatcapMaterial ? (i(d, p), m(d, p)) : p.isMeshDepthMaterial ? i(d, p) : p.isMeshDistanceMaterial ? (i(d, p), g(d, p)) : p.isMeshNormalMaterial ? i(d, p) : p.isLineBasicMaterial ? (r(d, p), p.isLineDashedMaterial && s(d, p)) : p.isPointsMaterial ? a(d, p, _, y) : p.isSpriteMaterial ? l(d, p) : p.isShadowMaterial ? (d.color.value.copy(p.color), d.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function i(d, p) {
    d.opacity.value = p.opacity, p.color && d.diffuse.value.copy(p.color), p.emissive && d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (d.map.value = p.map), p.alphaMap && (d.alphaMap.value = p.alphaMap), p.bumpMap && (d.bumpMap.value = p.bumpMap, d.bumpScale.value = p.bumpScale, p.side === Qt && (d.bumpScale.value *= -1)), p.displacementMap && (d.displacementMap.value = p.displacementMap, d.displacementScale.value = p.displacementScale, d.displacementBias.value = p.displacementBias), p.emissiveMap && (d.emissiveMap.value = p.emissiveMap), p.normalMap && (d.normalMap.value = p.normalMap, d.normalScale.value.copy(p.normalScale), p.side === Qt && d.normalScale.value.negate()), p.specularMap && (d.specularMap.value = p.specularMap), p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    const _ = e.get(p).envMap;
    if (_ && (d.envMap.value = _, d.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, d.reflectivity.value = p.reflectivity, d.ior.value = p.ior, d.refractionRatio.value = p.refractionRatio), p.lightMap) {
      d.lightMap.value = p.lightMap;
      const v = o.physicallyCorrectLights !== !0 ? Math.PI : 1;
      d.lightMapIntensity.value = p.lightMapIntensity * v;
    }
    p.aoMap && (d.aoMap.value = p.aoMap, d.aoMapIntensity.value = p.aoMapIntensity);
    let y;
    p.map ? y = p.map : p.specularMap ? y = p.specularMap : p.displacementMap ? y = p.displacementMap : p.normalMap ? y = p.normalMap : p.bumpMap ? y = p.bumpMap : p.roughnessMap ? y = p.roughnessMap : p.metalnessMap ? y = p.metalnessMap : p.alphaMap ? y = p.alphaMap : p.emissiveMap ? y = p.emissiveMap : p.clearcoatMap ? y = p.clearcoatMap : p.clearcoatNormalMap ? y = p.clearcoatNormalMap : p.clearcoatRoughnessMap ? y = p.clearcoatRoughnessMap : p.iridescenceMap ? y = p.iridescenceMap : p.iridescenceThicknessMap ? y = p.iridescenceThicknessMap : p.specularIntensityMap ? y = p.specularIntensityMap : p.specularColorMap ? y = p.specularColorMap : p.transmissionMap ? y = p.transmissionMap : p.thicknessMap ? y = p.thicknessMap : p.sheenColorMap ? y = p.sheenColorMap : p.sheenRoughnessMap && (y = p.sheenRoughnessMap), y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture), y.matrixAutoUpdate === !0 && y.updateMatrix(), d.uvTransform.value.copy(y.matrix));
    let M;
    p.aoMap ? M = p.aoMap : p.lightMap && (M = p.lightMap), M !== void 0 && (M.isWebGLRenderTarget && (M = M.texture), M.matrixAutoUpdate === !0 && M.updateMatrix(), d.uv2Transform.value.copy(M.matrix));
  }
  function r(d, p) {
    d.diffuse.value.copy(p.color), d.opacity.value = p.opacity;
  }
  function s(d, p) {
    d.dashSize.value = p.dashSize, d.totalSize.value = p.dashSize + p.gapSize, d.scale.value = p.scale;
  }
  function a(d, p, _, y) {
    d.diffuse.value.copy(p.color), d.opacity.value = p.opacity, d.size.value = p.size * _, d.scale.value = y * 0.5, p.map && (d.map.value = p.map), p.alphaMap && (d.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    let M;
    p.map ? M = p.map : p.alphaMap && (M = p.alphaMap), M !== void 0 && (M.matrixAutoUpdate === !0 && M.updateMatrix(), d.uvTransform.value.copy(M.matrix));
  }
  function l(d, p) {
    d.diffuse.value.copy(p.color), d.opacity.value = p.opacity, d.rotation.value = p.rotation, p.map && (d.map.value = p.map), p.alphaMap && (d.alphaMap.value = p.alphaMap), p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    let _;
    p.map ? _ = p.map : p.alphaMap && (_ = p.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), d.uvTransform.value.copy(_.matrix));
  }
  function c(d, p) {
    d.specular.value.copy(p.specular), d.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(d, p) {
    p.gradientMap && (d.gradientMap.value = p.gradientMap);
  }
  function h(d, p) {
    d.roughness.value = p.roughness, d.metalness.value = p.metalness, p.roughnessMap && (d.roughnessMap.value = p.roughnessMap), p.metalnessMap && (d.metalnessMap.value = p.metalnessMap), e.get(p).envMap && (d.envMapIntensity.value = p.envMapIntensity);
  }
  function f(d, p, _) {
    d.ior.value = p.ior, p.sheen > 0 && (d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), d.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (d.sheenColorMap.value = p.sheenColorMap), p.sheenRoughnessMap && (d.sheenRoughnessMap.value = p.sheenRoughnessMap)), p.clearcoat > 0 && (d.clearcoat.value = p.clearcoat, d.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (d.clearcoatMap.value = p.clearcoatMap), p.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap), p.clearcoatNormalMap && (d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), d.clearcoatNormalMap.value = p.clearcoatNormalMap, p.side === Qt && d.clearcoatNormalScale.value.negate())), p.iridescence > 0 && (d.iridescence.value = p.iridescence, d.iridescenceIOR.value = p.iridescenceIOR, d.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], d.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (d.iridescenceMap.value = p.iridescenceMap), p.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = p.iridescenceThicknessMap)), p.transmission > 0 && (d.transmission.value = p.transmission, d.transmissionSamplerMap.value = _.texture, d.transmissionSamplerSize.value.set(_.width, _.height), p.transmissionMap && (d.transmissionMap.value = p.transmissionMap), d.thickness.value = p.thickness, p.thicknessMap && (d.thicknessMap.value = p.thicknessMap), d.attenuationDistance.value = p.attenuationDistance, d.attenuationColor.value.copy(p.attenuationColor)), d.specularIntensity.value = p.specularIntensity, d.specularColor.value.copy(p.specularColor), p.specularIntensityMap && (d.specularIntensityMap.value = p.specularIntensityMap), p.specularColorMap && (d.specularColorMap.value = p.specularColorMap);
  }
  function m(d, p) {
    p.matcap && (d.matcap.value = p.matcap);
  }
  function g(d, p) {
    d.referencePosition.value.copy(p.referencePosition), d.nearDistance.value = p.nearDistance, d.farDistance.value = p.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function zx(o, e, t, n) {
  let i = {}, r = {}, s = [];
  const a = t.isWebGL2 ? o.getParameter(35375) : 0;
  function l(y, M) {
    const v = M.program;
    n.uniformBlockBinding(y, v);
  }
  function c(y, M) {
    let v = i[y.id];
    v === void 0 && (g(y), v = u(y), i[y.id] = v, y.addEventListener("dispose", p));
    const b = M.program;
    n.updateUBOMapping(y, b);
    const E = e.render.frame;
    r[y.id] !== E && (f(y), r[y.id] = E);
  }
  function u(y) {
    const M = h();
    y.__bindingPointIndex = M;
    const v = o.createBuffer(), b = y.__size, E = y.usage;
    return o.bindBuffer(35345, v), o.bufferData(35345, b, E), o.bindBuffer(35345, null), o.bindBufferBase(35345, M, v), v;
  }
  function h() {
    for (let y = 0; y < a; y++)
      if (s.indexOf(y) === -1)
        return s.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(y) {
    const M = i[y.id], v = y.uniforms, b = y.__cache;
    o.bindBuffer(35345, M);
    for (let E = 0, C = v.length; E < C; E++) {
      const x = v[E];
      if (m(x, E, b) === !0) {
        const w = x.value, L = x.__offset;
        typeof w == "number" ? (x.__data[0] = w, o.bufferSubData(35345, L, x.__data)) : (x.value.isMatrix3 ? (x.__data[0] = x.value.elements[0], x.__data[1] = x.value.elements[1], x.__data[2] = x.value.elements[2], x.__data[3] = x.value.elements[0], x.__data[4] = x.value.elements[3], x.__data[5] = x.value.elements[4], x.__data[6] = x.value.elements[5], x.__data[7] = x.value.elements[0], x.__data[8] = x.value.elements[6], x.__data[9] = x.value.elements[7], x.__data[10] = x.value.elements[8], x.__data[11] = x.value.elements[0]) : w.toArray(x.__data), o.bufferSubData(35345, L, x.__data));
      }
    }
    o.bindBuffer(35345, null);
  }
  function m(y, M, v) {
    const b = y.value;
    if (v[M] === void 0)
      return typeof b == "number" ? v[M] = b : v[M] = b.clone(), !0;
    if (typeof b == "number") {
      if (v[M] !== b)
        return v[M] = b, !0;
    } else {
      const E = v[M];
      if (E.equals(b) === !1)
        return E.copy(b), !0;
    }
    return !1;
  }
  function g(y) {
    const M = y.uniforms;
    let v = 0;
    const b = 16;
    let E = 0;
    for (let C = 0, x = M.length; C < x; C++) {
      const w = M[C], L = d(w);
      if (w.__data = new Float32Array(L.storage / Float32Array.BYTES_PER_ELEMENT), w.__offset = v, C > 0) {
        E = v % b;
        const z = b - E;
        E !== 0 && z - L.boundary < 0 && (v += b - E, w.__offset = v);
      }
      v += L.storage;
    }
    return E = v % b, E > 0 && (v += b - E), y.__size = v, y.__cache = {}, this;
  }
  function d(y) {
    const M = y.value, v = {
      boundary: 0,
      storage: 0
    };
    return typeof M == "number" ? (v.boundary = 4, v.storage = 4) : M.isVector2 ? (v.boundary = 8, v.storage = 8) : M.isVector3 || M.isColor ? (v.boundary = 16, v.storage = 12) : M.isVector4 ? (v.boundary = 16, v.storage = 16) : M.isMatrix3 ? (v.boundary = 48, v.storage = 48) : M.isMatrix4 ? (v.boundary = 64, v.storage = 64) : M.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", M), v;
  }
  function p(y) {
    const M = y.target;
    M.removeEventListener("dispose", p);
    const v = s.indexOf(M.__bindingPointIndex);
    s.splice(v, 1), o.deleteBuffer(i[M.id]), delete i[M.id], delete r[M.id];
  }
  function _() {
    for (const y in i)
      o.deleteBuffer(i[y]);
    s = [], i = {}, r = {};
  }
  return {
    bind: l,
    update: c,
    dispose: _
  };
}
function kx() {
  const o = us("canvas");
  return o.style.display = "block", o;
}
function Uh(o = {}) {
  this.isWebGLRenderer = !0;
  const e = o.canvas !== void 0 ? o.canvas : kx(), t = o.context !== void 0 ? o.context : null, n = o.depth !== void 0 ? o.depth : !0, i = o.stencil !== void 0 ? o.stencil : !0, r = o.antialias !== void 0 ? o.antialias : !1, s = o.premultipliedAlpha !== void 0 ? o.premultipliedAlpha : !0, a = o.preserveDrawingBuffer !== void 0 ? o.preserveDrawingBuffer : !1, l = o.powerPreference !== void 0 ? o.powerPreference : "default", c = o.failIfMajorPerformanceCaveat !== void 0 ? o.failIfMajorPerformanceCaveat : !1;
  let u;
  t !== null ? u = t.getContextAttributes().alpha : u = o.alpha !== void 0 ? o.alpha : !1;
  let h = null, f = null;
  const m = [], g = [];
  this.domElement = e, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = Oi, this.physicallyCorrectLights = !1, this.toneMapping = Un, this.toneMappingExposure = 1, Object.defineProperties(this, {
    gammaFactor: {
      get: function() {
        return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
      },
      set: function() {
        console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
      }
    }
  });
  const d = this;
  let p = !1, _ = 0, y = 0, M = null, v = -1, b = null;
  const E = new He(), C = new He();
  let x = null, w = e.width, L = e.height, z = 1, K = null, N = null;
  const P = new He(0, 0, w, L), k = new He(0, 0, w, L);
  let q = !1;
  const G = new nl();
  let B = !1, F = !1, O = null;
  const ee = new De(), J = new Le(), Z = new R(), $ = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function re() {
    return M === null ? z : 1;
  }
  let Y = t;
  function Oe(T, U) {
    for (let W = 0; W < T.length; W++) {
      const I = T[W], j = e.getContext(I, U);
      if (j !== null)
        return j;
    }
    return null;
  }
  try {
    const T = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: s,
      preserveDrawingBuffer: a,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Jo}`), e.addEventListener("webglcontextlost", Me, !1), e.addEventListener("webglcontextrestored", Ie, !1), e.addEventListener("webglcontextcreationerror", Ze, !1), Y === null) {
      const U = ["webgl2", "webgl", "experimental-webgl"];
      if (d.isWebGL1Renderer === !0 && U.shift(), Y = Oe(U, T), Y === null)
        throw Oe(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    Y.getShaderPrecisionFormat === void 0 && (Y.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (T) {
    throw console.error("THREE.WebGLRenderer: " + T.message), T;
  }
  let me, fe, oe, We, Se, ge, lt, Rt, _t, un, ct, ke, Mn, hn, A, S, X, Q, te, se, ve, V, de, ce;
  function he() {
    me = new $_(Y), fe = new W_(Y, me, o), me.init(fe), V = new Dx(Y, me, fe), oe = new Rx(Y, me, fe), We = new Q_(), Se = new gx(), ge = new Px(Y, me, oe, Se, fe, V, We), lt = new q_(d), Rt = new K_(d), _t = new um(Y, fe), de = new G_(Y, me, _t, fe), un = new Z_(Y, _t, We, de), ct = new i0(Y, un, _t, We), te = new n0(Y, fe, ge), S = new X_(Se), ke = new mx(d, lt, Rt, me, fe, de, S), Mn = new Ux(d, Se), hn = new xx(), A = new wx(me, fe), Q = new V_(d, lt, oe, ct, u, s), X = new Lx(d, ct, fe), ce = new zx(Y, We, fe, oe), se = new H_(Y, me, We, fe), ve = new J_(Y, me, We, fe), We.programs = ke.programs, d.capabilities = fe, d.extensions = me, d.properties = Se, d.renderLists = hn, d.shadowMap = X, d.state = oe, d.info = We;
  }
  he();
  const ue = new Ox(d, Y);
  this.xr = ue, this.getContext = function() {
    return Y;
  }, this.getContextAttributes = function() {
    return Y.getContextAttributes();
  }, this.forceContextLoss = function() {
    const T = me.get("WEBGL_lose_context");
    T && T.loseContext();
  }, this.forceContextRestore = function() {
    const T = me.get("WEBGL_lose_context");
    T && T.restoreContext();
  }, this.getPixelRatio = function() {
    return z;
  }, this.setPixelRatio = function(T) {
    T !== void 0 && (z = T, this.setSize(w, L, !1));
  }, this.getSize = function(T) {
    return T.set(w, L);
  }, this.setSize = function(T, U, W) {
    if (ue.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    w = T, L = U, e.width = Math.floor(T * z), e.height = Math.floor(U * z), W !== !1 && (e.style.width = T + "px", e.style.height = U + "px"), this.setViewport(0, 0, T, U);
  }, this.getDrawingBufferSize = function(T) {
    return T.set(w * z, L * z).floor();
  }, this.setDrawingBufferSize = function(T, U, W) {
    w = T, L = U, z = W, e.width = Math.floor(T * W), e.height = Math.floor(U * W), this.setViewport(0, 0, T, U);
  }, this.getCurrentViewport = function(T) {
    return T.copy(E);
  }, this.getViewport = function(T) {
    return T.copy(P);
  }, this.setViewport = function(T, U, W, I) {
    T.isVector4 ? P.set(T.x, T.y, T.z, T.w) : P.set(T, U, W, I), oe.viewport(E.copy(P).multiplyScalar(z).floor());
  }, this.getScissor = function(T) {
    return T.copy(k);
  }, this.setScissor = function(T, U, W, I) {
    T.isVector4 ? k.set(T.x, T.y, T.z, T.w) : k.set(T, U, W, I), oe.scissor(C.copy(k).multiplyScalar(z).floor());
  }, this.getScissorTest = function() {
    return q;
  }, this.setScissorTest = function(T) {
    oe.setScissorTest(q = T);
  }, this.setOpaqueSort = function(T) {
    K = T;
  }, this.setTransparentSort = function(T) {
    N = T;
  }, this.getClearColor = function(T) {
    return T.copy(Q.getClearColor());
  }, this.setClearColor = function() {
    Q.setClearColor.apply(Q, arguments);
  }, this.getClearAlpha = function() {
    return Q.getClearAlpha();
  }, this.setClearAlpha = function() {
    Q.setClearAlpha.apply(Q, arguments);
  }, this.clear = function(T = !0, U = !0, W = !0) {
    let I = 0;
    T && (I |= 16384), U && (I |= 256), W && (I |= 1024), Y.clear(I);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", Me, !1), e.removeEventListener("webglcontextrestored", Ie, !1), e.removeEventListener("webglcontextcreationerror", Ze, !1), hn.dispose(), A.dispose(), Se.dispose(), lt.dispose(), Rt.dispose(), ct.dispose(), de.dispose(), ce.dispose(), ke.dispose(), ue.dispose(), ue.removeEventListener("sessionstart", Re), ue.removeEventListener("sessionend", st), O && (O.dispose(), O = null), Je.stop();
  };
  function Me(T) {
    T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), p = !0;
  }
  function Ie() {
    console.log("THREE.WebGLRenderer: Context Restored."), p = !1;
    const T = We.autoReset, U = X.enabled, W = X.autoUpdate, I = X.needsUpdate, j = X.type;
    he(), We.autoReset = T, X.enabled = U, X.autoUpdate = W, X.needsUpdate = I, X.type = j;
  }
  function Ze(T) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
  }
  function D(T) {
    const U = T.target;
    U.removeEventListener("dispose", D), le(U);
  }
  function le(T) {
    H(T), Se.remove(T);
  }
  function H(T) {
    const U = Se.get(T).programs;
    U !== void 0 && (U.forEach(function(W) {
      ke.releaseProgram(W);
    }), T.isShaderMaterial && ke.releaseShaderCache(T));
  }
  this.renderBufferDirect = function(T, U, W, I, j, pe) {
    U === null && (U = $);
    const xe = j.isMesh && j.matrixWorld.determinant() < 0, be = Zh(T, U, W, I, j);
    oe.setMaterial(I, xe);
    let ye = W.index;
    const Ue = W.attributes.position;
    if (ye === null) {
      if (Ue === void 0 || Ue.count === 0)
        return;
    } else if (ye.count === 0)
      return;
    let Ae = 1;
    I.wireframe === !0 && (ye = un.getWireframeAttribute(W), Ae = 2), de.setup(j, I, be, W, ye);
    let Ce, Ye = se;
    ye !== null && (Ce = _t.get(ye), Ye = ve, Ye.setIndex(Ce));
    const ci = ye !== null ? ye.count : Ue.count, Hi = W.drawRange.start * Ae, Wi = W.drawRange.count * Ae, fn = pe !== null ? pe.start * Ae : 0, Fe = pe !== null ? pe.count * Ae : 1 / 0, Xi = Math.max(Hi, fn), et = Math.min(ci, Hi + Wi, fn + Fe) - 1, Gt = Math.max(0, et - Xi + 1);
    if (Gt !== 0) {
      if (j.isMesh)
        I.wireframe === !0 ? (oe.setLineWidth(I.wireframeLinewidth * re()), Ye.setMode(1)) : Ye.setMode(4);
      else if (j.isLine) {
        let Hn = I.linewidth;
        Hn === void 0 && (Hn = 1), oe.setLineWidth(Hn * re()), j.isLineSegments ? Ye.setMode(1) : j.isLineLoop ? Ye.setMode(2) : Ye.setMode(3);
      } else
        j.isPoints ? Ye.setMode(0) : j.isSprite && Ye.setMode(4);
      if (j.isInstancedMesh)
        Ye.renderInstances(Xi, Gt, j.count);
      else if (W.isInstancedBufferGeometry) {
        const Hn = Math.min(W.instanceCount, W._maxInstanceCount);
        Ye.renderInstances(Xi, Gt, Hn);
      } else
        Ye.render(Xi, Gt);
    }
  }, this.compile = function(T, U) {
    function W(I, j, pe) {
      I.transparent === !0 && I.side === Nn ? (I.side = Qt, I.needsUpdate = !0, vs(I, j, pe), I.side = Fi, I.needsUpdate = !0, vs(I, j, pe), I.side = Nn) : vs(I, j, pe);
    }
    f = A.get(T), f.init(), g.push(f), T.traverseVisible(function(I) {
      I.isLight && I.layers.test(U.layers) && (f.pushLight(I), I.castShadow && f.pushShadow(I));
    }), f.setupLights(d.physicallyCorrectLights), T.traverse(function(I) {
      const j = I.material;
      if (j)
        if (Array.isArray(j))
          for (let pe = 0; pe < j.length; pe++) {
            const xe = j[pe];
            W(xe, T, I);
          }
        else
          W(j, T, I);
    }), g.pop(), f = null;
  };
  let ae = null;
  function ie(T) {
    ae && ae(T);
  }
  function Re() {
    Je.stop();
  }
  function st() {
    Je.start();
  }
  const Je = new Dh();
  Je.setAnimationLoop(ie), typeof self < "u" && Je.setContext(self), this.setAnimationLoop = function(T) {
    ae = T, ue.setAnimationLoop(T), T === null ? Je.stop() : Je.start();
  }, ue.addEventListener("sessionstart", Re), ue.addEventListener("sessionend", st), this.render = function(T, U) {
    if (U !== void 0 && U.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (p === !0)
      return;
    T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), ue.enabled === !0 && ue.isPresenting === !0 && (ue.cameraAutoUpdate === !0 && ue.updateCamera(U), U = ue.getCamera()), T.isScene === !0 && T.onBeforeRender(d, T, U, M), f = A.get(T, g.length), f.init(), g.push(f), ee.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), G.setFromProjectionMatrix(ee), F = this.localClippingEnabled, B = S.init(this.clippingPlanes, F, U), h = hn.get(T, m.length), h.init(), m.push(h), Gn(T, U, 0, d.sortObjects), h.finish(), d.sortObjects === !0 && h.sort(K, N), B === !0 && S.beginShadows();
    const W = f.state.shadowsArray;
    if (X.render(W, T, U), B === !0 && S.endShadows(), this.info.autoReset === !0 && this.info.reset(), Q.render(h, T), f.setupLights(d.physicallyCorrectLights), U.isArrayCamera) {
      const I = U.cameras;
      for (let j = 0, pe = I.length; j < pe; j++) {
        const xe = I[j];
        je(h, T, xe, xe.viewport);
      }
    } else
      je(h, T, U);
    M !== null && (ge.updateMultisampleRenderTarget(M), ge.updateRenderTargetMipmap(M)), T.isScene === !0 && T.onAfterRender(d, T, U), de.resetDefaultState(), v = -1, b = null, g.pop(), g.length > 0 ? f = g[g.length - 1] : f = null, m.pop(), m.length > 0 ? h = m[m.length - 1] : h = null;
  };
  function Gn(T, U, W, I) {
    if (T.visible === !1)
      return;
    if (T.layers.test(U.layers)) {
      if (T.isGroup)
        W = T.renderOrder;
      else if (T.isLOD)
        T.autoUpdate === !0 && T.update(U);
      else if (T.isLight)
        f.pushLight(T), T.castShadow && f.pushShadow(T);
      else if (T.isSprite) {
        if (!T.frustumCulled || G.intersectsSprite(T)) {
          I && Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ee);
          const xe = ct.update(T), be = T.material;
          be.visible && h.push(T, xe, be, W, Z.z, null);
        }
      } else if ((T.isMesh || T.isLine || T.isPoints) && (T.isSkinnedMesh && T.skeleton.frame !== We.render.frame && (T.skeleton.update(), T.skeleton.frame = We.render.frame), !T.frustumCulled || G.intersectsObject(T))) {
        I && Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ee);
        const xe = ct.update(T), be = T.material;
        if (Array.isArray(be)) {
          const ye = xe.groups;
          for (let Ue = 0, Ae = ye.length; Ue < Ae; Ue++) {
            const Ce = ye[Ue], Ye = be[Ce.materialIndex];
            Ye && Ye.visible && h.push(T, xe, Ye, W, Z.z, Ce);
          }
        } else
          be.visible && h.push(T, xe, be, W, Z.z, null);
      }
    }
    const pe = T.children;
    for (let xe = 0, be = pe.length; xe < be; xe++)
      Gn(pe[xe], U, W, I);
  }
  function je(T, U, W, I) {
    const j = T.opaque, pe = T.transmissive, xe = T.transparent;
    f.setupLightsView(W), pe.length > 0 && bn(j, U, W), I && oe.viewport(E.copy(I)), j.length > 0 && Vt(j, U, W), pe.length > 0 && Vt(pe, U, W), xe.length > 0 && Vt(xe, U, W), oe.buffers.depth.setTest(!0), oe.buffers.depth.setMask(!0), oe.buffers.color.setMask(!0), oe.setPolygonOffset(!1);
  }
  function bn(T, U, W) {
    const I = fe.isWebGL2;
    O === null && (O = new Ui(1, 1, {
      generateMipmaps: !0,
      type: me.has("EXT_color_buffer_half_float") ? os : Ni,
      minFilter: Rr,
      samples: I && r === !0 ? 4 : 0
    })), d.getDrawingBufferSize(J), I ? O.setSize(J.x, J.y) : O.setSize(ra(J.x), ra(J.y));
    const j = d.getRenderTarget();
    d.setRenderTarget(O), d.clear();
    const pe = d.toneMapping;
    d.toneMapping = Un, Vt(T, U, W), d.toneMapping = pe, ge.updateMultisampleRenderTarget(O), ge.updateRenderTargetMipmap(O), d.setRenderTarget(j);
  }
  function Vt(T, U, W) {
    const I = U.isScene === !0 ? U.overrideMaterial : null;
    for (let j = 0, pe = T.length; j < pe; j++) {
      const xe = T[j], be = xe.object, ye = xe.geometry, Ue = I === null ? xe.material : I, Ae = xe.group;
      be.layers.test(W.layers) && $h(be, U, W, ye, Ue, Ae);
    }
  }
  function $h(T, U, W, I, j, pe) {
    T.onBeforeRender(d, U, W, I, j, pe), T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), j.onBeforeRender(d, U, W, I, T, pe), j.transparent === !0 && j.side === Nn ? (j.side = Qt, j.needsUpdate = !0, d.renderBufferDirect(W, U, I, j, T, pe), j.side = Fi, j.needsUpdate = !0, d.renderBufferDirect(W, U, I, j, T, pe), j.side = Nn) : d.renderBufferDirect(W, U, I, j, T, pe), T.onAfterRender(d, U, W, I, j, pe);
  }
  function vs(T, U, W) {
    U.isScene !== !0 && (U = $);
    const I = Se.get(T), j = f.state.lights, pe = f.state.shadowsArray, xe = j.state.version, be = ke.getParameters(T, j.state, pe, U, W), ye = ke.getProgramCacheKey(be);
    let Ue = I.programs;
    I.environment = T.isMeshStandardMaterial ? U.environment : null, I.fog = U.fog, I.envMap = (T.isMeshStandardMaterial ? Rt : lt).get(T.envMap || I.environment), Ue === void 0 && (T.addEventListener("dispose", D), Ue = /* @__PURE__ */ new Map(), I.programs = Ue);
    let Ae = Ue.get(ye);
    if (Ae !== void 0) {
      if (I.currentProgram === Ae && I.lightsStateVersion === xe)
        return fl(T, be), Ae;
    } else
      be.uniforms = ke.getUniforms(T), T.onBuild(W, be, d), T.onBeforeCompile(be, d), Ae = ke.acquireProgram(be, ye), Ue.set(ye, Ae), I.uniforms = be.uniforms;
    const Ce = I.uniforms;
    (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === !0) && (Ce.clippingPlanes = S.uniform), fl(T, be), I.needsLights = Qh(T), I.lightsStateVersion = xe, I.needsLights && (Ce.ambientLightColor.value = j.state.ambient, Ce.lightProbe.value = j.state.probe, Ce.directionalLights.value = j.state.directional, Ce.directionalLightShadows.value = j.state.directionalShadow, Ce.spotLights.value = j.state.spot, Ce.spotLightShadows.value = j.state.spotShadow, Ce.rectAreaLights.value = j.state.rectArea, Ce.ltc_1.value = j.state.rectAreaLTC1, Ce.ltc_2.value = j.state.rectAreaLTC2, Ce.pointLights.value = j.state.point, Ce.pointLightShadows.value = j.state.pointShadow, Ce.hemisphereLights.value = j.state.hemi, Ce.directionalShadowMap.value = j.state.directionalShadowMap, Ce.directionalShadowMatrix.value = j.state.directionalShadowMatrix, Ce.spotShadowMap.value = j.state.spotShadowMap, Ce.spotLightMatrix.value = j.state.spotLightMatrix, Ce.spotLightMap.value = j.state.spotLightMap, Ce.pointShadowMap.value = j.state.pointShadowMap, Ce.pointShadowMatrix.value = j.state.pointShadowMatrix);
    const Ye = Ae.getUniforms(), ci = Ys.seqWithValue(Ye.seq, Ce);
    return I.currentProgram = Ae, I.uniformsList = ci, Ae;
  }
  function fl(T, U) {
    const W = Se.get(T);
    W.outputEncoding = U.outputEncoding, W.instancing = U.instancing, W.skinning = U.skinning, W.morphTargets = U.morphTargets, W.morphNormals = U.morphNormals, W.morphColors = U.morphColors, W.morphTargetsCount = U.morphTargetsCount, W.numClippingPlanes = U.numClippingPlanes, W.numIntersection = U.numClipIntersection, W.vertexAlphas = U.vertexAlphas, W.vertexTangents = U.vertexTangents, W.toneMapping = U.toneMapping;
  }
  function Zh(T, U, W, I, j) {
    U.isScene !== !0 && (U = $), ge.resetTextureUnits();
    const pe = U.fog, xe = I.isMeshStandardMaterial ? U.environment : null, be = M === null ? d.outputEncoding : M.isXRRenderTarget === !0 ? M.texture.encoding : Oi, ye = (I.isMeshStandardMaterial ? Rt : lt).get(I.envMap || xe), Ue = I.vertexColors === !0 && !!W.attributes.color && W.attributes.color.itemSize === 4, Ae = !!I.normalMap && !!W.attributes.tangent, Ce = !!W.morphAttributes.position, Ye = !!W.morphAttributes.normal, ci = !!W.morphAttributes.color, Hi = I.toneMapped ? d.toneMapping : Un, Wi = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, fn = Wi !== void 0 ? Wi.length : 0, Fe = Se.get(I), Xi = f.state.lights;
    if (B === !0 && (F === !0 || T !== b)) {
      const Pt = T === b && I.id === v;
      S.setState(I, T, Pt);
    }
    let et = !1;
    I.version === Fe.__version ? (Fe.needsLights && Fe.lightsStateVersion !== Xi.state.version || Fe.outputEncoding !== be || j.isInstancedMesh && Fe.instancing === !1 || !j.isInstancedMesh && Fe.instancing === !0 || j.isSkinnedMesh && Fe.skinning === !1 || !j.isSkinnedMesh && Fe.skinning === !0 || Fe.envMap !== ye || I.fog === !0 && Fe.fog !== pe || Fe.numClippingPlanes !== void 0 && (Fe.numClippingPlanes !== S.numPlanes || Fe.numIntersection !== S.numIntersection) || Fe.vertexAlphas !== Ue || Fe.vertexTangents !== Ae || Fe.morphTargets !== Ce || Fe.morphNormals !== Ye || Fe.morphColors !== ci || Fe.toneMapping !== Hi || fe.isWebGL2 === !0 && Fe.morphTargetsCount !== fn) && (et = !0) : (et = !0, Fe.__version = I.version);
    let Gt = Fe.currentProgram;
    et === !0 && (Gt = vs(I, U, j));
    let Hn = !1, Ur = !1, da = !1;
    const xt = Gt.getUniforms(), ui = Fe.uniforms;
    if (oe.useProgram(Gt.program) && (Hn = !0, Ur = !0, da = !0), I.id !== v && (v = I.id, Ur = !0), Hn || b !== T) {
      if (xt.setValue(Y, "projectionMatrix", T.projectionMatrix), fe.logarithmicDepthBuffer && xt.setValue(
        Y,
        "logDepthBufFC",
        2 / (Math.log(T.far + 1) / Math.LN2)
      ), b !== T && (b = T, Ur = !0, da = !0), I.isShaderMaterial || I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshStandardMaterial || I.envMap) {
        const Pt = xt.map.cameraPosition;
        Pt !== void 0 && Pt.setValue(
          Y,
          Z.setFromMatrixPosition(T.matrixWorld)
        );
      }
      (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial) && xt.setValue(Y, "isOrthographic", T.isOrthographicCamera === !0), (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial || I.isShadowMaterial || j.isSkinnedMesh) && xt.setValue(Y, "viewMatrix", T.matrixWorldInverse);
    }
    if (j.isSkinnedMesh) {
      xt.setOptional(Y, j, "bindMatrix"), xt.setOptional(Y, j, "bindMatrixInverse");
      const Pt = j.skeleton;
      Pt && (fe.floatVertexTextures ? (Pt.boneTexture === null && Pt.computeBoneTexture(), xt.setValue(Y, "boneTexture", Pt.boneTexture, ge), xt.setValue(Y, "boneTextureSize", Pt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const pa = W.morphAttributes;
    if ((pa.position !== void 0 || pa.normal !== void 0 || pa.color !== void 0 && fe.isWebGL2 === !0) && te.update(j, W, I, Gt), (Ur || Fe.receiveShadow !== j.receiveShadow) && (Fe.receiveShadow = j.receiveShadow, xt.setValue(Y, "receiveShadow", j.receiveShadow)), I.isMeshGouraudMaterial && I.envMap !== null && (ui.envMap.value = ye, ui.flipEnvMap.value = ye.isCubeTexture && ye.isRenderTargetTexture === !1 ? -1 : 1), Ur && (xt.setValue(Y, "toneMappingExposure", d.toneMappingExposure), Fe.needsLights && Jh(ui, da), pe && I.fog === !0 && Mn.refreshFogUniforms(ui, pe), Mn.refreshMaterialUniforms(ui, I, z, L, O), Ys.upload(Y, Fe.uniformsList, ui, ge)), I.isShaderMaterial && I.uniformsNeedUpdate === !0 && (Ys.upload(Y, Fe.uniformsList, ui, ge), I.uniformsNeedUpdate = !1), I.isSpriteMaterial && xt.setValue(Y, "center", j.center), xt.setValue(Y, "modelViewMatrix", j.modelViewMatrix), xt.setValue(Y, "normalMatrix", j.normalMatrix), xt.setValue(Y, "modelMatrix", j.matrixWorld), I.isShaderMaterial || I.isRawShaderMaterial) {
      const Pt = I.uniformsGroups;
      for (let ma = 0, ef = Pt.length; ma < ef; ma++)
        if (fe.isWebGL2) {
          const dl = Pt[ma];
          ce.update(dl, Gt), ce.bind(dl, Gt);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return Gt;
  }
  function Jh(T, U) {
    T.ambientLightColor.needsUpdate = U, T.lightProbe.needsUpdate = U, T.directionalLights.needsUpdate = U, T.directionalLightShadows.needsUpdate = U, T.pointLights.needsUpdate = U, T.pointLightShadows.needsUpdate = U, T.spotLights.needsUpdate = U, T.spotLightShadows.needsUpdate = U, T.rectAreaLights.needsUpdate = U, T.hemisphereLights.needsUpdate = U;
  }
  function Qh(T) {
    return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return _;
  }, this.getActiveMipmapLevel = function() {
    return y;
  }, this.getRenderTarget = function() {
    return M;
  }, this.setRenderTargetTextures = function(T, U, W) {
    Se.get(T.texture).__webglTexture = U, Se.get(T.depthTexture).__webglTexture = W;
    const I = Se.get(T);
    I.__hasExternalTextures = !0, I.__hasExternalTextures && (I.__autoAllocateDepthBuffer = W === void 0, I.__autoAllocateDepthBuffer || me.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), I.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(T, U) {
    const W = Se.get(T);
    W.__webglFramebuffer = U, W.__useDefaultFramebuffer = U === void 0;
  }, this.setRenderTarget = function(T, U = 0, W = 0) {
    M = T, _ = U, y = W;
    let I = !0;
    if (T) {
      const ye = Se.get(T);
      ye.__useDefaultFramebuffer !== void 0 ? (oe.bindFramebuffer(36160, null), I = !1) : ye.__webglFramebuffer === void 0 ? ge.setupRenderTarget(T) : ye.__hasExternalTextures && ge.rebindTextures(T, Se.get(T.texture).__webglTexture, Se.get(T.depthTexture).__webglTexture);
    }
    let j = null, pe = !1, xe = !1;
    if (T) {
      const ye = T.texture;
      (ye.isData3DTexture || ye.isDataArrayTexture) && (xe = !0);
      const Ue = Se.get(T).__webglFramebuffer;
      T.isWebGLCubeRenderTarget ? (j = Ue[U], pe = !0) : fe.isWebGL2 && T.samples > 0 && ge.useMultisampledRTT(T) === !1 ? j = Se.get(T).__webglMultisampledFramebuffer : j = Ue, E.copy(T.viewport), C.copy(T.scissor), x = T.scissorTest;
    } else
      E.copy(P).multiplyScalar(z).floor(), C.copy(k).multiplyScalar(z).floor(), x = q;
    if (oe.bindFramebuffer(36160, j) && fe.drawBuffers && I && oe.drawBuffers(T, j), oe.viewport(E), oe.scissor(C), oe.setScissorTest(x), pe) {
      const ye = Se.get(T.texture);
      Y.framebufferTexture2D(36160, 36064, 34069 + U, ye.__webglTexture, W);
    } else if (xe) {
      const ye = Se.get(T.texture), Ue = U || 0;
      Y.framebufferTextureLayer(36160, 36064, ye.__webglTexture, W || 0, Ue);
    }
    v = -1;
  }, this.readRenderTargetPixels = function(T, U, W, I, j, pe, xe) {
    if (!(T && T.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let be = Se.get(T).__webglFramebuffer;
    if (T.isWebGLCubeRenderTarget && xe !== void 0 && (be = be[xe]), be) {
      oe.bindFramebuffer(36160, be);
      try {
        const ye = T.texture, Ue = ye.format, Ae = ye.type;
        if (Ue !== on && V.convert(Ue) !== Y.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Ce = Ae === os && (me.has("EXT_color_buffer_half_float") || fe.isWebGL2 && me.has("EXT_color_buffer_float"));
        if (Ae !== Ni && V.convert(Ae) !== Y.getParameter(35738) && !(Ae === ii && (fe.isWebGL2 || me.has("OES_texture_float") || me.has("WEBGL_color_buffer_float"))) && !Ce) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        U >= 0 && U <= T.width - I && W >= 0 && W <= T.height - j && Y.readPixels(U, W, I, j, V.convert(Ue), V.convert(Ae), pe);
      } finally {
        const ye = M !== null ? Se.get(M).__webglFramebuffer : null;
        oe.bindFramebuffer(36160, ye);
      }
    }
  }, this.copyFramebufferToTexture = function(T, U, W = 0) {
    const I = Math.pow(2, -W), j = Math.floor(U.image.width * I), pe = Math.floor(U.image.height * I);
    ge.setTexture2D(U, 0), Y.copyTexSubImage2D(3553, W, 0, 0, T.x, T.y, j, pe), oe.unbindTexture();
  }, this.copyTextureToTexture = function(T, U, W, I = 0) {
    const j = U.image.width, pe = U.image.height, xe = V.convert(W.format), be = V.convert(W.type);
    ge.setTexture2D(W, 0), Y.pixelStorei(37440, W.flipY), Y.pixelStorei(37441, W.premultiplyAlpha), Y.pixelStorei(3317, W.unpackAlignment), U.isDataTexture ? Y.texSubImage2D(3553, I, T.x, T.y, j, pe, xe, be, U.image.data) : U.isCompressedTexture ? Y.compressedTexSubImage2D(3553, I, T.x, T.y, U.mipmaps[0].width, U.mipmaps[0].height, xe, U.mipmaps[0].data) : Y.texSubImage2D(3553, I, T.x, T.y, xe, be, U.image), I === 0 && W.generateMipmaps && Y.generateMipmap(3553), oe.unbindTexture();
  }, this.copyTextureToTexture3D = function(T, U, W, I, j = 0) {
    if (d.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const pe = T.max.x - T.min.x + 1, xe = T.max.y - T.min.y + 1, be = T.max.z - T.min.z + 1, ye = V.convert(I.format), Ue = V.convert(I.type);
    let Ae;
    if (I.isData3DTexture)
      ge.setTexture3D(I, 0), Ae = 32879;
    else if (I.isDataArrayTexture)
      ge.setTexture2DArray(I, 0), Ae = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    Y.pixelStorei(37440, I.flipY), Y.pixelStorei(37441, I.premultiplyAlpha), Y.pixelStorei(3317, I.unpackAlignment);
    const Ce = Y.getParameter(3314), Ye = Y.getParameter(32878), ci = Y.getParameter(3316), Hi = Y.getParameter(3315), Wi = Y.getParameter(32877), fn = W.isCompressedTexture ? W.mipmaps[0] : W.image;
    Y.pixelStorei(3314, fn.width), Y.pixelStorei(32878, fn.height), Y.pixelStorei(3316, T.min.x), Y.pixelStorei(3315, T.min.y), Y.pixelStorei(32877, T.min.z), W.isDataTexture || W.isData3DTexture ? Y.texSubImage3D(Ae, j, U.x, U.y, U.z, pe, xe, be, ye, Ue, fn.data) : W.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Y.compressedTexSubImage3D(Ae, j, U.x, U.y, U.z, pe, xe, be, ye, fn.data)) : Y.texSubImage3D(Ae, j, U.x, U.y, U.z, pe, xe, be, ye, Ue, fn), Y.pixelStorei(3314, Ce), Y.pixelStorei(32878, Ye), Y.pixelStorei(3316, ci), Y.pixelStorei(3315, Hi), Y.pixelStorei(32877, Wi), j === 0 && I.generateMipmaps && Y.generateMipmap(Ae), oe.unbindTexture();
  }, this.initTexture = function(T) {
    T.isCubeTexture ? ge.setTextureCube(T, 0) : T.isData3DTexture ? ge.setTexture3D(T, 0) : T.isDataArrayTexture ? ge.setTexture2DArray(T, 0) : ge.setTexture2D(T, 0), oe.unbindTexture();
  }, this.resetState = function() {
    _ = 0, y = 0, M = null, oe.reset(), de.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class Bx extends Uh {
}
Bx.prototype.isWebGL1Renderer = !0;
class Vx extends qe {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class Gx {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Co, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = cn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = cn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = cn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const vt = /* @__PURE__ */ new R();
class al {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyMatrix4(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyNormalMatrix(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.transformDirection(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ve(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = On(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = On(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = On(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = On(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array), i = Ve(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ve(t, this.array), n = Ve(n, this.array), i = Ve(i, this.array), r = Ve(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return new zt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new al(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const Hc = /* @__PURE__ */ new R(), Wc = /* @__PURE__ */ new He(), Xc = /* @__PURE__ */ new He(), Hx = /* @__PURE__ */ new R(), qc = /* @__PURE__ */ new De();
class Wx extends mn {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new De(), this.bindMatrixInverse = new De();
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new He(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  boneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Wc.fromBufferAttribute(i.attributes.skinIndex, e), Xc.fromBufferAttribute(i.attributes.skinWeight, e), Hc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const s = Xc.getComponent(r);
      if (s !== 0) {
        const a = Wc.getComponent(r);
        qc.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Hx.copy(Hc).applyMatrix4(qc), s);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class zh extends qe {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Xx extends bt {
  constructor(e = null, t = 1, n = 1, i, r, s, a, l, c = ht, u = ht, h, f) {
    super(null, s, a, l, c, u, i, r, h, f), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const jc = /* @__PURE__ */ new De(), qx = /* @__PURE__ */ new De();
class ol {
  constructor(e = [], t = []) {
    this.uuid = cn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new De());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new De();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, s = e.length; r < s; r++) {
      const a = e[r] ? e[r].matrixWorld : qx;
      jc.multiplyMatrices(a, t[r]), jc.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new ol(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Mh(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Xx(t, e, e, on, ii);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let s = t[r];
      s === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), s = new zh()), this.bones.push(s), this.boneInverses.push(new De().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      e.bones.push(s.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class kh extends _n {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new _e(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Yc = /* @__PURE__ */ new R(), Kc = /* @__PURE__ */ new R(), $c = /* @__PURE__ */ new De(), io = /* @__PURE__ */ new tl(), Vs = /* @__PURE__ */ new Ir();
class ll extends qe {
  constructor(e = new vn(), t = new kh()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        Yc.fromBufferAttribute(t, i - 1), Kc.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Yc.distanceTo(Kc);
      e.setAttribute("lineDistance", new zn(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, s = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Vs.copy(n.boundingSphere), Vs.applyMatrix4(i), Vs.radius += r, e.ray.intersectsSphere(Vs) === !1)
      return;
    $c.copy(i).invert(), io.copy(e.ray).applyMatrix4($c);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new R(), u = new R(), h = new R(), f = new R(), m = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, s.start), y = Math.min(g.count, s.start + s.count);
      for (let M = _, v = y - 1; M < v; M += m) {
        const b = g.getX(M), E = g.getX(M + 1);
        if (c.fromBufferAttribute(p, b), u.fromBufferAttribute(p, E), io.distanceSqToSegment(c, u, f, h) > l)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const x = e.ray.origin.distanceTo(f);
        x < e.near || x > e.far || t.push({
          distance: x,
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: M,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const _ = Math.max(0, s.start), y = Math.min(p.count, s.start + s.count);
      for (let M = _, v = y - 1; M < v; M += m) {
        if (c.fromBufferAttribute(p, M), u.fromBufferAttribute(p, M + 1), io.distanceSqToSegment(c, u, f, h) > l)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const E = e.ray.origin.distanceTo(f);
        E < e.near || E > e.far || t.push({
          distance: E,
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: M,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, s = i.length; r < s; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
const Zc = /* @__PURE__ */ new R(), Jc = /* @__PURE__ */ new R();
class jx extends ll {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Zc.fromBufferAttribute(t, i), Jc.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Zc.distanceTo(Jc);
      e.setAttribute("lineDistance", new zn(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Yx extends ll {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class Bh extends _n {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new _e(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Qc = /* @__PURE__ */ new De(), Do = /* @__PURE__ */ new tl(), Gs = /* @__PURE__ */ new Ir(), Hs = /* @__PURE__ */ new R();
class Kx extends qe {
  constructor(e = new vn(), t = new Bh()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, s = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Gs.copy(n.boundingSphere), Gs.applyMatrix4(i), Gs.radius += r, e.ray.intersectsSphere(Gs) === !1)
      return;
    Qc.copy(i).invert(), Do.copy(e.ray).applyMatrix4(Qc);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, h = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, s.start), m = Math.min(c.count, s.start + s.count);
      for (let g = f, d = m; g < d; g++) {
        const p = c.getX(g);
        Hs.fromBufferAttribute(h, p), eu(Hs, p, l, i, e, t, this);
      }
    } else {
      const f = Math.max(0, s.start), m = Math.min(h.count, s.start + s.count);
      for (let g = f, d = m; g < d; g++)
        Hs.fromBufferAttribute(h, g), eu(Hs, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, s = i.length; r < s; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function eu(o, e, t, n, i, r, s) {
  const a = Do.distanceSqToPoint(o);
  if (a < t) {
    const l = new R();
    Do.closestPointToPoint(o, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far)
      return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: e,
      face: null,
      object: s
    });
  }
}
class ha extends _n {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new _e(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new _e(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Qo, this.normalScale = new Le(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Gi extends ha {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Le(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return yt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new _e(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new _e(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new _e(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function Zn(o, e, t) {
  return Vh(o) ? new o.constructor(o.subarray(e, t !== void 0 ? t : o.length)) : o.slice(e, t);
}
function Ws(o, e, t) {
  return !o || !t && o.constructor === e ? o : typeof e.BYTES_PER_ELEMENT == "number" ? new e(o) : Array.prototype.slice.call(o);
}
function Vh(o) {
  return ArrayBuffer.isView(o) && !(o instanceof DataView);
}
function $x(o) {
  function e(i, r) {
    return o[i] - o[r];
  }
  const t = o.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function tu(o, e, t) {
  const n = o.length, i = new o.constructor(n);
  for (let r = 0, s = 0; s !== n; ++r) {
    const a = t[r] * e;
    for (let l = 0; l !== e; ++l)
      i[s++] = o[a + l];
  }
  return i;
}
function Gh(o, e, t, n) {
  let i = 1, r = o[0];
  for (; r !== void 0 && r[n] === void 0; )
    r = o[i++];
  if (r === void 0)
    return;
  let s = r[n];
  if (s !== void 0)
    if (Array.isArray(s))
      do
        s = r[n], s !== void 0 && (e.push(r.time), t.push.apply(t, s)), r = o[i++];
      while (r !== void 0);
    else if (s.toArray !== void 0)
      do
        s = r[n], s !== void 0 && (e.push(r.time), s.toArray(t, t.length)), r = o[i++];
      while (r !== void 0);
    else
      do
        s = r[n], s !== void 0 && (e.push(r.time), t.push(s)), r = o[i++];
      while (r !== void 0);
}
class _s {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let s;
        t: {
          i:
            if (!(e < i)) {
              for (let a = n + 2; ; ) {
                if (i === void 0) {
                  if (e < r)
                    break i;
                  return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === a)
                  break;
                if (r = i, i = t[++n], e < i)
                  break e;
              }
              s = t.length;
              break t;
            }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (n = 2, r = a);
            for (let l = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l)
                break;
              if (i = r, r = t[--n - 1], e >= r)
                break e;
            }
            s = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < s; ) {
          const a = n + s >>> 1;
          e < t[a] ? s = a : n = a + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let s = 0; s !== i; ++s)
      t[s] = n[r + s];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Zx extends _s {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: sc,
      endingEnd: sc
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, s = e + 1, a = i[r], l = i[s];
    if (a === void 0)
      switch (this.getSettings_().endingStart) {
        case ac:
          r = e, a = 2 * t - n;
          break;
        case oc:
          r = i.length - 2, a = t + i[r] - i[r + 1];
          break;
        default:
          r = e, a = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case ac:
          s = e, l = 2 * n - t;
          break;
        case oc:
          s = 1, l = n + i[1] - i[0];
          break;
        default:
          s = e - 1, l = t;
      }
    const c = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * u, this._offsetNext = s * u;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = this._offsetPrev, h = this._offsetNext, f = this._weightPrev, m = this._weightNext, g = (n - t) / (i - t), d = g * g, p = d * g, _ = -f * p + 2 * f * d - f * g, y = (1 + f) * p + (-1.5 - 2 * f) * d + (-0.5 + f) * g + 1, M = (-1 - m) * p + (1.5 + m) * d + 0.5 * g, v = m * p - m * d;
    for (let b = 0; b !== a; ++b)
      r[b] = _ * s[u + b] + y * s[c + b] + M * s[l + b] + v * s[h + b];
    return r;
  }
}
class Jx extends _s {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, u = (n - t) / (i - t), h = 1 - u;
    for (let f = 0; f !== a; ++f)
      r[f] = s[c + f] * h + s[l + f] * u;
    return r;
  }
}
class Qx extends _s {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class yn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Ws(t, this.TimeBufferType), this.values = Ws(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Ws(e.times, Array),
        values: Ws(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Qx(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Jx(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Zx(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case ls:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ar:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ra:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return ls;
      case this.InterpolantFactoryMethodLinear:
        return Ar;
      case this.InterpolantFactoryMethodSmooth:
        return Ra;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, s = i - 1;
    for (; r !== i && n[r] < e; )
      ++r;
    for (; s !== -1 && n[s] > t; )
      --s;
    if (++s, r !== 0 || s !== i) {
      r >= s && (s = Math.max(s, 1), r = s - 1);
      const a = this.getValueSize();
      this.times = Zn(n, r, s), this.values = Zn(this.values, r * a, s * a);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let s = null;
    for (let a = 0; a !== r; a++) {
      const l = n[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = !1;
        break;
      }
      if (s !== null && s > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, s), e = !1;
        break;
      }
      s = l;
    }
    if (i !== void 0 && Vh(i))
      for (let a = 0, l = i.length; a !== l; ++a) {
        const c = i[a];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = !1;
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = Zn(this.times), t = Zn(this.values), n = this.getValueSize(), i = this.getInterpolation() === Ra, r = e.length - 1;
    let s = 1;
    for (let a = 1; a < r; ++a) {
      let l = !1;
      const c = e[a], u = e[a + 1];
      if (c !== u && (a !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const h = a * n, f = h - n, m = h + n;
          for (let g = 0; g !== n; ++g) {
            const d = t[h + g];
            if (d !== t[f + g] || d !== t[m + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (a !== s) {
          e[s] = e[a];
          const h = a * n, f = s * n;
          for (let m = 0; m !== n; ++m)
            t[f + m] = t[h + m];
        }
        ++s;
      }
    }
    if (r > 0) {
      e[s] = e[r];
      for (let a = r * n, l = s * n, c = 0; c !== n; ++c)
        t[l + c] = t[a + c];
      ++s;
    }
    return s !== e.length ? (this.times = Zn(e, 0, s), this.values = Zn(t, 0, s * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = Zn(this.times, 0), t = Zn(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
yn.prototype.TimeBufferType = Float32Array;
yn.prototype.ValueBufferType = Float32Array;
yn.prototype.DefaultInterpolation = Ar;
class Nr extends yn {
}
Nr.prototype.ValueTypeName = "bool";
Nr.prototype.ValueBufferType = Array;
Nr.prototype.DefaultInterpolation = ls;
Nr.prototype.InterpolantFactoryMethodLinear = void 0;
Nr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Hh extends yn {
}
Hh.prototype.ValueTypeName = "color";
class hs extends yn {
}
hs.prototype.ValueTypeName = "number";
class ev extends _s {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t);
    let c = e * a;
    for (let u = c + a; c !== u; c += 4)
      Vi.slerpFlat(r, 0, s, c - a, s, c, l);
    return r;
  }
}
class ki extends yn {
  InterpolantFactoryMethodLinear(e) {
    return new ev(this.times, this.values, this.getValueSize(), e);
  }
}
ki.prototype.ValueTypeName = "quaternion";
ki.prototype.DefaultInterpolation = Ar;
ki.prototype.InterpolantFactoryMethodSmooth = void 0;
class Or extends yn {
}
Or.prototype.ValueTypeName = "string";
Or.prototype.ValueBufferType = Array;
Or.prototype.DefaultInterpolation = ls;
Or.prototype.InterpolantFactoryMethodLinear = void 0;
Or.prototype.InterpolantFactoryMethodSmooth = void 0;
class fs extends yn {
}
fs.prototype.ValueTypeName = "vector";
class tv {
  constructor(e, t = -1, n, i = wp) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = cn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let s = 0, a = n.length; s !== a; ++s)
      t.push(iv(n[s]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let r = 0, s = n.length; r !== s; ++r)
      t.push(yn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, s = [];
    for (let a = 0; a < r; a++) {
      let l = [], c = [];
      l.push(
        (a + r - 1) % r,
        a,
        (a + 1) % r
      ), c.push(0, 1, 0);
      const u = $x(l);
      l = tu(l, 1, u), c = tu(c, 1, u), !i && l[0] === 0 && (l.push(r), c.push(c[0])), s.push(
        new hs(
          ".morphTargetInfluences[" + t[a].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, s);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = c.name.match(r);
      if (u && u.length > 1) {
        const h = u[1];
        let f = i[h];
        f || (i[h] = f = []), f.push(c);
      }
    }
    const s = [];
    for (const a in i)
      s.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return s;
  }
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(h, f, m, g, d) {
      if (m.length !== 0) {
        const p = [], _ = [];
        Gh(m, p, _, g), p.length !== 0 && d.push(new h(f, p, _));
      }
    }, i = [], r = e.name || "default", s = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const f = c[h].keys;
      if (!(!f || f.length === 0))
        if (f[0].morphTargets) {
          const m = {};
          let g;
          for (g = 0; g < f.length; g++)
            if (f[g].morphTargets)
              for (let d = 0; d < f[g].morphTargets.length; d++)
                m[f[g].morphTargets[d]] = -1;
          for (const d in m) {
            const p = [], _ = [];
            for (let y = 0; y !== f[g].morphTargets.length; ++y) {
              const M = f[g];
              p.push(M.time), _.push(M.morphTarget === d ? 1 : 0);
            }
            i.push(new hs(".morphTargetInfluence[" + d + "]", p, _));
          }
          l = m.length * s;
        } else {
          const m = ".bones[" + t[h].name + "]";
          n(
            fs,
            m + ".position",
            f,
            "pos",
            i
          ), n(
            ki,
            m + ".quaternion",
            f,
            "rot",
            i
          ), n(
            fs,
            m + ".scale",
            f,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(r, l, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function nv(o) {
  switch (o.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return hs;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return fs;
    case "color":
      return Hh;
    case "quaternion":
      return ki;
    case "bool":
    case "boolean":
      return Nr;
    case "string":
      return Or;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + o);
}
function iv(o) {
  if (o.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = nv(o.type);
  if (o.times === void 0) {
    const t = [], n = [];
    Gh(o.keys, t, n, "value"), o.times = t, o.values = n;
  }
  return e.parse !== void 0 ? e.parse(o) : new e(o.name, o.times, o.values, o.interpolation);
}
const Lr = {
  enabled: !1,
  files: {},
  add: function(o, e) {
    this.enabled !== !1 && (this.files[o] = e);
  },
  get: function(o) {
    if (this.enabled !== !1)
      return this.files[o];
  },
  remove: function(o) {
    delete this.files[o];
  },
  clear: function() {
    this.files = {};
  }
};
class rv {
  constructor(e, t, n) {
    const i = this;
    let r = !1, s = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      a++, r === !1 && i.onStart !== void 0 && i.onStart(u, s, a), r = !0;
    }, this.itemEnd = function(u) {
      s++, i.onProgress !== void 0 && i.onProgress(u, s, a), s === a && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(u) {
      i.onError !== void 0 && i.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, h) {
      return c.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = c.indexOf(u);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, f = c.length; h < f; h += 2) {
        const m = c[h], g = c[h + 1];
        if (m.global && (m.lastIndex = 0), m.test(u))
          return g;
      }
      return null;
    };
  }
}
const sv = /* @__PURE__ */ new rv();
class xs {
  constructor(e) {
    this.manager = e !== void 0 ? e : sv, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
const Cn = {};
class av extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Wh extends xs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Lr.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (Cn[e] !== void 0) {
      Cn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Cn[e] = [], Cn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const s = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    }), a = this.mimeType, l = this.responseType;
    fetch(s).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const u = Cn[e], h = c.body.getReader(), f = c.headers.get("Content-Length"), m = f ? parseInt(f) : 0, g = m !== 0;
        let d = 0;
        const p = new ReadableStream({
          start(_) {
            y();
            function y() {
              h.read().then(({ done: M, value: v }) => {
                if (M)
                  _.close();
                else {
                  d += v.byteLength;
                  const b = new ProgressEvent("progress", { lengthComputable: g, loaded: d, total: m });
                  for (let E = 0, C = u.length; E < C; E++) {
                    const x = u[E];
                    x.onProgress && x.onProgress(b);
                  }
                  _.enqueue(v), y();
                }
              });
            }
          }
        });
        return new Response(p);
      } else
        throw new av(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((u) => new DOMParser().parseFromString(u, a));
        case "json":
          return c.json();
        default:
          if (a === void 0)
            return c.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(a), f = h && h[1] ? h[1].toLowerCase() : void 0, m = new TextDecoder(f);
            return c.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((c) => {
      Lr.add(e, c);
      const u = Cn[e];
      delete Cn[e];
      for (let h = 0, f = u.length; h < f; h++) {
        const m = u[h];
        m.onLoad && m.onLoad(c);
      }
    }).catch((c) => {
      const u = Cn[e];
      if (u === void 0)
        throw this.manager.itemError(e), c;
      delete Cn[e];
      for (let h = 0, f = u.length; h < f; h++) {
        const m = u[h];
        m.onError && m.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class ov extends xs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = Lr.get(e);
    if (s !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(s), r.manager.itemEnd(e);
      }, 0), s;
    const a = us("img");
    function l() {
      u(), Lr.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(h) {
      u(), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
  }
}
class Xh extends xs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new bt(), s = new ov(this.manager);
    return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(e, function(a) {
      r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class fa extends qe {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new _e(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class lv extends fa {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(qe.DefaultUp), this.updateMatrix(), this.groundColor = new _e(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const nu = /* @__PURE__ */ new De(), iu = /* @__PURE__ */ new R(), ru = /* @__PURE__ */ new R();
class cl {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Le(512, 512), this.map = null, this.mapPass = null, this.matrix = new De(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new nl(), this._frameExtents = new Le(1, 1), this._viewportCount = 1, this._viewports = [
      new He(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    iu.setFromMatrixPosition(e.matrixWorld), t.position.copy(iu), ru.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ru), t.updateMatrixWorld(), nu.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(nu), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class cv extends cl {
  constructor() {
    super(new Mt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = cs * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class uv extends fa {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, s = 1) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(qe.DefaultUp), this.updateMatrix(), this.target = new qe(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.map = null, this.shadow = new cv();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const su = /* @__PURE__ */ new De(), Gr = /* @__PURE__ */ new R(), ro = /* @__PURE__ */ new R();
class hv extends cl {
  constructor() {
    super(new Mt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Le(4, 2), this._viewportCount = 6, this._viewports = [
      new He(2, 1, 1, 1),
      new He(0, 1, 1, 1),
      new He(3, 1, 1, 1),
      new He(1, 1, 1, 1),
      new He(3, 0, 1, 1),
      new He(1, 0, 1, 1)
    ], this._cubeDirections = [
      new R(1, 0, 0),
      new R(-1, 0, 0),
      new R(0, 0, 1),
      new R(0, 0, -1),
      new R(0, 1, 0),
      new R(0, -1, 0)
    ], this._cubeUps = [
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 0, 1),
      new R(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Gr.setFromMatrixPosition(e.matrixWorld), n.position.copy(Gr), ro.copy(n.position), ro.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(ro), n.updateMatrixWorld(), i.makeTranslation(-Gr.x, -Gr.y, -Gr.z), su.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(su);
  }
}
class fv extends fa {
  constructor(e, t, n = 0, i = 1) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new hv();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class dv extends cl {
  constructor() {
    super(new rl(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class qh extends fa {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(qe.DefaultUp), this.updateMatrix(), this.target = new qe(), this.shadow = new dv();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Di {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class pv extends xs {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = Lr.get(e);
    if (s !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(s), r.manager.itemEnd(e);
      }, 0), s;
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      Lr.add(e, l), t && t(l), r.manager.itemEnd(e);
    }).catch(function(l) {
      i && i(l), r.manager.itemError(e), r.manager.itemEnd(e);
    }), r.manager.itemStart(e);
  }
}
const ul = "\\[\\]\\.:\\/", mv = new RegExp("[" + ul + "]", "g"), hl = "[^" + ul + "]", gv = "[^" + ul.replace("\\.", "") + "]", _v = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", hl), xv = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", gv), vv = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", hl), yv = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", hl), Mv = new RegExp(
  "^" + _v + xv + vv + yv + "$"
), bv = ["material", "materials", "bones", "map"];
class Sv {
  constructor(e, t, n) {
    const i = n || ze.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class ze {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || ze.parseTrackName(t), this.node = ze.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new ze.Composite(e, t, n) : new ze(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(mv, "");
  }
  static parseTrackName(e) {
    const t = Mv.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      bv.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let s = 0; s < r.length; s++) {
          const a = r[s];
          if (a.name === t || a.uuid === t)
            return a;
          const l = n(a.children);
          if (l)
            return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = ze.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++)
            if (e[u].name === c) {
              c = u;
              break;
            }
          break;
        case "map":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const s = e[i];
    if (s === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
    } else
      s.fromArray !== void 0 && s.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (l = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
ze.Composite = Sv;
ze.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
ze.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
ze.prototype.GetterByBindingType = [
  ze.prototype._getValue_direct,
  ze.prototype._getValue_array,
  ze.prototype._getValue_arrayElement,
  ze.prototype._getValue_toArray
];
ze.prototype.SetterByBindingTypeAndVersioning = [
  [
    ze.prototype._setValue_direct,
    ze.prototype._setValue_direct_setNeedsUpdate,
    ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    ze.prototype._setValue_array,
    ze.prototype._setValue_array_setNeedsUpdate,
    ze.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    ze.prototype._setValue_arrayElement,
    ze.prototype._setValue_arrayElement_setNeedsUpdate,
    ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    ze.prototype._setValue_fromArray,
    ze.prototype._setValue_fromArray_setNeedsUpdate,
    ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Jo
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Jo);
class wv extends xs {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Lv(t);
    }), this.register(function(t) {
      return new Ov(t);
    }), this.register(function(t) {
      return new Uv(t);
    }), this.register(function(t) {
      return new Pv(t);
    }), this.register(function(t) {
      return new Dv(t);
    }), this.register(function(t) {
      return new Iv(t);
    }), this.register(function(t) {
      return new Fv(t);
    }), this.register(function(t) {
      return new Cv(t);
    }), this.register(function(t) {
      return new Nv(t);
    }), this.register(function(t) {
      return new Rv(t);
    }), this.register(function(t) {
      return new Ev(t);
    }), this.register(function(t) {
      return new zv(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let s;
    this.resourcePath !== "" ? s = this.resourcePath : this.path !== "" ? s = this.path : s = Di.extractUrlBase(e), this.manager.itemStart(e);
    const a = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new Wh(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, s, function(u) {
          t(u), r.manager.itemEnd(e);
        }, a);
      } catch (u) {
        a(u);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let r;
    const s = {}, a = {};
    if (typeof e == "string")
      r = e;
    else if (Di.decodeText(new Uint8Array(e, 0, 4)) === jh) {
      try {
        s[Te.KHR_BINARY_GLTF] = new kv(e);
      } catch (h) {
        i && i(h);
        return;
      }
      r = s[Te.KHR_BINARY_GLTF].content;
    } else
      r = Di.decodeText(new Uint8Array(e));
    const l = JSON.parse(r);
    if (l.asset === void 0 || l.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new Jv(l, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](c);
      a[h.name] = h, s[h.name] = !0;
    }
    if (l.extensionsUsed)
      for (let u = 0; u < l.extensionsUsed.length; ++u) {
        const h = l.extensionsUsed[u], f = l.extensionsRequired || [];
        switch (h) {
          case Te.KHR_MATERIALS_UNLIT:
            s[h] = new Av();
            break;
          case Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            s[h] = new Gv();
            break;
          case Te.KHR_DRACO_MESH_COMPRESSION:
            s[h] = new Bv(l, this.dracoLoader);
            break;
          case Te.KHR_TEXTURE_TRANSFORM:
            s[h] = new Vv();
            break;
          case Te.KHR_MESH_QUANTIZATION:
            s[h] = new Hv();
            break;
          default:
            f.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    c.setExtensions(s), c.setPlugins(a), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function Tv() {
  let o = {};
  return {
    get: function(e) {
      return o[e];
    },
    add: function(e, t) {
      o[e] = t;
    },
    remove: function(e) {
      delete o[e];
    },
    removeAll: function() {
      o = {};
    }
  };
}
const Te = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
};
class Ev {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i)
      return i;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new _e(16777215);
    l.color !== void 0 && u.fromArray(l.color);
    const h = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new qh(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new fv(u), c.distance = h;
        break;
      case "spot":
        c = new uv(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(t.cache, a, l);
    });
  }
}
class Av {
  constructor() {
    this.name = Te.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Ti;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new _e(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const s = r.baseColorFactor;
        e.color.fromArray(s), e.opacity = s[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, Ne));
    }
    return Promise.all(i);
  }
}
class Cv {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class Lv {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], s = i.extensions[this.name];
    if (s.clearcoatFactor !== void 0 && (t.clearcoat = s.clearcoatFactor), s.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", s.clearcoatTexture)), s.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = s.clearcoatRoughnessFactor), s.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", s.clearcoatRoughnessTexture)), s.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)), s.clearcoatNormalTexture.scale !== void 0)) {
      const a = s.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Le(a, a);
    }
    return Promise.all(r);
  }
}
class Rv {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], s = i.extensions[this.name];
    return s.iridescenceFactor !== void 0 && (t.iridescence = s.iridescenceFactor), s.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", s.iridescenceTexture)), s.iridescenceIor !== void 0 && (t.iridescenceIOR = s.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), s.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = s.iridescenceThicknessMinimum), s.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = s.iridescenceThicknessMaximum), s.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", s.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class Pv {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new _e(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const s = i.extensions[this.name];
    return s.sheenColorFactor !== void 0 && t.sheenColor.fromArray(s.sheenColorFactor), s.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = s.sheenRoughnessFactor), s.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", s.sheenColorTexture, Ne)), s.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture)), Promise.all(r);
  }
}
class Dv {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], s = i.extensions[this.name];
    return s.transmissionFactor !== void 0 && (t.transmission = s.transmissionFactor), s.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", s.transmissionTexture)), Promise.all(r);
  }
}
class Iv {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], s = i.extensions[this.name];
    t.thickness = s.thicknessFactor !== void 0 ? s.thicknessFactor : 0, s.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", s.thicknessTexture)), t.attenuationDistance = s.attenuationDistance || 0;
    const a = s.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new _e(a[0], a[1], a[2]), Promise.all(r);
  }
}
class Fv {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gi;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class Nv {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Gi;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], s = i.extensions[this.name];
    t.specularIntensity = s.specularFactor !== void 0 ? s.specularFactor : 1, s.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", s.specularTexture));
    const a = s.specularColorFactor || [1, 1, 1];
    return t.specularColor = new _e(a[0], a[1], a[2]), s.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", s.specularColorTexture, Ne)), Promise.all(r);
  }
}
class Ov {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const r = i.extensions[this.name], s = t.options.ktx2Loader;
    if (!s) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, s);
  }
}
class Uv {
  constructor(e) {
    this.parser = e, this.name = Te.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const s = r.extensions[t], a = i.images[s.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, s.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class zv {
  constructor(e) {
    this.name = Te.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), s = this.parser.options.meshoptDecoder;
      if (!s || !s.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, u = i.count, h = i.byteStride, f = new Uint8Array(a, l, c);
        return s.decodeGltfBufferAsync ? s.decodeGltfBufferAsync(u, h, f, i.mode, i.filter).then(function(m) {
          return m.buffer;
        }) : s.ready.then(function() {
          const m = new ArrayBuffer(u * h);
          return s.decodeGltfBuffer(new Uint8Array(m), u, h, f, i.mode, i.filter), m;
        });
      });
    } else
      return null;
  }
}
const jh = "glTF", Hr = 12, au = { JSON: 1313821514, BIN: 5130562 };
class kv {
  constructor(e) {
    this.name = Te.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Hr);
    if (this.header = {
      magic: Di.decodeText(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== jh)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Hr, i = new DataView(e, Hr);
    let r = 0;
    for (; r < n; ) {
      const s = i.getUint32(r, !0);
      r += 4;
      const a = i.getUint32(r, !0);
      if (r += 4, a === au.JSON) {
        const l = new Uint8Array(e, Hr + r, s);
        this.content = Di.decodeText(l);
      } else if (a === au.BIN) {
        const l = Hr + r;
        this.body = e.slice(l, l + s);
      }
      r += s;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Bv {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Te.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, s = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const u in s) {
      const h = Fo[u] || u.toLowerCase();
      a[h] = s[u];
    }
    for (const u in e.attributes) {
      const h = Fo[u] || u.toLowerCase();
      if (s[u] !== void 0) {
        const f = n.accessors[e.attributes[u]], m = ds[f.componentType];
        c[h] = m.name, l[h] = f.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(u) {
      return new Promise(function(h) {
        i.decodeDracoFile(u, function(f) {
          for (const m in f.attributes) {
            const g = f.attributes[m], d = l[m];
            d !== void 0 && (g.normalized = d);
          }
          h(f);
        }, a, c);
      });
    });
  }
}
class Vv {
  constructor() {
    this.name = Te.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Io extends ha {
  constructor(e) {
    super(), this.isGLTFSpecularGlossinessMaterial = !0;
    const t = [
      "#ifdef USE_SPECULARMAP",
      "	uniform sampler2D specularMap;",
      "#endif"
    ].join(`
`), n = [
      "#ifdef USE_GLOSSINESSMAP",
      "	uniform sampler2D glossinessMap;",
      "#endif"
    ].join(`
`), i = [
      "vec3 specularFactor = specular;",
      "#ifdef USE_SPECULARMAP",
      "	vec4 texelSpecular = texture2D( specularMap, vUv );",
      "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	specularFactor *= texelSpecular.rgb;",
      "#endif"
    ].join(`
`), r = [
      "float glossinessFactor = glossiness;",
      "#ifdef USE_GLOSSINESSMAP",
      "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
      "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	glossinessFactor *= texelGlossiness.a;",
      "#endif"
    ].join(`
`), s = [
      "PhysicalMaterial material;",
      "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
      "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
      "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
      "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
      "material.roughness += geometryRoughness;",
      "material.roughness = min( material.roughness, 1.0 );",
      "material.specularColor = specularFactor;"
    ].join(`
`), a = {
      specular: { value: new _e().setHex(16777215) },
      glossiness: { value: 1 },
      specularMap: { value: null },
      glossinessMap: { value: null }
    };
    this._extraUniforms = a, this.onBeforeCompile = function(l) {
      for (const c in a)
        l.uniforms[c] = a[c];
      l.fragmentShader = l.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", i).replace("#include <metalnessmap_fragment>", r).replace("#include <lights_physical_fragment>", s);
    }, Object.defineProperties(this, {
      specular: {
        get: function() {
          return a.specular.value;
        },
        set: function(l) {
          a.specular.value = l;
        }
      },
      specularMap: {
        get: function() {
          return a.specularMap.value;
        },
        set: function(l) {
          a.specularMap.value = l, l ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP;
        }
      },
      glossiness: {
        get: function() {
          return a.glossiness.value;
        },
        set: function(l) {
          a.glossiness.value = l;
        }
      },
      glossinessMap: {
        get: function() {
          return a.glossinessMap.value;
        },
        set: function(l) {
          a.glossinessMap.value = l, l ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
        }
      }
    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
  }
}
class Gv {
  constructor() {
    this.name = Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = [
      "color",
      "map",
      "lightMap",
      "lightMapIntensity",
      "aoMap",
      "aoMapIntensity",
      "emissive",
      "emissiveIntensity",
      "emissiveMap",
      "bumpMap",
      "bumpScale",
      "normalMap",
      "normalMapType",
      "displacementMap",
      "displacementScale",
      "displacementBias",
      "specularMap",
      "specular",
      "glossinessMap",
      "glossiness",
      "alphaMap",
      "envMap",
      "envMapIntensity"
    ];
  }
  getMaterialType() {
    return Io;
  }
  extendParams(e, t, n) {
    const i = t.extensions[this.name];
    e.color = new _e(1, 1, 1), e.opacity = 1;
    const r = [];
    if (Array.isArray(i.diffuseFactor)) {
      const s = i.diffuseFactor;
      e.color.fromArray(s), e.opacity = s[3];
    }
    if (i.diffuseTexture !== void 0 && r.push(n.assignTexture(e, "map", i.diffuseTexture, Ne)), e.emissive = new _e(0, 0, 0), e.glossiness = i.glossinessFactor !== void 0 ? i.glossinessFactor : 1, e.specular = new _e(1, 1, 1), Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor), i.specularGlossinessTexture !== void 0) {
      const s = i.specularGlossinessTexture;
      r.push(n.assignTexture(e, "glossinessMap", s)), r.push(n.assignTexture(e, "specularMap", s, Ne));
    }
    return Promise.all(r);
  }
  createMaterial(e) {
    const t = new Io(e);
    return t.fog = !0, t.color = e.color, t.map = e.map === void 0 ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = e.aoMap === void 0 ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = e.emissiveIntensity === void 0 ? 1 : e.emissiveIntensity, t.emissiveMap = e.emissiveMap === void 0 ? null : e.emissiveMap, t.bumpMap = e.bumpMap === void 0 ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = e.normalMap === void 0 ? null : e.normalMap, t.normalMapType = Qo, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = e.specularMap === void 0 ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = e.glossinessMap === void 0 ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = e.envMap === void 0 ? null : e.envMap, t.envMapIntensity = 1, t;
  }
}
class Hv {
  constructor() {
    this.name = Te.KHR_MESH_QUANTIZATION;
  }
}
class Yh extends _s {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let s = 0; s !== i; s++)
      t[s] = n[r + s];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = i - t, h = (n - t) / u, f = h * h, m = f * h, g = e * c, d = g - c, p = -2 * m + 3 * f, _ = m - f, y = 1 - p, M = _ - f + h;
    for (let v = 0; v !== a; v++) {
      const b = s[d + v + a], E = s[d + v + l] * u, C = s[g + v + a], x = s[g + v] * u;
      r[v] = y * b + M * E + p * C + _ * x;
    }
    return r;
  }
}
const Wv = new Vi();
class Xv extends Yh {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return Wv.fromArray(r).normalize().toArray(r), r;
  }
}
const Ln = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, ds = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, ou = {
  9728: ht,
  9729: Tt,
  9984: Eo,
  9985: xh,
  9986: Ao,
  9987: Rr
}, lu = {
  33071: jt,
  33648: ia,
  10497: Tr
}, cu = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Fo = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Jn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, qv = {
  CUBICSPLINE: void 0,
  LINEAR: Ar,
  STEP: ls
}, so = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function jv(o) {
  return o.DefaultMaterial === void 0 && (o.DefaultMaterial = new ha({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: Fi
  })), o.DefaultMaterial;
}
function Wr(o, e, t) {
  for (const n in t.extensions)
    o[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function vi(o, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(o.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Yv(o, e, t) {
  let n = !1, i = !1, r = !1;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (n = !0), h.NORMAL !== void 0 && (i = !0), h.COLOR_0 !== void 0 && (r = !0), n && i && r)
      break;
  }
  if (!n && !i && !r)
    return Promise.resolve(o);
  const s = [], a = [], l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (n) {
      const f = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : o.attributes.position;
      s.push(f);
    }
    if (i) {
      const f = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : o.attributes.normal;
      a.push(f);
    }
    if (r) {
      const f = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : o.attributes.color;
      l.push(f);
    }
  }
  return Promise.all([
    Promise.all(s),
    Promise.all(a),
    Promise.all(l)
  ]).then(function(c) {
    const u = c[0], h = c[1], f = c[2];
    return n && (o.morphAttributes.position = u), i && (o.morphAttributes.normal = h), r && (o.morphAttributes.color = f), o.morphTargetsRelative = !0, o;
  });
}
function Kv(o, e) {
  if (o.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      o.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (o.morphTargetInfluences.length === t.length) {
      o.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        o.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function $v(o) {
  const e = o.extensions && o.extensions[Te.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + uu(e.attributes) : t = o.indices + ":" + uu(o.attributes) + ":" + o.mode, t;
}
function uu(o) {
  let e = "";
  const t = Object.keys(o).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + o[t[n]] + ";";
  return e;
}
function No(o) {
  switch (o) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Zv(o) {
  return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
class Jv {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Tv(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    const n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    typeof createImageBitmap > "u" || n || i && r < 98 ? this.textureLoader = new Xh(this.options.manager) : this.textureLoader = new pv(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Wh(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(s) {
      return s._markDefs && s._markDefs();
    }), Promise.all(this._invokeAll(function(s) {
      return s.beforeRoot && s.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(s) {
      const a = {
        scene: s[0][i.scene || 0],
        scenes: s[0],
        animations: s[1],
        cameras: s[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      Wr(r, a, i), vi(a, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i].joints;
      for (let a = 0, l = s.length; a < l; a++)
        e[s[a]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      s.mesh !== void 0 && (this._addNodeRef(this.meshCache, s.mesh), s.skin !== void 0 && (n[s.mesh].isSkinnedMesh = !0)), s.camera !== void 0 && this._addNodeRef(this.cameraCache, s.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const i = n.clone(), r = (s, a) => {
      const l = this.associations.get(s);
      l != null && this.associations.set(a, l);
      for (const [c, u] of s.children.entries())
        r(u, a.children[c]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i)
        return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this.loadNode(t);
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          throw new Error("Unknown type: " + e);
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, s) {
        return n.getDependency(e, s);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Te.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, s) {
      n.load(Di.resolveURL(t.uri, i.path), r, void 0, function() {
        s(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0)
      return Promise.resolve(null);
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(s) {
      const a = s[0], l = cu[i.type], c = ds[i.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, f = i.byteOffset || 0, m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let d, p;
      if (m && m !== h) {
        const _ = Math.floor(f / m), y = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + _ + ":" + i.count;
        let M = t.cache.get(y);
        M || (d = new c(a, _ * m, i.count * m / u), M = new Gx(d, m / u), t.cache.add(y, M)), p = new al(M, l, f % m / u, g);
      } else
        a === null ? d = new c(i.count * l) : d = new c(a, f, i.count * l), p = new zt(d, l, g);
      if (i.sparse !== void 0) {
        const _ = cu.SCALAR, y = ds[i.sparse.indices.componentType], M = i.sparse.indices.byteOffset || 0, v = i.sparse.values.byteOffset || 0, b = new y(s[1], M, i.sparse.count * _), E = new c(s[2], v, i.sparse.count * l);
        a !== null && (p = new zt(p.array.slice(), p.itemSize, p.normalized));
        for (let C = 0, x = b.length; C < x; C++) {
          const w = b[C];
          if (p.setX(w, E[C * l]), l >= 2 && p.setY(w, E[C * l + 1]), l >= 3 && p.setZ(w, E[C * l + 2]), l >= 4 && p.setW(w, E[C * l + 3]), l >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return p;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, s = t.images[r];
    let a = this.textureLoader;
    if (s.uri) {
      const l = n.manager.getHandler(s.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, r, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, s = r.textures[e], a = r.images[t], l = (a.uri || a.bufferView) + ":" + s.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = !1, s.name && (u.name = s.name);
      const f = (r.samplers || {})[s.sampler] || {};
      return u.magFilter = ou[f.magFilter] || Tt, u.minFilter = ou[f.minFilter] || Rr, u.wrapS = lu[f.wrapS] || Tr, u.wrapT = lu[f.wrapT] || Tr, i.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const s = i.images[e], a = self.URL || self.webkitURL;
    let l = s.uri || "", c = !1;
    if (s.bufferView !== void 0)
      l = n.getDependency("bufferView", s.bufferView).then(function(h) {
        c = !0;
        const f = new Blob([h], { type: s.mimeType });
        return l = a.createObjectURL(f), l;
      });
    else if (s.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(l).then(function(h) {
      return new Promise(function(f, m) {
        let g = f;
        t.isImageBitmapLoader === !0 && (g = function(d) {
          const p = new bt(d);
          p.needsUpdate = !0, f(p);
        }), t.load(Di.resolveURL(h, r.path), g, void 0, m);
      });
    }).then(function(h) {
      return c === !0 && a.revokeObjectURL(l), h.userData.mimeType = s.mimeType || Zv(s.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), h;
    });
    return this.sourceCache[e] = u, u;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(s) {
      if (n.texCoord !== void 0 && n.texCoord != 0 && !(t === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."), r.extensions[Te.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Te.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = r.associations.get(s);
          s = r.extensions[Te.KHR_TEXTURE_TRANSFORM].extendTexture(s, a), r.associations.set(s, l);
        }
      }
      return i !== void 0 && (s.encoding = i), e[t] = s, s;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, s = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new Bh(), _n.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new kh(), _n.prototype.copy.call(l, n), l.color.copy(n.color), this.cache.add(a, l)), n = l;
    }
    if (i || r || s) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      n.isGLTFSpecularGlossinessMaterial && (a += "specular-glossiness:"), i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), s && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), r && (l.vertexColors = !0), s && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    n.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = n;
  }
  getMaterialType() {
    return ha;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let s;
    const a = {}, l = r.extensions || {}, c = [];
    if (l[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const h = i[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      s = h.getMaterialType(), c.push(h.extendParams(a, r, t));
    } else if (l[Te.KHR_MATERIALS_UNLIT]) {
      const h = i[Te.KHR_MATERIALS_UNLIT];
      s = h.getMaterialType(), c.push(h.extendParams(a, r, t));
    } else {
      const h = r.pbrMetallicRoughness || {};
      if (a.color = new _e(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const f = h.baseColorFactor;
        a.color.fromArray(f), a.opacity = f[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", h.baseColorTexture, Ne)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), s = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = Nn);
    const u = r.alphaMode || so.OPAQUE;
    if (u === so.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, u === so.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && s !== Ti && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new Le(1, 1), r.normalTexture.scale !== void 0)) {
      const h = r.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    return r.occlusionTexture !== void 0 && s !== Ti && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && s !== Ti && (a.emissive = new _e().fromArray(r.emissiveFactor)), r.emissiveTexture !== void 0 && s !== Ti && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, Ne)), Promise.all(c).then(function() {
      let h;
      return s === Io ? h = i[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : h = new s(a), r.name && (h.name = r.name), vi(h, r), t.associations.set(h, { materials: e }), r.extensions && Wr(i, h, r), h;
    });
  }
  createUniqueName(e) {
    const t = ze.sanitizeNodeName(e || "");
    let n = t;
    for (let i = 1; this.nodeNamesUsed[n]; ++i)
      n = t + "_" + i;
    return this.nodeNamesUsed[n] = !0, n;
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(a) {
      return n[Te.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return hu(l, a, t);
      });
    }
    const s = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], u = $v(c), h = i[u];
      if (h)
        s.push(h.promise);
      else {
        let f;
        c.extensions && c.extensions[Te.KHR_DRACO_MESH_COMPRESSION] ? f = r(c) : f = hu(new vn(), c, t), i[u] = { primitive: c, promise: f }, s.push(f);
      }
    }
    return Promise.all(s);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], s = r.primitives, a = [];
    for (let l = 0, c = s.length; l < c; l++) {
      const u = s[l].material === void 0 ? jv(this.cache) : this.getDependency("material", s[l].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(s)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
      for (let m = 0, g = u.length; m < g; m++) {
        const d = u[m], p = s[m];
        let _;
        const y = c[m];
        if (p.mode === Ln.TRIANGLES || p.mode === Ln.TRIANGLE_STRIP || p.mode === Ln.TRIANGLE_FAN || p.mode === void 0)
          _ = r.isSkinnedMesh === !0 ? new Wx(d, y) : new mn(d, y), _.isSkinnedMesh === !0 && !_.geometry.attributes.skinWeight.normalized && _.normalizeSkinWeights(), p.mode === Ln.TRIANGLE_STRIP ? _.geometry = fu(_.geometry, Tp) : p.mode === Ln.TRIANGLE_FAN && (_.geometry = fu(_.geometry, yh));
        else if (p.mode === Ln.LINES)
          _ = new jx(d, y);
        else if (p.mode === Ln.LINE_STRIP)
          _ = new ll(d, y);
        else if (p.mode === Ln.LINE_LOOP)
          _ = new Yx(d, y);
        else if (p.mode === Ln.POINTS)
          _ = new Kx(d, y);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
        Object.keys(_.geometry.morphAttributes).length > 0 && Kv(_, r), _.name = t.createUniqueName(r.name || "mesh_" + e), vi(_, r), p.extensions && Wr(i, _, p), t.assignFinalMaterial(_), h.push(_);
      }
      for (let m = 0, g = h.length; m < g; m++)
        t.associations.set(h[m], {
          meshes: e,
          primitives: m
        });
      if (h.length === 1)
        return h[0];
      const f = new Ei();
      t.associations.set(f, { meshes: e });
      for (let m = 0, g = h.length; m < g; m++)
        f.add(h[m]);
      return f;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Mt(Hp.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new rl(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), vi(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = { joints: t.joints };
    return t.inverseBindMatrices === void 0 ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then(function(i) {
      return n.inverseBindMatrices = i, n;
    });
  }
  loadAnimation(e) {
    const n = this.json.animations[e], i = [], r = [], s = [], a = [], l = [];
    for (let c = 0, u = n.channels.length; c < u; c++) {
      const h = n.channels[c], f = n.samplers[h.sampler], m = h.target, g = m.node, d = n.parameters !== void 0 ? n.parameters[f.input] : f.input, p = n.parameters !== void 0 ? n.parameters[f.output] : f.output;
      i.push(this.getDependency("node", g)), r.push(this.getDependency("accessor", d)), s.push(this.getDependency("accessor", p)), a.push(f), l.push(m);
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(r),
      Promise.all(s),
      Promise.all(a),
      Promise.all(l)
    ]).then(function(c) {
      const u = c[0], h = c[1], f = c[2], m = c[3], g = c[4], d = [];
      for (let _ = 0, y = u.length; _ < y; _++) {
        const M = u[_], v = h[_], b = f[_], E = m[_], C = g[_];
        if (M === void 0)
          continue;
        M.updateMatrix();
        let x;
        switch (Jn[C.path]) {
          case Jn.weights:
            x = hs;
            break;
          case Jn.rotation:
            x = ki;
            break;
          case Jn.position:
          case Jn.scale:
          default:
            x = fs;
            break;
        }
        const w = M.name ? M.name : M.uuid, L = E.interpolation !== void 0 ? qv[E.interpolation] : Ar, z = [];
        Jn[C.path] === Jn.weights ? M.traverse(function(N) {
          N.morphTargetInfluences && z.push(N.name ? N.name : N.uuid);
        }) : z.push(w);
        let K = b.array;
        if (b.normalized) {
          const N = No(K.constructor), P = new Float32Array(K.length);
          for (let k = 0, q = K.length; k < q; k++)
            P[k] = K[k] * N;
          K = P;
        }
        for (let N = 0, P = z.length; N < P; N++) {
          const k = new x(
            z[N] + "." + Jn[C.path],
            v.array,
            K,
            L
          );
          E.interpolation === "CUBICSPLINE" && (k.createInterpolant = function(G) {
            const B = this instanceof ki ? Xv : Yh;
            return new B(this.times, this.values, this.getValueSize() / 3, G);
          }, k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), d.push(k);
        }
      }
      const p = n.name ? n.name : "animation_" + e;
      return new tv(p, void 0, d);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const s = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && s.traverse(function(a) {
        if (!!a.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            a.morphTargetInfluences[l] = i.weights[l];
      }), s;
    });
  }
  loadNode(e) {
    const t = this.json, n = this.extensions, i = this, r = t.nodes[e], s = r.name ? i.createUniqueName(r.name) : "";
    return function() {
      const a = [], l = i._invokeOne(function(c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
      return l && a.push(l), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function(c) {
        return i._getNodeRef(i.cameraCache, r.camera, c);
      })), i._invokeAll(function(c) {
        return c.createNodeAttachment && c.createNodeAttachment(e);
      }).forEach(function(c) {
        a.push(c);
      }), Promise.all(a);
    }().then(function(a) {
      let l;
      if (r.isBone === !0 ? l = new zh() : a.length > 1 ? l = new Ei() : a.length === 1 ? l = a[0] : l = new qe(), l !== a[0])
        for (let c = 0, u = a.length; c < u; c++)
          l.add(a[c]);
      if (r.name && (l.userData.name = r.name, l.name = s), vi(l, r), r.extensions && Wr(n, l, r), r.matrix !== void 0) {
        const c = new De();
        c.fromArray(r.matrix), l.applyMatrix4(c);
      } else
        r.translation !== void 0 && l.position.fromArray(r.translation), r.rotation !== void 0 && l.quaternion.fromArray(r.rotation), r.scale !== void 0 && l.scale.fromArray(r.scale);
      return i.associations.has(l) || i.associations.set(l, {}), i.associations.get(l).nodes = e, l;
    });
  }
  loadScene(e) {
    const t = this.json, n = this.extensions, i = this.json.scenes[e], r = this, s = new Ei();
    i.name && (s.name = r.createUniqueName(i.name)), vi(s, i), i.extensions && Wr(n, s, i);
    const a = i.nodes || [], l = [];
    for (let c = 0, u = a.length; c < u; c++)
      l.push(Kh(a[c], s, t, r));
    return Promise.all(l).then(function() {
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [f, m] of r.associations)
          (f instanceof _n || f instanceof bt) && h.set(f, m);
        return u.traverse((f) => {
          const m = r.associations.get(f);
          m != null && h.set(f, m);
        }), h;
      };
      return r.associations = c(s), s;
    });
  }
}
function Kh(o, e, t, n) {
  const i = t.nodes[o];
  return n.getDependency("node", o).then(function(r) {
    if (i.skin === void 0)
      return r;
    let s;
    return n.getDependency("skin", i.skin).then(function(a) {
      s = a;
      const l = [];
      for (let c = 0, u = s.joints.length; c < u; c++)
        l.push(n.getDependency("node", s.joints[c]));
      return Promise.all(l);
    }).then(function(a) {
      return r.traverse(function(l) {
        if (!l.isMesh)
          return;
        const c = [], u = [];
        for (let h = 0, f = a.length; h < f; h++) {
          const m = a[h];
          if (m) {
            c.push(m);
            const g = new De();
            s.inverseBindMatrices !== void 0 && g.fromArray(s.inverseBindMatrices.array, h * 16), u.push(g);
          } else
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', s.joints[h]);
        }
        l.bind(new ol(c, u), l.matrixWorld);
      }), r;
    });
  }).then(function(r) {
    e.add(r);
    const s = [];
    if (i.children) {
      const a = i.children;
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        s.push(Kh(u, r, t, n));
      }
    }
    return Promise.all(s);
  });
}
function Qv(o, e, t) {
  const n = e.attributes, i = new Dr();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new R(l[0], l[1], l[2]),
        new R(c[0], c[1], c[2])
      ), a.normalized) {
        const u = No(ds[a.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const r = e.targets;
  if (r !== void 0) {
    const a = new R(), l = new R();
    for (let c = 0, u = r.length; c < u; c++) {
      const h = r[c];
      if (h.POSITION !== void 0) {
        const f = t.json.accessors[h.POSITION], m = f.min, g = f.max;
        if (m !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))), f.normalized) {
            const d = No(ds[f.componentType]);
            l.multiplyScalar(d);
          }
          a.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  o.boundingBox = i;
  const s = new Ir();
  i.getCenter(s.center), s.radius = i.min.distanceTo(i.max) / 2, o.boundingSphere = s;
}
function hu(o, e, t) {
  const n = e.attributes, i = [];
  function r(s, a) {
    return t.getDependency("accessor", s).then(function(l) {
      o.setAttribute(a, l);
    });
  }
  for (const s in n) {
    const a = Fo[s] || s.toLowerCase();
    a in o.attributes || i.push(r(n[s], a));
  }
  if (e.indices !== void 0 && !o.index) {
    const s = t.getDependency("accessor", e.indices).then(function(a) {
      o.setIndex(a);
    });
    i.push(s);
  }
  return vi(o, e), Qv(o, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Yv(o, e.targets, t) : o;
  });
}
function fu(o, e) {
  let t = o.getIndex();
  if (t === null) {
    const s = [], a = o.getAttribute("position");
    if (a !== void 0) {
      for (let l = 0; l < a.count; l++)
        s.push(l);
      o.setIndex(s), t = o.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), o;
  }
  const n = t.count - 2, i = [];
  if (e === yh)
    for (let s = 1; s <= n; s++)
      i.push(t.getX(0)), i.push(t.getX(s)), i.push(t.getX(s + 1));
  else
    for (let s = 0; s < n; s++)
      s % 2 === 0 ? (i.push(t.getX(s)), i.push(t.getX(s + 1)), i.push(t.getX(s + 2))) : (i.push(t.getX(s + 2)), i.push(t.getX(s + 1)), i.push(t.getX(s)));
  i.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const r = o.clone();
  return r.setIndex(i), r;
}
const ey = { class: "g-relative" }, ty = {
  key: 0,
  class: "g-absolute g-right-0 g-bottom-0 g-space-x-1"
}, ny = { key: 0 }, iy = { key: 1 }, ry = { key: 0 }, sy = { key: 1 }, ay = { key: 0 }, oy = { key: 1 }, ly = /* @__PURE__ */ du({
  __name: "WelcomeAnimation",
  props: {
    aspectRatio: { type: String, default: "16 / 9" },
    sceneBackgroundUrl: String,
    sceneSettings: String
  },
  emits: ["paused", "played"],
  setup(o, { expose: e, emit: t }) {
    const n = o;
    let i, r, s, a, l, c, u, h, f, m, g, d;
    const p = dt("intro");
    dt(1);
    const _ = dt(0.5), y = dt(0), M = dt(0), v = dt(0), b = dt(0), E = dt(0), C = dt(0), x = dt(!1), w = dt(`${lf}/guide-book.gltf`), L = dt(null), z = dt({
      animation: {
        rotation: {
          x: 0,
          y: 0,
          z: 0,
          xSineMax: 0
        }
      },
      camera: {
        fov: 60,
        near: 0.1,
        far: 30,
        position: {
          x: 0,
          y: 10,
          z: 0
        },
        rotation: {
          x: 4.7,
          y: 0,
          z: 0
        }
      },
      lights: {
        ambient: {
          groundColor: 2236962,
          intensity: 1,
          skyColor: 16777215
        },
        directional: {
          color: 16777215,
          intensity: 4,
          position: {
            x: 10,
            y: 10,
            z: 10
          }
        }
      },
      object: {
        scale: {
          x: 1,
          y: 1,
          z: 1
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0
        }
      },
      scene: {
        bgColor: "rgb(35, 31, 32)"
      }
    }), K = dt();
    pl(() => {
      const Z = n.aspectRatio.split(" ");
      return `${parseFloat(Z[2]) / parseFloat(Z[0]) * 100}%`;
    });
    const N = pl(() => !1);
    function P() {
      if (f && m && g) {
        x.value = !0, p.value = "animating";
        const Z = 3;
        an.to(f.rotation, {
          duration: Z,
          z: 1.9,
          ease: "elastic.out(1, 0.3)",
          onComplete: () => {
            p.value = "opened";
          }
        }), an.to(m.rotation, {
          duration: Z,
          z: 0.15,
          ease: "elastic.out(1, 0.3)"
        }), an.to(g.rotation, {
          duration: Z,
          z: 0.02,
          ease: "elastic.out(1, 0.3)"
        });
      }
    }
    function k() {
      if (f && m && g) {
        x.value = !0, p.value = "animating";
        const Z = 1;
        an.to(f.rotation, {
          duration: Z,
          z: 0,
          ease: "power4.in",
          onComplete: () => {
            p.value = "closed";
          }
        }), an.to(m.rotation, {
          duration: Z,
          z: -0.05,
          ease: "power4.in"
        }), an.to(g.rotation, {
          duration: Z,
          z: -0.05,
          ease: "power4.in"
        });
      }
    }
    function q() {
      if (h) {
        p.value = "animating";
        const Z = 1.2;
        an.to(h.position, {
          duration: Z,
          x: 0,
          startAt: {
            x: -10
          },
          ease: "power2.out",
          onComplete: () => {
            p.value = "closed";
          }
        }), an.to(h.rotation, {
          duration: Z,
          y: Math.random() - 0.5,
          startAt: {
            y: Math.random() - 0.5
          },
          ease: "power2.out"
        }), setTimeout(() => {
          x.value || P();
        }, 2500), setTimeout(() => {
          J();
        }, 5e3);
      }
    }
    function G(Z) {
      if (s) {
        switch (Z) {
          case "xUp":
            s.position.x += _.value;
            break;
          case "xDown":
            s.position.x -= _.value;
            break;
          case "yUp":
            s.position.y += _.value;
            break;
          case "yDown":
            s.position.y -= _.value;
            break;
          case "zUp":
            s.position.z += _.value;
            break;
          case "zDown":
            s.position.z -= _.value;
            break;
          case "xRotateUp":
            s.rotation.x += _.value;
            break;
          case "xRotateDown":
            s.rotation.x -= _.value;
            break;
          case "yRotateUp":
            s.rotation.y += _.value;
            break;
          case "yRotateDown":
            s.rotation.y -= _.value;
            break;
          case "zRotateUp":
            s.rotation.z += _.value;
            break;
          case "zRotateDown":
            s.rotation.z -= _.value;
            break;
          case "i0_1":
            _.value = 0.1;
            break;
          case "i0_5":
            _.value = 0.5;
            break;
          case "i1":
            _.value = 1;
            break;
        }
        y.value = s.position.x, M.value = s.position.y, v.value = s.position.z, b.value = s.rotation.x, E.value = s.rotation.y, C.value = s.rotation.z, yi(
          "Camera",
          `position x: ${s.position.x}`,
          `position y: ${s.position.y}`,
          `position z: ${s.position.z}`,
          `rotation x: ${s.rotation.x}`,
          `rotation y: ${s.rotation.y}`,
          `rotation z: ${s.rotation.z}`
        );
      }
    }
    function B() {
      r = K.value;
      const Z = z.value.camera.fov, $ = r.clientWidth / r.clientHeight, re = z.value.camera.near, Y = z.value.camera.far;
      s = new Mt(Z, $, re, Y), s.position.set(
        z.value.camera.position.x,
        z.value.camera.position.y,
        z.value.camera.position.z
      ), s.rotation.set(
        z.value.camera.rotation.x,
        z.value.camera.rotation.y,
        z.value.camera.rotation.z
      ), u = new Vx(), u.background = new _e(z.value.scene.bgColor), n.sceneBackgroundUrl && (u.background = new Xh().load(n.sceneBackgroundUrl)), i = new lv(
        z.value.lights.ambient.skyColor,
        z.value.lights.ambient.groundColor,
        z.value.lights.ambient.intensity
      ), a = new qh(
        z.value.lights.directional.color,
        z.value.lights.directional.intensity
      ), a.position.set(
        z.value.lights.directional.position.x,
        z.value.lights.directional.position.y,
        z.value.lights.directional.position.z
      ), u.add(i, a), c = new Uh({ antialias: !0, powerPreference: "high-performance" }), c.setSize(r.clientWidth, r.clientHeight), c.setPixelRatio(window.devicePixelRatio), c.outputEncoding = Ne, c.physicallyCorrectLights = !0, r.appendChild(c.domElement), s.aspect = r.clientWidth / r.clientHeight, s.updateProjectionMatrix(), c.setSize(r.clientWidth, r.clientHeight), new wv().load(
        w.value,
        (me) => {
          if (l = me, l.scene.scale.set(
            z.value.object.scale.x,
            z.value.object.scale.y,
            z.value.object.scale.z
          ), l.scene.rotation.set(
            z.value.object.rotation.x,
            z.value.object.rotation.y,
            z.value.object.rotation.z
          ), u.add(l.scene), of) {
            const fe = [];
            l.scene.traverse((oe) => {
              fe.push(oe);
            }), yi("Scened objects", fe);
          }
          h = l.scene.getObjectByName("Scene"), f = l.scene.getObjectByName("Top"), m = l.scene.getObjectByName("Loose"), g = l.scene.getObjectByName("Loose_2"), q(), yi("Objects from scene", f, m, g);
        },
        void 0,
        void 0
      ), c.setAnimationLoop(() => {
        l && c.render(u, s);
      }), L.value = new ResizeObserver((me) => {
        for (const fe of me) {
          if (r.clientWidth, r.clientHeight, fe.contentBoxSize) {
            const oe = Array.isArray(fe.contentBoxSize) ? fe.contentBoxSize[0] : fe.contentBoxSize;
            oe.inlineSize, oe.blockSize;
          } else
            fe.contentRect.width, fe.contentRect.height;
          s.aspect = r.clientWidth / r.clientHeight, s.updateProjectionMatrix(), c.setSize(window.innerWidth, window.innerHeight);
        }
        yi("Size changed");
      }), L.value && K.value && L.value.observe(K.value);
    }
    function F() {
      p.value === "opened" ? k() : p.value === "closed" && P();
    }
    function O() {
      d && (d.pause(), t("paused"));
    }
    function ee() {
      d && (d.play(), t("played"));
    }
    function J() {
      if (s) {
        const Z = [];
        d = an.timeline({
          onComplete: function() {
            an.set(h.rotation, {
              y: () => Math.random() - 0.5
            }), this.restart();
          }
        }), Z.push("leftToRight"), Z.push("zoomFromTop"), Z.push("downRightSide"), Z.push("acrossFront"), Z.push("cornerUp"), Z.includes("leftToRight") && d.add("leftToRight").set(
          s.position,
          {
            x: -15,
            y: 0.7,
            z: 5
          },
          "leftToRight"
        ).set(
          s.rotation,
          {
            x: 0,
            y: 0,
            z: 0
          },
          "leftToRight"
        ).to(
          s.position,
          {
            x: 15,
            y: 0.7,
            z: 5,
            ease: "power1.inOut",
            duration: 16
          },
          "leftToRight"
        ).to(
          s.rotation,
          {
            x: 0,
            y: 0,
            z: 0,
            duration: 16
          },
          "leftToRight"
        ), Z.includes("zoomFromTop") && d.add("zoomFromTop").set(
          s.position,
          {
            x: 0,
            y: 31,
            z: 0
          },
          "zoomFromTop"
        ).set(
          s.rotation,
          {
            x: 4.7,
            y: 0,
            z: 0
          },
          "zoomFromTop"
        ).to(
          s.position,
          {
            x: 0,
            y: 1,
            z: 1.5,
            ease: "power4.out",
            duration: 15
          },
          "zoomFromTop"
        ).to(
          s.rotation,
          {
            x: 5.99,
            y: 0,
            z: 0,
            ease: "power1.in",
            duration: 15
          },
          "zoomFromTop"
        ), Z.includes("downRightSide") && d.add("downRightSide").set(
          s.position,
          {
            x: 6.3,
            y: 1,
            z: -13
          },
          "downRightSide"
        ).set(
          s.rotation,
          {
            x: -6.66,
            y: 1.499,
            z: 0
          },
          "downRightSide"
        ).to(
          s.position,
          {
            x: 4.3,
            y: 1,
            z: 4.447071,
            ease: "power1.inOut",
            duration: 10
          },
          "downRightSide"
        ).to(
          s.rotation,
          {
            x: -6.46,
            y: 1.299,
            z: 0,
            ease: "power1.inOut",
            duration: 10
          },
          "downRightSide"
        ), Z.includes("acrossFront") && d.add("acrossFront").set(
          s.position,
          {
            x: 0,
            y: 2,
            z: -5.5
          },
          "acrossFront"
        ).set(
          s.rotation,
          {
            x: 4.7,
            y: 0,
            z: 0
          },
          "acrossFront"
        ).to(
          s.position,
          {
            x: 0,
            y: 2,
            z: 5.5,
            ease: "power1.inOut",
            duration: 15
          },
          "acrossFront"
        ).to(
          s.rotation,
          {
            x: 4.7,
            y: 0,
            z: 0,
            ease: "power1.inOut",
            duration: 15
          },
          "acrossFront"
        ), Z.includes("cornerUp") && d.add("cornerUp").set(
          s.position,
          {
            x: 3.499,
            y: 0,
            z: 3.1
          },
          "cornerUp"
        ).set(
          s.rotation,
          {
            x: 6.7,
            y: 0.8,
            z: -0.3
          },
          "cornerUp"
        ).to(
          s.position,
          {
            x: 2.99,
            y: 1.8,
            z: 2.7,
            ease: "power1.inOut",
            duration: 15
          },
          "cornerUp"
        ).to(
          s.rotation,
          {
            x: 5.5,
            y: 0.8,
            z: 0.7,
            ease: "power1.inOut",
            duration: 15
          },
          "cornerUp"
        );
      }
    }
    return pu(() => {
      yi("WelcomeAnimation loaded"), B();
    }), tf(() => {
      L.value && L.value.disconnect();
    }), e({
      pause: O,
      play: ee
    }), (Z, $) => (Ft(), qt("div", ey, [
      Pe("div", {
        id: "scene-container",
        ref_key: "sceneContainer",
        ref: K,
        class: "g-absolute g-inset-0",
        onClick: F
      }, null, 512),
      ao(N) ? (Ft(), qt("div", ty, [
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[0] || ($[0] = (re) => G("status"))
        }, "\u23FA", 32),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[1] || ($[1] = (re) => G("i0_1"))
        }, [
          _.value === 0.1 ? (Ft(), qt("b", ny, "0.1")) : (Ft(), qt("span", iy, "0.1"))
        ], 32),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[2] || ($[2] = (re) => G("i0_5"))
        }, [
          _.value === 0.5 ? (Ft(), qt("b", ry, "0.5")) : (Ft(), qt("span", sy, "0.5"))
        ], 32),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[3] || ($[3] = (re) => G("i1"))
        }, [
          _.value === 1 ? (Ft(), qt("b", ay, "1")) : (Ft(), qt("span", oy, "1"))
        ], 32),
        Pe("span", null, "X: " + Qn(y.value), 1),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[4] || ($[4] = (re) => G("xUp"))
        }, "\u2B06\uFE0F", 32),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[5] || ($[5] = (re) => G("xDown"))
        }, "\u2B07\uFE0F", 32),
        Pe("span", null, "Y: " + Qn(M.value), 1),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[6] || ($[6] = (re) => G("yUp"))
        }, "\u2B06\uFE0F", 32),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[7] || ($[7] = (re) => G("yDown"))
        }, "\u2B07\uFE0F", 32),
        Pe("span", null, "Z: " + Qn(v.value), 1),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[8] || ($[8] = (re) => G("zUp"))
        }, "\u2B06\uFE0F", 32),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[9] || ($[9] = (re) => G("zDown"))
        }, "\u2B07\uFE0F", 32),
        Pe("span", null, "Rotate X: " + Qn(b.value), 1),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[10] || ($[10] = (re) => G("xRotateUp"))
        }, "\u2B06\uFE0F", 32),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[11] || ($[11] = (re) => G("xRotateDown"))
        }, "\u2B07\uFE0F", 32),
        Pe("span", null, "Rotate Y: " + Qn(E.value), 1),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[12] || ($[12] = (re) => G("yRotateUp"))
        }, "\u2B06\uFE0F", 32),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[13] || ($[13] = (re) => G("yRotateDown"))
        }, "\u2B07\uFE0F", 32),
        Pe("span", null, "Rotate Z: " + Qn(C.value), 1),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[14] || ($[14] = (re) => G("zRotateUp"))
        }, "\u2B06\uFE0F", 32),
        Pe("button", {
          class: "btn small",
          type: "button",
          onMousedown: $[15] || ($[15] = (re) => G("zRotateDown"))
        }, "\u2B07\uFE0F", 32)
      ])) : nf("", !0)
    ]));
  }
});
const cy = /* @__PURE__ */ sa(ly, [["__file", "WelcomeAnimation.vue"]]), uy = { class: "g-fixed g-inset-0 g-w-full g-h-screen g-bg-white g-z-[500]" }, hy = {
  class: "g-grid g-grid-rows-[var(--grid-rows)] g-h-full",
  style: { "--grid-rows": "1fr auto" }
}, fy = { class: "g-flex g-items-center g-justify-between g-gap-6 g-p-6 g-bg-matrix-titlebar" }, dy = { class: "control-button" }, py = ["href"], my = /* @__PURE__ */ du({
  __name: "GuideWelcome",
  props: {
    skipUrl: String
  },
  setup(o) {
    const e = dt(!0), t = dt();
    function n() {
      t.value && t.value.pause();
    }
    function i() {
      t.value && t.value.play();
    }
    return pu(() => {
      yi("GuideWelcome loaded");
    }), (r, s) => (Ft(), rf(sf, { to: "body" }, [
      Pe("div", uy, [
        Pe("div", hy, [
          ga(cy, {
            ref_key: "animation",
            ref: t,
            class: "g-object-cover g-overflow-hidden",
            onPaused: s[0] || (s[0] = (a) => e.value = !1),
            onPlayed: s[1] || (s[1] = (a) => e.value = !0)
          }, null, 512),
          Pe("div", fy, [
            Pe("div", dy, [
              e.value ? (Ft(), qt("button", {
                key: 0,
                type: "button",
                onClick: n
              }, [
                ga(pf, { class: "g-inline-block g-w-8 g-h-8" })
              ])) : (Ft(), qt("button", {
                key: 1,
                type: "button",
                onClick: i
              }, [
                ga(yf, { class: "g-inline-block g-w-8 g-h-8" })
              ]))
            ]),
            Pe("div", null, [
              Pe("p", null, Qn(ao(ml).WELCOME_MESSAGE), 1)
            ]),
            Pe("a", {
              class: "btn submit icon go",
              href: o.skipUrl,
              style: { "--ui-control-color": "currentColor" }
            }, Qn(ao(ml).WELCOME_BUTTON_LABEL), 9, py)
          ])
        ])
      ])
    ]));
  }
});
const gy = /* @__PURE__ */ sa(my, [["__scopeId", "data-v-f9f4f1f3"], ["__file", "GuideWelcome.vue"]]);
async function vy() {
  const o = document.getElementById("guide-welcome");
  o && af(gy, {
    ...o.dataset
  }).mount(o), yi("Welcome loaded");
}
export {
  vy as default
};
