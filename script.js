function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        let resultText = '';

        if (bmi < 18.5) {
            resultText = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText = `Your BMI is ${bmi.toFixed(2)}. You have a normal weight.`;
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
        } else {
            resultText = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
        }

        document.getElementById('result').textContent = resultText;
    } else {
        document.getElementById('result').textContent = "Please enter valid weight and height!";
    }
}
