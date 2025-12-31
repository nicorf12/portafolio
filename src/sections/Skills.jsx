import {
  Terminal,
  Code,
  Shield,
  Lock,
  Bug,
  Eye,
  ShieldCheck
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../components/ui/card";

const iconMap = {
  Terminal,
  Code,
  Shield,
  Lock,
  Bug,
  Eye
};

export default function Skills({ skills }) {
  return (
    <section className="py-24 bg-slate-50" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <ShieldCheck className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="mb-4">{skills.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {skills.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.list.map((skill, index) => {
            const Icon = iconMap[skill.icon];

            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-slate-200"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                  </div>
                  <CardTitle>{skill.title}</CardTitle>
                  <CardDescription>
                    {skill.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
