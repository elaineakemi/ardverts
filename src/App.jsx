import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { ProductsList } from './pages/Products/ProductsList'
import { Product } from './pages/Products/Product'
import { VirtualTryOn } from './pages/Try-On/TryOn'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="products/*" element={<ProductsList />} />
    <Route path="/products/:productId" element={<Product />} />
    <Route path="/products/:productId/try/:type" element={<VirtualTryOn />} />
  </Routes>
)

export default App
