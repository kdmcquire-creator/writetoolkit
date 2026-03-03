'use client';

import React, { useState, useEffect } from 'react';

const LOREM_WORDS = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
  'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
  'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea',
  'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit',
  'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla',
  'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident',
  'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
];

export default function LoremIpsumClient() {
  const [count, setCount] = useState(3);
  const [type, setType] = useState<'paragraphs' | 'sentences' | 'words'>('paragraphs');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let result = '';
    
    if (type === 'words') {
      result = Array.from({ length: count }, () => 
        LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]
      ).join(' ');
    } else if (type === 'sentences') {
      result = Array.from({ length: count }, () => {
        const len = Math.floor(Math.random() * 10) + 5;
        const sentence = Array.from({ length: len }, () => 
          LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]
        ).join(' ');
        return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
      }).join(' ');
    } else {
      result = Array.from({ length: count }, () => {
        const sentenceCount = Math.floor(Math.random() * 4) + 3;
        return Array.from({ length: sentenceCount }, () => {
          const len = Math.floor(Math.random() * 10) + 5;
          const sentence = Array.from({ length: len }, () => 
            LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]
          ).join(' ');
          return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
        }).join(' ');
      }).join('\n\n');
    }
    
    setOutput(result);
  };

  useEffect(() => {
    generate();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Lorem Ipsum Generator</h1>
      <p className="text-gray-600 mb-8">
        Generate custom placeholder text for your projects.
      </p>

      <div className="bg-white border border-border rounded-xl p-6 shadow-sm mb-8">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Count</label>
            <input
              type="number"
              min="1"
              max="100"
              className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-brand focus:border-brand outline-none"
              value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
            />
          </div>
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Type</label>
            <select
              className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-brand focus:border-brand outline-none bg-white"
              value={type}
              onChange={(e) => setType(e.target.value as any)}
            >
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </select>
          </div>
          <button
            onClick={generate}
            className="px-6 py-2 bg-brand text-white font-semibold rounded-md hover:bg-navy transition-colors h-[42px]"
          >
            Generate
          </button>
        </div>
      </div>

      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 min-h-[300px] max-h-[500px] overflow-y-auto whitespace-pre-wrap text-gray-800 leading-relaxed">
          {output}
        </div>
        <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t border-border">
          <div className="text-sm text-gray-500">
            {output.split(/\s+/).filter(Boolean).length} words
          </div>
          <button 
            onClick={handleCopy}
            className={`text-sm font-medium transition-colors ${copied ? 'text-green-600' : 'text-gray-500 hover:text-brand'}`}
          >
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </div>
      </div>
    </div>
  );
}
