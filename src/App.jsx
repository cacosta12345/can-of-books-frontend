import { useState, useEffect } from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './About';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

let SERVER = import.meta.env.VITE_SERVER;

function App() {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
      let response = await axios.get(`${SERVER}/books`);
      setBooks(response.data);
      console.log('getting books', response.data);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/books"
            element={<BestBooks books={books} setBooks={setBooks} />}
          />
          <Route exact path="/about" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
