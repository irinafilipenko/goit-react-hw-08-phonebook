import { useDispatch, useSelector } from 'react-redux'
import { getUsername } from '../redux/auth-selectors'
import { logOut } from '../redux/auth-operation'
// import defaultAvatar from './default-avatar.png';
import { GiBatMask } from 'react-icons/gi'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
}

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(getUsername)
  //   const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <GiBatMask />
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  )
}
