import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import IntroSection from "./pages/home-page/sections/IntroSection.tsx";
import PostSection from "./pages/home-page/sections/PostSection.tsx";
import BlogDetailPage from "./pages/blog-page/BlogDetailPage.tsx";
import BlogPage from "./pages/blog-page/BlogPage.tsx";
import ProjectPage from "./pages/project-page/ProjectPage.tsx";
import PresentationPage from "./pages/presentation-page/PresentationPage.tsx";
import AboutPage from "./pages/about-page/AboutPage.tsx";
import Navbar from "./components/Navbar.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const HomePage = () => (
    <>
        <IntroSection />
        <PostSection />
    </>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogDetailPage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/presentation" element={<PresentationPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    )
}

export default App
