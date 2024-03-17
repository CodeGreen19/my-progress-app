import { ProgressArr } from "../utils/Utils";

const DayProgress = () => {
  return (
    <div className=" p-3">
      <h1>Day (4) progress (76%)</h1>
      <ul>
        {ProgressArr.map((item) => (
          <li
            key={item.name}
            className="relative  my-3 flex items-center justify-between overflow-hidden rounded-[50px] bg-slate-100 p-3 before:absolute before:left-0 before:top-0 before:h-full before:w-[20%] before:bg-[#4f1fb8] before:opacity-50"
          >
            <span>{item.name}</span>
            <span>{item.achieve}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayProgress;
