import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Sparkles,
  Shield,
  Code
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const sectionIcons = [Target, Rocket];
const goalIcons = [Shield, Code, Target];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const About = ({ about }) => {
  const renderParagraphs = (text) =>
    text.split("\n\n").map((p, i) => (
      <p key={i} className="text-gray-600">
        {p}
      </p>
    ));

  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={cardVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="mb-4">{about.title}</h2>
        </motion.div>

        {/* SECCIONES (Trayectoria / Intereses) */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {about.sections.map((section, index) => {
            const Icon = sectionIcons[index % sectionIcons.length];
            const accent =
              index === 0
                ? "border-blue-200 bg-blue-100 text-blue-600"
                : "border-purple-200 bg-purple-100 text-purple-600";

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className={`hover:shadow-lg transition-shadow ${accent.split(" ")[0]}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${accent}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="mb-2">{section.title}</h3>
                        {renderParagraphs(section.description)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* OBJETIVOS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={cardVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-center mb-6">Objetivos y Aspiraciones</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {about.goals.map((goal, index) => {
                  const Icon = goalIcons[index % goalIcons.length];
                  const accent =
                    index % 2 === 0
                      ? "bg-blue-100 text-blue-600"
                      : "bg-purple-100 text-purple-600";

                  return (
                    <div key={index} className="text-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${accent}`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <h4 className="mb-2">{goal.title}</h4>
                      <p className="text-sm text-gray-600">
                        {goal.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            {about.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
