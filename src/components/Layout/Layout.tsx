// import Footer from "@/pages/shared/Footer";
// import Navbar from "@/pages/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <Outlet></Outlet>
    </div>
  );
};
export default MainLayout;
