import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skillss";
import Experience from "@/components/Experience";
import ChatBot from "@/components/Chatbot";


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Navbar /> */}
      <div className="mx-auto max-w-6xl px-4">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <ChatBot />
        {/* <footer className="py-10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer> */}
      </div>
    </main>
  );
}
