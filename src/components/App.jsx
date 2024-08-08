import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import styles from "./App.module.css";

// const savedContacts = JSON.parse(localStorage.getItem("saved-contacts"));

// const contacts =
//   savedContacts !== null
//     ? savedContacts
//     : [ ];

function App() {
  const { container, phonebookTitle } = styles;

  return (
    <div className={container}>
      <h1 className={phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList/>
    </div>
  );
}

export default App;
