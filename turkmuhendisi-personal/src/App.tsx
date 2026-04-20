import * as ReactRouterDom from "react-router-dom";
import { SEO } from "./components/SEO";
import IntroSection from "./pages/home-page/sections/IntroSection";
import PostSection from "./pages/home-page/sections/PostSection";
import BlogDetailPage from "./pages/blog-page/BlogDetailPage";
import BlogPage from "./pages/blog-page/BlogPage";
import ProjectPage from "./pages/project-page/ProjectPage";
import AboutPage from "./pages/about-page/AboutPage";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import PresentationPage from "./pages/presentation-page/PresentationPage";

import AdminLogin from "./pages/admin-page/AdminLogin";
import AdminDashboard from "./pages/admin-page/AdminDashboard";

import StatsSection from "./pages/home-page/sections/StatsSection";
import ServicesSection from "./pages/home-page/sections/ServicesSection";
import PricingSection from "./pages/home-page/sections/PricingSection";
import TestimonialsSection from "./pages/home-page/sections/TestimonialsSection";

const routerDom = (Reflect.get(ReactRouterDom as object, "default") ?? ReactRouterDom) as typeof import("react-router-dom");
const { BrowserRouter: Router, Routes, Route } = routerDom;

export const HomePage = () => (
    <div className="bg-black min-h-screen">
        <SEO 
            title="Samet Berkant Koca | Yazılım Mühendisi & Backend Geliştirici"
            description="Modern web teknolojileri ve mikroservis mimarileri ile ölçeklenebilir backend çözümleri. Portfolyomu ve güncel projelerimi keşfedin."
            keywords="yazılım mühendisi, backend geliştirici, samet berkant koca, türkmühendisi, react, nodejs, mikroservis mimarisi, ssg, prerender"
            canonical="/"
            image="/post-bg.jpg"
            imageAlt="Türkmühendisi ana sayfa tanıtım görseli"
        />
        <IntroSection />
        <StatsSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <PostSection />
    </div>
);

export const AppLayout = () => (
    <>
        <ScrollToTop />
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/yazilar" element={<BlogPage />} />
            <Route path="/yazilar/:id" element={<BlogDetailPage />} />
            <Route path="/projeler" element={<ProjectPage />} />
            <Route path="/projeler/egitim-platformu" element={<PresentationPage />} />
            <Route path="/hakkimda" element={<AboutPage />} />
            
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
    </>
);

function App() {
    return (
        <Router>
            <AppLayout />
        </Router>
    )
}

export default App
