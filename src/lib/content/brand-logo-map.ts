/**
 * Maps partner display names to their SVG file paths in /public/brands/.
 * All 46 partners have an SVG file — either from simple-icons or a generated wordmark.
 *
 * For simple-icons brands: the SVG contains the official logo path.
 * For wordmark brands: the SVG contains a styled text wordmark matching the brand's visual identity.
 */

/** slug → /brands/slug.svg */
export const brandLogoMap: Record<string, string> = {
  // AV Integration (simple-icons)
  Poly: "/brands/poly.svg",
  Cisco: "/brands/cisco.svg",
  Samsung: "/brands/samsung.svg",
  LG: "/brands/lg.svg",
  Panasonic: "/brands/panasonic.svg",
  Zoom: "/brands/zoom.svg",
  // AV Integration (wordmarks)
  Logitech: "/brands/logitech.svg",
  AVer: "/brands/aver.svg",
  Epson: "/brands/epson.svg",
  Barco: "/brands/barco.svg",
  Biamp: "/brands/biamp.svg",
  Extron: "/brands/extron.svg",
  Crestron: "/brands/crestron.svg",
  Draper: "/brands/draper.svg",
  Harman: "/brands/harman.svg",
  Kramer: "/brands/kramer.svg",
  Shure: "/brands/shure.svg",
  QSC: "/brands/qsc.svg",
  // Communication & IT (simple-icons)
  Dell: "/brands/dell.svg",
  Fortinet: "/brands/fortinet.svg",
  Netgear: "/brands/netgear.svg",
  Synology: "/brands/synology.svg",
  Matrix: "/brands/matrix.svg",
  // Communication & IT (wordmarks)
  "Alcatel-Lucent": "/brands/alcatel-lucent.svg",
  Sophos: "/brands/sophos.svg",
  CommScope: "/brands/commscope.svg",
  Systimax: "/brands/systimax.svg",
  "HP Aruba": "/brands/hp-aruba.svg",
  Ruckus: "/brands/ruckus.svg",
  "D-Link": "/brands/d-link.svg",
  APC: "/brands/apc.svg",
  Vertiv: "/brands/vertiv.svg",
  Eaton: "/brands/eaton.svg",
  APW: "/brands/apw.svg",
  // Security (wordmarks)
  Hikvision: "/brands/hikvision.svg",
  Dahua: "/brands/dahua.svg",
  Axis: "/brands/axis.svg",
  eSSL: "/brands/essl.svg",
  Cooper: "/brands/cooper.svg",
  Honeywell: "/brands/honeywell.svg",
  HID: "/brands/hid.svg",
  Notifier: "/brands/notifier.svg",
  Morley: "/brands/morley.svg",
  Pelco: "/brands/pelco.svg",
  Edwards: "/brands/edwards.svg",
};