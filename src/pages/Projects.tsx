import { Footer } from "../components/footer";
import { NavBar } from "../components/navBar";

export function Projects() {
    const gridItems = Array.from({ length: 55 }, (_, index) => (
        <a key={index} href="" className="grid grid-cols-3 pb-3 border-b-2 border-white text-white">
            <p>ROOTKey {index} (Nome)</p>
            <p className="text-center">BB (Empresa)</p>
            <p className="text-end">05|2021 (Mês|Ano)</p>
        </a>
    ));

    return (
        <div className='mt-16 w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto bg-black'>
            <NavBar />
            <div />
            <div className="px-12 py-3 flex flex-col gap-3 w-[50%] h-full">
                {gridItems}
            </div>
            <Footer />
        </div>
    );
}

