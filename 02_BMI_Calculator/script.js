const form = document.querySelector('form');
// const heading = document.querySelector("h1");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(form.height.value);
  const weight = parseInt(form.weight.value);
  const results = document.querySelector("#result");

  if(height < 0 || isNaN(height) || weight < 0 || isNaN(weight)){
    results.textContent = "Please enter valid values";
    return;
  }
  const bmi = weight / (height / 100) ** 2;
  
  results.textContent = `Your BMI is ${bmi.toFixed(2)}`;
});
