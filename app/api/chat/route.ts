import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// Rate limiting storage
const ipRequests = new Map<string, number[]>();

function checkRateLimit(ip: string): { allowed: boolean; resetIn?: number } {
  const now = Date.now();
  const hourAgo = now - 60 * 60 * 1000;
  
  const requests = ipRequests.get(ip) || [];
  const recentRequests = requests.filter(time => time > hourAgo);
  
  if (recentRequests.length >= 10) {
    const oldestRequest = Math.min(...recentRequests);
    const resetIn = Math.ceil((oldestRequest + 60 * 60 * 1000 - now) / 1000 / 60);
    return { allowed: false, resetIn };
  }
  
  recentRequests.push(now);
  ipRequests.set(ip, recentRequests);
  
  if (Math.random() < 0.01) {
    for (const [storedIp, times] of ipRequests.entries()) {
      if (times.every(time => time < hourAgo)) {
        ipRequests.delete(storedIp);
      }
    }
  }
  
  return { allowed: true };
}

const SYSTEM_PROMPT = `You are Mostafa's friendly AI assistant on his portfolio website. You're helpful, enthusiastic, and professional - think of yourself as his knowledgeable colleague who loves talking about tech!

About Mostafa:
🤖 AI Automation Expert based in San Francisco (Remote Friendly)
💡 Specializes in building intelligent agents and custom automation pipelines
🛠️ Tech Stack: Python, OpenAI API, LangChain, n8n, Zapier, FastAPI, TensorFlow
🚀 Helps businesses save time and streamline processes with AI

Featured Projects:
1. WhatsApp Reservation Chatbot - Automated booking system, cut booking time from 15min to 5min
2. Real Estate Lead Chatbot - 24/7 lead qualification with 85% quality score
3. Invoice Processing Pipeline - 94% error reduction in data extraction
4. CRM Sync Workflow - Real-time HubSpot ↔ Salesforce synchronization

Contact Info:
📧 hello@mostafa.dev
📍 San Francisco, CA (Remote Friendly)
💼 Available for: AI consulting, automation projects, custom chatbot development

Your personality:
- Be enthusiastic but professional (use emojis sparingly - max 1-2 per message)
- Keep responses SHORT (2-4 sentences unless asked for details)
- Be conversational, not robotic
- If you don't know something about Mostafa, be honest and suggest they contact him directly
- Encourage people to reach out for projects - Mostafa loves solving automation problems!

Remember: You're here to help visitors learn about Mostafa's work and connect with him for projects!`;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || 
               req.headers.get("x-real-ip") || 
               "unknown";
    
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: `Whoa there! You've hit the chat limit. Please try again in ${rateLimit.resetIn} minutes. 😊` },
        { status: 429 }
      );
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "anthropic/claude-3.5-haiku",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error("OpenRouter API error");
    }

    const data = await response.json();
    
    return NextResponse.json({
      message: data.choices[0].message.content,
    });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Oops! Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}