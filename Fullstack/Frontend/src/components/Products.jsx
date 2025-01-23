// src/components/Products.jsx

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import Topbar from "./Topbar.jsx";
import '../styles/Productcard.css';

const Products = () => {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [apiRes, setApiRes] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  
  useEffect(() => {
    fetch("https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4")
      .then((res) => res.json())
      .then((json) => {
        setApiRes(json);
        setList(json);
        const c = json.map((x) => x.category);
        setCategory([...new Set(c)]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  useEffect(() => {
    if (selectedCategory === "") {
      setList(apiRes);
    } else {
      const res = apiRes.filter(obj => obj.category === selectedCategory);
      setList(res);
    }
  }, [selectedCategory, apiRes]);
  
  useEffect(() => {
    if (searchItem !== "" && selectedCategory !== "") {
      const filterItems = list.filter(obj => obj.title.toLowerCase().includes(searchItem.toLowerCase()));
      setList(filterItems);
    } else if (searchItem === "" && selectedCategory !== "") {
      const res = apiRes.filter(obj => obj.category === selectedCategory);
      setList(res);
    } else if (searchItem === "" && selectedCategory === "") {
      setList(apiRes);
    } else {
      const filterItems = apiRes.filter(obj => obj.title.toLowerCase().includes(searchItem.toLowerCase()));
      setList(filterItems);
      if (filterItems.length === 0) {
        alert("No items found");
        setList(list);
      }
    }
  }, [searchItem, selectedCategory, apiRes, list]);

  return (
    <>
      <Topbar category={category} setSelectedCategory={setSelectedCategory} setSearchItem={setSearchItem} />
      <div className="product-title">Products</div> 
      <div className="products">
        {list.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default Products;
