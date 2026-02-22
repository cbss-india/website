import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Calendar, Landmark, FolderKanban } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCSV = async () => {
      const response = await fetch("/hussain_sir_projects.csv");
      const text = await response.text();

      Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setProjects(results.data);
          setLoading(false);
        },
      });
    };

    loadCSV();
  }, []);

  return (
    <main>
      {/* Header */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Research Projects
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Science-driven initiatives advancing biodiversity conservation,
            ecosystem restoration, and sustainability science across India.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {loading ? (
            <p className="text-center text-muted-foreground">
              Loading projects...
            </p>
          ) : (
            <div className="space-y-20">
              {projects.map((project, index) => {
                const title = project.Title || project.title || "-";
                const agency =
                  project.Funding_Agency || project.Agency || "-";
                const duration =
                  project.Duration || project.Period || "-";

                const isOngoing =
                  duration.toLowerCase().includes("ongoing");

                return (
                  <div
                    key={index}
                    className="relative border-l-4 border-primary pl-8 group"
                  >
                    {/* Status Badge */}
                    <span
                      className={`inline-block mb-4 text-xs px-3 py-1 rounded-full font-medium ${
                        isOngoing
                          ? "bg-green-100 text-green-700"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isOngoing ? "Ongoing Project" : "Completed Project"}
                    </span>

                    {/* Title */}
                    <h2 className="text-2xl font-semibold mb-4 leading-snug group-hover:text-primary transition-colors">
                      {title}
                    </h2>

                    {/* Meta Info */}
                    <div className="grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <Landmark className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">
                            Funding Agency
                          </p>
                          <p>{agency}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">
                            Project Duration
                          </p>
                          <p>{duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative separator */}
                    <div className="mt-10 h-px bg-border"></div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;