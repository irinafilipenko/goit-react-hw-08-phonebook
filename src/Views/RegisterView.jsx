import React from 'react'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/auth/auth-operation'

const styles = {
  form: {
    width: 320,
  },
}

export default function RegisterView() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
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
    dispatch(register({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          margin="dense"
          size="medium"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

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
          register
        </Button>
      </form>
    </div>
  )
}
