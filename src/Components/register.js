import React,{ Component } from 'react'
import {Row,Col,Form,Button,Alert} from 'react-bootstrap'
import { firebase , firebaseDBUsers } from '../config/firebase'
import {Link} from 'react-router-dom'

class Register extends Component{

    state = {
        errormessage: []
    }



    SubmitHandler = (event) => {

        let email = event.target.email.value;
        let password =  event.target.password.value;
        let confirmpassword =  event.target.confirmpassword.value;
        let displayname = event.target.displayname.value;
        let current = this;
    
        event.preventDefault();
        current.resetErrors();
        password === confirmpassword ? (
        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            const user = result.user;
            const uid = user.uid;
            firebaseDBUsers.push({
                uid,
                email,
                displayname,
                date: Date()
            })
        }).catch(function(error) {
            current.setErrors(error.message);
        })):(current.setErrors('Password and Confirm Password must be same.'))
    }
    
    resetErrors = () => {
        this.setState({errormessage:[]});
    }

    setErrors = (message) => {
        const errormessage = this.state.errormessage;
        errormessage.push(message);
        this.setState({errormessage});
    }
    
    


    render = () => {


        
        return (<Row>
                <Col className='login-container' md={{ span: 6, offset: 3 }}>
                <div className='login-text'>
                    <h1>SignUp</h1>
                    <div>Hello! Welcome to simple user referral flow app</div>
                    <div>Already a member? <Link to='login'>Login here!</Link></div>
                </div>
                    <Form className='register-form' onSubmit={this.SubmitHandler} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formDiaplayName">
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control type="text" name='displayname' placeholder="Your Name" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword">
                            <Form.Control type="password" name='confirmpassword' placeholder="Confirm Password" required />
                        </Form.Group>
                        <Form.Group controlId="formRefrenceKey">
                            <Form.Label>Reference Key</Form.Label>
                            <Form.Control type="text" name='refrencekey' placeholder="" />
                            <Form.Text className="text-muted">
                            If you don't have any reference key leave it empty.
                            </Form.Text>
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
        )
    }
}




export default Register