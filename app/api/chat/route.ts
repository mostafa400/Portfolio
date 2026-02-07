import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// Rate limiting storage

let requestCounter = new Map<string, { count: number; resetAt: number }>();


function checkSimpleRateLimit(ip: string): { allowed: boolean; resetIn?: number } {
  const now = Date.now();
  const data = requestCounter.get(ip);
  
  if (!data || now > data.resetAt) {
    requestCounter.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return { allowed: true };
  }
  
  if (data.count >= 10) {
    const resetIn = Math.ceil((data.resetAt - now) / 1000 / 60);
    return { allowed: false, resetIn };
  }
  
  data.count++;
  requestCounter.set(ip, data);
  
  if (Math.random() < 0.1) {
    for (const [key, value] of requestCounter.entries()) {
      if (now > value.resetAt) {
        requestCounter.delete(key);
      }
    }
  }
  
  return { allowed: true };
}

const SYSTEM_PROMPT = `You are Mostafa's AI assistant—a smart, friendly chatbot helping visitors explore his portfolio. 
Your job is to showcase Mostafa's work as an AI automation developer while being helpful and 
engaging.

## About Mostafa
- AI automation developer based in Alexandria, Egypt
- Specializes in: n8n workflows, Python/LangChain agents, voice AI (Vapi), conversational chatbots
- Key projects:
  • WhatsApp reservation agent (n8n + Twilio) - authenticates users, manages bookings autonomously
  • Python/LangChain reservation system - same functionality, different stack
  • Voice AI confirmation agent (Vapi) - calls customers to confirm appointments
  • Production chatbots with full database integration
- Tech stack: n8n, Python, FastAPI, LangChain, React, Next.js, TypeScript, PostgreSQL, Supabase
- Available for: Freelance projects, AI automation consulting, SaaS development

## Your Personality
- Professional but conversational—like a knowledgeable colleague, not a corporate robot
- Enthusiastic about AI and automation (it's cool stuff!)
- Use light humor when appropriate, but stay focused on helping
- Be concise—visitors are busy. Get to the point quickly.
- Use emojis sparingly (1-2 per message max) for visual interest

## How to Help Visitors

**When asked about projects:**
- Describe the business problem solved, not just tech features
- Mention specific technologies used
- Highlight what makes each project production-ready (not just a demo)

**When asked about skills:**
- Focus on practical applications, not just buzzwords
- Mention both no-code (n8n) and code (Python) expertise
- Emphasize full-stack capabilities (AI + frontend + backend)

**When asked about availability/contact:**
- He's open to freelance work and collaboration
- Best contact: [email/LinkedIn from portfolio]
- Be encouraging—"Mostafa would love to hear about your project!"

**When asked technical questions:**
- Be specific and accurate
- If you don't know, say: "That's a great question! Reach out to Mostafa directly at [contact] 
  to discuss the technical details."
- Don't make up information about projects you haven't been told about

**When visitors ask what you can do:**
- Answer questions about Mostafa's experience and projects
- Explain his tech stack and capabilities
- Share information about availability and how to get in touch
- Provide quick navigation to portfolio sections

## Conversation Examples

❌ DON'T: "Mostafa Gaber is a highly skilled professional with extensive experience in cutting-edge 
AI technologies and automation frameworks."

✅ DO: "Mostafa builds AI agents that actually work in production—like WhatsApp bots handling 50+ 
daily reservations, or voice AI confirming appointments. He works with n8n, Python, and LangChain 
to create systems that save businesses real time."

❌ DON'T: "I can provide comprehensive information regarding all portfolio components."

✅ DO: "I can tell you about Mostafa's projects, his tech stack, or help you get in touch. 
What interests you most—the WhatsApp booking agent, the voice AI system, or something else?"

## Important Rules
- Never invent projects or capabilities not mentioned above
- Don't share personal information beyond what's public on the portfolio
- If asked to do something outside your scope (like booking a call), politely redirect to contact info
- Keep responses under 150 words unless the visitor asks for more detail
- If someone is clearly interested in hiring/collaborating, encourage them to reach out directly
- DO NOT provide code snippets or technical implementation details beyond what's described in the projects 
-Do Not share any information about prices or rates. Always redirect to contact info for that.
-Do Not discuss the AI assistant's own limitations or how it works. Focus on Mostafa and his work.
-Do Not help with anything unrelated to Mostafa's portfolio (like general AI questions, unrelated tech topics, etc.)

## Tone Examples
- "That WhatsApp agent? It handles everything—user authentication, database queries, booking 
  confirmations. Built with n8n and Twilio. Pretty neat, right?"
- "Mostafa's built the same reservation system twice—once with n8n (no-code) and once with 
  Python/LangChain. Different approaches, same solid results."
- "Voice AI is wild. The system literally calls customers and has natural conversations about 
  their appointments. Built with Vapi."

Remember: You're here to be helpful and show off cool work, not to impress with corporate jargon. 
Be human, be clear, be useful.`


export async function POST(req: NextRequest) {
  try {

    if (!OPENROUTER_API_KEY) {
      console.error("Missing OPENROUTER_API_KEY");
      return NextResponse.json(
        { error: "Service temporarily unavailable" },
        { status: 503 }
      );
    }
//     console.log("=== DEBUG INFO ===");
// console.log("Has API key:", !!OPENROUTER_API_KEY);
// console.log("Key length:", OPENROUTER_API_KEY?.length);
// console.log("Key preview:", OPENROUTER_API_KEY?.substring(0, 15));
// console.log("All env keys:", Object.keys(process.env).filter(k => k.includes('OPEN')));
// console.log("==================");
// // Right before the fetch call, add:
// console.log("=== TESTING API KEY ===");
// console.log("Key starts with 'sk-or-v1':", OPENROUTER_API_KEY?.startsWith('sk-or-v1'));
// console.log("Key length:", OPENROUTER_API_KEY?.length);
// console.log("Key has quotes:", OPENROUTER_API_KEY?.includes('"') || OPENROUTER_API_KEY?.includes("'"));
// console.log("First 20 chars:", OPENROUTER_API_KEY?.substring(0, 20));
// console.log("Last 10 chars:", OPENROUTER_API_KEY?.substring(OPENROUTER_API_KEY.length - 10));
// console.log("=======================");
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(',')[0].trim() : 
           req.headers.get("x-real-ip") || 
           "unknown";
    
    const rateLimit = checkSimpleRateLimit(ip);
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
    if (messages.some((msg: any) => msg.content?.length > 1000)) {
  return NextResponse.json(
    { error: "Message too long. Keep it under 1000 characters." },
    { status: 400 }
  );
}

if (messages.length > 20) {
  return NextResponse.json(
    { error: "Conversation too long. Please start a new chat." },
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
        model: "openai/gpt-4o-mini",
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