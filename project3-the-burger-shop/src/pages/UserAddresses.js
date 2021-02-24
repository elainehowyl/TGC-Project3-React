import React, {useEffect, useState} from 'react';
// import UserContext from '../context/UserContext';
import {useLocation, useHistory} from 'react-router-dom';
import { TrashFill, PencilSquare } from 'react-bootstrap-icons';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function UserAddresses(){
    // const context = useContext(UserContext)

    const [addressForm, setAddressForm] = useState({
        'id':'',
        'street_name':'',
        'block_number':'',
        'unit_number':'',
        'building_name':'',
        'postal_code':'',
    })

    const [profile, setProfile] = useState({
        // 'token':'',
        'first_name':'',
        'last_name':'',
        'addresses':[],
    })
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const location = useLocation()
    const history = useHistory()

    // let profile = {}

    // let fetchedProfile = location.state.profileId
    let token = location.state.token
    // console.log("Fetched Profile: ", fetchedProfile)
    // console.log("Fetched Profile Id: ", fetchedProfile.id)

    const BASE_API_URL= 'https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api';

    useEffect(() => {
        fetchUserAddress()
    })

    async function fetchUserAddress(){
        let userProfile = await axios.get(`${BASE_API_URL}/user/profile`, {
               headers:{
                  Authorization: `Bearer ${token}`
               }
        })
        setProfile({
            id:userProfile.data.id,
            first_name:userProfile.data.first_name,
            last_name:userProfile.data.last_name,
            addresses:userProfile.data.addresses
        })
    }

    // function fetchUserAddress(){
    //     profile.first_name = fetchedProfile.first_name
    //     profile.last_name = fetchedProfile.last_name
    //     for(let address of fetchedProfile.addresses){
    //         let index = (fetchedProfile.addresses.indexOf(address)) + 1
    //         let addressKeyName = "address_"
    //         let addressFullKeyName = addressKeyName.concat(index)
    //         profile[`${addressFullKeyName}`] = address
    //     }
    //     console.log(profile)
    // }

    function updateFormField(event) {
        setAddressForm({
            ...addressForm,
            [event.target.name]:event.target.value
        })
    }

    function goToMenu(){
        history.push('/menu')
    }

    async function addAddress(){
        let newAddress = {
            'user_id':profile.id,
            'street_name':addressForm.street_name,
            'block_number':addressForm.block_number,
            'unit_number':addressForm.unit_number,
            'building_name':addressForm.building_name,
            'postal_code':addressForm.postal_code,
        };
        let response = await axios.post(`${BASE_API_URL}/addaddress`, newAddress);
        alert("address added successfully");
        handleClose();
        // history.go(0)
    }

    function renderUserAddresses(){
        let jsx=[]
        for(let address of profile.addresses){
            jsx.push(
                <React.Fragment>
                    <Card>
                      <Card.Body>
                        <Card.Text>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>{address.street_name}, {address.block_number}</p>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>#{address.unit_number}</p>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>{address.building_name}</p>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>Postal Code: {address.postal_code}</p>
                        </Card.Text>
                        <Button variant="warning" style={{fontSize:'18px',fontFamily:'Carter One, cursive'}} onClick={goToMenu}>Deliver to this address</Button>
                        <Button style={{height:'48px'}} variant="success" className="ml-2">
                            <PencilSquare/>
                        </Button>
                        <Button style={{height:'48px'}} variant="danger" className="ml-2">
                            <TrashFill/>
                        </Button>
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
                    <h4 className="m-3">Welcome back, {profile.first_name} {profile.last_name}</h4>
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
                      <Form method="POST">
                          <Form.Group>
                            <Form.Label>Street Name</Form.Label>
                            <Form.Control type="text" name="street_name" autoComplete = "off" value={addressForm.street_name} placeholder="Enter street name" onChange={updateFormField}/>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Block Number</Form.Label>
                            <Form.Control type="text" name="block_number" autoComplete = "off" value={addressForm.block_number} placeholder="Enter block number" onChange={updateFormField}/>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Unit Number</Form.Label>
                            <Form.Control type="text" name="unit_number" autoComplete = "off" value={addressForm.unit_number} placeholder="Enter unit number" onChange={updateFormField}/>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Building Name</Form.Label>
                            <Form.Control type="text" name="building_name" autoComplete = "off" value={addressForm.building_name} placeholder="Enter building name" onChange={updateFormField}/>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control type="text" name="postal_code" autoComplete = "off" value={addressForm.postal_code} placeholder="Enter postal code" onChange={updateFormField}/>
                          </Form.Group>
                      </Form>
                  </Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>Close</Button>
                     <Button variant="primary" onClick={addAddress}>Save Changes</Button>
                  </Modal.Footer>
                </Modal>
            </Container>
        </React.Fragment>
    )

}