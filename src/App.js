import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidebar / Navigation */}
        <aside style={{ width: "200px", float: "left", height: "100vh", background: "#f4f4f4", padding: "1rem" }}>
          <h3>📘 Book Manager</h3>
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><Link to="/books">📚 All Books</Link></li>
              <li><Link to="/add">➕ Add New Book</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ marginLeft: "220px", padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
             <Route path="/bar/:id" element={<Sidebar/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;