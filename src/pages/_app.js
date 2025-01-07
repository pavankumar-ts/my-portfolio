import PopupForm from "@/components/common/PopupForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingButton from "@/components/pricing/FloatingButton";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPosition(scrollPercent);
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleThemeToggle = (isDark) => {
    setIsDarkMode(isDark);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      <Navbar 
        scrollPosition={scrollPosition} 
        isDarkMode={isDarkMode} 
        onThemeToggle={handleThemeToggle}
      />
      <main className="flex-grow">
        <FloatingButton />
        <PopupForm />
        <Component {...pageProps} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}