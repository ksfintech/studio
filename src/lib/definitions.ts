export type Tool = {
  id: string;
  name: string;
  description: string;
  category: string[];
  accomplishment: string;
  features: string[];
  company: string;
  websiteUrl: string;
  logoUrl?: string;
};

export type Insight = {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
};
