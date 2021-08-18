import React from 'react'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../redux/auth/auth-operation'

const styles = {
  form: {
    width: 320,
  },
}

export default function LoginView() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logIn({ email, password }))
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Mail"
          variant="outlined"
          margin="dense"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="dense"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button variant="contained" color="primary" type="submit">
          to come in
        </Button>
      </form>
    </div>
  )
}
