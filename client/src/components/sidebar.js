import React from 'react';
import { Link } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer'
import Icon from './icon';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import { styled, useTheme } from '@mui/material/styles';
const drawerWidth = 180;

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    background: '#1a76d2',
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 10,position: 'fixed',top: '64px',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
  }),
);

export default function Sidebar() {
  return (
    <Drawer variant="permanent" open={true}>
      <List>
          {[{type:'dashboard',link:'/'}, {type:'transaction',link:'/recordList'}, {type:'card',link:'/accounts'}, {type:'budget',link:'/recordList'}, ].map((text, index) => (
            <ListItem key={text.type} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  px: 2.5,
                }}
              >{
                  <Link to={text.link}>
                  <Icon type={text.type} />
                  </Link>
                }
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </Drawer>
    // <div
    //   style={{
    //     maxWidth: '30px',
    //     position: 'fixed',
    //     top: '64px',
    //     padding: '14px',
    //     minHeight: '100vh',
    //     background: '#1a76d2',
    //     zIndex: 10,
    //   }}
    // >
    //   <Link to='/'>
    //     <Icon type='dashboard' />
    //   </Link>
    //   <Link to='/recordList'>
    //     <Icon type='transaction' />
    //   </Link>
    //   <Link to='/accounts'>
    //     <Icon type='card' />
    //   </Link>
    //   <Link to='/recordList'>
    //     <Icon type='budget' />
    //   </Link>
    // </div>
  );
}
