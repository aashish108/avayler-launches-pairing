export interface Launches {
  fairings: Fairings | null;
  links: Links;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  net: boolean;
  window: number | null;
  rocket: Rocket;
  success: boolean | null;
  failures: Failure[];
  details: null | string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: Launchpad;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: DatePrecision;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: null | string;
  id: string;
}

export interface Core {
  core: null | string;
  flight: number | null;
  gridfins: boolean | null;
  legs: boolean | null;
  reused: boolean | null;
  landing_attempt: boolean | null;
  landing_success: boolean | null;
  landing_type: LandingType | null;
  landpad: Landpad | null;
}

export type LandingType = 'Ocean' | 'ASDS' | 'RTLS';

export type Landpad = string;

export type DatePrecision = 'hour' | 'day' | 'month';

export interface Failure {
  time: number;
  altitude: number | null;
  reason: string;
}

export interface Fairings {
  reused: boolean | null;
  recovery_attempt: boolean | null;
  recovered: boolean | null;
  ships: string[];
}

export type Launchpad = string | null;

export interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: null | string;
  webcast: null | string;
  youtube_id: null | string;
  article: null | string;
  wikipedia: null | string;
}

export interface Flickr {
  small: any[];
  original: string[];
}

export interface Patch {
  small: null | string;
  large: null | string;
}

export interface Reddit {
  campaign: null | string;
  launch: null | string;
  media: null | string;
  recovery: null | string;
}

export type Rocket = string | null;
