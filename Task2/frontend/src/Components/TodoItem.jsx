function TodoItem({ handleDelete, title, id, status, handleToggle }) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
          marginBottom: "0.25rem"
        }}
      >
        <div>{id}</div>
        <div>{title}</div>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    );
  }
  
  export default TodoItem;