import { Box, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const SignupForm = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () =>{
        if(!email || !password || ! confirmPassword){
            alert('Enter all details');
            return;
        }

        if(password !== confirmPassword){
            alert('Password misMatch');
        }
    }
  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        onChange={(e)=>setEmail(e.target.value)}
      ></TextField>
      <TextField variant="outlined" type="password" label="Enter Password"
      onChange={(e)=>setPassword(e.target.value)}
      >
        
      </TextField>
      <TextField variant="outlined" type="password" label="Confirm Password"
            onChange={(e)=>setConfirmPassword(e.target.value)}
            >
        
      </TextField>
      <Button
          variant="contained"
          size="large"
          style={{backgroundColor:'red',color:'pink'}}
          onClick={handleSignup}
        >
          Signup
        </Button>
        
    </Box>
  );
};

export default SignupForm;
