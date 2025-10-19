import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import useStore from "../store/CartStore.js";
import { toast } from "react-toastify";
import notificationsound from '/sound/addedSound.wav'
import "react-toastify/dist/ReactToastify.css";
const Products = () => {
  const { increase,addToCart } = useStore();
      
 //toastify
  const notify = () =>{
    toast(" Added To Cart Successfully"
  , {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      color: "green",
    } 
    )
      playSound();
  }

  function playSound(){
 const audio =new Audio(notificationsound)
 audio.play();
  }
 

  const [items, setItems] = useState([]);

  const fetchdata = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setItems(response.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (<section className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Products
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((data) => (
            <li
              key={data.id}
              className="bg-white text-gray-800 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="p-4 flex-grow flex flex-col">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-40 w-full object-contain mb-4 rounded"
                  loading="lazy"
                />

                <h1 className="text-lg font-semibold mb-1">{data.title}</h1>
                <h3 className="text-blue-600 font-bold text-md mb-2">
                  ${data.price}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {data.description}
                </p>

                <button
                  onClick={() => {
                    increase();
                    notify();
                    addToCart(data);
                  }}
                  className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
   
  );
};

export default Products;
