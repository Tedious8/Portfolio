import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function Component(): JSX.Element {
  return (
    <main className="bg-gradient-to-tl from-[#D40000] via-[#2F0B13] to-[#307260] bg-cover">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
