import { useState, useEffect } from "react";
import { Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {isExpanded && (
        <div className="bg-card border border-border rounded-lg p-4 shadow-xl animate-slide-in-right max-w-xs">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-foreground mb-3 pr-4">
            Interested in working together?
          </p>
          <div className="flex flex-col gap-2">
            <Button
              size="sm"
              className="w-full"
              asChild
            >
              <a href="mailto:divyanshuchaudharymail@gmail.com">
                Send Email
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              asChild
            >
              <a href="/Divyanshu_RESUME.pdf" download="Divyanshu_Chaudhary_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      )}
      
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <X className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default FloatingCTA;
