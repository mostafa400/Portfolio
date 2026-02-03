const response = await fetch("http://localhost:8000/api/chat", {  // Change this
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ messages }),
});