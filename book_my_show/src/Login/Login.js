import React, { useState } from 'react'
import './Login.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {


    const[userName,setUserName]=useState('');
    const[password, setPassword]=useState('');
    const nav = useNavigate();

    const handleInput = (event)=>{
        console.log(event.target.name)
        if(event.target.name === 'userName'){
            setUserName(event.target.value);
            console.log(event.target.value);
        }
        else{
            setPassword(event.target.value)
        }
    }

  const LoginFun=()=>{
    console.log(userName)
    if(userName=="" && password==""){
        alert("enter your name")
        alert("enter password")
      }
      else if(userName==""){
            alert("enter your Name")
      }
      else if(password==""){
           alert("enter password")
      }
      else if(userName!="" && password!=""){
             nav('/Home')
      }
  }

  return (
    <div className='form'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          id="outlined-required"
          label="Username"
          name='userName'
          onChange={handleInput}
        />
        </Box>
        <Box>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name='pasword'
          autoComplete="current-password"
          onChange={handleInput}
        />
        </Box>
        <Box>
        <Button variant="contained" onClick={()=>LoginFun()}>Submit</Button>
    </Box>
    </div>
  )
}

export default Login