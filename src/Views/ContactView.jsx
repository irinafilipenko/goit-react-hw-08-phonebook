import s from './ContactView.module.css'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
// import Container from '../Components/Container'
import Container from '@material-ui/core/Container'
import Form from '../Components/Form'
import FormList from '../Components/FormList'
import Filter from '../Components/Filter'
import { selectors } from '../redux/contacts'
import { FaBook } from 'react-icons/fa'

export default function ContactsView(params) {
  const loading = useSelector(selectors.getLoading)
  return (
    <Container maxWidth="md" title="Phonebook">
      <ToastContainer autoClose={3000} />
      <FaBook size="30" className={s.bookIcon} />
      <Form />
      <h2 className={s.caption}>Contacts</h2>
      <Filter />
      <FormList />
      {loading && (
        <Loader type="Audio" color="#00BFFF" height={80} width={80} />
      )}
    </Container>
  )
}
