import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

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
      <p className="sortBy">Sort by:</p>      
      <button>Priority<FaArrowUp /></button>
      <button>Title<FaArrowDown /></button>
      <button>Due Date</button>
      <button>Clear</button>
    </div>
  </div>
);