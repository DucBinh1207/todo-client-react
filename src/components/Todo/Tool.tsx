type props = {
  setSearch: (value: string) => void;
  setFilter: (value: string) => void;
};

export default function Tool({ setSearch, setFilter }: props) {
  return (
    <div className="mt-[10px] flex items-center justify-between">
      <div className="search__box relative">
        <input
          type="text"
          className="input__task h-[44px] w-[545px] rounded-[5px] border border-solid bg-transparent py-[10px] pl-[10px] pr-[50px] focus:outline-none"
          placeholder="Search note..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass absolute right-[16px] top-[13px]"></i>
      </div>

      <select
        name=""
        id=""
        onChange={(e) => setFilter(e.target.value)}
        className="task__filter btn h-[44px] w-[204px] border border-solid border-peri bg-peri"
      >
        <option value="all" className="bg-white text-peri" selected>
          ALL
        </option>
        <option value="done" className="bg-white text-peri">
          DONE
        </option>
        <option value="not_done" className="bg-white text-peri">
          NOT DONE
        </option>
      </select>
    </div>
  );
}
