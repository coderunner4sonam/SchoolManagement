import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

function Loginpage() {
    let navigate = useNavigate()
    let[user,setUser]=useState({
        name:"",
        username:"", 
        email:"",
        phone:"",
     
    })

    let {name,username,email,phone}=user
    
    function handleuserinput(e){
        setUser({...user,[e.target.name]:e.target.value})
    }

    let submitform = async e =>{
        e.preventDefault();
        navigate('/')
    }

  return (
    <div className="container">
        <div className='w-75 mx-auto shadow p-4 mt-4'>
     
            <h2 className='text-center mb-2'>Login Page</h2>
            <form onSubmit={e=>submitform(e)} >
                <div className='form-group'>
                    <input type={"text"} name="name" className="form-control form-control-lg mb-3" value={name} onChange={(e)=>handleuserinput(e)} placeholder='Enter Your Name' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="username" className="form-control form-control-lg mb-3" value={username} onChange={(e)=>handleuserinput(e)}  placeholder='Enter Your Last-Name' />
                </div>
                <div className='form-group'>
                    <input type={"email"} name="email" className="form-control form-control-lg mb-3" value={email} onChange={(e)=>handleuserinput(e)} placeholder='Enter Your E-mail Address' />
                </div>
                <div className='form-group'>
                    <input type={"number"} name="phone" className="form-control form-control-lg mb-3" value={phone} onChange={(e)=>handleuserinput(e)} placeholder='Enter Your Phone Number' />
                </div>
               
                <button  className="btn btn-primary btn-block" style={{width:"100%"}} >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Loginpage
