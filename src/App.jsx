import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState } from "react";
import initialContacts from "../initialContacts.json";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [value, setValue] = useState();

  const handleChange = (inputValue) => {};

  const addNewContacts = (newContact) => {
    const finalNewContact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, finalNewContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addNewContacts} />
      <SearchBox value={value} onFilter={handleChange} />
      <ContactList contactsArray={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
