import { makeStyles } from "@material-ui/core/styles";
import { Button, } from "@material-ui/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    backgroundColor:"black",
    color: "white",
    borderRadius: 10,
  },
  google: {
    padding: 24,
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: 20,
    fontSize: 20,
  },
}));

export default function Auth() {
  const classes = useStyles();
  return (
    <div>
      
        <Button
        color="secondary" 
        style={{
          width: "auto",
          height: 42,
          marginLeft: 15,
          backgroundColor: "#006B38FF",
          
        }}
        
      >
         <NavLink  exact to="/users/add">
         Add Student
        </NavLink>
       
      </Button>

      <Button
        variant="contained"
        style={{
          width: 85,
          height: 42,
          marginLeft: 15,
          backgroundColor: "#006B38FF",
        }}
        
      >
         <NavLink  exact to="/users/loginpage">
         Login
        </NavLink>
      </Button>
      
    </div>
  );
}

