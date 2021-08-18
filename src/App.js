import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Switch, Route } from "react-router-dom";
import { fetchCurrentUser } from "redux/auth/auth-operation";
import Container from "@material-ui/core/Container";
import AppBar from "Components/AppBar";
import PrivateRoute from "Components/PrivateRoute";
import PublicRoute from "Components/PublicRoute";
import { getIsFetchingCurrent } from "redux/auth/auth-selectors";

const HomeView = lazy(() => import("./Views/HomeView"));
const RegisterView = lazy(() => import("./Views/RegisterView"));
const LoginView = lazy(() => import("./Views/LoginView"));
const ContactsView = lazy(() => import("./Views/ContactView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      {isFetchingCurrent ? (
        <h2>make spinner</h2>
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<h2>...LOADING</h2>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute path="/login" restricted redirectTo="/contacts">
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default App;
