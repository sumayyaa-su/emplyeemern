import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';



const Login = () => {
    
    const[user,setUser]=useState({username:'',password:''});
    
    
    
    let updateUser=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    const navigate=useNavigate();
    const sendData=(event)=>{
        
        
        
        axios.post("http://localhost:3000/user/login",user)
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            if(res.data.usertoken){
                localStorage.setItem("token",res.data.usertoken)
                navigate('/home')
            }
        })
        
    }
    

  return (
    <>
    <style>
        {`
          body, html {
            height: 250px;
            margin: 0;
            padding: 0;
          }
          #root {
            height: 100%;
          }
        `}
      </style>
    <div >
        <Box sx={{backgroundImage:'url(https://img.freepik.com/premium-photo/blurred-busy-business-people-walking-bright-office-lobby-moving-fast-crowded-office-workplace_1108720-283.jpg)',backgroundSize:'100%',backgroundPosition:'center',backgroundRepeat: 'no-repeat',  height: '100vh',  width: '100wh',display:'flex', justifyContent:'center', alignItems:'center',margin:0,padding:0 }} >
            
        <Stack spacing={2} direction="column" sx={{ width: '300px',padding: '10px',  borderRadius: '5px' }}>
    
        <Typography variant='h4'sx={{fontSize: '24px',  fontWeight: '700',   color: '#257180',  textTransform: 'uppercase',   letterSpacing: '2px'
}} >Login</Typography>
        <TextField id="outlined-basic" label="Username"  name="username" value={user.username} variant="outlined" onChange={updateUser} />
        <TextField id="outlined-basic" label="Password"  name="password" value={user.password} variant="outlined" onChange={updateUser} />
        <Button   variant="contained"  onClick={sendData}>Login</Button>
        </Stack>
        </Box>
    </div>
    </>
  )
}

export default Login