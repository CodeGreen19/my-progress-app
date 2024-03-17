import { Link } from "react-router-dom";
import edit from "../../assets/edit.svg";

const TaskList = () => {
  return (
    <ul className="b_1 relative my-2 flex items-center justify-between overflow-hidden rounded-[50px] border-[#94b1ff7a] bg-slate-200 p-4 before:absolute before:left-0 before:h-full before:w-[50px] before:bg-[#2252ff] before:opacity-50">
      <li>Day 1 (date 19) , Completed 50%</li>
      <li>
        <Link to={`/main-task/dfajsdk`}>
          <img className="h-[20px]" src={edit} alt="edit" />
        </Link>
      </li>
    </ul>
  );
};

export default TaskList;
