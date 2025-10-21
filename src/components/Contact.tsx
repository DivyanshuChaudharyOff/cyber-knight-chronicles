import { Mail, Phone, Linkedin, Github, Send, Feather } from "lucide-react";
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
    <section id="contact" className="py-20 px-4 relative">
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

        <div className="relative">
          {/* Scroll edges */}
          <div className="absolute -top-4 left-0 right-0 h-8 bg-gradient-to-b from-card/80 to-transparent rounded-t-3xl border-t-2 border-x-2 border-border"></div>
          <div className="absolute -bottom-4 left-0 right-0 h-8 bg-gradient-to-t from-card/80 to-transparent rounded-b-3xl border-b-2 border-x-2 border-border"></div>
          
          {/* Main scroll */}
          <div className="scroll-paper rounded-xl p-8 md:p-12 border-2 border-border relative overflow-hidden">
            {/* Decorative quill */}
            <div className="absolute top-4 right-4 opacity-20">
              <Feather className="w-12 h-12 text-primary rotate-45" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-ink ink-text mb-4">
                  Messages & Missives
                </h3>
                <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
              </div>

              <p className="text-xl font-handwriting ink-text leading-relaxed handwritten italic text-center border-2 border-primary/20 rounded-lg p-4 bg-primary/5">
                "Whether you seek alliance, counsel, or wish to embark on a quest together, 
                the tavern is always open for noble companions."
              </p>

              <div className="h-px bg-border/50 my-8 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
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
                      className="flex items-start gap-4 p-4 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-handwriting ink-text/70 mb-1">{contact.label}</p>
                        <p className="font-handwriting ink-text font-medium group-hover:text-primary transition-colors">
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

              <div className="mt-8 text-center">
                <p className="font-handwriting ink-text text-lg leading-relaxed handwritten" style={{ animationDelay: '0.2s' }}>
                  "May your networks stay secure and your incidents be few."
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 text-center border-t border-border pt-6">
                <p className="text-sm font-handwriting ink-text/60">
                  © {new Date().getFullYear()} Divyanshu Chaudhary. All quests reserved.
                </p>
              </div>
            </div>

            {/* Ink spots decoration */}
            <div className="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-primary/20 blur-sm"></div>
            <div className="absolute top-20 left-12 w-2 h-2 rounded-full bg-primary/15 blur-sm"></div>
            <div className="absolute bottom-20 right-16 w-2.5 h-2.5 rounded-full bg-primary/20 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
