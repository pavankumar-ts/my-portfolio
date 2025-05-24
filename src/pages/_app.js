import PopupForm from "@/components/common/PopupForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingButton from "@/components/pricing/FloatingButton";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleThemeToggle = (isDark) => {
    setIsDarkMode(isDark);
  };
  console.log("router", router);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      {
        !router.pathname.startsWith("/campaign") && (
          <Navbar
            isDarkMode={isDarkMode}
            onThemeToggle={handleThemeToggle}
          />
        )
      }
      <main className="flex-grow">
        {!router.pathname.startsWith("/campaign") && <FloatingButton />}
        {/* <PopupForm /> */}
        <Component {...pageProps} isDarkMode={isDarkMode} />
      </main>
      {
        !router.pathname.startsWith("/campaign") && (
          <Footer
            isDarkMode={isDarkMode}
            onThemeToggle={handleThemeToggle}
          />
        )
      }
    </div>
  );
}