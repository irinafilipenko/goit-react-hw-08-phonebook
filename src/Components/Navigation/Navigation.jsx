import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from 'redux/auth/auth-selectors'
import s from './Navigation.module.css'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export default function Navigation() {
  const [value, setValue] = React.useState(2)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const isLoggedIn = useSelector(getIsLoggedIn)

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
          <Tab label="Home" />
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to="/contacts"
            exact
            className={s.link}
            activeClassName={s.activeLink}
          >
            <Tab label="Contacts" />
          </NavLink>
        )}
      </Tabs>
    </Paper>
  )
}
