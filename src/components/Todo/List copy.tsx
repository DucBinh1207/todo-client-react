// import { useEffect, useState } from "react";
// import Form from "./Form";
// import Item from "./Item";
// import Tool from "./Tool";
// import Blank from "./Blank";
// import {
//   addTaskApi,
//   getTasksApi,
//   updateTaskApi,
// } from "../../services/task-api2";
// // import getQueryString from "../../utils/query";

// export type Task = {
//   id: string;
//   content: string;
//   isChecked: boolean;
// };

// export default function List() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState<Task[]>([]);

//   const defaultTask: Task = {
//     id: "",
//     content: "",
//     isChecked: false,
//   };
//   const [taskUpdate, setTaskUpdate] = useState<Task>(defaultTask);

//   let isAdd = false;

//   async function getTasks() {
//     try {
//       setIsLoading(true);
//       const data = await getTasksApi();
//       setData(data);
//     } catch (e) {
//       // nothing
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     getTasks();
//   }, []);

//   async function addTask(newTask: Task) {
//     try {
//       setIsLoading(true);
//       isAdd = true;
//       await addTaskApi(newTask);
//       getTasks();
//     } catch (e) {
//       // nothing
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   function updateCheckTask(taskId: string) {
//     data.map(async (task) => {
//       if (task.id === taskId) {
//         task.isChecked = !task.isChecked;
//         await updateTaskApi(task);
//         // updateTask(task);
//         getTasks();
//       }
//     });
//   }

//   function editTask(taskUpdate: Task) {
//     isAdd = false;
//     data.map(async (task) => {
//       if (task.id === taskUpdate.id) {
//         task.isChecked = taskUpdate.isChecked;
//         task.content = taskUpdate.content;
//         await updateTaskApi(task);
//         getTasks();
//       }
//     });
//   }

//   return (
//     <div>
//       <Form
//         addTask={addTask}
//         editTask={editTask}
//         taskUpdate={taskUpdate}
//         isAdd={isAdd}
//       />
//       <Tool />

//       <div className="mt-[50px] flex flex-col gap-[34px]">
//         {data.length === 0 ? (
//           <Blank />
//         ) : (
//           data.map((task) => (
//             <Item
//               handleCheckTask={updateCheckTask}
//               id={task.id}
//               content={task.content}
//               isChecked={task.isChecked}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
