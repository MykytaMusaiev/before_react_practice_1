export const TodoForm = () => (
    <form className="TodoForm">
        <h2>Add new Todo</h2>
        <input type="text" placeholder="Title" />
        <select>
            <option>Work</option>
            <option>Personal</option>
            <option>Study</option>
        </select>
        <select>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
        </select>
        <input type="date" />
        <button type="submit">Add</button>
    </form>
);
