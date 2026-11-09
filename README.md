# AI-CareerMate
A Generative AI-powered career and placement assistant using Google Gemini API

# ✦ AI CareerMate – GenAI Career & Placement Assistant

AI CareerMate is a Generative AI-powered web application designed to help college students prepare for placements and improve their career skills.

It uses Google's Gemini API to provide intelligent career assistance.

## 🚀 Features

### 1. AI Resume Analyzer
- Analyze resume content.
- Identify strengths and weaknesses.
- Get resume improvement suggestions.
- Suggest relevant keywords.

### 2. AI Interview Preparation
- Generate technical interview questions.
- Generate HR interview questions.
- Choose preparation difficulty.
- Receive sample answer points.

### 3. AI Skill Roadmap
- Select your desired career.
- Enter your existing skills.
- Generate a personalized learning roadmap.
- Get weekly learning activities.

### 4. AI Cover Letter Generator
- Enter job role and company.
- Add your skills and experience.
- Generate a professional cover letter.

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- Google Gemini API

## 📁 Project Structure

```text
AI-CareerMate/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## ⚙️ Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/AI-CareerMate.git
```

### Step 2: Open project folder

```bash
cd AI-CareerMate
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Configure Gemini API

Get an API key from:

https://aistudio.google.com/app/apikey

Create a `.env` file:

```env
GEMINI_API_KEY=your_actual_api_key
GEMINI_MODEL=gemini-2.5-flash
PORT=3000
```

Never upload your actual API key to GitHub.

### Step 5: Run the application

```bash
npm start
```

Open:

http://localhost:3000

## 🔗 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /api/resume | Resume analysis |
| POST | /api/interview | Interview questions |
| POST | /api/roadmap | Skill roadmap |
| POST | /api/cover-letter | Cover letter |
| GET | /api/health | Server health check |

## 🔮 Future Enhancements

- PDF resume upload.
- User login and registration.
- AI job recommendation.
- Resume and job description matching.
- Downloadable AI reports.
- Student dashboard.

## ⚠️ Disclaimer

AI-generated results may contain errors. Review all suggestions before using them in real job applications. Do not enter sensitive personal information.

## 👩‍💻 Project Category

Generative AI | Full Stack Web Development | Career Technology

## 📜 License

This project is available for educational and learning purposes under the MIT License.
