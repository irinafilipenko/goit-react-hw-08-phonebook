import s from "./filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
// import { DebounceInput } from "react-debounce-input";
import { selectors } from "../../redux/contacts";
import * as actions from "../../redux/contacts/actions";

const Filter = () => {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(actions.changeFilter(e.target.value));
  return (
    <div className={s.filter}>
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        margin="dense"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={value}
        minLength={2}
        // debounceTimeout={500}
        onChange={onChange}
      />
    </div>

    // <label className={s.label}>
    //   Find contacts by name
    //   <DebounceInput
    //     className={s.input}
    //     type="text"
    //     name="name"
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    //     value={value}
    //     minLength={2}
    //     debounceTimeout={500}
    //     onChange={onChange}
    //     required
    //   />
    // </label>
  );
};

export default Filter;
