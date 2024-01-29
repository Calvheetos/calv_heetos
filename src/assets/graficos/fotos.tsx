import foto1 from "../fotos/foto (1).png";
import foto2 from "../fotos/foto (2).png";
import foto3 from "../fotos/foto (3).png";
import foto4 from "../fotos/foto (4).png";
import foto5 from "../fotos/foto (5).png";
import foto6 from "../fotos/foto (6).png";
import foto7 from "../fotos/foto (7).png";
import foto8 from "../fotos/foto (8).png";
import foto9 from "../fotos/foto (9).png";
import foto10 from "../fotos/foto (10).png";
import foto11 from "../fotos/foto (11).png";
import foto12 from "../fotos/foto (12).png";
import foto13 from "../fotos/foto (13).png";
import foto14 from "../fotos/foto (14).png";
import foto15 from "../fotos/foto (15).png";
import foto16 from "../fotos/foto (16).png";


export function Fotos(view: number, setView: any) {

    return (
        <div className={`fotos ${view !== 0 ? `_${view}` : null}`}>
            <div className="btns">
                <button onClick={() => { setView(1) }}>Visão 0.1</button>
                <button onClick={() => { setView(2) }}>Visão 0.2</button>
                <button onClick={() => { setView(3) }}>Visão 0.3</button>
            </div>
            <img src={foto1} alt="" />
            <img src={foto2} alt="" />
            <img src={foto3} alt="" />
            <img src={foto4} alt="" />
            <img src={foto5} alt="" />
            <img src={foto6} alt="" />
            <img src={foto7} alt="" />
            <img src={foto8} alt="" />
            <img src={foto9} alt="" />
            <img src={foto10} alt="" />
            <img src={foto11} alt="" />
            <img src={foto12} alt="" />
            <img src={foto13} alt="" />
            <img src={foto14} alt="" />
            <img src={foto15} alt="" />
            <img src={foto16} alt="" />
        </div>
    )
}