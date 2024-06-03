import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between">
      <input type="text" value={todo.title}
             className="form-control me-2"
             onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
      <button className="btn btn-success" 
              onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click">Add</button>
      <button className="btn btn-warning" 
              onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click">Update</button>
    </li>
  );
}
