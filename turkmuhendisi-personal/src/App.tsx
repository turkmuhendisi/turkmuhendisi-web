import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import IntroSection from "./pages/home-page/sections/IntroSection.tsx";
import PostSection from "./pages/home-page/sections/PostSection.tsx";
import BlogDetailPage from "./pages/blog-page/BlogDetailPage.tsx";
import BlogPage from "./pages/blog-page/BlogPage.tsx";
import ProjectPage from "./pages/project-page/ProjectPage.tsx";
import AboutPage from "./pages/about-page/AboutPage.tsx";
import Navbar from "./components/Navbar.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

import AdminLogin from "./pages/admin-page/AdminLogin.tsx";
import AdminDashboard from "./pages/admin-page/AdminDashboard.tsx";

import StatsSection from "./pages/home-page/sections/StatsSection.tsx";
import ServicesSection from "./pages/home-page/sections/ServicesSection.tsx";
import PricingSection from "./pages/home-page/sections/PricingSection.tsx";
import TestimonialsSection from "./pages/home-page/sections/TestimonialsSection.tsx";

const HomePage = () => (
    <div className="bg-black min-h-screen">
        <IntroSection />
        <StatsSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <PostSection />
    </div>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/yazilar" element={<BlogPage />} />
                <Route path="/yazilar/:id" element={<BlogDetailPage />} />
                <Route path="/projeler" element={<ProjectPage />} />
                <Route path="/hakkimda" element={<AboutPage />} />
                
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
        </Router>
    )
}

export default App
