import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline,
  Drawer as MuiDrawer,
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import {
  PersonOff as PersonOffIcon,
  Menu as MenuIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Hail as HailIcon,
  Diversity3 as Diversity3Icon,
  ChevronLeft as ChevronLeftIcon,
  EditNote as EditNoteIcon,
  Groups as GroupsIcon,

} from '@mui/icons-material';

import { Outlet, Link } from 'react-router-dom'
import './style.css'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const sidebarItems = [
    { id: 'item1', text: 'Nhân khẩu', path: "/nhankhau", icon: <PersonIcon /> },
    { id: 'item2', text: 'Hộ khẩu', path: "/hokhau", icon: <GroupsIcon /> },
    { id: 'item3', text: 'Tạm vắng', path: "/tamvang", icon: <PersonOffIcon /> },
    { id: 'item4', text: 'Tạm trú', path: "/tamtru", icon: <HailIcon /> },
    { id: 'item5', text: 'Thống kê', path: "/thongke", icon: <EditNoteIcon /> },
    { id: 'item6', text: 'Họp tổ dân phố', path: "/hoptodanpho", icon: <Diversity3Icon /> },
    // Các mục sidebar khác
  ];

  const [selectedItem, setSelectedItem] = useState("item1");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', overflow: 'hidden' }} height="100vh" >
        <AppBar open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Typography

                variant="h6"
                color="inherit"
                noWrap
                sx={{ paddingRight: 2, flexGrow: 1 }}
              >
                Đăng xuất
              </Typography>
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List sx={{ height: '100vh' }}>
            {sidebarItems.map((item) => (
              <Link to={item.path} className="link" key={item.id}>
                <ListItemButton

                  onClick={() => handleItemClick(item.id)}
                  style={{
                    backgroundColor: selectedItem === item.id ? '#1976d2' : 'inherit',
                    color: selectedItem === item.id ? '#fff' : 'inherit'
                  }}
                >
                  <ListItemIcon sx={{ color: selectedItem === item.id ? '#fff' : 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText primary={item.text} />

                </ListItemButton>
              </Link>
            ))}
          </List>
        </Drawer>
        <Container sx={{ marginTop: 10 }}><Outlet /></Container>
      </Box>

    </ThemeProvider >
  );
}