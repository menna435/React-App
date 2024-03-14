import  axios from 'axios';
import {useFormik} from 'formik'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup';
export default function Signin() {


let navigate= useNavigate()
let [errMsg,setErrMsg]= useState('')


 function sendDataToApi (values){
   axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values).then(returnValue=>{
    
   
    if(returnValue.data.message=='success'){
      localStorage.setItem("token",returnValue.data.token)
      navigate('/home')
    }
  }).catch(err=>{
setErrMsg(err.response.data.message)
    console.log(err.response.data.message );
     
  })
 
}


function validationSchema(){
let errors=Yup.object({
 
  email:Yup.string().email().required('Email is required'),
  password:Yup.string().matches(/^[A-Z][a-zA-Z0-9]{6,}$/).required(),
 
  
  
})
return errors
}

  let login = useFormik({
    initialValues:{
      email:'',
      password:'',
     
    },
    validationSchema
   ,
    onSubmit:(values) => {
    console.log(values);
    sendDataToApi(values)
    }
  })


 
  return (
    <div>
    <div className="div w-50 m-auto ">
      <h4>loginNOW:</h4>

        <form onSubmit={login.handleSubmit}> 
  <div className="mb-3">
    <label htmlFor="Email" >Email:</label>
    <input onChange={login.handleChange}  type="email"   name="email" className="form-control" id="email"/>
    {login.errors.email && login.touched.email? <div className="alert alert-danger">
      {login.errors.email}
    </div>:''}
  </div>
  <div className="mb-3">
    <label htmlFor="Password" >Password:</label>
    <input onChange={login.handleChange} type="password"  name="password" className="form-control"/>
    {login.errors.password && login.touched.password? <div className="alert alert-danger">
      {login.errors.password}
    </div>:''}
  </div>
 
  
  
  
{errMsg?<div class="alert alert-danger" role="alert">
  {errMsg}
</div> :''}
  


  <button type="submit" className="btn btn-primary">Signin</button>
</form>
    </div>
  
    
    </div>



  )
}
