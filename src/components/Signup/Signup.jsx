import  axios from 'axios';
import {useFormik} from 'formik'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup';
export default function Signup() {


let navigate= useNavigate()
let [errMsg,setErrMsg]= useState('')


 function sendDataToApi (values){
   axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values).then(returnValue=>{
    console.log(returnValue);
    if(returnValue.data.message=='success'){

      navigate('/Signin')
    }
  }).catch(err=>{
setErrMsg(err.response.data.message)
    console.log(err.response.data.message );
     
  })
 
}


function validationSchema(){
let errors=Yup.object({
  name:Yup.string().min(2).max(20).required(),
  email:Yup.string().email().required('Email is required'),
  password:Yup.string().matches(/^[A-Z][a-zA-Z0-9]{6,}$/).required(),
  rePassword:Yup.string().oneOf([Yup.ref('password')]).required()
  
  
})
return errors
}

  let Register = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },
    validationSchema
   ,
    onSubmit:(values) => {
    console.log(values);
    sendDataToApi(values)
    }
  })

// console.log('dirty',Register.dirty); 'dirty'| true
// console.log('isValid',Register.isValid); 'isValid'| true

 
  return (
    <div>
    <div className="div w-50 m-auto ">
      <h4>REGISTERNOW:</h4>

        <form onSubmit={Register.handleSubmit}> 
  <div className="mb-3">
    <label htmlFor="Name">Name:</label>
    <input onBlur={Register.handleBlur} onChange={Register.handleChange} type="text" name="name" className="form-control" id="name" />
    {Register.errors.name && Register.touched.name ? <div className="alert alert-danger">
      {Register.errors.name}
    </div>:''}
  </div>
  <div className="mb-3">
    <label htmlFor="Email" >Email:</label>
    <input onChange={Register.handleChange}  type="email"   name="email" className="form-control" id="email"/>
    {Register.errors.email && Register.touched.email? <div className="alert alert-danger">
      {Register.errors.email}
    </div>:''}
  </div>
  <div className="mb-3">
    <label htmlFor="Password" >Password:</label>
    <input onChange={Register.handleChange} type="password"  name="password" className="form-control"/>
    {Register.errors.password && Register.touched.password? <div className="alert alert-danger">
      {Register.errors.password}
    </div>:''}
  </div>
  <div className="mb-3">
    <label htmlFor="rePassword">rePassword:</label>
    <input onChange={Register.handleChange} type="password" name="rePassword" className="form-control"/>
    {Register.errors.rePassword && Register.touched.rePassword? <div className="alert alert-danger">
      {Register.errors.rePassword}
    </div>:''}
  </div>
  <div className="mb-3">
    <label htmlFor="Phone" >Phone:</label>
    <input  onChange={Register.handleChange} type="" name="phone" className="form-control"/>
    {Register.errors.phone && Register.touched.phone? <div className="alert alert-danger">
      {Register.errors.phone}
    </div>:''}
  </div>
  
  
{errMsg?<div class="alert alert-danger" role="alert">
  {errMsg}
</div> :''}
  


  <button type="submit" className="btn btn-primary">Signup</button>
</form>
    </div>
  
    
    </div>



  )
}
