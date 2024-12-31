import { useState, useEffect } from "react";
import Project from "./sections/Projects";
import Goals from "./sections/Goals";
import AboutMe from "./sections/AboutMe";
import HeaderBackground from "./sections/HeroBanner";
import "./App.css";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    loadLanguageData("es");
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Indicador de carga
  }

  if (!data) {
    return <p>Error loading data.</p>; // Manejo de error
  }

  return (
    <>
      <Navbar menu={data.menu} loadLanguageData={loadLanguageData}/>
      <HeaderBackground header={data.header} />
      <AboutMe about={data.about} />
      <Project projects={data.projects} />
      <Goals goals={data.goals} />
      <Contact contact={data.contact} />
    </>
  );
}

export default App;
