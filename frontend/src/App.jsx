import Navbar from './components/Navbar.jsx';
import Chatbot from './components/Chatbot.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import PageLoader from './components/PageLoader.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Courses from './sections/Courses.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Certificates from './sections/Certificates.jsx';
import Resume from './sections/Resume.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-neutral-100 selection:bg-amber-300 selection:text-ink">
      <PageLoader />
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Courses />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}
