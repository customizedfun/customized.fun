import { create } from 'zustand';
import { Agent, Message } from './types';

interface AgentStore {
  agent: Agent;
  messages: Message[];
  isInitialized: boolean;
  setAgent: (agent: Agent) => void;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  initializeAgent: () => void;
}

export const useAgentStore = create<AgentStore>((set) => ({
  agent: {
    name: '',
    personality: '',
    systemPrompt: '',
    tone: 'neutral',
    expertise: [],
    language: 'english',
    responseLength: 'balanced'
  },
  messages: [],
  isInitialized: false,
  setAgent: (agent) => set({ agent }),
  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message]
  })),
  clearMessages: () => set({ messages: [] }),
  initializeAgent: () => set({ isInitialized: true })
}));