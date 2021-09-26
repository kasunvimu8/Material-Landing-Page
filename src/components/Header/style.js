import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily : 'Nunito Sans'
    },

    appbar : {
        boxShadow : 'none !important',
    },

    ToolBar : {
        width : '80%',
        margin : '0 auto',
    },

    Title : {
        flexGrow : '1',
        color : 'white',
        fontSize : '2rem'
    },

    SortIcon : {
        color : 'white',
        fontSize : '2rem'
    },

    TextColor : {
        color : '#102a58'
    },

    maintext : {
        color : 'white',
        fontSize : '4.5rem',
        fontWeight : 'bold',
        [theme.breakpoints.down('md')]: {
            fontSize : '3.5rem !important',
        }
    },

    alignCenter: {
        alignItems: 'center',
        justifyContent : 'center',
    },

    textContainer : {
        display : 'flex',
        flexFlow : 'column',
    },

    down: {
        color : '#102a58',
        fontSize : '4.5rem !important',
        fontWeight : 'bold',
        [theme.breakpoints.down('md')]: {
            fontSize : '3rem !important',
        }
    },

    icon: {
        display : 'flex',
        alignItems: 'center',
        justifyContent : 'center'
    }
}));

export default useStyles;