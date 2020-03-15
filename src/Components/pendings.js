import React from 'react';
import { Table } from 'react-bootstrap'

const Pendings = (props) =>
{
 return (<div>
     <h3>Pending invitations</h3>
     <Table striped bordered hover>
    <thead>
    <tr>
        <th>#</th>
        <th>Email</th>
        <th>Referral Key</th>
        <th>Date</th>
    </tr>
    </thead>
    <tbody>
        {

            props.referral.filter((item) => 
            item.status === 'pending' ? true : false
            ).map( (item,index) => {
                
                const date = new Date(item.inviteDate);
                const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' , hour:'numeric', minute:'numeric' };
            
                return <tr key={index}>
                <td>{index+1}</td>
                <td>{item.email}</td>
                <td>{item.key}</td>
                <td>{date.toLocaleDateString("en-US", options)}</td>
            </tr>



            })
        }

    </tbody>
    </Table>
 </div>)
 

}


export default Pendings