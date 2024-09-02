import React, { useRef } from "react";
import "./cards.css";
import img1 from "/quebrada.jpg"
import img2 from "/salinas.jpeg"

function Tarjeta() {
    const changecard2= useRef()
    const changecard= useRef()
    const card1 = ()=>{changecard.current.style.display="block"}
    const card2 = ()=>{changecard2.current.style.display="block"}
    const card3 = ()=>{changecard.current.style.display="none"}
    const card4 = ()=>{changecard2.current.style.display="none"}

    return (
        <div className="fatherdiv">

            <div className="titlecard">
                <h1 >Quebrada</h1>
            </div>
            <div className="motherdiv">
            <div className="divcard" > <img onMouseEnter={card1} onMouseLeave={card3}  className="sizecard" src={img1} alt="" /> 
            
            <p ref={changecard} className="textcard"> Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. I llum ab autem sequi animi laboriosam 
                molestias, recusandae suscipit eos aperiam, 
                necessitatibus magni earum dolores quae, 
                nisi repellat enim facere reprehenderit odit.</p>

            </div> 

            <div className="divcard"> <img onMouseEnter={card2} onMouseLeave={card4} className="sizecard" src={img2} alt="" />
            <p ref={changecard2} className="textcard2"> Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Saepe omnis voluptatum nostrum! Tenetur 
                at magnam reprehenderit eum quo porro, est iusto dolorem 
                doloribus beatae, omnis error sed fugiat voluptatibus 
                exercitationem.</p>

            </div>

            </div>

            

        

        </div>
    )
}


export default Tarjeta

