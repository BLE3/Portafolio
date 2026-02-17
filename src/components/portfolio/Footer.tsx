import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold font-display text-gradient mb-2">
              Pablo Eleazar Estupiñan Elera
            </p>
            <p className="text-muted-foreground text-sm">
              Creando experiencias digitales únicas
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/BLE3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pablo-estupi%C3%B1an-elera-ab6126350/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="elerapablo@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pablo Eleazar Estupiñan Elera. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
