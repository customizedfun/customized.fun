import React, { useState } from 'react';
import { Chat } from './components/Chat';
import { Customization } from './components/Customization';
import { About } from './components/About';
import { Introduction } from './components/Introduction';
import { Twitter, Github, BookOpen, Info } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeTab, setActiveTab] = useState<'chat' | 'customize' | 'about'>('customize');

  if (showIntro) {
    return <Introduction onStart={() => setShowIntro(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white font-mono">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-wider text-center">customized.fun</h1>
        </header>

        <div className="flex gap-6">
          <div className="w-64 space-y-3">
            <button
              onClick={() => setActiveTab('customize')}
              className={`w-full p-3 text-left border ${
                activeTab === 'customize'
                  ? 'border-white bg-black'
                  : 'border-zinc-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">[*]</span>
                <span>Setup</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`w-full p-3 text-left border ${
                activeTab === 'chat'
                  ? 'border-white bg-black'
                  : 'border-zinc-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">[&gt;]</span>
                <span>Chat</span>
              </div>
            </button>

            <div className="mt-6 pt-6 border-t border-zinc-800">
              <div className="space-y-2">
                <a 
                  href="https://x.com/customizedotfun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded transition-colors"
                >
                  <Twitter size={16} />
                  <span>[Twitter]</span>
                </a>
                <a 
                  href="https://github.com/customizedfun/customized.fun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded transition-colors"
                >
                  <Github size={16} />
                  <span>[Github]</span>
                </a>
                <a 
                  href="https://customized-fun.gitbook.io/customized.fun/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded transition-colors"
                >
                  <BookOpen size={16} />
                  <span>[Docs]</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-800">
              <button
                onClick={() => setActiveTab('about')}
                className={`w-full p-2 text-left flex items-center gap-2 ${
                  activeTab === 'about'
                    ? 'text-white bg-black'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                } rounded transition-colors`}
              >
                <Info size={16} />
                <span>[About]</span>
              </button>
            </div>
          </div>

          <div className="flex-1 border border-zinc-800 bg-black">
            <div className="border-b border-zinc-800 p-3">
              <h2 className="text-sm tracking-wider">
                {activeTab === 'customize' ? 'SETTINGS' : activeTab === 'chat' ? 'CHAT' : 'ABOUT'}
              </h2>
            </div>
            <div className="min-h-[600px]">
              {activeTab === 'customize' ? <Customization /> : 
               activeTab === 'chat' ? <Chat /> : 
               <About />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}