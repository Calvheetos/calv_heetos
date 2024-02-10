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
import foto17 from "../fotos/foto (17).png";
import foto18 from "../fotos/foto (18).png";
import foto19 from "../fotos/foto (19).png";
import foto20 from "../fotos/foto (20).png";
import foto21 from "../fotos/foto (21).png";
import foto22 from "../fotos/foto (22).png";
import foto23 from "../fotos/foto (23).png";
import foto24 from "../fotos/foto (24).png";
import foto25 from "../fotos/foto (25).png";
import foto26 from "../fotos/foto (26).png";
import foto27 from "../fotos/foto (27).png";
import foto28 from "../fotos/foto (28).png";
import foto29 from "../fotos/foto (29).png";
import foto30 from "../fotos/foto (30).png";
import foto31 from "../fotos/foto (31).png";
import foto32 from "../fotos/foto (32).png";
import foto33 from "../fotos/foto (33).png";
import foto34 from "../fotos/foto (34).png";
import foto35 from "../fotos/foto (35).png";
import foto36 from "../fotos/foto (36).png";
import foto37 from "../fotos/foto (37).png";
import foto38 from "../fotos/foto (38).png";
import foto39 from "../fotos/foto (39).png";
import foto40 from "../fotos/foto (40).png";
import foto41 from "../fotos/foto (41).png";
import foto42 from "../fotos/foto (42).png";
import foto43 from "../fotos/foto (43).png";
import foto44 from "../fotos/foto (44).png";
import foto45 from "../fotos/foto (45).png";
import foto46 from "../fotos/foto (46).png";
import foto47 from "../fotos/foto (47).png";

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
            <img src={foto17} alt="" />
            <img src={foto18} alt="" />
            <img src={foto19} alt="" />
            <img src={foto20} alt="" />
            <img src={foto21} alt="" />
            <img src={foto22} alt="" />
            <img src={foto23} alt="" />
            <img src={foto24} alt="" />
            <img src={foto25} alt="" />
            <img src={foto26} alt="" />
            <img src={foto27} alt="" />
            <img src={foto28} alt="" />
            <img src={foto29} alt="" />
            <img src={foto30} alt="" />
            <img src={foto31} alt="" />
            <img src={foto32} alt="" />
            <img src={foto33} alt="" />
            <img src={foto34} alt="" />
            <img src={foto35} alt="" />
            <img src={foto36} alt="" />
            <img src={foto37} alt="" />
            <img src={foto38} alt="" />
            <img src={foto39} alt="" />
            <img src={foto40} alt="" />
            <img src={foto41} alt="" />
            <img src={foto42} alt="" />
            <img src={foto43} alt="" />
            <img src={foto44} alt="" />
            <img src={foto45} alt="" />
            <img src={foto46} alt="" />
            <img src={foto47} alt="" />
        </div>
    )
}