import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { When } from "react-if";

function UpdateBook(props) {
    const [book, setBook] = useState({})

    function handleChange(e) {
        setBook({ ...book, [e.target.name]: e.target.value })

    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleSubmit(book);
    }
    useEffect(() => {
        console.log('props.book changed');
        setBook(props.book || {});
    }, [props.book])
    return (
        <When condition={book.title}>
            <div className='update-form-container'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control onChange={handleChange} id='title' name='title' defaultValue={book.title} />
                        <Form.Control onChange={handleChange} name='description' defaultValue={book.description} />
                        <Form.Select onChange={handleChange} name='status' defaultValue={book.status}>
                            <option>Status</option>
                            <option value='1'>Recommended</option>
                            <option value="1">Favorites</option>
                            <option value="1">Top 10</option>
                        </Form.Select>
                        <Button variant='secondary' type='submit'>Send Update</Button>
                    </Form.Group>
                </Form>
            </div>
        </When>
    )
}

export default UpdateBook;