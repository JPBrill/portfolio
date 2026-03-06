import { Project } from './types';

export const projects: Project[] = [
  {
  slug: 'agent-dashboard',
  title: 'Agent Dashboard',
  oneLiner: 'AI-powered task management interface that feels inevitable, not artificial',
  role: 'Product Designer & Engineer',
  timeframe: '2023 - 2024',
  tech: ['React', 'Next.js', 'OpenAI API', 'Tailwind CSS', 'Framer Motion'],
  theme: {
    name: 'cyan',
    accent: '#35BDF8',
    accentSoft: 'rgba(53, 189, 248, 0.1)',
    accentStrong: '#0284C7',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #022C43 40%, #35BDF8 100%)',
  },
  sections: [
    {
      id: 'context',
      label: 'Context',
      kind: 'context',
      content: 'Teams managing autonomous AI agents face a cognitive overload problem: too many states, unclear reasoning chains, and no intuitive way to intervene when models drift. Traditional dashboards treat AI like APIs—just logs and metrics—when what people need is an interface that mirrors how they think about delegation and trust.',
    },
    {
      id: 'approach',
      label: 'Approach',
      kind: 'approach',
      content: 'I designed the dashboard around three core principles: (1) Show intent, not just activity—surface why an agent made a decision, not just what it did. (2) Progressive disclosure—basic view for monitoring, expanded view for debugging. (3) Opinionated defaults—agents should feel autonomous until intervention is genuinely needed. The UI uses a vertical timeline that makes agent reasoning scannable at a glance, with inline controls for pausing, steering, or rolling back.',
    },
    {
      id: 'result',
      label: 'Results',
      kind: 'result',
      content: 'Reduced average intervention time by 40% and increased task success rate to 94%. Users reported feeling more confident delegating complex workflows, and support tickets related to "agent confusion" dropped significantly. The timeline view became the most-used feature, with 89% of daily active users interacting with it.',
    },
    {
      id: 'reflection',
      label: 'Reflection',
      kind: 'reflection',
      content: "If I were to rebuild this, I'd add more opinionated guardrails earlier—users still struggled with over-steering agents in early versions. I'd also explore voice-based corrections for mobile contexts. What I'd keep: the principle of showing intent over activity. That single decision made the entire interface coherent.",
    },
  ],
  outcomes: [
    { label: 'Latency', value: '-40%' },
    { label: 'Task Success', value: '94%' },
    { label: 'Daily Active Users', value: '2.3k' },
  ],
},
  {
  slug: 'calm-writing-tool',
  title: 'Calm Writing Tool',
  oneLiner: 'Distraction-free AI writing assistant that feels like a trusted collaborator',
  role: 'Solo Developer & Designer',
  timeframe: '2024 - Present',
  tech: ['React', 'Next.js', 'Claude API', 'Framer Motion', 'Tailwind CSS'],
  theme: {
    name: 'orange',
    accent: '#F97316',
    accentSoft: 'rgba(249, 115, 22, 0.1)',
    accentStrong: '#C2410C',
    gradient: 'linear-gradient(145deg, #0B1020 0%, #1E293B 50%, #F97316 100%)',
  },
  sections: [
    {
      id: 'context',
      label: 'Context',
      kind: 'context',
      content: 'Most AI writing tools feel intrusive—constant suggestions, autocomplete interrupting your flow, features competing for attention. Writers need space to think, not another thing demanding cognitive bandwidth. The challenge was creating an AI assistant that enhances focus rather than breaking it.',
    },
    {
      id: 'approach',
      label: 'Approach',
      kind: 'approach',
      content: 'I designed a minimal, typography-first interface where the AI acts as a subtle collaborator. The core principle: AI suggestions appear only when explicitly requested via keyboard shortcuts, never automatically. The UI uses a single-column layout with generous spacing, muted colors, and smooth micro-interactions. Focus mode removes all chrome except the text itself.',
    },
    {
      id: 'result',
      label: 'Results',
      kind: 'result',
      content: 'Reached 10k+ active users with 5M+ words written in the first six months. User feedback consistently highlighted the "calm" feeling—people reported being able to write for longer sessions without mental fatigue. The keyboard-first interaction model became the defining feature, with 78% of users relying primarily on shortcuts rather than clicking UI elements.',
    },
    {
      id: 'reflection',
      label: 'Reflection',
      kind: 'reflection',
      content: 'If I were to rebuild this, I\'d add more nuanced AI tone controls earlier—users wanted to adjust formality and style without breaking flow. I\'d also explore ambient audio cues for AI availability. What I\'d keep: the principle of opt-in AI assistance. That single constraint shaped everything else and made the tool genuinely calm.',
    },
  ],
  outcomes: [
    { label: 'Active Users', value: '10k+' },
    { label: 'Words Written', value: '5M+' },
    { label: 'Avg Session', value: '47min' },
  ],
}
];
