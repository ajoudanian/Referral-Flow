import React,{ Component } from 'react'
import { Card , Button , Form , Col , Row , Toast} from 'react-bootstrap'
import { firebaseDBUsers, firebaseDBReferral } from '../config/firebase'


class InviteForm extends Component {

    state = {
        showerror:false,
        showsuccess:false,
        successMessage:''
    }


    submitHanddler = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let current = this;
        firebaseDBUsers.orderByChild("email").equalTo(email).once('value').then( (snapshot) => {
            if(snapshot.hasChildren())
            {
                current.setState({showerror:true})
            }
            else{

                firebaseDBReferral.orderByChild("email").equalTo(email).once('value').then( (snapshot) => {
                    console.log(snapshot.hasChildren());
                    if(snapshot.hasChildren())
                    {
                        current.setState({showerror:true})
                    }
                    else{


                        const key = `REF_${ new Date().getTime() }`;
                        const item = {
                            email,
                            inviter:current.props.currentUser.uid,
                            inviteDate: Date(),
                            key ,
                            uid:'',
                            status:'pending'
                        }

                        current.props.addReferral(item).then( () => {
                            current.setState({successMessage:key, showsuccess:true})
                        })
                        
                    }
                })
            }
        });
    }


    render(){
        
        return <div>
        <div className="toast-countainer">
        <Toast className="action-toast" style={{ display: this.state.showerror ? 'inherit' : 'none' }} show={this.state.showerror} onClose={() => this.setState({showerror:false})} delay={3000} autohide>
          <Toast.Header>
            <strong className="mr-auto danger">NOP</strong>
          </Toast.Header>
          <Toast.Body>This user already invited!!!</Toast.Body>
        </Toast>
        <Toast className="action-toast"  style={{ display: this.state.showsuccess ? 'inherit' : 'none' }} show={this.state.showsuccess} onClose={() => this.setState({showsuccess:false})} delay={6000} autohide>
          <Toast.Header>
            <strong className="mr-auto danger">Yes</strong>
          </Toast.Header>
          <Toast.Body>This User Is Added, The invitaion code is <b>{this.state.successMessage}</b></Toast.Body>
        </Toast>
        </div>
        <Card>
            <Card.Header>Invite New Users</Card.Header>
            <Card.Body>
                
                
                <Form onSubmit={this.submitHanddler.bind(this)}>
                <Form.Row>
                    <Form.Group as={Col} lg={11} md={10} controlId="formGridEmail">
                        <Row>
                            <Form.Label column lg={1} md={2}>Email</Form.Label>
                            <Col md={10} lg={11} ><Form.Control name='email' type="email" placeholder="Enter email" required /></Col>
                        </Row>
                    </Form.Group>
                    <Form.Group as={Col} lg={1} md={2}  controlId="formSubmit">
                        <Button variant="primary" type="submit" block >Submit</Button>
                    </Form.Group>
                </Form.Row>
    
    
                
                </Form>
    
    
    
    
                
            </Card.Body>
        </Card>
    
    
        </div>
    }

}
    



export default InviteForm;