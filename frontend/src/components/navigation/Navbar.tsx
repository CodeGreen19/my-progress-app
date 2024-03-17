import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import progressSvg from "../../assets/progress.svg";

const Navbar = () => {
  return (
    <div className="bb_1 fixed left-0 top-0 z-10 flex h-[70px] w-full items-center justify-between border-[#0037ff35] bg-[white] px-3 md:left-[20%] md:h-[90px]  md:w-[60%]">
      <Link to={"/"}>
        <div className="flex h-full items-center justify-center">
          <img className="h-[50px] md:h-[80px]" src={logo} alt="main-logo" />
          <span className="mt-3 border-[#1e33acad] pb-1 text-[1.1rem] font-bold  text-[#1e5381]">
            MMProgress
          </span>
        </div>
      </Link>
      <div>
        <Link to={"/progress"}>
          <img className="h-[30px] md:h-[50px]" src={progressSvg} alt="svg" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
