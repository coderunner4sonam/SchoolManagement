import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from "@mui/material/styles"; // Correct the import path
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List'; // Correct the import path
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem'; // Correct the import path
import ListItemIcon from '@mui/material/ListItemIcon'; // Correct the import path
import ListItemText from '@mui/material/ListItemText'; // Correct the import path
import InfoIcon from '@mui/icons-material/Info'; // Correct the import path
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button'; // Correct the import path
import { useNavigate } from 'react-router-dom';
import { globalState } from '../Context';
import FaceIcon from '@mui/icons-material/Face';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { count } = useContext(globalState);

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>{<InfoIcon />}</ListItemIcon>
          <ListItemText primary="about" onClick={() => { navigate("/about") }} />

        </ListItem>
        <ListItem button>
          <ListItemIcon>{<FaceIcon />}</ListItemIcon>
          <ListItemText primary="Total No. Student" /><span style={{ color: "lightgreen", fontSize: "25px" }}>{count}</span>
        </ListItem>
      </List>
      <Divider />

    </div>
  );

  return (
    <div>
      {['left',].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* Hamburger */}
          <Button onClick={toggleDrawer(anchor, true)}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
