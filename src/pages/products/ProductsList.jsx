import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  Badge,
  Box,
} from '@mui/material'
import {
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  ShoppingBag as ShoppingBagIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
} from '@mui/icons-material'
import { BottomNav } from '../../components/Bottom-Navigation/BottomNav'
import { Header } from '../../components/Header/Header'
import { ProductsList as Products } from '../../components/Products-List/ProductsList'

const ProductsList = () => (
  <>
    <Header />
    <Products />
    <BottomNav />
  </>
)

export { ProductsList }
