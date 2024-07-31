"use client";

import React from "react";
import goals from "../goals.json";
import SubGoal from "./SubGoal";
import { useState, useLayoutEffect } from "react";

const Main = () => {
  const [indexCompleted, SetIndexCompleted] = useState(-1);

  useLayoutEffect(() => {
    function pageScroll() {
      if (typeof window !== "undefined") {
        if (
          window.document.body.offsetHeight - scrollY - window.innerHeight <
          1
        ) {
          window.scrollTo(0, 0);
        }

        window.scrollBy({ top: 1, behavior: "smooth" });
      }
    }

    const scrollInterval = setInterval(pageScroll, 75);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <div className="h-screen"></div>
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
      <div className="h-screen"></div>
    </>
  );
};

export default Main;
