'use client';

import React, { useState } from 'react';

type InvoiceItem = {
  id: string;
  description: string;
  quantity: number;
  rate: number;
};

export default function InvoiceGenerator() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('INV-001');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: 'Sample Item', quantity: 1, rate: 100 }
  ]);
  const [taxRate, setTaxRate] = useState(0);

  const addItem = () => {
    setItems([...items, { id: Math.random().toString(36).substr(2, 9), description: '', quantity: 1, rate: 0 }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.quantity * item.rate), 0);
  const taxAmount = (subtotal * taxRate) / 100;
  const total = subtotal + taxAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="no-print">
        <h1 className="text-3xl font-bold mb-2 text-navy">Invoice Generator</h1>
        <p className="text-gray-600 mb-8">
          Create and download professional invoices for your clients in seconds.
        </p>
      </div>

      <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden p-8 print:border-none print:shadow-none print:p-0">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl font-bold text-brand mb-4">INVOICE</h2>
            <div className="space-y-2">
              <input
                className="block w-full text-gray-800 font-bold placeholder-gray-300 focus:outline-none"
                placeholder="YOUR COMPANY NAME"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <textarea
                className="block w-full text-sm text-gray-500 placeholder-gray-300 focus:outline-none resize-none"
                placeholder="Company Address, Email, Phone"
                rows={3}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
          </div>
          <div className="text-right space-y-2 text-sm text-gray-600">
            <div>
              <span className="font-bold">Date:</span>
              <input 
                type="date" 
                className="ml-2 focus:outline-none border-b border-transparent focus:border-brand"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <span className="font-bold">Invoice #:</span>
              <input 
                className="ml-2 w-20 text-right focus:outline-none border-b border-transparent focus:border-brand"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xs uppercase font-bold text-gray-400 mb-2">Bill To:</h3>
          <textarea
            className="block w-full text-gray-800 placeholder-gray-300 focus:outline-none resize-none font-medium"
            placeholder="Client Name and Address"
            rows={3}
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <table className="w-full mb-12">
          <thead>
            <tr className="border-b-2 border-navy text-left text-sm font-bold text-navy">
              <th className="py-2">Description</th>
              <th className="py-2 w-20 text-center">Qty</th>
              <th className="py-2 w-32 text-right">Rate</th>
              <th className="py-2 w-32 text-right">Amount</th>
              <th className="py-2 w-10 no-print"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-border text-sm">
                <td className="py-4">
                  <input
                    className="w-full focus:outline-none text-gray-800"
                    placeholder="Item description"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                  />
                </td>
                <td className="py-4 text-center">
                  <input
                    type="number"
                    className="w-16 text-center focus:outline-none text-gray-800"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                  />
                </td>
                <td className="py-4 text-right">
                  <input
                    type="number"
                    className="w-24 text-right focus:outline-none text-gray-800"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                  />
                </td>
                <td className="py-4 text-right font-medium text-gray-900">
                  ${(item.quantity * item.rate).toLocaleString()}
                </td>
                <td className="py-4 text-right no-print">
                  <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600">×</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col items-end gap-2 text-sm">
          <button 
            onClick={addItem}
            className="no-print text-brand hover:text-brand/80 font-bold mb-4"
          >
            + Add Line Item
          </button>
          <div className="flex justify-between w-64 border-b border-border py-2">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium">${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-64 border-b border-border py-2">
            <span className="text-gray-500">Tax (%):</span>
            <input
              type="number"
              className="w-12 text-right focus:outline-none"
              value={taxRate}
              onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
            />
          </div>
          <div className="flex justify-between w-64 py-4 text-xl font-bold text-navy">
            <span>Total</span>
            <span className="text-brand">${total.toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border text-center text-xs text-gray-400 italic">
          Thank you for your business.
        </div>
      </div>

      <div className="mt-8 flex justify-center no-print">
        <button
          onClick={handlePrint}
          className="bg-brand text-white px-12 py-3 rounded-xl font-bold text-lg hover:bg-brand/90 transition-all shadow-lg"
        >
          Print or Download PDF
        </button>
      </div>

      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
}
