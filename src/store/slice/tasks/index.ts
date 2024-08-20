import {
  addTask,
  deleteTask,
  fetchInitialTasks,
  fetchTasks,
  getTaskById,
  updateTask,
} from "../../thunks/task.thunk";
import { Task } from "./../../../components/Todo/List";
import { createSlice } from "@reduxjs/toolkit";

type TasksState = {
  data: Task[];
  task?: Task;
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
    setTask: (state, action) => {
      state.task = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchInitialTasks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchInitialTasks.fulfilled, (state, action) => {
      state.pageNumber = Math.ceil(action.payload.length / 10);
    });

    builder.addCase(fetchInitialTasks.rejected, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = true;
    });

    builder.addCase(fetchTasks.rejected, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getTaskById.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getTaskById.fulfilled, (state, action) => {
      state.task = action.payload;
      state.isLoading = true;
    });

    builder.addCase(getTaskById.rejected, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addTask.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addTask.fulfilled, (state) => {
      state.isLoading = true;
    });

    builder.addCase(addTask.rejected, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateTask.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateTask.fulfilled, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateTask.rejected, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteTask.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteTask.fulfilled, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteTask.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

const { reducer, actions } = tasksSlice;
const { setTasks } = actions;

export { setTasks };

export default reducer;
