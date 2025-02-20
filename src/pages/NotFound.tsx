
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mint-50/50 via-white to-mint-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900/90">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Oops! Page not found</p>
        <a href="/" className="text-mint-600 dark:text-mint-400 hover:text-mint-700 dark:hover:text-mint-300 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
