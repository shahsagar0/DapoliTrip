
import React, { useState, useEffect } from 'react';
import { TRIP_DATA, PACKING_LIST, FOOD_HIGHLIGHTS } from './constants';
import { PackingState } from './types';
import VibeChart from './components/VibeChart';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [packing, setPacking] = useState<PackingState>(() => {
    const saved = localStorage.getItem('azure_packing');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('azure_packing', JSON.stringify(packing));
  }, [packing]);

  const togglePacking = (key: string) => {
    setPacking(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const currentPlan = TRIP_DATA.find(d => d.id === activeDay)!;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Hero Section */}
      <header className="relative beach-gradient text-white pt-16 pb-32 px-4 overflow-hidden shadow-lg">
        <div className="absolute top-10 right-10 w-48 h-48 bg-yellow-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white/10 backdrop-blur-sm transform skew-y-1"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1 bg-amber-500/80 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-lg">
            Family Trip 2025
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg leading-tight">
            Dapoli Waves
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 serif italic mb-10">
            Dapoli • Palande • Murud
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 flex-1 min-w-[120px] shadow-xl">
              <div className="text-3xl font-bold">10</div>
              <div className="text-xs uppercase tracking-tighter opacity-80">Guests</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 flex-1 min-w-[120px] shadow-xl">
              <div className="text-3xl font-bold">3</div>
              <div className="text-xs uppercase tracking-tighter opacity-80">Days</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 flex-1 min-w-[120px] shadow-xl">
              <div className="text-3xl font-bold text-amber-200">Veg</div>
              <div className="text-xs uppercase tracking-tighter opacity-80">Dietary</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 -mt-20 relative z-20 pb-20 space-y-12">
        
        {/* Overview Section */}
        <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-sky-900 mb-6 border-l-8 border-amber-400 pl-4">Trip Philosophy</h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Azure Waves is curated for a multi-generational coastal escape. We balance traditional spiritual visits 
              with the serene rhythm of the Arabian Sea. Designed with accessibility and relaxation at its core.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Spiritual", "Coastal", "Serene", "Family-First"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-bold rounded-lg border border-sky-100 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h4 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Activity Analysis</h4>
            <VibeChart />
          </div>
        </section>

        {/* Schedule Tabs */}
        <section id="schedule" className="space-y-8">
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-4">
            <h2 className="text-3xl font-bold text-sky-900 border-l-8 border-sky-500 pl-4">Daily Itinerary</h2>
            <p className="text-slate-500 text-sm italic">Click a day to view details</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {TRIP_DATA.map(day => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`flex-1 min-w-[120px] p-6 rounded-2xl transition-all duration-300 text-left border-b-4 ${
                  activeDay === day.id 
                  ? 'bg-sky-600 text-white border-sky-800 shadow-lg scale-105' 
                  : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 shadow-md'
                }`}
              >
                <div className="text-xs font-bold uppercase opacity-70 mb-1">Day {day.id}</div>
                <div className="text-lg font-bold truncate">{day.subtitle}</div>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 animate-in fade-in duration-500">
            <div className="p-8 md:p-12 relative">
              <div className="absolute left-12 top-24 bottom-12 w-0.5 bg-slate-100"></div>
              
              <h3 className="text-2xl font-bold text-sky-800 mb-10 relative z-10 pl-16 serif italic underline decoration-amber-300 decoration-4 underline-offset-8">
                {currentPlan.title}
              </h3>

              <div className="space-y-10 relative z-10">
                {currentPlan.events.map((event, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white border-2 border-sky-500 text-2xl flex items-center justify-center rounded-full shadow-md shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      {event.icon}
                    </div>
                    <div className="flex-1 bg-slate-50/50 p-6 rounded-2xl border border-transparent hover:border-sky-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                        <h4 className="font-bold text-slate-800 text-lg">{event.title}</h4>
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded uppercase tracking-tighter">
                          {event.time}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-sky-900 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-sky-300 text-xs uppercase tracking-[0.2em] mb-1">Family Night Experience</p>
                <h4 className="text-2xl font-serif italic font-bold">🎲 {currentPlan.game}</h4>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-sm">
                <span className="font-bold text-amber-300">Note:</span> {currentPlan.note}
              </div>
            </div>
          </div>
        </section>

        {/* Logistics & AI Section */}
        <section className="grid lg:grid-cols-3 gap-8">
          
          {/* Packing List */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                <span className="mr-3">🎒</span> Travel Checklist
              </h2>
              <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Persistent State</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PACKING_LIST.map(cat => (
                <div key={cat.key} className="space-y-4">
                  <h4 className="font-bold text-sky-600 flex items-center text-sm uppercase tracking-wider">
                    <span className="mr-2 text-xl">{cat.icon}</span> {cat.title}
                  </h4>
                  <div className="space-y-2">
                    {cat.items.map(item => {
                      const id = `${cat.key}-${item}`;
                      const isChecked = packing[id];
                      return (
                        <button
                          key={item}
                          onClick={() => togglePacking(id)}
                          className={`w-full flex items-center p-3 rounded-xl border transition-all text-left ${
                            isChecked 
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800 line-through opacity-60' 
                            : 'bg-white border-slate-100 text-slate-600 hover:border-sky-200'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md mr-3 flex items-center justify-center transition-all ${
                            isChecked ? 'bg-emerald-500' : 'border-2 border-slate-200'
                          }`}>
                            {isChecked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                          </div>
                          <span className="text-xs font-medium">{item}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Assistant & Food */}
          <div className="space-y-8">
            <GeminiAssistant />
            
            <div className="bg-amber-50 rounded-3xl shadow-xl p-8 border border-amber-100">
              <h2 className="text-xl font-bold text-amber-900 mb-6 flex items-center">
                <span className="mr-2">🍽️</span> Must-Try Flavors
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {FOOD_HIGHLIGHTS.map(food => (
                  <div key={food.name} className="bg-white p-3 rounded-2xl shadow-sm border border-amber-100 text-center group hover:shadow-md transition-all">
                    <div className="text-2xl mb-1 group-hover:scale-125 transition-transform">{food.emoji}</div>
                    <div className="text-[10px] font-black text-slate-800 uppercase tracking-tight">{food.name}</div>
                    <div className="text-[8px] text-slate-500">{food.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips / Footer-ish Card */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center italic">
                <span className="w-10 h-10 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center text-xl mr-4 font-black not-italic">!</span>
                Coastal Pro-Tips
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: "💵", text: "Cash is Essential: Network is spotty at remote beaches; carry ₹5k+ for local vendors." },
                  { icon: "🛶", text: "Private Safaris: For a group of 10, book a full boat for the Dolphin safari to save costs." },
                  { icon: "🦟", text: "Bug Protection: Odomos is mandatory for evening temple visits in forested areas." },
                  { icon: "⌛", text: "Slot Management: The Lighthouse has strict 4:00 PM - 5:30 PM entry. Be punctual!" }
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-xl">{tip.icon}</span>
                    <span className="text-slate-300 text-sm">{tip.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
               <div className="text-6xl mb-4">🌊</div>
               <p className="text-xl font-serif italic mb-2">"The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul."</p>
               <p className="text-xs text-slate-400 uppercase tracking-widest">— Robert Wyland</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-100 py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="text-sky-900 font-bold mb-2">Azure Waves Itinerary Dashboard</div>
          <div className="text-slate-500 text-xs uppercase tracking-[0.3em]">Crafted for the Grand Family Trip 2024</div>
          <div className="mt-8 text-[10px] text-slate-400">© Azure Coast Resorts. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
