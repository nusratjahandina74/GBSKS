import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to GBSKS</h1>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      {/* About */}
      <section id="about" className="min-h-screen">
        <About />
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}
