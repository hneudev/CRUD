import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";


export default function FormDialog({ onCreate, defValues, onEdit }) {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, reset } = useForm()
  const [buttonMode, setButtonMode] = useState(false)
  const emptyValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""

  }

  useEffect(() => {
    if(defValues){
      reset(defValues)
      setButtonMode(!buttonMode) }
  }, [reset, defValues])

    const onSubmit = (res) => {
      onCreate(res)
      onEdit(res)
      reset(emptyValues)
      setButtonMode(!buttonMode)

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
Add New User      
</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
           <div>
 <form onSubmit={handleSubmit(onSubmit)}>
 <label htmlFor="first_name">First Name     </label>
 <input type="text" {...register("first_name")} placeholder='first name' id='first_name' />
 <hr />      
 <label htmlFor="last_name">Last Name      </label>
 <input type="text" {...register("last_name")} placeholder='last name' id='last_name'/>
 <hr />     
 <label htmlFor="email">Email     </label>
<input type="email" placeholder='email' id='email' {...register("email")}/>
<hr />   
<label htmlFor="password">Password     </label>
<input type="password" placeholder='password' id='password' {...register("password")} />
<label htmlFor="birthday">Birthday      </label>
<input type="date" placeholder='birthday' id='birthday' {...register("birthday")} />
<button className='button-upload'>{buttonMode ? "Register" : "Edit"}</button>
</form>
</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}