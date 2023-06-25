import React, {useState} from 'react';
import './App.css';
import TodoItem from '../components/todo-item';
import { Todo } from '../types/App';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [inputValue, setInputValue] = useState<string>('')

  const handleAddTodo = () => {
    if(inputValue.trim() !== '') {
      setTodos([...todos, {
        id: `${Date.now()}_${Math.random() * 100}`,
        title: inputValue,
        completed: false
      }])
      setInputValue('')
    }
  }

  const handleCompleteTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleDeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
