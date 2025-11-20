import type { Metadata } from "next";
import SplashCursor from "@/components/SplashCursor";

import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Smile Pic Photography | Alangulam, Tenkasi",
  description:
    "Smile Pic Photography – Professional Portrait, Wedding, Event, Maternity, Newborn, Family, Corporate, Drone & Commercial Photography in Alangulam, Tenkasi. Contact: 63829 54626 / 80567 23261.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">

        {/* 🔥 GLOBAL FLUID CURSOR HERE */}
        <SplashCursor />

        <ErrorReporter />

        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{\"appName\": \"YourApp\", \"version\": \"1.0.0\", \"greeting\": \"hi\"}'
        />

        {/* 🔥 YOUR WEBSITE CONTENT */}
        {children}

        <VisualEditsMessenger />
      </body>
    </html>
  );
}
