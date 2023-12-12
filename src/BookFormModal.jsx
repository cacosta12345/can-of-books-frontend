import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

let SERVER = import.meta.env.VITE_SERVER;



function BookFormModal(props) {
    const [title, setTitle] = useState('');
    const[status, setStatus]= useState('');
    const [description, setDescription] = useState('');

    function handleChange(e) {
        let name = e.target.name
        let value = e.target.value
        if (name === 'title') { setTitle(value) }
        if (name === 'description') { setDescription(value) }
        if(name === 'status'){setStatus(value)}
      }
    
    
      async function handleSubmit(e) {
        e.preventDefault();
        let book = { title, description, status }
        console.log('Sending a book', book)
        try{
        let response = await axios.post(`${SERVER}/books`, book);
        console.log('Server Response', response.data)
        props.setBooks([...props.books, response.data])
        props.onHide();
        }catch(e){console.error('Error while submitting the book:', e)}
      }
    

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='form-container'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onChange={handleChange} name='title' placeholder="Book Title" />
                            <Form.Control onChange={handleChange} name='description' placeholder='Book Description' />
                            <Form.Select onChange={handleChange} name='status' aria-label="Default select example">
                                <option>Status</option>
                                <option value="Recommended">Recommended</option>
                                <option value="Favorites">Favorites</option>
                                <option value="Top 10">Top 10</option>
                            </Form.Select>
                            <Button type='submit'>Save Book</Button>
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}


export default BookFormModal