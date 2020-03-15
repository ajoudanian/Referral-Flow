import React from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { firebaseDB } from '../config/firebase'

const SubmitHandler = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password =  event.target.password.value;
    firebaseDB.ref('users').push({
        email,
        password,
        date: Date()
    })
}

const Login = () => (
    <div>
        <Row>
            <Col className='login-container' md={{ span: 6, offset: 3 }}>
                <Form className='login-form' onSubmit={SubmitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    

                    
                    <Button variant="primary" size="lg" block type="submit">
                        Submit
                    </Button>
                    <Link to='/register'>New User?</Link>
                </Form>    
            </Col>
        </Row>
    </div>
)

export default Login