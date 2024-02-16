import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navBar";
import tri from '../assets/tri.png'


export function Projects() {
    const gridItems = Array.from({ length: 45 }, (_, index) => {
        if ((index % 7 && index % 9.5 && index % 8) || index === 0) {
            return (
                <Link key={index + 1} to=""
                    className="aspect-square w-full relative p-1 bg-white flex flex-col items-start justify-between ">
                    <p>ROOTKey {index}</p>
                    <p>BB </p>
                    <p>05 | 2021 </p>
                </Link >
            )
        } else {
            return (
                <div key={index + 1}
                    className={`aspect-square w-full relative cursor-progress bg-white flex flex-col items-start justify-between 
                ${index % 9.5 ? null : `rounded-[50%] ${index !== 0 ? "bg-[#0500ff]" : null}`}
                ${index % 7 ? null : "bg-transparent "}
                ${index % 8 ? null : "bg-transparent"}
                
                `}
                >
                    {index % 7 ? null : <img src={tri} alt="" className="h-full absolute top-0 left-0" />}
                </div>
            )
        }
    });

    return (
        <div className='mt-16 w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto bg-black'>
            <NavBar />
            <div />
            <div className="grid sm:grid-cols-6 md:grid-cols-11  gap-4 w-full h-auto  p-6">
                <Link key={1} to="/projects/map" className=" p-1 aspect-square w-full bg-red-600 flex flex-col items-start justify-between">
                    <p>THE MAP IS NOT THE TERRITORY</p>
                    <p>ESAD </p>
                    <p>02 | 2024 </p>
                </Link>
                {gridItems}
            </div>
            <Footer />
        </div>
    );
}

