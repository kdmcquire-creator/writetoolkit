import React from 'react';

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-lg mb-6">
          Have questions or suggestions? We'd love to hear from you.
        </p>
        <div className="bg-white shadow-sm border rounded-lg p-6">
          <p className="mb-4">
            <strong>Email:</strong> support@writetoolkit.com
          </p>
          <p>
            We typically respond to all inquiries within 24-48 business hours.
          </p>
        </div>
      </div>
    </main>
  );
}
