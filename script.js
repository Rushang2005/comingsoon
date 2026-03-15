const text = [
"Web Developer",
"IoT Developer",
"Tech Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,120);

}

type();

const card = document.querySelector(".icard");

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = -(y - centerY) / 10;
const rotateY = (x - centerX) / 10;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform = "rotateX(0) rotateY(0)";

});



const form = document.querySelector(".contact-form");
const button = document.querySelector(".enter-btn");
const btnText = button.querySelector(".btn-text");

form.addEventListener("submit", function(e){

e.preventDefault();

button.classList.add("loading");

setTimeout(()=>{

button.classList.remove("loading");
btnText.textContent = "↵ Enter";

},3000);

});



const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", async function(e){

e.preventDefault();

const data = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value
};

await fetch("https://script.google.com/macros/s/AKfycbzEU_NOKeWRk2LhkJYWIh_8VCysYft8PQ8iTiD12HQBG1_Eqwu3PjvL5LWFdLJul2ZQ_Q/exec",{
method:"POST",
body:JSON.stringify(data)
});

alert("Message sent successfully!");

contactForm.reset();

});