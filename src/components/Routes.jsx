import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function Routes({ children }) {
  return (
    <>
      <Navbar />
      <main>{children || <Outlet />}</main>
      <Footer />
    </>
  );
}
