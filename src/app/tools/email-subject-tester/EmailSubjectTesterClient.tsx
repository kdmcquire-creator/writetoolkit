'use client';
import React, { useState, useEffect } from 'react';

export default function EmailSubjectTesterClient() {
  const [subject, setSubject] = useState('');
  const [score, setScore] = useState(0);
  const [tips, setTips] = useState<string[]>([]);

  useEffect(() => {
    let s = 0;
    const t = [];
    const val = subject.trim();
    
    if (val.length === 0) {
      setScore(0);
      setTips([]);
      return;
    }

    // Length check
    if (val.length >= 40 && val.length <= 60) {
      s += 20;
    } else if (val.length < 40) {
      t.push('Consider making it slightly longer (40-60 chars is ideal).');
    } else {
      t.push('Subject is a bit long; it might get cut off on mobile devices.');
    }

    // Numbers check
    if (/\d/.test(val)) {
      s += 10;
    } else {
      t.push('Adding a number can increase open rates (e.g., "5 Tips...").');
    }

    // Power words check
    const powerWords = ["free", "exclusive", "urgent", "now", "today", "limited", "secret", "new", "proven"];
    if (powerWords.some(word => val.toLowerCase().includes(word))) {
      s += 15;
    } else {
      t.push('Use power words like "free", "exclusive", or "urgent" to grab attention.');
    }

    // All caps check
    if (val === val.toUpperCase() && val.length > 5) {
      t.push('Avoid using ALL CAPS; it can look like spam.');
    } else {
      s += 10;
    }

    // Personalization/Emoji check
    if (val.includes('[NAME]') || val.includes('{{') || /[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(val)) {
      s += 10;
    } else {
      t.push('Try adding a personalization token like [NAME] or an emoji.');
    }

    // Spam words check
    const spamWords = ["buy now", "click here", "guaranteed", "earn money", "cash"];
    if (spamWords.some(word => val.toLowerCase().includes(word))) {
      t.push('Avoid common spam triggers like "buy now" or "guaranteed".');
    } else {
      s += 10;
    }

    // Mobile bonus
    if (val.length < 50) {
      s += 5;
    }

    setScore(Math.min(s + 30, 100)); // Base score of 30 for just having a subject
    setTips(t);
  }, [subject]);

  const getScoreColor = () => {
    if (score < 40) return 'bg-red-500';
    if (score < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">Email Subject Tester</h1>
      <p className="text-gray-600 mb-8">Score your email subject line based on best practices for open rates.</p>
      
      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject Line</label>
          <input 
            type="text" 
            value={subject} 
            onChange={e => setSubject(e.target.value)} 
            placeholder="e.g. [NAME], check out this exclusive offer!" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>

        {subject && (
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-gray-700">Subject Score</span>
                <span className="text-lg font-bold">{score}/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getScoreColor()}`} style={{ width: `${score}%` }}></div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Suggestions to improve:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {tips.length > 0 ? tips.map((tip, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    {tip}
                  </li>
                )) : (
                  <li className="text-green-600 font-medium">Your subject line looks great!</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 text-gray-600">
        <h3 className="text-xl font-semibold mb-2">Why subject lines matter?</h3>
        <p>Your subject line is the most important factor in whether your email gets opened. Testing and optimizing them can lead to significant increases in engagement and conversions.</p>
      </div>
    </div>
  );
}
