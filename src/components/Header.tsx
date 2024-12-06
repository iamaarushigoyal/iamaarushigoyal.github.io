import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">
            AG
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Experience</a>
            <a href="#education" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Education</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
            <a href="#experience" className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Experience</a>
            <a href="#education" className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Education</a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;