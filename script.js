const cube = document.getElementById("cube");
var rotZ = 0;
var rotX = 0;
var rotY = 0;
document.addEventListener("keydown", (event) => {
    if (event.key == "d") {
        rotZ += 2
        rotY += 3
        cube.style.transform =`rotateZ(${rotZ}deg) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    }
    if (event.key == "a") {
        rotZ -= 2
        rotY -= 2
        cube.style.transform =`rotateZ(${rotZ}deg) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    }
})
////////////////////////////////////////////TOGLIERE L'ANIMAZIONE PER FARLO FUNZIONARE////////////////////////////////////////////////////