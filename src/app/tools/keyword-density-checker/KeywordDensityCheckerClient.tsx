'use client';
import React, { useState } from 'react';

export default function KeywordDensityCheckerClient() {
  const [text, setText] = useState('');
  const [results, setResults] = useState<{ word: string; count: number; density: string }[]>([]);

  const analyze = () => {
    if (!text.trim()) return;
    const words = text.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
    const total = words.length;
    const freq: Record<string, number> = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    const stopWords = new Set(['the','and','for','that','this','with','are','from','your','have','been','they','will','not','but','our','can','all','was','more','has','its','one','you','their','what','when','who','how','which','were','had','his','her','him','she','him','also','into','than','then','them']);
    const sorted = Object.entries(freq)
      .filter(([w]) => !stopWords.has(w))
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([word, count]) => ({ word, count, density: ((count / total) * 100).toFixed(2) }));
    setResults(sorted);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">Keyword Density Checker</h1>
      <p className="text-gray-600 mb-8">Analyze keyword frequency and density in your content. Identify over-used or under-used terms.</p>
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your content here..." className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
        <button onClick={analyze} className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">Analyze</button>
      </div>
      {results.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Top Keywords</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50"><tr><th className="text-left px-4 py-3 font-semibold text-gray-700">Keyword</th><th className="text-right px-4 py-3 font-semibold text-gray-700">Count</th><th className="text-right px-4 py-3 font-semibold text-gray-700">Density</th></tr></thead>
              <tbody>{results.map((r, i) => (<tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}><td className="px-4 py-2 font-medium">{r.word}</td><td className="px-4 py-2 text-right">{r.count}</td><td className="px-4 py-2 text-right text-blue-600">{r.density}%</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      )}
      <div className="mt-10 text-gray-600"><h3 className="text-xl font-semibold mb-2">What is keyword density?</h3><p>Keyword density is the percentage of times a keyword appears in your content relative to total word count. Aim for 1-3% for primary keywords to avoid over-optimization.</p></div>
    </div>
  );
}
