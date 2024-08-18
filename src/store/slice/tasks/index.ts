import { Task } from "./../../../components/Todo/List";
import { createSlice } from "@reduxjs/toolkit";

type TasksState = {
  data: Task[];
  isLoading: boolean;
  search: string;
  filter: string;
  paging: number;
  pageNumber: number;
};

const initialState: TasksState = {
  data: [],
  isLoading: false,
  search: "",
  filter: "All",
  paging: 1,
  pageNumber: 0,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setPaging: (state, action) => {
      state.paging = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

const { reducer, actions } = tasksSlice;
const { getTasks, setTasks } = actions;

export { getTasks, setTasks };

export default reducer;
