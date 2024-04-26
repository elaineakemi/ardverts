/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  Link,
  Paper,
} from '@mui/material'
import {
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  Person as PersonIcon,
  MonetizationOn as MonetizationOnIcon,
  ManageSearch as ManageSearchIcon,
} from '@mui/icons-material'

const BottomNav = () => {
  const [value, setValue] = useState(0)

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction label="Category" icon={<ManageSearchIcon />} />
        <BottomNavigationAction label="Sell" icon={<MonetizationOnIcon />} />
        <BottomNavigationAction label="Favourites" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          component={Link}
          to="/profile"
          label="Me"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
}

export { BottomNav }
