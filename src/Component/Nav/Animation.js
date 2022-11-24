import React from "react";
import { gsap } from 'gsap';


const { useEffect, useRef } = React;

function Animation(){
    const boxRef = useRef();

useEffect(() => {
if (window.innerWidth <= 700){
    gsap.to(boxRef.current, {
        x: 20,
        delay: 2,
        duration: 3
    }) 
}

else if (window.innerWidth <= 1000){
    gsap.to(boxRef.current, {
        x: 80,
        delay: 2,
        duration: 3
    }) 
}

else {
    gsap.to(boxRef.current, {
        x: 400,
        delay: 2,
        duration: 3
    })}
})    

    return(
<div ref={boxRef}>
<p className="AnimationText">Скидка на мебель при заказе дизайна 10%</p>
</div>
    )
}


export default Animation;