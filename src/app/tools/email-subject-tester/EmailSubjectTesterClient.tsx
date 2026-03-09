'use client';
import React, { useState } from 'react';

export default function EmailSubjectTesterClient() {
  const [subject, setSubject] = useState('');

  const score = () => {
    if (!subject.trim()) return 0;
    let s = 0;
    const len = subject.length;
    
    // Length score
    if (len >= 30 && len <= 60) s += 20;
    else if (len > 0 && len < 30) s += 10;
    
    // Number check
    if (/\d/.test(subject)) s += 10;
    
    // Power words
    const powerWords = ['free','exclusive','urgent','now','today','limited','secret','proven','new','you','save','win','get','discover'];
    if (powerWords.some(w => subject.toLowerCase().includes(w))) s += 15;
    
    // Case check
    if (subject !== subject.toUpperCase()) s += 10;
    
    // Symbol/Emoji check (Simplified to avoid ES6 unicode flag build issues)
    if (/[|]|{|}|%[A-Z]/.test(subject) || /[^\x00-\x7F]/.test(subject)) s += 10;
    
    // Spam words
    const spamWords = ['buy now','click here','guaranteed','winner','cash','free money','act now'];
    if (!spamWords.some(w => subject.toLowerCase().includes(w))) s += 10;
    
    // Short & Sweet bonus
    if (len <= 50) s += 5;
    
    return Math.min(s, 100);
  };

  const getColor = (s: number) => s >= 70 ? 'bg-green-500' : s >= 40 ? 'bg-yellow-400' : 'bg-red-500';
  const getLabel = (s: number) => s >= 70 ? 'Great' : s >= 40 ? 'Needs Work' : 'Poor';

  const tips = () => {
    const t: string[] = [];
    if (!subject.trim()) return t;
    if (subject.length < 30) t.push('Too short — aim for 30-60 characters');
    if (subject.length > 60) t.push('Too long — try to keep under 60 characters');
    if (!/\d/.test(subject)) t.push('Add a number to boost open rates (e.g. "5 ways to...")');
    const powerWords = ['free','exclusive','urgent','now','today','limited','secret','proven','new','you','save','win','get','discover'];
    if (!powerWords.some(w => subject.toLowerCase().includes(w))) t.push('Include a power word like "free", "exclusive", or "proven"');
    if (subject === subject.toUpperCase()) t.push('Avoid ALL CAPS — it reads as shouting and triggers spam filters');
    return t;
  };

  const s = score();

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">Email Subject Line Tester</h1>
      <p className="text-gray-600 mb-8">Score your subject line and get tips to improve open rates.</p>
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Subject Line</label>
        <input
          type="text"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          placeholder="e.g. 5 free tools to grow your business today"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="mt-2 text-right text-xs text-gray-400">{subject.length} characters</div>
      </div>
      {subject.trim() && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Score: {s}/100</span>
            <span className={`text-sm font-bold px-3 py-1 rounded-full text-white ${getColor(s)}`}>{getLabel(s)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className={`h-3 rounded-full transition-all ${getColor(s)}`} style={{ width: `${s}%` }} />
          </div>
          {tips().length > 0 && (
            <div className="mt-6">
              <h3 className="text-base font-semibold mb-3">Tips to improve:</h3>
              <ul className="space-y-2">
                {tips().map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-yellow-500 mt-0.5">⚠</span>{tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <div className="mt-10 text-gray-600">
        <h3 className="text-xl font-semibold mb-2">What makes a good subject line?</h3>
        <p>The best email subject lines are 30-60 characters, include a number or power word, and create curiosity without resorting to spam triggers. Personalization tokens like [First Name] can boost open rates by up to 26%.</p>
      </div>
    </div>
  );
}
