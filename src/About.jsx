
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {

  return (
    <>
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          
          <Card.Body>
            <Card.Title>Stephanie</Card.Title>
            <Button href='http://www.linkedin.com/in/stepheegee'>LinkedIn</Button>
            <Button href="https://github.com/StepheeGee" variant="primary">{`Steph's Github`}</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
         
          <Card.Body>
            <Card.Title>Chris Acosta</Card.Title>
            <Button href='https://www.linkedin.com/in/christopher-acosta-softdev/'>LinkedIn</Button>
            <Button href="https://github.com/cacosta12345" variant="primary">{`Chris' Github`}</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>

  );

}

export default Profile;
