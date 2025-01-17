import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
