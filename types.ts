export interface Agent {
  name: string;
  personality: string;
  systemPrompt: string;
  tone: string;
  expertise: string[];
  language: string;
  responseLength: 'concise' | 'balanced' | 'detailed';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}