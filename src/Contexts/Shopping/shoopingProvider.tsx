import { useEffect,useState } from "react";
import type { ReactNode,FC } from "react";
import { shopContext } from "./shoppingContext";
import { Product } from "../../Types/product.types";
import axios from "axios";
interface ShopProviderProps {
  children: ReactNode;
}

export const ShopProvider: FC<ShopProviderProps> = ({ children }) => {
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
  
  const [quantity, setQuantity] = useState(Number(localStorage.getItem("quantity")));
  const [price_unit, setPriceUnit] = useState(Number(localStorage.getItem("price_unit")));
  const [total, setTotal] = useState(Number(localStorage.getItem("total")));
  
  localStorage.setItem("quantity",JSON.stringify(quantity))
  localStorage.setItem("price_unit",JSON.stringify(price_unit))
  localStorage.setItem("total",JSON.stringify(total))

  useEffect(() => {
    setTotal(quantity * price_unit);
  }, [quantity, price_unit]);

  const value = {
    quantity,
    price_unit,
    total,
    setQuantity,
    setPriceUnit,
    setTotal,
    data,
    setData,
    loading,
    setLoading,
    error,
    setError

  };

  return (
    <shopContext.Provider value={value}>
      {children}
    </shopContext.Provider>
  );
};