import React, { useEffect } from "react";
import "./SplashScreen.css"; // Pastikan ada file CSS

const SplashScreen = ({ onSplashEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashEnd(); // Menghentikan splash screen setelah 3 detik
    }, 3000); // Splash screen akan tampil selama 3 detik

    return () => clearTimeout(timer);
  }, [onSplashEnd]);

  return (
    <div className="splash-screen">
      <img src="/logo.png" alt="Logo" className="logo" />{" "}
      {/* Pastikan logo berada di folder public */}
    </div>
  );
};

export default SplashScreen;
