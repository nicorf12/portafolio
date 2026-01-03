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
import emailjs from "emailjs-com";

const Contact = ({ contact }) => {
  const email = contact.medios.find(m =>
    m.title.toLowerCase().includes("correo")
  );

  const redes = contact.medios.filter(
    m => !m.title.toLowerCase().includes("correo")
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0t6jt0j",
        "template_yegqjab",
        e.target,
        "cmwa19cRjD9RPwO08"
      )
      .then(() => {
        alert("Mensaje enviado correctamente");
        e.target.reset();
      })
      .catch(() => {
        alert("Error al enviar el mensaje");
      });
  };

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
                {contact.form?.title}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {contact.form?.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm mb-2 text-white">
                    {contact.form?.name}
                  </label>
                  <Input
                    name="name"
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-white">
                    {contact.form?.email}
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-white">
                    {contact.form?.message}
                  </label>
                  <Textarea
                    name="message"
                    rows={5}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {contact.form?.button}
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
            {redes.length > 0 && (
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <h3 className="text-white mb-4">
                    {contact.socialsTitle}
                  </h3>

                  <div className="space-y-3">
                    {redes.map((medio, index) => (
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
                        <span>{medio.title}</span>
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
                      {contact.cta?.title}
                    </h3>
                    <p className="text-blue-200 text-sm mb-4">
                      {contact.cta?.description}
                    </p>
                    <Button variant="secondary" size="sm" asChild>
                      <a
                        href="/portafolio/cv/CV_NicolasRomano_v2.0.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.cta?.button}
                      </a>
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
