// src/data/proyects.ts
export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Salón Multiuso Coopeguanacaste",
    subtitle: "Obra civil / Edificación — construcción de salón de eventos de gran escala.",
    description: `Proyecto desarrollado para la Coopeguanacaste, consistente en la construcción de un salón multiuso con un área total de 3.000 m².
La obra incluyó movimientos de tierra, cimentación, estructura metálica, cerramientos y acabados de alta resistencia para albergar eventos, ferias y actividades corporativas.
El proyecto tuvo una duración aproximada de un año y dos meses, garantizando cumplimiento de plazos y estándares de seguridad estructural, actualmente el salón se mantiene como uno de los espacios más amplios y funcionales del cantón, utilizado para actividades comunales y empresariales.`,
    images: ["/proyects/COOPE.jpg"],
    tags: ["Obra civil", "Infraestructura", "Eventos", "Construcción"],
  },
  {
    id: "proj-2",
    title: "Casa Lomas del Mar",
    subtitle:
      "Residencial / Vivienda de lujo — construcción de casa de dos plantas con piscina infinita.",
    description: `Ubicada en la zona costera cercana al Hotel Ríu, este proyecto consistió en el diseño y construcción integral de una vivienda moderna de 350 m² distribuidos en dos niveles.
La Casa Lomas del Mar combina estructura de concreto reforzado con acabados finos y una piscina infinita orientada hacia el paisaje natural, priorizando vistas panorámicas y ventilación cruzada.
El proceso constructivo tuvo una duración aproximada de nueve meses, con una planificación enfocada en la eficiencia energética, integración con el entorno y acabados de alto estándar.`,
    images: [
      "/proyects/CASA LOMAS DEL MAR1.jpg",
      "/proyects/CASA LOMAS2.jpg",
      "/proyects/CASA LOMAS3.jpg",
    ],
    tags: ["Residencial", "Vivienda de lujo", "Piscina infinita", "Diseño moderno"],
  },
  {
    id: "proj-3",
    title: "Casa Grecia",
    subtitle:
      "Residencial / Vivienda familiar — construcción de casa principal y casa de huéspedes.",
    description: `Proyecto residencial ubicado en las alturas de Cajón de Grecia, desarrollado para el propietario James, residente extranjero.
La obra consistió en la construcción de una vivienda de 700 m² que integra una casa principal de dos plantas, una casa de huéspedes independiente y un diseño estructural con amplios emboladizos y vistas panorámicas al valle.
El proyecto combinó materiales contemporáneos con detalles artesanales, priorizando amplitud, iluminación natural y confort térmico, convirtiéndose en una residencia de referencia en la zona.`,
    images: [
      "/proyects/GRECIA.jpg",
      "/proyects/GRECIA2.jpg",
      "/proyects/GRECIA3.jpg",
    ],
    tags: ["Residencial", "Casa familiar", "Casa de huéspedes", "Arquitectura contemporánea"],
  },
  {
    id: "proj-4",
    title: "Remodelación Escuela Josefina",
    subtitle:
      "Infraestructura educativa / Remodelación integral — mejoras estructurales y eléctricas.",
    description: `Proyecto de remodelación ejecutado en la Escuela Josefina López Bonilla, con un alcance total superior a 500 m² de intervención.
Las labores incluyeron reparación y sustitución de estructuras de techo, instalación de nuevas cubiertas y brazos de soporte, renovación de sistemas eléctricos, trabajos de pintura general y mejora del equipamiento institucional.
La ejecución se completó en un plazo de tres meses, garantizando la seguridad estructural, la eficiencia energética y un entorno más funcional y agradable para estudiantes y personal docente.`,
    images: [
      "/proyects/JOSEFINA.jpg",
      "/proyects/JOSEFINA2.jpg",
      "/proyects/JOSEFINA3.jpg",
    ],
    tags: ["Educación", "Remodelación", "Infraestructura", "Mantenimiento"],
  },
  // Genéricos por ahora
  {
    id: "proj-5",
    title: "Proyecto 5 — Obra Civil y Urbanismo",
    subtitle: "Obra civil / Urbanismo — movimiento de materiales y construcción.",
    description:
      "Alcance, tiempos, materiales principales, equipo involucrado y resultados. Incluye detalles de cronograma, metrados clave y aprendizajes aplicados para optimizar costo/tiempo sin comprometer calidad.",
    images: ["/images/1.jpg"],
    tags: ["Obra civil", "Urbanismo"],
  },
  {
    id: "proj-6",
    title: "Proyecto 6 — Obra Civil y Urbanismo",
    subtitle: "Obra civil / Urbanismo — movimiento de materiales y construcción.",
    description:
      "Alcance, tiempos, materiales principales, equipo involucrado y resultados. Incluye detalles de cronograma, metrados clave y aprendizajes aplicados para optimizar costo/tiempo sin comprometer calidad.",
    images: ["/images/2.jpg"],
    tags: ["Obra civil", "Urbanismo"],
  },
];

export default projects;
