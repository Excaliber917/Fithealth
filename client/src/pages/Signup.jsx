import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useSignup from '../hooks/useSignup';
import { Link } from 'react-router-dom';


function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        gender: ''
    });

    const { signup } = useSignup();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(formData);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 flex items-center justify-center p-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-8 text-slate-600 dark:text-gray-200">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-200"
                            placeholder='Enter your full name'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-200"
                            placeholder='Enter a unique username'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-200"
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className="mb-4 relative flex items-center">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-200"
                            placeholder='Set your password'
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="mb-6">
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-gray-200"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors dark:bg-pink-600 dark:hover:bg-pink-700"
                    >
                        Sign Up
                    </button>
                </form>
                <Link to="/login" className="my-2 text-slate-400 dark:text-gray-400 underline hover:text-pink-700 dark:hover:text-pink-600 block text-center">
                    Already have an account? Log In now
                </Link>
            </div>
        </div>
    );
}

export default Signup;
