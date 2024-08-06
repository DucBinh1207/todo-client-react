// import { useState } from "react";
// import { Task } from "./List";
// import { v4 as uuidv4 } from "uuid";

// type Props = {
//   addTask: (data: Task) => void;
//   editTask: (task: Task) => void;
//   taskUpdate: Task;
//   isAdd: boolean;
// };

// export default function Form({ addTask, editTask, taskUpdate, isAdd }: Props) {
//   const [content, setContent] = useState("");
//   if (!isAdd) setContent(taskUpdate.content);

//   function handleSubmit() {
//     if (isAdd) {
//       const id = uuidv4();
//       addTask({ id, content, isChecked: false });
//       setContent("");
//     } else {
//       const newTask: Task = {
//         id: taskUpdate.id,
//         content: content,
//         isChecked: taskUpdate.isChecked,
//       };
//       editTask(newTask);
//       setContent("");
//     }
//   }

//   return (
//     <div className="flex items-center justify-between">
//       {isAdd ? (
//         <input
//           type="text"
//           className="input__task h-[44px] w-[545px] rounded-[5px] border border-solid bg-transparent p-[10px] focus:outline-none"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Input your note..."
//         />
//       ) : (
//         <input
//           type="text"
//           className="input__task h-[44px] w-[545px] rounded-[5px] border border-solid bg-transparent p-[10px] focus:outline-none"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Input your note..."
//         />
//       )}

//       <div className="btn__section flex w-[174px] gap-[10px]">
//         <button
//           className="add__btn btn border border-solid border-peri bg-peri hover:border-solid hover:border-white hover:bg-transparent"
//           onClick={handleSubmit}
//           disabled={!content}
//         >
//           {isAdd ? "Add Task" : "Update Task"}
//         </button>

//         <button className="clear__btn btn border border-solid bg-transparent hover:border-peri hover:bg-peri">
//           CLEAR
//         </button>
//       </div>
//     </div>
//   );
// }
