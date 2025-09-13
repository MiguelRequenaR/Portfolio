import { Outlet } from "react-router-dom";
import { useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import { useLenis } from "../hooks/useLenis";

export default function MainLayout() {
  const mainContentRef = useRef<HTMLDivElement>(null);
  
  useLenis();

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.style.height = 'auto';
      mainContentRef.current.style.overflow = 'visible';
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <NavBar />
      <div className="flex flex-col lg:flex-row mt-0 lg:mt-10">
        <div className="w-full lg:w-1/4 lg:sticky lg:top-4 lg:h-fit mb-6 lg:mb-0">
          <ProfileCard />
        </div>
        
        <main 
          ref={mainContentRef}
          className="w-full lg:w-3/4"
        >
          <Outlet />
          <div className="pl-0 lg:pl-20 py-20">
            <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-black text-white" data-aos="fade-down">
              TRABAJEMOS <span className="text-primary">JUNTOS</span>
            </h1>
            <FormContact />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
