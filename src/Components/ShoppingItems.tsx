import React,{ useContext, useEffect, useState } from "react";
import axios from "axios";
import { shopContext, Shopping } from "../Contexts/Shopping/shoppingContext";
import { Product } from "../Types/product.types";
import {useNavigate} from 'react-router-dom'

const ShoppingItems: React.FC = () => {
  const navigate=useNavigate()
  const {quantity,setQuantity}=useContext<Shopping>(shopContext)
  console.log(quantity)
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Product[]>("https://fakestoreapi.com/products");
        
        setData(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <p className="text-lg font-medium">Loading products...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <p className="text-red-500 font-medium">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <div>
         <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap gap-4 justify-center items-center -m-4">
          {data.map((product) => (
            <div onClick={()=>{navigate("/product")}} key={product.id} className="lg:w-1/5 hover:shadow-2x transition shadow-xl md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={product.title}
                  className="object-scale-down object-center w-full h-full block"
                  src={product.image}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1">${product.price}</p>
                <div className="w-full flex justify-between">
                  <button className="font-bold cursor-pointer p-1.5 rounded-full  text-amber-500 text-center" onClick={()=>{
                    setQuantity(quantity+1)
                  }}>Add to Cart</button>
                  <button className="font-bold cursor-pointer p-1.5 rounded-full  text-red-500 text-center">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
 
  );
};

export default ShoppingItems;
