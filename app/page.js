import "./globals.css";
import Experience from "../src/src/Experience/Experience";
import Header from "../src/src/Header/Header";
import Portfolio from "../src/src/Portfolio/Portfolio";
import Contact from "../src/src/Contact/Contact";
import Footer from "../src/src/Footer/Footer";
import About from "../src/src/About/About";

function App() {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;