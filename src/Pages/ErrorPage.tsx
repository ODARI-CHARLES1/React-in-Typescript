import { useNavigate } from "react-router-dom"
import axios from "axios"
const ErrorPage = () => {
    const navigate=useNavigate()
    const token=localStorage.getItem("token")
    const users= axios.get("http://localhost:3000/api/users",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    users.then(data=>console.group(data))
    .catch(err=>console.log(err))
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-4'>
      <h1 className="text-3xl text-rose-700">404 Page Not Found</h1>
      <button onClick={()=>navigate("/")} className="bg-orange-900 text-white text-xl p-2 w-40 rounded-full">Home</button>
    </div>
  )
}

export default ErrorPage
