import { defineComponent as u, useSlots as m, computed as n, openBlock as t, createElementBlock as s, mergeProps as a, createBlock as f, unref as y, createCommentVNode as l, normalizeClass as h, normalizeStyle as B, renderSlot as b } from "vue";
import { FontAwesomeIcon as g } from "@fortawesome/vue-fontawesome";
import { o as w } from "./vendor-CDvNqNKY.js";
import { w as k } from "./utils-DlpX7SWf.js";
const v = /* @__PURE__ */ u({
  name: "GIcon",
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    border: { type: Boolean, default: !1 },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: {},
    color: {},
    width: {},
    height: {}
  },
  setup(r) {
    const o = r, i = m(), p = n(() => w(o, ["type", "color", "width", "height", "icon"])), d = n(() => ({
      width: o.width || void 0,
      height: o.height || void 0
    })), c = n(() => ({
      width: o.width || void 0,
      height: o.height || void 0,
      color: o.color || void 0,
      transform: o.rotation ? `rotate(${o.rotation}deg)` : void 0
    }));
    return (e, I) => (t(), s("i", a({
      class: ["g-icon", [`g-icon--${o.type}`]]
    }, { ...e.$attrs }, { style: d.value }), [
      i.icon ? l("", !0) : (t(), f(y(g), a({ key: 0 }, p.value, {
        icon: o.icon || ""
      }), null, 16, ["icon"])),
      i.icon ? (t(), s("div", {
        key: 1,
        class: h(["g-icon__icon", {
          [`g-icon__icon--${e.flip}`]: e.flip,
          "is-spin": e.spin,
          "is-border": e.border,
          "is-pulse": e.pulse,
          "is-inverse": e.inverse,
          "is-bounce": e.bounce,
          "is-shake": e.shake,
          "is-beat": e.beat,
          "is-fade": e.fade,
          "is-beat-fade": e.beatFade
        }]),
        style: B(c.value)
      }, [
        b(e.$slots, "icon")
      ], 6)) : l("", !0)
    ], 16));
  }
}), F = k(v);
export {
  F as G,
  v as _
};
