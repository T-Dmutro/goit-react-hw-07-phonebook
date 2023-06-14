import React, { useState } from 'react';
import { Forma, LabelPhone, InputPhone, AddContact } from './InputForm.styled'
import { ToastContainer, toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../Redux/contacts/contactApi';

function Form({ nameId, phoneId }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [addContact] = useAddContactMutation();
  const { data } = useFetchContactsQuery();

  // const handelChange = event => {
  //   const onName = event.currentTarget.name;
  //   const value = event.currentTarget.value;

  //   switch (onName) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'number':
  //       setPhone(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };
  const handelChange = (event) => {
    const {name, value} = event.currentTarget;
    if (name === "name") {setName(value);}
    if (name === "phone") {setPhone(value);}
  };
  const addNewContact = async () => {
    const availableContact = await data.some(contact =>
      contact.name.trim().toLowerCase().includes(name.toLowerCase())
    );

    if (availableContact) {
      return toast.error(`${name} is already in contacts!`);
    } else {
      await addContact({ name, phone });
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handelSubmit = event => {
    event.preventDefault();
    addNewContact();
    reset();
  };

  return (
    // <>
    // <Forma    onSubmit={handelSubmit}          >
    // <LabelPhone htmlFor="name">Name</LabelPhone>
    // <InputPhone
    //   value={name}
    //   onChange={handelChange}
    //   // className={css.form__input}
    //   type="text"
    //   name="name"
    //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //   required/>
    // <LabelPhone htmlFor="number">Number</LabelPhone>
    // <InputPhone
    //   value={phone}
    //   onChange={handelChange}
    //   // className={css.form__input}
    //   type="tel"
    //   name="number"
    //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //   required
    // />

    // <AddContact  type="submit">Add contact</AddContact>
    // </Forma>
    //   <ToastContainer
    //     position="top-center"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     theme="dark"
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //   />

    // </>



    <div>
      <Forma onSubmit={handelSubmit}>
        <LabelPhone htmlFor={nameId}>
          Name
          <InputPhone
            type="text"
            value={name}
            name="name"
            onChange={handelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelPhone>

        <LabelPhone htmlFor={phoneId}>
          Number
          <PhoneInput
            type="tel"
            value={phone}
            name="phone"
            onChange={handelChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelPhone>

        <AddContact type="submit">Add contact</AddContact>
      </Forma>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Form;
