export const useHemoglobinStatus = (hemoglobin, age, gender) => {
    if (isNaN(hemoglobin) || hemoglobin < 0) {
        return 'no result';
    }
    let lowerLimit, upperLimit;
    // Define hemoglobin reference ranges based on age and gender
    if (gender === 'male') {
        if (age >= 18) {
            // Adult males
            lowerLimit = 13.5;
            upperLimit = 17.5;
        } else if (age >= 12 && age < 18) {
            // Adolescent males
            lowerLimit = 12.5;
            upperLimit = 16.1;
        } else {
            // Children
            lowerLimit = 11.0;
            upperLimit = 14.5;
        }
    } else if (gender === 'female') {
        if (age >= 18) {
            // Adult females
            lowerLimit = 12.0;
            upperLimit = 15.5;
        } else if (age >= 12 && age < 18) {
            // Adolescent females
            lowerLimit = 12.0;
            upperLimit = 15.0;
        } else {
            // Children
            lowerLimit = 11.0;
            upperLimit = 14.5;
        }
    } else {
        // For other genders or unspecified, use a general range
        if (age >= 18) {
            lowerLimit = 12.0;
            upperLimit = 17.5;
        } else {
            lowerLimit = 11.0;
            upperLimit = 14.5;
        }
    }

    // Determine hemoglobin status
    if (hemoglobin < lowerLimit) {
        return 'Low Hemoglobin';
    } else if (hemoglobin > upperLimit) {
        return 'High Hemoglobin';
    } else {
        return 'Normal Hemoglobin';
    }
};
