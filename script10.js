
const handleMouseMove = (e) => {
    const {clientX,clientY} = e;
    console.log({clientX,clientY});

    //0-1
    const {innerWidth, innerHeight} = window;
    const fractionX = clientX/innerWidth;
    const fractionY = clientY/innerHeight;
    console.log({fractionX,fractionY});

    const pupilX = fractionX*140-70;
    const pupilY = fractionY*140-70;
    console.log({pupilX,pupilY});

    document.querySelectorAll('.pupil')
    .forEach(el => {
        el.style.transform = `translate(${pupilX}px, ${pupilY}px)`
    })
}

window.addEventListener('mousemove',handleMouseMove);
