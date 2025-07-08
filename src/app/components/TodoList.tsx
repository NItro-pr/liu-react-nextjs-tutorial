import { Todo } from "../page";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="mr-2"
          />
          <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
          <button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white p-1 rounded ml-auto">Delete</button>
        </li>
      ))}
    </ul>
  );
}
