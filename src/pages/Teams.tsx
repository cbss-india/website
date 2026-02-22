import { Mail, Linkedin, Award, BookOpen, MapPin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Syed Ainul Hussain",
    role: "Founder & Director",
    bio: "Pioneering biodiversity conservation planning and sustainability science in India with over 20 years of ecosystem research experience.",
    email: "director@cbss.org.in",
    linkedin: "#",
    image: "/team/director.jpg",
    qualification: "Ph.D. in Conservation Biology",
    experience: "20+ Years Experience",
    expertise: [
      "Ecosystem Restoration",
      "Conservation Planning",
      "Sustainability Science",
    ],
    publications: 85,
    location: "Dehradun, Uttarakhand",
    leader: true,
  },
  {
    name: "Dr. Anjali Verma",
    role: "Senior Research Scientist",
    bio: "Specializing in wetland ecology, biodiversity monitoring, and climate resilience research aligned with the UN SDGs.",
    email: "anjali@cbss.org.in",
    linkedin: "#",
    image: "/team/test.avif",
    qualification: "Ph.D. in Environmental Science",
    experience: "12 Years Experience",
    expertise: ["Wetland Ecology", "Climate Adaptation"],
    publications: 42,
    location: "Delhi, India",
  },
  {
    name: "Rahul Sharma",
    role: "Research Associate",
    bio: "Focused on GIS analysis, ecosystem mapping, and science-based environmental planning.",
    email: "rahul@cbss.org.in",
    linkedin: "#",
    image: "/team/test.avif",
    qualification: "M.Sc. in Geoinformatics",
    experience: "6 Years Experience",
    expertise: ["GIS Mapping", "Landscape Ecology"],
    publications: 18,
    location: "Dehradun, India",
  },
  {
    name: "Priya Mehta",
    role: "Community Outreach Coordinator",
    bio: "Engages with communities to promote environmental awareness and sustainable resource management.",
    email: "priya@cbss.org.in",
    linkedin: "#",
    image: "/team/test.avif",
    qualification: "M.A. in Environmental Policy",
    experience: "8 Years Experience",
    expertise: ["Community Engagement", "Policy Advocacy"],
    publications: 10,
    location: "Uttarakhand, India",
  },
];

const Team = () => {
  return (
    <main>
      {/* Header */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            An interdisciplinary group of scientists and professionals dedicated
            to securing India’s biodiversity and advancing sustainability
            science.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl space-y-16">
          {teamMembers.map((member) =>
            member.leader ? (
              /* ================== LEADER SPOTLIGHT ================== */
              <div
                key={member.name}
                className="bg-card border rounded-xl overflow-hidden shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="h-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-10 flex flex-col justify-center">
                    <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary rounded-full">
                      Director
                    </span>

                    <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                    <p className="text-primary font-medium mb-4">
                      {member.role}
                    </p>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        {member.qualification}
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        {member.publications}+ Publications
                      </div>
                      <div>{member.experience}</div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {member.location}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ================== NORMAL CARDS ================== */
              <div
                key={member.name}
                className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="grid md:grid-cols-3">
                  <div className="aspect-square md:aspect-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 md:col-span-2">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {member.role}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{member.experience}</span>
                      <span>{member.publications} Publications</span>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-primary transition"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Collaborate With Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We welcome researchers, students, and institutions to collaborate in
            advancing biodiversity conservation and sustainability science.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-base font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
};

export default Team;
