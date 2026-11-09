
require("dotenv").config();

const express = require("express");
const path = require("path");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

const ai = process.env.GEMINI_API_KEY
    ? new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
      })
    : null;

async function generateAI(prompt) {
    if (!ai) {
        throw new Error("Gemini API key is not configured.");
    }

    const response = await ai.models.generateContent({
        model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
        contents: prompt
    });

    return response.text || "No response generated.";
}

app.post("/api/resume", async (req, res) => {
    try {
        const { resume, role = "suitable entry-level role" } = req.body;

        if (!resume || typeof resume !== "string") {
            return res.status(400).json({ error: "Resume is required." });
        }

        if (resume.length > 12000) {
            return res.status(400).json({ error: "Resume is too long." });
        }

        const result = await generateAI(`
            Analyze this resume for the role: ${role}.

            Give:
            1. Overall feedback
            2. Strengths
            3. Weaknesses
            4. Improvement suggestions
            5. Relevant keywords

            Do not invent qualifications.

            Resume:
            ${resume}
        `);

        res.json({ result });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/interview", async (req, res) => {
    try {
        const { role, level, type } = req.body;

        if (!role || !level || !type) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const result = await generateAI(`
            Generate 10 ${type} interview questions
            for ${role} at ${level} level.

            Give sample answer points for the first 3 questions.
            These are practice questions, not actual company questions.
        `);

        res.json({ result });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/roadmap", async (req, res) => {
    try {
        const { role, skills = "", duration } = req.body;

        if (!role || !duration) {
            return res.status(400).json({ error: "Role and duration are required." });
        }

        const result = await generateAI(`
            Create a ${duration} learning roadmap
            for becoming a ${role}.

            Current skills: ${skills || "Not specified"}

            Include:
            - Weekly learning topics
            - Practical exercises
            - Mini projects
            - Learning outcomes
        `);

        res.json({ result });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/cover-letter", async (req, res) => {
    try {
        const { role, company, details } = req.body;

        if (!role || !company || !details) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const result = await generateAI(`
            Write a professional cover letter.

            Job role: ${role}
            Company: ${company}
            Candidate details: ${details}

            Do not invent experience or qualifications.
            Use placeholders for missing personal information.
        `);

        res.json({ result });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/health", (req, res) => {
    res.json({ status: "AI CareerMate server is running" });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("AI CareerMate running on port 3000");
});
