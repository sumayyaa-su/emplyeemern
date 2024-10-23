const mongoose=require ('mongoose');
const employeeSchema=new mongoose.Schema({
    employeeImage:String,
    employeeId:String,
    employeeName:String,
    employeeDesignation:String,
    employeeSalary:Number,
    employeeDepartment:String,
    employeeLocation:String
})
const  employeeData=mongoose.model('employee',employeeSchema);
module.exports=employeeData;