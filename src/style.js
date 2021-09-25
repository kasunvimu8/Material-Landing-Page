import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
    root : {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + 'img/background.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}));

export default useStyles;