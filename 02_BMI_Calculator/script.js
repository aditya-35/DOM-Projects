const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(form.height.value);
  const weight = parseInt(form.weight.value);
  const results = document.querySelector("#result");

  if (height < 0 || isNaN(height) || weight < 0 || isNaN(weight)) {
    results.textContent = "Please enter valid values";
    return;
  }
  const bmi = weight / (height / 100) ** 2;
  results.textContent = `Your BMI is ${bmi.toFixed(2)}`;
  if (bmi < 18.5) {
    results.textContent += " (Underweight)";
  } else if (bmi < 24.9) {
    results.textContent += " (Normal weight)";
  } else if (bmi < 29.9) {
    results.textContent += " (Overweight)";
  } else {
    results.textContent += " (Obesity)";
  }
  results.style.color = "black";
  results.style.fontSize = "1rem";
  results.style.fontWeight = "bold";
  results.style.textAlign = "center";
  results.style.padding = "10px";
  results.style.border = "2px solid black";
  results.style.borderRadius = "10px";
  results.style.backgroundColor = "lightyellow";
  results.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  results.style.transition = "all 0.3s ease";
  results.style.transform = "scale(1.05)";
  setTimeout(() => {
    results.style.transform = "scale(1)";
  }, 300);
  results.style.opacity = "0";
  setTimeout(() => {
    results.style.opacity = "1";
  }, 300);
  results.style.transition = "opacity 0.5s ease";
  results.style.transform = "scale(1)";
  setTimeout(() => {
    results.style.transform = "scale(1.05)";
  }, 300);
  results.style.opacity = "1";
  results.style.transition = "opacity 0.5s ease";
  results.style.transform = "scale(1)";
  results.style.opacity = "1";
  results.style.transition = "opacity 0.5s ease";
  results.style.transform = "scale(1.05)";
});


