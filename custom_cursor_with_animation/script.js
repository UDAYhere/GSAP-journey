var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image ");
var body =document.querySelector("body");


body.addEventListener("mousemove", function (dets) {

    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        // ease:"backout.out" 

    })
});

image.addEventListener("mouseenter", function () {
    cursor.innerHTML = "view more";
    gsap.to(cursor, {
        backgroundColor: "#ffffffa9",
        scale: 5
    })
});

image.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        backgroundColor: "white",
        scale: 1
    })
});