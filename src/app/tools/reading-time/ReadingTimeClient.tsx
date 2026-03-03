'use client';

import React, { useState, useEffect } from 'react';

export default function ReadingTimeClient() {
  const [text, setText] = useState('');
  const [times, setTimes] = useState({
    reading: 0,
    speaking: 0,
    slowReading: 0
  });

  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    
    // Constants (words per minute)
    const WPM_READING = 225;
    const WPM_SPEAKING = 130;
    const WPM_SLOW = 150;

    setTimes({
      reading: Math.ceil(words / WPM_READING),
      speaking: Math.ceil(words / WPM_SPEAKING),
      slowReading: Math.ceil(words / WPM_SLOW)
    });
  }, [text]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Reading Time Calculator</h1>
      <p className="text-gray-600 mb-8">
        Estimate how long it will take to read or speak your content.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-brand">{times.reading} min</div>
          <div className="text-xs text-gray-500 uppercase font-semibold">Average Reading</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-brand">{times.speaking} min</div>
          <div className="text-xs text-gray-500 uppercase font-semibold">Speaking Time</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-brand">{times.slowReading} min</div>
          <div className="text-xs text-gray-500 uppercase font-semibold">Slow Reading</div>
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
            {text.trim() ? text.trim().split(/\s+/).length : 0} words
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none text-gray-600">
        <h3>How we calculate reading time</h3>
        <p>
          Our calculator uses standard words-per-minute (WPM) benchmarks:
        </p>
        <ul>
          <li><strong>Average Reading:</strong> 225 WPM (typical for adults reading silently)</li>
          <li><strong>Speaking Time:</strong> 130 WPM (ideal for speeches and presentations)</li>
          <li><strong>Slow Reading:</strong> 150 WPM (for complex or technical material)</li>
        </ul>
      </div>
    </div>
  );
}
