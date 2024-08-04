import { Task } from "./List";

type Props = Task;

export default function Item({ id, content, isChecked }: Props) {
  function handleChecked() {
    isChecked = !isChecked;
    console.log(isChecked);
  }

  return (
    <div className="task relative flex">
      <label className="container flex h-[26px] items-center gap-[17px] after:absolute after:top-[43px] after:w-[100%] after:border-t after:border-solid after:border-[#6c63ff] after:opacity-50 after:content-['']">
        <input
          type="checkbox"
          className="check__tasks peer hidden"
          checked={isChecked}
          onClick={handleChecked}
        />
        <span className="border-peri peer-checked:text-peri flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-[2px] border border-solid text-transparent">
          <i className="fa-solid fa-check"></i>
        </span>
        <div className="height-[20px] peer-checked:text-custom-gray-checked w-[80%] overflow-hidden text-ellipsis text-[20px] font-medium uppercase leading-[100%] peer-checked:select-none peer-checked:font-normal peer-checked:line-through">
          {content}
        </div>
      </label>
      <div className="task__tool__section absolute right-[8px] top-[4px] flex gap-[10px]">
        <div
          className="edit__task task__tool group cursor-pointer"
          data-id={id}
        >
          <i className="fa-regular fa-pen-to-square group-hover:text-peri text-[18px] text-[#cdcdcd]"></i>
        </div>
        <div
          className="delete__task task__tool group cursor-pointer"
          data-id={id}
        >
          <i className="fa-regular fa-trash-can text-[18px] text-[#cdcdcd] group-hover:text-red-400"></i>
        </div>
      </div>
    </div>
  );
}
