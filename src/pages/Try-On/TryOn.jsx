import { useParams } from 'react-router-dom'
import { GlassesTryOn } from '../../components/Virtual-Try-On/Glasses'
import { MockProducts } from '../../mock/Products'
import { XrHitModelContainer } from '../../components/Virtual-Try-On/Xr-Hit-Model/XrHitModelContainer'
import { ModelTypes } from '../../utils/consts'

const VirtualTryOn = () => {
  const { productId, type } = useParams()
  const product = MockProducts.find((p) => p.id === Number(productId))

  return (
    <>
      {type === ModelTypes.GLASSES && (
        <GlassesTryOn image={product.images[0].imgPath} />
      )}
      {type === ModelTypes.DESK && (
        <XrHitModelContainer modelType={ModelTypes.DESK} />
      )}
      {type === ModelTypes.GUITAR && (
        <XrHitModelContainer modelType={ModelTypes.GUITAR} />
      )}
      {type === ModelTypes.HEADPHONES && (
        <XrHitModelContainer modelType={ModelTypes.HEADPHONES} />
      )}
    </>
  )
}

export { VirtualTryOn }
