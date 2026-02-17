import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiencias = [
  {
    empresa: "CISCO",
    puesto: "MENTOR",
    periodo: "07-2025 - 12-2025",
    ubicacion: "Lima, Perú",
    descripcion:
      "Encargado de capacitar a los beneficiarios de manera introductoria en el lenguaje de Python.",
    logros: [
      "Coordinar reuniones con el personal",
      "Gestionar los equipos técnicos, materiales y control de accesos bajo supervisión",
      "Contactar y ayudar a  los beneficiarios con problemas para avanzar con el trabajo",
    ],
  },
  {
    empresa: "JYC BLINDERS",
    puesto: "ANALISTA DE DATOS",
    periodo: "05-2024 - 06-2026",
    ubicacion: "Ciudad, País",
    descripcion:
      "Asistencia técnica en el desarrollo integral de plataformas web y soporte directo en la actualización y mantenimiento /n preventivo de bases de datos. Colaboración estrecha en la mejora de procesos de gestión de datos y aseguramiento de la precisión en los registros institucionales.",
    logros: [
      "Brindar soporte en la actualización, organización y mantenimiento preventivo de la base de datos institucional.",
      "Validación y corrección de registros para garantizar la integridad y precisión de los activos de información.",
      "Optimización de bases de datos",
    ],
  },
  {
    empresa: "ONPE",
    puesto: "Coordinador de Mesa STAE",
    periodo: "04-2022",
    ubicacion: "Lima, Perú",
    descripcion:
      "Inicio de carrera profesional en desarrollo de software. Aprendizaje acelerado de tecnologías frontend y metodologías ágiles.",
    logros: [
      "Instalar y configurar los equipos tecnológicos",
      "Brindar soporte durante el escrutinio",
      "Gestión de certificados digitales y firmas electrónicas para garantizar la autenticidad de documentos oficiales.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="bg-card py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Trayectoria
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-6">
            Mi <span className="text-gradient">experiencia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un recorrido por mi carrera profesional y los proyectos que han marcado mi crecimiento.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiencias.map((exp, index) => (
              <motion.div
                key={exp.empresa}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden md:block absolute top-8 w-4 h-4 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0 ? "right-0 translate-x-1/2 md:-right-2" : "left-0 -translate-x-1/2 md:-left-2"
                  }`}
                />

                <div className="bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-display">{exp.puesto}</h3>
                      <p className="text-primary font-medium">{exp.empresa}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.periodo}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.ubicacion}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.descripcion}</p>

                  <ul className="space-y-2">
                    {exp.logros.map((logro) => (
                      <li key={logro} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-foreground/80">{logro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
