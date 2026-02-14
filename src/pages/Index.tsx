import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Droplets, Heart, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nature.jpg";

const features = [
  {
    icon: TreePine,
    title: "Conservation Planning",
    description: "Science-based and evidence-based conservation planning to secure India's ecosystems — forests, wetlands, rivers, deserts, and mountains.",
  },
  {
    icon: Droplets,
    title: "Sustainability Science",
    description: "Promoting sustainability science aligned with the UN Sustainable Development Goals at local, regional, and national levels.",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    description: "Empowering human resources through education and training to sustainably manage and conserve India's environment and biodiversity.",
  },
  {
    icon: Heart,
    title: "Community Awareness",
    description: "Creating an environmentally aware society that values healthy ecosystems and uses resources efficiently.",
  },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Lush green forest with morning light"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            Centre for Biodiversity<br />& Sustainability Sciences
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Securing India's environment and biodiversity through science-based conservation, sustainability research, and community empowerment.
          </p>
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At CBSS, we work to secure India's environment — including air, water, land, and biodiversity — 
            covering all ecosystem types, landscapes, and habitats. Through science-based conservation planning 
            and sustainability research aligned with the UN Sustainable Development Goals, we strive for 
            a healthier, more biodiverse future.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Together, we can protect India's biodiversity and build a sustainable future. Reach out to learn how you can contribute.
          </p>
          <Button asChild size="lg" className="text-base px-8">
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
