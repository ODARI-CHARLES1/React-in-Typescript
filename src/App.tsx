import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import Login from "./Components/Login";
import ShoppingTable from "./Components/ShoppingTable";


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="/shop-list" element={<ShoppingTable/>}/>
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/register" element={<Register/>}/> */}
      </Routes>
    </div>
  );
};

export default App;
