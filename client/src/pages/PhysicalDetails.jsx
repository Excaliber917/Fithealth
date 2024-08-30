/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { useBmiCalcualtor } from '../hooks/useBmiCalculator';
import { useHemoglobinStatus } from '../hooks/useHemoglobinStatus';
import { useBloodPressure } from '../hooks/useBloodPressureStatus';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { useSugar } from '../hooks/useSugar';

function PhysicalDetails() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        hemoglobin: '',
        sys_bloodPressure: '',
        dia_bloodPressure: '',
        ppbs_bloodSugar: '',
        fbs_bloodSugar: '',

    });

    const { user } = useAuthContext();
    const [results, setResults] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, age, height, gender, weight, hemoglobin, sys_bloodPressure, dia_bloodPressure, ppbs_bloodSugar, fbs_bloodSugar } = formData;

        if (!name || !age || !height || !weight) {
            toast.error("Name , Age , Height and Weight are required");
            setResults(null);
            return;
        }

        if (!user) {
            const hasSubmitted = localStorage.getItem('hasSubmitted');
            if (hasSubmitted) {
                toast.error("Please log in or sign up to use the form again.");
                return;
            } else {
                localStorage.setItem('hasSubmitted', 'true');
            }
        }

        // Convert input values to numbers

        const numericAge = parseFloat(age);
        const numericHeight = parseFloat(height);
        const numericWeight = parseFloat(weight);
        const numericHemoglobin = parseFloat(hemoglobin);
        const numericSysBP = parseFloat(sys_bloodPressure);
        const numericDiaBP = parseFloat(dia_bloodPressure);
        const numericPPBS = parseFloat(ppbs_bloodSugar);
        const numericFBS = parseFloat(fbs_bloodSugar);



        // Calculate results
        let bmi = useBmiCalcualtor(numericHeight, numericWeight);
        let hemoglobinStatus = useHemoglobinStatus(numericHemoglobin, numericAge, gender);
        let bloodPressureStatus = useBloodPressure(numericSysBP, numericDiaBP);
        let bloodSugarStatus = useSugar(numericPPBS, numericFBS, numericAge);

        // Set results
        setResults({
            bmi: bmi,
            hemoglobinStatus,
            bloodPressureStatus,
            bloodSugarStatus
        });
    };


    // console.log(formData)




    return (
        <>
            <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 min-h-screen flex items-center justify-center px-8 py-4">
                <div className="backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-gray-800/50 shadow-lg rounded-lg p-8 w-full max-w-4xl">
                    <h2 className="text-3xl font-extrabold text-slate-600 dark:text-gray-100 text-center mb-6">Physical Details</h2>

                    <form onSubmit={handleSubmit} className="md:grid md:grid-cols-2 md:gap-4">
                        {/* Left Column */}
                        <div className="md:col-span-1">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData?.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="age" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Age</label>
                                <input
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formData?.age}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                    placeholder="Enter your age"
                                />
                            </div>

                            <div>
                                <label htmlFor="gender" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Gender</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData?.gender}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                >
                                    <option value="">Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="height" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Height (cm)</label>
                                <input
                                    type="number"
                                    id="height"
                                    name="height"
                                    value={formData?.height}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                    placeholder="Enter your height in cm"
                                />
                            </div>

                            <div>
                                <label htmlFor="weight" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Weight (kg)</label>
                                <input
                                    type="number"
                                    id="weight"
                                    name="weight"
                                    value={formData?.weight}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                    placeholder="Enter your weight in kg"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-1">
                            <div>
                                <label htmlFor="hemoglobin" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Hemoglobin (g/dL)</label>
                                <input
                                    type="number"
                                    id="hemoglobin"
                                    name="hemoglobin"
                                    value={formData?.hemoglobin}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                    placeholder="Enter your hemoglobin level"
                                />
                            </div>

                            <div>
                                <label htmlFor="dia_bloodPressure" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Diastolic Blood Pressure (mmHg)</label>
                                <input
                                    type="number"
                                    id="dia_bloodPressure"
                                    name="dia_bloodPressure"
                                    value={formData?.dia_bloodPressure}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                    placeholder="Enter your diastolic blood pressure"
                                />
                            </div>

                            <div>
                                <label htmlFor="sys_bloodPressure" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Systolic Blood Pressure (mmHg)</label>
                                <input
                                    type="number"
                                    id="sys_bloodPressure"
                                    name="sys_bloodPressure"
                                    value={formData?.sys_bloodPressure}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                    placeholder="Enter your systolic blood pressure"
                                />
                            </div>

                            <div>
                                <label htmlFor="ppbs_bloodSugar" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Postprandial Blood Sugar (mg/dL)</label>
                                <input
                                    type="number"
                                    id="ppbs_bloodSugar"
                                    name="ppbs_bloodSugar"
                                    value={formData?.ppbs_bloodSugar}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                    placeholder="Enter your blood sugar level"
                                />
                            </div>

                            <div>
                                <label htmlFor="fbs_bloodSugar" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Fasting Blood Sugar (mg/dL)</label>
                                <input
                                    type="number"
                                    id="fbs_bloodSugar"
                                    name="fbs_bloodSugar"
                                    value={formData?.fbs_bloodSugar}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                                    placeholder="Enter your blood sugar level"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-full mt-6">
                            <button
                                type="submit"
                                className="w-full bg-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-300 transform hover:scale-105"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* Results */}
                    {results && (
                        <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Results</h3>
                            <p className="text-gray-700 dark:text-gray-300">BMI: {results.bmi}</p>
                            <p className="text-gray-700 dark:text-gray-300">Hemoglobin Status: {results.hemoglobinStatus}</p>
                            <p className="text-gray-700 dark:text-gray-300">Blood Pressure Status: {results.bloodPressureStatus}</p>
                            <p className="text-gray-700 dark:text-gray-300">Blood Sugar Status: {results.bloodSugarStatus}</p>
                        </div>
                    )}
                </div>
            </div>


        </>
    );
}

export default PhysicalDetails;
