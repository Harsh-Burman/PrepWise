# 📘 PrepWise – AI-Powered Mock Interview Platform

<p align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Backend-Firebase-orange?style=for-the-badge&logo=firebase" />
  <img src="https://img.shields.io/badge/AI-Gemini%20API-blue?style=for-the-badge&logo=google" />
  <img src="https://img.shields.io/badge/Voice-VAPI%20AI-purple?style=for-the-badge" />
</p>

PrepWise is an **AI-powered mock interview platform** that generates **role-specific**, **technology-specific**, and **difficulty-based** interview questions using the **Gemini API**, and conducts fully interactive **voice interviews using VAPI AI**. Users can customize interviews, interact with the AI interviewer, and save their personalized interview history through Firebase.

---

## 🌟 Features

### 🎙 AI Voice Interviewing
- Real-time voice conversation with an AI interviewer  
- Powered by **VAPI AI** for smooth, natural dialogue  
- Instant responses with dynamic conversational flow  

### 🧠 AI-Generated Questions
- Uses **Gemini API** to generate:
  - Role-based questions  
  - Technology-specific questions  
  - Difficulty-level questions  
- Highly customizable interview setup  

### 🔐 Secure User Accounts
- Firebase Authentication  
- Personalized dashboard  
- Stores interview history and settings  

### 📊 Interview History Tracking
- Review past interviews  
- Revisit questions  
- Track improvement over time  

### ⚡ Modern Tech Stack
- **Next.js**  
- **Tailwind CSS**  
- **Firebase**  
- **Gemini API + VAPI AI**

---

## 🏗 Project Structure

```txt
PrepWise/
├── src/
│   ├── components/
│   ├── app/
│   ├── hooks/
│   ├── lib/
│   └── services/
│
├── public/
├── package.json
├── tailwind.config.js
└── README.md
```


---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Harsh-Burman/PrepWise.git
cd PrepWise
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create environment variables

Create a file named .env.local in the project root:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

GEMINI_API_KEY=your_gemini_key
VAPI_API_KEY=your_vapi_key
```

### 4️⃣ Start the development server
```bash
npm run dev
```

### Your app will be live at:
👉 http://localhost:3000

---

## 🧪 How PrepWise Works

### **1. Configure Your Interview**
- Choose role, tech stack, difficulty  
- Customize the interview to your goals  

### **2. AI Generates Questions**
- Gemini API generates tailored interview questions  

### **3. Voice Interview**
- VAPI handles speech-to-text & text-to-speech  
- Real-time AI interviewer  

### **4. Save + Review History**
- Stored securely in Firebase  
- Users can revisit later

---

## 🧩 Most Challenging Problem I Solved

The biggest challenge in PrepWise was integrating **real-time, voice-based AI interviews** while keeping performance smooth and conversation accurate.  
Early testing revealed delays, dropped audio, and mismatched UI states.  
I solved this by restructuring the logic using **asynchronous event handling**, optimizing state management, and modularizing all audio–AI components.  
Firebase Authentication and interview history flows were also refined to ensure data consistency.  
This resulted in a fast, stable, and fully interactive AI mock interview experience.

---

## 🔗 Repository Link

https://github.com/Harsh-Burman/PrepWise

---

## 👨‍💻 Author

**Harsh Burman**

- GitHub: https://github.com/Harsh-Burman  
- LinkedIn: https://www.linkedin.com/in/harshburman20  
- Email: **burmanharsh2003@gmail.com**
