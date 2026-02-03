"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  onViewCase: () => void;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  imageAlt,
  onViewCase,
}: ProjectCardProps) {
  return (
    <button
      onClick={onViewCase}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-surface-dark dark:shadow-none dark:ring-1 dark:ring-gray-800 dark:hover:ring-primary/50 md:flex-row w-full text-left cursor-pointer animate-fadeIn"
    >
      <div className="relative aspect-video w-full md:h-auto md:w-2/5 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
        <div className="mb-2 flex items-center gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-primary dark:bg-blue-900/40 dark:text-blue-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-xl font-bold text-text-main dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mb-6 text-text-sub dark:text-gray-400">{description}</p>
        <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
          View Case Study{" "}
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_outward</span>
        </div>
      </div>
    </button>
  );
}