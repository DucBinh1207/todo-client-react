import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function PublicLayout() {
  const [tab, setTab] = useState<number>(1);

  function handleButtonTab(e: React.MouseEvent<HTMLAnchorElement>) {
    console.log(e.currentTarget.textContent);
    switch (e.currentTarget.textContent) {
      case "Home":
        setTab(1);
        break;

      case "Add":
        setTab(2);
        break;

      case "Update":
        setTab(3);
        break;
    }
  }

  return (
    <div>
      <div className="z-[-1] flex w-[100%] justify-center">
        <div className="w-[800px] font-kanit">
          <div className="relative flex justify-between border-solid border-peri pb-[40px] pt-[40px] after:absolute after:bottom-[30px] after:w-[100%] after:border-b after:border-solid after:border-peri after:content-['']">
            <h1 className="text-center text-[26px] font-medium leading-[39px] text-peri">
              TODO LIST
            </h1>
            <div className="flex gap-[20px]">
              <div
                className={`btn text-peri ${tab === 1 ? "bg-peri text-white" : "bg-transparent"}`}
              >
                <Link
                  to="list"
                  onClick={(e) => {
                    handleButtonTab(e);
                  }}
                >
                  Home
                </Link>
              </div>

              <div
                className={`btn text-peri ${tab === 2 ? "bg-peri text-white" : "bg-transparent"}`}
              >
                <Link
                  to="add"
                  onClick={(e) => {
                    handleButtonTab(e);
                  }}
                >
                  Add
                </Link>
              </div>

              <div
                className={`btn text-peri ${tab === 3 ? "bg-peri text-white" : "bg-transparent"}`}
              >
                <Link
                  to="update/:id"
                  onClick={(e) => {
                    handleButtonTab(e);
                  }}
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
