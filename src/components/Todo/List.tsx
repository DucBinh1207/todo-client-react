import { useEffect } from "react";
import Item from "./Item";
import Tool from "./Tool";
import Blank from "./Blank";
import {
  deleteTaskApi,
  getTasksApi,
  updateTaskApi,
} from "../../services/task-api2";
import Paging from "./Paging";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteTask,
  fetchInitialTasks,
  fetchTasks,
  updateTask,
} from "../../store/thunks/task.thunk";
// import Modal from "../Modal";

export type Task = {
  id: string;
  content: string;
  isChecked: boolean;
};

export default function List() {
  const dispatch = useAppDispatch();

  const setData = (data: Task[]) => {
    dispatch({ type: "tasks/setTasks", payload: data });
  };

  const setIsLoading = (isLoading: boolean) => {
    dispatch({ type: "tasks/setIsLoading", payload: isLoading });
  };

  const setSearch = (search: string) => {
    dispatch({ type: "tasks/setSearch", payload: search });
  };

  const setFilter = (filter: string) => {
    dispatch({ type: "tasks/setFilter", payload: filter });
  };

  const setPaging = (paging: number) => {
    dispatch({ type: "tasks/setPaging", payload: paging });
  };

  const setPageNumber = (pageNumber: number) => {
    dispatch({ type: "tasks/setPageNumber", payload: pageNumber });
  };

  const data = useAppSelector((state) => state.tasks.data);
  const task = useAppSelector((state) => state.tasks.task);
  const isLoading = useAppSelector((state) => state.tasks.isLoading);
  const search = useAppSelector((state) => state.tasks.search);
  const filter = useAppSelector((state) => state.tasks.filter);
  const paging = useAppSelector((state) => state.tasks.paging);
  const pageNumber = useAppSelector((state) => state.tasks.pageNumber);

  async function getTasks() {
    try {
      dispatch(
        fetchInitialTasks({
          content_like: search,
          isChecked:
            filter === "done"
              ? true
              : filter === "not_done"
                ? false
                : undefined,
        }),
      );
      const params = {
        _limit: 10,
        _page: paging,
        content_like: search,
        isChecked:
          filter === "done" ? true : filter === "not_done" ? false : undefined,
      };
      dispatch(fetchTasks(params));

      // setData(data);
      // setPageNumber(
      //   Math.ceil(
      //     (
      //       await getTasksApi({
      //         content_like: search,
      //         isChecked:
      //           filter === "done"
      //             ? true
      //             : filter === "not_done"
      //               ? false
      //               : undefined,
      //       })
      //     ).length / 10,
      //   ),
      // );
    } catch (e) {
      // nothing
    } finally {
      setIsLoading(false);
    }
  }

  function updateCheckTask(taskId: string) {
    data.map(async (task) => {
      if (task.id === taskId) {
        const taskUpdate = { ...task };
        taskUpdate.isChecked = !taskUpdate.isChecked;
        dispatch(updateTask(taskUpdate));
        getTasks();
      }
    });
  }

  async function handleDeleteTask(taskId: string) {
    try {
      dispatch(deleteTask(taskId));
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
              key={task.id}
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
