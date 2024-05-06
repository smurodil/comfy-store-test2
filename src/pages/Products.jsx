import Filters from "../components/Filters"
import ProductsContainer from "../components/ProductsContainer"
import { customFetch } from "../utils"

  
const url = './products'

export const  loader = async({ request }) => {
  const response = await customFetch(url)
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta }
}

function Products() {
  return (
    <div className="align-content mt-14">
        <Filters/>
        <ProductsContainer/>
        {/* PAGINATION CONTAINER */}
    </div>
  )
}

export default Products