import { useState, useEffect } from "react";
import { Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import Papa from "papaparse";


interface Publication {
  title: string;
  authors: string;
  image?: string;
}


const ITEMS_PER_PAGE = 10;

const Publications = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [initialPublications, setInitialPublications] = useState<Publication[]>([]);

  useEffect(() => {
    const loadCSV = async () => {
    const response = await fetch("/rivres_publications.csv");
    const text = await response.text();

    Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = results.data;

        const formatted: Publication[] = data.map((row) => ({
          title: row.Title || row.title || "",
          authors: row.Authors || row.authors || "",
          image: row.Image_URL || row.image || "",
        }));

        setInitialPublications(formatted);
      },
    });
    };

    loadCSV();
  }, []);

  const filtered = initialPublications.filter(
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginated.map((pub, i) => (
              <div
                key={i}
                className="p-5 rounded-lg border bg-card hover:shadow-md transition-shadow h-full"
              >
                <div className="flex gap-3">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold leading-snug mb-2">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{pub.authors}</p>
                    {pub.image && (
                      <img
                        src={pub.image}
                        alt={pub.title}
                        className="w-full max-h-60 object-cover rounded-md border"
                      />
                    )}
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
