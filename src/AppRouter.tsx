import { Route, Routes } from "react-router";
import Todo from "./pages/Todo";
import PublicLayout from "./components/Layout/PublicLayout";
import AddTodo from "./pages/AddTodo";
import UpdateTodo from "./pages/UpdateTodo";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/tasks" element={<PublicLayout />}>
        <Route path="list" element={<Todo />}></Route>
        <Route path="add" element={<AddTodo />}></Route>
        <Route path="update/:id" element={<UpdateTodo />}></Route>
      </Route>
    </Routes>
  );
}
