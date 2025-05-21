import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    year: ""
  });

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const selectedBook = storedBooks[id];
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      alert("Book not found");
      navigate("/books");
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books[id] = book;
    localStorage.setItem("books", JSON.stringify(books));
    navigate("/books");
  };

  return (
    <div style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
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

      <h2>Edit Book</h2>

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
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
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
            Update Book
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
        </div>
      </form>
    </div>
  );
}

export default EditBook;
