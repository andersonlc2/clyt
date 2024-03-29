import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import VideoCall from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';
import Keyboard from '@material-ui/icons/Keyboard';
import SearchSharp from '@material-ui/icons/SearchSharp';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
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
        borderRadius: 0,
        '&:hover': { outline: 0, boxShadow: 'none', border: 'none', background: '#F0F0F0' }
    },
    iconSearch: {
        width: 20,
        color: '#6E6E6E',
        '&:hover': { background: '#F0F0F0' }
    }
}));

function Toolbar(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <AppBar style={{boxShadow: 'inherit'}} className={ classes.root }>
            <div className={ classes.logo }>
                <IconButton>
                    <Menu />
                </IconButton>
                <a href="/"><img src={ theme.palette.type === 'dark' ? "/images/branco.png":"/images/preto.png" } className={ classes.img } /></a>
            </div>
            <Hidden mdDown>
                <div className={ classes.search } >
                    <input style={{ backgroundColor: theme.palette.type === 'dark' ? '#232323' : '#FFFFFF' }} id='search' type="search" placeholder="Pesquisar" className={ classes.input }/>
                    <IconButton><Keyboard /></IconButton>
                    <label htmlFor='search'>
                        <Button 
                            size="small" 
                            variant="contained" 
                            style={{border: 'inherit', background: theme.palette.type === 'dark' ? '#313131' : '#F0F0F0'}} 
                            className={ classes.btn } 
                            
                        >
                            <Search style={{ background: theme.palette.type === 'dark' ? '#313131' : '#F0F0F0' }} className={ classes.iconSearch } />
                        </Button>
                    </label>
                </div>
            </Hidden>
            <Switch value={ props.darkMode } onChange={ () => props.setDarkMode(!props.darkMode) } />
            <Hidden mdUp >
                <Button>
                    <SearchSharp />
                </Button>
            </Hidden>
            <Hidden smDown>
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
            </Hidden>
        </AppBar>
    )
}

export default Toolbar;