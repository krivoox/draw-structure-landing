import React from 'react';

const steps = [
  {
    title: "Right Click",
    description: "Navigate to any folder in VS Code's explorer",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Select Option",
    description: "Click 'Generate Markdown structure'",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Get Structure",
    description: "Your structure is ready and copied to clipboard",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=500&q=80"
  }
];

export function Usage() {
  return (
    <section id="usage" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-emerald-700/20 rounded-[22px] blur opacity-50 group-hover:opacity-75 transition"></div>
              <div className="relative bg-gray-900/90 p-6 rounded-[22px] border border-gray-800 hover:border-emerald-500/50 transition-colors">
                <span className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </span>
                <img 
                  src={step.image}
                  alt={`Step ${index + 1}`} 
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}