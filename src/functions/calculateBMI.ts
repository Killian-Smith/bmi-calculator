function calculateBMI(
  height: number,
  weight: number,
  age: number,
  gender: string
): { bmi: number; category: string } {
  height = height / 100;
  let bmi = weight / (height * height);
  let category = "";

  if (age < 18) {
    if (gender === "male") {
      bmi += 1;
    } else {
      bmi -= 1;
    }
  } else if (age >= 65) {
    if (gender === "male") {
      bmi += 1;
    } else {
      bmi -= 1;
    }
  }

  bmi = Math.round(bmi * 100) / 100;

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else if (bmi >= 30) {
    category = "Obesity";
  }

  return { bmi, category };
}

export default calculateBMI;
