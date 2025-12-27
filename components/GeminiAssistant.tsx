
import React, { useState } from 'react';
import { getTravelTip } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query) return;
    setLoading(true);
    const result = await getTravelTip(query);
    setResponse(result || "");
    setLoading(false);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md border border-sky-100 rounded-2xl shadow-xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <span className="text-6xl">🤖</span>
      </div>
      <h3 className="text-xl font-bold text-sky-900 mb-4 flex items-center">
        <span className="mr-2">✨</span> AI Beach Concierge
      </h3>
      <p className="text-sm text-sky-700 mb-4">
        Ask about local delicacies, what to wear, or cultural etiquette!
      </p>
      
      <div className="flex flex-col gap-3">
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., Best things to buy in Dapoli market?"
          className="w-full px-4 py-2 rounded-xl border border-sky-200 focus:ring-2 focus:ring-sky-400 outline-none transition-all"
        />
        <button 
          onClick={handleAsk}
          disabled={loading}
          className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-xl transition-all disabled:opacity-50"
        >
          {loading ? 'Asking...' : 'Ask Assistant'}
        </button>
      </div>

      {response && (
        <div className="mt-6 p-4 bg-sky-50 rounded-xl border border-sky-100 animate-in fade-in slide-in-from-top-4 duration-500">
          <p className="text-sm text-sky-800 italic">"{response}"</p>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
