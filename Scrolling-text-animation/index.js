function movingAnimation() {
    window.addEventListener('wheel', function (d) {
        let value = d.deltaY;
        if(value>0){
            gsap.to(".movetxt",{
                transform: "translateX(-60%)",
                duration:7,
                repeat:-1,
                // delay:0.4,
                ease:"none",
                // scrub:2
            })
            gsap.to(".movetxt img",{
                rotate:180,
                pin:true,
            })
        }
            else{ gsap.to(".movetxt",{
                transform: "translateX(0%)",
                duration:7,
                repeat:-1,
                // delay:0.4,
                ease:"none",
                
            })
        
        gsap.to(".movetxt img",{
                rotate:0,
                pin:true,
            })}

            
        
    })
}

movingAnimation()