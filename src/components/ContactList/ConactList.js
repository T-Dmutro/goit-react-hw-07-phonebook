import {  useSelector } from "react-redux";
import { ListContact, ListItem, ListButton } from './ContactList.styled';
import { useFetchContactsQuery, useDeleteContactMutation } from '../Redux/contacts/contactApi';
import { MutatingDots } from  'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactList = () => {
  const { data = [], isFetching, isError, error } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter);


  const mapFilterContacts = data?.filter(({name}) =>
  name.trim().toLowerCase().includes(filter.toLowerCase()));

  const handleDeleteContact = contactId => {
    deleteContact(contactId);
  };

  const possibleСonditions =  data && !isFetching && !isFetching && <h1>{data.name}</h1>;

  return (
    <>
    {isError && toast.error(`${error.data}`)}
    {isFetching && <MutatingDots ariaLabel="loading-indicator" />}
    <ListContact>
      {mapFilterContacts.map(({ name, id, phone }) => {
        return (
        <ListItem key={id}>
        <p>
          {name}: {phone}
        </p>
        <ListButton type="button" onClick={() => handleDeleteContact(id)}>
          Delete
        </ListButton>
      </ListItem>
      )}
      )}
    </ListContact>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

    {possibleСonditions}
    </>
  );
};

export default ContactList;


