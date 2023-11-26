function calculateBMI(
  height: number,
  weight: number,
  age: number,
  gender: string
): number {
  let bmi = weight / (height * height);

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

  return bmi;
}

export default calculateBMI;
