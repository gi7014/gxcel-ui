import { defineComponent as G, useSlots as w, ref as E, inject as N, computed as i, openBlock as c, createBlock as v, resolveDynamicComponent as O, normalizeClass as I, normalizeStyle as r, unref as R, withCtx as U, renderSlot as s, createVNode as D, createCommentVNode as b, createElementVNode as V, provide as K, reactive as P, toRef as z, createElementBlock as Y } from "vue";
import { _ as k } from "./Icon-DRbNYOtf.js";
import { t as j } from "./vendor-CDvNqNKY.js";
import { w as T } from "./utils-DlpX7SWf.js";
const $ = Symbol("BUTTON_GROUP_KEY"), q = /* @__PURE__ */ G({
  name: "GButton",
  __name: "Button",
  props: {
    tag: { default: "button" },
    type: {},
    nativeType: { default: "button" },
    size: {},
    icon: {},
    iconSize: {},
    loadingIcon: {},
    animation: { default: "scale" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    circle: { type: Boolean, default: !1 },
    text: { type: Boolean, default: !1 },
    autofocus: { type: Boolean },
    useThrottle: { type: Boolean, default: !0 },
    throttleDuration: { default: 500 },
    width: {},
    height: {}
  },
  emits: ["click"],
  setup(n, { expose: a, emit: l }) {
    const t = n, u = w(), C = l, f = E(), o = N($, void 0), p = i(() => (o == null ? void 0 : o.size) ?? (t == null ? void 0 : t.size) ?? ""), y = i(() => (o == null ? void 0 : o.type) ?? (t == null ? void 0 : t.type) ?? ""), d = i(() => (o == null ? void 0 : o.disabled) || (t == null ? void 0 : t.disabled) || !1), m = i(() => ({
      marginRight: u.default ? "6px" : "0px"
    })), S = i(() => ({
      width: t.width || void 0,
      height: t.height || void 0,
      pointerEvents: (d.value || t.loading) && t.tag === "div" ? "none" : ""
    })), g = (e) => C("click", e), _ = j(g, t.throttleDuration, { trailing: !1 });
    return a({
      ref: f
    }), (e, B) => (c(), v(O(t.tag), {
      ref_key: "_ref",
      ref: f,
      class: I(["g-button", {
        [`g-button--${y.value}`]: y.value,
        [`g-button--${p.value}`]: p.value,
        [`g-button--${e.animation}`]: e.animation,
        "is-plain": e.plain,
        "is-text": e.text,
        "is-round": e.round,
        "is-circle": e.circle,
        "is-loading": e.loading,
        "is-disabled": d.value
      }]),
      autofocus: e.autofocus,
      type: e.tag === "button" ? e.nativeType : void 0,
      disabled: d.value || e.loading ? !0 : void 0,
      style: r(S.value),
      onClick: B[0] || (B[0] = (h) => e.useThrottle ? R(_)(h) : g(h))
    }, {
      default: U(() => [
        e.loading && t.animation !== "fly" ? s(e.$slots, "loading", { key: 0 }, () => [
          D(k, {
            class: "loading-icon",
            style: r(m.value),
            icon: e.loadingIcon ?? "spinner",
            size: "1x",
            spin: ""
          }, null, 8, ["style", "icon"])
        ]) : b("", !0),
        e.icon && (!e.loading || t.animation === "fly") ? (c(), v(k, {
          key: 1,
          icon: e.icon,
          size: t.iconSize ?? "1x",
          style: r(m.value)
        }, null, 8, ["icon", "size", "style"])) : b("", !0),
        V("span", null, [
          s(e.$slots, "default"),
          s(e.$slots, "icon")
        ])
      ]),
      _: 3
    }, 8, ["autofocus", "type", "disabled", "style", "class"]));
  }
}), A = { class: "g-button-group" }, F = /* @__PURE__ */ G({
  name: "GButtonGroup",
  __name: "ButtonGroup",
  props: {
    type: {},
    size: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const a = n;
    return K(
      $,
      P({
        size: z(a, "size"),
        type: z(a, "type")
      })
    ), (l, t) => (c(), Y("div", A, [
      s(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), H = (n, a) => {
  const l = n.__vccOpts || n;
  for (const [t, u] of a)
    l[t] = u;
  return l;
}, J = /* @__PURE__ */ H(F, [["__scopeId", "data-v-f4367033"]]), X = T(q), Z = T(J);
export {
  X as G,
  Z as a
};
