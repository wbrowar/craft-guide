import { d as D, o as k, _ as L, r as i, c as A, a as R, b as _, t as b, u as c, e as O, f as $, g as G, h as g, i as q, w as P, n as B, j as F } from "./_plugin-vue_export-helper.ac8eb838.js";
import { l as m, t as v, g as T, u as U, p as V } from "./guide.13c0c9fc.js";
import { C as x, M as J, S as j, a as z } from "./SvgSettings.fa0aaa27.js";
const H = /* @__PURE__ */ D({
  __name: "OnLoad",
  emits: ["loaded"],
  setup(p, { emit: e }) {
    return k(() => {
      e("loaded");
    }), (a, l) => null;
  }
}), K = /* @__PURE__ */ L(H, [["__file", "/Users/wbrowar/CODE/craft_v4/craft-guide/_source/components/OnLoad.vue"]]), Q = { key: 0 }, W = { key: 0 }, X = { key: 0 }, Y = { key: 1 }, Z = { key: 1 }, ee = { key: 0 }, te = { key: 1 }, ae = /* @__PURE__ */ D({
  __name: "PlacementInlineEditor",
  props: {
    placementId: String,
    placementInlineEditor: { type: String, required: !0 }
  },
  setup(p) {
    const e = p, a = i(), l = i(), r = i(!1);
    l.value = {
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
    const d = i(), u = A(() => {
      const n = [{ label: v["Select One"], value: "__none__" }];
      return T.forEach((o) => {
        n.push({ label: o.title, value: o.slug });
      }), n;
    });
    async function f() {
      var n, o;
      (n = l.value) != null && n.id && await ((o = window.Craft) == null ? void 0 : o.postActionRequest(
        "guide/placement/delete-placement",
        { data: JSON.stringify(l.value) },
        (t, y, C) => {
          var s, E, h, I;
          m("Deleting placement", t, y, C), r.value = !0, t.status === "success" ? (E = (s = window.Craft) == null ? void 0 : s.cp) == null || E.displayNotice("Guide removed") : (I = (h = window.Craft) == null ? void 0 : h.cp) == null || I.displayError(t.data.error);
        }
      ));
    }
    function S(n) {
      a.value = n;
    }
    function N() {
      a.value === "__none__" ? f() : w();
    }
    async function w() {
      var o;
      const n = T.find((t) => t.slug === a.value);
      l.value && n && (l.value.guideId = n.id), await ((o = window.Craft) == null ? void 0 : o.postActionRequest(
        "guide/placement/save-placement",
        { data: JSON.stringify(l.value) },
        (t, y, C) => {
          var s, E, h, I;
          m("Saving placement", t, y, C), r.value = !0, t.status === "success" ? (E = (s = window.Craft) == null ? void 0 : s.cp) == null || E.displayNotice("Guide UI element updated") : (I = (h = window.Craft) == null ? void 0 : h.cp) == null || I.displayError(t.data.error);
        }
      ));
    }
    return R(() => {
      d.value.setFieldValue(u.value[0].value), m("PlacementInlineEditor loaded");
    }), (n, o) => p.placementInlineEditor ? (g(), _("div", Q, [
      r.value ? (g(), _("div", W, [
        a.value === "__none__" ? (g(), _("p", X, b(c(v).PLACEMENT_INLINE_EDITOR_CONFIRM_REMOVED), 1)) : (g(), _("p", Y, b(c(v).PLACEMENT_INLINE_EDITOR_CONFIRM_ADDED), 1))
      ])) : O("v-if", !0),
      !r.value && c(U).useOrganizer ? (g(), _("div", Z, [
        c(T).length ? (g(), _("div", ee, [
          $(x, {
            ref_key: "guideField",
            ref: d,
            instructions: c(v).PLACEMENT_INLINE_EDITOR_FIELD_INSTRUCTIONS_GUIDE,
            label: c(v).Guide,
            name: "guide",
            options: c(u),
            onValueChanged: S
          }, null, 8, ["instructions", "label", "options"]),
          G("button", {
            class: "btn submit",
            type: "button",
            onClick: N
          }, b(c(v).Save), 1)
        ])) : (g(), _("div", te, [
          G("p", null, b(c(v).PLACEMENT_INLINE_EDITOR_NO_GUIDES), 1)
        ]))
      ])) : O("v-if", !0)
    ])) : O("v-if", !0);
  }
}), ne = /* @__PURE__ */ L(ae, [["__file", "/Users/wbrowar/CODE/craft_v4/craft-guide/_source/components/PlacementInlineEditor.vue"]]), le = D({
  name: "GuideDisplay",
  delimiters: ["${", "}"],
  components: {
    Modal: J,
    OnLoad: K,
    PlacementInlineEditor: ne,
    SvgGuide: j,
    SvgSettings: z
  }
}), oe = /* @__PURE__ */ D({
  ...le,
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
  setup(p) {
    const e = p, a = i(""), l = i({}), r = i(!1), d = i(e.guideNavData ? JSON.parse(e.guideNavData) : []), u = i(""), f = i(!1), S = i(!1), N = i(!1);
    A(() => e.teleportToSlideout ? N.value : !0), A(() => e.teleportToSlideout ? e.teleportSelector : e.teleportSelector ? `#teleport-${e.guideDisplay}` : null), V && d.value.forEach((t) => {
      l.value[t.slug] = {
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
      };
    });
    function w() {
      u.value = window.location.hash.substr(1);
    }
    function n(t) {
      m(`Turning TLDR: ${t ? "on" : "off"}`), S.value = t, document.querySelectorAll(".tldr-show").forEach((s) => {
        t ? s.removeAttribute("hidden") : s.setAttribute("hidden", "hidden");
      }), document.querySelectorAll(".tldr-hide").forEach((s) => {
        t ? s.setAttribute("hidden", "hidden") : s.removeAttribute("hidden");
      }), localStorage.setItem("guide:display:tldr", t ? "true" : "false");
    }
    function o() {
      if (a.value) {
        const t = document.querySelector(
          `.guide-${a.value} .tldr-hide, .guide-${a.value} .tldr-show, .guide-${a.value} [class^="tldr:"]`
        );
        m(`.guide-${a.value}`, t), r.value = t !== null;
      }
    }
    return k(() => {
      var t;
      (t = d.value) != null && t.length && (a.value = d.value[0].slug), f.value = e.startInInlineEditor;
    }), R(() => {
      o(), n(localStorage.getItem("guide:display:tldr") === "true"), window.addEventListener("hashchange", w), new window.Craft.Slideout('<div id="guide-slideout"></div>', {
        autoOpen: !1,
        containerAttributes: {
          class: "g-relative g-overflow-y-auto"
        }
      }), m("GuideDisplay loaded");
    }), q(() => {
      window.removeEventListener("hashchange", w);
    }), P(a, () => {
      B(() => {
        o(), n(S.value);
      });
    }), () => {
    };
  }
});
const M = /* @__PURE__ */ L(oe, [["__file", "/Users/wbrowar/CODE/craft_v4/craft-guide/_source/components/GuideDisplay.vue"]]);
async function de() {
  const p = document.querySelectorAll("[data-guide-display]");
  p && p.forEach((e) => {
    var a, l, r, d;
    if ((a = e.dataset) != null && a.guideDisplay) {
      if ((l = e.dataset) != null && l.teleportSelector) {
        const u = document.querySelector(e.dataset.teleportSelector);
        if (u) {
          const f = document.createElement("div");
          f.id = `teleport-${e.dataset.guideDisplay}`, (r = e.dataset) != null && r.teleportContainerClass && f.setAttribute("class", e.dataset.teleportContainerClass), ((d = e.dataset) == null ? void 0 : d.teleportMethod) === "prepend" ? u.insertBefore(f, u.firstChild) : u.appendChild(f);
        }
      }
      M.template = `#${e.dataset.guideDisplay}`, F({ ...M }, e.dataset).mount(e);
    }
  }), m("Display loaded");
}
export {
  de as default
};
