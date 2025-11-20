export default {
  cloudflare: {
    // required for Cloudflare Pages
    outputDir: ".open-next",
  },

  // optional, but recommended for performance
  nextjs: {
    disableESLint: true,
    disableTypeScript: true,
  },
};
