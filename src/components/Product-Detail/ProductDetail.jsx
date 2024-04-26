/* eslint-disable import/no-extraneous-dependencies */
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
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  ViewInAr as ViewInArIcon,
} from '@mui/icons-material'
import { ImageSlider } from '../Image-Slider/ImageSlider'
import { MockProducts } from '../../mock/Products'

const ProductDetail = () => {
  const { productId } = useParams()
  const navigate = useNavigate()

  const product = MockProducts.find((p) => p.id === Number(productId))

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAR = () => {
    navigate(`/products/${product.id}/try/glasses`)
  }
  return (
    <>
      <ImageSlider images={product.images} />
      <Container maxWidth="sm" sx={{ pb: 2 }}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <IconButton
            aria-label="AR"
            size="large"
            onClick={() => handleAR(product.images[0].imgPath)}
          >
            <ViewInArIcon fontSize="large" />
            <Typography variant="body2" color="textSecondary">
              View in AR
            </Typography>
          </IconButton>
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
            >
              Additional Info
            </AccordionSummary>
            <AccordionDetails>{product.additionalInfo}</AccordionDetails>
          </Accordion>
        </Stack>
        <Button fullWidth variant="contained" color="primary">
          Add to Cart
        </Button>
      </Container>
    </>
  )
}

export { ProductDetail }
