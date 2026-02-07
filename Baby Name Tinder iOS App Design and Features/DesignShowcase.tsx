import React, { useState } from 'react';
import { Heart, X, Info, Share2, Settings, User, Star, ChevronLeft, Filter, Check } from 'lucide-react';

// Neo-Modernist Nursery Color Palette
const colors = {
  bg: 'bg-[#F5F2EB]', // Oatmeal
  card: 'bg-[#FFFFFF]',
  primary: 'bg-[#8FA89B]', // Sage Green
  secondary: 'bg-[#D68C76]', // Terracotta
  accent: 'bg-[#E3C16F]', // Mustard
  dark: 'bg-[#2C3E50]', // Deep Ocean
  text: 'text-[#4A4A4A]', // Warm Grey
  textLight: 'text-[#8C8C8C]',
};

export default function DesignShowcase() {
  const [activeTab, setActiveTab] = useState('launch');

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Baby Name Tinder - Design Showcase</h1>
          <p className="text-gray-600">Style: Neo-Modernist Nursery</p>
          
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            {['launch', 'swipe', 'detail', 'matches', 'profile'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full capitalize transition-all ${
                  activeTab === tab 
                    ? 'bg-[#8FA89B] text-white shadow-lg transform scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        <div className="flex justify-center">
          {/* Mobile Device Frame */}
          <div className="relative w-[375px] h-[812px] bg-black rounded-[40px] shadow-2xl overflow-hidden border-[12px] border-black">
            {/* Status Bar Placeholder */}
            <div className="absolute top-0 w-full h-12 z-50 flex justify-between items-center px-6 text-xs font-medium text-black/80">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-4 rounded-full border border-current"></div>
                <div className="w-4 h-4 rounded-full border border-current"></div>
              </div>
            </div>

            {/* Screen Content */}
            <div className="w-full h-full bg-[#F5F2EB] overflow-y-auto no-scrollbar">
              
              {/* 1. Launch Page */}
              {activeTab === 'launch' && (
                <div className="h-full flex flex-col relative">
                  {/* Abstract Background Shapes */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#8FA89B] opacity-20 blur-3xl"></div>
                    <div className="absolute top-40 -left-10 w-40 h-40 rounded-full bg-[#D68C76] opacity-20 blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#F5F2EB] to-transparent z-10"></div>
                    <img src="/images/launch_bg.png" alt="Background" className="w-full h-full object-cover opacity-30" />
                  </div>

                  <div className="relative z-20 flex-1 flex flex-col justify-end px-8 pb-16">
                    <div className="mb-8">
                      <div className="w-16 h-16 bg-[#8FA89B] rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                        <Heart className="text-white w-8 h-8 fill-current" />
                      </div>
                      <h1 className="text-4xl font-bold text-[#4A4A4A] leading-tight mb-4">
                        Find the <br/>
                        <span className="text-[#D68C76]">Perfect Name</span> <br/>
                        Together.
                      </h1>
                      <p className="text-[#8C8C8C] text-lg leading-relaxed">
                        Join your family circle and swipe your way to a name everyone loves.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <button className="w-full py-4 bg-[#2C3E50] text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-2">
                        Create Family Circle
                      </button>
                      <button className="w-full py-4 bg-white text-[#4A4A4A] rounded-2xl font-semibold text-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-all">
                        I have an invite code
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Swipe Page */}
              {activeTab === 'swipe' && (
                <div className="h-full flex flex-col pt-12 px-6 pb-8">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs font-medium text-gray-600">Partner Online</span>
                    </div>
                    <button className="p-2 bg-white rounded-full shadow-sm text-gray-600">
                      <Filter className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Card Stack */}
                  <div className="flex-1 relative mb-8">
                    {/* Background Card */}
                    <div className="absolute top-4 left-0 w-full h-full bg-white rounded-[32px] shadow-sm transform scale-95 opacity-50 z-0"></div>
                    
                    {/* Main Card */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white rounded-[32px] shadow-xl z-10 flex flex-col overflow-hidden border border-gray-50">
                      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative">
                        <div className="absolute top-4 right-4 bg-[#F5F2EB] px-3 py-1 rounded-full text-xs font-bold text-[#8FA89B] tracking-wide uppercase">
                          French Origin
                        </div>
                        
                        <h2 className="text-5xl font-bold text-[#2C3E50] mb-2 font-serif">Elio</h2>
                        <p className="text-[#8C8C8C] text-lg mb-6">/ˈe.ljo/</p>
                        
                        <div className="bg-[#F5F2EB] px-6 py-3 rounded-2xl mb-6">
                          <p className="text-[#4A4A4A] font-medium">"Sun"</p>
                        </div>

                        <div className="flex gap-2 mb-8">
                          <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-500">Modern</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-500">Short</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-500">Boy</span>
                        </div>
                      </div>

                      {/* Action Area */}
                      <div className="h-24 bg-gray-50 flex items-center justify-between px-8 border-t border-gray-100">
                        <button className="p-3 rounded-full bg-white text-gray-400 hover:text-gray-600 transition-colors">
                          <Info className="w-6 h-6" />
                        </button>
                        <button className="p-3 rounded-full bg-white text-[#E3C16F] hover:text-[#D4B05E] transition-colors">
                          <Star className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex justify-center items-center gap-8">
                    <button className="w-16 h-16 rounded-full bg-white shadow-lg text-[#D68C76] flex items-center justify-center transform transition-transform hover:scale-110 active:scale-95 border border-gray-50">
                      <X className="w-8 h-8" strokeWidth={3} />
                    </button>
                    <button className="w-20 h-20 rounded-full bg-[#8FA89B] shadow-xl text-white flex items-center justify-center transform transition-transform hover:scale-110 active:scale-95 shadow-[#8FA89B]/30">
                      <Heart className="w-10 h-10 fill-current" />
                    </button>
                  </div>
                </div>
              )}

              {/* 3. Detail Page */}
              {activeTab === 'detail' && (
                <div className="h-full bg-white flex flex-col overflow-y-auto">
                  {/* Header Image/Pattern */}
                  <div className="h-64 bg-[#F5F2EB] relative flex items-end p-6">
                    <button className="absolute top-12 left-6 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                      <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#E3C16F] opacity-10 rounded-bl-full"></div>
                    
                    <div>
                      <h1 className="text-5xl font-bold text-[#2C3E50] mb-1 font-serif">Luna</h1>
                      <p className="text-[#8C8C8C]">Latin Origin • Girl</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-8">
                    {/* Meaning Section */}
                    <section>
                      <h3 className="text-sm font-bold text-[#D68C76] uppercase tracking-wider mb-3">Meaning & Origin</h3>
                      <p className="text-[#4A4A4A] leading-relaxed text-lg">
                        Luna means <span className="font-semibold text-[#2C3E50]">"moon"</span> in Latin. In Roman mythology, Luna is the divine embodiment of the moon. It has seen a meteoric rise in popularity in recent years.
                      </p>
                    </section>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#F9F9F9] p-4 rounded-2xl">
                        <div className="text-xs text-gray-500 mb-1">Popularity</div>
                        <div className="text-2xl font-bold text-[#2C3E50]">#10</div>
                        <div className="text-xs text-green-500 flex items-center gap-1">
                          ↑ Rising fast
                        </div>
                      </div>
                      <div className="bg-[#F9F9F9] p-4 rounded-2xl">
                        <div className="text-xs text-gray-500 mb-1">Syllables</div>
                        <div className="text-2xl font-bold text-[#2C3E50]">2</div>
                        <div className="text-xs text-gray-400">Lu-na</div>
                      </div>
                    </div>

                    {/* Pronunciation */}
                    <section className="bg-[#2C3E50] rounded-2xl p-6 text-white flex items-center justify-between shadow-lg shadow-[#2C3E50]/20">
                      <div>
                        <div className="text-sm opacity-70 mb-1">Pronunciation</div>
                        <div className="text-xl font-medium">LOO-nah</div>
                      </div>
                      <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                      </button>
                    </section>

                    {/* Similar Names */}
                    <section>
                      <h3 className="text-sm font-bold text-[#8FA89B] uppercase tracking-wider mb-4">Similar Names</h3>
                      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                        {['Stella', 'Nova', 'Aurora', 'Celeste'].map(name => (
                          <button key={name} className="px-5 py-2 bg-white border border-gray-200 rounded-full text-gray-600 whitespace-nowrap shadow-sm">
                            {name}
                          </button>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              )}

              {/* 4. Matches Page */}
              {activeTab === 'matches' && (
                <div className="h-full flex flex-col bg-[#F5F2EB]">
                  <div className="pt-12 px-6 pb-6 bg-white rounded-b-[40px] shadow-sm z-10">
                    <h1 className="text-3xl font-bold text-[#2C3E50] mb-2">It's a Match!</h1>
                    <p className="text-[#8C8C8C]">Names everyone loves.</p>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {/* Match Item - Highlighted */}
                    <div className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-[#8FA89B] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#8FA89B]/20 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
                      
                      <div className="flex justify-between items-start relative z-10">
                        <div>
                          <h3 className="text-2xl font-bold text-[#2C3E50] mb-1">Oliver</h3>
                          <p className="text-sm text-gray-500">Latin • "Olive Tree"</p>
                        </div>
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-[#D68C76] flex items-center justify-center text-xs text-white font-bold">M</div>
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-[#8FA89B] flex items-center justify-center text-xs text-white font-bold">D</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 py-2 bg-gray-50 rounded-xl text-xs font-medium text-gray-600 flex items-center justify-center gap-1 hover:bg-gray-100">
                          <Info className="w-3 h-3" /> Details
                        </button>
                        <button className="flex-1 py-2 bg-[#F5F2EB] rounded-xl text-xs font-medium text-[#2C3E50] flex items-center justify-center gap-1 hover:bg-[#EBE6DB]">
                          <Share2 className="w-3 h-3" /> Share
                        </button>
                      </div>
                    </div>

                    {/* Standard Match Item */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-[#2C3E50]">Sophia</h3>
                        <p className="text-xs text-gray-400">Greek • "Wisdom"</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <Check className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Standard Match Item */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-[#2C3E50]">Leo</h3>
                        <p className="text-xs text-gray-400">Latin • "Lion"</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <Check className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Celebration Graphic Overlay (Optional) */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-50">
                     <img src="/images/match_celebration.png" alt="Celebration" className="w-full h-full object-contain" />
                  </div>
                </div>
              )}

              {/* 5. Profile & Settings */}
              {activeTab === 'profile' && (
                <div className="h-full bg-gray-50 flex flex-col">
                  <div className="bg-white pt-16 pb-8 px-6 rounded-b-[40px] shadow-sm mb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 rounded-full bg-[#F5F2EB] border-4 border-white shadow-md overflow-hidden">
                        <img src="/images/baby_avatar_1.png" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#2C3E50]">The Smiths</h2>
                        <p className="text-[#8FA89B] font-medium">Premium Member</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-1 bg-[#F9F9F9] p-3 rounded-2xl text-center">
                        <div className="text-xl font-bold text-[#2C3E50]">124</div>
                        <div className="text-xs text-gray-500">Swiped</div>
                      </div>
                      <div className="flex-1 bg-[#F9F9F9] p-3 rounded-2xl text-center">
                        <div className="text-xl font-bold text-[#2C3E50]">3</div>
                        <div className="text-xs text-gray-500">Matches</div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 space-y-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#E3C16F]/20 text-[#E3C16F] flex items-center justify-center">
                          <User className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-gray-700">Family Circle</span>
                      </div>
                      <div className="flex -space-x-2 mr-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-gray-600">+1</div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#D68C76]/20 text-[#D68C76] flex items-center justify-center">
                          <Settings className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-gray-700">Preferences</span>
                      </div>
                      <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
                    </div>

                    {/* Premium Banner */}
                    <div className="mt-6 bg-[#2C3E50] rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold mb-1">Unlock Premium</h3>
                        <p className="text-sm text-gray-300 mb-4">Unlimited swipes, advanced filters & more.</p>
                        <button className="w-full py-3 bg-white text-[#2C3E50] rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                          Upgrade for $4.99/mo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Navigation (Visible on all except Launch) */}
              {activeTab !== 'launch' && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-2xl border border-white/50 flex gap-8 z-50">
                  <button onClick={() => setActiveTab('swipe')} className={`transition-colors ${activeTab === 'swipe' ? 'text-[#2C3E50]' : 'text-gray-400'}`}>
                    <div className="w-6 h-6 border-2 border-current rounded-lg"></div>
                  </button>
                  <button onClick={() => setActiveTab('matches')} className={`transition-colors ${activeTab === 'matches' ? 'text-[#2C3E50]' : 'text-gray-400'}`}>
                    <Heart className={`w-6 h-6 ${activeTab === 'matches' ? 'fill-current' : ''}`} />
                  </button>
                  <button onClick={() => setActiveTab('profile')} className={`transition-colors ${activeTab === 'profile' ? 'text-[#2C3E50]' : 'text-gray-400'}`}>
                    <User className={`w-6 h-6 ${activeTab === 'profile' ? 'fill-current' : ''}`} />
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
