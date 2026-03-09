'use client';
import React, { useState, useRef } from 'react';

export default function QRCodeGeneratorClient() {
  const [text, setText] = useState('');
  const [generated, setGenerated] = useState('');

  const generate = () => {
    if (!text.trim()) return;
    // Use Google Charts QR API (free, no auth needed)
    const url = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodeURIComponent(text)}&choe=UTF-8`;
    setGenerated(url);
  };

  const download = () => {
    if (!generated) return;
    const link = document.createElement('a');
    link.href = generated;
    link.download = 'qrcode.png';
    link.click();
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">QR Code Generator</h1>
      <p className="text-gray-600 mb-8">Generate a free QR code for any URL, text, or message. Instant download.</p>
      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Enter URL or Text</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="https://example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button onClick={generate} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">Generate QR Code</button>
      </div>
      {generated && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <img src={generated} alt="Generated QR Code" className="border border-gray-200 rounded-lg p-2" width={300} height={300} />
          <button onClick={download} className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">Download PNG</button>
        </div>
      )}
      <div className="mt-10 text-gray-600"><h3 className="text-xl font-semibold mb-2">What can I encode in a QR code?</h3><p>URLs, plain text, email addresses, phone numbers, Wi-Fi credentials, and more. QR codes are read by any smartphone camera.</p></div>
    </div>
  );
}
