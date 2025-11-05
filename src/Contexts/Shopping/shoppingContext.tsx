import { createContext} from "react";

export interface Shopping {
  quantity: number;
  price_unit: number;
  total: number;
  setQuantity: (q: number) => void;
  setPriceUnit: (p: number) => void;
  setTotal: (t: number) => void;
}

export const shopContext = createContext<Shopping>({
  quantity:0,
  price_unit:0,
  total:0,
  setPriceUnit:()=>{},
  setQuantity:()=>{},
  setTotal:()=>{}
});


