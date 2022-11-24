import React from "react";
import { gsap } from 'gsap';


const { useEffect, useRef } = React;

function AnimationTwo(){
    const boxRef = useRef();

useEffect(() => {
    gsap.to(boxRef.current, {
        y: -200,
        delay: 2,
        duration: 3
    })
})    

    return(
<div ref={boxRef}>
<p className="AnimationText">Скидка ко дню Рождения 5%</p>
</div>
    )
}


export default AnimationTwo;