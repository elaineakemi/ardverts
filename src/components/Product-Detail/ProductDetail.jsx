/* eslint-disable import/no-extraneous-dependencies */
import { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Typography,
  Container,
  IconButton,
  Chip,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Box,
  Snackbar,
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  ViewInAr as ViewInArIcon,
} from '@mui/icons-material'
import { ImageSlider } from '../Image-Slider/ImageSlider'
import { MockProducts } from '../../mock/Products'
import { XrHitModelContainer } from '../Virtual-Try-On/Xr-Hit-Model/XrHitModelContainer'
import { CartContext } from '../../contexts/CartContext'

const ProductDetail = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { addItemToCart } = useContext(CartContext)

  const product = MockProducts.find((p) => p.id === Number(productId))

  if (!product) {
    return <Container>Product not found</Container>
  }

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  })
  const { vertical, horizontal, open } = state

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  const handleAR = () => {
    navigate(`/products/${product.id}/try/${product.type}`)
  }

  const handleCart = () => {
    addItemToCart()
    setState({ ...state, open: true })
  }

  return (
    <div style={{ marginTop: '80px', marginBottom: '80px' }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Item added to cart!"
        key={vertical + horizontal}
      />
      <Container sx={{ pb: 2 }}>
        <ImageSlider images={product.images} />
      </Container>
      <Container sx={{ pb: 2 }}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          {product.type !== 'glasses' && (
            <Box
              display="flex"
              sx={{ marginBottom: '-80px' }}
              justifyContent="center"
            >
              <XrHitModelContainer modelType={product.type} />
            </Box>
          )}
          {product.type === 'glasses' && (
            <IconButton
              aria-label="AR"
              size="large"
              onClick={() => handleAR(product.images[0].imgPath)}
              sx={{
                '&:hover': {
                  // Remove hover effect
                  backgroundColor: '#FFF',
                },
              }}
            >
              <ViewInArIcon fontSize="large" />
              <Typography variant="body2" color="textSecondary">
                View in AR
              </Typography>
            </IconButton>
          )}
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4" color="textPrimary">
            {product.name}
          </Typography>
          <Typography variant="h5" color="textPrimary">
            {product.price}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={4} mt={2} alignItems="center">
          <Typography variant="body2" color="textSecondary">
            {product.category}
          </Typography>
          <Chip label={`Size: ${product.size}`} variant="filled" />
        </Stack>
        <Stack direction="column" mt={2} mb={2}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: '#EBEBEB',
              }}
            >
              Description
            </AccordionSummary>
            <AccordionDetails>{product.description}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel2-header"
              sx={{
                backgroundColor: '#EBEBEB',
              }}
            >
              Additional Info
            </AccordionSummary>
            <AccordionDetails>{product.additionalInfo}</AccordionDetails>
          </Accordion>
        </Stack>
        <Button
          fullWidth
          variant="contained"
          sx={{
            background: '#FF8F1C',
            color: '#fff',
            textTransform: 'none',
            '&:hover': {
              // Remove hover effect
              backgroundColor: '#FF8F1C',
            },
          }}
          onClick={handleCart}
        >
          Add to Cart
        </Button>
      </Container>
    </div>
  )
}

export { ProductDetail }
