export type SocialLinks = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
};

export type BusinessConfig = {
  name: string;
  domain: string;      // https://carguesa.com
  phone: string;       // +50660161790
  email: string;       // CESARCARGUE@HOTMAIL.COM
  address: {
    locality: string;  // Santa Cruz
    region: string;    // Guanacaste
    country: string;   // CR
  };
  hours: string;       // Schema-style: Mo-Su 00:00-23:59 (24/7)
  logoPath: string;    // /images/logo.jpg
  ogImagePath?: string;// /images/1.jpg
  whatsapp?: string;   // https://wa.me/50660161790
  socials: SocialLinks;
  services: string[];
  serviceAreas: string[];   // “toda Costa Rica”
  routesForSitemap: string[];
};

export const SITE: BusinessConfig = {
  name: "Cargue S.A",
  domain: "https://carguesa.com",
  phone: "+50660161790",
  email: "CESARCARGUE@HOTMAIL.COM",
  address: {
    locality: "Santa Cruz",
    region: "Guanacaste",
    country: "CR",
  },
  hours: "Mo-Su 00:00-23:59",          // “cualquier horario de atención” → 24/7
  logoPath: "/images/logo.jpg",
  ogImagePath: "/images/1.jpg",
  whatsapp: "https://wa.me/50660161790",
  socials: {
    facebook: "https://www.facebook.com/share/17E2cKtRX5", // si luego tienes URL pública del perfil, mejor cámbiala aquí
  },
  services: ["Construcción", "Mantenimiento"],
  serviceAreas: ["Toda Costa Rica"],
  routesForSitemap: ["/", "/servicios", "/proyectos", "/nosotros", "/contacto"],
};
