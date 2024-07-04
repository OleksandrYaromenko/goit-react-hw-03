// import { useState } from "react";
import ConstactJson from "./components/ContactJson.json";
import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  // const [contacts, setContacts] = useState(ConstactJson);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={ConstactJson} />
    </div>
  );
}
