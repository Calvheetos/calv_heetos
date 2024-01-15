import { useEffect, useState } from "react";
import { IsProjectsRoute } from "../functions/isProject";
import { Link } from "react-router-dom";

export function NavBar() {

    const [currentDate, setCurrentDate] = useState<string>('');

    useEffect(() => {
      const intervalId = setInterval(() => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        setCurrentDate(formattedDate);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);

    return (
        <nav className={`h-16 px-6 py-4 flex justify-between absolute top-0 left-0 w-full overflow-hidden ${IsProjectsRoute() ? "bg-black" : " bg-white"}`}>
            <div className={`flex gap-5 ${IsProjectsRoute() ? "text-white" : " text-black"}`}>
                <Link to={`/`}>About</Link>
                <Link to={`/projects`}>Projects</Link>
            </div>
            <p className={`${IsProjectsRoute() ? "text-white" : " text-black"}`}>{currentDate}</p>
        </nav>
    );
}

