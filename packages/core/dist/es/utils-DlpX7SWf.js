import { f as t } from "./vendor-CDvNqNKY.js";
function i(a) {
  return (s) => t(a, (l) => {
    s.use(l);
  });
}
const n = (a) => (a.install = (r) => {
  const s = (a == null ? void 0 : a.name) || "UnnamedComponent";
  r.component(s, a);
}, a);
export {
  i as m,
  n as w
};
