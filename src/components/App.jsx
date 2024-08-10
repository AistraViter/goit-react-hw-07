import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts, getError, getIsLoading } from "../redux/contactsOps";
// import { getTasks } from "../redux/contactsSlice";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import styles from "./App.module.css";


function App() {
  const { container, phonebookTitle } = styles;

  const dispatch = useDispatch();
  // Отримуємо частини стану
  // const { items, isLoading, error } = useSelector(getTasks);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
