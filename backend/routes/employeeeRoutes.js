const express=require ('express');
const router=express.Router();
const jwt=require('jsonwebtoken')

router.use(express.json());
router.use(express.urlencoded({extended:true}));
const employeeModel=require('../models/employeeData')
//adding middleware
function verifyToken(req,res,next){
    let token=req.headers.token;
    try {
        if (!token) throw 'Unauthorised Access'
        let payload=jwt.verify(token,"secret")
        if (!payload) throw 'Unauthorised Access'
        next()

    } catch (error) {
       res.json({message:error})
    }
}

router.get('/',verifyToken,async(req,res)=>{
    try {
        const employee=await employeeModel.find()
        res.status(200).send(employee);
    } catch (error) {
        res.status(404).send('employee not found');
        
    }
});


router.post('/addemployee',verifyToken,async(req,res)=>{
    try {
        const employee=req.body;
        const newemployee=new employeeModel(employee);
        const savedemployee=await newemployee.save();
        res.status(200).send('employee added successfully');
    } catch (error) {
        console.error(error); // Log the actual error
        res.status(404).send('Error adding employee');
    }
});
router.put('/edit/:id',verifyToken,async(req,res)=>{
    try {
        const id=req.params.id;
        const updatedemployee=await employeeModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send('employee updated successfully');
    } catch (error) {
        res.status(404).send('Error updating employee');
    }
});
router.delete('/delete/:id',verifyToken,async(req,res)=>{
    try {
        const id=req.params.id;
        const deleteemployee=await employeeModel.findByIdAndDelete(id,req.body,{new:true})
        res.status(200).send('employee deleted successfully');
    } catch (error) {
        res.status(404).send('Error deleting employee');
    }
});
module.exports = router;