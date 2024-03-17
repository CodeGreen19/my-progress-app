import { BrowserRouter, Routes, Route } from "react-router-dom";
import Progress from "./components/progress/Progress";
import Navbar from "./components/navigation/Navbar";
import CheckList from "./components/checkList/CheckList";
import Footer from "./components/Footer";
import Task from "./components/editTask/Task";

const App = () => {
  return (
    <BrowserRouter>
      <div className="m-auto mt-[70px] w-full md:mt-[90px] md:w-[60%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<CheckList />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/main-task/:id" element={<Task />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
