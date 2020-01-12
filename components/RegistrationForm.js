import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup, Label, Input,Form} from 'reactstrap';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import {authenticate} from '../redux/actions';


const RegistrationForm = ({show,handleClose,authenticate}) =>{
    const router = useRouter()

    const [email, setEmail] = useState('gialo@gmail.com');
    const [password, setPassword] = useState('gialodadu');

    const Submit = () =>{
        authenticate({email,password},'login')
    }
    return (
        <Modal isOpen={show} toggle={handleClose} >
        <ModalHeader toggle={handleClose}>Modal title</ModalHeader>
        <ModalBody>
        <Form onSubmit={Submit}>
        <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="off"
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="off"
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
        </FormGroup>
        </Form>
      </ModalBody>
        <ModalFooter>
            <Button onClick={()=>{
                handleClose()
                router.push('/register')
            }} color="primary">
                register
            </Button>
          <Button color="primary" type="submit" 
          onClick={(e) =>{
              e.preventDefault()
              Submit()
              handleClose()
          }}
          >
              Login
          </Button>
        </ModalFooter>
      </Modal>
    )
}



export default connect(
  state => state,
  {authenticate}
)(RegistrationForm);