import { Todo } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  const todoList = useSelector((state: RootState) => state.todos.todos);
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
