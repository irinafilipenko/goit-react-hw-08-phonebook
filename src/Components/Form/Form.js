import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import s from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { operation, selectors } from "../../redux";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some((contact) => contact.name === name)) {
      toast.error(`${name} already in the contacts.`);
      return;
    }
    dispatch(operation.addContact({ name, number }));

    resetForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.ContactForm} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={nameInputId}>
        NAME
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          onChange={handleChange}
          id={nameInputId}
          required
        />
      </label>
      <label className={s.label} htmlFor={numberInputId}>
        NUMBER
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={handleChange}
          id={numberInputId}
          required
        />
      </label>
      <button type="submit" className={s.button} disabled={!name || !number}>
        Add contact
      </button>
    </form>
  );
}
