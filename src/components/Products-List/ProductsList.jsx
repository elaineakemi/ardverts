import { Link } from 'react-router-dom'
import {
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@mui/material'

import { MockProducts } from '../../mock/Products'

const ProductsList = () => (
  <Container maxWidth="sm">
    <br />
    <br />
    <br />
    <Grid container spacing={3}>
      {MockProducts.map((product) => (
        <Grid item key={product.id} xs={12}>
          <Card>
            <CardActionArea component={Link} to={`/products/${product.id}`}>
              <CardMedia
                component="img"
                // height="150"
                image={new URL(product.images[0].imgPath, import.meta.url).href}
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

export { ProductsList }
