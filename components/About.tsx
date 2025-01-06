import React from 'react';

export function About() {
  return (
    <div className="p-6 space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-medium tracking-wide">About customized.fun</h2>
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            customized.fun is an open-source platform that lets you create and customize AI agents with unique personalities. Our mission is to make AI more accessible and personalized for everyone.
          </p>
          <p>
            Powered by advanced AI technology, our platform allows you to define every aspect of your AI assistant - from their expertise and tone to their response style and personality. Whether you need a technical mentor, a creative writing coach, or a scientific advisor, you can craft the perfect AI companion for your needs.
          </p>
          <p>
            The project is currently in beta, and we're actively developing new features and improvements. We welcome contributions from the community and encourage you to get involved through our GitHub repository.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-medium">Version</h3>
        <div className="p-3 border border-zinc-800 rounded-lg space-y-2">
          <p className="text-zinc-400">v1.0.0-beta</p>
          <p className="text-xs text-zinc-500">Released: March 2024</p>
        </div>
      </section>
    </div>
  );
}