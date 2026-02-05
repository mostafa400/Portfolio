"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xlglyonj", {  // ← Replace with your Formspree ID
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "Project Inquiry", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-16 bg-gray-50 dark:bg-surface-dark/50 lg:px-40">
      <div className="mx-auto max-w-[1100px]">
        <div className="bg-white dark:bg-surface-dark rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">
                Let's build something intelligent.
              </h2>
              <p className="text-text-sub dark:text-gray-400 mb-8 leading-relaxed">
                Have a project in mind? Looking to automate your workflow? Or just want to chat about the latest AI paper? Drop me a line.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-text-main dark:text-white">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span>mostafa.gaber.hussein@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-text-main dark:text-white">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span>Alexandria, Egypt (Remote Friendly)</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-sub dark:text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text-sub dark:text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-sub dark:text-gray-400 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Project Inquiry</option>
                  <option>Consultation</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-sub dark:text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-text-main dark:bg-white text-white dark:text-text-main font-bold py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent! ✓" : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">Failed to send. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}