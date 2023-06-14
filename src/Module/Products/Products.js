import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Categories from '../../Components/Categories/Categories'



function Products() {
  const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((result) => {
                console.log(result.data)
                setProducts(result.data)
            })
    }, [])
 
  return (
    <div>
      <Categories/>
      {
        products.length>0 ? <ProductCard />: "Loading...."
      }
      
    </div>
  )
}

export default Products