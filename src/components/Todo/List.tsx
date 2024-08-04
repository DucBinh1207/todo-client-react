import { useEffect, useState } from "react";
import Form from "./Form";
import Item from "./Item";
import Tool from "./Tool";
import Blank from "./Blank";
import { createTask, getTasks, updateTask } from "../../services/task-api";
// import getQueryString from "../../utils/query";

export type Task = {
  id: string;
  content: string;
  isChecked: boolean;
};

export default function List() {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    renderTask();
  }, []);

  async function renderTask() {
    const Tasks = await getTasks("");
    setData(Tasks);
  }

  function addTask(newTask: Task) {
    createTask(newTask);
    renderTask();
  }

  function handleUpdateTask(taskId: string) {
    console.log(data);

    data.filter((task) => {
      if (task.id === taskId) {
        task.isChecked = !task.isChecked;
        updateTask(task);
        renderTask();
      }
    });
  }

  return (
    <div>
      <Form addTask={addTask} />
      <Tool />
      <div className="mt-[50px] flex flex-col gap-[34px]">
        {data.length === 0 ? (
          <Blank />
        ) : (
          data.map((task) => (
            <Item
              handleUpdateTask={handleUpdateTask}
              id={task.id}
              content={task.content}
              isChecked={task.isChecked}
            />
          ))
        )}
      </div>
    </div>
  );
}
