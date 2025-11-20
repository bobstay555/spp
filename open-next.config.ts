/** OpenNext v1 config for Cloudflare */
import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  nextjs: {
    disableESLint: true,
    disableTypeScript: true,
  },
  cloudflare: {
    outputDir: ".open-next",
  },
};

export default config;
