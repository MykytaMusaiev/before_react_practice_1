import { TodoList } from './components/TodoList/TodoList';
import { TodoForm } from './components/TodoForm/TodoForm';
import { FilterControls } from './components/FilterControls/FilterControls';
import { Header } from './components/HEader';

import todosFromServer from './api/todos.json';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="App__main">
        <div className="App__sidebar">
          <TodoForm />
        </div>

        <div className="App__content">
          <FilterControls />
          <TodoList todos={todosFromServer} />
        </div>
      </main>
    </div>
  );
};
