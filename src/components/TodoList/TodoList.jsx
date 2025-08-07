import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </div>
);