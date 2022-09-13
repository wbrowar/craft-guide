import { d as m, r as _, c as p, k as S, l as w, v as x, g as t, m as f, p as b, u as y, q as C, T as M, h as a, _ as u, w as $, b as i, t as h, e as L, s as k, x as z, F as O, y as T } from "./_plugin-vue_export-helper.ac8eb838.js";
const B = /* @__PURE__ */ m({
  __name: "Modal",
  props: {
    aspectRatio: String,
    clickOutsideToClose: { type: Boolean, default: !1 },
    maxHeight: { type: String, default: "600px" },
    maxWidth: { type: String, default: "800px" },
    teleportTo: { type: String, default: null }
  },
  emits: ["closed", "opened"],
  setup(e, { expose: o, emit: r }) {
    const c = e, l = _(!1), g = p(() => {
      const s = {
        "--max-height": c.maxHeight,
        "--max-width": c.maxWidth
      };
      return c.aspectRatio && (s["--aspect-ratio"] = c.aspectRatio), s;
    });
    function n() {
      l.value = !1, r("closed");
    }
    function d() {
      l.value = !0, r("opened");
    }
    return o({
      close: n,
      open: d
    }), (s, v) => (a(), S(M, {
      disabled: !e.teleportTo,
      to: e.teleportTo
    }, [
      w(t("div", {
        class: f(["guide-modal g-flex g-items-center g-justify-center g-p-20 g-inset-0 g-z-[1000]", [e.teleportTo ? "g-fixed" : "g-absolute"]])
      }, [
        t("div", {
          class: "g-absolute g-w-full g-h-full",
          onClick: v[0] || (v[0] = (s0) => e.clickOutsideToClose ? n() : null)
        }),
        t("div", {
          class: f(["g-relative g-w-full g-max-w-[var(--max-width)] g-max-h-[var(--max-height)] g-aspect-[var(--aspect-ratio)] g-bg-white g-rounded-lg g-shadow-lg", e.aspectRatio ? "" : "g-h-full"]),
          style: b(y(g))
        }, [
          C(s.$slots, "default", {}, void 0, !0)
        ], 6)
      ], 2), [
        [x, l.value]
      ])
    ], 8, ["disabled", "to"]));
  }
});
const n0 = /* @__PURE__ */ u(B, [["__scopeId", "data-v-0b5a066a"], ["__file", "/Users/wbrowar/CODE/craft_v4/craft-guide/_source/components/Modal.vue"]]), q = ["id"], V = { class: "heading" }, D = ["id", "for"], F = ["id"], E = ["innerHTML"], U = { class: "input ltr" }, j = { class: "select fullwidth" }, H = ["id", "name", "aria-describedby"], N = ["value"], R = /* @__PURE__ */ m({
  __name: "CraftFieldSelect",
  props: {
    fieldAttributes: Object,
    instructions: String,
    label: { type: String, required: !0 },
    name: { type: String, required: !0 },
    options: { type: Array, required: !0 },
    placeholder: String,
    required: { type: Boolean, default: !1 },
    startingValue: { type: String, default: "" }
  },
  emits: ["value-changed"],
  setup(e, { expose: o, emit: r }) {
    const c = e, l = _(JSON.parse(JSON.stringify(c.startingValue)));
    function g(n) {
      l.value = n;
    }
    return $(l, (n) => {
      r("value-changed", n);
    }), o({
      setFieldValue: g
    }), (n, d) => (a(), i("div", {
      id: `${e.name}-field`,
      class: "field"
    }, [
      t("div", V, [
        t("label", {
          id: `${e.name}-label`,
          class: f(e.required ? "required" : null),
          for: e.name
        }, h(e.label), 11, D)
      ]),
      e.instructions ? (a(), i("div", {
        key: 0,
        id: `${e.name}-instructions`,
        class: "instructions"
      }, [
        t("p", { innerHTML: e.instructions }, null, 8, E)
      ], 8, F)) : L("v-if", !0),
      t("div", U, [
        t("div", j, [
          w(t("select", z({
            id: e.name,
            "onUpdate:modelValue": d[0] || (d[0] = (s) => l.value = s),
            name: e.name,
            "aria-describedby": e.instructions ? `${e.name}-instructions` : null
          }, e.fieldAttributes), [
            (a(!0), i(O, null, T(e.options, (s) => (a(), i("option", {
              key: s.value,
              value: s.value
            }, h(s.label), 9, N))), 128))
          ], 16, H), [
            [k, l.value]
          ])
        ])
      ])
    ], 8, q));
  }
}), a0 = /* @__PURE__ */ u(R, [["__file", "/Users/wbrowar/CODE/craft_v4/craft-guide/_source/components/CraftFieldSelect.vue"]]), A = {}, G = {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 99 99"
}, J = /* @__PURE__ */ t("path", { d: `M64.3,47.7l-28.4-6.5c-0.5-0.1-0.9,0.3-1.1,0.7L30,63.3c-0.1,0.5,0.3,0.9,0.7,1.1L59,70.8c0.5,0.1,0.9-0.3,1.1-0.7l4.8-21.4
	C65.1,48.2,64.7,47.8,64.3,47.7z M39.5,44.9c1.9,0,3.5,1.6,3.5,3.5c0,1.9-1.6,3.5-3.5,3.5c-1.9,0-3.5-1.6-3.5-3.5
	C36,46.4,37.6,44.9,39.5,44.9z M58.1,68.4l-25.4-5.8l0.8-3.2l7-5l2.6,3.5l11.2-7.1l5.7,9.4L58.1,68.4z` }, null, -1), W = /* @__PURE__ */ t("path", { d: `M60.6,33c0.5-0.4,0.9-1.1,1.1-2.2c0.3-1.1,0.3-1.9,0-2.4s-0.7-0.9-1.2-1.1L60,27.2l-1.3,6.2l0.5,0.1
	C59.7,33.7,60.2,33.5,60.6,33z` }, null, -1), I = /* @__PURE__ */ t("path", { d: `M84.6,18.3l0.2-0.7c0.6-2.5-0.8-4.9-3.1-5.8L82,9.2L53.3,5.3l-17-3.9c-1.5-0.4-3.1,0.1-4.2,1h-0.3v0.3
	c-0.7,0.7-1.2,1.5-1.5,2.5L13,81c-0.6,2.7,1.1,5.4,3.8,6l44.7,10.2c2.6,0.6,5.2-1,5.9-3.6l3,0.4l3.8-28l14.1-46.5L84.6,18.3z
	 M60.9,25.3c0.7,0.1,1.3,0.4,1.9,0.8c0.5,0.4,0.8,0.8,1.1,1.3c0.3,0.5,0.4,1.1,0.4,1.7c0,0.7,0,1.3-0.1,2.2c-0.1,0.8-0.4,1.5-0.7,2
	c-0.3,0.5-0.7,1.1-1.1,1.5c-0.4,0.4-0.9,0.7-1.6,0.7c-0.5,0.1-1.2,0.1-2-0.1l-3-0.5l2.3-10.2L60.9,25.3z M53.9,23.7l2.3,0.5
	l-2.3,10.2L51.6,34L53.9,23.7z M44,28.3l1.5-6.5l2.3,0.5l-1.5,6.2c0,0.3-0.1,0.5-0.1,0.8s0,0.5,0,0.7s0.1,0.4,0.3,0.5
	s0.3,0.3,0.5,0.3s0.4,0,0.5,0c0.1-0.1,0.3-0.1,0.4-0.4c0.1-0.1,0.3-0.4,0.3-0.5c0.1-0.3,0.1-0.5,0.3-0.8l1.5-6.2l2.3,0.5l-1.5,6.5
	c0,0.4-0.1,0.9-0.4,1.3c-0.3,0.4-0.5,0.8-0.9,1.2c-0.4,0.3-0.8,0.5-1.3,0.7c-0.5,0.1-1.1,0.1-1.6,0c-0.7-0.1-1.1-0.4-1.5-0.7
	s-0.7-0.7-0.8-1.1s-0.3-0.9-0.3-1.5C43.8,29.4,43.8,28.8,44,28.3z M35.9,24.9c0.1-0.8,0.4-1.5,0.8-2.2s0.7-1.1,1.2-1.5
	c0.4-0.4,0.9-0.7,1.5-0.8c0.5-0.1,1.1-0.1,1.7,0s1.2,0.4,1.6,0.8c0.4,0.4,0.7,0.7,0.9,1.1l-1.6,1.3c-0.3-0.5-0.7-0.9-1.2-1.1
	c-0.3-0.1-0.7,0-0.9,0c-0.3,0.1-0.5,0.3-0.7,0.5c-0.3,0.3-0.4,0.5-0.5,0.9s-0.3,0.8-0.4,1.2C38,25.9,38,26.3,38,26.7s0,0.8,0.1,1.1
	c0.1,0.3,0.3,0.5,0.4,0.8S39,29,39.4,29c0.4,0.1,0.7,0.1,0.8,0l0.4-1.9l-1.1-0.3l0.4-2l3.1,0.7l-1.2,5.4c-0.4,0.4-0.8,0.5-1.3,0.5
	s-1.1,0-1.7-0.1s-1.2-0.4-1.6-0.8s-0.8-0.8-1.1-1.3c-0.3-0.5-0.4-1.2-0.4-1.9C35.6,26.5,35.6,25.7,35.9,24.9z M67.5,48.1l-5.4,23.8
	c-0.3,1.1-1.3,1.9-2.6,1.6l-30.3-7c-1.1-0.3-1.9-1.3-1.6-2.6l5.4-23.8c0.3-1.1,1.3-1.9,2.6-1.6l30.4,7
	C67.1,45.8,67.9,46.9,67.5,48.1z M71.1,29.6L68.4,29L68,31l2.6,0.5l-0.4,1.9l-2.6-0.5L67.1,35l3,0.7l-0.5,2l-5.2-0.9l2.3-10.2l5,1.1
	L71.1,29.6z` }, null, -1), P = [
  J,
  W,
  I
];
function K(e, o) {
  return a(), i("svg", G, P);
}
const c0 = /* @__PURE__ */ u(A, [["render", K], ["__file", "/Users/wbrowar/CODE/craft_v4/craft-guide/_source/components/SvgGuide.vue"]]), Q = {}, X = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, Y = /* @__PURE__ */ t("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
}, null, -1), Z = /* @__PURE__ */ t("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
}, null, -1), e0 = [
  Y,
  Z
];
function t0(e, o) {
  return a(), i("svg", X, e0);
}
const i0 = /* @__PURE__ */ u(Q, [["render", t0], ["__file", "/Users/wbrowar/CODE/craft_v4/craft-guide/_source/components/SvgSettings.vue"]]);
export {
  a0 as C,
  n0 as M,
  c0 as S,
  i0 as a
};
