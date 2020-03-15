import React,{ Component } from 'react'
import {Row,Col,Form,Button,Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { firebase } from '../config/firebase'



class Login extends Component{

    state = {
        errormessage: []
    }


    SubmitHandler = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password =  event.target.password.value;
        let current = this;
        firebase.auth().signInWithEmailAndPassword(email,password).then(() => {
            console.log('loged in',this.props);
            this.props.history.push('/');
            return null
        }).catch((error) => {
            current.setErrors(error.message);
        })
    }

    resetErrors = () => {
        this.setState({errormessage:[]});
    }

    setErrors = (message) => {
        const errormessage = this.state.errormessage;
        errormessage.push(message);
        this.setState({errormessage});
    }

    render() {
        return <div>
        <Row>
            <Col className='login-container' md={{ span: 6, offset: 3 }}>
                <div className='login-text'>
                    <h1>Login</h1>
                    <div>Hello! Welcome to simple user referral flow app</div>
                    <span>New user? <Link className='register-link' to='/register'>You can register here</Link></span>
                </div>
                <Form className='login-form' onSubmit={this.SubmitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    
                    {
                        this.state.errormessage.map((message, index) => (
                        <Alert key={index} variant="danger">
                            {message}
                        </Alert>
                        ))
                    }
                    
                    <Button variant="primary" size="lg" block type="submit">
                        Submit
                    </Button>
                    
                </Form>    
            </Col>
        </Row>
    </div>
    }
    
}

export default Login