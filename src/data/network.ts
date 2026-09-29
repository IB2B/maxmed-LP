/**
 * MaxMed network figures shown in the "Across Italy" section.
 *
 * ⚠️ SAMPLE DATA: replace every number below with real figures, then set
 * IS_SAMPLE to false. While it's true, the page shows a "Sample data" tag.
 */
export const IS_SAMPLE = true;

/** Labels are in the dictionaries (network.stats), in this order. */
export const networkStats = [
  { value: "120+", icon: "hospital" },
  { value: "85", icon: "health-worker" },
  { value: "9,400", icon: "video-camera" },
];

/** Cities with MaxMed facilities. `facilities` is shown on hover; `label` shows the name always. */
export const networkCities = [
  // North
  { name: "Milano", lat: 45.4642, lng: 9.19, facilities: 24, label: true },
  { name: "Torino", lat: 45.0703, lng: 7.6869, facilities: 9 },
  { name: "Aosta", lat: 45.7372, lng: 7.3206, facilities: 1 },
  { name: "Como", lat: 45.8081, lng: 9.0852, facilities: 3 },
  { name: "Bergamo", lat: 45.6983, lng: 9.6773, facilities: 4 },
  { name: "Brescia", lat: 45.5416, lng: 10.2118, facilities: 4 },
  { name: "Verona", lat: 45.4384, lng: 10.9916, facilities: 5 },
  { name: "Trento", lat: 46.0748, lng: 11.1217, facilities: 2 },
  { name: "Bolzano", lat: 46.4983, lng: 11.3548, facilities: 2 },
  { name: "Padova", lat: 45.4064, lng: 11.8768, facilities: 4 },
  { name: "Venezia", lat: 45.4408, lng: 12.3155, facilities: 6 },
  { name: "Udine", lat: 46.0711, lng: 13.2346, facilities: 2 },
  { name: "Trieste", lat: 45.6495, lng: 13.7768, facilities: 3 },
  { name: "Genova", lat: 44.4056, lng: 8.9463, facilities: 5 },
  { name: "Parma", lat: 44.8015, lng: 10.3279, facilities: 3 },
  { name: "Bologna", lat: 44.4949, lng: 11.3426, facilities: 11 },
  { name: "Rimini", lat: 44.0678, lng: 12.5695, facilities: 2 },
  // Centre
  { name: "Firenze", lat: 43.7696, lng: 11.2558, facilities: 8 },
  { name: "Pisa", lat: 43.7228, lng: 10.4017, facilities: 3 },
  { name: "Siena", lat: 43.3188, lng: 11.3308, facilities: 2 },
  { name: "Perugia", lat: 43.1107, lng: 12.3908, facilities: 3 },
  { name: "Ancona", lat: 43.6158, lng: 13.5189, facilities: 3 },
  { name: "Pescara", lat: 42.4618, lng: 14.2161, facilities: 2 },
  { name: "Roma", lat: 41.9028, lng: 12.4964, facilities: 19, label: true },
  { name: "Latina", lat: 41.4676, lng: 12.9037, facilities: 2 },
  // South and islands
  { name: "Napoli", lat: 40.8518, lng: 14.2681, facilities: 14, label: true },
  { name: "Salerno", lat: 40.6824, lng: 14.7681, facilities: 3 },
  { name: "Foggia", lat: 41.4622, lng: 15.5446, facilities: 2 },
  { name: "Bari", lat: 41.1171, lng: 16.8719, facilities: 7 },
  { name: "Lecce", lat: 40.3515, lng: 18.175, facilities: 3 },
  { name: "Potenza", lat: 40.6401, lng: 15.8056, facilities: 1 },
  { name: "Cosenza", lat: 39.2983, lng: 16.2537, facilities: 2 },
  { name: "Reggio Calabria", lat: 38.1113, lng: 15.6473, facilities: 3 },
  { name: "Palermo", lat: 38.1157, lng: 13.3615, facilities: 8 },
  { name: "Catania", lat: 37.5079, lng: 15.083, facilities: 6 },
  { name: "Siracusa", lat: 37.0755, lng: 15.2866, facilities: 2 },
  { name: "Cagliari", lat: 39.2238, lng: 9.1217, facilities: 3 },
  { name: "Sassari", lat: 40.7259, lng: 8.5557, facilities: 2 },
];
