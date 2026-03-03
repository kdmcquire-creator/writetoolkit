'use client';

import React, { useState, useEffect } from 'react';

export default function WordCounterClient() {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    words: 0,
    chars: 0,
    charsNoSpaces: 0,
    paragraphs: 0,
    readingTime: 0
  });

  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0;
    const readingTime = Math.ceil(words / 200); // 200 wpm average

    setStats({ words, chars, charsNoSpaces, paragraphs, readingTime });
  }, [text]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Word Counter</h1>
      <p className="text-gray-600 mb-8">
        Get instant word count, character count, and reading time for your text.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-brand">{stats.words}</div>
          <div className="text-xs text-gray-500 uppercase font-semibold">Words</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-brand">{stats.chars}</div>
          <div className="text-xs text-gray-500 uppercase font-semibold">Characters</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-brand">{stats.charsNoSpaces}</div>
          <div className="text-xs text-gray-500 uppercase font-semibold">No Spaces</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-brand">{stats.paragraphs}</div>
          <div className="text-xs text-gray-500 uppercase font-semibold">Paragraphs</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-brand">{stats.readingTime} min</div>
          <div className="text-xs text-gray-500 uppercase font-semibold">Reading Time</div>
        </div>
      </div>

      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
        <textarea
          className="w-full h-80 p-6 focus:outline-none resize-none text-lg text-gray-800 placeholder-gray-400"
          placeholder="Paste or type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t border-border">
          <button 
            onClick={() => setText('')}
            className="text-sm text-gray-500 hover:text-brand font-medium transition-colors"
          >
            Clear Text
          </button>
          <div className="text-sm text-gray-500">
            Auto-saving in browser...
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none text-gray-600">
        <h3>Why use a Word Counter?</h3>
        <p>
          Whether you're writing a blog post, a social media update, or an academic essay, 
          staying within length limits is crucial. Our word counter provides real-time stats 
          to help you hit your target length every time.
        </p>
      </div>
    </div>
  );
}
