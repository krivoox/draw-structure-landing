import React from 'react';

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-24 text-center">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[250px] w-[250px] bg-emerald-500/20 rounded-full blur-3xl"></div>
        </div>
        <h1 className="relative text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Visualize Your Project Structure
          <span className="text-emerald-500">.</span>
        </h1>
      </div>
      <div className="relative z-10">
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
          Transform your project's folder structure into beautiful Markdown documentation with a single click. Perfect for documentation and project overview.
        </p>
      </div>
      <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-60"></div>
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80" 
          alt="Code Editor Screenshot" 
          className="w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
    </section>
  );
}