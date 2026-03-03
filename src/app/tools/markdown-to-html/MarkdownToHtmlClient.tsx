'use client';

import React, { useState, useEffect } from 'react';

export default function MarkdownToHtmlClient() {
  const [markdown, setMarkdown] = useState('# Hello World\n\nThis is a **Markdown** to *HTML* converter.');
  const [html, setHtml] = useState('');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  useEffect(() => {
    let result = markdown
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*)\*/g, '<em>$1</em>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand hover:underline">$1</a>')
      .replace(/^\- (.*$)/gm, '<li>$1</li>')
      .replace(/^\d\. (.*$)/gm, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br />');

    setHtml(`<p>${result}</p>`);
  }, [markdown]);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-navy">Markdown to HTML</h1>
      <p className="text-gray-600 mb-8">
        Write Markdown in the left pane and see the rendered HTML or code on the right.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
        {/* Editor */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="bg-gray-50 px-4 py-2 border-b border-border text-xs font-bold text-gray-500 uppercase tracking-wider">
            Markdown Editor
          </div>
          <textarea
            className="flex-1 p-6 focus:outline-none resize-none font-mono text-sm text-gray-800"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
          />
        </div>

        {/* Output */}
        <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="bg-gray-50 px-4 py-1 border-b border-border flex justify-between items-center">
            <div className="flex">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${activeTab === 'preview' ? 'border-brand text-brand' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
              >
                Preview
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${activeTab === 'code' ? 'border-brand text-brand' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
              >
                HTML Code
              </button>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(html)}
              className="text-xs text-gray-500 hover:text-brand font-medium"
            >
              Copy HTML
            </button>
          </div>
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === 'preview' ? (
              <div 
                className="prose prose-sm max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <pre className="text-xs font-mono text-gray-700 whitespace-pre-wrap break-all bg-gray-50 p-4 rounded-lg border border-gray-100">
                {html}
              </pre>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none text-gray-600">
        <h3>Supported Syntax</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <ul className="list-disc pl-5">
            <li><code># H1</code>, <code>## H2</code>, <code>### H3</code></li>
            <li><code>**Bold**</code> and <code>*Italic*</code></li>
          </ul>
          <ul className="list-disc pl-5">
            <li><code>[Link Text](url)</code></li>
            <li><code>- List items</code> and <code>1. Numbered lists</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
