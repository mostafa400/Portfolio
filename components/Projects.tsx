"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const projects = [
    {
      title: "AI WhatsApp Medical Receptionist",
      description:
        "Automated WhatsApp receptionist for clinics that handles patient inquiries, appointment booking, and after-hours responses 24/7.",
      tags: ["AI Automation", "Healthcare"],
      imageUrl: "/images/whatsapp.png",
      imageAlt: "AI WhatsApp medical receptionist",

      modalTitle: "AI WhatsApp Receptionist for Medical Clinics",
      category: "AI Automation / Healthcare",
      problem:
        "Clinics were overwhelmed by repetitive WhatsApp inquiries, manual patient intake, missed messages after hours, and frequent double bookings, resulting in delayed responses and lost revenue.",
      solution:
        "Built a fully automated WhatsApp AI receptionist using n8n and large language models. The system identifies patients, answers clinic questions using a private knowledge base, books appointments in real time, and safely escalates emergencies without providing medical diagnosis.",
      techStack: [
        "n8n",
        "Twilio WhatsApp API",
        "LangChain",
        "GPT-4 class models",
        "Google Gemini Embeddings",
        "Airtable",
      ],
      results: [
        { metric: "24/7", description: "Patient Support", icon: "schedule", color: "blue" },
        { metric: "-65%", description: "Staff Workload", icon: "trending_down", color: "green" },
        { metric: "+40%", description: "Booking Rate", icon: "event_available", color: "purple" },
      ],
    },
    {
      title: "AI Voice Agent for Real Estate",
      description:
        "Human-like AI voice agent that calls and qualifies real estate leads automatically, handling objections and booking strategy calls.",
      tags: ["Voice AI", "Sales Automation"],
      imageUrl: "/images/voice.png",
      imageAlt: "AI voice agent for real estate",

      modalTitle: "AI Voice Agent for Real Estate Lead Qualification",
      category: "AI Automation / Voice AI",
      problem:
        "Real estate teams struggled with slow lead follow-ups and inconsistent call quality. Many inbound leads went cold before agents could respond.",
      solution:
        "Designed an AI voice agent using VAPI that calls leads instantly, confirms buying intent, verifies budget and location, handles objections naturally, and books qualified prospects directly into the agent’s calendar.",
      techStack: [
        "VAPI",
        "GPT-4 class models",
        "Speech-to-Text",
        "Text-to-Speech",
        "Calendar Integrations",
      ],
      results: [
        { metric: "Instant", description: "Lead Response Time", icon: "flash_on", color: "blue" },
        { metric: "3x", description: "More Qualified Calls", icon: "call", color: "green" },
        { metric: "-70%", description: "Manual Calling", icon: "phone_disabled", color: "purple" },
      ],
    },
    {
      title: "AI Cold Email Outreach System",
      description:
        "End-to-end AI cold email system that researches leads, personalizes messages, and sends campaigns with inbox warm-up logic.",
      tags: ["Email Automation", "Growth"],
      imageUrl: "/images/email.png",
      imageAlt: "AI cold email automation",

      modalTitle: "AI-Powered Cold Email Outreach Automation",
      category: "AI Automation / Outreach",
      problem:
        "Cold email campaigns suffered from low reply rates, poor personalization, and frequent spam issues due to generic messaging and bad deliverability.",
      solution:
        "Built an AI-driven cold outreach system using n8n that researches prospects, generates personalized emails, controls sending volume, and adapts messaging based on replies.",
      techStack: [
        "n8n",
        "OpenAI API",
        "SMTP",
        "Google Sheets",
        "Email Warm-Up Logic",
      ],
      results: [
        { metric: "42%", description: "Reply Rate", icon: "mark_email_read", color: "green" },
        { metric: "Zero", description: "Spam Flags", icon: "verified", color: "blue" },
        { metric: "5x", description: "Campaign Scale", icon: "rocket_launch", color: "purple" },
      ],
    },
  ];

  const handleViewCase = (index: number) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="work" className="px-6 py-12 lg:px-40">
        <div className="mx-auto flex max-w-[960px] flex-col">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white">
              Featured Projects
            </h2>
  
          </div>
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                onViewCase={() => handleViewCase(index)}
              />
            ))}
            <div className="flex justify-center pt-4 md:hidden">
              <button className="flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-6 text-base font-bold text-text-main dark:border-gray-700 dark:bg-surface-dark dark:text-white">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={projects[selectedProjectIndex]}
      />
    </>
  );
}
