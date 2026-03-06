import { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'agent-dashboard',
    title: 'Agent Dashboard',
    oneLiner: 'AI-powered task management interface',
    role: 'Product Designer & Engineer',
    timeframe: '2023',
    tech: ['React', 'Next.js', 'OpenAI API', 'Tailwind CSS'],
    theme: {
      name: 'cyan',
      accent: '#35BDF8',
      accentSoft: 'rgba(53, 189, 248, 0.1)',
      accentStrong: '#0284C7',
    },
    sections: [
      {
        id: 'context',
        label: 'Context',
        kind: 'context',
        content: 'Building an interface that allows users to manage autonomous AI agents effectively without feeling overwhelmed by the complexity of the underlying models.',
      },
    ],
    outcomes: [
      { label: 'Latency', value: '-40%' },
      { label: 'Task Success', value: '94%' },
    ],
  },
  {
    slug: 'calm-writing-tool',
    title: 'Calm Writing Tool',
    oneLiner: 'Distraction-free AI writing assistant',
    role: 'Solo Developer',
    timeframe: '2024',
    tech: ['React', 'Claude API', 'Framer Motion'],
    theme: {
      name: 'orange',
      accent: '#F97316',
      accentSoft: 'rgba(249, 115, 22, 0.1)',
      accentStrong: '#C2410C',
    },
    sections: [
      {
        id: 'approach',
        label: 'Approach',
        kind: 'approach',
        content: 'Designed a minimal, typography-first interface where the AI acts as a subtle collaborator rather than an intrusive autocomplete.',
      },
    ],
    outcomes: [
      { label: 'Active Users', value: '10k+' },
      { label: 'Words Written', value: '5M+' },
    ],
  },
];
