const EditTask = () => {
  return (
    <div className=" p-3">
      <h1 className="font-bold text-[green]">Edit Your Progress...</h1>
      <ul className="">
        <li className="my-1 flex items-center justify-between bg-slate-100 p-3">
          <span>Pray for guidence</span>
          <select>
            <option value="0">None</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </li>
        <li className="my-1 flex items-center justify-between bg-slate-100 p-3">
          <span>Speaking English </span>
          <select>
            <option value="0">None</option>
            <option value="1">1 hours</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
            <option value="5">5 hours</option>
            <option value="6">6 hours</option>
            <option value="7">Lavel Completed</option>
          </select>
        </li>
        <li className="my-1 flex items-center justify-between bg-slate-100 p-3">
          <span>Coding for career </span>
          <select>
            <option value="0">None</option>
            <option value="1">1 hours</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
            <option value="5">5 hours</option>
            <option value="6">6 hours</option>
            <option value="7">LavelCompleted</option>
          </select>
        </li>
        <li className="my-1 flex items-center justify-between bg-slate-100 p-3">
          <span>sleep for health </span>
          <select>
            <option value="0">None</option>
            <option value="6">6 hours</option>
            <option value="2">7 hours</option>
            <option value="3">8 hours</option>
            <option value="3">9 hours</option>
          </select>
        </li>
        <li className="my-1 flex items-center justify-between bg-slate-100 p-3">
          <span>Shamelessness </span>
          <select>
            <option value="0">None</option>
            <option value="6">vary little</option>
            <option value="2">Little</option>
            <option value="3">mid</option>
            <option value="3">hight</option>
          </select>
        </li>
        <li className="my-1 flex items-center justify-between bg-slate-100 p-3">
          <span>exercise for fitness </span>
          <select>
            <option value="0">None</option>
            <option value="6">30 min</option>
            <option value="6">45 min</option>
            <option value="6">1 hours</option>
          </select>
        </li>
        <li>
          <textarea
            name=""
            id="textArea"
            className="h-[200px] w-full bg-slate-100 p-3 outline-none"
            placeholder="Comment here ..."
          ></textarea>
        </li>
        <li className="text-right">
          <button className="my-3 rounded-md bg-[#2b7eb6e1] px-5 py-3 text-white hover:bg-[#1c66a7]">
            Save
          </button>
        </li>
      </ul>
    </div>
  );
};

export default EditTask;
