import React, { useState } from 'react';
import { useAgentStore } from '../store';
import { Trash, CheckCircle2 } from 'lucide-react';

const EXPERTISE_OPTIONS = [
  'Technology', 'Science', 'Business', 'Arts', 'Philosophy', 'History',
  'Mathematics', 'Medicine', 'Law', 'Engineering', 'Literature', 'Psychology'
];

const TONE_OPTIONS = [
  'Professional', 'Friendly', 'Academic', 'Casual', 'Technical',
  'Humorous', 'Formal', 'Empathetic', 'Direct', 'Socratic'
];

const PRESET_TEMPLATES = [
  {
    name: "Tech Mentor",
    personality: "Patient and knowledgeable technology mentor who explains complex concepts clearly",
    systemPrompt: "You are a tech mentor helping users understand technology concepts. Break down complex ideas into simple explanations.",
    expertise: ["Technology", "Engineering"],
    tone: "friendly",
    responseLength: "balanced"
  },
  {
    name: "Scientific Advisor",
    personality: "Precise and analytical scientific advisor who provides evidence-based insights",
    systemPrompt: "You are a scientific advisor providing accurate, research-based information. Always cite sources when possible.",
    expertise: ["Science", "Mathematics"],
    tone: "academic",
    responseLength: "detailed"
  },
  {
    name: "Business Consultant",
    personality: "Strategic business consultant with practical industry experience",
    systemPrompt: "You are a business consultant offering practical advice and strategic insights based on real-world business experience.",
    expertise: ["Business", "Psychology"],
    tone: "professional",
    responseLength: "concise"
  },
  {
    name: "Creative Writing Coach",
    personality: "Imaginative and encouraging writing mentor who nurtures creativity",
    systemPrompt: "You are a creative writing coach helping writers develop their craft. Provide constructive feedback and inspire creativity.",
    expertise: ["Literature", "Arts"],
    tone: "empathetic",
    responseLength: "detailed"
  },
  {
    name: "Philosophy Guide",
    personality: "Thought-provoking philosophical guide who encourages critical thinking",
    systemPrompt: "You are a philosophical guide helping users explore deep questions and develop critical thinking skills through Socratic dialogue.",
    expertise: ["Philosophy", "History"],
    tone: "socratic",
    responseLength: "balanced"
  },
  {
    name: "Medical Educator",
    personality: "Clear and precise medical educator who explains health concepts accessibly",
    systemPrompt: "You are a medical educator helping users understand health and medical concepts. Explain complex topics in accessible terms while maintaining accuracy.",
    expertise: ["Medicine", "Science"],
    tone: "professional",
    responseLength: "balanced"
  }
];

export function Customization() {
  const { agent, setAgent, initializeAgent, isInitialized } = useAgentStore();
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('templates');
  const [savedTemplates, setSavedTemplates] = useState(() => {
    const saved = localStorage.getItem('agentTemplates');
    return saved ? JSON.parse(saved) : [];
  });

  const validateAndCreateAgent = () => {
    if (!agent.name.trim()) {
      setError('Name required');
      return;
    }
    if (!agent.personality.trim()) {
      setError('Personality required');
      return;
    }
    if (!agent.systemPrompt.trim()) {
      setError('Instructions required');
      return;
    }
    if (agent.expertise.length === 0) {
      setError('Select at least one expertise');
      return;
    }
    setError('');
    initializeAgent();
  };

  const loadTemplate = (template: typeof PRESET_TEMPLATES[0]) => {
    setAgent({
      ...agent,
      ...template,
      language: 'english' // Ensure language is set
    });
    setActiveSection('personality');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {error && (
        <div className="text-red-500 mb-4 p-3 border border-red-800 bg-red-950/20 rounded-lg">
          [!] {error}
        </div>
      )}

      {isInitialized && (
        <div className="text-green-500 mb-4 p-3 border border-green-800 bg-green-950/20 rounded-lg flex items-center gap-2">
          <CheckCircle2 size={16} />
          <span>Agent initialized successfully! You can now switch to the Chat tab.</span>
        </div>
      )}

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveSection('templates')}
          className={`px-4 py-2 ${
            activeSection === 'templates' 
              ? 'bg-white text-black' 
              : 'border border-zinc-800 hover:bg-zinc-900/50'
          }`}
        >
          Templates
        </button>
        <button
          onClick={() => setActiveSection('personality')}
          className={`px-4 py-2 ${
            activeSection === 'personality' 
              ? 'bg-white text-black' 
              : 'border border-zinc-800 hover:bg-zinc-900/50'
          }`}
        >
          Personality
        </button>
        <button
          onClick={() => setActiveSection('communication')}
          className={`px-4 py-2 ${
            activeSection === 'communication' 
              ? 'bg-white text-black' 
              : 'border border-zinc-800 hover:bg-zinc-900/50'
          }`}
        >
          Communication
        </button>
      </div>

      {activeSection === 'templates' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {PRESET_TEMPLATES.map((template) => (
            <button
              key={template.name}
              onClick={() => loadTemplate(template)}
              className="p-4 border border-zinc-800 hover:bg-zinc-900 text-left transition-colors rounded-lg"
            >
              <h4 className="font-medium mb-2">{template.name}</h4>
              <p className="text-sm text-zinc-400 mb-2">{template.personality}</p>
              <div className="flex flex-wrap gap-2">
                {template.expertise.map(exp => (
                  <span key={exp} className="text-xs px-2 py-1 bg-zinc-800 rounded">
                    {exp}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      )}

      {activeSection === 'personality' && (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm">Agent Name</label>
            <input
              type="text"
              value={agent.name}
              onChange={(e) => setAgent({ ...agent, name: e.target.value })}
              className="w-full bg-zinc-900 p-2 border border-zinc-800 focus:border-white outline-none"
              placeholder="Enter name..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm">Personality</label>
            <textarea
              value={agent.personality}
              onChange={(e) => setAgent({ ...agent, personality: e.target.value })}
              className="w-full bg-zinc-900 p-2 border border-zinc-800 focus:border-white outline-none h-24"
              placeholder="Define personality..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm">System Instructions</label>
            <textarea
              value={agent.systemPrompt}
              onChange={(e) => setAgent({ ...agent, systemPrompt: e.target.value })}
              className="w-full bg-zinc-900 p-2 border border-zinc-800 focus:border-white outline-none h-24"
              placeholder="Define behavior and knowledge..."
            />
          </div>
        </div>
      )}

      {activeSection === 'communication' && (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm">Areas of Expertise</label>
            <div className="grid grid-cols-3 gap-2 border border-zinc-800 p-2">
              {EXPERTISE_OPTIONS.map((exp) => (
                <label key={exp} className="flex items-center space-x-2 p-2 hover:bg-zinc-900">
                  <input
                    type="checkbox"
                    checked={agent.expertise.includes(exp)}
                    onChange={(e) => {
                      const newExpertise = e.target.checked
                        ? [...agent.expertise, exp]
                        : agent.expertise.filter(x => x !== exp);
                      setAgent({ ...agent, expertise: newExpertise });
                    }}
                  />
                  <span>{exp}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm">Communication Tone</label>
            <select
              value={agent.tone}
              onChange={(e) => setAgent({ ...agent, tone: e.target.value })}
              className="w-full bg-zinc-900 p-2 border border-zinc-800 focus:border-white outline-none"
            >
              {TONE_OPTIONS.map((tone) => (
                <option key={tone} value={tone.toLowerCase()}>
                  {tone}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm">Response Length</label>
            <select
              value={agent.responseLength}
              onChange={(e) => setAgent({ 
                ...agent, 
                responseLength: e.target.value as 'concise' | 'balanced' | 'detailed' 
              })}
              className="w-full bg-zinc-900 p-2 border border-zinc-800 focus:border-white outline-none"
            >
              <option value="concise">Concise</option>
              <option value="balanced">Balanced</option>
              <option value="detailed">Detailed</option>
            </select>
          </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-zinc-800">
        <button
          onClick={validateAndCreateAgent}
          className="px-4 py-2 bg-white text-black hover:bg-zinc-200 transition-colors"
        >
          Initialize Agent
        </button>
      </div>
    </div>
  );
}