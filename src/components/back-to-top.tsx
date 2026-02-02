"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#hero"
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-gray-800 p-3 text-sm transition-all hover:bg-gray-700 ${ show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      ↑
    </a>
  );
}