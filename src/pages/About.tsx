import { Sprout, Globe, Shield, Users, GraduationCap, Mountain } from "lucide-react";

const values = [
  {
    icon: Sprout,
    title: "Biodiversity Conservation",
    description: "Securing India's biodiversity across all ecosystem types — forests, wetlands, rivers, deserts, and mountains — through evidence-based planning.",
  },
  {
    icon: Globe,
    title: "Sustainability Science",
    description: "Contributing to India's sustainable development at local, regional, and national levels in consonance with the UN SDGs.",
  },
  {
    icon: GraduationCap,
    title: "Education & Empowerment",
    description: "Empowering human resources through education and training to sustainably manage India's environment and biodiversity.",
  },
  {
    icon: Shield,
    title: "Environmental Awareness",
    description: "Creating an environmentally aware society that values healthy ecosystems, uses resources efficiently, and is sensitive to environmental issues.",
  },
];

const About = () => {
  return (
    <main>
      {/* Header */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CBSS</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Centre for Biodiversity and Sustainability Sciences (CBSS) is a Section 8 company 
            registered in Dehradun, Uttarakhand. We are dedicated to securing India's environment 
            and promoting science-based conservation planning for a sustainable future.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Purpose</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              CBSS was established to secure India's environment — including air, water, land, and biodiversity — 
              covering all ecosystem types, landscapes, and habitats such as forests, wetlands, rivers, deserts, 
              and mountains by promoting science-based and evidence-based conservation planning.
            </p>
            <p>
              We contribute to India's sustainable development at local, regional, and national levels 
              by promoting sustainability science in consonance with the United Nations Sustainable 
              Development Goals (SDGs) and at par with global standards. Our work responds to the UN's 
              decadal call to action for ecosystem restoration.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Objectives</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4 p-6 rounded-lg bg-background">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <value.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
