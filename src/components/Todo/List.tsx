import { useEffect, useState } from "react";
import Item from "./Item";
import Tool from "./Tool";
import Blank from "./Blank";
import {
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

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [paging, setPaging] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);

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
      <Tool setSearch={handleSearch} setFilter={handleFilter} />

      <div className="mt-[50px] flex flex-col gap-[34px]">
        {data.length === 0 && search === "" && filter === "All" ? (
          <Blank />
        ) : (
          data.map((task) => (
            <Item
              handleCheckTask={updateCheckTask}
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
