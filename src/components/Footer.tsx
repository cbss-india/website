import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-primary">
          <Leaf className="h-5 w-5" />
          <span className="font-bold font-heading">CBSS</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Centre for Biodiversity and Sustainability Sciences. Dehradun, Uttarakhand.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
