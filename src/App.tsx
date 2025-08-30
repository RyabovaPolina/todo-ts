import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import type { Task } from "./model/task";

function App() {
  const [todoList, setTodoList] = useState<Task[]>([
    { id: 10292, text: "haha", status: false },
  ]);
  const [filter, setFilter] = useState("all");

  function addToTodo(text: string) {
    const tempTodo: Task = {
      id: Date.now(),
      text: text,
      status: false,
    };
    setTodoList((prev) => [...prev, tempTodo]);
  }

  function filterTodo(type: string): Task[] {
    switch (type) {
      case "all":
        return todoList;
      case "active":
        return todoList.filter((todo) => todo.status === false);
      case "completed":
        return todoList.filter((todo) => todo.status === true);
      default:
        return todoList;
    }
  }

  function completeTodo(id: number) {
    const upd = todoList.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodoList(upd);
  }

  function deleteCompleted() {
    const upd = todoList.filter((todo) => todo.status !== true);
    setTodoList(upd);
  }

  const filteredTodoList = filterTodo(filter);

  function changeFilter(type: "all" | "active" | "completed") {
    setFilter(type);
  }

  const activeTodoList = filterTodo("active");

  return (
    <div className="container-main">
      <h1>TODO</h1>
      <TodoInput addTodo={addToTodo}></TodoInput>
      <TodoList
        todoList={filteredTodoList}
        completeTodo={completeTodo}
      ></TodoList>
      <TodoFilter
        filterTodo={changeFilter}
        todoList={activeTodoList}
        deleteCompleted={deleteCompleted}
      ></TodoFilter>
    </div>
  );
}

export default App;
