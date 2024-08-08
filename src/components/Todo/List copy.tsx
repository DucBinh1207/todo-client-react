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
import Paging from "./Paging";
// import Modal from "../Modal";

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
  const [paging, setPaging] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);

  console.log(isLoading);

  async function getTasks() {
    try {
      setIsLoading(true);
      // if (paging !== 1 && (search !== "" || filter !== "all")) {
      //   setPaging(1);
      // }
      const params = {
        _limit: 10,
        _page: paging,
        content_like: search,
        isChecked:
          filter === "done" ? true : filter === "not_done" ? false : undefined,
      };
      const data = await getTasksApi(params);
      setData(data);
      setPageNumber(
        Math.ceil(
          (
            await getTasksApi({
              content_like: search,
              isChecked:
                filter === "done"
                  ? true
                  : filter === "not_done"
                    ? false
                    : undefined,
            })
          ).length / 10,
        ),
      );
    } catch (e) {
      // nothing
    } finally {
      setIsLoading(false);
    }
  }

  async function defaultState() {
    setSearch("");
    setFilter("all");
    setPaging(1);
  }

  async function addTask(newTask: Task) {
    try {
      setIsLoading(true);
      setIsAdd(true);
      await addTaskApi(newTask);
      getTasks();
      defaultState();
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

  function handleSearch(search: string) {
    setSearch(search);
    setPaging(1);
  }

  function handleFilter(filter: string) {
    setFilter(filter);
    setPaging(1);
  }

  useEffect(() => {
    getTasks();
  }, [search, filter, paging]);

  return (
    <div>
      <Form
        addTask={addTask}
        editTask={editTask}
        setIsAdd={setIsAdd}
        taskUpdate={taskUpdate}
        isAdd={isAdd}
      />
      <Tool setSearch={handleSearch} setFilter={handleFilter} />

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

        <Paging pageNumber={pageNumber} paging={paging} setPaging={setPaging} />
      </div>
    </div>
  );
}
