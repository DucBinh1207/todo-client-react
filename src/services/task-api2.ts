import { Task } from "../components/Todo/List";
import { get, post, remove, update } from "./index2";

export function getTasksApi(paramTool: unknown) {
  return get<Task[]>({ url: "/tasks", params: paramTool });
}

export function addTaskApi(task: Task) {
  return post({ url: "/tasks", data: task });
}

export function updateTaskApi(task: Task) {
  return update({ url: "/tasks/" + task.id, data: task });
}

export function deleteTaskApi(taskId: string) {
  return remove({ url: "/tasks/" + taskId });
}
