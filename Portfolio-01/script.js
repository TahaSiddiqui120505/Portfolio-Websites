function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    //creatre two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");

    //parent and child both set their respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    //span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    //elem replaces its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
});
}

revealToSpan();

var tl = gsap.timeline();

tl
    .from(".child span",{
        x: 100,
        delay: 1,
        duration: 1,
        ease: Circ.easeInOut
    })

    .to(".parent .chlild",{
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut
})