import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col px-6 py-12 md:items-center md:py-20 lg:px-40">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Text Content */}
        <div className="flex flex-col gap-6 md:w-1/2 md:pr-8">
          <div className="flex flex-col gap-4 text-left md:text-left">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary dark:bg-blue-900/30 dark:text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight text-text-main dark:text-white md:text-5xl lg:text-6xl">
              AI Automation Expert
            </h1>
            <h2 className="font-display text-lg font-normal leading-relaxed text-text-sub dark:text-gray-400">
              Building intelligent agents that handle customer conversations, automate reservations, 
and eliminate repetitive work—powered by n8n, Python, and voice AI.

            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="flex h-12 w-full items-center justify-center rounded-xl bg-primary px-6 text-base font-bold text-white transition hover:bg-blue-700 sm:w-auto">
              View Work
            </a>
            <a href="#contact" className="flex h-12 w-full items-center justify-center rounded-xl bg-gray-200 px-6 text-base font-bold text-text-main transition hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 sm:w-auto">
              Contact
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-100 via-white to-blue-50 shadow-lg dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 md:aspect-[4/3]">
            <Image
              src="/images/hero.png"
              alt="Abstract 3D shapes representing artificial intelligence neural network"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
