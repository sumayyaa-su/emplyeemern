import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Grid2, Typography } from '@mui/material'
import axiosInstance from '../../axiosinterceptor'
const Home = () => {
    const [employee,setEmployee]=useState([])
    
          useEffect(()=>{
            axiosInstance.get('http://localhost:3000/employee/').then((res)=>{
                setEmployee(res.data)
            })
           
          })
          
          const handleDelete = (_id) => {
            axiosInstance.delete(`http://localhost:3000/employee/delete/${_id}`)
                .then((res) => {
                    
                    setEmployee(employee._id);
                    console.log(alert('are you sure'))
                     window.location.reload();
                })
                .catch((err) => {
                    console.error("Error deleting employee:", err);
                });
        };
        const navigate=useNavigate()
        const handleUpdate=(employee)=>{
            navigate('/add',{state:{employee}})    
        }
        
        
        
const user=localStorage.getItem("username")
    return (
        
        <>
         <Nav/>
        <Grid2 container spacing={8} sx={{ padding: 4 }}>
            {employee.map((employee) => (
                <Grid2 item xs={12} sm={6} md={4} key={employee.employeeId}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            sx={{ height: 150 }}
                            image={employee.employeeImage}
                            title={employee.employeeName}
                        />
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 700}}>
                                {employee.employeeName}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                               Designation: {employee.employeeDesignation}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                 Salary: {employee.employeeSalary} 
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                Department: {employee.employeeDepartment}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                Location: {employee.employeeLocation}
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor:'#F95454'}}  onClick={() => handleDelete(employee._id)}>DELETE</Button>
                            <Button variant="contained" onClick={() => handleUpdate(employee)}>EDIT</Button>


                        </CardContent>
                        <CardActions>
                           
                        </CardActions>
                    </Card>
                </Grid2>
            ))}
        </Grid2>   
        </>
    )
}

export default Home;
  