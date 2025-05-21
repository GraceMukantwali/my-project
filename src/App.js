import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";


function App() {
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
       
        <aside
          style={{
            width: "220px",
            background: "#0d6efd",
            color: "#fff",
            padding: "1.5rem 1rem"
          }}
        >
          <h2 style={{ color: "#fff", fontSize: "20px", marginBottom: "1rem" }}>
            📘 Book Manager
          </h2>
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem" }}>
                <Link to="/books" style={{ color: "#fff", textDecoration: "none" }}>
                  📚 All Books
                </Link>
              </li>
              <li>
                <Link to="/add" style={{ color: "#fff", textDecoration: "none" }}>
                  ➕ Add New Book
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main
          style={{
            flexGrow: 1,
            background: "#f9f9f9",
            padding: "2rem",
            textAlign: "center"
          }}
        >
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
