import { Task } from "../components/Todo/List";
import restApi from "./index";

export async function getTasks(query: string): Promise<Task[]> {
  try {
    return await restApi<Task[]>({
      endpoint: `tasks/?${query}`,
      method: "GET",
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTaskById(id: number): Promise<Task> {
  try {
    return await restApi<Task>({
      endpoint: `tasks/${id}`,
      method: "GET",
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const createTask = async (task: Task): Promise<undefined | Task> => {
  try {
    return await restApi({
      endpoint: `tasks`,
      method: "POST",
      body: task,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (task: Task): Promise<undefined | Task> => {
  try {
    return await restApi({
      endpoint: `tasks/${task.id}`,
      method: "PUT",
      body: task,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (taskId: string): Promise<undefined | Task> => {
  try {
    return await restApi({
      endpoint: `tasks/${taskId}`,
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
