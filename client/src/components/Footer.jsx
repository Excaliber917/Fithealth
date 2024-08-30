import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700  text-white border-t border-t-teal-200 dark:border-t-gray-700 p-4 transition-colors duration-300">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 dark:hover:text-gray-300"
                    >
                        <FaFacebookF className="h-6 w-6" />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 dark:hover:text-gray-300"
                    >
                        <FaTwitter className="h-6 w-6" />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 dark:hover:text-gray-300"
                    >
                        <FaInstagram className="h-6 w-6" />
                    </a>
                    <a
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 dark:hover:text-gray-300"
                    >
                        <FaYoutube className="h-6 w-6" />
                    </a>
                </div>

                {/* Copyright Notice */}
                <div className="md:mt-0 text-sm text-white dark:text-pink-600">
                    ©FitHealth. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
