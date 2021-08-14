import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./FormList.module.css";
import s from "../Form/Form.module.css";
import { FaPhoneAlt, FaRegTrashAlt } from "react-icons/fa";
import { operation, selectors } from "../../redux";

const ContactsList = () => {
  const contacts = useSelector(selectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(operation.deleteContact(id));
    console.log(id);
  };

  useEffect(() => {
    dispatch(operation.fetchContact());
  }, [dispatch]);

  return (
    <ul className={style.list}>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <li className={style.item} key={id}>
            <p className={style.textName}>
              <FaPhoneAlt className={style.statusClass} /> {name}
            </p>
            <p className={style.textNamber}>{number}</p>
            <button className={s.button} onClick={() => onDeleteContact(id)}>
              Delete <FaRegTrashAlt />
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
