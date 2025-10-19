import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Send a Raven",
      value: "divyanshuchaudhary304@gmail.com",
      link: "mailto:divyanshuchaudhary304@gmail.com"
    },
    {
      icon: Phone,
      label: "Summon by Crystal",
      value: "+91 8736045689",
      link: "tel:+918736045689"
    },
    {
      icon: Linkedin,
      label: "Professional Guild",
      value: "LinkedIn Profile",
      link: "https://linkedin.com/in/divyanshu-chaudhary-407907230"
    },
    {
      icon: Github,
      label: "Code Scrolls",
      value: "GitHub Repository",
      link: "https://github.com/DivyanshuChaudharyOff"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Send className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              The Tavern Board
            </h2>
            <Send className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg">Reach Out to the Knight</p>
        </div>

        <div className="quest-card parchment-texture">
          <div className="text-center mb-8">
            <p className="text-lg text-card-foreground italic">
              "Whether you seek alliance, counsel, or wish to embark on a quest together, 
              the tavern is always open for noble companions."
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg border-2 border-transparent hover:border-primary hover:bg-background/50 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center pt-6 border-t border-border">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg px-8"
              onClick={() => window.location.href = 'mailto:divyanshuchaudhary304@gmail.com'}
            >
              <Send className="mr-2" />
              Send a Raven
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            "May your networks stay secure and your incidents be few."
          </p>
          <p className="text-sm text-muted-foreground/70 mt-4">
            © {new Date().getFullYear()} Divyanshu Chaudhary. All quests reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
