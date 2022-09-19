import { d as G, r as p, a as R, c as N, o as $, b as L, e as q, w as P, g as B, n as F, _ as k, f as V, h, t as D, u as g, i as O, j as x, k as M, l as E, m as U } from "./_plugin-vue_export-helper.54751eae.js";
import { p as J, l as n, g as A, t as S, u as H } from "./guide.e341e0e3.js";
import { C as j, G as z, S as K, a as Q } from "./SvgSettings.ca68580a.js";
const W = /* @__PURE__ */ G({
  __name: "GuideDisplay",
  props: {
    enableInlineEditor: Boolean,
    guideDisplay: { type: String, required: !0 },
    guideNavData: String,
    startInInlineEditor: { type: Boolean, required: !1 },
    teleportContainerClass: String,
    teleportMethod: String,
    teleportSelector: String,
    teleportToSlideout: { type: Boolean, default: !1 }
  },
  setup(m) {
    const e = m, t = p(""), o = R({}), f = p(!1), _ = p(""), l = p(!1), u = p(!1), v = p(), T = p(!1), w = N(() => e.guideNavData ? JSON.parse(e.guideNavData) : []);
    N(() => (n("renda"), e.teleportToSlideout ? T.value : !0));
    const i = N(() => (n("huh"), e.teleportToSlideout && e.teleportSelector ? (n("ya"), e.teleportSelector) : (n("ba"), e.teleportSelector ? `#teleport-${e.guideDisplay}` : null)));
    function s() {
      _.value = window.location.hash.substr(1);
    }
    function r(a) {
      n(`Turning TLDR: ${a ? "on" : "off"}`), u.value = a, document.querySelectorAll(".tldr-show").forEach((c) => {
        a ? c.removeAttribute("hidden") : c.setAttribute("hidden", "hidden");
      }), document.querySelectorAll(".tldr-hide").forEach((c) => {
        a ? c.setAttribute("hidden", "hidden") : c.removeAttribute("hidden");
      }), localStorage.setItem("guide:display:tldr", a ? "true" : "false");
    }
    function I() {
      if (t.value) {
        const a = document.querySelector(
          `.guide-${t.value} .tldr-hide, .guide-${t.value} .tldr-show, .guide-${t.value} [class^="tldr:"]`
        );
        f.value = a !== null;
      }
    }
    return $(() => {
      var a;
      (a = w.value) != null && a.length && (t.value = w.value[0].slug, J && w.value.forEach((d) => {
        o[d.slug] = {
          boolean1: !1,
          boolean2: !1,
          boolean3: !1,
          boolean4: !1,
          boolean5: !1,
          number1: 0,
          number2: 0,
          number3: 0,
          number4: 0,
          number5: 0,
          string1: "",
          string2: "",
          string3: "",
          string4: "",
          string5: ""
        }, n("itss proooo", d, o);
      })), l.value = e.startInInlineEditor;
    }), L(() => {
      var d;
      I(), r(localStorage.getItem("guide:display:tldr") === "true"), window.addEventListener("hashchange", s), e.teleportToSlideout && ((d = window.Craft) == null ? void 0 : d.Slideout) && (v.value = new window.Craft.Slideout('<div id="guide-slideout"></div>', {
        autoOpen: !1,
        containerAttributes: {
          class: "g-relative g-overflow-y-auto"
        }
      }));
      const { appContext: a } = B();
      n(a), n("debug", i.value), n("GuideDisplay loaded");
    }), q(() => {
      window.removeEventListener("hashchange", s);
    }), P(t, () => {
      F(() => {
        I(), r(u.value);
      });
    }), () => {
    };
  }
});
const b = /* @__PURE__ */ k(W, [["__file", "GuideDisplay.vue"]]), X = /* @__PURE__ */ G({
  __name: "OnLoad",
  emits: ["loaded"],
  setup(m, { emit: e }) {
    return L(() => {
      e("loaded");
    }), (t, o) => V(t.$slots, "default");
  }
}), Y = /* @__PURE__ */ k(X, [["__file", "OnLoad.vue"]]), Z = { key: 0 }, ee = { key: 0 }, te = { key: 0 }, ae = { key: 1 }, ne = { key: 1 }, oe = { key: 0 }, le = { key: 1 }, ie = /* @__PURE__ */ G({
  __name: "PlacementInlineEditor",
  props: {
    placementId: String,
    placementInlineEditor: { type: String, required: !0 }
  },
  setup(m) {
    const e = m, t = p(), o = p(), f = p(!1);
    o.value = {
      access: "all",
      group: "uiElement",
      groupId: e.placementInlineEditor,
      guideId: null,
      id: e.placementId ? parseFloat(e.placementId) : null,
      portalMethod: "append",
      selector: null,
      theme: "default",
      uri: null
    };
    const _ = p(), l = N(() => {
      const i = [{ label: S["Select One"], value: "__none__" }];
      return A.forEach((s) => {
        i.push({ label: s.title, value: s.slug });
      }), i;
    });
    async function u() {
      var i, s;
      (i = o.value) != null && i.id && await ((s = window.Craft) == null ? void 0 : s.postActionRequest(
        "guide/placement/delete-placement",
        { data: JSON.stringify(o.value) },
        (r, I, a) => {
          var d, y, c, C;
          n("Deleting placement", r, I, a), f.value = !0, r.status === "success" ? (y = (d = window.Craft) == null ? void 0 : d.cp) == null || y.displayNotice("Guide removed") : (C = (c = window.Craft) == null ? void 0 : c.cp) == null || C.displayError(r.data.error);
        }
      ));
    }
    function v(i) {
      t.value = i;
    }
    function T() {
      t.value === "__none__" ? u() : w();
    }
    async function w() {
      var s;
      const i = A.find((r) => r.slug === t.value);
      o.value && i && (o.value.guideId = i.id), await ((s = window.Craft) == null ? void 0 : s.postActionRequest(
        "guide/placement/save-placement",
        { data: JSON.stringify(o.value) },
        (r, I, a) => {
          var d, y, c, C;
          n("Saving placement", r, I, a), f.value = !0, r.status === "success" ? (y = (d = window.Craft) == null ? void 0 : d.cp) == null || y.displayNotice("Guide UI element updated") : (C = (c = window.Craft) == null ? void 0 : c.cp) == null || C.displayError(r.data.error);
        }
      ));
    }
    return L(() => {
      _.value && _.value.setFieldValue(l.value[0].value), n("PlacementInlineEditor loaded");
    }), (i, s) => m.placementInlineEditor ? (E(), h("div", Z, [
      f.value ? (E(), h("div", ee, [
        t.value === "__none__" ? (E(), h("p", te, D(g(S).PLACEMENT_INLINE_EDITOR_CONFIRM_REMOVED), 1)) : (E(), h("p", ae, D(g(S).PLACEMENT_INLINE_EDITOR_CONFIRM_ADDED), 1))
      ])) : O("", !0),
      !f.value && g(H).useOrganizer ? (E(), h("div", ne, [
        g(A).length ? (E(), h("div", oe, [
          x(j, {
            ref_key: "guideField",
            ref: _,
            instructions: g(S).PLACEMENT_INLINE_EDITOR_FIELD_INSTRUCTIONS_GUIDE,
            label: g(S).Guide,
            name: "guide",
            options: g(l),
            onValueChanged: v
          }, null, 8, ["instructions", "label", "options"]),
          M("button", {
            class: "btn submit",
            type: "button",
            onClick: T
          }, D(g(S).Save), 1)
        ])) : (E(), h("div", le, [
          M("p", null, D(g(S).PLACEMENT_INLINE_EDITOR_NO_GUIDES), 1)
        ]))
      ])) : O("", !0)
    ])) : O("", !0);
  }
}), se = /* @__PURE__ */ k(ie, [["__file", "PlacementInlineEditor.vue"]]);
async function ce() {
  const m = document.querySelectorAll("[data-guide-display]");
  m && m.forEach((e) => {
    var t, o, f, _;
    if ((t = e.dataset) != null && t.guideDisplay) {
      if ((o = e.dataset) != null && o.teleportSelector) {
        const u = document.querySelector(e.dataset.teleportSelector);
        if (u) {
          const v = document.createElement("div");
          v.id = `teleport-${e.dataset.guideDisplay}`, (f = e.dataset) != null && f.teleportContainerClass && v.setAttribute("class", e.dataset.teleportContainerClass), ((_ = e.dataset) == null ? void 0 : _.teleportMethod) === "prepend" ? u.insertBefore(v, u.firstChild) : u.appendChild(v);
        }
      }
      b.name = "GuideDisplay", b.template = `#${e.dataset.guideDisplay}`, n("GuideDisplay", b, e);
      const l = U(b, { ...e.dataset });
      l.component("guide-modal", z), l.component("on-load", Y), l.component("placement-inline-editor", se), l.component("svg-guide", K), l.component("svg-settings", Q), l.config.compilerOptions.delimiters = ["${", "}"], l.config.errorHandler = (u) => {
        n("errorred", u);
      }, l.mount(e), n("Display mounted for", e.dataset.guideDisplay);
    }
  }), n("Display loaded");
}
export {
  ce as default
};
