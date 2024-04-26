import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Button, Typography } from '@mui/material'

const Home = () => {
  const navigate = useNavigate()

  const handleSellerClick = () => {
    // Handle seller button click
  }

  const handleBuyerClick = () => {
    navigate('/products')
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #FF8F1C, #FFF)', // CSS gradient background
        color: '#fff', // Light text color
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center', marginBottom: '40px' }}
      >
        Welcome to Our App
      </Typography>
      <Button
        variant="contained"
        onClick={handleSellerClick}
        sx={{
          backgroundColor: '#4caf50', // Green color
          color: '#fff',
          padding: '15px 30px',
          borderRadius: '50px',
          marginBottom: '20px',
          textTransform: 'none', // Prevent button text from being uppercase
        }}
      >
        I want Sell
      </Button>
      <Button
        variant="contained"
        onClick={handleBuyerClick}
        sx={{
          backgroundColor: '#2196f3', // Blue color
          color: '#fff',
          padding: '15px 30px',
          borderRadius: '50px',
          textTransform: 'none', // Prevent button text from being uppercase
        }}
      >
        I want Buy
      </Button>
    </Container>
  )
}

export { Home }
