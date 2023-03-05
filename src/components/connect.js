import React from "react";
import "./connect.css"




const Star = () => {
    return (
        <span>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.375086 15.3603C0.275079 15.3345 0.275079 15.1924 0.375085 15.1666L9.27709 12.8686C11.0385 12.4139 12.4139 11.0385 12.8686 9.27709L15.1666 0.37509C15.1924 0.275083 15.3345 0.275082 15.3603 0.37509L17.6583 9.27709C18.113 11.0385 19.4884 12.4139 21.2498 12.8686L30.1518 15.1666C30.2518 15.1924 30.2518 15.3345 30.1518 15.3603L21.2498 17.6583C19.4884 18.113 18.113 19.4884 17.6583 21.2498L15.3603 30.1518C15.3345 30.2518 15.1924 30.2518 15.1666 30.1518L12.8686 21.2498C12.4139 19.4884 11.0385 18.113 9.27709 17.6583L0.375086 15.3603Z" fill="#F4AD21"/>
            </svg>
        </span>
        
    )
}

const Connect = () => {
    return (


        <div id="connectPage" className="connect">
            
            <div className="con1">
             CONNECT WITH US
            </div>

            <div className="con2">
            <div className="con3">
            <div className="contab">
                  looking forward to working with us ?
            </div>
            
            <div className="poc1">
             BE THE FIRST TO EXPERIENCE THE FUTURE OF PARKING
            </div>
            < div className="poc2">
            WE WOULD LOVE TO HEAR FROM YOU.
            </div>
            


            </div >
            <div className="max">
            <div className="hello">

                connect
            </div>
            
                <p className="yellow"> Email</p>
                <div className="mini">
                    official@goperch.in
                </div>
                
                <p className="yellow"> instagram</p>
                <div className="mini">
                  <a className= " insta" href="https://www.instagram.com/goperch.in/"> @goperch.in </a>
                </div>

                <p className="yellow"> contact no:</p>
                <div className="mini">
                    +95153399412
                </div>

            </div>
            


            </div>

 



        </div>



    )
}
export default Connect;