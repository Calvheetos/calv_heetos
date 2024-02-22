import poster1 from "../img/poster (1).png";
import poster2 from "../img/poster (2).png";
import poster3 from "../img/poster (3).png";
import poster4 from "../img/poster (4).png";
import poster5 from "../img/poster (5).png";
import poster6 from "../img/poster (6).png";
import poster7 from "../img/poster (7).png";
import poster8 from "../img/poster (8).png";
import poster9 from "../img/poster (9).png";
import poster10 from "../img/poster (10).png";
import poster11 from "../img/poster (11).png";
import poster12 from "../img/poster (12).png";
import poster13 from "../img/poster (13).png";
import poster14 from "../img/poster (14).png";
import poster15 from "../img/poster (15).png";
import poster16 from "../img/poster (16).png";
import poster17 from "../img/poster (17).png";
import poster18 from "../img/poster (18).png";
import poster19 from "../img/poster (19).png";
import poster20 from "../img/poster (20).png";
import poster21 from "../img/poster (21).png";
import poster22 from "../img/poster (22).png";
import poster23 from "../img/poster (23).png";
import poster24 from "../img/poster (24).png";
import poster25 from "../img/poster (25).png";
import poster26 from "../img/poster (26).png";
import poster27 from "../img/poster (27).png";
import poster28 from "../img/poster (28).png";
import poster29 from "../img/poster (29).png";
import poster30 from "../img/poster (30).png";
import poster31 from "../img/poster (31).png";
import poster32 from "../img/poster (32).png";
import poster33 from "../img/poster (33).png";
import poster34 from "../img/poster (34).png";


export function Posters(view: number, setView: any) {

    return (
        <div className={`posters ${view !== 0 ? `_${view || "_1"}` : null}`}>
            <div className="btns">
                <button onClick={() => { setView(1) }}>Visão 0.1</button>
                <button onClick={() => { setView(2) }}>Visão 0.2</button>
                <button onClick={() => { setView(3) }}>Visão 0.3</button>
            </div>
            <img src={poster1} alt="" />
            <img src={poster2} alt="" />
            <img src={poster3} alt="" />
            <img src={poster4} alt="" />
            <img src={poster5} alt="" />
            <img src={poster6} alt="" />
            <img src={poster7} alt="" />
            <img src={poster8} alt="" />
            <img src={poster9} alt="" />
            <img src={poster10} alt="" />
            <img src={poster11} alt="" />
            <img src={poster12} alt="" />
            <img src={poster13} alt="" />
            <img src={poster14} alt="" />
            <img src={poster15} alt="" />
            <img src={poster16} alt="" />
            <img src={poster17} alt="" />
            <img src={poster18} alt="" />
            <img src={poster19} alt="" />
            <img src={poster20} alt="" />
            <img src={poster21} alt="" />
            <img src={poster22} alt="" />
            <img src={poster23} alt="" />
            <img src={poster24} alt="" />
            <img src={poster25} alt="" />
            <img src={poster26} alt="" />
            <img src={poster27} alt="" />
            <img src={poster28} alt="" />
            <img src={poster29} alt="" />
            <img src={poster30} alt="" />
            <img src={poster31} alt="" />
            <img src={poster32} alt="" />
            <img src={poster33} alt="" />
            <img src={poster34} alt="" />
        </div>
    )
}