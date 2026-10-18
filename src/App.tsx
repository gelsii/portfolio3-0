import "./styles/App.css";
import HeaderComponent from "./components/ui/HeaderComponent";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <>
      <section
        className={`w-screen h-screen flex flex-col justify-start items-center bg-[url(../../public/backgrounds/background.avif)] bg-fixed bg-center bg-cover overflow-x-hidden px-[clamp(1rem,12vw,32rem)] scrollbar-none`}
      >
        <HeaderComponent />

        <div>
          <Home />
          <Projects />
          <Skills />
        </div>

        <Footer />
      </section>
    </>
  );
};

export default App;
