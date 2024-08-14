"use client";
import Main from "./components/Main";

import { resolveResource } from "@tauri-apps/api/path";
import { readTextFile } from "@tauri-apps/api/fs";
import { useEffect, useState } from "react";

export default function Home() {
  const [goals, SetGoals] = useState([
    {
      title: "Test",
      amount: 1000,
    },
  ]);

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      SetGoals([
        {
          title: "Before Resolve",
          amount: 1000,
        },
      ]);

      const resourcePath = await resolveResource("resources/goals.json");
      console.log("before parse");
      const langDe = JSON.parse(await readTextFile(resourcePath));

      // set state with the result
      SetGoals(langDe[0].title);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <main>
      <Main goals={goals} />
    </main>
  );
}
