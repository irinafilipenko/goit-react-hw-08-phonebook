import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './AuthNav.module.css'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export default function AuthNav() {
  const [value, setValue] = React.useState(2)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Paper square variant="outlined">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <NavLink
          to="/register"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          <Tab label="Register" />
        </NavLink>

        <NavLink
          to="/login"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          <Tab label="Login" />
        </NavLink>
      </Tabs>
    </Paper>
  )
}
