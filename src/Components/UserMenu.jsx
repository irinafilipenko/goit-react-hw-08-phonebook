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
  console.log(name)

  return (
    <div style={styles.container}>
      <GiBatMask size="30" />
      <h2 style={styles.name}>Welcome {name}</h2>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        go out
      </Button>
    </div>
  )
}
