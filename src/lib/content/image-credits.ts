export interface ImageCredit {
  usedFor: string;
  title: string;
  author: string;
  source: string;
  license: string;
  licenseUrl: string;
}

/**
 * Every photo on this site (other than IBS's own logo/wordmark) is sourced
 * from Wikimedia Commons or Pexels under a free license. CC BY-SA requires
 * attribution; the Pexels License doesn't, but sourcing is recorded here for
 * transparency and surfaced on /credits either way.
 */
export const imageCredits: ImageCredit[] = [
  {
    usedFor: "Audio Video & Boardroom Solutions",
    title: "Conference Room Excluzo",
    author: "Excluzobusinesscentre",
    source: "https://commons.wikimedia.org/wiki/File:Conference_Room_Excluzo.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    usedFor: "IT Network & Infrastructure",
    title: "139 Server Room 01",
    author: "Indrajit Das",
    source: "https://commons.wikimedia.org/wiki/File:139_Server_Room_01.jpg",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  {
    usedFor: "Security Solutions",
    title: "CP Plus CCTV camera",
    author: "sharky1005",
    source: "https://commons.wikimedia.org/wiki/File:CP_Plus_CCTV_camera.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    usedFor: "Software Licenses",
    title: "Laptop computer",
    author: "Benh Lieu Song",
    source: "https://commons.wikimedia.org/wiki/File:Laptop_computer.jpeg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  },
  {
    usedFor: "Voice Communication",
    title: "IP phone in a data center room",
    author: "Pexels contributor",
    source: "https://www.pexels.com/photo/17636234/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    usedFor: "Call Center Solutions",
    title: "Dual-monitor workstation",
    author: "Pexels contributor",
    source: "https://www.pexels.com/photo/8204353/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    usedFor: "Annual Maintenance Service",
    title: "IT technician working in a data center server room",
    author: "Pexels contributor",
    source: "https://www.pexels.com/photo/37605911/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    usedFor: "Enterprises segment",
    title: "Modern office building interior",
    author: "Pexels contributor",
    source: "https://www.pexels.com/photo/260994/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    usedFor: "Hotels segment",
    title: "Modern hotel lobby interior",
    author: "Pexels contributor",
    source: "https://www.pexels.com/photo/36354489/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    usedFor: "Residential segment",
    title: "Modern living room with smart TV",
    author: "Pexels contributor",
    source: "https://www.pexels.com/photo/35490296/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    usedFor: "SOHO segment",
    title: "Home office desk setup",
    author: "Pexels contributor",
    source: "https://www.pexels.com/photo/27436633/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    usedFor: "Who We Are (homepage)",
    title: "Engineer monitoring servers in a data center",
    author: "Pexels contributor",
    source: "https://www.pexels.com/photo/1181316/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    usedFor: "Engineering Process (homepage)",
    title: "Field engineer checking electrical installation",
    author: "Pexels contributor",
    source: "https://www.pexels.com/photo/442160/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
];
