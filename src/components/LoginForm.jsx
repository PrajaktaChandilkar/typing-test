import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleLogin = () =>{
        if(!email || ! password){
            alert("enter all details");
            return;
        }
        console.log(email,password)
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
      onChange={(e)=>setPassword(e.target.value)}>
        
      </TextField>
      <Button
          variant="contained"
          size="large"
          style={{backgroundColor:'red',color:'pink'}}
          onClick={handleLogin}
        >
          Login
        </Button>
        
    </Box>
  );
};

export default LoginForm;
