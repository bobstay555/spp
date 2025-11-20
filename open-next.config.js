import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  nextjs: {
    // do not run eslint/typescript in production build
    disableESLint: true,
    disableTypeScript: true,
  },
  cloudflare: {
    outputDir: ".open-next",
  },
};

export default config;
