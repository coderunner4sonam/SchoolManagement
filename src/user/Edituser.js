import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { globalState } from "../Context";

function Edituser() {
  let navigate = useNavigate();
  let { id } = useParams();//vikas
  const { store, setStore } = useContext(globalState);//array 10
  let [user, setUser] = useState({});
  const[editindex,setEditindex]=useState();

  useEffect(() => {
    for (let i = 0; i < store.length; i++) {
      if (store[i].name === id) {
        setUser({ ...store[i] }); // edit krna hai 
        setEditindex(i); // index store , 
    
        break;
      }
    }
    console.log(user);
    
  }, []);
  console.log(editindex);   
  let { name, username, grades, email, phone, website } = user;

  function handleuserinput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  let submitform = (e) => {
    e.preventDefault();
    
    let temp = [...store];//10 array in store
    console.log(store);
    console.log(temp);
    console.log(editindex);
    for (let i = 0; i < temp.length; i++) {

        console.log(temp[i]);
        if (i==editindex) { // which index going to be edit 
            console.log(temp[i]);
            console.log(user);
            temp[i]={...temp[i],...user}    //old data =temp, new data in user 
          break;
        }
      }
    setStore(temp);
    navigate("/");
  };
// temp[i] :  {name: 'vikas', username: 'gklkgkk', grades: 'B', email: 'Anupam@gmail.com', phone: '59565695444', …}
// user:{name: 'vikas sharma', username: 'gklkgkk', grades: 'B', email: 'Anupam@gmail.com', phone: '59565695444', …}

//   console.log(store);
// temp=[1,2,3]
// temp=[...temp,5]
//[1,2,3,5]

// temp={name:"sonam",id:"fsdjkfkd"}
// user={name:"puja",username: 'gklkgkk', grades: 'B', email: 'Anupam@gmail.com', phone: '59565695444'}
// temp={...temp,user} 
// temp={name:"puja",id:"fsdjkfkd",{name:"puja"}}  



  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-4 mt-4">
        <h2 className="text-center mb-2">Edit A User</h2>
        <form onSubmit={(e) => submitform(e)}>
          <div className="form-group">
            <input
              type={"text"}
              name="name"
              className="form-control form-control-lg mb-3"
              value={name}
              onChange={(e) => handleuserinput(e)}
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type={"text"}
              name="username"
              className="form-control form-control-lg mb-3"
              value={username}
              onChange={(e) => handleuserinput(e)}
              placeholder="Enter Your Username"
            />
          </div>
          <div className="form-group">
            <input
              type={"text"}
              name="grades"
              className="form-control form-control-lg mb-3"
              value={grades}
              onChange={(e) => handleuserinput(e)}
              placeholder="Enter Student Grade"
            />
          </div>
          <div className="form-group">
            <input
              type={"email"}
              name="email"
              className="form-control form-control-lg mb-3"
              value={email}
              onChange={(e) => handleuserinput(e)}
              placeholder="Enter Your E-mail Address"
            />
          </div>
          <div className="form-group">
            <input
              type={"number"}
              name="phone"
              className="form-control form-control-lg mb-3"
              value={phone}
              onChange={(e) => handleuserinput(e)}
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="form-group">
            <input
              type={"text"}
              name="website"
              className="form-control form-control-lg mb-3"
              value={website}
              onChange={(e) => handleuserinput(e)}
              placeholder="Enter Your Student class"
            />
          </div>
          <button
            className="btn btn-primary btn-block"
            style={{ width: "100%" }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edituser;
