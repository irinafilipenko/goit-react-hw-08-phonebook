import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
// import EditIcon from '@material-ui/icons/Edit'
import style from "./FormList.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { operation, selectors } from "../../redux/contacts";

const ContactsList = () => {
  const contacts = useSelector(selectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(operation.deleteContact(id));
    console.log(id);
  };

  // const onAddContact = (contacts) => {
  //   dispatch(operation.editContact(contacts))
  //   console.log(contacts)
  // }

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

            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDeleteContact(id)}
            >
              <DeleteIcon className={style.statusClassIcon} />
            </IconButton>
            {/* <IconButton
              edge="end"
              aria-label="delete"
              onClick={() =>
                dispatch(operation.editContact({ id, name, number }))
              }
            >
              <EditIcon />
            </IconButton> */}
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
