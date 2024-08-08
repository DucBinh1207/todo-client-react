import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../components/Todo/List";
import { addTaskApi } from "../../services/task-api2";
import { useNavigate } from "react-router-dom";

export default function AddTodo() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function addTask(newTask: Task) {
    try {
      await addTaskApi(newTask);
    } catch (e) {
      // nothing
    } finally {
      //nothing
    }
  }

  function handleSubmit() {
    const id = uuidv4();
    addTask({ id, content, isChecked: false });
    setContent("");
    navigate(`tasks/list`);
  }

  function handleCancel() {
    setContent("");
  }

  return (
    <div className="flex items-center justify-between">
      <input
        type="text"
        className="input__task h-[44px] w-[545px] rounded-[5px] border border-solid bg-transparent p-[10px] focus:outline-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Input your note..."
      />

      <div className="btn__section flex w-[204px] gap-[10px]">
        <button
          className="add__btn btn w-[100px] border border-solid border-peri bg-peri hover:border-solid hover:border-white hover:bg-transparent"
          onClick={handleSubmit}
          disabled={!content}
        >
          Add
        </button>

        <button
          className="clear__btn btn w-[100px] border border-solid bg-transparent hover:border-peri hover:bg-peri"
          onClick={() => handleCancel()}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}
