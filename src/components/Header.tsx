import React from 'react';
import { FolderTree } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FolderTree className="w-8 h-8 text-emerald-500" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            Draw Structure
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="hover:text-emerald-500 transition-colors">Features</a>
          <a href="#usage" className="hover:text-emerald-500 transition-colors">Usage</a>
          <a href="#styles" className="hover:text-emerald-500 transition-colors">Styles</a>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=your-extension"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all"
          >
            Install Extension
          </a>
        </div>
      </nav>
    </header>
  );
}