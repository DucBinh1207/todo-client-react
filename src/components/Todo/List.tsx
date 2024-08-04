import { useState } from "react";
import Form from "./Form";
import Item from "./Item";
import Tool from "./Tool";
import Blank from "./Blank";

export type Task = {
  id: string;
  content: string;
  isChecked: boolean;
};

export default function List() {
  const [data, setData] = useState<Task[]>([]);

  function addTask(newTask: Task) {
    setData([...data, newTask]);
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
              key={task.id}
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
