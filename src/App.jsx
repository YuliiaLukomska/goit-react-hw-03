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

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addNewContacts} />
      <SearchBox value={value} onFilter={handleChange} />
      <ContactList contactsArray={contacts} />
    </div>
  );
}

export default App;
