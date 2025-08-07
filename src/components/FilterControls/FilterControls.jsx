export const FilterControls = () => (
  <div className="FilterControls">
    <input type="text" placeholder="Search by title..." />
    <select>
      <option>All categories</option>
      <option>Work</option>
      <option>Personal</option>
      <option>Study</option>
    </select>
    <div className="buttons">
      <button>Sort by Title</button>
      <button>Sort by Due Date</button>
    </div>
  </div>
);