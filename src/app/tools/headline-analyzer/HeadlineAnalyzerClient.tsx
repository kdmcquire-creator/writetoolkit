'use client';

import React, { useState } from 'react';

export default function HeadlineAnalyzerClient() {
  const [headline, setHeadline] = useState('');
  const [stats, setStats] = useState<{
    score: number;
    sentiment: string;
    wordCount: number;
    charCount: number;
    powerWords: string[];
  } | null>(null);

  const analyze = () => {
    const text = headline.trim();
    if (!text) return;

    const words = text.toLowerCase().split(/\s+/);
    const powerWordsList = ['how', 'why', 'free', 'new', 'secret', 'best', 'guide', 'proven', 'easy', 'simple', 'fast', 'smart'];
    const foundPowerWords = words.filter(w => powerWordsList.includes(w));
    
    let score = 0;
    
    // Length score (optimal is 6-12 words)
    if (words.length >= 6 && words.length <= 12) score += 40;
    else if (words.length > 0) score += 20;

    // Power words score
    score += Math.min(foundPowerWords.length * 15, 40);

    // Title Case check
    const isTitleCase = text.split(' ').every(w => w.length > 0 && w[0] === w[0].toUpperCase());
    if (isTitleCase) score += 20;

    setStats({
      score: Math.min(100, score),
      sentiment: text.includes('!') || text.includes('?') ? 'Dynamic' : 'Neutral',
      wordCount: words.length,
      charCount: text.length,
      powerWords: foundPowerWords
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Headline Analyzer</h1>
      <p className="text-gray-600 mb-8">
        Test your headlines for clarity, emotional impact, and searchability.
      </p>

      <div className="bg-white border border-border rounded-xl p-6 shadow-sm mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            className="flex-1 px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-brand focus:border-brand outline-none text-lg"
            placeholder="Enter your headline here..."
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && analyze()}
          />
          <button
            onClick={analyze}
            className="px-8 py-3 bg-brand text-white font-bold rounded-md hover:bg-navy transition-colors"
          >
            Analyze
          </button>
        </div>
      </div>

      {stats && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-brand mb-1">{stats.score}</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Overall Score</div>
            </div>
            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <div className="text-xl font-bold text-gray-900 mb-1">{stats.sentiment}</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Sentiment</div>
            </div>
            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <div className="text-xl font-bold text-gray-900 mb-1">{stats.wordCount}</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Words</div>
            </div>
            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <div className="text-xl font-bold text-gray-900 mb-1">{stats.charCount}</div>
              <div className="text-xs text-gray-500 uppercase font-bold">Characters</div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-navy">Analysis Details</h3>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Power Words Found</div>
                <div className="flex flex-wrap gap-2">
                  {stats.powerWords.length > 0 ? (
                    stats.powerWords.map((word, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100">
                        {word.toUpperCase()}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-gray-400 italic">No power words detected. Try adding words like "best", "how", or "free".</span>
                  )}
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <div className="text-sm font-semibold text-gray-700 mb-2">Structure Recommendation</div>
                <p className="text-gray-600">
                  {stats.wordCount < 6 ? 'Your headline is a bit short. Aim for at least 6 words to provide more context.' : 
                   stats.wordCount > 12 ? 'Your headline is quite long. Consider shortening it to under 12 words for better readability.' :
                   'Your headline length is optimal for engagement!'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 prose max-w-none text-gray-600">
        <h3>What makes a great headline?</h3>
        <p>
          A powerful headline grabs attention, creates curiosity, and promises value. 
          Use numbers, power words, and keep your most important keywords near the beginning.
        </p>
      </div>
    </div>
  );
}
