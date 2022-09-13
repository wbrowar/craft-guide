const t = document.getElementById("guide-admin-globals");
var r;
const v = (r = t == null ? void 0 : t.dataset) != null && r.assetComponents ? JSON.parse(t.dataset.assetComponents) : null;
var i;
const y = ((i = t == null ? void 0 : t.dataset) == null ? void 0 : i.assetPath) || "";
var c;
const w = (c = t == null ? void 0 : t.dataset) != null && c.devMode ? t.dataset.devMode === "true" : !1;
var p;
const M = (p = t == null ? void 0 : t.dataset) != null && p.guides ? JSON.parse(t.dataset.guides) : null;
var u;
const P = (u = t == null ? void 0 : t.dataset) != null && u.proEdition ? t.dataset.proEdition === "true" : !1;
var f;
const d = (f = t == null ? void 0 : t.dataset) != null && f.scope ? JSON.parse(t.dataset.scope) : [];
var O;
const l = (O = t == null ? void 0 : t.dataset) != null && O.settings ? JSON.parse(t.dataset.settings) : null;
var S;
const x = (S = t == null ? void 0 : t.dataset) != null && S.templates ? JSON.parse(t.dataset.templates) : null;
var h;
const C = (h = t == null ? void 0 : t.dataset) != null && h.translations ? JSON.parse(t.dataset.translations) : null;
var k;
const B = (k = t == null ? void 0 : t.dataset) != null && k.userOperations ? JSON.parse(t.dataset.userOperations) : null;
J("translations", C);
function J(...s) {
  N("log", s);
}
function D(...s) {
  N("table", s);
}
function N(s, a) {
  const o = "\u{1F4D3}";
  if (w)
    for (let e = 0; e < a.length; e++) {
      const n = e > 0 ? "\u25C9 " : "";
      switch (s) {
        case "dir":
          typeof a[e] == "string" ? console.dir(n + o + " " + a[e]) : console.dir(a[e]);
          break;
        case "error":
          console.error(n + o, a[e]);
          break;
        case "log":
          console.log(n + o, a[e]);
          break;
        case "table":
          console.table(a[e]);
          break;
        case "warn":
          console.warn(n + o, a[e]);
          break;
      }
    }
}
function F(s) {
  return s.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
d.includes("display") && import("./guide-display.881209a3.js").then((s) => {
  s.default();
});
d.includes("admin") && import("./guide-admin.8d6d890f.js").then((s) => {
  s.default();
});
d.includes("welcome") && import("./guide-welcome.f0eb68cf.js").then((s) => {
  s.default();
});
J("Guide loaded for scope", d);
export {
  v as a,
  x as b,
  D as c,
  y as d,
  w as e,
  M as g,
  F as k,
  J as l,
  P as p,
  l as s,
  C as t,
  B as u
};
