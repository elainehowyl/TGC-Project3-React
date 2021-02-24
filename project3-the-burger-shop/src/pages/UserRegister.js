import React, {useState} from 'react';
import axios from 'axios';

import {
    useHistory,
} from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FolderMinus } from 'react-bootstrap-icons';
// import { FileDiff } from 'react-bootstrap-icons';

// form validation is not working: only one error message can appear at one time
// state in useState doesn't reflect immediately

export default function UserRegister(){

    const [form, setForm] = useState({
        'email':'',
        'password':'',
        'first_name':'',
        'last_name':'',
        'contact_number':'',
        'street_name':'',
        'block_number':'',
        'unit_number':'',
        'building_name':'',
        'postal_code':'',
    })

    const [validations, setValidations] = useState({
        'emailTaken':false,
        'emailEmpty':false,
        'passwordInvalid':false,
        'passwordTooShort':false,
        'firstNameInvalid':false,
        'lastNameInvalid':false,
        'contactNumberInvalid':false,
        'streetNameInvalid':false,
        'unitNumberInvalid':false,
        'postalCodeInvalid':false,
        'accountRegistrationInvalid':false,
        'addressRegistrationInvalid':false,
    })

    const [errors, setErrors] = useState({
        'emailUnique':'',
        'emailRequired':'',
        'passwordRequired':'',
        'passwordMin':'',
        'firstNameRequired':'',
        'lastNameRequired':'',
        'contactNumberRequired':'',
        'streetNameRequired':'',
        'unitNumberRequired':'',
        'postalCodeRequired':'',
    })

    const history = useHistory();

    function updateFormField(event) {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    async function submitRegister(event){
        event.preventDefault();
        const newRegister = {
          'email':form.email,
          'password':form.password,
          'first_name':form.first_name,
          'last_name':form.last_name,
          'contact_number':form.contact_number,
          'street_name':form.street_name,
          'block_number':form.block_number,
          'unit_number':form.unit_number,
          'building_name':form.building_name,
          'postal_code':form.postal_code,
        }
        let response = await axios.post('https://8080-f7c0f52e-6461-4223-b83f-1be565cab8b8.ws-us03.gitpod.io/users/create', newRegister)
        console.log(response.data)
        if(Array.isArray(response.data)){
            for(let error of response.data){
                if(error.field === 'email'){
                    if(error.validation === 'unique'){
                        setValidations({
                            ...validations,
                            'emailTaken':true
                        })
                        setErrors({
                            ...errors,
                            'emailUnique':error.message
                        })
                    }
                    if(error.validation === 'required'){
                        setValidations({
                            ...validations,
                            'emailEmpty':true
                        })
                        setErrors({
                            ...errors,
                            'emailRequired':error.message
                        })
                    }
                    document.querySelector('#user-registration').style.display = "block";
                    document.querySelector('#address-registration').style.display = "none";
                }
                if(error.field === 'password'){
                    if(error.validation === 'required'){
                        setValidations({
                            ...validations,
                            'passwordInvalid':true
                        })
                        setErrors({
                            ...errors,
                            'passwordRequired':error.message
                        })
                    }
                    if(error.validation === 'min'){
                        setValidations({
                            ...validations,
                            'passwordTooShort':true
                        })
                        setErrors({
                            ...errors,
                            'passwordMin':error.message
                        })
                    }
                    document.querySelector('#user-registration').style.display = "block";
                    document.querySelector('#address-registration').style.display = "none";
                }
                if(error.field === 'first_name'){
                    setValidations({
                        ...validations,
                        'firstNameInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'firstNameRequired':error.message
                    })
                    document.querySelector('#user-registration').style.display = "block";
                    document.querySelector('#address-registration').style.display = "none";
                }
                if(error.field === 'last_name'){
                    setValidations({
                        ...validations,
                        'lastNameInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'lastNameRequired':error.message
                    })
                    document.querySelector('#user-registration').style.display = "block";
                    document.querySelector('#address-registration').style.display = "none";
                }
                if(error.field === 'contact_number'){
                    setValidations({
                        ...validations,
                        'contactNumberInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'contactNumberRequired':error.message
                    })
                    document.querySelector('#user-registration').style.display = "block";
                    document.querySelector('#address-registration').style.display = "none";
                }
                if(error.field === 'street_name'){
                    setValidations({
                        ...validations,
                        'streetNameInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'streetNameRequired':error.message
                    })
                }
                if(error.field === 'unit_number'){
                    setValidations({
                        ...validations,
                        'unitNumberInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'unitNumberRequired':error.message
                    })
                }
                if(error.field === 'postal_code'){
                    setValidations({
                        ...validations,
                        'postalCodeInvalid':true
                    })
                    setErrors({
                        ...errors,
                        'postalCodeRequired':error.message
                    })
                }
            }
        }
        else{
            alert('Your account is registered successfully!')
            history.push('/')
        }
        // alert('Your account is registered successfully!')
        // history.push('/')
    }

    function nextPage(){
        document.querySelector('#user-registration').style.display = "none";
        document.querySelector('#address-registration').style.display = "block";
    }

    // function validateAccount(){
    //     if(!form.email.includes('@') && !form.email.includes('.')){
    //         setValidations({
    //             ...validations,
    //             emailInvalid:true,
    //         })
    //     }
    //     if(form.password.length < 12){
    //         setValidations({
    //             ...validations,
    //             passwordInvalid:true,
    //         })
    //     }
    //     if(form.first_name.length === 0){
    //         setValidations({
    //             ...validations,
    //             firstNameInvalid:true,
    //         })
    //     }
    //     if(form.last_name.length === 0){
    //         setValidations({
    //             ...validations,
    //             lastNameInvalid:true,
    //         })
    //     }
    //     if(form.contact_number.length === 0){
    //         setValidations({
    //             ...validations,
    //             contactNumberInvalid:true,
    //         })
    //     }
    //     return validations;
    // }

    function previousPage(){
        document.querySelector('#user-registration').style.display = "block";
        document.querySelector('#address-registration').style.display = "none";
    }

    return (
        <React.Fragment>
            <Container>
                <Form>
                    <div id="user-registration" className="m-5">
                      <div style={{width:'100%', height:'10vh', backgroundColor:'#ffc107', fontFamily:'Carter One, cursive'}} className="mb-3">
                          <h2>STEP 1: REGISTER ACCOUNT</h2>
                      </div>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" autoComplete = "off" value={form.email} placeholder="Enter email" onChange={updateFormField}/>
                        {validations.emailTaken ? (<div style={{color:'red'}}>{errors.emailUnique}</div>) : ''}
                        {validations.emailEmpty ? (<div style={{color:'red'}}>{errors.emailRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" autoComplete = "off" value={form.password} placeholder="Enter password" onChange={updateFormField}/>
                        {validations.passwordInvalid ? (<div style={{color:'red'}}>{errors.passwordRequired}</div>) : ''}
                        {validations.passwordTooShort ? (<div style={{color:'red'}}>{errors.passwordMin}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="first_name" autoComplete = "off" value={form.first_name} placeholder="Enter first name" onChange={updateFormField}/>
                        {validations.firstNameInvalid ? (<div style={{color:'red'}}>{errors.firstNameRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="last_name" autoComplete = "off" value={form.last_name} placeholder="Enter last name" onChange={updateFormField}/>
                        {validations.lastNameInvalid ? (<div style={{color:'red'}}>{errors.lastNameRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" name="contact_number" autoComplete = "off" value={form.contact_number} placeholder="Enter contact number" onChange={updateFormField}/>
                        {validations.contactNumberInvalid ? (<div style={{color:'red'}}>{errors.contactNumberRequired}</div>) : ''}
                      </Form.Group>
                      <Button variant="light" onClick={nextPage}>Next</Button>
                    </div>
                    <div id="address-registration" className="m-5" style={{display:'none'}}>
                      <div style={{width:'100%', height:'10vh', fontFamily:'Carter One, cursive', backgroundColor:'#ffc107'}} className="mb-3">
                        <h2>STEP 2: REGISTER ADDRESS</h2>
                      </div>
                      <Form.Group>
                        <Form.Label>Street Name</Form.Label>
                        <Form.Control type="text" name="street_name" autoComplete = "off" value={form.street_name} placeholder="Enter street name" onChange={updateFormField}/>
                        {validations.streetNameInvalid ? (<div style={{color:'red'}}>{errors.streetNameRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Block Number</Form.Label>
                        <Form.Control type="text" name="block_number" autoComplete = "off" value={form.block_number} placeholder="Enter block number" onChange={updateFormField}/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Unit Number</Form.Label>
                        <Form.Control type="text" name="unit_number" autoComplete = "off" value={form.unit_number} placeholder="Enter unit number" onChange={updateFormField}/>
                        {validations.unitNumberInvalid ? (<div style={{color:'red'}}>{errors.unitNumberRequired}</div>) : ''}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Building Name</Form.Label>
                        <Form.Control type="text" name="building_name" autoComplete = "off" value={form.building_name} placeholder="Enter building name" onChange={updateFormField}/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="text" name="postal_code" autoComplete = "off" value={form.postal_code} placeholder="Enter postal code" onChange={updateFormField}/>
                        {validations.postalCodeInvalid ? (<div style={{color:'red'}}>{errors.postalCodeRequired}</div>) : ''}
                      </Form.Group>
                      <Button variant="light" className="mr-3" onClick={previousPage}>Back</Button>
                      <Button variant="light" type="submit" onClick={submitRegister}>Register</Button>
                    </div>
                </Form>
            </Container>
        </React.Fragment>
    )
}
