import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import GroupWork from '@material-ui/icons/GroupWork';
import Stars from '@material-ui/icons/Stars';
import YouTube from '@material-ui/icons/YouTube';
import AddCircle from '@material-ui/icons/AddCircle';
import SettingsInputAntenna from '@material-ui/icons/SettingsInputAntenna';



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
    },
    listText: {
        
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
                    <ListItem button style={{ background: '#D5D5D5' }} className={ classes.listItem} >
                        <ListItemIcon> <Home style={{ color: 'red' }}/> </ListItemIcon>
                        <ListItemText className={ classes.listText } primary={ "Início" } />
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
            <List
                component="nav"
                aria-labelledby="cabeça"
                subheader={
                    <div style={{ paddingLeft: 15 }}>
                        <ListSubheader component="div" id="cabeça">
                            O MELHOR DO YOUTUBE
                        </ListSubheader>
                    </div>
                }
            >
                <ListItem button className={ classes.listItem} >
                    <ListItemIcon> <PlayCircleFilled style={{ color: '#424242' }}/> </ListItemIcon>
                    <ListItemText primary={ "Música" } />
                </ListItem>
                <ListItem button className={ classes.listItem} >
                    <ListItemIcon> <GroupWork style={{ color: '#424242' }}/> </ListItemIcon>
                    <ListItemText primary={ "Esportes" } />
                </ListItem>                    
                <ListItem button className={ classes.listItem} >
                    <ListItemIcon> <Stars style={{ color: '#424242' }}/> </ListItemIcon>
                    <ListItemText primary={ "Jogos" } />
                </ListItem>                    
                <ListItem button className={ classes.listItem} >
                    <ListItemIcon> <PlayCircleFilled style={{ color: '#424242' }}/> </ListItemIcon>
                    <ListItemText primary={ "Filmes" } />
                </ListItem>                    
                <ListItem button className={ classes.listItem} >
                    <ListItemIcon> <Stars style={{ color: '#424242' }}/> </ListItemIcon>
                    <ListItemText primary={ "Notícias" } />
                </ListItem>                    
                <ListItem button className={ classes.listItem} >
                    <ListItemIcon> <GroupWork style={{ color: '#424242' }}/> </ListItemIcon>
                    <ListItemText primary={ "Ao vivo" } />
                </ListItem>                    
                <ListItem button className={ classes.listItem} >
                    <ListItemIcon> <PlayCircleFilled style={{ color: '#424242' }}/> </ListItemIcon>
                    <ListItemText primary={ "Aprender" } />
                </ListItem>                    
                <ListItem button className={ classes.listItem} >
                    <ListItemIcon> <YouTube style={{ color: 'red' }} /> </ListItemIcon>
                    <ListItemText primary={ "Vídeos do momento" } />
                </ListItem>                    
                <ListItem button className={ classes.listItem} >
                    <ListItemIcon> <GroupWork style={{ color: '#424242' }}/> </ListItemIcon>
                    <ListItemText primary={ "Vídeos em 360" } />
                </ListItem>                    

            </List>
            <Divider />
                <div>
                    <List>
                        <ListItem button className={ classes.listItem} >
                            <ListItemIcon> <AddCircle /> </ListItemIcon>
                            <ListItemText primary={ "Procurar canais" } />
                        </ListItem>  
                    </List>
                </div>
            <Divider />
                <List
                    component="nav"
                    aria-labelledby="cabeça"
                    subheader={
                        <div style={{ paddingLeft: 15 }}>
                            <ListSubheader component="div" id="cabeça">
                                MAIS DO YOUTUBE
                            </ListSubheader>
                        </div>
                    }
                >
                    <ListItem button className={ classes.listItem} >
                        <ListItemIcon> <YouTube /> </ListItemIcon>
                        <ListItemText primary={ "YouTube Premium" } />
                    </ListItem>
                    <ListItem button className={ classes.listItem} >
                        <ListItemIcon> <SettingsInputAntenna /> </ListItemIcon>
                        <ListItemText primary={ "Ao vivo" } />
                    </ListItem>
                </List>
        </Drawer>
    )
}