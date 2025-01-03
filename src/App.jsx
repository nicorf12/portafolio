import { useState, useEffect } from "react";
import Project from "./sections/Projects";
import Goals from "./sections/Goals";
import AboutMe from "./sections/AboutMe";
import HeaderBackground from "./sections/HeroBanner";
import "./App.css";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import AnimatedSection from "./components/AnimatedSection";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  const loadLanguageData = async (language) => {
    try {
      const languageData = await import(`./assets/data_${language}.json`);
      setData(languageData.default);
      setLoading(false);
    } catch (error) {
      console.error("Error loading language data:", error);
      setLoading(false);
    }
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    loadLanguageData("es");
    changeTheme("dark");
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error loading data.</p>;
  }

  return (
    <>
      <Navbar menu={data.menu} loadLanguageData={loadLanguageData} changeTheme={changeTheme} />
      <HeaderBackground header={data.header} />
      <AnimatedSection>
        <AboutMe about={data.about} />
      </AnimatedSection>
      <AnimatedSection>
        <Project projects={data.projects} />
      </AnimatedSection>
      <AnimatedSection>
        <Goals goals={data.goals} />
      </AnimatedSection>
      <AnimatedSection>
        <Contact contact={data.contact} />
      </AnimatedSection>
    </>
  );
}

export default App;
