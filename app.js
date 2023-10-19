// Changes opacity on 'about-me' image on hover
    //Sets the event target
    let animationTarget = document.getElementById('about-image');
    //Sets the event handler function when mouse hovers in
    let animationFunctionIn = () => event.target.style.opacity = 0.5;
    //Sets the event handler function when mouse hovers out
    let animationFunctionOut = () => event.target.style.opacity = '';
    //Sets the event listener - Mouse In
    animationTarget.addEventListener('mouseenter', animationFunctionIn);
    //Sets the event listener - Mouse Out
    animationTarget.addEventListener('mouseleave', animationFunctionOut);

// Changes opacity on 'work' images on hover
    //Sets the event target
    let animationTarget2 = document.getElementsByClassName('work-image');
    const arr = Array.from(animationTarget2);
    //Sets the event listener - Mouse In
    arr.forEach(element => {
        element.addEventListener('mouseenter', animationFunctionIn);
    });
    //Sets the event listener - Mouse Out
    arr.forEach(element => {
        element.addEventListener('mouseleave', animationFunctionOut);
    });