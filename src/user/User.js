import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function User() {
    let{id}=useParams()
  let [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    let res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div>
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">Back To Home Page</Link>
      <h1 className="display-4">Student id:{user.id}</h1>
      <ul className="list-group w-50">
        <li className="list-group-item">name:{user.name}</li>
        <li className="list-group-item">username:{user.username}</li>
        <li className="list-group-item">email:{user.email}</li>
        <li className="list-group-item">phone:{user.phone}</li>
        <li className="list-group-item">website:{user.website}</li>
      </ul>
    </div>
    </div>
  );
}

export default User;
