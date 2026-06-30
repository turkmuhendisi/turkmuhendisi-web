"use client";

import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function SplineScene() {
  return (
    <Spline
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
    />
  );
}

export function GalaxyWaveBackground() {
  return (
    <div className="spline-background absolute inset-0 overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <SplineScene />
      </Suspense>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
        }}
      />
    </div>
  );
}
