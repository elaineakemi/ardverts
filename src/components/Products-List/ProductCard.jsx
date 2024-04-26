/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom'
import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  CardContent,
  Stack,
  Chip,
} from '@mui/material'

const ProductCard = ({ item }) => {
  const { id, name, images, price, size } = item

  return (
    <Card key={id} style={{ marginBottom: '8px' }}>
      <CardActionArea component={Link} to={`/products/${id}`}>
        <CardMedia
          component="img"
          loading="lazy"
          src={new URL(images[0].imgPath, import.meta.url).href}
          title={name}
        />
        <CardContent>
          <Stack direction="row">
            <Typography gutterBottom variant="h6" color="textPrimary">
              {name}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h7" color="textPrimary">
              {price}
            </Typography>
            <Chip label={`Size: ${size}`} variant="filled" size="small" />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export { ProductCard }
