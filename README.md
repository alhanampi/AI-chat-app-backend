# AI Chat App — Backend (deprecated)

> **This backend is no longer used.** The API was migrated to a Vercel Serverless Function (`api/chat.js`) in the frontend repo, eliminating the need for a separate Express server.

Part of the [AI Chat App](https://github.com/alhanampi/AI-chat-app) project.

---

## What changed

The `/api/chat` endpoint now lives in the frontend repo as `api/chat.js`, handled natively by Vercel. The Groq SDK is called directly from that serverless function using the `GROQ_API_KEY` environment variable set in Vercel.
