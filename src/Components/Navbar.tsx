import { CiShop } from "react-icons/ci";
import { NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { shopContext } from "../Contexts/Shopping/shoppingContext";
const Navbar = () => {
  const navigate=useNavigate()
  const {quantity}=useContext(shopContext)
  return (
    <div className="w-full fixed z-10 flex bg-white md:px-24 items-center justify-between shadow px-12 h-[100px]">
        <div className="">
            <CiShop onClick={()=>navigate('/')} className="size-12 text-amber-900 cursor-pointer" />
        </div>
      <ul className="flex items-center justify-center gap-4">
        <li ><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/shop"}>Shop</NavLink></li>
        <li><NavLink to={"/login"}>Login</NavLink></li>
        <li><NavLink to={"/register"}>Register</NavLink></li>
      </ul>
      <div className="relative cursor-pointer" onClick={()=>navigate("/shop-list")}>
          <FaShoppingCart onClick={()=>navigate('/shop-list')} className="size-8 cursor-pointer" />
          <p className="cursor-pointer absolute top-0 left-full bg-red-600 text-white p-2 aspect-auto rounded-full h-6 w-6 text-center text-base flex items-center justify-center">{quantity}</p>
      </div>
    </div>
  )
}

export default Navbar
