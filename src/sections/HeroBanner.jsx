import { Shield, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

const HeroBanner = ({ header }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" id="home">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30">
          <Shield className="w-12 h-12 text-blue-400" />
        </div>

        <h1 className="text-white mb-4">
          {header.title}
          <span className="text-blue-400">{header.name}</span>
        </h1>

        <h2 className="text-3xl text-blue-400 mb-6">
          {header.subtitle}
        </h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {header.description}
        </p>

        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Ver Proyectos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
          >
            Contactar
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a href={header.github} className="text-gray-400 hover:text-blue-400">
            <Github className="w-6 h-6" />
          </a>
          <a href={header.linkedin} className="text-gray-400 hover:text-blue-400">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${header.email}`} className="text-gray-400 hover:text-blue-400">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
