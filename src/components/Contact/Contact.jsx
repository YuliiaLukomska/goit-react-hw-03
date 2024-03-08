const Contact = ({ data: { name, number, id }, deleteContact }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  );
};

export default Contact;
