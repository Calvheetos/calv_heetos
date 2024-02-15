import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navBar";

export function Projects() {
    const gridItems = Array.from({ length: 55 }, (_, index) => (
        <Link key={index+1} to="/projects/map" className="grid grid-cols-3 pb-3 border-b-2 border-white text-white hover:text-red-500">
            <p>ROOTKey {index} (Nome)</p>
            <p className="text-center">BB (Empresa)</p>
            <p className="text-end">05 | 2021 (Mês|Ano)</p>
        </Link>
    ));

    return (
        <div className='mt-16 w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto bg-black'>
            <NavBar />
            <div />
            <div className="grid grid-cols-3 gap-4 w-full h-full p-6">
                <Link key={1} to="/projects/map" className="grid grid-cols-3 pb-3 border-b-2 border-white text-white  hover:text-red-500">
                    <p>Projeto Mapa</p>
                    <p className="text-center">Mestrado </p>
                    <p className="text-end">02 | 2024 </p>
                </Link>
                {gridItems}
            </div>
            <Footer />
        </div>
    );
}

