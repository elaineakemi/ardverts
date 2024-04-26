import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Products } from './pages/Products/Products'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="products/*" element={<Products />} />
  </Routes>
)

export default App
