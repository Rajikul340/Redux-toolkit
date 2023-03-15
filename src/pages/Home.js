import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allPhones")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {item.map((product) => (
        <ProductCard product={product} key={product.model} />
      ))}
    </div>
  );
};

export default Home;
