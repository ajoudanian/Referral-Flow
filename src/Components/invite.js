import React from 'react'
import { Card , Button , Form , Col , Row } from 'react-bootstrap'
import { firebaseDBUsers } from '../config/firebase'

const submitHanddler = (event) => {
    event.preventDefault();
}

const InviteForm = (props) => (
    <Card>
        <Card.Header>Invite New Users</Card.Header>
        <Card.Body>
            <Card.Text>
            
            
            <Form onSubmit={submitHanddler}>
            <Form.Row>
                <Form.Group as={Col} lg={5} md={6} controlId="formGridEmail">
                    <Row>
                        <Form.Label column md={3}>Email</Form.Label>
                        <Col md={9} ><Form.Control type="email" placeholder="Enter email" required /></Col>
                    </Row>
                </Form.Group>

                <Form.Group as={Col} lg={5} md={6} controlId="formGridName">
                    <Row>
                        <Form.Label column md={3}>Name</Form.Label>
                        <Col md={9}><Form.Control type="text" placeholder="Name" required /></Col>
                    </Row>
                </Form.Group>
                <Form.Group as={Col} lg={2} md={12}  controlId="formSubmit">
                    <Button variant="primary" type="submit" block >Submit</Button>
                </Form.Group>
            </Form.Row>


            
            </Form>



            </Card.Text>
        </Card.Body>
    </Card>
)


export default InviteForm;