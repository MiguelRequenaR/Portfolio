import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";

export default function MainLayout() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar />
      <div className="flex flex-col lg:flex-row mt-0 lg:mt-10">
        <div className="w-full lg:w-1/4 lg:sticky lg:top-4 lg:h-fit mb-6 lg:mb-0">
          <ProfileCard />
        </div>
        <main className="w-full lg:w-3/4">
          <Outlet />
          <div className="pl-20 py-20">
            <h1 className="text-5xl text-center lg:text-left lg:text-[90px] font-bold text-white">
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
