import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { useTheme } from '@/hooks/use-theme';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-olym3-gray-dark/90 backdrop-blur-md shadow-sm' : 'bg-white/90 dark:bg-olym3-gray-dark/90 backdrop-blur-md'
    } border-b border-gray-100 dark:border-gray-700`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="https://lh3.googleusercontent.com/a/ACg8ocLUnrUWHbTX61LIFg6cpQ4vSS2hnNEl6cG19HJWxYw8NIQJWX0=s288-c-no" 
              alt="OLYM3 Logo" 
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-xl font-bold text-olym3-blue">OLYM3</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-olym3-gray dark:text-gray-300 hover:text-olym3-blue dark:hover:text-olym3-blue transition-colors"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('consensus')}
              className="text-olym3-gray dark:text-gray-300 hover:text-olym3-blue dark:hover:text-olym3-blue transition-colors"
            >
              {t('nav.consensus')}
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-olym3-gray dark:text-gray-300 hover:text-olym3-blue dark:hover:text-olym3-blue transition-colors"
            >
              {t('nav.roadmap')}
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-olym3-gray dark:text-gray-300 hover:text-olym3-blue dark:hover:text-olym3-blue transition-colors"
            >
              {t('nav.team')}
            </button>
            <button 
              onClick={() => scrollToSection('ecosystem')}
              className="text-olym3-gray dark:text-gray-300 hover:text-olym3-blue dark:hover:text-olym3-blue transition-colors"
            >
              {t('nav.ecosystem')}
            </button>
          </div>

          {/* Theme Toggle, Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className="p-2 bg-white dark:bg-olym3-gray-dark border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? 
                <Moon className="w-4 h-4 text-olym3-gray-dark dark:text-white" /> : 
                <Sun className="w-4 h-4 text-olym3-amber" />
              }
            </Button>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="bg-olym3-blue text-white border-olym3-blue hover:bg-olym3-blue-dark hover:border-olym3-blue-dark"
            >
              {language.toUpperCase()}
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-olym3-gray-dark dark:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-olym3-gray-dark border-t border-gray-100 dark:border-gray-700">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-olym3-gray dark:text-gray-300 hover:text-olym3-blue"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('consensus')}
              className="block w-full text-left px-3 py-2 text-olym3-gray dark:text-gray-300 hover:text-olym3-blue"
            >
              {t('nav.consensus')}
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="block w-full text-left px-3 py-2 text-olym3-gray dark:text-gray-300 hover:text-olym3-blue"
            >
              {t('nav.roadmap')}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left px-3 py-2 text-olym3-gray dark:text-gray-300 hover:text-olym3-blue"
            >
              {t('nav.team')}
            </button>
            <button
              onClick={() => scrollToSection('ecosystem')}
              className="block w-full text-left px-3 py-2 text-olym3-gray dark:text-gray-300 hover:text-olym3-blue"
            >
              {t('nav.ecosystem')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
