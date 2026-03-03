'use client';

import React, { useState, useEffect } from 'react';

export default function SalaryConverterClient() {
  const [amount, setAmount] = useState<number>(50000);
  const [type, setType] = useState<'hourly' | 'weekly' | 'monthly' | 'annually'>('annually');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [weeksPerYear, setWeeksPerYear] = useState<number>(52);

  const [results, setResults] = useState({
    hourly: 0,
    daily: 0,
    weekly: 0,
    biweekly: 0,
    monthly: 0,
    annually: 0
  });

  useEffect(() => {
    let annualSalary = 0;

    switch (type) {
      case 'hourly':
        annualSalary = amount * hoursPerWeek * weeksPerYear;
        break;
      case 'weekly':
        annualSalary = amount * weeksPerYear;
        break;
      case 'monthly':
        annualSalary = amount * 12;
        break;
      case 'annually':
        annualSalary = amount;
        break;
    }

    setResults({
      hourly: annualSalary / (weeksPerYear * hoursPerWeek),
      daily: annualSalary / (weeksPerYear * 5), // Assuming 5 day work week
      weekly: annualSalary / weeksPerYear,
      biweekly: annualSalary / (weeksPerYear / 2),
      monthly: annualSalary / 12,
      annually: annualSalary
    });
  }, [amount, type, hoursPerWeek, weeksPerYear]);

  const formatCurrency = (val: number) => 
    val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Salary Converter</h1>
      <p className="text-gray-600 mb-8">
        Convert your income between different pay periods.
      </p>

      <div className="bg-white border border-border rounded-xl p-6 shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">$</span>
              <input
                type="number"
                className="w-full pl-8 pr-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-brand focus:border-brand outline-none"
                value={amount || ''}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Pay Period</label>
            <select
              className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-brand focus:border-brand outline-none bg-white"
              value={type}
              onChange={(e) => setType(e.target.value as any)}
            >
              <option value="hourly">Hourly</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="annually">Annually</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Hours per Week</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-brand focus:border-brand outline-none"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Work Weeks per Year</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-brand focus:border-brand outline-none"
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {[
          { label: 'Hourly', value: results.hourly },
          { label: 'Daily', value: results.daily },
          { label: 'Weekly', value: results.weekly },
          { label: 'Bi-weekly', value: results.biweekly },
          { label: 'Monthly', value: results.monthly },
          { label: 'Annually', value: results.annually },
        ].map((res) => (
          <div key={res.label} className="bg-white border border-border rounded-lg p-5 shadow-sm text-center">
            <div className="text-xs text-gray-500 uppercase font-bold mb-1">{res.label}</div>
            <div className="text-2xl font-bold text-brand">${formatCurrency(res.value)}</div>
          </div>
        ))}
      </div>

      <div className="prose max-w-none text-gray-600">
        <h3>Pay Period Definitions</h3>
        <ul>
          <li><strong>Hourly:</strong> Based on the specific hours worked per week.</li>
          <li><strong>Bi-weekly:</strong> Every two weeks (typically 26 pay periods per year).</li>
          <li><strong>Monthly:</strong> Once per month (12 pay periods per year).</li>
          <li><strong>Annually:</strong> Your total gross income for the entire year.</li>
        </ul>
      </div>
    </div>
  );
}
