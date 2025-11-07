import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import ShoppingTable from "./Components/ShoppingTable";
import Login from "./Pages/Login";
import ProductPage from './Components/ProductPage'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="/shop-list" element={<ShoppingTable/>}/>
        <Route path="*" element={<ErrorPage />} />
        <Route path='/product' element={<ProductPage/>}/>
        {/* <Route path="/register" element={<Register/>}/> */}
      </Routes>
    </div>
  );
};

export default App;
