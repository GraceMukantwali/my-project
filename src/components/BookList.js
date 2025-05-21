import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // Function to load books from localStorage
  const loadBooks = () => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  };

  useEffect(() => {
    loadBooks(); // Load books on initial render
  }, []);

  const handleDelete = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  return (
    <div style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontWeight: "bold", marginBottom: "1.5rem" }}>
        📚 Book Collection
      </h2>

      {/* 🔘 Show All Books Button */}
      <button
        onClick={loadBooks}
        style={{
          backgroundColor: "#198754",
          color: "white",
          padding: "10px 16px",
          border: "none",
          borderRadius: "4px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        🔄 Show All Books
      </button>

      {books.length === 0 ? (
        <p>No books found. Please add some!</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "2px solid #ccc", padding: "10px" }}>
                Title
              </th>
              <th style={{ borderBottom: "2px solid #ccc", padding: "10px" }}>
                Author
              </th>
              <th style={{ borderBottom: "2px solid #ccc", padding: "10px" }}>
                ISBN
              </th>
              <th style={{ borderBottom: "2px solid #ccc", padding: "10px" }}>
                Year
              </th>
              <th style={{ borderBottom: "2px solid #ccc", padding: "10px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td style={{ padding: "10px" }}>{book.title}</td>
                <td style={{ padding: "10px" }}>{book.author}</td>
                <td style={{ padding: "10px" }}>{book.isbn}</td>
                <td style={{ padding: "10px" }}>{book.year}</td>
                <td style={{ padding: "10px" }}>
                  <button
                    onClick={() => navigate(`/edit/${index}`)}
                    style={{
                      backgroundColor: "#0d6efd",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookList;
