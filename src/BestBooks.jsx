
import { If, Then } from 'react-if';
import Carousel from 'react-bootstrap/Carousel';


function BestBooks(props) {

  console.log(props.books)


  return (
    <>
    <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
    <If condition={props.books}>
      <Then>
        <Carousel fade>
          {props.books.map((book) => (
            <Carousel.Item key={book._id}>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400" // Replace with the actual image URL
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
