import React from 'react';
import { FolderTree, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <FolderTree className="w-6 h-6 text-emerald-500" />
            <span className="font-bold">Draw Structure</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/krivoox" className="hover:text-emerald-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/jkrivoox" className="hover:text-emerald-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/juan-manuel-krivocapich/" className="hover:text-emerald-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="text-gray-400">
            Made with ♥ by Krivoox
          </div>
        </div>
      </div>
    </footer>
  );
}