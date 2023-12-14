import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { addTodo, deleteTodo, getTodos } from "./api";
import TodoItem from "./TodoItem";

function Todo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    handleGetTodos();
  }, []);

  function handleGetTodos() {
    getTodos()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAdd(title) {
    addTodo({
      title,
      status: false,
    }).then(() => handleGetTodos());
  }

  function handleDelete(id) {
    deleteTodo(id).then(() => handleGetTodos());
  }
  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      <div>
        {data.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            id={item.id}
            status={item.status}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
