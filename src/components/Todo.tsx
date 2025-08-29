import type { Task } from "../model/task";

export default function Todo({ text, status }: Task) {
  return (
    <div
      className="todo-item"
      style={{
        display: "flex",
        border: "1px solid white",
        textDecoration: status ? "line-through" : "none",
      }}
    >
      <input type="checkbox"></input>
      <p>{text}</p>
    </div>
  );
}
