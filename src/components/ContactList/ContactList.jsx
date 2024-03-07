import Contact from "../Contact/Contact";

const ContactList = ({ contactsArray }) => {
  return (
    <ul>
      {contactsArray.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
