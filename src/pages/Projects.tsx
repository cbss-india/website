import Lottie from "lottie-react";
import constructionAnimation from "@/assets/construction.json";

interface Publication {
  title: string;
  authors: string;
  image?: string;
  link?: string;
}

const ITEMS_PER_PAGE = 20;

const Projects = () => {
  return (
    <main>
      <section className="py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Projects
        </h1>

        <div className="w-64 md:w-80 mb-6">
          <Lottie animationData={constructionAnimation} loop={true} />
        </div>

        <p className="text-lg text-muted-foreground animate-pulse">
          Under Construction
        </p>
      </section>
    </main>
  );
};

export default Projects;
