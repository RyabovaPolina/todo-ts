import type { Task } from "../model/task";

type FilterFunction = {
  filterTodo: (type: "all" | "active" | "completed") => void;
  deleteCompleted: () => void;
  todoList: Task[];
};

export default function TodoFilter({
  filterTodo,
  deleteCompleted,
  todoList,
}: FilterFunction) {
  return (
    <div
      className="container-filters"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 0px",
        marginTop: "20px",
        borderTop: "1px solid white",
      }}
    >
      <p>
        {todoList.length +
          `${todoList.length > 1 ? ` items left` : ` item left`}`}
      </p>
      <div
        className="filter-btns"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "0px 5px",
          borderLeft: "1px solid gray",
          borderRight: "1px solid gray",
        }}
      >
        <button onClick={() => filterTodo("all")} className="filter">
          all
        </button>
        <button onClick={() => filterTodo("active")} className="filter">
          active
        </button>
        <button onClick={() => filterTodo("completed")} className="filter">
          completed
        </button>
      </div>
      <button onClick={deleteCompleted} className="completed">
        clear completed
      </button>
    </div>
  );
}
