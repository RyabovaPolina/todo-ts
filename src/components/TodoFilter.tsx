import type { Task } from "../model/task";

type FilterFunction = {
  filterTodo: (type: "all" | "active" | "completed") => void;
  deleteCompleted: () => void;
  todoList: Task[];
  currentFilter: "all" | "active" | "completed";
};

export default function TodoFilter({
  filterTodo,
  deleteCompleted,
  todoList,
  currentFilter,
}: FilterFunction) {
  const filterButtonClass = (type: "all" | "active" | "completed") =>
    currentFilter === type ? "filter active" : "filter";
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
        <button
          onClick={() => filterTodo("all")}
          className={filterButtonClass("all")}
        >
          all
        </button>
        <button
          onClick={() => filterTodo("active")}
          className={filterButtonClass("active")}
        >
          active
        </button>
        <button
          onClick={() => filterTodo("completed")}
          className={filterButtonClass("completed")}
        >
          completed
        </button>
      </div>
      <button onClick={deleteCompleted} className="completed">
        clear completed
      </button>
    </div>
  );
}
