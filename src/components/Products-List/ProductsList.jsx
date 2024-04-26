/* eslint-disable import/no-extraneous-dependencies */
import { Grid } from '@mui/material'
import { MockProducts } from '../../mock/Products'
import { ProductCard } from './ProductCard'

const ProductsList = () => (
  <div style={{ marginTop: '80px' }}>
    {/* Position the container below the header */}
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {MockProducts.map((product) => (
        <Grid item key={product.id} xs={6} sm={4} md={4}>
          <ProductCard item={product} />
        </Grid>
      ))}
    </Grid>
  </div>
)

export { ProductsList }
