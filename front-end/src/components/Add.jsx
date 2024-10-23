import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosinterceptor';
import Nav from './Nav';
import { Button, TextField } from '@mui/material';
const Add = () => {
    const[employee,setEmployee]=useState({employeeImage:'',employeeName:'',employeeDesignation:'',employeeDepartment:'',employeeId:'',employeeSalary:''})

    
     
    const fetchValue=(event)=>{
      setEmployee({...employee,[event.target.name]: event.target.value});
      }
      
      const Navigate=useNavigate()
      const location=useLocation()
      
      
    
      const sendData=()=>{

        if(location.state!=null){
          axiosInstance.put('http://localhost:3000/employee/edit/'+location.state.employee._id,employee)
          .then((res)=>{
            alert('Data updated');
            Navigate('/home')

          }).catch((error)=>{
            console.log(error);
          })
        }
        else{
          axiosInstance.post('http://localhost:3000/employee/addemployee',employee).then((res)=>{
            Navigate('/home')
          }).catch((error)=>{
            console.log(error)
          })
        }

      }
      useEffect(()=>{
        if(location.state!=null){
          setEmployee({
            ...employee,
            employeeImage:location.state.employee.employeeImage,
            employeeId:location.state.employee.employeeId,
            employeeName:location.state.employee.employeeName,
            employeeDesignation:location.state.employee.employeeDesignation,
            employeeSalary:location.state.employee.employeeSalary,
            employeeDepartment:location.state.employee.employeeDepartment,
            employeeLocation:location.state.employee.employeeLocation,
            
            

          })
        }
      },[])

  return (
    <div>
        <br />
        <Nav />
        <h2 style={{ontSize: '24px',  fontWeight: '700',   color: '#1976d2',  textTransform: 'uppercase'}} > Add employee</h2><br />
        <TextField id="employeeImage" label="Employee Image" variant="outlined" onChange={fetchValue} name="employeeImage" value={employee.employeeImage} /><br />
      <TextField id="employeeId" label="Employee ID" variant="outlined" onChange={fetchValue} name="employeeId" value={employee.employeeId} /><br />
      <TextField id="employeeName" label="Employee Name" variant="outlined" onChange={fetchValue} name="employeeName" value={employee.employeeName} /><br />
      <TextField id="employeeDesignation" label="Employee Designation" variant="outlined" onChange={fetchValue} value={employee.employeeDesignation} name="employeeDesignation" /><br />
      <TextField id="employeeSalary" label="Employee Salary" variant="outlined" value={employee.employeeSalary} onChange={fetchValue} name="employeeSalary" /><br />
      <TextField id="employeeDepartment" label="Employee Department" variant="outlined" value={employee.employeeDepartment} onChange={fetchValue} name="employeeDepartment" /><br />
      <TextField id="employeeLocation" label="Employee Location" variant="outlined" value={employee.employeeLocation} onChange={fetchValue} name="employeeLocation" /><br />
        
        <Button variant="contained" sx={{backgroundColor:'#96D0E2',color:'white', margin:2}} onClick={sendData}>Add Employee</Button>
    </div>
    
  )
}

export default Add