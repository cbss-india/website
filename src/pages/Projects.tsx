import React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const projects = [
  {
    title:
      "Assessment of Human – Leopard conflict: types, extent, and hotspots in Bijnor district, Uttar Pradesh, India",
    status: "Ongoing",
    background:
      "This project is looking in to the documentation of human – leopard conflicts in the Bijnor districts of Upper Gangetic plains so as to device a community-based conflict mitigation measure that can be implemented by the Forest Department.",
  },
  {
    title:
      "Supporting identification of FWC targets covering freshwater restoration and conservation efforts in India and identification of freshwater OECMs in Ganga Basin.",
    status: "Ongoing",
    background:
      "India has the largest growing human population in the world, with a diminishing freshwater resource, affecting both human well-being and the integrity of freshwater ecosystems. This underscores the urgent need to protect and restore the country’s freshwater ecosystems. In view of this the objectives of this study are (i) to undertake data collection, stakeholder coordination, and technical analysis to identify potential targets for freshwater restoration and conservation in India, which the Government of India can consider as part of its decision to participate in the Global Freshwater Challenge, and (ii) to scientifically map potential freshwater OECMS in the Ganga River Basin and establish a standard methodological framework for promoting OECMs in other major river basins of India.",
  },
  {
    title:
      "Mapping potential Other Effective Area-Based Conservation Measures (OECM) in the Indian Himalayan region.",
    status: "Completed",
    background:
      "Under this project 468 sites covering 5% of the geographical area of the Indian Himalaya was identified as potential sites for Other Effective Area based Conservation Measures (OECM) covering 13 Sates. The traditional PAs in these States cover about 10% of the IHR, adding these potential sites will bring 15% of the geographical area of IHR under formal protection. The study concludes that the autonomy given to these areas has been instrumental in formation of CCAs, and SGs led by the customary and traditional laws of the Indigenous People and Local Communities.",
  },
];

const Projects = () => {
  return (
    <main>
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Projects & Activities
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our ongoing and completed initiatives dedicated to biodiversity conservation, sustainable ecosystems, and community engagement.
            </p>
          </div>

          <div className="bg-card border rounded-2xl shadow-sm overflow-hidden p-2 md:p-6">
            <div className="hidden md:grid grid-cols-[1fr_200px] gap-6 px-6 py-4 border-b text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              <div>Project Title</div>
              <div className="text-left">Status</div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {projects.map((project, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b last:border-none px-2 md:px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="grid md:grid-cols-[1fr_150px] gap-6 items-center w-full text-left pr-4">
                      <h3 className="font-medium text-lg leading-relaxed pr-4 text-foreground/90">
                        {project.title}
                      </h3>
                      <div className="flex justify-start">
                        <span
                          className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap",
                            project.status === "Completed"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"
                          )}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-8">
                    <div className="bg-muted/30 rounded-xl p-6 md:p-8 border border-border/50">
                      <h4 className="font-semibold text-foreground mb-3 text-lg flex items-center gap-2">
                        Project Background
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        {project.background}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
