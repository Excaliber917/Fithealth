export const useBmiCalcualtor = (height, weight) => {
    // Calculate BMI
    const heightInMeters = height / 100; // convert height from cm to meters
    const bmi = weight / (heightInMeters * heightInMeters);

    if (!bmi)
        return ""

    // Determine BMI status

    if (bmi < 18.5) {
        return `${bmi.toFixed(2)} Underweight`;
    } else if (bmi < 24.9) {
        return `${bmi.toFixed(2)} Normal weight`;
    } else if (bmi < 29.9) {
        return `${bmi.toFixed(2)} Overweight`;
    } else {
        return `${bmi.toFixed(2)} Obesity`;
    }



}