import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";


export default function MainLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Header + Navbar sólo para el área informativa */}
      <Header />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer igual en todo el sistema */}
      <Footer />
    </div>
  );
}
