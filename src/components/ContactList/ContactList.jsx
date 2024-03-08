import Contact from "../Contact/Contact";

const ContactList = ({ contactsArray, deleteContact }) => {
  return (
    <ul>
      {contactsArray.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
