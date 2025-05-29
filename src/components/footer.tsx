import { Link } from "react-router-dom";
import { IsProjectsRoute } from "../functions/isProject";
import tri from '../assets/tri.png'
import triBlack from '../assets/tri_black.png'
export function Footer() {

  return (
    <footer className={`${IsProjectsRoute() ? "bg-black" : " bg-white"}  h-auto px-6 py-4 flex justify-between w-full items-end overflow-hidden`}>
      <nav className={`grid sm:grid-cols-3 gap-x-3 gap-y-1 ${IsProjectsRoute() ? "text-white" : " text-black"}`}>
        <a href="/calv_heetos">Calv_Heetos</a>
        <a href="mailto:carlottalves@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/carlotaalves/">Linkedin</a>
        <a href="/calv_heetos" className="hidden sm:flex">Graphic Designer</a>
        <a href="https://www.instagram.com/calv_heetos">Instagram</a>
      </nav>
      <nav className="flex flex-col items-end justify-end gap-3">
        {IsProjectsRoute() ? null : <Link to={`/projects`} className="hidden sm:flex">Check out to what I’ve done!!</Link>}
        <Link to="/projects" className={`w-12 h-12`}>
          <img src={IsProjectsRoute() ? tri : triBlack} alt="logo" />
        </Link>
      </nav>
    </footer>
  );
}

