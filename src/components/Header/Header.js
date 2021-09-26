import React, {useState, useEffect} from 'react';
import useStyles from './style';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as Scroll } from 'react-scroll';

const Header = () => {
     const classes = useStyles();
     const [checked, setChecked] = useState(false);

     useEffect(() => {
        setChecked(true);
     },[])

     return (
         <div className={classes.root} >
             <AppBar className={classes.appbar} color="transparent">
                 <Toolbar className={classes.ToolBar}>
                    <h1 className={classes.Title}>Travel <span className={classes.TextColor}></span></h1>
                    <IconButton>
                        <SortIcon className={classes.SortIcon}/>
                    </IconButton>
                </Toolbar>
             </AppBar>

             <Collapse in={checked} timeout={1000}>
                <div className={classes.maintext}>
                    <div className={classes.textContainer}>
                        <span className={classes.alignCenter}> Welcome to </span><span className={classes.TextColor}>Sri Lanka</span>

                        <Scroll to="placesToVisit" smooth={true}>
                            <div className={classes.icon} >
                                <IconButton>
                                    <KeyboardArrowDownIcon className={classes.down}/>
                                </IconButton>
                            </div>
                        </Scroll>
                    </div>
                </div>
             </Collapse>
         </div>
     )
}

export default Header;