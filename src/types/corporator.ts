/** Shared types for prabhag / corporator data (2025 delimitation). */

export interface Prabhag {
  no: string;
  population: number;
  sc: number;
  st: number;
  seats: number;
  localities: string[];
}

export interface Corporator {
  seat: "A" | "B" | "C" | "D" | string;
  nameEn: string;
  nameMr: string;
  phones: string[];
  addressEn: string;
  addressMr: string;
  email?: string;
  photo?: string;
}

/** API-shaped response — swap fetch target when a backend is added. */
export interface CorporatorSearchResult {
  prabhagNumber: string;
  wardNumber: string | null;
  population: number;
  seats: number;
  matchedLocality?: string;
  corporators: Corporator[];
  localities: string[];
  prabhag: Prabhag;
}

/** Extend when adding ward / GIS / geolocation search. */
export type CorporatorSearchMethod = "prabhag" | "locality";

export interface LocalitySuggestion {
  name: string;
  prabhagNumber: string;
}
