import { useState, useEffect } from "react";
import Papa from "papaparse";

const Projects = () => {
  const [projects, setProjects] = useState([]);
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
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Research projects by CBSS scientists contributing to biodiversity conservation and sustainability science.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading projects...</p>
          ) : (
            <div className="px-10 overflow-x-auto">
              <table className="min-w-full border border-border rounded-lg overflow-hidden px-10">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-10 py-4 text-sm font-semibold border-b">Title</th>
                    <th className="text-left px-10 py-4 text-sm font-semibold border-b">Agency</th>
                    <th className="text-left px-10 py-4 text-sm font-semibold border-b">Period</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="px-10 py-5 text-sm font-medium">
                        {project.Title || project.title || "-"}
                      </td>
                      <td className="px-10 py-5 text-sm text-muted-foreground">
                        {project.Funding_Agency || project.Agency || "-"}
                      </td>
                      <td className="px-10 py-5 text-sm text-muted-foreground">
                        {project.Duration || project.Period || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;