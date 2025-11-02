
import useFetch from '../hooks/useFetch'

function ProductPage() {
    const products=useFetch('https://dummyjson.com/products')
    console.log(products);
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage