import { useEffect, useState } from "react";
import { Task } from "../../components/Todo/List";
import { getTaskApi, updateTaskApi } from "../../services/task-api2";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTodo() {
  const [content, setContent] = useState("");
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task>();
  const navigate = useNavigate();

  async function renderTask() {
    if (id && id !== ":id") {
      console.log(id);
      getTaskApi(id);
      const taskUpdate = await getTaskApi(id);
      setTask(taskUpdate);
      setContent(taskUpdate.content);
    }
  }

  async function updateTask() {
    try {
      if (task && id) {
        await updateTaskApi(task);
        navigate(`../../tasks/list`);
      }
    } catch (e) {
      // nothing
    } finally {
      //nothing
    }
  }

  function handleCancel() {
    setContent("");
  }

  function handleChangeContent() {
    if (task && id) {
      setTask({
        ...task,
        content: content,
      });
    }
  }

  useEffect(() => {
    renderTask();
  }, []);

  useEffect(() => {
    handleChangeContent();
  }, [content]);

  return (
    <div className="flex items-center justify-between">
      <input
        type="text"
        className="input__task h-[44px] w-[545px] rounded-[5px] border border-solid bg-transparent p-[10px] focus:outline-none"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder="Input your note..."
      />

      <div className="btn__section flex w-[204px] gap-[10px]">
        <button
          className="add__btn btn w-[100px] border border-solid border-peri bg-peri hover:border-solid hover:border-white hover:bg-transparent"
          onClick={() => {
            updateTask();
          }}
          disabled={!content}
        >
          UPDATE
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
