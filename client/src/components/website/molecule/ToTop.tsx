"use client";
import { Link } from "@/i18n/routing";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ToTop() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {show && (
        <button
          onClick={scrollToTop}
          className="hidden sm:block fixed bottom-4 right-4 rounded-full bg-[#F97316] p-3 transition-all hover:bg-slate-400 shadow-lg"
        >
          <FaArrowUp size={20} color="white" />
        </button>
      )}
    </div>
  );
}
