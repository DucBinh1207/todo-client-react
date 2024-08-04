import { useState } from "react";
import { Task } from "./List";
import { v4 as uuidv4 } from "uuid";

type Props = {
  addTask: (data: Task) => void;
};

export default function Form({ addTask }: Props) {
  const [content, setContent] = useState("");
  //   const id = useId();

  function handleSubmit() {
    const id = uuidv4();
    addTask({ id, content, isChecked: false });
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

      <div className="btn__section flex w-[174px] gap-[10px]">
        <button
          className="add__btn btn bg-peri border-peri border border-solid hover:border-solid hover:border-white hover:bg-transparent"
          onClick={handleSubmit}
          disabled={!content}
        >
          ADD
        </button>

        <button className="clear__btn btn hover:bg-peri hover:border-peri border border-solid bg-transparent">
          CLEAR
        </button>
      </div>
    </div>
  );
}
