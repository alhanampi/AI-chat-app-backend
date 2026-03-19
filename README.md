# AI Chat App — Backend

Express API server that handles communication between the frontend and the Groq LLM API.

Part of the [AI Chat App](https://github.com/alhanampi/AI-chat-app) project.

---

## Stack

| | |
|---|---|
| Node.js + Express 5 | HTTP server |
| Groq SDK | LLM inference (Llama 3.1 8B Instant) |
| dotenv | Environment variable management |
| CORS | Cross-origin request handling |

---

## Endpoint

**POST** `/api/chat`

```json
// Request
{ "message": "your message here" }

// Response
{ "reply": "AI response text" }
```

---

## Running Locally

```bash
npm install
```

Create a `.env` file:

```
GROQ_API_KEY=your_key_here
```

Get a free API key at [console.groq.com](https://console.groq.com).

```bash
node server.js
```

Server runs on `http://localhost:3001`.
