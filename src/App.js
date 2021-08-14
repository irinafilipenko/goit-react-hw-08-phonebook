import s from "./App.module.css";
// import { useSelector } from 'react-redux'
// import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from 'react-loader-spinner'
import Container from "./Components/Container";
// import Form from './Components/Form'
// import FormList from './Components/FormList'
// import Filter from './Components/Filter'
// import { selectors } from './redux'
// import { FaBook } from 'react-icons/fa'
import { Switch, Route } from "react-router-dom";
import AppBar from "Components/AppBar";
import HomeView from "Views/HomeView";
import RegisterView from "Views/RegisterView";
import LoginView from "Views/LoginView";
import ContactsView from "Views/ContactView";

function App() {
  // const loading = useSelector(selectors.getLoading);
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
    // <Container title="Phonebook">
    //   <ToastContainer autoClose={3000} />
    //   <FaBook size="50" className={s.bookIcon} />
    //   <Form />
    //   <h2 className={s.caption}>Contacts</h2>
    //   <Filter />
    //   <FormList />
    //   {loading && (
    //     <Loader type="Audio" color="#00BFFF" height={80} width={80} />
    //   )}
    // </Container>
  );
}

export default App;
