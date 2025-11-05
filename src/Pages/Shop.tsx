import Navbar from "../Components/Navbar"
import ShoppingItems from "../Components/ShoppingItems"
import { useLocation, useNavigate } from "react-router-dom"


const Shop = () => {
  const location=useLocation()
  const path:string=location.pathname.slice(1,location.pathname.length)
  const navigate=useNavigate()
  console.log(location.pathname)
  return (
    <div className="relative">
      <Navbar/>
        <div className="absolute top-28 left-12 md:left-24">
        <div className="breadcrumbs text-sm">
          <ul>
            <li className="hover:underline cursor-pointer" onClick={()=>navigate("/")}>
              Home
            </li>
            <li className="hover:underline cursor-pointer" onClick={()=>navigate('/shop')}>
              {path}
            </li>
          </ul>
        </div>
      </div>
      <ShoppingItems/>
    </div>
  )
}

export default Shop

