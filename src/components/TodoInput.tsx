import { useState } from "react";

type AddFunction = {
  addTodo: (text: string) => void;
};

export default function TodoInput({ addTodo }: AddFunction) {
  const [todo, setTodo] = useState("");

  function onAddTodo() {
    if (!todo.trim()) return;
    addTodo(todo);
    setTodo("");
  }

  return (
    <div
      className="container-input-todo"
      style={{
        marginBottom: "20px",
        width: "auto",
        display: "flex",
      }}
    >
      <input
        type="text"
        value={todo}
        style={{
          padding: "15px",
          background: "transparent",
          border: "1px solid white",
          width: "100%",
          borderRadius: "12px",
          marginRight: "15px",
        }}
        placeholder="введите текст задачи"
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={onAddTodo}>add</button>
    </div>
  );
}
