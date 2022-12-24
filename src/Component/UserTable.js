import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import { globalState } from "../Context";

export default function UserTable() {
  const [page, setPage] = useState(1);
  const {setCount}=useContext(globalState); 
  let [user, setUser] = useState([]);
  const {store,setStore}=useContext(globalState);
  let [loading, setloading] = useState(false); //page load
  let userfilter = [];

  const { text } = useContext(globalState); // searching 

  const loaduser = () => {
    // let result = await axios.get("http://localhost:3003/users");

    setUser(store);
    console.log(user);
    setloading(false);
  };

  if (text) {
    console.log(text);

    userfilter = user.filter((ele) => {
      return ele.name.toLowerCase().includes(text.toLowerCase());
    });
  } else {
    userfilter = [...user];
  }
  
  setCount(user.length);
  console.log(user, "user");
  console.log(userfilter, "userfilter");

  useEffect(() => {
    setloading(true);
 
    setTimeout(() => {
      loaduser();
    }, 200);
  }, [store]);

  const useStyles = makeStyles({
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "blue",
      },
    },
  });

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  useEffect(() => {
    setPage(1);
  }, []);

  const deleteUser = (id) => {
    let temp = store.filter((element,idx)=>{
      return idx!==id;
    });
    setStore(temp);
    loaduser();
  };
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "#006B38FF" }} />
          ) : userfilter?.length === 0 ? (
            <h1>Seems Nothing Found :(</h1> // writing wrong name 
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#006B38FF" }}>
                <TableRow>
                  {[
                    "Sr.No",
                    "First Name",
                    "Last Name",
                    "Grades",
                    "Email Id",
                    "Phone Number",
                    "Studnet Class",
                    "Action",
                  ].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={ head==="Action"? "center":"right" } 
                    >
                      {/* tablehead */}
                      {head} 
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {userfilter 
                  .slice((page - 1) * 10, (page - 1) * 10 + 10) //0,10 ,11,20
                  .map((element, index) => {
                    return (
                      <TableRow
                        className={classes.row}
                        key={element.name + index}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          {index + 1 + (page - 1) * 10}  
                           {/* total number of student data in one page - start from 1-10*/} 
                        </TableCell>
                        <TableCell align="right">{element.name}</TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: "rgb(14, 203, 129)",

                            fontWeight: 500,
                          }}
                        >
                          {element.username}
                        </TableCell>
                        <TableCell align="right">{element.grades}</TableCell>
                        <TableCell align="right">{element.email}</TableCell>
                        <TableCell align="right">{element.phone}</TableCell>
                        <TableCell align="right">{element.website}</TableCell>
                        <TableCell align="right">
                          <Link
                            className="veiwbutton"
                            exact
                            to={`/users/${element.name}`}
                          >
                            Veiw
                          </Link>
                          <Link
                            className="editbutton"
                            exact
                            to={`/users/edit/${element.name}`}
                          >
                            Edit
                          </Link>
                          <Link
                            className="deletebutton"
                            exact
                            onClick={() => deleteUser(index)}
                          >
                            Delete
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Comes from @material-ui/lab */}
        {userfilter?.length !== 0 ? (
          <Pagination
            count={
              parseInt((userfilter?.length / 10).toFixed(0)) === 0
                ? 1
                : parseInt((userfilter?.length / 10).toFixed(0))
            }
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            classes={{ ul: classes.pagination }}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 450);
            }}
          />
        ) : null}
      </Container>
    </ThemeProvider>
  );
}
