export type ProjectTheme = {
  name: string;
  accent: string;
  accentSoft: string;
  accentStrong: string;
  gradient?: string;
};

export type ProjectSummary = {
  slug: string;
  title: string;
  oneLiner: string;
  role: string;
  timeframe: string;
  tech: string[];
  theme: ProjectTheme;
};

export type ProjectSection = {
  id: string;
  label: string;
  kind: 'context' | 'approach' | 'result' | 'reflection' | 'media';
  content: string | React.ReactNode;
};

export type Project = ProjectSummary & {
  sections: ProjectSection[];
  outcomes: { label: string; value: string }[];
};
