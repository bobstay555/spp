/** OpenNext Cloudflare config (CommonJS) */
const config = {
  nextjs: {
    disableESLint: true,
    disableTypeScript: true,
  },
  cloudflare: {
    outputDir: ".open-next",
  },
};

module.exports = config;
