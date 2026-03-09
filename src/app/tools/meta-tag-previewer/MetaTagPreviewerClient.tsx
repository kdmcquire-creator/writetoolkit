'use client';
import React, { useState } from 'react';

export default function MetaTagPreviewerClient() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">Meta Tag Previewer</h1>
      <p className="text-gray-600 mb-8">Preview how your page will appear in Google search results. Keep your title under 60 characters and description under 160.</p>
      
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <div>
            <div className="flex justify-between items-end mb-1">
              <label className="block text-sm font-medium text-gray-700">Page Title</label>
              <span className={`text-xs ${title.length > 60 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>{title.length}/60</span>
            </div>
            <input 
              type="text" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              placeholder="Enter your page title" 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div>
            <div className="flex justify-between items-end mb-1">
              <label className="block text-sm font-medium text-gray-700">Meta Description</label>
              <span className={`text-xs ${description.length > 160 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>{description.length}/160</span>
            </div>
            <textarea 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              placeholder="Enter your meta description" 
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" 
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Google Search Preview</h2>
          <div className="max-w-[600px]">
            <div className="text-[#1a0dab] text-xl hover:underline cursor-pointer font-normal mb-1 truncate">
              {title || 'Your Page Title Will Appear Here'}
            </div>
            <div className="text-[#006621] text-sm mb-1 truncate">
              https://tools.aiproductivityhub.co › ...
            </div>
            <div className="text-[#4d5156] text-sm leading-normal line-clamp-2 break-words">
              {description || 'Enter a meta description to see how your page snippet will look in search engine results. This description should summarize your page content accurately.'}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-gray-600">
        <h3 className="text-xl font-semibold mb-2">Why are meta tags important?</h3>
        <p>Meta tags provide search engines with information about your page. A well-optimized title and description can significantly improve your click-through rate (CTR) from search result pages.</p>
      </div>
    </div>
  );
}
