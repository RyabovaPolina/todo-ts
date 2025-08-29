import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { Task } from "./model/task";

function App() {
  const [todoList, setTodoList] = useState<Task[]>([
    { id: 10292, text: "haha", status: false },
  ]);

  function addToTodo(text: string) {
    const tempTodo: Task = {
      id: Date.now(),
      text: text,
      status: false,
    };
    setTodoList((prev) => [...prev, tempTodo]);
  }

  return (
    <>
      <TodoInput addTodo={addToTodo}></TodoInput>
      <TodoList todoList={todoList}></TodoList>
    </>
  );
}

export default App;
