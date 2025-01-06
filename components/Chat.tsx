import React, { useState, useRef, useEffect } from 'react';
import { Loader2, Copy, Download, Trash2 } from 'lucide-react';
import { useAgentStore } from '../store';
import { chatWithAgent } from '../lib/cohere';

export function Chat() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState<number[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { agent, messages, addMessage, clearMessages, isInitialized } = useAgentStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [input]);

  if (!isInitialized) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-zinc-500 text-center">
          <p>[!] Agent not initialized</p>
          <p className="text-sm mt-2">Configure and initialize the agent first</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    addMessage(userMessage);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatWithAgent(input, agent);
      addMessage({ role: 'assistant', content: response });
    } catch (error) {
      addMessage({ 
        role: 'assistant', 
        content: 'Error. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const copyMessages = () => {
    const selectedContent = selectedMessages.length > 0
      ? selectedMessages.map(i => messages[i].content).join('\n\n')
      : messages.map(m => m.content).join('\n\n');
    navigator.clipboard.writeText(selectedContent);
  };

  const downloadChat = () => {
    const content = messages.map(m => `${m.role}: ${m.content}`).join('\n\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-${new Date().toISOString()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-zinc-800 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">Agent:</span>
          <span className="text-sm font-medium">{agent.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyMessages}
            className="p-2 hover:bg-zinc-900 rounded-lg transition-colors"
            title="Copy messages"
          >
            <Copy size={16} />
          </button>
          <button
            onClick={downloadChat}
            className="p-2 hover:bg-zinc-900 rounded-lg transition-colors"
            title="Download chat"
          >
            <Download size={16} />
          </button>
          <button
            onClick={() => {
              if (confirm('Clear all messages?')) {
                clearMessages();
                setSelectedMessages([]);
              }
            }}
            className="p-2 hover:bg-zinc-900 rounded-lg transition-colors"
            title="Clear chat"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
            onClick={() => {
              setSelectedMessages(prev => 
                prev.includes(i) 
                  ? prev.filter(x => x !== i)
                  : [...prev, i]
              );
            }}
          >
            <div
              className={`
                max-w-[80%] px-4 py-2 rounded cursor-pointer
                ${message.role === 'user'
                  ? 'bg-zinc-900 border border-zinc-800'
                  : 'bg-black border border-zinc-800'}
                ${selectedMessages.includes(i) ? 'border-white' : ''}
                hover:border-zinc-700 transition-colors
              `}
            >
              {message.role === 'assistant' && (
                <div className="flex items-center gap-2 mb-1 pb-1 border-b border-zinc-800">
                  <span className="text-xs text-zinc-500">{agent.name}</span>
                </div>
              )}
              <p className="whitespace-pre-wrap">{message.content}</p>
              <div className="mt-1 pt-1 border-t border-zinc-800 flex items-center justify-end gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(message.content);
                  }}
                  className="text-xs text-zinc-500 hover:text-white"
                >
                  copy
                </button>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-800">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-zinc-900 p-2 pr-8 border border-zinc-800 focus:border-white outline-none resize-none overflow-hidden"
              placeholder="Enter message... (Shift + Enter for new line)"
              disabled={isLoading}
              rows={1}
              style={{ minHeight: '40px' }}
            />
            {isLoading && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Loader2 size={16} className="animate-spin" />
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 bg-white text-black hover:bg-zinc-200 disabled:opacity-50 disabled:hover:bg-white transition-colors h-[38px]"
          >
            &gt;
          </button>
        </div>
      </form>
    </div>
  );
}