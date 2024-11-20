import { FileCode2, Settings2, Clipboard } from 'lucide-react';

const features = [
  {
    icon: <FileCode2 className="w-8 h-8 text-emerald-500" />,
    title: 'Quick Visualization',
    description:
      'Generate Markdown structure instantly with a single right-click.',
  },
  {
    icon: <Settings2 className="w-8 h-8 text-emerald-500" />,
    title: 'Customizable Designs',
    description: 'Choose from 20+ beautiful structure visualization styles.',
  },
  {
    icon: <Clipboard className="w-8 h-8 text-emerald-500" />,
    title: 'Auto-Copy',
    description:
      'Generated structure is automatically copied to your clipboard.',
  },
];

export function Features() {
  return (
    <section id="features" className="bg-gray-900/50 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative flex flex-col h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-emerald-700/20 rounded-[22px] blur opacity-50 group-hover:opacity-75 transition"></div>
              <div className="relative bg-gray-900/90 p-6 rounded-[22px] border border-gray-800 hover:border-emerald-500/50 transition-colors flex flex-col h-full">
                {feature.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400 flex-grow">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
