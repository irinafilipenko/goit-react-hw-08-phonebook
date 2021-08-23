import { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
// import { getContactEdit } from 'redux/contacts/selectors'
import { toast } from "react-toastify";
import s from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { operation, selectors } from "../../redux/contacts";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts);
  // const contactEdit = useSelector(getContactEdit)

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
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        margin="dense"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />

      <TextField
        id="outlined-basic"
        label="Number"
        variant="outlined"
        margin="dense"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        value={number}
        onChange={handleChange}
        required
      />

      <Button
        className={s.button}
        variant="contained"
        color="primary"
        type="submit"
        disabled={!name || !number}
      >
        Add contact
      </Button>
    </form>
  );
}
