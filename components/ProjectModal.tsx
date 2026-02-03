"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    modalTitle: string;
    category: string;
    problem: string;
    solution: string;
    techStack: string[];
    results: {
      metric: string;
      description: string;
      icon: string;
      color: string;
    }[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getColorClasses = (color: string) => {
    if (color === "green") return "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400";
    if (color === "purple") return "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400";
    return "bg-primary/10 dark:bg-blue-900/20 text-primary dark:text-blue-400";
  };

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#0e121b]/60 backdrop-blur-sm p-0 sm:p-6">
      <div onClick={(e) => e.stopPropagation()}  className="bg-white dark:bg-[#1a202c] w-full max-w-[1024px] max-h-[90vh] sm:rounded-2xl rounded-t-2xl shadow-modal flex flex-col overflow-hidden relative">
        
        {/* Close Button */}
        <div className="absolute top-0 right-0 z-30 p-4">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-black/40 backdrop-blur-sm text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm border border-gray-200 dark:border-gray-600"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto modal-scroll flex flex-col h-full">
          
          {/* Title Section (No Image) */}
          <div className="px-6 sm:px-10 pt-12 pb-6">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">
              {project.category}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-main dark:text-white">
              {project.modalTitle}
            </h2>
          </div>

          {/* Content Body */}
          <div className="flex flex-col lg:flex-row gap-10 px-6 sm:px-10 pb-10">
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-8">
              
              {/* Problem */}
              <div>
                <div className="flex items-center gap-3 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">
                  <span className="material-symbols-outlined text-red-500">report_problem</span>
                  <h3 className="text-xl font-bold text-text-main dark:text-white">The Problem</h3>
                </div>
                <p className="text-text-main dark:text-gray-300 text-base leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-3 mb-3 border-b border-gray-100 dark:border-gray-800 pb-2">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <h3 className="text-xl font-bold text-text-main dark:text-white">The Solution</h3>
                </div>
                <p className="text-text-main dark:text-gray-300 text-base leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
  <a 
    href="#contact"
    onClick={onClose}
    className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-primary/30"
  >
    <span>Request Demo</span>
    <span className="material-symbols-outlined text-sm">play_circle</span>
  </a>
  <a 
    href="#contact"
    onClick={onClose}
    className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-text-main dark:text-white font-bold py-3 px-6 rounded-lg transition-all"
  >
    <span>Get in Touch</span>
    <span className="material-symbols-outlined text-sm">mail</span>
  </a>
</div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-8">
              
              {/* Results */}
              <div className="bg-gray-50 dark:bg-gray-800/40 rounded-xl p-6 border border-gray-100 dark:border-gray-700/50">
                <div className="flex items-center gap-2 mb-5 text-text-sub dark:text-gray-400">
                  <span className="material-symbols-outlined text-[20px]">equalizer</span>
                  <h4 className="text-sm font-bold uppercase tracking-wider">Project Results</h4>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="flex flex-col">
                        <span className="text-3xl font-bold text-text-main dark:text-white leading-none">
                          {result.metric}
                        </span>
                        <span className="text-xs font-medium text-text-sub dark:text-gray-400 mt-1">
                          {result.description}
                        </span>
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getColorClasses(result.color)}`}>
                        <span className="material-symbols-outlined">{result.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-text-sub dark:text-gray-400">
                  <span className="material-symbols-outlined text-[20px]">layers</span>
                  <h4 className="text-sm font-bold uppercase tracking-wider">Tech Stack</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 text-sm font-bold border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}