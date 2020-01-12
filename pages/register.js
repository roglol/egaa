import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { register } from '../redux/actions';
import initialize from '../utils/initialize';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Submit = (e) => {
    e.preventDefault();
    props.register(
      {email,password},
      'register'
    );
  }

  return (
     <Form onSubmit = {Submit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input autoComplete = "off" type="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="with a placeholder"/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input autoComplete = "off" type="password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="password placeholder"/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}


Register.getInitialProps = async function(ctx){
  await initialize(ctx)
}
export default connect(
  state => state,
  {register}
)(Register);


