'use client';
import React, { useState } from 'react';

export default function LoanCalculatorClient() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<{ monthly: string; total: string; interest: string } | null>(null);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (!p || !r || !n) return;
    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const interest = total - p;
    setResult({
      monthly: monthly.toFixed(2),
      total: total.toFixed(2),
      interest: interest.toFixed(2),
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">Loan Calculator</h1>
      <p className="text-gray-600 mb-8">Calculate your monthly payment, total cost, and total interest for any loan.</p>
      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount ($)</label>
          <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="e.g. 25000" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Annual Interest Rate (%)</label>
          <input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 6.5" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (years)</label>
          <input type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="e.g. 5" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">Calculate</button>
      </div>
      {result && (
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-blue-700">${result.monthly}</div><div className="text-xs text-gray-500 uppercase font-semibold mt-1">Monthly Payment</div></div>
          <div className="bg-green-50 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-green-700">${result.total}</div><div className="text-xs text-gray-500 uppercase font-semibold mt-1">Total Cost</div></div>
          <div className="bg-red-50 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-red-700">${result.interest}</div><div className="text-xs text-gray-500 uppercase font-semibold mt-1">Total Interest</div></div>
        </div>
      )}
      <div className="mt-10 text-gray-600"><h3 className="text-xl font-semibold mb-2">How is this calculated?</h3><p>Uses the standard amortization formula: M = P[r(1+r)^n]/[(1+r)^n-1], where P = principal, r = monthly rate, n = number of payments.</p></div>
    </div>
  );
}
