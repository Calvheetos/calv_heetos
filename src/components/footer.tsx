import { Link } from "react-router-dom";
import { IsProjectsRoute } from "../functions/isProject";

export function Footer() {

  return (
    <footer className={`${IsProjectsRoute() ? "bg-black" : " bg-white"}  h-auto px-6 py-4 flex justify-between absolute bottom-0 left-0 w-full items-end overflow-hidden`}>
      <div className={`grid grid-cols-3 gap-x-3 gap-y-1 ${IsProjectsRoute() ? "text-white" : " text-black"}`}>
        <a href="">Calv_Heetos</a>
        <a href="">Email</a>
        <a href="">Linkedin</a>
        <a href="">Graphic Designer</a>
        <a href="">Instagram</a>
        <a href="">Behance</a>
      </div>
      <div className="flex flex-col items-end justify-end gap-3">
        {IsProjectsRoute() ? null : <Link to={`/projects`}>Check out to what I’ve done!!</Link>}
        <Link to="" className={`aspect-square ${IsProjectsRoute() ? "bg-white" : " bg-black"} h-12 w-12`}></Link>
      </div>

    </footer>
  );
}

