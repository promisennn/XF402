"use client";

import { hello } from "@xf402/js";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center font-sans flex">
      <button
        onClick={() => {
          alert(hello());
        }}
      >
        <h1 className="text-7xl font-bold text-white">Test XF402</h1>
      </button>
    </div>
  );
}
