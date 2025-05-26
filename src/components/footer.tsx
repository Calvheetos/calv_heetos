import { Link } from "react-router-dom";
import { IsProjectsRoute } from "../functions/isProject";
import tri from '../assets/tri.png'
import triBlack from '../assets/tri_black.png'
export function Footer() {

  return (
    <footer className={`${IsProjectsRoute() ? "bg-black" : " bg-white"}  h-auto px-6 py-4 flex justify-between absolute bottom-0 left-0 w-full items-end overflow-hidden`}>
      <nav className={`grid grid-cols-3 gap-x-3 gap-y-1 ${IsProjectsRoute() ? "text-white" : " text-black"}`}>
        <a href="/calv_heetos">Calv_Heetos</a>
        <a href="mailto:">Email</a>
        <a href="">Linkedin</a>
        <p>Graphic Designer</p>
        <a href="">Instagram</a>
        <a href="">Behance</a>
      </nav>
      <nav className="flex flex-col items-end justify-end gap-3">
        {IsProjectsRoute() ? null : <Link to={`/projects`}>Check out to what I’ve done!!</Link>}
        <Link to="/projects" className={`w-12 h-12`}>
          <img src={IsProjectsRoute() ? tri : triBlack} alt="logo" />
        </Link>
      </nav>
    </footer>
  );
}

