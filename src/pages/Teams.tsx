import { Mail, Linkedin, Award, BookOpen, MapPin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Syed Ainul Hussain",
    role: "Founder Director",
    bio: "Dr. Hussain is one of India’s pioneering conservation biologists, with over 40 years of experience in biodiversity conservation. Formerly Head of the Department of Landscape Level Conservation Planning at the Wildlife Institute of India, he has led projects in terrestrial, aquatic, coastal, and marine ecology, protected area management, ecosystem service assessment, ecological restoration, and environmental impact assessment. His expertise lies in science-based conservation planning, community engagement, and biodiversity policy and advocacy across large landscapes and riverscapes.",
    email: "Ainul.Hussain@gmail.com",
    linkedin: "#",
    image: "/team/director.jpg",
    qualification: "Ph.D; D.Sc.",
    experience: "40+ Years Experience",
    expertise: [
      "Biodiversity Conservation",
      "Landscape Conservation",
      "Ecological Restoration",
      "Impact Assessment",
    ],
    location: "Dehradun, Uttarakhand",
    leader: false,
  },

  {
    name: "Dr. Latika Nath",
    role: "Core Team",
    bio: "With a master’s degree on Human-Elephant conflict from the University of Wales and a Doctorate on Tiger Conservation and Management from the University of Oxford, Latika is an international authority on big cat conservation and sustainability. Dedicating over three decades to wildlife conservation, Latika's life epitomizes a polymathic spirit. Latika is a global ambassador for Leica, a Nikon creator and an ambassador for the Responsible Tourism Society of India. She has represented several brands including Jeep and Tata Zoya. She has been awarded several scholarships and grants for her academic work as well as awards for her work in the fields of wildlife research, nature based tourism and sustainability studies.",
    image: "/team/latika.jpg",
    qualification: "Ph.D.",
    experience: "30+ Years Experience",
    expertise: [
      "Tiger Conservation",
      "Human-Wildlife Conflict",
      "Sustainability",
    ],
    location: "India",
  },

  {
    name: "Dr. Rakesh Kumar Singh",
    role: "Core Team",
    bio: "Dr. Singh is working for ecological footprint and sustainable development with over 35 years of experience. He was awarded Ph.D. Degree in Wildlife Science from Saurashtra University, Rajkot based on his work on “Impact of iron ore mining on elephant habitat in Singhbhum forests, Jharkhand.” He is an independent assessor for accreditation of EIA consulting organization by NABET-QCI and an expert on Industrial Safety Management with exceptional understanding of the application of Indian Wild Life (Protection) Act, 1972 and Environmental Protection Act, 1986 for wildlife conservation and sustainable development.",
    image: "/team/rakesh.jpg",
    qualification: "Ph.D.",
    experience: "35+ Years Experience",
    expertise: [
      "Sustainable Development",
      "Ecological Footprint",
      "Industrial Safety",
    ],
    location: "India",
  },

  {
    name: "Dr. Surya Prasad Sharma",
    role: "Core Team",
    bio: "Dr. Sharma is an evolutionary biologist working on the application of conservation genetics and genomics for the restoration of threatened species at the landscape level. He has led several biodiversity assessments and contributed to river conservation planning, particularly in the Ganga River Basin, focusing on identification of anthropogenic pressures and impact of climate uncertainties at species, population and habitat level. An avid herpetologist, he has published several papers on the population ecology, thermal biology and conservation of critically endangered gharial.",
    image: "/team/surya.jpg",
    qualification: "Ph.D.",
    experience: "Research Scientist",
    expertise: ["Conservation Genetics", "River Conservation", "Herpetology"],
    location: "India",
  },

  {
    name: "Dr. Ravindra Tripathi",
    role: "Core Team",
    bio: "With a Ph.D. degree in Computer Science & Engineering based on his work on Integrating Computer Vision and Unmanned Aerial Systems for Ecological Monitoring of Freshwater Habitats, Dr. Tripathi works on new paradigm in biodiversity conservation by integrating computational intelligence with ecological science to address critical spatiotemporal gaps in monitoring of dynamic ecosystems. He is currently working on a bio-digital synthesis where machine learning moves beyond pattern recognition and becomes ecologically aware, embedding models with integrity that reflects and stays in harmony with the biological rhythms and living processes of natural ecosystems.",
    image: "/team/ravindra.jpg",
    qualification: "Ph.D.",
    experience: "AI & Ecology Research",
    expertise: ["Computer Vision", "Ecological AI", "UAV Monitoring"],
    location: "India",
  },

  {
    name: "Srishti Badola",
    role: "Core Team",
    bio: "Srishti Badola is a dedicated socioeconomist with over six years of experience on empowering local communities through sustainable livelihood development. Skilled at connecting organizations with relevant allies to solicit change and effective action in climate resilience and sustainable livelihoods. Known for bringing diverse groups together to achieve balanced conservation and development goals, particularly in under privileged landscapes.",
    image: "/team/srishti.jpg",
    qualification: "Socioeconomist",
    experience: "6+ Years Experience",
    expertise: [
      "Climate Resilience",
      "Community Engagement",
      "Sustainable Livelihoods",
    ],
    location: "India",
  },

  {
    name: "Aishwarya Ramachandran",
    role: "Core Team",
    bio: "Aishwarya brings over a decade of expertise in ecological modelling, biodiversity conservation, AI-driven geospatial workflows, and sustainability planning. She has worked across both public and private sectors, including roles at the National Remote Sensing Centre, the Wildlife Institute of India under the Namami Gange Programme, and as a Senior Ecologist for an international corporate start-up. Using GIS, remote sensing, and advanced spatial analytics, she has contributed to habitat mapping, ecological restoration, watershed management, pollution modelling, urban planning, ecosystem service evaluation, and Biodiversity Net Gain (BNG) assessments, supporting science-based and climate-resilient environmental management.",
    image: "/team/Aishwarya.png",
    qualification: "Geospatial Analyst",
    experience: "10+ Years Experience",
    expertise: [
      "Ecological Modelling",
      "Geospatial Workflows",
      "Sustainability Planning",
    ],
    location: "India",
  },

  {
    name: "Dr. Anil Prakash Joshi",
    role: "Advisor & Mentor",
    bio: "Dr. Joshi has dedicated the past 40 years to resource-based rural development, emphasizing on ecology inclusive economy of Himalayas. Known as the ‘Mountain Man’, an ‘Ashoka Fellow’ Dr. Joshi has authored over 150 research papers and 15 books addressing the sustainable development of the Himalayas. As an educator, he has guided several Ph.D. students and inspired others to use science and technology to address the fundamental needs of Himalayan communities. His pioneering initiative to introduce Gross Environmental Product (GEP) as an ecological growth measure has caught international attention. This ground breaking move marks the first instance globally where Annual Ecological Growth is measured parallel to GDP. He was awarded Padma Shri in 2006 and Padma Bhushan in 2024 for his contribution to the sustainable development of the mountain communities.",
    image: "/team/anil.jpg",
    qualification: "Ph.D.",
    experience: "40+ Years Experience",
    expertise: [
      "Himalayan Ecology",
      "Sustainable Development",
      "Gross Environmental Product",
    ],
    location: "India",
  },

  {
    name: "Dr. Rajiv Sinha",
    role: "Advisor & Mentor",
    bio: "Professor Sinha obtained his Master’s degree in Applied Geology from IIT Roorkee and later obtained his PhD in fluvial sedimentology from the University of Cambridge, UK. He carried out his post-doctoral research at the University of Karlsruhe, Germany as an Alexander von Humboldt Fellow. Professor Sinha is one of the leading earth scientists from India who specializes in earth surface processes and river science. His primary area of research has been the Himalayan River systems with an emphasis on river morphology, hydrology, sediment dynamics and flood risk assessment. He was the Founder Head of the Department of Earth Sciences at IIT Kanpur. He led the fluvial geomorphology group of the Ganga River Basin Environmental Management Plan (GRBMP).",
    image: "/team/rajiv.jpg",
    qualification: "Ph.D.",
    experience: "Professor, IIT Kanpur",
    expertise: ["River Science", "Hydrology", "Geomorphology"],
    location: "Kanpur, India",
  },

  {
    name: "Dr. Kamaljit Kaur Sangha",
    role: "Advisor & Mentor",
    bio: "Prof Sangha works on the transdisciplinary area of Ecological Economics intersecting ecological, economic, and social sciences. Her work primarily deals with understanding and highlighting the role of natural systems for human wellbeing; valuing ecosystems for their services; developing Nature-based solutions and Payments for Ecosystem Services mechanisms for local and Indigenous communities; and sustainable natural resource management by integrating socio-economic and ecological perspectives. She has developed innovative methods to evaluate ecosystem services from Indigenous Peoples and Local Communities perspectives.",
    image: "/team/kamaljit.jpg",
    qualification: "Ph.D.",
    experience: "Professor",
    expertise: [
      "Ecological Economics",
      "Nature-based Solutions",
      "Ecosystem Services",
    ],
    location: "Australia",
  },

  {
    name: "Mohammad Khalid Sayeed Pasha",
    role: "Advisor & Mentor",
    bio: "Mr. Khalid Pasha serves as IUCN Asia Coordinator for Protected, Conserved and Heritage Areas, leading regional initiatives on biodiversity governance, the IUCN Green List, and the Asia Protected Areas Partnership. He is a wildlife conservation and natural resource management expert with over 25 years of experience leading and managing large-scale conservation initiatives across the Asia-Pacific region. His expertise spans protected and conserved areas, biodiversity governance, sustainability standards, and conservation technology.",
    image: "/team/khalid.jpg",
    qualification: "M.Sc.",
    experience: "25+ Years Experience",
    expertise: [
      "Protected Areas",
      "Biodiversity Governance",
      "Conservation Technology",
    ],
    location: "Bangkok",
  },

  {
    name: "Dr. Anna Loy",
    role: "Advisor & Mentor",
    bio: "Prof. Loy is working with the Department of Biosciences and Territory, University of Molise. Her expertise includes wildlife monitoring, management, and conservation, particularly using non-invasive genetics, ecological niche, species distribution, connectivity, and climate change modelling. Her expertise also includes linear infrastructure development using GIS-based risk maps and mitigation protocols.",
    image: "/team/anna.jpg",
    qualification: "Ph.D.",
    experience: "Professor",
    expertise: ["Wildlife Monitoring", "Climate Modelling", "GIS Risk Mapping"],
    location: "Italy",
  },

  {
    name: "Dr. Arno Christian Gutleb",
    role: "Advisor & Mentor",
    bio: "Prof. Gutleb is an expert environmental toxicologist graduated from the University of Veterinary Medicine Vienna, holds a doctorate degree in Environmental Sciences from Wageningen University, Netherlands, and is a European Registered Toxicologist. He is Distinguished Professor at the University Iuliu Hatieganu and Visiting Professor at Universidad Andrés Bello teaching Ecotoxicology, Risk Assessment and Nanosafety.",
    image: "/team/arno.jpg",
    qualification: "Ph.D.",
    experience: "25+ Years Experience",
    expertise: ["Ecotoxicology", "Risk Assessment", "Nanosafety"],
    location: "Romania",
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
        <div className="container mx-auto px-4 max-w-7xl space-y-16">
          {/* Core Team */}
          <div className="space-y-8">
            <div>
              <div className="space-y-8">
                {teamMembers
                  .filter(
                    (member) =>
                      ![
                        "Dr. Anil Prakash Joshi",
                        "Dr. Rajiv Sinha",
                        "Dr. Kamaljit Kaur Sangha",
                        "Mohammad Khalid Sayeed Pasha",
                        "Dr. Anna Loy",
                        "Dr. Arno Christian Gutleb",
                      ].includes(member.name),
                  )
                  .map((member) => (
                    <div
                      key={member.name}
                      className="bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                    >
                      <div className="grid md:grid-cols-[280px_1fr]">
                        <div className="w-full h-full flex items-center justify-center bg-muted/10 p-4">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-auto object-contain rounded-xl max-h-[350px]"
                          />
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-1">
                            {member.name}
                          </h3>

                          <p className="text-primary text-sm font-medium mb-3">
                            {member.role}
                          </p>

                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {member.bio}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.expertise.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-4 text-xs md:text-sm text-muted-foreground">
                            <span>{member.qualification}</span>
                            <span>{member.experience}</span>
                            <span>{member.location}</span>
                          </div>

                          {(member.email || member.linkedin || member.name === "Dr. Syed Ainul Hussain") && (
                            <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                              {member.email && (
                                <a
                                  href={`mailto:${member.email}`}
                                  className="text-muted-foreground hover:text-primary transition"
                                >
                                  <Mail className="h-5 w-5" />
                                </a>
                              )}
                              {member.linkedin && (
                                <a
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-primary transition"
                                >
                                  <Linkedin className="h-5 w-5" />
                                </a>
                              )}
                              {member.name === "Dr. Syed Ainul Hussain" && (
                                <a
                                  href="/resume/dr_hussain.pdf"
                                  download
                                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition ml-auto"
                                >
                                  Download CV
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Advisors & Mentors */}
            <div className="pt-10">
              <h2 className="text-3xl font-bold mb-8">Advisors & Mentors</h2>

              <div className="space-y-8">
                {teamMembers
                  .filter((member) =>
                    [
                      "Dr. Anil Prakash Joshi",
                      "Dr. Rajiv Sinha",
                      "Dr. Kamaljit Kaur Sangha",
                      "Mohammad Khalid Sayeed Pasha",
                      "Dr. Anna Loy",
                      "Dr. Arno Christian Gutleb",
                    ].includes(member.name),
                  )
                  .map((member) => (
                    <div
                      key={member.name}
                      className="bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
                    >
                      <div className="grid md:grid-cols-[280px_1fr]">
                        <div className="w-full h-full flex items-center justify-center bg-muted/10 p-4">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-auto object-contain rounded-xl max-h-[350px]"
                          />
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-1">
                            {member.name}
                          </h3>

                          <p className="text-primary text-sm font-medium mb-3">
                            Advisor & Mentor
                          </p>

                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {member.bio}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.expertise.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-4 text-xs md:text-sm text-muted-foreground">
                            <span>{member.qualification}</span>
                            <span>{member.experience}</span>
                            <span>{member.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
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
