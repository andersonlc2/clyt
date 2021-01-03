import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Home from '@material-ui/icons/Home';
import Whatshot from '@material-ui/icons/Whatshot';
import Subscriptions from '@material-ui/icons/Subscriptions';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 240,
        border: 'none',
    },
    rootPaper: {
        width: 240,
        border: 'none',
    },
    listItem: {
        paddingLeft: 28,
        color: 'black',
    },
    login: {
        padding: 30,
    },
    btn: {
        marginTop: 15,
    }
}));

export default function RightBar(props) {
    const classes = useStyles();

    return (
        <Drawer 
            variant='permanent'
            className={ classes.root }
            classes={{ paper: classes.rootPaper }}
        >
            <Toolbar />
            <div>
                <List>
                    <ListItem button className={ classes.listItem} >
                        <ListItemIcon> <Home style={{ color: 'red' }}/> </ListItemIcon>
                        <ListItemText primary={ "Início" } />
                    </ListItem>                    
                    <ListItem button className={ classes.listItem} >
                        <ListItemIcon> <Whatshot /> </ListItemIcon>
                        <ListItemText primary={ "Em alta" } />
                    </ListItem>
                    <ListItem button className={ classes.listItem} >
                        <ListItemIcon> <Subscriptions /> </ListItemIcon>
                        <ListItemText primary={ "Inscrições" } />
                    </ListItem>
                </List>
            </div>
            <Divider />
            <div>
                <List>
                    <ListItem button className={ classes.listItem} >
                        <ListItemIcon> <VideoLibrary /> </ListItemIcon>
                        <ListItemText primary={ "Biblioteca" } />
                    </ListItem>                    
                    <ListItem button className={ classes.listItem} >
                        <ListItemIcon> <History /> </ListItemIcon>
                        <ListItemText primary={ "Histórico" } />
                    </ListItem>
                </List>
            </div>
            <Divider />
            <div className={ classes.login}>
                <Typography>Faça login para curtir vídeos, comentar e se inscrever.</Typography>
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    startIcon={ <AccountCircle />} 
                    className={ classes.btn }
                >
                    FAZER LOGIN
                </Button>
            </div>
            <Divider />
        </Drawer>
    )
}