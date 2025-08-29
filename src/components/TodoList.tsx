import type { Task } from "../model/task";
import Todo from "./Todo";

type TodoListProps = {
  todoList: Task[];
};

export default function TodoList({ todoList }: TodoListProps) {
  return (
    <div className="container-todolist">
      {todoList.map((todo: Task) => (
        <Todo
          key={todo.id}
          text={todo.text}
          id={todo.id}
          status={todo.status}
        />
      ))}
    </div>
  );
}
