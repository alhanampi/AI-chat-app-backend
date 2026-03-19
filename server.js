import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", process.env.FRONTEND_URL],
  }),
);

app.use(express.json());

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: message }],
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error with Groq" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
