import React from 'react'
import img1 from "./WhatsApp Image 2022-02-16 at 6.57.25 PM.jpeg"
import img2 from "./WhatsApp Image 2022-02-16 at 6.57.34 PM.jpeg"
import img3 from './WhatsApp Image 2022-02-16 at 6.57.44 PM.jpeg'


function Notes() {
    return(
        <div>
            <h3>"Q1.React Introduction 
                 Q2.React Features discussion  or  React v/s Angular v/s Vue
                 Q.3SPA
                 Q.4Virtual DOM"

            </h3><br />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
    )
    
}
export default Notes;