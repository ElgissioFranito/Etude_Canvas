
let canvas = document.querySelector("canvas");
canvas.style.backgroundColor = "white";
canvas.height = 480;
canvas.width = 720;
canvas.style.border = "1px solid black";
canvas.style.margin = "50px 300px";

let c = canvas.getContext("2d");

// dessiner un rectangle
c.beginPath();
c.rect(200,200,40,50);
c.fill();

// dessiner un arc
c.beginPath();
c.arc(300,200,50,0,Math.PI*0.5);
c.fill();

// dessiner un rond
c.beginPath();
c.arc(500,200,40,0,Math.PI * 2);
c.stroke();

// dessiner des lignes
c.beginPath();
c.moveTo(10,10);
c.lineTo(10,100);
c.lineTo(250,400);
c.lineTo(420,200);
c.closePath();              // pour revenir a la point initial (10,10)
c.stroke()

console.log("mama");


function animate() {
    requestAnimationFrame(animate);
    console.log("fafa");
}

animate();

