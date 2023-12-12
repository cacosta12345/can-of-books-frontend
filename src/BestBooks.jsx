
import { If, Then } from 'react-if';

function BestBooks(props) {




  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <If condition={props.books}>
            <Then>
              <ul>
                {props.books.map((book)=>{
                  <li key={book._id}>{book.title}</li>
                })}
              </ul>
            </Then>
        </If>
    </>
  )
}


export default BestBooks;
