import cn from 'classnames';

export const TodoItem = ({ todo }) => (
  <div className={cn('TodoItem', { 'is-completed': todo.completed })}>
    <label className="TodoItem__checkbox-label">
      <input
        type="checkbox"
        className="TodoItem__checkbox"
        checked={todo.completed}
        readOnly
      />
    </label>

    <div className="TodoItem__content">
      <p className="TodoItem__title">{todo.title}</p>
      <p className="TodoItem__details">
        <span>{todo.category}</span> | <span>Priority: {todo.priority}</span> | <span>Due: {todo.dueDate}</span>
      </p>
    </div>

    <button className="TodoItem__delete-button">X</button>
  </div>
);