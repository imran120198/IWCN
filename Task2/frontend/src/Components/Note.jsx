import React, { useEffect, useState } from "react";
import "../Styles/Note.css";
import axios from "axios";

const Note = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const data = await axios.get(`http://localhost:8000/notes`);
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAdd = async () => {
    const data = { content: text };
    if (!text) {
      alert("Please add note");
      return;
    }
    try {
      const addData = await axios.post(
        `http://localhost:8000/notes/posts`,
        data
      );
      alert("Note Added");
      getData();
    } catch (err) {
      console.log(err);
    }
    setText("");
  };

  const handleEdit = async (id) => {
    const content = prompt("Enter new content");
    try {
      await axios.put(`http://localhost:8000/notes/edit/${id}`, {
        content,
      });
      alert("Note Updated");
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/notes/delete/${id}`);
      alert("Note Deleted");
      getData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="note">
        <input
          id="textArea"
          placeholder="Write a note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add Note</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "50px",
          justifyContent: "center",
        }}
      >
        {data.map((e) => {
          return (
            <>
              <div
                style={{
                  boxShadow:
                    " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
                key={e.id}
              >
                {e.id}
                <p>{e.content}</p>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => handleEdit(e.id)}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Note;
