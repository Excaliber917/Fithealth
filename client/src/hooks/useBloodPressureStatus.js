export const useBloodPressure = (sys_bloodPressure, dia_bloodPressure) => {
  // Check if the values are NaN or negative
  if (
    isNaN(sys_bloodPressure) || isNaN(dia_bloodPressure) ||
    sys_bloodPressure < 0 || dia_bloodPressure < 0
  ) {
    return 'no result';
  }

  // Determine blood pressure status
  if (sys_bloodPressure < 90 || dia_bloodPressure < 60) {
    return 'Low Blood Pressure';
  } else if (sys_bloodPressure > 140 || dia_bloodPressure > 90) {
    return 'High Blood Pressure';
  } else {
    return 'Normal Blood Pressure';
  }
};
