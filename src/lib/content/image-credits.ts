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
 * from Wikimedia Commons under a free license. CC BY-SA requires attribution,
 * so it's recorded here and surfaced on /credits.
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
];
