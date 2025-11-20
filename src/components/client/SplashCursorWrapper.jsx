'use client';

import SplashCursor from "@/components/SplashCursor";

export default function SplashCursorWrapper(props) {
  // Props are ignored because SplashCursor does not use them.
  // But this prevents React errors and allows clean usage.
  return <SplashCursor />;
}
