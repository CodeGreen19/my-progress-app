import { ProgressArr } from "../utils/Utils";

const Progress = () => {
  return (
    <div className="min-h-screen ">
      <h1 className="px-6 pt-2  font-bold text-[red]">Progress Overview....</h1>
      <ul className="p-3">
        {ProgressArr.map((item) => (
          <li
            key={item.name}
            className="relative  my-3 flex items-center justify-between overflow-hidden rounded-[50px] bg-slate-100 p-3 before:absolute before:left-0 before:top-0 before:h-full before:w-[20%] before:bg-[#17a233] before:opacity-50"
          >
            <span>{item.name}</span>
            <span>{item.achieve}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;
