import Navbar from '../Components/Navbar'
import ShoppingTable from '../Components/ShoppingTable'
import { useLocation, useNavigate } from 'react-router-dom'
const ShopTable = () => {
  const location=useLocation()
  const path:string=location.pathname.slice(1,location.pathname.length)
  const navigate=useNavigate()
  console.log(location.pathname)
  return (
    <div>
      <Navbar/>
          <div className="absolute top-28 left-12 md:left-24">
        <div className="breadcrumbs text-sm">
          <ul>
            <li className="hover:underline cursor-pointer" onClick={()=>navigate("/")}>
              Home
            </li>
            <li className="hover:underline cursor-pointer" onClick={()=>navigate('/short-list')}>
              {path}
            </li>
          </ul>
        </div>
      </div>
       <ShoppingTable/>
    </div>
  )
}

export default ShopTable
