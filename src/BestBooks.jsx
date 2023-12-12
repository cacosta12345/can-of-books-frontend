import { useState, useEffect } from 'react';
import { If, Then } from 'react-if';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

let SERVER = import.meta.env.VITE_SERVER;

function BestBooks({ books, setBooks }){
  const [showBooks, setShowBooks] = useState(false); // showBooks is controlled by props.books
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    let book = { title, description };
    try {
      await axios.post(`${SERVER}/books`, book);
      fetchBooks(); // Fetch books after adding a new book
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${SERVER}/books/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${SERVER}/books`);
      setBooks(response.data);
      setShowBooks(true);
    } catch (error) {
      console.error('Error fetching books:', error);
      setShowBooks(false);
    }
  };

  useEffect(() => {
    if (books && books.length > 0) {
      setShowBooks(true);
    } else {
      setShowBooks(false);
      fetchBooks(); // Fetch books when the component mounts and if books is empty
    }
  }, [books]);

  return (
    <>
      <h2>My Essential Lifelong Learning & Formation Shelf</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Add Book</button>
      </form>

      <If condition={showBooks}>
        <Then>
          <Carousel fade>
            {books.map((book) => (
              <Carousel.Item key={book._id}>
                <img
                  className="d-block w-100"
                  src="../book.jpg"
                  alt={book.title}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <p>{book.status}</p>
                </Carousel.Caption>
                <button onClick={() => deleteBook(book._id)}>Delete</button>
              </Carousel.Item>
            ))}
          </Carousel>
        </Then>
      </If>
    </>
  );
}

export default BestBooks;