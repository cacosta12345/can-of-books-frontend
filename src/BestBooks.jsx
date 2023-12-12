
import { If, Then } from 'react-if';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { useEffect, useState } from 'react';
let SERVER = import.meta.env.VITE_SERVER;



function BestBooks() {
  const [books, setBooks] = useState([]);
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');


  // function handleChange(e){
  //  let name = e.target.name
  //  let value = e.target.value
  //  if(name==='title'){setTitle(value)}
  //  if(name==='description'){setDescription(value)}
  // }


  //  function handleSubmit(e){
  //   e.preventDefault();
  //   let book = {title, description}
  //   console.log('Sending a book', book)
  //   let response = await axios.post(`${SERVER}/books, book);
  //   console.log('Server Response', response.data) 
  // }

  async function fetchBooks() {
    try {
      let response = await axios.get(`${SERVER}/books`)
      setBooks(response.data);
      console.log('getting books', response.data)
    } catch (e) { console.error(e.message) }
  }

  useEffect(() => {
    console.log('Mounted up');
    fetchBooks();

    return () => {
      console.log('Unmounted');
    }
  }, [])

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      <If condition={books}>
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
              </Carousel.Item>
            ))}
          </Carousel>
        </Then>
      </If>
    </>
  )
}


export default BestBooks;
