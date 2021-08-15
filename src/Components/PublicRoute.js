import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth-selectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const showRedirect = isLoggedIn && restricted;
  console.log(showRedirect);
  return (
    <Route {...routeProps}>
      {showRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
