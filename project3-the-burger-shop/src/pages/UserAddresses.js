import React, {useEffect, useState} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import { TrashFill, PencilSquare } from 'react-bootstrap-icons';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function UserAddresses(){

    const [addressForm, setAddressForm] = useState({
        'id':'',
        'street_name':'',
        'block_number':'',
        'unit_number':'',
        'building_name':'',
        'postal_code':'',
    })

    const [profile, setProfile] = useState({
        'token':'',
        'id':'',
        'email':'',
        'contact_number':'',
        'first_name':'',
        'last_name':'',
        'addresses':[],
    })
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const location = useLocation()
    const history = useHistory()

    let token = location.state.token


    const BASE_API_URL= 'https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/api';

    useEffect(() => {
        fetchUserAddress()
    },[profile])

    async function fetchUserAddress(){
        let userProfile = await axios.get(`${BASE_API_URL}/user/profile`, {
               headers:{
                  Authorization: `Bearer ${token}`
               }
        })
        setProfile({
            token:token,
            id:userProfile.data.id,
            email:userProfile.data.email,
            contact_number:userProfile.data.contact_number,
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

    function goToMenu(selectedAddress_id){
        localStorage.setItem('fetchedProfile', JSON.stringify(profile))
        localStorage.setItem('fetchedSelectedAddressId', selectedAddress_id)
        // console.log("Profile from state: ", profile)
        history.push('/menu')
    }

    async function addAddress(address_id){
        let newAddress = {
            'user_id':profile.id,
            'street_name':addressForm.street_name,
            'block_number':addressForm.block_number,
            'unit_number':addressForm.unit_number,
            'building_name':addressForm.building_name,
            'postal_code':addressForm.postal_code,
        };
        await axios.post(`${BASE_API_URL}/addaddress`, newAddress, {
            headers:{
                  Authorization: `Bearer ${token}`
            },
        });
        alert("Address added successfully");
        handleClose();
        history.go(0)
    }

    async function deleteAddress(address_id){
        await axios.get(`${BASE_API_URL}/deleteaddress`, {
            headers:{
                  Authorization: `Bearer ${token}`
            },
            params:{
                'address_id':address_id
            }
        })
        alert("address deleted successfully")
        history.go(0)
    }

    function renderUserAddresses(){
        let jsx=[]
        for(let address of profile.addresses){
            jsx.push(
                <React.Fragment>
                    <Card>
                      <Card.Body>
                        <Card.Text>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>{address.street_name}{address.block_number ? ', Blk' : ''} {address.block_number}</p>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>#{address.unit_number}</p>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>{address.building_name}</p>
                          <p style={{fontSize:'18px', fontFamily: 'Public Sans, sans-serif'}}>Postal Code: {address.postal_code}</p>
                        </Card.Text>
                        <Button variant="warning" style={{fontSize:'18px',fontFamily:'Carter One, cursive'}} onClick={()=>{goToMenu(address.id)}}>Deliver to this address</Button>
                        <Button style={{height:'48px'}} variant="success" className="ml-2">
                            <PencilSquare/>
                        </Button>
                        <Button style={{height:'48px'}} variant="danger" className="ml-2" onClick={()=>{deleteAddress(address.id)}}>
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
                 <Card.Header style={{fontSize:'40px', fontFamily:'Carter One, cursive', backgroundColor:'#dc3545', color:'white'}} className="d-flex flex-column align-items-center">
                    <img src='./images/burger_shop_logo.png' alt="burger shop logo" width="40%"/>
                    <h3 className="m-3">Welcome back, {profile.first_name} {profile.last_name}</h3>
                    <h6>Where would you like us to deliver your food to?</h6>
                 </Card.Header>
                 {renderUserAddresses()}
                 <Card.Footer className="d-flex justify-content-center" style={{backgroundColor:'#dc3545'}}>
                    <Button variant="danger" onClick={handleShow} style={{fontSize:'40px', fontFamily:'Carter One, cursive'}}> + </Button>
                 </Card.Footer>
                </div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{fontSize:'40px', fontFamily:'Carter One, cursive'}}>Add Address</Modal.Title>
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
                     <Button variant="secondary" onClick={addAddress}>Add Address</Button>
                  </Modal.Footer>
                </Modal>
            </Container>
        </React.Fragment>
    )

}