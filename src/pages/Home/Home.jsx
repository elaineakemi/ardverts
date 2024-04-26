/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Typography, Paper } from '@mui/material'

const Home = () => {
  const navigate = useNavigate()

  const handleSellerClick = () => {
    // Handle seller button click
  }

  const handleBuyerClick = () => {
    navigate('/products')
  }

  return (
    <Paper
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #FF8F1C, #FFF)',
          color: '#FFF',
        }}
        maxWidth={false}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <strong>AR</strong>dverts
        </Typography>
        <Button
          variant="contained"
          onClick={handleSellerClick}
          sx={{
            backgroundColor: '#fff',
            color: '#FF8F1C',
            padding: '15px 30px',
            borderRadius: '50px',
            marginBottom: '20px',
            textTransform: 'none',
            '&:hover': {
              // Remove hover effect
              backgroundColor: '#fff',
            },
          }}
        >
          <strong>I want Sell</strong>
        </Button>
        <Button
          variant="contained"
          onClick={handleBuyerClick}
          sx={{
            background: '#FF8F1C',
            color: '#fff',
            padding: '15px 30px',
            borderRadius: '50px',
            textTransform: 'none',
            '&:hover': {
              // Remove hover effect
              backgroundColor: '#FF8F1C',
            },
          }}
        >
          <strong>I want Buy</strong>
        </Button>
      </Container>
    </Paper>
  )
}

export { Home }
