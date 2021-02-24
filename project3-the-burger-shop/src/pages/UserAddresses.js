import React, {useEffect, useState} from 'react';
// import UserContext from '../context/UserContext';
import {useLocation, useHistory} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function UserAddresses(){
    // const context = useContext(UserContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const location = useLocation()
    const history = useHistory()

    let profile = {}

    let fetchedProfile = location.state.profile
    console.log(fetchedProfile)

    useEffect(() => {
        fetchUserAddress()
    })

    function fetchUserAddress(){
        profile.first_name = fetchedProfile.first_name
        profile.last_name = fetchedProfile.last_name
        for(let address of fetchedProfile.addresses){
            let index = (fetchedProfile.addresses.indexOf(address)) + 1
            let addressKeyName = "address_"
            let addressFullKeyName = addressKeyName.concat(index)
            profile[`${addressFullKeyName}`] = address
        }
        console.log(profile)
    }

    function goToMenu(){
        history.push('/menu')
    }

    function addAddress(){
        
    }

    function renderUserAddresses(){
        let jsx=[]
        for(let address of fetchedProfile.addresses){
            jsx.push(
                <React.Fragment>
                    <Card>
                      <Card.Body>
                        <Card.Title style={{fontFamily:'Carter One, cursive'}}>Address {fetchedProfile.addresses.indexOf(address)+1}</Card.Title>
                        <Card.Text>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>{address.street_name}, {address.block_number}</p>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>#{address.unit_number}</p>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>{address.building_name}</p>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>Postal Code: {address.postal_code}</p>
                        </Card.Text>
                        <Button variant="warning" style={{fontSize:'18px',fontFamily:'Carter One, cursive'}} onClick={goToMenu}>Deliver to this address</Button>
                      </Card.Body>
                    </Card>
                </React.Fragment>
            )
        }
        return jsx;
    }
    return (
        <React.Fragment>
            <Container className="d-flex justify-content-center flex-column align-items-center">
                <div>
                <Card.Header style={{fontSize:'40px', fontFamily:'Carter One, cursive', backgroundColor:'#dc3545', color:'white'}}>
                    <h4 className="m-3">Welcome back, {fetchedProfile.first_name} {fetchedProfile.last_name}</h4>
                </Card.Header>
                {renderUserAddresses()}
                <Card.Footer className="d-flex justify-content-center" style={{backgroundColor:'#dc3545'}}>
                    <Button variant="danger" onClick={handleShow} style={{fontSize:'40px', fontFamily:'Carter One, cursive'}}> + </Button>
                </Card.Footer>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Address</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form></Form>
                  </Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>Close</Button>
                     <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                  </Modal.Footer>
                </Modal>
            </Container>
        </React.Fragment>
    )

}