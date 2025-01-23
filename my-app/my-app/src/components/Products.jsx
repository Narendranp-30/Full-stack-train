import { useEffect,useState } from "react"
import ProductCard from "./ProductCard"
const Products =() =>
{
    const [list,setList]=useState([])
    useEffect(()=>{
        fetch('https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4').then((result)=>{
            return result.json()
        })
        .then((json)=>{
            setList(json)
        })
        .catch()},[])
    
    return (
      <>
        <div>
          <h1>Products</h1>
        </div>
        <div className="row">
          {list.map((item) => (
            <ProductCard product={item} />
          ))}
        </div>
      </>
    );
}
export default Products