import SubGoal from "./components/SubGoal";
import goals from "./goals.json";

export default function Home() {
  return (
    <main>
      {goals.map((goal) => {
        return (
          <SubGoal title={goal.title} done={goal.done} amount={goal.amount} />
        );
      })}
    </main>
  );
}
