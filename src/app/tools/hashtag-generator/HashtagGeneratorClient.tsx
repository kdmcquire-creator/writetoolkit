'use client';

import React, { useState } from 'react';

const HASHTAG_MAP: Record<string, string[]> = {
  'marketing': ['#digitalmarketing', '#branding', '#business', '#socialmedia', '#strategy', '#contentmarketing'],
  'tech': ['#technology', '#innovation', '#ai', '#software', '#coding', '#future'],
  'fitness': ['#workout', '#health', '#gym', '#motivation', '#fitnessmotivation', '#lifestyle'],
  'food': ['#cooking', '#recipe', '#yummy', '#instafood', '#foodie', '#dinner'],
  'travel': ['#adventure', '#explore', '#nature', '#travelgram', '#wanderlust', '#photography'],
  'business': ['#startup', '#entrepreneur', '#success', '#mindset', '#leadership', '#growth'],
  'design': ['#ux', '#ui', '#creative', '#graphicdesign', '#webdesign', '#art']
};

export default function HashtagGeneratorClient() {
  const [input, setInput] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generateHashtags = () => {
    const words = input.toLowerCase().split(/[,\s]+/);
    const results = new Set<string>();
    
    words.forEach(word => {
      if (HASHTAG_MAP[word]) {
        HASHTAG_MAP[word].forEach(tag => results.add(tag));
      } else if (word.length > 2) {
        results.add(`#${word.replace(/[^a-z0-9]/g, '')}`);
      }
    });

    if (results.size === 0) {
      ['#trending', '#viral', '#explore', '#content', '#post'].forEach(tag => results.add(tag));
    }

    setHashtags(Array.from(results).slice(0, 30));
  };

  const handleCopy = () => {
    if (hashtags.length === 0) return;
    navigator.clipboard.writeText(hashtags.join(' '));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Hashtag Generator</h1>
      <p className="text-gray-600 mb-8">
        Enter keywords or a description to generate relevant hashtags for social media.
      </p>

      <div className="bg-white border border-border rounded-xl p-6 shadow-sm mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            className="flex-1 px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-brand focus:border-brand outline-none"
            placeholder="e.g. digital marketing, tech, startup"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateHashtags()}
          />
          <button
            onClick={generateHashtags}
            className="px-8 py-3 bg-brand text-white font-bold rounded-md hover:bg-navy transition-colors"
          >
            Generate
          </button>
        </div>
      </div>

      {hashtags.length > 0 && (
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-8">
              {hashtags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-blue-50 text-brand rounded-full text-sm font-medium border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={handleCopy}
              className={`w-full py-3 rounded-lg font-bold transition-all ${
                copied 
                ? 'bg-green-600 text-white' 
                : 'bg-navy text-white hover:bg-brand shadow-md'
              }`}
            >
              {copied ? 'Copied All Hashtags!' : 'Copy All'}
            </button>
          </div>
          <div className="bg-gray-50 px-8 py-4 border-t border-border flex justify-between text-xs text-gray-500">
            <span>{hashtags.length} hashtags generated</span>
            <span>Optimized for Instagram, TikTok, and X</span>
          </div>
        </div>
      )}

      <div className="mt-12 prose max-w-none text-gray-600">
        <h3>Hashtag Best Practices</h3>
        <ul>
          <li><strong>Quality over quantity:</strong> While 30 is the limit on some platforms, 5-10 highly relevant tags often perform better.</li>
          <li><strong>Mix sizes:</strong> Use a mix of broad tags (millions of posts) and niche tags (thousands of posts).</li>
          <li><strong>Stay relevant:</strong> Only use tags that actually relate to your content to avoid being flagged as spam.</li>
        </ul>
      </div>
    </div>
  );
}
