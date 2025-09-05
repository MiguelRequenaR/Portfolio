import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";

export default function MainLayout() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar />
      <div className="flex">
        <div className="w-1/4 sticky top-4 h-fit">
          <ProfileCard />
        </div>
        <main className="w-3/4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
