import React from "react";
import "./crew.css"
import bantu from "./twitterdp.jpg"
import jk from "./jatin.jpg"
import chunduri from "./sreya.jpg"


const Crew = () => {
    return (


        <div className="crew">

        <div className="bark">

             <div className="c">
                <div className="c1">
                    THE CREW
                </div>

                <div className="c2">
                    WANT TO JOIN OUR TEAM?
                    <a href="#connectPage">
                    <button className="contact"> CONTACT US !</button>
                    </a>

                </div>
                
             </div>

            

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
                <div className="s1"> UI/UX DESIGNER </div>
                <div className="s2"> Content Head </div>
               </div>

               </div>

               



        </div>
        </div>



    )
}
export default Crew;