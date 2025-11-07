import LoginForm from "../Components/LoginForm"
import Navbar from "../Components/Navbar"

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center flex-col">
      <Navbar/>
      <LoginForm/>
    </div>
  )
}

export default Login
