function breakText(){
    let h1 = document.querySelector("h1")
let h1content = document.querySelector("h1").textContent

console.log(h1content)

let h = h1content.split("")
console.log(h)

let i = h.length / 2

let newText = ""
console.log(i)
h.forEach(function (e, id) {
    if (id < i) {
        newText += `<span class="a">${e}</span>`
    } else {
        newText += `<span class="b">${e}</span>`

    }

})


h1.innerHTML = newText
}


breakText();


gsap.from("h1 .a", {
    y: 100,
    duration: 0.6,
    delay:0.5,
    opacity:0,
    stagger:0.15
    
})

gsap.from("h1 .b", {
    y: 100,
    duration: 0.6,
    delay:0.5,
    opacity:0,
    stagger:-0.15
})

