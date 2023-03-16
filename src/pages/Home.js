import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { toggle, toggleBrand } from "../feature/filter/filterSlice";
import { getProducts } from "../feature/products/productsSlice";

const Home = () => {

  const dispatch = useDispatch();
  const { filter  } = useSelector((state) => state);
  const { products } = useSelector((state) => state.products);
  const {data} = products 
  const { brand, stock, keyword } = filter;
   
  // console.log(data);

  useEffect(() => {
      dispatch(getProducts())
  }, [dispatch]);



  let content;
  if (data) {
    content = data?.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }

  // if (keyword) {
  //   content = data
  //     ?.filter((p) => p.model.toLowerCase().includes(keyword.toLowerCase()))
  //     .map((product) => <ProductCard key={product.model} product={product} />);
  // }

  if (data && (stock || brand)) {
    content = data.filter(p=>{
      if(stock){
      return p.status ===true
      }
      return p
    }).map((product) => <ProductCard key={product.model} product={product} />);
  }
  const activeClass = "text-white  bg-indigo-500 border-white";

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button className={`border px-3 py-2 rounded-full font-semibold `}>
          Clear Filter
        </button>

        <button
          onClick={() => dispatch(toggle())}
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          In Stock
        </button>

        <button
          onClick={() => dispatch(toggleBrand("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold 

        `}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrand("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold
      `}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
