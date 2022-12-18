import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function User() {
  let { id } = useParams();
  let [user, setUser] = useState({
    name: "",
    username: "",
    grades:"",
    email: "",
    phone: "",
    website:""
  });
  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    let res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    
    <div className="container">
          <Link className="btn btn-primary" to="/">
             Back To Home Page
          </Link>
    <div className='w-75 mx-auto shadow p-4 mt-4'>
        <h2 className='text-center mb-2'>Student id:{user.id}</h2>
        <form > 
             <div className='form-group'>
                <input type={"text"} name="name" className="form-control form-control-lg mb-3" value={user.name}  placeholder='Enter Your Name' />
            </div>
            <div className='form-group'>
                <input type={"text"} name="username" className="form-control form-control-lg mb-3" value={user.username}  placeholder='Enter Your Name' />
            </div>
            <div className='form-group'>
                <input type={"text"} name="grades" className="form-control form-control-lg mb-3" value={user.grades}   placeholder='Enter Your Username' />
            </div>
            <div className='form-group'>
                <input type={"text"} name="email" className="form-control form-control-lg mb-3" value={user.email}   placeholder='Enter Student Grade' />
            </div>
            <div className='form-group'>
                <input type={"email"} name="phone" className="form-control form-control-lg mb-3" value={user.phone}  placeholder='Enter Your E-mail Address' />
            </div>
            <div className='form-group'>
                <input type={"text"} name="website" className="form-control form-control-lg mb-3" value={user.website}  placeholder='Enter Your  website ' />
            </div>
           
        </form>
    </div>
</div>
  );
}

export default User;
