import { useState, useEffect } from "react";
import Project from "./sections/Projects";
import Skills from "./sections/Skills";
import AboutMe from "./sections/AboutMe";
import HeaderBackground from "./sections/HeroBanner";
import Contact from "./sections/Contact";
import Certifications from "./sections/Certifications";
import Navbar from "./components/Navbar";
import AnimatedSection from "./components/AnimatedSection";

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
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error loading data.</p>;
  }

  return (
    <div className="size-full">
      <Navbar menu={data.menu} loadLanguageData={loadLanguageData} />
      <HeaderBackground header={data.header} />
      <AnimatedSection>
        <AboutMe about={data.about} />
      </AnimatedSection>
      <AnimatedSection>
        <Skills skills={data.skills} />
      </AnimatedSection>
      <AnimatedSection>
        <Project projects={data.projects} />
      </AnimatedSection>
      <AnimatedSection>
        <Certifications certifications={data.certifications} />
      </AnimatedSection>
      <AnimatedSection>
        <Contact contact={data.contact} />
      </AnimatedSection>
    </div>
  );
}

export default App;
