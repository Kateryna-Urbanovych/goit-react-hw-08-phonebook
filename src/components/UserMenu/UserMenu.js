import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import s from './UserMenu.module.css';
import { authOperations } from 'redux/auth';

const useStyles = makeStyles(theme => ({
    link: {
        margin: theme.spacing(1, 1.5),
    },
    avatar: {
        marginRight: theme.spacing(1.5),
    },
}));

const UserMenu = () => {
    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <div className={s.container}>
            <Avatar src="/broken-image.jpg" className={classes.avatar} />
            <span className={s.name}>Welcome to Phonebook, {userName}</span>
            <Button
                type="button"
                color="primary"
                variant="outlined"
                className={classes.link}
                onClick={() => dispatch(authOperations.logOut())}
            >
                Log out
            </Button>
        </div>
    );
};

export default UserMenu;
