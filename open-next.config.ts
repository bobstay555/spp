import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  cloudflare: {
    outputDir: ".open-next",
  },
  nextjs: {
    disableESLint: true,
    disableTypeScript: true,
  },
};

export default config;
