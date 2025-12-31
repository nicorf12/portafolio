import { ShieldCheck, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const Certifications = ({ certifications }) => {
  return (
    <section className="py-24 bg-slate-50" id="certifications">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
            <Award className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="mb-4">{certifications.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {certifications.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.list.map((cert, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${cert.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <ShieldCheck className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className={`inline-block px-2 py-1 rounded text-xs mb-2 ${cert.color}`}
                    >
                      {cert.abbr}
                    </div>

                    <h3 className="mb-1">{cert.name}</h3>

                    <p className="text-sm text-gray-600">
                      {cert.organization}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Obtenida: {cert.year}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
