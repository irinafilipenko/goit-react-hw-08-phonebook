// import PropTypes from 'prop-types'
import s from "../Form/Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { selectors } from "../../redux";
import * as actions from "../../redux/actions";

const Filter = () => {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(actions.changeFilter(e.target.value));
  return (
    <label className={s.label}>
      Find contacts by name
      <DebounceInput
        className={s.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={value}
        minLength={2}
        debounceTimeout={500}
        onChange={onChange}
        required
      />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// }

export default Filter;
