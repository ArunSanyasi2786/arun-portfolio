import Navbar from './components/Navbar.jsx';
import Chatbot from './components/Chatbot.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Courses from './sections/Courses.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Experience from './sections/Experience.jsx';
import Resume from './sections/Resume.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100 selection:bg-cyan-300 selection:text-ink">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.20),transparent_28%),radial-gradient(circle_at_88%_14%,rgba(37,99,235,0.18),transparent_32%),linear-gradient(135deg,#030814_0%,#071426_52%,#020617_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-blue bg-[size:44px_44px] opacity-[0.06]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Courses />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}
