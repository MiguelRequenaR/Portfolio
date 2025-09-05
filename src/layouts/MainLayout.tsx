import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";

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
        </main>
      </div>
    </div>
  )
}
