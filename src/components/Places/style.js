import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }

    },
    cardRoot: {
        maxWidth: 600,
        background: 'rgba(0, 0, 0, 0.5) !important',
        margin: '20px'
    },
    cardMedia: {
        height: 440
    },
    title : {
        fontFamily: 'Nunito Sans !important',
        fontWeight: 'bold !important',
        fontSize: '2rem !important',
        color: 'white !important',
    },

    text : {
        fontFamily: 'Nunito Sans !important',
        fontSize: '1rem !important',
        color: '#9a9595 !important',
    }
}));

export default useStyles;