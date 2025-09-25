import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smoothly scroll to top whenever the route path changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
