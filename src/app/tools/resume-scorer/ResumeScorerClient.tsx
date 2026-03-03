'use client';

import React, { useState } from 'react';

type Feedback = {
  score: number;
  label: string;
  tips: string[];
};

export default function ResumeScorerClient() {
  const [resumeText, setResumeText] = useState('');
  const [result, setResult] = useState<Feedback | null>(null);

  const analyzeResume = () => {
    const text = resumeText.toLowerCase();
    let score = 0;
    const tips: string[] = [];

    // Length check
    const wordCount = text.split(/\s+/).length;
    if (wordCount > 200 && wordCount < 1000) {
      score += 20;
    } else {
      tips.push('Aim for 400-800 words for an ideal resume length.');
    }

    // Key Sections check
    const sections = ['experience', 'education', 'skills', 'contact', 'summary'];
    let foundSections = 0;
    sections.forEach(s => {
      if (text.includes(s)) {
        foundSections++;
        score += 10;
      }
    });
    if (foundSections < sections.length) {
      tips.push(`Missing or unclear sections: ${sections.filter(s => !text.includes(s)).join(', ')}.`);
    }

    // Action verbs check
    const actionVerbs = ['managed', 'developed', 'led', 'increased', 'created', 'designed', 'implemented'];
    let foundVerbs = 0;
    actionVerbs.forEach(v => {
      if (text.includes(v)) foundVerbs++;
    });
    if (foundVerbs > 3) {
      score += 20;
    } else {
      tips.push('Use more strong action verbs like "managed", "developed", or "implemented".');
    }

    // Contact info check
    if (text.includes('@') && (text.includes('phone') || text.includes('cell') || /\d{3}/.test(text))) {
      score += 10;
    } else {
      tips.push('Ensure your email and phone number are clearly visible.');
    }

    setResult({
      score: Math.min(100, score),
      label: score > 70 ? 'Strong' : score > 40 ? 'Average' : 'Needs Improvement',
      tips: tips.slice(0, 4)
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Resume Scorer</h1>
      <p className="text-gray-600 mb-8">
        Get instant feedback on your resume based on content, structure, and keywords.
      </p>

      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden mb-8">
        <textarea
          className="w-full h-80 p-6 focus:outline-none resize-none text-gray-800 placeholder-gray-400"
          placeholder="Paste the text of your resume here..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />
        <div className="bg-gray-50 px-6 py-4 border-t border-border flex justify-end">
          <button
            onClick={analyzeResume}
            disabled={!resumeText.trim()}
            className="px-8 py-2 bg-brand text-white font-bold rounded-md hover:bg-navy transition-colors disabled:opacity-50"
          >
            Score Resume
          </button>
        </div>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white border border-border rounded-xl p-8 text-center shadow-sm">
            <div className={`text-5xl font-bold mb-2 ${result.score > 70 ? 'text-green-600' : 'text-orange-500'}`}>
              {result.score}/100
            </div>
            <div className="text-sm font-bold uppercase text-gray-400">{result.label}</div>
          </div>
          
          <div className="md:col-span-2 bg-white border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-navy">Key Improvements</h3>
            <ul className="space-y-3">
              {result.tips.length > 0 ? (
                result.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <span className="text-brand mt-1">•</span>
                    {tip}
                  </li>
                ))
              ) : (
                <li className="text-green-600 font-medium">Your resume looks great! Keep it up.</li>
              )}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-12 prose max-w-none text-gray-600">
        <h3>Resume Writing Tips</h3>
        <p>
          A great resume should be concise, professional, and tailored to the job description. 
          Focus on your achievements rather than just listing your duties.
        </p>
      </div>
    </div>
  );
}
