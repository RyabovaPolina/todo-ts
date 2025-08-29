import type { Task } from "../model/task";

type PropsTodo = Task & {
  completeTodo: (id: number) => void;
};

export default function Todo({ id, text, status, completeTodo }: PropsTodo) {
  return (
    <div
      className="todo-item"
      style={{
        display: "flex",
        borderRadius: "12px",
        marginBottom: "15px",
        textDecoration: status ? "line-through" : "none",
        backgroundColor: status ? "transparent" : "rgba(255, 255, 255, 0.87)",
        border: status ? "1px solid gray" : "none",
        color: status ? "gray" : "black",
        gap: "10px",
        paddingLeft: "8px",
      }}
    >
      <input type="checkbox" onClick={() => completeTodo(id)}></input>
      <p>{text}</p>
    </div>
  );
}
