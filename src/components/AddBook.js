import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    year: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const existingBooks = JSON.parse(localStorage.getItem("books")) || [];
  const updatedBooks = [...existingBooks, book];
  localStorage.setItem("books", JSON.stringify(updatedBooks));

  navigate("/books");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0", textAlign: "left" }}>
      <button
        onClick={() => navigate("/books")}
        style={{
          backgroundColor: "#0d6efd",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        ← Back to Books
      </button>

      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Title:</label><br />
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Author:</label><br />
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
<div style={{ marginBottom: "1rem" }}>
  <label>ISBN:</label><br />
  <input
    type="number"
    name="isbn"
    value={book.isbn}
    onChange={handleChange}
    required
    style={{ width: "100%", padding: "8px" }}
  />
</div>

        
<div style={{ marginBottom: "1rem" }}>
  <label>Published Year:</label><br />
  <input
    type="number"
    name="year"
    value={book.year}
    onChange={handleChange}
    required
    max={2025}
    style={{ width: "100%", padding: "8px" }}
  />
</div>

        <button
          type="submit"
          style={{
            backgroundColor: "#198754",
            color: "white",
            padding: "10px 20px",
            marginRight: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Add Book
        </button>

        <button
          type="button"
          onClick={() => navigate("/books")}
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddBook;
