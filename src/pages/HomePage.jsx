import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Login from "../components/Login";
import Register from "../components/Register";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
        <Login />
        <Register />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
