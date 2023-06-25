import { Todo } from '../types/App';

interface TodoItemProps {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCompleteTodo: (id: string) => void;
}

function TodoItem(props: TodoItemProps) {
  const { todo, handleDeleteTodo, handleCompleteTodo } = props;
  return (
    <>
      <li key={todo.id} style={{color: todo.completed ? '#999': '#000', textDecorationLine: todo.completed ? 'line-through': ''}}>{todo.title}</li> 
      <button onClick={() => handleDeleteTodo(todo.id)}>del</button>
      <button onClick={() => handleCompleteTodo(todo.id)}>complete</button>
    </>
  );
}

export default TodoItem;