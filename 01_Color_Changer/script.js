console.log("Hello World");
const Button = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(Button);
Button.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
    
  });
});
