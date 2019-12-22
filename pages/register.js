import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [personalNumber, setPersonalnumber] = useState('')
  const [phoneNumber, setPhonenumber] = useState('')

  const Submit = (e) =>{
    e.preventDefault()
    const data = {
      email,
      password,
      name,
      surname,
      personalNumber,
      phoneNumber
    }
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/register',
      data
    });
  }
  return (
     <Form onSubmit = {Submit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input autoComplete = "off" type="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input autoComplete = "off" type="password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Name</Label>
        <Input autoComplete = "off" type="text" name="name" value={name} onChange={(e) =>setName(e.target.value)} placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Surname</Label>
        <Input autoComplete = "off" type="text" name="surname" value={surname} onChange={(e) =>setSurname(e.target.value)} placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Personal Number</Label>
        <Input autoComplete = "off" type="number" name="personalNumber" value={personalNumber} onChange={(e) =>setPersonalnumber(e.target.value)}  placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Phone Number</Label>
        <Input autoComplete = "off" type="number" name="phoneNumber" value={phoneNumber} onChange={(e) =>setPhonenumber(e.target.value)} placeholder="password placeholder" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Register;