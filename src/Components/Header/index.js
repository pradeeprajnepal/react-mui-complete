import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';


const useStyles= makeStyles(theme=>({
    root:{
        backgroundColor:'#fff !important',
        transform:'translateƵ(0)'
    },
    searchInput:{
        opacity:'0.6',
        padding:`0px ${theme.spacing(1)}px`,
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight:theme.spacing(1)
        },
       
    },
 
}))

export default function Header() {
    const classes= useStyles();
    console.log(classes);
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid item >
                        <InputBase 
                        placeholder='Search Courses'
                        className={classes.searchInput}
                        startAdornment={<SearchIcon fontSize='small'/>}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item >
                        <IconButton >
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={1} color="primary">
                                <ChatBubbleIcon />
                            </Badge>

                        </IconButton>
                        <IconButton>
                            <Badge color="secondary">
                                <LogoutIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

