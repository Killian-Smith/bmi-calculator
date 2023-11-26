function calculateBMI(weight, height, age, gender) {
    var bmi = weight / (height * height);
    if (age < 18) {
        if (gender === "male") {
            bmi += 1;
        }
        else {
            bmi -= 1;
        }
    }
    else if (age >= 65) {
        if (gender === "male") {
            bmi += 1;
        }
        else {
            bmi -= 1;
        }
    }
    return bmi;
}
var weight = 70; // in kilograms
var height = 1.75; // in meters
var age = 25;
var gender = "female";
var bmi = calculateBMI(weight, height, age, gender);
console.log("BMI:", bmi);
