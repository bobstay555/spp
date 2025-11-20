/** OpenNext Cloudflare config (CommonJS) — guaranteed executable */
module.exports = {
  nextjs: {
    // skip lint/type checks during Pages build
    disableESLint: true,
    disableTypeScript: true
  },
  cloudflare: {
    outputDir: ".open-next"
  }
};
