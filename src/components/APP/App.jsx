import Form from '../Form/InputFotm';
import ContactList from '../ContactList/ConactList';
import Filter from '../Filter/Filter';
import { Title, TitleContacts, Section, Container } from './app.styled';

function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <Title>Phonebook</Title>
        <Form/>
      </Section>
      <Section title="Contacts">
        <TitleContacts>Contacts</TitleContacts>
        <Filter/>
        <ContactList/>
      </Section>
    </Container>
  );
};


export default App;
