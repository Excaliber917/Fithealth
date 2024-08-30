import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { FaEdit, FaSave, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useUpdateUser } from '../hooks/useUpdateUser';
import NProgress from 'nprogress';

function Profile() {
  const { user } = useAuthContext();

  const [isEditing, setIsEditing] = useState(false);
  const { loading, updateUser } = useUpdateUser();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    username: user?.username || '',
    password: '',
    email: user?.email || '',
    gender: user?.gender || '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    toggleEditMode();
    updateUser(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Configure NProgress for a slower progress bar
  NProgress.configure({
    showSpinner: false,
    speed: 800,       // Slower animation speed
    trickleSpeed: 200 // Slower trickling speed
  });

  useEffect(() => {
    if (loading) {

      NProgress.start(); // Start the loading bar when loading is true
    } else {
      NProgress.done(); // Complete the loading bar when loading is false
    }
  }, [loading]);
  console.log(loading)
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex items-center justify-center p-8">
      <div className="backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-gray-800/50 shadow-lg rounded-lg flex flex-col justify-center p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100">Profile</h2>

        <div className="flex justify-center mb-6">
          <img
            src={user?.profilePic || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-pink-400"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
            />
          ) : (
            <p className="text-gray-900 dark:text-gray-200">{user?.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Username:</label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
            />
          ) : (
            <p className="text-gray-900 dark:text-gray-200">@{user?.username}</p>
          )}
        </div>

        <div className="mb-4 relative">
          <label className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Password:</label>
          {isEditing ? (
            <div className="flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 text-gray-600 dark:text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          ) : (
            <p className="text-gray-900 dark:text-gray-200">********</p>
          )}
        </div>

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
            />
          ) : (
            <p className="text-gray-900 dark:text-gray-200">{user?.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Gender:</label>
          {isEditing ? (
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-transparent rounded-lg bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <p className="text-gray-900 dark:text-gray-200 capitalize">{user?.gender}</p>
          )}
        </div>

        <button
          onClick={isEditing ? handleSave : toggleEditMode}
          className={`p-3 mt-4 rounded-lg text-white font-bold transition duration-300 transform hover:scale-105 ${isEditing ? 'bg-green-500 hover:bg-green-700' : 'bg-pink-500 hover:bg-pink-700'
            }`}
        >
          {isEditing ? <><FaSave className="inline mr-2" />Save</> : <><FaEdit className="inline mr-2" />Edit Profile</>}
        </button>
      </div>
    </div>
  );
}

export default Profile;
