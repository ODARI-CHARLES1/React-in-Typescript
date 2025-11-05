
import { Product } from "./product.types";
export interface Shopping {
  quantity: number;
  price_unit: number;
  total: number;
  setQuantity: (q: number) => void;
  setPriceUnit: (p: number) => void;
  setTotal: (t: number) => void;
  data:Product;
  setData:(d:string)=>void,
  error:string;
  setError:(e:string)=>void
  loading:boolean,
  setLoading:(l:boolean)=>void

}
