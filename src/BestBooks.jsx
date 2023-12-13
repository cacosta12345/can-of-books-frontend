
import { If, Then } from 'react-if';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BookFormModal from './BookFormModal';
let SERVER = import.meta.env.VITE_SERVER;



function BestBooks() {
  const [books, setBooks] = useState([]);
  const [modalShow, setModalShow] = useState(false)

  async function handleDelete(e) {
    console.log('deleting', e.target.id)
    try {
      let response = await axios.delete(`${SERVER}/books/${e.target.id}`)
      let book = response.data;
      console.log(book);

      let newBooks = books.filter((book) => {
        return book.id !== e.target.id;
      })
      setBooks(newBooks);
    } catch (e) { console.log(e.message) }
  }
  async function fetchBooks() {
    try {
      let response = await axios.get(`${SERVER}/books`)
      setBooks(response.data);
    } catch (e) { console.error(e.message) }
  }

  useEffect(() => {
    fetchBooks();
    console.log('mounting')

    return () => {
      console.log('Unmounted');
    }
  }, [])

  return (
    <>
      <div className='best-books'>
        <If condition={books}>
          <Then>
            <div className='carousel-container'>
              <Carousel fade>
                {books.map((book) => (
                  <Carousel.Item key={book._id}>
                    <img
                      className="d-block w-100"
                      src="../shelf.jpg"
                      alt={book.title}
                    />
                    <Carousel.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <p>{book.status}</p>
                      <span id={book._id} onClick={handleDelete} style={{ color: "red", cursor: "pointer" }}>Delete</span>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Then>
        </If>
        <div className='modal-btn-container'>
          <Button className='modal-button' onClick={() => setModalShow(true)}>Add a book!</Button>
        </div>
        <BookFormModal setBooks={setBooks} books={books} show={modalShow} onHide={() => setModalShow(false)}></BookFormModal>
      </div>
    </>
  )
}


export default BestBooks;
