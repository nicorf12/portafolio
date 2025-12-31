import { Mail, Github, Linkedin, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Contact = ({ contact }) => {
  const email = contact.medios.find(m =>
    m.title.toLowerCase().includes("correo")
  );

  const instagram = contact.medios.find(m =>
    m.title.toLowerCase().includes("instagram")
  );

  return (
    <section className="py-24 bg-slate-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-4">
            <Mail className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="mb-4">{contact.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                Envíame un mensaje
              </CardTitle>
              <CardDescription className="text-gray-400">
                Te responderé lo antes posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-white">Nombre</label>
                  <Input className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400" />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-white">Email</label>
                  <Input
                    type="email"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-white">Mensaje</label>
                  <Textarea
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 resize-none"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info */}
          <div className="space-y-6">
            {/* Email */}
            {email && (
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">
                        {email.title}
                      </h3>
                      <a
                        href={`mailto:${email.url}`}
                        className="text-gray-400 hover:text-blue-400"
                      >
                        {email.url}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Redes */}
            {contact.medios.filter(m =>
            !m.title.toLowerCase().includes("correo")
            ).length > 0 && (
            <Card className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                <h3 className="text-white mb-4">Redes</h3>

                <div className="space-y-3">
                    {contact.medios
                    .filter(m => !m.title.toLowerCase().includes("correo"))
                    .map((medio, index) => (
                        <a
                        key={index}
                        href={medio.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
                        >
                        {medio.title.toLowerCase().includes("linkedin") && (
                            <Linkedin className="w-5 h-5" />
                        )}

                        {medio.title.toLowerCase().includes("instagram") && (
                            <Github className="w-5 h-5" />
                        )}

                        <span>{medio.url}</span>
                        </a>
                    ))}
                </div>
                </CardContent>
            </Card>
            )}

            {/* CTA */}
            <Card className="bg-gradient-to-br from-blue-900 to-blue-800 border-blue-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-blue-300 mt-1" />
                  <div>
                    <h3 className="text-white mb-2">
                      Colaboremos
                    </h3>
                    <p className="text-blue-200 text-sm mb-4">
                      Abierto a proyectos de desarrollo y ciberseguridad
                    </p>
                    <Button variant="secondary" size="sm">
                      Ver CV
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
