import { motion } from "framer-motion";
import { Sparkles, Target, Lightbulb, Users } from "lucide-react";

const aptitudes = [
  {
    icon: Target,
    title: "Orientado a resultados",
    description: "Enfocado en entregar soluciones que generen impacto real y medible.",
  },
  {
    icon: Lightbulb,
    title: "Pensamiento creativo",
    description: "Capacidad para encontrar soluciones innovadoras a problemas complejos.",
  },
  {
    icon: Users,
    title: "Trabajo en equipo",
    description: "Colaboración efectiva con equipos multidisciplinarios y comunicación clara.",
  },
  {
    icon: Sparkles,
    title: "Aprendizaje continuo",
    description: "Siempre en búsqueda de nuevas tecnologías y mejores prácticas.",
  },
];

const About = () => {
  return (
    <section id="sobre-mi" className="bg-background py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Sobre mí
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-6">
            Conoce mis <span className="text-gradient">aptitudes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soy un estudiante de ultimo año  comprometido con la excelencia, combinando habilidades técnicas 
            con una mentalidad orientada al crecimiento constante.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {aptitudes.map((aptitud, index) => (
            <motion.div
              key={aptitud.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                <aptitud.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3">{aptitud.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{aptitud.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
