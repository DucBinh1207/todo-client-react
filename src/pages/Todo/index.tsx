import List from "../../components/Todo/List";

export default function Todo() {
  return (
    <div className="font-kanit w-[800px]">
      <h1 className="mb-[40px] mt-[40px] text-center text-[26px] font-medium leading-[39px]">
        TODO LIST
      </h1>
      <List />
    </div>
  );
}
