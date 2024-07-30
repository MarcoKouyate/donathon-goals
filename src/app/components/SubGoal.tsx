import Image from "next/image";
import iconActive from "./goal-icon_active.png";
import iconInactive from "./goal-icon_inactive.png";
import localFont from "next/font/local";

interface SubGoalProps {
  title: string;
  amount: number;
  done: boolean;
}

const myFont = localFont({ src: "./Spaced OTF.otf" });

const SubGoal = (props: SubGoalProps) => {
  const common =
    "text-md relative bg-gradient-to-r  rounded-full m-4 py-2 px-5 flex justify-between ";
  const active =
    "from-pink-300 to-teal-200 shadow-[rgba(255,255,255,0.5)_0px_0px_3px_3px]";
  const inactive =
    "from-cyan-700 to-slate-700 shadow-[rgba(125,125,255,0.2)_0px_0px_3px_3px]";

  return (
    <div className={common + " " + (props.done ? active : inactive)}>
      <Image
        className="absolute -top-2 -left-6"
        src={props.done ? iconActive : iconInactive}
        alt="icon for successful goals"
        width={55}
        height={55}
      />
      <p className="pl-5 italic">{props.title}</p>
      <p
        className={
          "px-2 py-0 text-white rounded-full w-15 text-right " +
          (props.done
            ? " bg-amber-200 text-gray-600"
            : " bg-slate-500 shadow-[rgba(255,255,255,0.3)_0px_0px_2px_2px]")
        }
      >
        {props.amount}
      </p>
    </div>
  );
};

export default SubGoal;
