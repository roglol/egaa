import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup, Label, Input,Form} from 'reactstrap';
import Link from 'next/link.js';
import DialogActions from "./Login";

const RegistrationForm = ({show,handleClose}) =>{
    // console.log(props)
    const Submit = () =>{
        console.log('vaimeee')
    }
    return (
        <Modal isOpen={show} toggle={handleClose} >
        <ModalHeader toggle={handleClose}>Modal title</ModalHeader>
        <ModalBody>
        <Form onSubmit={Submit}>
        <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
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
                props.router.push('/register')
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

export default RegistrationForm