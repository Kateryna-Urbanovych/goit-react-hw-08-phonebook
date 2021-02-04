import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import s from './ContactItem.module.css';
import { contactsOperations } from 'redux/contacts';

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <>
            {/* {name}: {number}
            <button
                type="button"
                className={s.btnDelete}
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
                Delete
            </button> */}
            <Container component="main" maxWidth="xs">
                <ListItem className={s.listItem}>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        <span className={s.nameNumber}>{name}</span>
                        <span className={s.phoneNumber}>{number}</span>
                    </ListItemText>
                    {/* <ListItemText primary={name} />
                    <ListItemText primary={number} className={s.phoneNumber} /> */}
                    <ListItemSecondaryAction>
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() =>
                                dispatch(contactsOperations.deleteContact(id))
                            }
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Container>
        </>
    );
};

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
