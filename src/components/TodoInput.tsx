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
    <>
      <input
        type="text"
        value={todo}
        placeholder="введите текст задачи"
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={onAddTodo}>add</button>
    </>
  );
}
