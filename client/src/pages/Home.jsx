import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import physicalImage from '../assets/physical_health_banner.jpeg'
import mentalImage from '../assets/mental_health_banner.webp'

function Home() {
  const { user } = useAuthContext();
  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700  min-h-screen transition-colors duration-300">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
            <span>Welcome</span> to{" "}
            <span className="text-white dark:text-gray-300">Your</span>{" "}
            Wellness <span className="text-pink-900 dark:text-pink-600">Journey</span>
          </h1>
          <p className="text-md md:text-2xl text-gray-700 mt-4 dark:text-gray-400">
            Explore the best practices for a healthier mind and body.
          </p>
        </section>

        {/* Card Section */}
        <section className="flex flex-col gap-2 md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-4">
          {/* Card 1 */}
          <Link
            to={user ? "/mentaldetails" : "/login"}
            className="relative w-full md:w-1/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out cursor-pointer"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Mental Health
            </h2>
            <p className="text-gray-600 mt-2 dark:text-gray-400">
              Discover ways to maintain a balanced and healthy mind.
            </p>
            <img
              src={mentalImage}
              alt="Mental Health"
              className="absolute -top-10 right-10 h-16 w-16 rounded-full border-4 border-white dark:border-gray-700"
            />
          </Link>

          {/* Card 2 */}
          <Link
            to="/physicaldetails"
            className="relative w-full md:w-1/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out cursor-pointer"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Physical Health
            </h2>
            <p className="text-gray-600 mt-2 dark:text-gray-400">
              Learn about physical activities and diet to keep your body fit.
            </p>
            <img
              src={physicalImage}
              alt="Physical Health"
              className="absolute -top-10 right-10 h-16 w-16 rounded-full border-4 border-white dark:border-gray-700"
            />
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
