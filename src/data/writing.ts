export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
}

const data: WritingItem[] = [
  {
    title:
      "McKinsey's Lilli Looks More Like an API Security Failure Than a Model Jailbreak",
    url: 'https://www.promptfoo.dev/blog/mckinsey-lilli-appsec-vs-ai-jailbreak/',
    date: '2026-03-10',
    description:
      'Why the reported Lilli incident looks like an application-security chain reaching an AI system, not a model jailbreak.',
  },
];

export default data;
