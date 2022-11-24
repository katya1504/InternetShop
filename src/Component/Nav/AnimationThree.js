import React from "react";
import { gsap } from 'gsap';


const { useEffect, useRef } = React;

function AnimationThree(){
    const boxRef = useRef();

useEffect(() => {
    gsap.to(boxRef.current, {
        y: -600,
        delay: 2,
        duration: 3
    })
})    

    return(
<div ref={boxRef}>
<p className="AnimationText">Помощь в подборе декора к интерьеру БЕСПЛАТНО!</p>
</div>
    )
}


export default AnimationThree;