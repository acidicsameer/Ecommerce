import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import useStore from "../store/CartStore.js";
import { toast } from "react-toastify";
const Products = () => {
  const { increase,addToCart } = useStore();
      

  //toastify
  const notify = () =>
    toast("Added to cart successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      color: "light",
    }

  
  
  );

  const [items, setItems] = useState([]);

  const fetchdata = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setItems(response.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <ul className="flex flex-wrap gap-6 justify-center p-4">
      {items.map((data) => (
        <li
          key={data.id}
          className="w-72 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-4 shadow-md flex flex-col justify-between"
        >
          <div>
            <img
              src={data.image}
              alt={data.title}
              className="h-40 w-full object-contain mb-4"
            />
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {data.title}
            </h1>
            <h3 className="text-blue-700 dark:text-blue-300 font-bold text-md mb-2">
              ${data.price}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-400 line-clamp-3">
              {data.description}
            </p>
          </div>
          <button
            onClick={() => {
              increase();
              notify(); 
              addToCart(data);

            }}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Products;
