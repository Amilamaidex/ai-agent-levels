export interface Level {
  level: number;
  title: string;
  techniques: string;
  performance: string;
  capabilities: string;
  characteristics: string;
  useCases: string;
  narrowDomain: string;
  generalDomain: string;
}

export interface LevelDetail {
  description: string;
  keyFeatures: string[];
  applications: string[];
  limitations: string[];
}

export type LanguageCode = 'en' | 'fr';
