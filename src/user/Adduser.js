import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { globalState } from '../Context';
import { useContext } from 'react';

function Adduser() {
    let navigate = useNavigate();
    const {store,setStore}=useContext(globalState);
 
    let[user,setUser]=useState({
        name:"",
        username:"",
        grades:"",
        email:"",
        phone:"",
        website:""

    })
    
    let {name,username,grades,email,phone,website}=user
    
    function handleuserinput(e){
        setUser({...user,[e.target.name]:e.target.value})
    }

    let submitform = async e =>{
        e.preventDefault();
        setStore([user,...store]);
        navigate('/')
    }

  return (
    <div className="container">
        <div className='w-75 mx-auto shadow p-4 mt-4'>
            <h2 className='text-center mb-2'>Add A User</h2>
            <form onSubmit={e=>submitform(e)} >
                <div className='form-group'>
                    <input type={"text"} name="name" className="form-control form-control-lg mb-3" value={name} onChange={(e)=>handleuserinput(e)} placeholder='Enter Your Name' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="username" className="form-control form-control-lg mb-3" value={username} onChange={(e)=>handleuserinput(e)}  placeholder='Enter Your Username' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="grades" className="form-control form-control-lg mb-3" value={grades} onChange={(e)=>handleuserinput(e)}  placeholder='Enter Student Grade' />
                </div>
                <div className='form-group'>
                    <input type={"email"} name="email" className="form-control form-control-lg mb-3" value={email} onChange={(e)=>handleuserinput(e)} placeholder='Enter Your E-mail Address' />
                </div>
                <div className='form-group'>
                    <input type={"number"} name="phone" className="form-control form-control-lg mb-3" value={phone} onChange={(e)=>handleuserinput(e)} placeholder='Enter Your Phone Number' />
                </div>
                <div className='form-group'>
                    <input type={"text"} name="website" className="form-control form-control-lg mb-3" value={website} onChange={(e)=>handleuserinput(e)} placeholder='Enter Your Website Name' />
                </div>
                <button  className="btn btn-primary btn-block" style={{width:"100%"}} >Add User</button>
            </form>
        </div>
    </div>
  )
}

export default Adduser
