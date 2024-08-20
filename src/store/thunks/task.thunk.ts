import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTaskApi,
  deleteTaskApi,
  getTaskApi,
  getTasksApi,
  updateTaskApi,
} from "../../services/task-api2";
import { Task } from "../../components/Todo/List";

type TasksParams = {
  _limit?: number;
  _page?: number;
  content_like?: string;
  isChecked?: boolean;
};

export const fetchInitialTasks = createAsyncThunk(
  "tasks/fetchInit",
  async (params: TasksParams, thunkAPI) => {
    try {
      const data = await getTasksApi(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  },
);

export const fetchTasks = createAsyncThunk(
  "tasks/fetch",
  async (params: TasksParams, thunkAPI) => {
    try {
      const data = await getTasksApi(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  },
);

export const getTaskById = createAsyncThunk(
  "tasks/getTask",
  async (taskId: string, thunkAPI) => {
    try {
      const data = await getTaskApi(taskId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  },
);

export const addTask = createAsyncThunk(
  "tasks/add",
  async (task: Task, thunkAPI) => {
    try {
      await addTaskApi(task);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  },
);

export const updateTask = createAsyncThunk(
  "tasks/update",
  async (task: Task, thunkAPI) => {
    try {
      await updateTaskApi(task);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  },
);

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (taskId: string, thunkAPI) => {
    try {
      await deleteTaskApi(taskId);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  },
);
