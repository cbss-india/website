import { useState } from "react";
import { Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";

const publications = [
  { title: "Land Use Land Cover Assessment of a Protected Area Complex in Western Terai Arc Landscape of India", authors: "Kumari, P., Mani, A., Rana, S., Badola, R., & Hussain, S. A." },
  { title: "Mapping the Distribution and Discharge of Plastic Pollution in the Ganga River", authors: "Sharma, E., Ramachandran, A., Dobriyal, P., Badola, S., Koldewey, H., Hussain, S. A., & Badola, R." },
  { title: "Delineation and Mapping of Riverine Wetlands in the Middle Ganga River using Geospatial Technology", authors: "Ali, S.Z., Guha, S., Mani, A., Menon, A.N.R., Barthwal, S., Badola, R., Hussain, S. A." },
  { title: "An annotated checklist of aquatic avifauna in the human-dominated middle stretch of the Ganga River", authors: "Usmani A.A., Gangaiamaran P., Mathur V.B., Badola R., Hussain S.A." },
  { title: "Mapping hotspots and unveiling drivers of mortality in the endangered Gangetic Dolphin (Platanista gangetica) to mitigate human-mediated conservation conflicts in the Ganga River Basin, India", authors: "Badola, R., Das, G. C., Sharma, S. P., Usmani, A. A., Barthwal, S., Badola, S., & Hussain, S. A." },
  { title: "Verbena incompta: insights into its first recorded presence in the Doon valley's riverine habitats", authors: "Chaudhari, R. Y., Khan, U., Jadhav, M. R., Adhikari, B. S., Hussain, S. A., & Badola, R." },
  { title: "Assessment of fluvial stressor dynamics and riverine habitat resilience to environmental flow in the middle Ganga River", authors: "Ali, S.Z., Mani, A., Guha, S., & Hussain S.A." },
  { title: "Nest thermal dynamics and predicted sex ratio in endemic freshwater crocodylian, gharial (Gavialis gangeticus) in Chambal River, India", authors: "Sharma, S.P., Katdare, S., Badola, R. & Hussain S.A." },
  { title: "GIS and AHP-based methods for river risk zone (RRZ) assessment: a case study of the Himalayan rivers in Doon Valley, Uttarakhand, India", authors: "Mani, A., Kumari, M. & Badola, R." },
  { title: "Urban Watershed Management in the Doon Valley: A Geospatial Assessment of Himalayan Watersheds", authors: "Mani, A., Kumari, M. & Badola, R." },
  { title: "A checklist of fishes of Haiderpur wetland, western Uttar Pradesh, India", authors: "Rana, R., J.A. Johnson & S.A. Hussain" },
  { title: "Documentation of Vulnerable Bull Shark (Carcharhinus leucas) Occurrence in the Hooghly River, East Coast of India", authors: "Das, G. C., Sharma, S. P., Tudu, S. & Hussain, S. A." },
  { title: "Conservation in action: Cost-effective UAVs and real-time detection of the globally threatened swamp deer (Rucervus duvaucelii)", authors: "Tripathi, R. N., Agarwal, K., Tripathi, V., Badola, R., & Hussain, S. A." },
  { title: "Remote sensing and GIS-based assessment of Song watershed for watershed management: A case study from the Indian Himalayan region", authors: "Mani, A., Kumari, M., & Badola, R." },
  { title: "Addressing the issues of ghost gear in the Ganga River through an incentive-based institutional mechanism", authors: "Badola, S., Gill, A. K., Dobriyal, P., Patel, S., Khan, M. Z., & Hussain, S. A." },
  { title: "Optimizing Riparian Habitat Conservation: A Spatial Approach Using Aerial and Space Technologies", authors: "Tripathi, R. N., Ramachandran, A., Tripathi, V., Badola, R., & Hussain S. A." },
  { title: "Morphometric analysis and LULC change dynamics of Nayar watershed for the sustainable watershed management", authors: "Mani, A., Guha, S., Sharma, S., Ali, Sk. Z., Badola, R., & Hussain, S. A." },
  { title: "Population genetics of the critically endangered three-striped turtle, Batagur dhongoka, from the Ganga river system using mitochondrial DNA and microsatellite analysis", authors: "Kumar, A., Panda, A. K., Usmani, A. A., Yadav, P., Panwar, A., Badola, R., Hussain, S.A., & Gupta, S. K." },
  { title: "Population status and genetic assessment of mugger (Crocodylus palustris) in a tropical regulated river system in North India", authors: "Sharma, S. P., Ghazi, M. G., Katdare, S., Badola, R., & Hussain, S. A." },
  { title: "Feasibility study of UAV based ecological monitoring and habitat assessment of cervids in the floating meadows of Keibul Lamjao National Park in Manipur, India", authors: "Tripathi, R. N., Ghazi, M. G., Badola, R., & Hussain, S. A." },
  { title: "Lindernia tamilnadensis (Linderniaceae) from Indo-Gangetic plains: no more endemic to the Deccan", authors: "Khan, U., Chaudhari, R. Y., Adhikari, B. S., Hussain, S. A., & Badola, R." },
  { title: "Tourism on the roof of the world: Socio-ecological impacts of tourism on the Indian Trans-Himalaya", authors: "Mahar, N., Dobriyal, P., Badola, R., & Hussain, S. A." },
  { title: "Observations on Indian Skimmer Rynchops albicollis breeding colonies in Middle Ganges stretch, India", authors: "Ankit, K., Ahmad, M., Ranjan, V., Kumar, S., Hussain, S. A., & Gopi, G. V." },
  { title: "Local and species contribution of beta diversity of macrophytes in perspective of conservation and restoration of Ganga River, India", authors: "Dey, D., Shruti, M., De, K., Adhikari, B. S., & Hussain, S. A." },
  { title: "Do dietary exposures to multi-class endocrine disrupting chemicals translate into health risks for Gangetic dolphins?", authors: "Sah, R., Talukdar, G., Khanduri, M., Chaudhary, P., Badola, R., & Hussain, S. A." },
  { title: "Digital image processing: A new tool for morphological measurements of freshwater turtles under rehabilitation", authors: "Panda, A. K., Verma V., Srivastav, A., Badola, R., & Hussain, S. A." },
  { title: "Dietary exposure of potentially toxic elements to freshwater mammals in the Ganga river basin, India", authors: "Sah, R., Khanduri, M., Chaudhary, P., Paul, K. T., Gururani, S., Banwala, K., et al." },
  { title: "Conservation planning for Gangetic dolphin (Platanista gangetica) in smaller rivers of the Ganga River Basin, India", authors: "Das, G. C., Usmani, A. A., Sharma, S. P., Guha, S., Ali, S. Z., Barthwal, S., et al." },
  { title: "Willingness to Pay for forest corridor conservation: A contingent valuation study of Similipal-Satkosia corridor affected by mining in Odisha, India", authors: "Payal, M., Ahmed, T., Hussain, S. A., & Badola, R." },
  { title: "Unveiling the mysteries of Asian herbivores resource partitioning in tropical wet-grassland ecosystem", authors: "Devi, A., Sharma, M., Badola, R., & Hussain, S. A." },
  { title: "Genetic diversity, spatial connectivity, and population structure of Asian silurid catfish Wallago attu in the Ganga River System", authors: "Kumar, A., Negi, N., Yadav, N., Badola, R., Hussain, S. A., & Gupta, S. K." },
  { title: "Bird monitoring intelligence: Integrating Thermal UAV Imagery and Deep Learning Tools", authors: "Tripathi, R. N., Ramachandran, A., Tripathi, V., Badola, R., & Hussain S. A." },
  { title: "Landslide hazard zonation (LHZ) mapping of Doon Valley using multi-criteria analysis method based on remote sensing and GIS techniques", authors: "Mani, A., Kumari, M., & Badola, R." },
  { title: "β-diversity of odonate community of the Ganga River: partitioning and insights from local and species contribution", authors: "De, K., Dey, D., Shruti, M., Uniyal, V. P., Adhikari, B. S., Johnson, J. A., & Hussain, S. A." },
  { title: "Population status and factors influencing the distribution of Critically Endangered gharial (Gavialis gangeticus) in a regulated unprotected river system in India", authors: "Panda, A.K., Katdare, S., Gawan, S., Sharma, S.P., Badola, R., & Hussain, S.A." },
  { title: "Influence of anthropogenic factors on the waterbirds in Trans-Himalayan wetlands", authors: "Mahar, N., Habib, B., Hussain, S. A., Shawl, T., & Takpa, J." },
  { title: "Do we need to unfriend a few friends? Free-ranging dogs affect wildlife and pastoralists in the Indian Trans-Himalaya", authors: "Mahar, N., Habib, B., & Hussain, S. A." },
  { title: "Can Bengal Tiger endure the future climate and land use change scenario in the East Himalayan Region?", authors: "Deka, J. R., Ali, Sk. Z., Ahamad, M., Borah, P., Gopi, G. V., Badola, R., Sharma, R., & Hussain, S. A." },
  { title: "Assessing and understanding diversity and foraging guilds of bird community structure in Gautam Buddha Wildlife Sanctuary, Bihar and Jharkhand, India", authors: "Saeed, U., Ahamad, M., Ranjan, V., Hussain, S. A., & Badola, R." },
  { title: "Photographic evidence of the Indian Pangolin Manis crassicaudata in Kaimur Wildlife Sanctuary, Bihar, India", authors: "Ahamad, M., Saeed, U., Ranjan, V., Hussain, S. A., Badola, R., & Kumarasamy, S." },
  { title: "Spatial-temporal expansion and determinants of light pollution in India's riparian habitats", authors: "Khanduri, M., Sah, R., Ramachandran, A., Hussain, S. A., Badola, R., Candolin, U., & Hölker, F." },
  { title: "Westward range extension of Burmese Python Python bivittatus in and around the Ganga Basin, India", authors: "Gangaiamaran, P., Usmani, A.A., Vishnu, C.S., Badola, R., & Hussain, S.A." },
  { title: "Relationship between species richness, taxonomic distinctness, functional diversity, and local contribution to β diversity in the riparian spider community of the Ganga River, India", authors: "De, K., Singh, A. P., Sarkar, A., Singh, K., Siliwal, M., Uniyal, V. P., & Hussain, S. A." },
  { title: "Evaluating Urban Topography and Land Use Changes for Urban River Management Using Geospatial Techniques", authors: "Mani, A., Kumari, M., & Badola, R." },
  { title: "Local and species contribution to the beta diversity and rarity of riparian spider community of the Ganga River, India", authors: "De, K., Singh, A.P., Sarkar, A., Singh, K., Siliwal, M., Uniyal, V.P., & Hussain, S.A." },
  { title: "Imperiled Prancing Crane: Population Status and Breeding Performance of Black-Necked Crane in Trans-Himalayan Ladakh Region", authors: "Mahar, N., Habib, B., Hussain, S. A., Shawl, T., & Takpa, J." },
  { title: "A report on the butterfly diversity of the Upper Ganga River Ramsar site in Uttar Pradesh, India", authors: "De, K., Kumar, K., Singh, A. P., Uniyal, V. P., & Hussain, S. A." },
  { title: "The impact of climate change and potential distribution of the endangered white winged wood duck in Indian eastern Himalaya", authors: "Deka, J. R., Hazarika, A., Boruah, A., Das, J. P., Tanti, R., & Hussain, S. A." },
  { title: "Seasonal pattern of food habits of large herbivores in riverine alluvial grasslands of Brahmaputra floodplains, Assam", authors: "Devi, A., Hussain, S. A., Sharma, M., Gopi, G. V., & Badola, R." },
  { title: "First photographic evidence of Asiatic Black Bear in Kaziranga Tiger Reserve, India", authors: "Borah, P., Deka, J. R., Ahamad, M., Sharma, R., Badola, R., & Hussain, S. A." },
  { title: "Haematology and serum biochemistry parameters in chemically immobilized Manipur's Brow Antlered Deer or Sangai", authors: "Sharma, M. V., Baite, N., Talukdar, A., Tuboi, C., Hussain, S. A., Malik, P. K., & Nigam, P." },
  { title: "First photographic record of the presence of Smooth-coated Otter in Ghaghra River, India", authors: "Gawan, S., Panda, A. K., & Rawat, A. M." },
  { title: "Relationship of isotopic variations with spring density in the structurally controlled springs in Alaknanda Valley, Garhwal Himalaya, India", authors: "Rawat, A. M., Bagri, D. S., Kumar, S., Badola, R., & Hussain, S. A." },
  { title: "Development of a Google Earth Engine based application to monitor the seasonal water spread area of river Ganga", authors: "Tripathi, R. N., Ramachandran, A., Hussain, S. A., Tripathi, V., & Badola, R." },
  { title: "Spatio-temporal habitat assessment of the Gangetic floodplain in the Hastinapur wildlife sanctuary", authors: "Tripathi, R. N., Ramachandran, A., Tripathi, V., Badola, R., & Hussain, S. A." },
  { title: "Morphometric analysis of Suswa River Basin using geospatial techniques", authors: "Mani, A., Kumari, M., & Badola, R." },
  { title: "Toward SDGs: Forest, Market and Human Wellbeing Nexus in Indian Western Himalayas", authors: "Dobriyal, P., Badola, S., Hussain, S. A., & Badola, R." },
  { title: "Prioritising river stretches using multi-modelling habitat suitability of Gangetic dolphin as a flagship species for aquatic biodiversity conservation in the Ganga River Basin, India", authors: "Das, G. C., Sharma, S. P., Ali, Sk. Z., Gawan, S., Usmani, A. A., Sarkar, A., et al." },
  { title: "Population genetics and evolutionary history of the endangered Eld's deer (Rucervus eldii) with implications for planning species recovery", authors: "Ghazi, M. G., Sharma, S. P., Tuboi, C., Angom, S., Gurumayum, T., Nigam, P., & Hussain, S. A." },
  { title: "An incentive-based mitigation strategy to encourage coexistence of large mammals and humans along the foothills of Indian Western Himalayas", authors: "Badola, R., Ahmed, T., Gill, A. K., Dobriyal, P., Das, G. C., Badola, S., & Hussain, S. A." },
  { title: "Dry season resource selection among sympatric ungulates in a tropical coastal landscape: implications for conservation and management", authors: "Frank, S.J.D., Gopi, G. V., Sankar, K., & Hussain, S. A." },
  { title: "Testing a global standard for quantifying species recovery and assessing conservation impact", authors: "Grace, M. K., Akçakaya, H. R., Bennett, E. L., Brooks, T. M., Heath, A., et al." },
  { title: "Photographic record of Lesser Flamingo in Ramganga river, Bareilly, India", authors: "Gangaiamaran, P., Usmani, A. A., Gopi, G. V., Hussain, S. A., & Khan, K. A." },
  { title: "Turtle Rescue Centre, Bhagalpur (Bihar), India", authors: "Bajaj, A., Chauhan, R., & Sathiaseelan, S." },
  { title: "Identification of Gangetic turtles based on species-specific variations on mitochondrial cyt b and nuclear Cmos genes", authors: "Yadav, P., Kumar, A., Sahoo, S., Yadav, N., Hussain, S. A., & Gupta, S. K." },
  { title: "Growth patterns of critically endangered, head-started three-striped roofed turtle, Batagur dhongoka", authors: "Talukdar, A., Panda, A., Srivastav, A., Hussain, S. A., Malik, P. K., & Nigam, P." },
  { title: "Hematology and serum chemistry values in the critically endangered red-crowned roofed turtle and three-striped roofed turtle", authors: "Talukdar, A., Mallapur, G., Goswami, S., Konch, P., Hussain, S. A., & Nigam, P." },
  { title: "Microsatellite analysis reveals low genetic diversity in managed populations of the critically endangered gharial in India", authors: "Sharma, S. P., Ghazi, M. G., Katdare, S., Dasgupta, N., Mondol, S., Gupta, S. K., & Hussain, S. A." },
  { title: "Complete mitogenome of Ganges river dolphin, Platanista gangetica gangetica and its phylogenetic relationship with other cetaceans", authors: "Kumar, A., Yadav, P., Usmani, A., Hussain, S. A., & Gupta, S. K." },
  { title: "Spiders as bio-indicators of habitat disturbance in the riparian zone of the Ganga river: a preliminary study", authors: "De, K., Siliwal, M., Uniyal, V. P., & Hussain, S. A." },
  { title: "Diversity of aquatic insects and biomonitoring of water quality in the upper Ganga River, a Ramsar site", authors: "De, K., Sarkar, A., Singh, K., Uniyal, V. P., Johnson, J. A., & Hussain, S. A." },
  { title: "Resource utilisation by smooth-coated otter in the rivers of Himalayan foothills in Uttarakhand, India", authors: "Basak, S., Pandav, B., Johnson, J. A., & Hussain, S. A." },
  { title: "Demographic and genetic structure of a severely fragmented population of the endangered hog deer in the Indo-Burma biodiversity hotspot", authors: "Angom, S., Tuboi, C., Ghazi, M. G., Badola, R., & Hussain, S. A." },
  { title: "Assessing the distribution pattern of otters in four rivers of the Indian Himalayan biodiversity hotspot", authors: "Gupta, N., Tiwari, V., Everard, M., Savage, M., Hussain, S. A., Chadwick, M. A., Johnson, J. A., Nawab, A., & Belwal, V. K." },
  { title: "Evaluation of the effect of longitudinal connectivity in population genetic structure of endangered golden mahseer, Tor putitora, in Himalayan rivers", authors: "Yadav, P., Kumar, A., Hussain, S. A., & Gupta, S. K." },
  { title: "Mitochondrial DNA analysis reveals extremely low genetic diversity in a managed population of the Critically Endangered Gharial", authors: "Sharma, S. P., Katdare, S., Zaidi, Z., Ghazi, M. G., Gupta, S. K., & Hussain, S. A." },
  { title: "First account of spatio-temporal analysis, historical trends, source apportionment and ecological risk assessment of banned organochlorine pesticides along the Ganga River", authors: "Sah, R., Baroth, A., & Hussain, S. A." },
  { title: "Conservation planning for the Ganga River: a policy conundrum", authors: "Hussain, S. A., Irengbam, M., Barthwal, S., Dasgupta, N., & Badola, R." },
  { title: "Evaluating performance of four species distribution models using Blue-tailed Green Darner Anax guttatus from the Gangetic riparian zone", authors: "De, K., Ali, S. Z., Dasgupta, N., Uniyal, V. P., Johnson, J. A., & Hussain, S. A." },
  { title: "The Ganga Aqualife Rescue and Rehabilitation Centre, Narora, Bulandshahar District, Uttar Pradesh, India", authors: "Bajaj, A., Nigam, P., & Hussain, S. A." },
];

const ITEMS_PER_PAGE = 10;

const Publications = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = publications.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.authors.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <main>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Research publications by CBSS scientists contributing to biodiversity conservation and sustainability science.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {paginated.length} of {filtered.length} publications
          </p>

          {/* Publications list */}
          <div className="space-y-4">
            {paginated.map((pub, i) => (
              <div
                key={i}
                className="p-5 rounded-lg border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex gap-3">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold leading-snug mb-2">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground">{pub.authors}</p>
                  </div>
                </div>
              </div>
            ))}
            {paginated.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                No publications found matching your search.
              </p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm rounded-md border bg-background hover:bg-accent disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm rounded-md border transition-colors ${
                    page === currentPage
                      ? "bg-primary text-primary-foreground"
                      : "bg-background hover:bg-accent"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm rounded-md border bg-background hover:bg-accent disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Publications;
