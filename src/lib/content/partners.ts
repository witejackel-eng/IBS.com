import type { Partner } from "./types";

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function group(names: string[], category: Partner["category"]): Partner[] {
  return names.map((name) => ({ name, slug: slugify(name), category }));
}

/**
 * OEM partner roster as listed on ibsinfra.com/brand-we-deal.php, grouped
 * under the site's own three headings. Cisco appears in both AV and
 * Communication & IT source sections, so it is listed in both here too.
 */
export const partners: Partner[] = [
  ...group(
    [
      "Poly",
      "Cisco",
      "Logitech",
      "AVer",
      "Epson",
      "Zoom",
      "Barco",
      "Biamp",
      "Extron",
      "Crestron",
      "Samsung",
      "LG",
      "Panasonic",
      "Draper",
      "Harman",
      "Kramer",
      "Shure",
      "QSC",
    ],
    "av-integration"
  ),
  ...group(
    [
      "Alcatel-Lucent",
      "Cisco",
      "Sophos",
      "Matrix",
      "CommScope",
      "Systimax",
      "Dell",
      "HP Aruba",
      "Ruckus",
      "D-Link",
      "Netgear",
      "APC",
      "Vertiv",
      "Eaton",
      "Fortinet",
      "Synology",
      "APW",
    ],
    "communication-it"
  ),
  ...group(
    [
      "Hikvision",
      "Dahua",
      "Axis",
      "eSSL",
      "Cooper",
      "Honeywell",
      "HID",
      "Notifier",
      "Morley",
      "Pelco",
      "Edwards",
    ],
    "security"
  ),
];

export const partnerCategories = [
  { key: "av-integration", label: "Audio / Video Integration Partners" },
  { key: "communication-it", label: "Communication & IT Partners" },
  { key: "security", label: "Security Partners" },
] as const;
