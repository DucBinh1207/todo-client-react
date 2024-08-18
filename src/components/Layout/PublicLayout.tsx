import { NavLink, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <div className="z-[-1] flex w-[100%] justify-center">
        <div className="w-[800px] font-kanit">
          <div className="relative flex justify-between border-solid border-peri pb-[40px] pt-[40px] after:absolute after:bottom-[30px] after:w-[100%] after:border-b after:border-solid after:border-peri after:content-['']">
            <h1 className="text-center text-[26px] font-medium leading-[39px] text-peri">
              TODO LIST
            </h1>
            <div className="flex gap-[20px]">
              <NavLink
                to="list"
                className={({ isActive }) =>
                  `btn text-peri ${isActive ? "bg-peri text-white" : "bg-transparent"}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="add"
                className={({ isActive }) =>
                  `btn text-peri ${isActive ? "bg-peri text-white" : "bg-transparent"}`
                }
              >
                Add
              </NavLink>

              <NavLink
                to="update/:id"
                className={({ isActive }) =>
                  `btn text-peri ${isActive ? "bg-peri text-white" : "bg-transparent"}`
                }
              >
                Update
              </NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
