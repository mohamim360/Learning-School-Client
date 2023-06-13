import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/NavBer";
import NavBer from "../Pages/Shared/NavBer";


const Main = () => {
  return (
    <div>
      <NavBer></NavBer>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;