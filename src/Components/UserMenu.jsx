import React from 'react'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getUsername } from '../redux/auth/auth-selectors'
import { logOut } from '../redux/auth/auth-operation'

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

  return (
    <div style={styles.container}>
      <GiBatMask />

      <span style={styles.name}>Добро пожаловать, {name}</span>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button> */}
      <Button
        variant="contained"
        color="primary"
        type="button"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        go out
      </Button>
    </div>
  )
}
