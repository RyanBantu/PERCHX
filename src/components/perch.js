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
        <div className="main"> GOPERCH</div>
        
        <div  className="submain">  YOUR PASSPORT TO MODERN PROBLEMS</div>
        <div><a id="backtotop" href="#homePage">
            Back to top!
        </a></div>
        </div>

        
    )
}
export default Home;