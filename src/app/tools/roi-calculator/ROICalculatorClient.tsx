'use client';

import React, { useState, useEffect } from 'react';

export default function ROICalculatorClient() {
  const [cost, setCost] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);
  const [roi, setRoi] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  useEffect(() => {
    const netProfit = revenue - cost;
    const calculatedRoi = cost > 0 ? (netProfit / cost) * 100 : 0;
    
    setProfit(netProfit);
    setRoi(calculatedRoi);
  }, [cost, revenue]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">ROI Calculator</h1>
      <p className="text-gray-600 mb-8">
        Measure the profitability of your investments and marketing campaigns.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Amount Invested (Cost)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-400">$</span>
                <input
                  type="number"
                  className="w-full pl-8 pr-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-brand focus:border-brand outline-none"
                  value={cost || ''}
                  onChange={(e) => setCost(Number(e.target.value))}
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Amount Returned (Revenue)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-400">$</span>
                <input
                  type="number"
                  className="w-full pl-8 pr-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-brand focus:border-brand outline-none"
                  value={revenue || ''}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-white border border-border rounded-xl p-8 shadow-sm text-center">
            <div className="mb-6">
              <div className={`text-4xl font-bold ${roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {roi.toFixed(2)}%
              </div>
              <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                Return on Investment
              </div>
            </div>
            <div className="border-t border-border pt-6 grid grid-cols-2 gap-4">
              <div>
                <div className={`text-xl font-bold ${profit >= 0 ? 'text-gray-900' : 'text-red-600'}`}>
                  ${profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs text-gray-400 uppercase font-medium">Net Profit</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">
                  {cost > 0 ? (revenue / cost).toFixed(2) : '0.00'}x
                </div>
                <div className="text-xs text-gray-400 uppercase font-medium">Investment Multiple</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prose max-w-none text-gray-600 mt-12">
        <h3>How to use the ROI Calculator</h3>
        <p>
          ROI (Return on Investment) is a performance measure used to evaluate the efficiency or profitability of an investment. 
          To calculate it:
        </p>
        <ol>
          <li>Enter the total cost of the investment (e.g., ad spend, production costs).</li>
          <li>Enter the total revenue generated from that investment.</li>
          <li>The calculator will automatically show your net profit and ROI percentage.</li>
        </ol>
        <p className="bg-gray-50 p-4 rounded-lg border border-border text-sm">
          <strong>Formula:</strong> ROI = ((Revenue - Cost) / Cost) × 100
        </p>
      </div>
    </div>
  );
}
