import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "rgb(126, 159, 195)",
  },
  generate: {
    fallback: "404.html", // for Netlify
    routes: ["/"], // give the first url to start crawling
  },
  loading: { color: "rgb(126, 159, 195)" },
  server: {
    port: 4000,
  },
});
