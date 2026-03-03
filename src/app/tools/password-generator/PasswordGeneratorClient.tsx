'use client';

import React, { useState, useEffect, useCallback } from 'react';

export default function PasswordGeneratorClient() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const charSets = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
    };

    let allowedChars = '';
    if (options.uppercase) allowedChars += charSets.uppercase;
    if (options.lowercase) allowedChars += charSets.lowercase;
    if (options.numbers) allowedChars += charSets.numbers;
    if (options.symbols) allowedChars += charSets.symbols;

    if (!allowedChars) {
      setPassword('');
      return;
    }

    let generated = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      generated += allowedChars[randomIndex];
    }
    setPassword(generated);
  }, [length, options]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const strength = () => {
    if (length < 8) return { label: 'Weak', color: 'text-red-500', bg: 'bg-red-500' };
    if (length < 12) return { label: 'Medium', color: 'text-yellow-500', bg: 'bg-yellow-500' };
    return { label: 'Strong', color: 'text-green-600', bg: 'bg-green-600' };
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Password Generator</h1>
      <p className="text-gray-600 mb-8">
        Generate strong, unique passwords to keep your accounts secure.
      </p>

      <div className="bg-white border border-border rounded-xl p-8 shadow-sm mb-8">
        <div className="relative mb-8">
          <input
            type="text"
            readOnly
            className="w-full text-2xl font-mono p-4 pr-12 border border-border rounded-lg bg-gray-50 focus:outline-none"
            value={password}
          />
          <button
            onClick={generatePassword}
            className="absolute right-4 top-4 text-gray-400 hover:text-brand"
            title="Regenerate"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">Password Length: {length}</label>
                <span className={`text-sm font-bold ${strength().color}`}>{strength().label}</span>
              </div>
              <input
                type="range"
                min="4"
                max="50"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
              />
              <div className="w-full h-1 bg-gray-100 rounded-full mt-2 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${strength().bg}`} 
                  style={{ width: `${Math.min(100, (length / 25) * 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(options).map(([key, value]) => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-brand focus:ring-brand cursor-pointer"
                    checked={value}
                    onChange={() => setOptions(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 capitalize">{key}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="md:w-48 flex flex-col justify-end">
            <button
              onClick={handleCopy}
              className={`w-full py-3 rounded-lg font-bold transition-all shadow-sm ${
                copied 
                ? 'bg-green-600 text-white' 
                : 'bg-brand text-white hover:bg-navy'
              }`}
            >
              {copied ? 'Copied!' : 'Copy Password'}
            </button>
          </div>
        </div>
      </div>

      <div className="prose max-w-none text-gray-600">
        <h3>Security Tips</h3>
        <ul>
          <li><strong>Length matters:</strong> Aim for at least 12-16 characters for critical accounts.</li>
          <li><strong>Complexity:</strong> Mix uppercase, lowercase, numbers, and symbols.</li>
          <li><strong>Uniqueness:</strong> Never reuse passwords across different sites.</li>
          <li><strong>Use a Manager:</strong> Use a password manager to store these complex passwords securely.</li>
        </ul>
      </div>
    </div>
  );
}
