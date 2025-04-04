// app/page.tsx
'use client';

import { useState } from 'react';

export default function HomePage() {
  const [major, setMajor] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isBusinessMajor = (input: string) => {
    const normalized = input.trim().toLowerCase();
    return normalized === 'business' || normalized === 'business major';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center px-4 font-sans">
      <div className="w-full max-w-md bg-gray-900 border border-gray-700 shadow-2xl rounded-2xl p-8">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">
              What is your major?
            </label>
            <input
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="Type your major"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center text-lg font-medium text-gray-200 mt-4">
            {isBusinessMajor(major)
              ? 'Reach me on Discord @zeuzmakessoftware'
              : 'Very cool'}
          </div>
        )}
      </div>
    </div>
  );
}
