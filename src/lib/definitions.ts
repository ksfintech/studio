export type Agent = {
  id: string;
  name: string;
  description: string;
  category: string[];
  accomplishment: string;
  features: string[];
  company: string;
  websiteUrl: string;
  logoUrl?: string;
  pricing?: 'free' | 'free+paid' | 'paid'; // 'free' = only free, 'free+paid' = has premium, 'paid' = only paid
  useCases?: string[]; // Highlighted use cases for the agent
};

export type Insight = {
  id: string;
  title: string;
  summary: string;
  content: string;
};
