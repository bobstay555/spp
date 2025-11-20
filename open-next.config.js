/** Cloudflare-compatible OpenNext config */
module.exports = {
  nextjs: {
    disableESLint: true,
    disableTypeScript: true,
  },
  cloudflare: {
    outputDir: ".open-next",
  },
};
