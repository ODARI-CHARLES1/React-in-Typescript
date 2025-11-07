import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
const LoginForm = () => {
  type LoginInputs = {
    email: string;
    password: string;
  };

  const schema = yup.object({
    email: yup
      .string()
      .email("Invalid Email")
      .max(50, "Max 50 Characters")
      .required("Email is Required"),
    password: yup.string().min(5, "Minimun is 8 characters").required(),
  });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    const res=axios.post("http://localhost:3000/api/users/login",{email:data.email,password:data.password})
    res.then(data=>{
      if(data.data){
        console.log(data)
      }
     else{
       console.log(data)
       localStorage.setItem("token",data.data.data.token)
     }
      })
     
    .catch(err=>console.log(err))
  };
  

  const { register, handleSubmit,formState:{errors} } = useForm<LoginInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <form method="post" 
      onSubmit={handleSubmit(onSubmit)}
      className="w-[400px] bg-amber-50 absolute top-[40%] shadow p-5 flex gap-5 items-center  flex-col"
    >
      {}
      <label className="label w-full text-start">Email</label>
      {errors.email && <p className="text-red-600 text-start text-sm">* Email Required</p>}
      <input
        {...register("email")}
        type="email"
        className="input"
        placeholder="Email"
      />

      <label className="label w-full text-start">Password</label>
      <input
        {...register("password")}
        type="password"
        className="input"
        placeholder="Password"
      />

      <button className="w-[60%] cursor-pointer bg-green-600 p-2 rounded-sm text-white ">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
