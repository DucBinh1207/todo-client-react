export default function Tool() {
  return (
    <div className="mt-[10px] flex items-center justify-between">
      <div className="search__box relative">
        <input
          type="text"
          className="input__task h-[44px] w-[545px] rounded-[5px] border border-solid bg-transparent py-[10px] pl-[10px] pr-[50px] focus:outline-none"
          placeholder="Search note..."
        />
        <i className="fa-solid fa-magnifying-glass absolute right-[16px] top-[13px]"></i>
      </div>

      <select
        name=""
        id=""
        className="task__filter btn border-peri bg-peri h-[44px] w-[174px] border border-solid"
      >
        <option value="all" className="text-peri bg-white" selected>
          ALL
        </option>
        <option value="done" className="text-peri bg-white">
          DONE
        </option>
        <option value="not_done" className="text-peri bg-white">
          NOT DONE
        </option>
      </select>
    </div>
  );
}
