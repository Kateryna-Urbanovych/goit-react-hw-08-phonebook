import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const ContactsView = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    return (
        <Container>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </Container>
    );
};

export default ContactsView;
