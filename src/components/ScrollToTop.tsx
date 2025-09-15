import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {
    const gl = window.__lenis;
    if (gl && typeof gl.scrollTo === 'function') {
      gl.scrollTo(0, { immediate: true});
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto'});
    }
  }, [pathname]);
  return null;
}
