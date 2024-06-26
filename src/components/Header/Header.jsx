/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Paper,
} from '@mui/material'
import { Search } from '../Search/Search'
import { CartContext } from '../../contexts/CartContext'

const Header = () => {
  const navigate = useNavigate()
  const { cartCount } = useContext(CartContext)

  return (
    <Paper
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
      elevation={3}
    >
      <AppBar sx={{ background: '#FF8F1C' }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="h1"
            translate="no"
            onClick={() => {
              navigate('/')
            }}
          >
            AR
          </Typography>

          <Search />
          <IconButton color="inherit">
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Paper>
  )
}

export { Header }
