import React from "react";
import "./perch.css"


const Home = ()=>
{
    return (


        <div id="homePage" className="home">
       <div className="NAV">
        <a href ="#homePage" className="ahome"> HOME</a>
        <a href ="#aboutPage" className="aabout"> ABOUT</a>
        <a href ="#connectPage" className="aconnect"> CONNECT</a>
        </div>
        <p className="main"> GOPERCH</p>
        <p className="submain">YOUR PASSPORT TO MODERN PROBLEMS</p>
        <a id="backtotop" href="#homePage">
            Back to top!
        </a>
        </div>

        
    )
}
export default Home;