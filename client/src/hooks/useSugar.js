export const useSugar = (ppbs_bloodSugar, fbs_bloodSugar, age) => {
    // Check if both values are NaN or negative
    if (
        (isNaN(ppbs_bloodSugar) || ppbs_bloodSugar < 0) &&
        (isNaN(fbs_bloodSugar) || fbs_bloodSugar < 0)
    ) {
        return 'no result';
    }

    // Define thresholds based on age
    let fastingLowLimit, fastingNormalUpperLimit, fastingPrediabeticUpperLimit;
    let postprandialNormalUpperLimit, postprandialPrediabeticUpperLimit;

    if (age >= 18) {
        // Adults
        fastingLowLimit = 70;
        fastingNormalUpperLimit = 100;
        fastingPrediabeticUpperLimit = 126;
        postprandialNormalUpperLimit = 140;
        postprandialPrediabeticUpperLimit = 200;
    } else {
        // Children and Adolescents
        fastingLowLimit = 70;
        fastingNormalUpperLimit = 100;
        fastingPrediabeticUpperLimit = 120; // Adjusted for younger individuals
        postprandialNormalUpperLimit = 150; // Slightly higher threshold for children
        postprandialPrediabeticUpperLimit = 220; // Slightly higher threshold for children
    }

    // Evaluate based on FBS if provided
    if (fbs_bloodSugar !== undefined && fbs_bloodSugar >= 0) {
        if (fbs_bloodSugar < fastingLowLimit) {
            return 'Low Blood Sugar (Fasting)';
        } else if (fbs_bloodSugar >= fastingLowLimit && fbs_bloodSugar < fastingNormalUpperLimit) {
            return 'Normal Blood Sugar (Fasting)';
        } else if (fbs_bloodSugar >= fastingNormalUpperLimit && fbs_bloodSugar < fastingPrediabeticUpperLimit) {
            return 'Prediabetic (Fasting)';
        } else {
            return 'Diabetic (Fasting)';
        }
    }

    // Evaluate based on PPBS if provided
    if (ppbs_bloodSugar !== undefined && ppbs_bloodSugar >= 0) {
        if (ppbs_bloodSugar < postprandialNormalUpperLimit) {
            return 'Normal Blood Sugar (Postprandial)';
        } else if (ppbs_bloodSugar >= postprandialNormalUpperLimit && ppbs_bloodSugar < postprandialPrediabeticUpperLimit) {
            return 'Prediabetic (Postprandial)';
        } else {
            return 'Diabetic (Postprandial)';
        }
    }

    return 'no result'; // Fallback if neither FBS nor PPBS is valid
};
