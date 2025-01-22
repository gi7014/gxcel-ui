var zt = typeof global == "object" && global && global.Object === Object && global, yr = typeof self == "object" && self && self.Object === Object && self, b = zt || yr || Function("return this")(), y = b.Symbol, Gt = Object.prototype, vr = Gt.hasOwnProperty, Tr = Gt.toString, N = y ? y.toStringTag : void 0;
function _r(t) {
  var r = vr.call(t, N), e = t[N];
  try {
    t[N] = void 0;
    var n = !0;
  } catch {
  }
  var a = Tr.call(t);
  return n && (r ? t[N] = e : delete t[N]), a;
}
var mr = Object.prototype, $r = mr.toString;
function jr(t) {
  return $r.call(t);
}
var Or = "[object Null]", wr = "[object Undefined]", dt = y ? y.toStringTag : void 0;
function w(t) {
  return t == null ? t === void 0 ? wr : Or : dt && dt in Object(t) ? _r(t) : jr(t);
}
function A(t) {
  return t != null && typeof t == "object";
}
var Ar = "[object Symbol]";
function H(t) {
  return typeof t == "symbol" || A(t) && w(t) == Ar;
}
function Ht(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length, a = Array(n); ++e < n; )
    a[e] = r(t[e], e, t);
  return a;
}
var $ = Array.isArray, ht = y ? y.prototype : void 0, bt = ht ? ht.toString : void 0;
function Kt(t) {
  if (typeof t == "string")
    return t;
  if ($(t))
    return Ht(t, Kt) + "";
  if (H(t))
    return bt ? bt.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
var Sr = /\s/;
function xr(t) {
  for (var r = t.length; r-- && Sr.test(t.charAt(r)); )
    ;
  return r;
}
var Pr = /^\s+/;
function Er(t) {
  return t && t.slice(0, xr(t) + 1).replace(Pr, "");
}
function T(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
var yt = NaN, Cr = /^[-+]0x[0-9a-f]+$/i, Ir = /^0b[01]+$/i, Fr = /^0o[0-7]+$/i, Mr = parseInt;
function vt(t) {
  if (typeof t == "number")
    return t;
  if (H(t))
    return yt;
  if (T(t)) {
    var r = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = T(r) ? r + "" : r;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Er(t);
  var e = Ir.test(t);
  return e || Fr.test(t) ? Mr(t.slice(2), e ? 2 : 8) : Cr.test(t) ? yt : +t;
}
function Wt(t) {
  return t;
}
var Nr = "[object AsyncFunction]", Lr = "[object Function]", Ur = "[object GeneratorFunction]", Br = "[object Proxy]";
function Vt(t) {
  if (!T(t))
    return !1;
  var r = w(t);
  return r == Lr || r == Ur || r == Nr || r == Br;
}
var Y = b["__core-js_shared__"], Tt = function() {
  var t = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Dr(t) {
  return !!Tt && Tt in t;
}
var Rr = Function.prototype, zr = Rr.toString;
function S(t) {
  if (t != null) {
    try {
      return zr.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Gr = /[\\^$.*+?()[\]{}|]/g, Hr = /^\[object .+?Constructor\]$/, Kr = Function.prototype, Wr = Object.prototype, Vr = Kr.toString, Xr = Wr.hasOwnProperty, qr = RegExp(
  "^" + Vr.call(Xr).replace(Gr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yr(t) {
  if (!T(t) || Dr(t))
    return !1;
  var r = Vt(t) ? qr : Hr;
  return r.test(S(t));
}
function Zr(t, r) {
  return t == null ? void 0 : t[r];
}
function x(t, r) {
  var e = Zr(t, r);
  return Yr(e) ? e : void 0;
}
var Q = x(b, "WeakMap"), _t = Object.create, Jr = /* @__PURE__ */ function() {
  function t() {
  }
  return function(r) {
    if (!T(r))
      return {};
    if (_t)
      return _t(r);
    t.prototype = r;
    var e = new t();
    return t.prototype = void 0, e;
  };
}();
function Qr(t, r, e) {
  switch (e.length) {
    case 0:
      return t.call(r);
    case 1:
      return t.call(r, e[0]);
    case 2:
      return t.call(r, e[0], e[1]);
    case 3:
      return t.call(r, e[0], e[1], e[2]);
  }
  return t.apply(r, e);
}
function kr(t, r) {
  var e = -1, n = t.length;
  for (r || (r = Array(n)); ++e < n; )
    r[e] = t[e];
  return r;
}
var te = 800, re = 16, ee = Date.now;
function ne(t) {
  var r = 0, e = 0;
  return function() {
    var n = ee(), a = re - (n - e);
    if (e = n, a > 0) {
      if (++r >= te)
        return arguments[0];
    } else
      r = 0;
    return t.apply(void 0, arguments);
  };
}
function ae(t) {
  return function() {
    return t;
  };
}
var G = function() {
  try {
    var t = x(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), oe = G ? function(t, r) {
  return G(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ae(r),
    writable: !0
  });
} : Wt, ie = ne(oe);
function Xt(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length; ++e < n && r(t[e], e, t) !== !1; )
    ;
  return t;
}
var ue = 9007199254740991, ce = /^(?:0|[1-9]\d*)$/;
function se(t, r) {
  var e = typeof t;
  return r = r ?? ue, !!r && (e == "number" || e != "symbol" && ce.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
function qt(t, r, e) {
  r == "__proto__" && G ? G(t, r, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[r] = e;
}
function Yt(t, r) {
  return t === r || t !== t && r !== r;
}
var fe = Object.prototype, le = fe.hasOwnProperty;
function Zt(t, r, e) {
  var n = t[r];
  (!(le.call(t, r) && Yt(n, e)) || e === void 0 && !(r in t)) && qt(t, r, e);
}
function D(t, r, e, n) {
  var a = !e;
  e || (e = {});
  for (var o = -1, i = r.length; ++o < i; ) {
    var u = r[o], f = void 0;
    f === void 0 && (f = t[u]), a ? qt(e, u, f) : Zt(e, u, f);
  }
  return e;
}
var mt = Math.max;
function pe(t, r, e) {
  return r = mt(r === void 0 ? t.length - 1 : r, 0), function() {
    for (var n = arguments, a = -1, o = mt(n.length - r, 0), i = Array(o); ++a < o; )
      i[a] = n[r + a];
    a = -1;
    for (var u = Array(r + 1); ++a < r; )
      u[a] = n[a];
    return u[r] = e(i), Qr(t, this, u);
  };
}
var ge = 9007199254740991;
function Jt(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ge;
}
function et(t) {
  return t != null && Jt(t.length) && !Vt(t);
}
var de = Object.prototype;
function nt(t) {
  var r = t && t.constructor, e = typeof r == "function" && r.prototype || de;
  return t === e;
}
function he(t, r) {
  for (var e = -1, n = Array(t); ++e < t; )
    n[e] = r(e);
  return n;
}
var be = "[object Arguments]";
function $t(t) {
  return A(t) && w(t) == be;
}
var Qt = Object.prototype, ye = Qt.hasOwnProperty, ve = Qt.propertyIsEnumerable, kt = $t(/* @__PURE__ */ function() {
  return arguments;
}()) ? $t : function(t) {
  return A(t) && ye.call(t, "callee") && !ve.call(t, "callee");
};
function Te() {
  return !1;
}
var tr = typeof exports == "object" && exports && !exports.nodeType && exports, jt = tr && typeof module == "object" && module && !module.nodeType && module, _e = jt && jt.exports === tr, Ot = _e ? b.Buffer : void 0, me = Ot ? Ot.isBuffer : void 0, rr = me || Te, $e = "[object Arguments]", je = "[object Array]", Oe = "[object Boolean]", we = "[object Date]", Ae = "[object Error]", Se = "[object Function]", xe = "[object Map]", Pe = "[object Number]", Ee = "[object Object]", Ce = "[object RegExp]", Ie = "[object Set]", Fe = "[object String]", Me = "[object WeakMap]", Ne = "[object ArrayBuffer]", Le = "[object DataView]", Ue = "[object Float32Array]", Be = "[object Float64Array]", De = "[object Int8Array]", Re = "[object Int16Array]", ze = "[object Int32Array]", Ge = "[object Uint8Array]", He = "[object Uint8ClampedArray]", Ke = "[object Uint16Array]", We = "[object Uint32Array]", s = {};
s[Ue] = s[Be] = s[De] = s[Re] = s[ze] = s[Ge] = s[He] = s[Ke] = s[We] = !0;
s[$e] = s[je] = s[Ne] = s[Oe] = s[Le] = s[we] = s[Ae] = s[Se] = s[xe] = s[Pe] = s[Ee] = s[Ce] = s[Ie] = s[Fe] = s[Me] = !1;
function Ve(t) {
  return A(t) && Jt(t.length) && !!s[w(t)];
}
function at(t) {
  return function(r) {
    return t(r);
  };
}
var er = typeof exports == "object" && exports && !exports.nodeType && exports, L = er && typeof module == "object" && module && !module.nodeType && module, Xe = L && L.exports === er, Z = Xe && zt.process, C = function() {
  try {
    var t = L && L.require && L.require("util").types;
    return t || Z && Z.binding && Z.binding("util");
  } catch {
  }
}(), wt = C && C.isTypedArray, qe = wt ? at(wt) : Ve, Ye = Object.prototype, Ze = Ye.hasOwnProperty;
function nr(t, r) {
  var e = $(t), n = !e && kt(t), a = !e && !n && rr(t), o = !e && !n && !a && qe(t), i = e || n || a || o, u = i ? he(t.length, String) : [], f = u.length;
  for (var p in t)
    (r || Ze.call(t, p)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    se(p, f))) && u.push(p);
  return u;
}
function ar(t, r) {
  return function(e) {
    return t(r(e));
  };
}
var Je = ar(Object.keys, Object), Qe = Object.prototype, ke = Qe.hasOwnProperty;
function tn(t) {
  if (!nt(t))
    return Je(t);
  var r = [];
  for (var e in Object(t))
    ke.call(t, e) && e != "constructor" && r.push(e);
  return r;
}
function K(t) {
  return et(t) ? nr(t) : tn(t);
}
function rn(t) {
  var r = [];
  if (t != null)
    for (var e in Object(t))
      r.push(e);
  return r;
}
var en = Object.prototype, nn = en.hasOwnProperty;
function an(t) {
  if (!T(t))
    return rn(t);
  var r = nt(t), e = [];
  for (var n in t)
    n == "constructor" && (r || !nn.call(t, n)) || e.push(n);
  return e;
}
function ot(t) {
  return et(t) ? nr(t, !0) : an(t);
}
var on = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, un = /^\w*$/;
function cn(t, r) {
  if ($(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || H(t) ? !0 : un.test(t) || !on.test(t) || r != null && t in Object(r);
}
var U = x(Object, "create");
function sn() {
  this.__data__ = U ? U(null) : {}, this.size = 0;
}
function fn(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var ln = "__lodash_hash_undefined__", pn = Object.prototype, gn = pn.hasOwnProperty;
function dn(t) {
  var r = this.__data__;
  if (U) {
    var e = r[t];
    return e === ln ? void 0 : e;
  }
  return gn.call(r, t) ? r[t] : void 0;
}
var hn = Object.prototype, bn = hn.hasOwnProperty;
function yn(t) {
  var r = this.__data__;
  return U ? r[t] !== void 0 : bn.call(r, t);
}
var vn = "__lodash_hash_undefined__";
function Tn(t, r) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = U && r === void 0 ? vn : r, this;
}
function O(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
O.prototype.clear = sn;
O.prototype.delete = fn;
O.prototype.get = dn;
O.prototype.has = yn;
O.prototype.set = Tn;
function _n() {
  this.__data__ = [], this.size = 0;
}
function W(t, r) {
  for (var e = t.length; e--; )
    if (Yt(t[e][0], r))
      return e;
  return -1;
}
var mn = Array.prototype, $n = mn.splice;
function jn(t) {
  var r = this.__data__, e = W(r, t);
  if (e < 0)
    return !1;
  var n = r.length - 1;
  return e == n ? r.pop() : $n.call(r, e, 1), --this.size, !0;
}
function On(t) {
  var r = this.__data__, e = W(r, t);
  return e < 0 ? void 0 : r[e][1];
}
function wn(t) {
  return W(this.__data__, t) > -1;
}
function An(t, r) {
  var e = this.__data__, n = W(e, t);
  return n < 0 ? (++this.size, e.push([t, r])) : e[n][1] = r, this;
}
function _(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
_.prototype.clear = _n;
_.prototype.delete = jn;
_.prototype.get = On;
_.prototype.has = wn;
_.prototype.set = An;
var B = x(b, "Map");
function Sn() {
  this.size = 0, this.__data__ = {
    hash: new O(),
    map: new (B || _)(),
    string: new O()
  };
}
function xn(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
function V(t, r) {
  var e = t.__data__;
  return xn(r) ? e[typeof r == "string" ? "string" : "hash"] : e.map;
}
function Pn(t) {
  var r = V(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
function En(t) {
  return V(this, t).get(t);
}
function Cn(t) {
  return V(this, t).has(t);
}
function In(t, r) {
  var e = V(this, t), n = e.size;
  return e.set(t, r), this.size += e.size == n ? 0 : 1, this;
}
function j(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
j.prototype.clear = Sn;
j.prototype.delete = Pn;
j.prototype.get = En;
j.prototype.has = Cn;
j.prototype.set = In;
var Fn = "Expected a function";
function it(t, r) {
  if (typeof t != "function" || r != null && typeof r != "function")
    throw new TypeError(Fn);
  var e = function() {
    var n = arguments, a = r ? r.apply(this, n) : n[0], o = e.cache;
    if (o.has(a))
      return o.get(a);
    var i = t.apply(this, n);
    return e.cache = o.set(a, i) || o, i;
  };
  return e.cache = new (it.Cache || j)(), e;
}
it.Cache = j;
var Mn = 500;
function Nn(t) {
  var r = it(t, function(n) {
    return e.size === Mn && e.clear(), n;
  }), e = r.cache;
  return r;
}
var Ln = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Un = /\\(\\)?/g, Bn = Nn(function(t) {
  var r = [];
  return t.charCodeAt(0) === 46 && r.push(""), t.replace(Ln, function(e, n, a, o) {
    r.push(a ? o.replace(Un, "$1") : n || e);
  }), r;
});
function Dn(t) {
  return t == null ? "" : Kt(t);
}
function ut(t, r) {
  return $(t) ? t : cn(t, r) ? [t] : Bn(Dn(t));
}
function or(t) {
  if (typeof t == "string" || H(t))
    return t;
  var r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function Rn(t, r) {
  r = ut(r, t);
  for (var e = 0, n = r.length; t != null && e < n; )
    t = t[or(r[e++])];
  return e && e == n ? t : void 0;
}
function ct(t, r) {
  for (var e = -1, n = r.length, a = t.length; ++e < n; )
    t[a + e] = r[e];
  return t;
}
var At = y ? y.isConcatSpreadable : void 0;
function zn(t) {
  return $(t) || kt(t) || !!(At && t && t[At]);
}
function Gn(t, r, e, n, a) {
  var o = -1, i = t.length;
  for (e || (e = zn), a || (a = []); ++o < i; ) {
    var u = t[o];
    e(u) ? ct(a, u) : a[a.length] = u;
  }
  return a;
}
function Hn(t) {
  var r = t == null ? 0 : t.length;
  return r ? Gn(t) : [];
}
function Kn(t) {
  return ie(pe(t, void 0, Hn), t + "");
}
var st = ar(Object.getPrototypeOf, Object), Wn = "[object Object]", Vn = Function.prototype, Xn = Object.prototype, ir = Vn.toString, qn = Xn.hasOwnProperty, Yn = ir.call(Object);
function Zn(t) {
  if (!A(t) || w(t) != Wn)
    return !1;
  var r = st(t);
  if (r === null)
    return !0;
  var e = qn.call(r, "constructor") && r.constructor;
  return typeof e == "function" && e instanceof e && ir.call(e) == Yn;
}
function Jn(t, r, e) {
  var n = -1, a = t.length;
  r < 0 && (r = -r > a ? 0 : a + r), e = e > a ? a : e, e < 0 && (e += a), a = r > e ? 0 : e - r >>> 0, r >>>= 0;
  for (var o = Array(a); ++n < a; )
    o[n] = t[n + r];
  return o;
}
function Qn() {
  this.__data__ = new _(), this.size = 0;
}
function kn(t) {
  var r = this.__data__, e = r.delete(t);
  return this.size = r.size, e;
}
function ta(t) {
  return this.__data__.get(t);
}
function ra(t) {
  return this.__data__.has(t);
}
var ea = 200;
function na(t, r) {
  var e = this.__data__;
  if (e instanceof _) {
    var n = e.__data__;
    if (!B || n.length < ea - 1)
      return n.push([t, r]), this.size = ++e.size, this;
    e = this.__data__ = new j(n);
  }
  return e.set(t, r), this.size = e.size, this;
}
function I(t) {
  var r = this.__data__ = new _(t);
  this.size = r.size;
}
I.prototype.clear = Qn;
I.prototype.delete = kn;
I.prototype.get = ta;
I.prototype.has = ra;
I.prototype.set = na;
function aa(t, r) {
  return t && D(r, K(r), t);
}
function oa(t, r) {
  return t && D(r, ot(r), t);
}
var ur = typeof exports == "object" && exports && !exports.nodeType && exports, St = ur && typeof module == "object" && module && !module.nodeType && module, ia = St && St.exports === ur, xt = ia ? b.Buffer : void 0, Pt = xt ? xt.allocUnsafe : void 0;
function ua(t, r) {
  if (r)
    return t.slice();
  var e = t.length, n = Pt ? Pt(e) : new t.constructor(e);
  return t.copy(n), n;
}
function ca(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length, a = 0, o = []; ++e < n; ) {
    var i = t[e];
    r(i, e, t) && (o[a++] = i);
  }
  return o;
}
function cr() {
  return [];
}
var sa = Object.prototype, fa = sa.propertyIsEnumerable, Et = Object.getOwnPropertySymbols, ft = Et ? function(t) {
  return t == null ? [] : (t = Object(t), ca(Et(t), function(r) {
    return fa.call(t, r);
  }));
} : cr;
function la(t, r) {
  return D(t, ft(t), r);
}
var pa = Object.getOwnPropertySymbols, sr = pa ? function(t) {
  for (var r = []; t; )
    ct(r, ft(t)), t = st(t);
  return r;
} : cr;
function ga(t, r) {
  return D(t, sr(t), r);
}
function fr(t, r, e) {
  var n = r(t);
  return $(t) ? n : ct(n, e(t));
}
function da(t) {
  return fr(t, K, ft);
}
function lr(t) {
  return fr(t, ot, sr);
}
var k = x(b, "DataView"), tt = x(b, "Promise"), rt = x(b, "Set"), Ct = "[object Map]", ha = "[object Object]", It = "[object Promise]", Ft = "[object Set]", Mt = "[object WeakMap]", Nt = "[object DataView]", ba = S(k), ya = S(B), va = S(tt), Ta = S(rt), _a = S(Q), v = w;
(k && v(new k(new ArrayBuffer(1))) != Nt || B && v(new B()) != Ct || tt && v(tt.resolve()) != It || rt && v(new rt()) != Ft || Q && v(new Q()) != Mt) && (v = function(t) {
  var r = w(t), e = r == ha ? t.constructor : void 0, n = e ? S(e) : "";
  if (n)
    switch (n) {
      case ba:
        return Nt;
      case ya:
        return Ct;
      case va:
        return It;
      case Ta:
        return Ft;
      case _a:
        return Mt;
    }
  return r;
});
var ma = Object.prototype, $a = ma.hasOwnProperty;
function ja(t) {
  var r = t.length, e = new t.constructor(r);
  return r && typeof t[0] == "string" && $a.call(t, "index") && (e.index = t.index, e.input = t.input), e;
}
var Lt = b.Uint8Array;
function lt(t) {
  var r = new t.constructor(t.byteLength);
  return new Lt(r).set(new Lt(t)), r;
}
function Oa(t, r) {
  var e = r ? lt(t.buffer) : t.buffer;
  return new t.constructor(e, t.byteOffset, t.byteLength);
}
var wa = /\w*$/;
function Aa(t) {
  var r = new t.constructor(t.source, wa.exec(t));
  return r.lastIndex = t.lastIndex, r;
}
var Ut = y ? y.prototype : void 0, Bt = Ut ? Ut.valueOf : void 0;
function Sa(t) {
  return Bt ? Object(Bt.call(t)) : {};
}
function xa(t, r) {
  var e = r ? lt(t.buffer) : t.buffer;
  return new t.constructor(e, t.byteOffset, t.length);
}
var Pa = "[object Boolean]", Ea = "[object Date]", Ca = "[object Map]", Ia = "[object Number]", Fa = "[object RegExp]", Ma = "[object Set]", Na = "[object String]", La = "[object Symbol]", Ua = "[object ArrayBuffer]", Ba = "[object DataView]", Da = "[object Float32Array]", Ra = "[object Float64Array]", za = "[object Int8Array]", Ga = "[object Int16Array]", Ha = "[object Int32Array]", Ka = "[object Uint8Array]", Wa = "[object Uint8ClampedArray]", Va = "[object Uint16Array]", Xa = "[object Uint32Array]";
function qa(t, r, e) {
  var n = t.constructor;
  switch (r) {
    case Ua:
      return lt(t);
    case Pa:
    case Ea:
      return new n(+t);
    case Ba:
      return Oa(t, e);
    case Da:
    case Ra:
    case za:
    case Ga:
    case Ha:
    case Ka:
    case Wa:
    case Va:
    case Xa:
      return xa(t, e);
    case Ca:
      return new n();
    case Ia:
    case Na:
      return new n(t);
    case Fa:
      return Aa(t);
    case Ma:
      return new n();
    case La:
      return Sa(t);
  }
}
function Ya(t) {
  return typeof t.constructor == "function" && !nt(t) ? Jr(st(t)) : {};
}
var Za = "[object Map]";
function Ja(t) {
  return A(t) && v(t) == Za;
}
var Dt = C && C.isMap, Qa = Dt ? at(Dt) : Ja, ka = "[object Set]";
function to(t) {
  return A(t) && v(t) == ka;
}
var Rt = C && C.isSet, ro = Rt ? at(Rt) : to, eo = 1, no = 2, ao = 4, pr = "[object Arguments]", oo = "[object Array]", io = "[object Boolean]", uo = "[object Date]", co = "[object Error]", gr = "[object Function]", so = "[object GeneratorFunction]", fo = "[object Map]", lo = "[object Number]", dr = "[object Object]", po = "[object RegExp]", go = "[object Set]", ho = "[object String]", bo = "[object Symbol]", yo = "[object WeakMap]", vo = "[object ArrayBuffer]", To = "[object DataView]", _o = "[object Float32Array]", mo = "[object Float64Array]", $o = "[object Int8Array]", jo = "[object Int16Array]", Oo = "[object Int32Array]", wo = "[object Uint8Array]", Ao = "[object Uint8ClampedArray]", So = "[object Uint16Array]", xo = "[object Uint32Array]", c = {};
c[pr] = c[oo] = c[vo] = c[To] = c[io] = c[uo] = c[_o] = c[mo] = c[$o] = c[jo] = c[Oo] = c[fo] = c[lo] = c[dr] = c[po] = c[go] = c[ho] = c[bo] = c[wo] = c[Ao] = c[So] = c[xo] = !0;
c[co] = c[gr] = c[yo] = !1;
function z(t, r, e, n, a, o) {
  var i, u = r & eo, f = r & no, p = r & ao;
  if (e && (i = a ? e(t, n, a, o) : e(t)), i !== void 0)
    return i;
  if (!T(t))
    return t;
  var F = $(t);
  if (F) {
    if (i = ja(t), !u)
      return kr(t, i);
  } else {
    var g = v(t), P = g == gr || g == so;
    if (rr(t))
      return ua(t, u);
    if (g == dr || g == pr || P && !a) {
      if (i = f || P ? {} : Ya(t), !u)
        return f ? ga(t, oa(i, t)) : la(t, aa(i, t));
    } else {
      if (!c[g])
        return a ? t : {};
      i = qa(t, g, u);
    }
  }
  o || (o = new I());
  var E = o.get(t);
  if (E)
    return E;
  o.set(t, i), ro(t) ? t.forEach(function(h) {
    i.add(z(h, r, e, h, t, o));
  }) : Qa(t) && t.forEach(function(h, d) {
    i.set(d, z(h, r, e, d, t, o));
  });
  var X = p ? f ? lr : da : f ? ot : K, R = F ? void 0 : X(t);
  return Xt(R || t, function(h, d) {
    R && (d = h, h = t[d]), Zt(i, d, z(h, r, e, d, t, o));
  }), i;
}
function Po(t) {
  return function(r, e, n) {
    for (var a = -1, o = Object(r), i = n(r), u = i.length; u--; ) {
      var f = i[++a];
      if (e(o[f], f, o) === !1)
        break;
    }
    return r;
  };
}
var Eo = Po();
function Co(t, r) {
  return t && Eo(t, r, K);
}
function Io(t, r) {
  return function(e, n) {
    if (e == null)
      return e;
    if (!et(e))
      return t(e, n);
    for (var a = e.length, o = -1, i = Object(e); ++o < a && n(i[o], o, i) !== !1; )
      ;
    return e;
  };
}
var Fo = Io(Co), J = function() {
  return b.Date.now();
}, Mo = "Expected a function", No = Math.max, Lo = Math.min;
function Uo(t, r, e) {
  var n, a, o, i, u, f, p = 0, F = !1, g = !1, P = !0;
  if (typeof t != "function")
    throw new TypeError(Mo);
  r = vt(r) || 0, T(e) && (F = !!e.leading, g = "maxWait" in e, o = g ? No(vt(e.maxWait) || 0, r) : o, P = "trailing" in e ? !!e.trailing : P);
  function E(l) {
    var m = n, M = a;
    return n = a = void 0, p = l, i = t.apply(M, m), i;
  }
  function X(l) {
    return p = l, u = setTimeout(d, r), F ? E(l) : i;
  }
  function R(l) {
    var m = l - f, M = l - p, gt = r - m;
    return g ? Lo(gt, o - M) : gt;
  }
  function h(l) {
    var m = l - f, M = l - p;
    return f === void 0 || m >= r || m < 0 || g && M >= o;
  }
  function d() {
    var l = J();
    if (h(l))
      return pt(l);
    u = setTimeout(d, R(l));
  }
  function pt(l) {
    return u = void 0, P && n ? E(l) : (n = a = void 0, i);
  }
  function hr() {
    u !== void 0 && clearTimeout(u), p = 0, n = f = a = u = void 0;
  }
  function br() {
    return u === void 0 ? i : pt(J());
  }
  function q() {
    var l = J(), m = h(l);
    if (n = arguments, a = this, f = l, m) {
      if (u === void 0)
        return X(f);
      if (g)
        return clearTimeout(u), u = setTimeout(d, r), E(f);
    }
    return u === void 0 && (u = setTimeout(d, r)), i;
  }
  return q.cancel = hr, q.flush = br, q;
}
function Bo(t) {
  var r = t == null ? 0 : t.length;
  return r ? t[r - 1] : void 0;
}
function Do(t) {
  return typeof t == "function" ? t : Wt;
}
function Xo(t, r) {
  var e = $(t) ? Xt : Fo;
  return e(t, Do(r));
}
function Ro(t, r) {
  return r.length < 2 ? t : Rn(t, Jn(r, 0, -1));
}
function zo(t, r) {
  return r = ut(r, t), t = Ro(t, r), t == null || delete t[or(Bo(r))];
}
function Go(t) {
  return Zn(t) ? void 0 : t;
}
var Ho = 1, Ko = 2, Wo = 4, qo = Kn(function(t, r) {
  var e = {};
  if (t == null)
    return e;
  var n = !1;
  r = Ht(r, function(o) {
    return o = ut(o, t), n || (n = o.length > 1), o;
  }), D(t, lr(t), e), n && (e = z(e, Ho | Ko | Wo, Go));
  for (var a = r.length; a--; )
    zo(e, r[a]);
  return e;
}), Vo = "Expected a function";
function Yo(t, r, e) {
  var n = !0, a = !0;
  if (typeof t != "function")
    throw new TypeError(Vo);
  return T(e) && (n = "leading" in e ? !!e.leading : n, a = "trailing" in e ? !!e.trailing : a), Uo(t, r, {
    leading: n,
    maxWait: r,
    trailing: a
  });
}
export {
  Xo as f,
  qo as o,
  Yo as t
};
