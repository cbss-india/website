import { Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50/50">
      <section className="bg-primary/5 py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any queries, collaborations, or information about our biodiversity and sustainability initiatives.
          </p>
        </div>
      </section>

      <section className="pb-20 -mt-12 md:-mt-16 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-none shadow-md bg-white hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary shadow-inner">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Visit Us</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Idara, Plot No. 40, Doon Officers Enclave,<br />
                  Wildlife Institute of India Road,<br />
                  Dehradun, Uttarakhand, India<br />
                  PIN: 248002
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-none shadow-md bg-white hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary shadow-inner">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Email Us</h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  For general inquiries, collaborations, and information:
                </p>
                <a 
                  href="mailto:director@cbss-india.org" 
                  className="inline-flex items-center justify-center font-medium text-primary hover:text-primary/80 transition-colors text-xl"
                >
                  director@cbss-india.org
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
