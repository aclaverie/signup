import { Checkbox, FormControl, FormControlLabel, TextField } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';

function SignUpForm() {
  const [signIn, setSignIn] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    remember: false,
  })

  function handleChange(e){
    const {name, value, type, checked} = e.target;
    setSignIn((prevData) => {
      return{
      ...prevData,
        [name]: type === "checkbox" ? checked : value
      }})
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(signIn)
  }

  return (
    <div className='signin-screen'>
      <h1>Hi! Welcome. </h1>
      <div className='signin-notification'>
        Enter your credentials to Sign In.
      </div>      
      <div className='sigin-form'>
        <form >
          <div className='signin-username'>
            <FormControl fullWidth >
              <TextField
                value={signIn.username} 
                onChange={handleChange}
                required
                id="outlined-username"
                label="Username"
                name="username"
              />
            </FormControl>
          </div>
          <div className='signin-password'>
            <FormControl fullWidth >
              <TextField 
              value={signIn.password} 
              onChange={handleChange} 
              required
              id="outlined-password"
              label="Password"
              type="password"
              name="password"
              />
            </FormControl>
          </div>
          <div className='signin-password'>
            <FormControl fullWidth >
              <TextField 
              value={signIn.confirmPassword} 
              onChange={handleChange} 
              required
              id="outlined-password"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              
              />
            </FormControl>
          </div>
          <div className='signin-remember'>
            <FormControl fullWidth>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Me"
                name="remember"
                value={signIn.remember}
                onChange={handleChange}
                />
            </FormControl>
          </div>
          <div className='signin-button'>
            <FormControl fullWidth >
              <Button variant='contained' onClick={handleSubmit}>Sign In</Button>
            </FormControl>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default SignUpForm;