import React from "react";

import { Outlet } from "react-router-dom";
import { Main } from "../styles/Container";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default Layout;
