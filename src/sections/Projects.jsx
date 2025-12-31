import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const Projects = ({ projects }) => {
  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header decorativo */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <FolderGit2 className="w-64 h-64 text-blue-600" />
          </div>

          <div className="relative text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 shadow-lg">
              <FolderGit2 className="w-8 h-8 text-blue-600" />
            </div>

            <h2 className="mb-4">{projects.title}</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Proyectos académicos y personales en desarrollo de software
              y ciberseguridad
            </p>

            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-1 w-12 bg-blue-600 rounded"></div>
              <div className="h-1 w-8 bg-blue-400 rounded"></div>
              <div className="h-1 w-4 bg-blue-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.projectsList.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Imagen */}
              <div className="h-48 overflow-hidden bg-slate-200">
                <img
                  src={`${import.meta.env.BASE_URL}assets/${project.images?.[0]}`}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                {/* Labels */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.labels.map((label, i) => (
                    <Badge key={i} variant="secondary">
                      {label}
                    </Badge>
                  ))}
                </div>

                <CardTitle>{project.title}</CardTitle>

                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.buttonText}
                  </Button>

                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
