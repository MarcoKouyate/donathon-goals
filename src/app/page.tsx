"use client";
import Main from "./components/Main";

import goals from "./goals.json";

export default function Home() {
  return (
    <main>
      <Main goals={goals} />
    </main>
  );
}
