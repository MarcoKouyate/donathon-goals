"use client";

import SubGoal from "./components/SubGoal";
import React, { useState } from "react";
import goals from "./goals.json";

export default function Home() {
  const [indexCompleted, SetIndexCompleted] = useState(-1);

  return (
    <main>
      {goals.map((goal, index) => {
        return (
          <div
            onClick={() => {
              if (indexCompleted == 0) index = -1;
              SetIndexCompleted(index);
            }}
          >
            <SubGoal
              title={goal.title}
              done={index <= indexCompleted}
              amount={goal.amount}
            />
          </div>
        );
      })}
    </main>
  );
}
