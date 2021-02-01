import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { contactsOperations } from 'redux/contacts';

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <>
            {name}: {number}
            {/* <button
                type="button"
                className={s.btnUpdate}
                onClick={() =>
                    dispatch(
                        contactsOperations.updateContact({ id, name, number }),
                    )
                }
            >
                Update
            </button> */}
            <button
                type="button"
                className={s.btnDelete}
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
                Delete
            </button>
        </>
    );
};

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
