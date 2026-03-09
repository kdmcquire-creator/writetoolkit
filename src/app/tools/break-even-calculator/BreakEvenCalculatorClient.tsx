'use client';
import React, { useState } from 'react';

export default function BreakEvenCalculatorClient() {
  const [fixedCosts, setFixedCosts] = useState('');
  const [variableCost, setVariableCost] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [result, setResult] = useState<{ units: string; revenue: string } | null>(null);

  const calculate = () => {
    const fc = parseFloat(fixedCosts);
    const vc = parseFloat(variableCost);
    const p = parseFloat(pricePerUnit);
    
    if (isNaN(fc) || isNaN(vc) || isNaN(p) || p <= vc) return;
    
    const units = fc / (p - vc);
    const revenue = units * p;
    
    setResult({
      units: Math.ceil(units).toLocaleString(),
      revenue: revenue.toFixed(2),
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">Break-Even Calculator</h1>
      <p className="text-gray-600 mb-8">Calculate how many units you need to sell to cover your fixed and variable costs.</p>
      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Total Fixed Costs ($)</label>
          <input type="number" value={fixedCosts} onChange={e => setFixedCosts(e.target.value)} placeholder="e.g. 5000" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Variable Cost per Unit ($)</label>
          <input type="number" value={variableCost} onChange={e => setVariableCost(e.target.value)} placeholder="e.g. 10" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sales Price per Unit ($)</label>
          <input type="number" value={pricePerUnit} onChange={e => setPricePerUnit(e.target.value)} placeholder="e.g. 25" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">Calculate Break-Even Point</button>
      </div>
      {result && (
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-700">{result.units}</div>
            <div className="text-sm text-gray-600 uppercase font-semibold mt-1">Break-Even Units</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-700">${result.revenue}</div>
            <div className="text-sm text-gray-600 uppercase font-semibold mt-1">Break-Even Revenue</div>
          </div>
        </div>
      )}
      <div className="mt-10 text-gray-600">
        <h3 className="text-xl font-semibold mb-2">How is this calculated?</h3>
        <p>Break-Even Units = Fixed Costs / (Price per Unit - Variable Cost per Unit). This formula identifies the point where total revenue equals total costs.</p>
      </div>
    </div>
  );
}
