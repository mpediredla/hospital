import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {useNavigate,Outlet} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    rootBox: {
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
      }
    },
    footerNav: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginRight: 'auto',
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(0),
  
      [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: 'auto',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
      }
    },
    footerLink: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(2),
      }
    },
  }));


const drawerWidth = 240
const drawerHeight=510 

function Menu1(props) {

    const navigate = useNavigate();
    const classes = useStyles();

  const content = {
    'brand': { image: 'nereus-assets/img/nereus-light.png', width: 110 },
    'copy': '© 2020 Nereus All rights reserved.',
    'link1': 'First Link',
    'link2': 'Second Link',
    'link3': 'Third Link',
    'link4': 'Fourth Link',
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={ content.brand.image } alt="" width={ content.brand.width } />;
  } else {
    brand = content.brand.text || '';
  }


const patientslist=()=>{
    navigate("patientslist")
}
const outboxHandler=()=>{
    navigate("outbox")
}


  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>


    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          height: drawerHeight,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' ,height: drawerHeight},
        }}
      >
    
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
<ListItemButton onClick={patientslist}>List of patients</ListItemButton>
<ListItemButton onClick={outboxHandler}>Outbox</ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography >
        <Outlet/>
        </Typography>
      </Box>
    </Box>

<br/><br/><br/>
    <footer>
      <Container maxWidth="xl">
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Link href="#" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" className={classes.footerNav}>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link1']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link2']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link3']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link4']}</Link>
          </Box>
          {/* <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography> */}
        </Box>
      </Container>
    </footer>
    
    </div>
  )
}

export default Menu1