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
// Sample data for products
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    price: '$10.00',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of Product 2',
    price: '$20.00',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Product 2',
    description: 'Description of Product 2',
    price: '$20.00',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 2',
    description: 'Description of Product 2',
    price: '$20.00',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Product 2',
    description: 'Description of Product 2',
    price: '$20.00',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
]

// Product list component
const ProductList = () => (
  <Container maxWidth="sm">
    <br />
    <br />
    <br />
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12}>
          <Card>
            <CardActionArea component={Link} to={`/products/${product.id}`}>
              <CardMedia
                component="img"
                height="150"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="textPrimary">
                  {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
)

const ProductsList = () => (
  <>
    <Header />
    <ProductList />
    <BottomNav />
  </>
)

export { ProductsList }
