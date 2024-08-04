import { Task } from "../components/Todo/List";
import restApi from "./index";

export async function getProducts(query: string): Promise<Task[]> {
  try {
    return await restApi<Task[]>({
      endpoint: `products?${query}`,
      method: "GET",
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProductById(id: number): Promise<Task> {
  try {
    return await restApi<Task>({
      endpoint: `products/${id}`,
      method: "GET",
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const createTask = async (task: Task): Promise<Task> => {
  try {
    return await restApi({
      endpoint: `tasks`,
      method: "POST",
      body: task,
    });
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (task: Task): Promise<Task> => {
  try {
    return await restApi({
      endpoint: `tasks/${task.id}`,
      method: "PUT",
      body: task,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (taskId: string): Promise<Task> => {
  try {
    return await restApi({
      endpoint: `carts/${taskId}`,
      method: "DELETE",
    });
  } catch (error) {
    throw error;
  }
};
