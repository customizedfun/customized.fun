import React, { useState } from 'react';

export function Introduction({ onStart }: { onStart: () => void }) {
  const [activeTab, setActiveTab] = useState<'intro' | 'guide' | 'tips'>('intro');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-mono">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-wider text-center">customized.fun</h1>
        </header>

        <div className="flex gap-6">
          <div className="w-64 space-y-3">
            <button
              onClick={() => setActiveTab('intro')}
              className={`w-full p-3 text-left border ${
                activeTab === 'intro' ? 'border-white bg-black' : 'border-zinc-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">[*]</span>
                <span>Introduction</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`w-full p-3 text-left border ${
                activeTab === 'guide' ? 'border-white bg-black' : 'border-zinc-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">[?]</span>
                <span>Guide</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`w-full p-3 text-left border ${
                activeTab === 'tips' ? 'border-white bg-black' : 'border-zinc-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">[+]</span>
                <span>Tips</span>
              </div>
            </button>
          </div>

          <div className="flex-1 border border-zinc-800 bg-black">
            <div className="border-b border-zinc-800 p-3">
              <h2 className="text-sm tracking-wider">
                {activeTab === 'intro' ? 'WELCOME' : 
                 activeTab === 'guide' ? 'USER GUIDE' : 'PRO TIPS'}
              </h2>
            </div>
            
            {activeTab === 'intro' ? (
              <div className="p-6 space-y-8">
                <section className="space-y-4">
                  <h3 className="text-xl font-medium">Welcome to customized.fun</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Your platform for creating personalized AI agents with unique personalities, expertise, and behaviors. Design your perfect AI companion for any task or conversation.
                  </p>
                </section>

                <section className="space-y-4">
                  <div className="text-sm text-zinc-500">ABOUT</div>
                  <div className="space-y-4 text-zinc-300">
                    <p className="border-l-2 border-zinc-800 pl-4">
                      customized.fun is an open-source project that puts you in control of your AI interactions. Create agents tailored to your specific needs, from technical mentors to creative writing coaches.
                    </p>
                    <p className="border-l-2 border-zinc-800 pl-4">
                      Built with advanced AI technology, our platform offers precise control over every aspect of your agent's behavior while maintaining natural, engaging conversations.
                    </p>
                  </div>
                </section>

                <section>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border border-zinc-800 p-4">
                      <div className="text-sm text-zinc-500 mb-2">Features</div>
                      <p className="text-zinc-300">Customizable personalities, expertise domains, and communication styles</p>
                    </div>
                    <div className="border border-zinc-800 p-4">
                      <div className="text-sm text-zinc-500 mb-2">Templates</div>
                      <p className="text-zinc-300">Pre-configured agents for common use cases</p>
                    </div>
                    <div className="border border-zinc-800 p-4">
                      <div className="text-sm text-zinc-500 mb-2">Open Source</div>
                      <p className="text-zinc-300">Community-driven development and improvements</p>
                    </div>
                  </div>
                </section>
              </div>
            ) : activeTab === 'guide' ? (
              <div className="p-6 space-y-8">
                <section className="space-y-4">
                  <div className="text-sm text-zinc-500">TEMPLATES</div>
                  <div className="space-y-2 text-zinc-300">
                    <p className="border-l border-zinc-800 pl-4">
                      Browse pre-configured agents for different use cases
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Modify templates to suit your specific needs
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <div className="text-sm text-zinc-500">CUSTOMIZATION</div>
                  <div className="space-y-2 text-zinc-300">
                    <p className="border-l border-zinc-800 pl-4">
                      Define agent personality and behavioral traits
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Select areas of expertise from multiple domains
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Set communication style and response length preferences
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <div className="text-sm text-zinc-500">CHAT INTERFACE</div>
                  <div className="space-y-2 text-zinc-300">
                    <p className="border-l border-zinc-800 pl-4">
                      Engage in natural conversations with your agent
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Copy or download chat history for reference
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Select specific messages for focused interactions
                    </p>
                  </div>
                </section>
              </div>
            ) : (
              <div className="p-6 space-y-8">
                <section className="space-y-4">
                  <div className="text-sm text-zinc-500">AGENT CREATION</div>
                  <div className="space-y-2 text-zinc-300">
                    <p className="border-l border-zinc-800 pl-4">
                      Be specific with personality traits to get more consistent responses
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Combine complementary areas of expertise for versatile agents
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Test your agent with various questions before finalizing settings
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <div className="text-sm text-zinc-500">EFFECTIVE COMMUNICATION</div>
                  <div className="space-y-2 text-zinc-300">
                    <p className="border-l border-zinc-800 pl-4">
                      Use clear, specific questions to get better responses
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Break down complex queries into smaller parts
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Provide context when switching between topics
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <div className="text-sm text-zinc-500">OPTIMIZATION</div>
                  <div className="space-y-2 text-zinc-300">
                    <p className="border-l border-zinc-800 pl-4">
                      Adjust response length based on the complexity of your queries
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Save successful conversations for reference
                    </p>
                    <p className="border-l border-zinc-800 pl-4">
                      Regularly refine agent settings based on interaction results
                    </p>
                  </div>
                </section>
              </div>
            )}

            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-zinc-800">
                <button
                  onClick={onStart}
                  className="px-4 py-2 bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  Initialize System
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}