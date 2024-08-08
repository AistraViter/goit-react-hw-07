import {useMemo } from "react"
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const { ContactListContainer } = styles;
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  // Мемоізація відфільтрованих контактів
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <ul className={ContactListContainer}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

