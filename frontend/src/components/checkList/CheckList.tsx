import TaskList from "./TaskList";

const CheckList = () => {
  let days = [];
  for (let i = 0; i < 21; i++) {
    days.push(i + 1);
  }
  return (
    <div className="mt-3 p-3">
      {days.map((item) => (
        <TaskList key={item} />
      ))}
    </div>
  );
};

export default CheckList;
