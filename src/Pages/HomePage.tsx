import { useLocation } from "react-router-dom";
import Form from "../Components/form";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ShoppingItems from "../Components/ShoppingItems";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="w-full relative flex items-center gap-2 flex-col">
      <Navbar />
      <div className="absolute top-28 left-12 md:left-24">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>{location.pathname}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <Hero />
      <div className="divider"></div>
      <Form />

      <div className="divider"></div>
      <ShoppingItems />
    </div>
  );
};

export default HomePage;
