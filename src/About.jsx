
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {

  return (
    <>
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Stephanie</Card.Title>
            <Card.Text>
              {`Some quick example text to build on the card title and make up the
              bulk of the card's content.`}
            </Card.Text>
            <Button href="https://github.com/StepheeGee" variant="primary">{`Steph's Github`}</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Chris Acosta</Card.Title>
            <Card.Text>
              {`Some quick example text to build on the card title and make up the
              bulk of the card's content.`}
            </Card.Text>
            <Button href="https://github.com/cacosta12345" variant="primary">{`Chris' Github`}</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>

  );

}

export default Profile;
