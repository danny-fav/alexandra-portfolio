"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      style={{
        display: visible ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "12px 12px",
        background: "#C4A673",
        color: "white",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 1000,
        fontSize: "20px",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "#000";
        e.target.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "#C4A673";
        e.target.style.transform = "translateY(0)";
      }}
      title="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up w-5 h-5 text-charcoal"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
    </button>
  );
}
