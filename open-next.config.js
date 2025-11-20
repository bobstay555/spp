/** @type {import("@opennextjs/cloudflare").OpenNextConfig} */
const config = {
  nextjs: {
    disableESLint: true,
    disableTypeScript: true,
  },
  cloudflare: {
    outputDir: ".open-next",
  },
};

export default config;
