import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Bienvenido a mi portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold font-display mb-6"
          >
            Hola, soy{" "}
            <span className="text-gradient">Pablo Estupiñan </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
Futuro Ingeniero de Sistemas apasionado por el desarrollo web y redes empresariales. Transformando problemas complejos en código eficiente y funcional.          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-4 justify-center mb-16"
          >
            <a
              href="#contacto"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Contáctame
            </a>
            <a
              href="#experiencia"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Ver mi trabajo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/BLE3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pablo-estupi%C3%B1an-elera-ab6126350/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:tu@email.com"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#sobre-mi" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Descubre más</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
