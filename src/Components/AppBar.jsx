import { useSelector } from 'react-redux'
import Navigation from './Navigation/Navigation'
import UserMenu from './UserMenu'
import AuthNav from './Authnav/AuthNav'
import { getIsLoggedIn } from '../redux/auth/auth-selectors'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <header style={styles.header}>
      <Navigation />
      {/* <AuthNav />
      <UserMenu /> */}

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}
