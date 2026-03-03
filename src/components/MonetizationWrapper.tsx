import React from 'react';

type MonetizationWrapperProps = {
  children: React.ReactNode;
  toolName: string;
};

export default function MonetizationWrapper({ children, toolName }: MonetizationWrapperProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Sidebar - Monetization Placeholders */}
      <aside className="w-full lg:w-80 flex flex-col gap-6">
        {/* Affiliate Placeholder */}
        <div className="bg-gray-50 border border-border rounded-xl p-6">
          <h4 className="text-xs uppercase font-bold text-gray-400 mb-4 tracking-wider">Recommended for You</h4>
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
            <div className="h-10 bg-brand/10 border border-brand/20 rounded-lg w-full flex items-center justify-center text-brand font-semibold text-sm">
              Upgrade Your Writing
            </div>
          </div>
        </div>

        {/* Ad Placeholder */}
        <div className="bg-gray-50 border border-border rounded-xl p-6 min-h-[400px] flex flex-col items-center justify-center text-center">
          <span className="text-[10px] uppercase font-bold text-gray-300 mb-2">Advertisement</span>
          <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-sm text-gray-400 italic">Ad Slot</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
