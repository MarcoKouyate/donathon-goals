import React from "react";

interface SubGoalProps {
  title: string;
  amount: number;
  done: boolean;
}

const SubGoal = (props: SubGoalProps) => {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-teal-200 rounded-full m-2 py-2 px-5">
      {props.title}
    </div>
  );
};

export default SubGoal;
