import { useEffect, useState } from "react";
import Form from "./Form";
import Item from "./Item";
import Tool from "./Tool";
import Blank from "./Blank";
import {
  addTaskApi,
  deleteTaskApi,
  getTasksApi,
  updateTaskApi,
} from "../../services/task-api2";

export type Task = {
  id: string;
  content: string;
  isChecked: boolean;
};

export default function List() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Task[]>([]);

  const defaultTask: Task = {
    id: "",
    content: "",
    isChecked: false,
  };
  const [taskUpdate, setTaskUpdate] = useState<Task>(defaultTask);
  const [isAdd, setIsAdd] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  async function getTasks() {
    try {
      setIsLoading(true);
      const param = {
        content_like: search,
        isChecked:
          filter === "done" ? true : filter === "not_done" ? false : undefined,
      };
      const data = await getTasksApi(param);
      setData(data);
    } catch (e) {
      // nothing
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTasks();
  }, [search, filter]);

  async function addTask(newTask: Task) {
    try {
      setIsLoading(true);
      setIsAdd(true);
      await addTaskApi(newTask);
      getTasks();
    } catch (e) {
      // nothing
    } finally {
      setIsLoading(false);
    }
  }

  function updateCheckTask(taskId: string) {
    data.map(async (task) => {
      if (task.id === taskId) {
        task.isChecked = !task.isChecked;
        await updateTaskApi(task);
        // updateTask(task);
        getTasks();
      }
    });
  }

  async function editTask(newTask: Task) {
    try {
      setIsLoading(true);
      setIsAdd(true);
      await updateTaskApi(newTask);
      getTasks();
    } catch (e) {
      // nothing
    } finally {
      setIsLoading(false);
    }
  }

  function handleEditTask(task: Task) {
    setIsAdd(false);
    setTaskUpdate(task);
  }

  async function handleDeleteTask(taskId: string) {
    try {
      setIsLoading(true);
      await deleteTaskApi(taskId);
      getTasks();
    } catch (e) {
      // nothing
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Form
        addTask={addTask}
        editTask={editTask}
        setIsAdd={setIsAdd}
        taskUpdate={taskUpdate}
        isAdd={isAdd}
      />
      <Tool setSearch={setSearch} setFilter={setFilter} />

      <div className="mt-[50px] flex flex-col gap-[34px]">
        {data.length === 0 && search === "" && filter === "All" ? (
          <Blank />
        ) : (
          data.map((task) => (
            <Item
              handleCheckTask={updateCheckTask}
              handleEditTask={handleEditTask}
              handleDeleteTask={handleDeleteTask}
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
