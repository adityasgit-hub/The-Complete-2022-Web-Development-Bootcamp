function bmiCalculator(weight, height) {
  var bmi = Math.floor(weight / (height * height));
  return bmi;
}

var bmi = bmiCalculator(64, 1.62);
console.log("BMI = " + bmi);
