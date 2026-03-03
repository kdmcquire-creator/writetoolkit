'use client';

import React, { useState } from 'react';

export default function CaseConverterClient() {
  const [text, setText] = useState('');

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  
  const toTitleCase = () => {
    const result = text.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    setText(result);
  };

  const toSentenceCase = () => {
    const result = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
    setText(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Case Converter</h1>
      <p className="text-gray-600 mb-8">
        Convert your text between UPPERCASE, lowercase, Title Case, and Sentence case.
      </p>

      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden mb-6">
        <textarea
          className="w-full h-80 p-6 focus:outline-none resize-none text-lg text-gray-800 placeholder-gray-400"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="bg-gray-50 px-6 py-4 flex flex-wrap gap-3 border-t border-border">
          <button
            onClick={toUpper}
            className="bg-white border border-border text-navy px-4 py-2 rounded-lg font-medium hover:border-brand hover:text-brand transition-all text-sm"
          >
            UPPERCASE
          </button>
          <button
            onClick={toLower}
            className="bg-white border border-border text-navy px-4 py-2 rounded-lg font-medium hover:border-brand hover:text-brand transition-all text-sm"
          >
            lowercase
          </button>
          <button
            onClick={toTitleCase}
            className="bg-white border border-border text-navy px-4 py-2 rounded-lg font-medium hover:border-brand hover:text-brand transition-all text-sm"
          >
            Title Case
          </button>
          <button
            onClick={toSentenceCase}
            className="bg-white border border-border text-navy px-4 py-2 rounded-lg font-medium hover:border-brand hover:text-brand transition-all text-sm"
          >
            Sentence case
          </button>
          <div className="flex-grow" />
          <button
            onClick={copyToClipboard}
            disabled={!text}
            className="bg-brand text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand/90 disabled:opacity-50 transition-all text-sm"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="mt-12 prose max-w-none text-gray-600">
        <h3 className="text-navy">Effortless formatting.</h3>
        <p>
          Don't rewrite your content just because the casing is wrong. Our case converter 
          handles everything from capitalization for headlines to standard sentence formatting 
          with a single click.
        </p>
      </div>
    </div>
  );
}
