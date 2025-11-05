import { Product } from "../Types/product.types";
import axios from "axios";
import { useEffect, useState } from "react";

const ShoppingTable = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );
        const products = res.data.slice(0, 4); // Limit to first 4 items
        setData(products);

        // Calculate total directly from fetched data
        const totalValue = products.reduce(
          (acc, product) => acc + product.price * 3,
          0
        );
        setTotal(totalValue);
      } catch (err) {
        console.error(err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="overflow-x-auto rounded-box w-full h-screen flex items-center justify-center bg-base-100">
      <table className="table md:w-[50%]">
        <thead>
          <tr>
            <th>Index</th>
            <th>Image</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price/unit</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img className="w-20" src={product.image} alt={product.title} />
              </td>
              <td>{product.title}</td>
              <td>3</td>
              <td>{product.price.toFixed(2)}</td>
              <td>{(product.price * 3).toFixed(2)}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-gray-400">
            <td className="text-xl font-bold" colSpan={5}>
              Total
            </td>
            <td className="text-xl font-bold text-green-600">{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingTable;
