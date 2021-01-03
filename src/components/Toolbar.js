import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import VideoCall from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';
import Keyboard from '@material-ui/icons/Keyboard';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        zIndex: theme.zIndex.drawer + 1,
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    img: {
        height: 25,
        marginTop: 7,
        marginLeft: 15,
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    search: {
        display: 'flex',
        justifyContent: 'center',
        height: 30,
        width: 640,
        border: '2px solid #D5D5D5',
        borderRadius: '3px',
    },
    input: {
        width: 600,
        boxShadow: 0,
        border: 'none',
        height: '100%',
        '&:focus': { outline: 0, boxShadow: 0, border: 'none' }
    },
    btn: {
        width: 50,
        boxShadow: 'none',
        height: '100%',
        background: '#F0F0F0',
        borderRadius: 0,
        '&:hover': { outline: 0, boxShadow: 'none', border: 'none', background: '#F0F0F0' }
    },
    iconSearch: {
        width: 20,
        background: '#F0F0F0',
        color: '#6E6E6E',
        '&:hover': { background: '#F0F0F0' }
    }
}));

function Toolbar(props) {
    const classes = useStyles();

    return (
        <AppBar style={{boxShadow: 'inherit'}} className={ classes.root }>
            <div className={ classes.logo }>
                <IconButton>
                    <Menu />
                </IconButton>
                <a href="/"><img src="/images/preto.png" className={ classes.img } /></a>
            </div>
            <div className={ classes.search } >
                <input id='search' type="search" placeholder="Pesquisar" className={ classes.input }/>
                <IconButton><Keyboard /></IconButton>
                <label for='search'>
                    <Button 
                        size="small" 
                        variant="contained" 
                        style={{border: 'inherit'}} 
                        className={ classes.btn } 
                    >
                        <Search className={ classes.iconSearch } />
                    </Button>
                </label>
            </div>
            <div>
                <IconButton>
                    <VideoCall />
                </IconButton>                
                <IconButton>
                    <AppsIcon />
                </IconButton>                
                <IconButton>
                    <MoreVert />
                </IconButton>
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    startIcon={<AccountCircle />}
                >
                    FAZER LOGIN
                </Button>
            </div>
        </AppBar>
    )
}

export default Toolbar;