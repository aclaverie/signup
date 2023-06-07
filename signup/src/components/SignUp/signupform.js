import { Checkbox, FormControl, FormControlLabel, TextField } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';

function SignUpForm() {
  const [signIn, setSignIn] = useState({
    welcome: 'Enter your credentials to Sign In.',
    username: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
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
    const message = signIn.password === signIn.confirmPassword ? "Successfully Signed Up." : "Passwords do not matched."
    const news = (signIn.newsletter) ? "Also, thank you for signing up for our newsletter." : ""
    e.preventDefault();
    setSignIn((prevData) => {
      return{
        ...prevData,
        welcome: (message === "Passwords do not matched.") ? message: message+' '+news,
      }
    })
    // console.log(signIn.welcome)
    // console.log(signIn)
  }

  return (
    <div className='signin-screen'>
      <h1>Hi! Welcome. </h1>
      <div className='signin-notification'>
        {signIn.welcome}
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
          <div className='signin-newsletter'>
              <FormControl >
                <FormControlLabel
                  control={<Checkbox />}
                  label="I want to Join the newsletter."
                  name="newsletter"
                  value={signIn.newsletter}
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