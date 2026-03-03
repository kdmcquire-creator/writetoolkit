'use client';

import React, { useState } from 'react';

export default function GrammarCheckerClient() {
  const [text, setText] = useState('');
  const [issues, setIssues] = useState<{ type: string; message: string; offset: number; length: number }[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const checkGrammar = () => {
    if (!text.trim()) return;
    
    setIsChecking(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const detectedIssues = [];
      
      // Simple client-side checks for MVP
      // 1. Double spaces
      const doubleSpaceRegex = /\s\s+/g;
      let match;
      while ((match = doubleSpaceRegex.exec(text)) !== null) {
        detectedIssues.push({
          type: 'Style',
          message: 'Multiple spaces detected.',
          offset: match.index,
          length: match[0].length
        });
      }

      // 2. Common typos (simulated list)
      const commonTypos = [
        { word: 'teh', correct: 'the' },
        { word: 'recieve', correct: 'receive' },
        { word: 'definately', correct: 'definitely' },
        { word: 'occured', correct: 'occurred' },
      ];

      commonTypos.forEach(typo => {
        const regex = new RegExp(`\\b${typo.word}\\b`, 'gi');
        while ((match = regex.exec(text)) !== null) {
          detectedIssues.push({
            type: 'Spelling',
            message: `Possible typo. Did you mean "${typo.correct}"?`,
            offset: match.index,
            length: match[0].length
          });
        }
      });

      // 3. Passive voice (very basic)
      const passiveRegex = /\b(am|is|are|was|were|be|been|being)\s+([a-z]+ed)\b/gi;
      while ((match = passiveRegex.exec(text)) !== null) {
        detectedIssues.push({
          type: 'Grammar',
          message: 'Passive voice detected. Consider using active voice for clarity.',
          offset: match.index,
          length: match[0].length
        });
      }

      setIssues(detectedIssues);
      setIsChecking(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Grammar Checker</h1>
      <p className="text-gray-600 mb-8">
        Clean up your writing with our instant grammar and spelling check.
      </p>

      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden mb-6">
        <textarea
          className="w-full h-80 p-6 focus:outline-none resize-none text-lg text-gray-800 placeholder-gray-400"
          placeholder="Paste your text to check for errors..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (issues.length > 0) setIssues([]);
          }}
        />
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-border">
          <div className="text-sm text-gray-500">
            {issues.length > 0 ? `${issues.length} issues found` : 'Ready to check'}
          </div>
          <button
            onClick={checkGrammar}
            disabled={isChecking || !text.trim()}
            className="bg-brand text-white px-8 py-2 rounded-lg font-semibold hover:bg-brand/90 disabled:opacity-50 transition-all"
          >
            {isChecking ? 'Checking...' : 'Check Grammar'}
          </button>
        </div>
      </div>

      {issues.length > 0 && (
        <div className="space-y-4 mb-12">
          {issues.map((issue, i) => (
            <div key={i} className="bg-white border-l-4 border-brand border border-border p-4 rounded-r-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand bg-brand/10 px-2 py-0.5 rounded mr-2">
                    {issue.type}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    "{text.substring(issue.offset, issue.offset + issue.length)}"
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">{issue.message}</p>
            </div>
          ))}
        </div>
      )}

      {issues.length === 0 && text.length > 0 && !isChecking && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-12 text-center text-sm font-medium">
          No obvious issues found! Your writing looks good.
        </div>
      )}

      <div className="mt-12 prose max-w-none text-gray-600">
        <h3 className="text-navy">Better writing, instantly.</h3>
        <p>
          WriteToolkit's grammar checker helps you catch common mistakes and improve the 
          clarity of your message. From spelling errors to awkward phrasing, we've got you covered.
        </p>
      </div>
    </div>
  );
}
