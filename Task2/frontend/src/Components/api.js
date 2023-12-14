import axios from "axios";

export function getTodos() {
  return axios.get("http://localhost:7000/note/get");
}

export function deleteTodo(id) {
  return axios({
    url: `http://localhost:7000/note/delete/${id}`,
    method: "DELETE",
  });
}

export function addTodo({ title, status }) {
  // title, status
  return axios({
    url: "http://localhost:7000/note/create",
    method: "POST",
    data: {
      title,
      status,
    },
  });
}
