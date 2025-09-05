import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home"
import ProjectsPage from "./pages/Projects"
import TechnologyPage from "./pages/Technology"
import ProjectDetail from "./components/ProjectDetail"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/technologies" element={<TechnologyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
