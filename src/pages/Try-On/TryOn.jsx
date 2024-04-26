import { useParams } from 'react-router-dom'
import { GlassesTryOn } from '../../components/Virtual-Try-On/Glasses'
import { MockProducts } from '../../mock/Products'

const VirtualTryOn = () => {
  const { productId, type } = useParams()
  const product = MockProducts.find((p) => p.id === Number(productId))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>
      {type === 'glasses' && <GlassesTryOn image={product.images[0].imgPath} />}
      test
    </>
  )
}

export { VirtualTryOn }
