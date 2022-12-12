
import { makeStyles } from "@material-ui/core";
import Headers from "./Component/Headers";
import UserTable from "./Component/UserTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edituser from "./user/Edituser";
import Adduser from "./user/Adduser";
import User from "./user/User";

const App = () => {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.App}>
      
  
      <BrowserRouter>
    <Headers />
      <Routes>
        <Route path="/" element={ <UserTable/>} />

        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/users/add" element={<Adduser />} />
        <Route path="/users/edit/:id" element={<Edituser />} />
        <Route path="/users/:id" element={<User />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


