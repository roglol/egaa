import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from 'next/link.js';
import { withRouter } from "next/router";


const Login = (props) =>{
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <form>
          <TextField
           autoComplete="off"
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
           <TextField
           autoComplete="off"
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Forgot password?
          </Button>
          <Button onClick={()=>{
             handleClose()
             props.router.push('/register')
          }} color="primary">
           register
          </Button>
        </DialogActions>
       
      </Dialog>
    </div>
  );
}

export default withRouter(Login);
