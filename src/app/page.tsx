"use client";

import SubGoal from "./components/SubGoal";
import React, { useState } from "react";
import goals from "./goals.json";

export default function Home() {
  const [indexCompleted, SetIndexCompleted] = useState(0);

  return (
    <main>
      {goals.map((goal, index) => {
        return (
          <div
            onClick={() => {
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
