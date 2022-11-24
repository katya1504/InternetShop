import React from "react";
import { gsap } from 'gsap';


const { useEffect, useRef } = React;

function AnimationContact(){
    const boxRef = useRef();

useEffect(() => {
    gsap.to(boxRef.current, {
        x: 700,
        delay: 2,
        duration: 8
    })
})    

    return(
<div ref={boxRef}>
<p className="AnimationContact">Адрес: ул.Советская 66, тел. 8-023-493 837 74 </p>
</div>
    )
}


export default AnimationContact;