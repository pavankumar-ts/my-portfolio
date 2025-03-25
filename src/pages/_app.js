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
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleThemeToggle = (isDark) => {
    setIsDarkMode(isDark);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      <Navbar
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />
      <main className="flex-grow">
        <FloatingButton />
        {/* <PopupForm /> */}
        <Component {...pageProps} isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}