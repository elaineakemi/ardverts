import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { ProductsList } from './pages/Products/ProductsList'
import { Product } from './pages/Products/Product'
import { VirtualTryOn } from './pages/Try-On/TryOn'
import { Categories } from './pages/Categories/Categories'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="products/*" element={<ProductsList />} />
    <Route path="/products/:productId" element={<Product />} />
    <Route path="/products/:productId/try/:type" element={<VirtualTryOn />} />
    <Route path="categories/*" element={<Categories />} />
    <Route path="categories/:category" element={<ProductsList />} />
  </Routes>
)

export default App
