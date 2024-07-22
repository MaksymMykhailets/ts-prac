import TodoList from '../TodoList/TodoList';
import { useState, FormEvent } from 'react';
import { Todo } from '../../types/types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>('');

  const addTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (task) {
      const newTodo: Todo = { id: Date.now(), text: task };
      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  const deleteTodo = (id: number): void => {
    const updateTodos = todos.filter(todo => todo.id !== id);
    setTodos(updateTodos);
  };
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
