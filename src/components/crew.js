import React from "react";
import "./crew.css"
import bantu from "./twitterdp.jpg"
import jk from "./jatin.jpg"
import chunduri from "./sreya.jpg"

import abid from "./abid.jpg"
import uttam from "./uttam.png"

const Crew = () => {
    return (


        <div className="crew">

            <div className="bark">

                <div className="c">
                    <div className="c1">
                        THE CREW
                    </div>

                    <div className="c2">
                        
                        <a href="#connectPage">
                            <button className="contact"> CONTACT US !</button>
                        </a>

                    </div>

                </div>

                <div className="c4">

                    <div className="c3">

                        <div className="reb">
                            <img className="pics" alt="map" src={bantu} />
                            <div className="r"> Ryan Bantu</div>
                            <div className="r1">FOUNDER & CEO</div>
                        </div>
                        <div className="jatin">
                            <img className="pics" alt="map" src={jk} />
                            <div className="j"> Jatin Krishna</div>
                            <div className="j1"> FOUNDER & CTO</div>
                        </div>

                        <div className="sreya">

                            <img className="pics" alt="map" src={chunduri} />
                            <div className="s">Sreya Chunduri</div>
                            <div className="s1"> CIO </div>
                            <div className="s2"> UI/UX designer </div>
                        </div>

                    </div>
                    <div className="c3">

                        <div className="reb">
                            <img className="pics" alt="map" src={abid} />
                            <div className="r"> Abid Kapdi</div>
                            <div className="r1">COO</div>
                        </div>
                        <div className="jatin">
                            <img className="pics" alt="map" src={uttam} />
                            <div className="j"> Uttam Varma</div>
                            <div className="j1"> Technical Head</div>
                        </div>


                    </div>

                </div>



            </div>
        </div>



    )
}
export default Crew;