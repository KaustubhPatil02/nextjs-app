# 🧪 AI Agent Chatbot (Experimental)

Welcome to the **AI Agent Chatbot** — an experimental Next.js app that lets you chat with an OpenAI-powered assistant using both text and voice input.

---

## 🚀 Quick Start

1. **Clone & Install**
   ```bash
   git clone <your-repo-url>
   cd ai-agent/nextjs-app
   npm install
   ```

2. **Set up API Keys**

   Create a `.env.local` file in the root of `nextjs-app`:

   ```
   OPENAI_API_KEY=your_openai_key
   HF_API_KEY=your_huggingface_key # (optional)
   ```

3. **Run the Dev Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**

   Visit [http://localhost:3000](http://localhost:3000)

---

## 🗣️ Features

- **Chat with AI**: Type or speak your message, get instant AI responses.
- **Voice Input**: Uses browser speech recognition (Webkit only).
- **Voice Output**: AI replies are spoken aloud.
- **Modern UI**: Clean, minimal, and responsive design.
- **OpenAI API**: Powered by GPT-3.5-turbo (requires valid API key).

---

## ⚠️ Experimental Notes

- **API Quota**: You must have a valid OpenAI API key with quota.
- **Voice Input**: Only works in browsers supporting `webkitSpeechRecognition` (e.g., Chrome).
- **No Data Storage**: This app does not store chat history.
- **Errors**: API errors (quota, network, etc.) are shown in the UI.

---

## 🛠️ Project Structure

```
nextjs-app/
  app/
    api/
      chat/
        route.js      # API route for chat
    page.tsx          # Main UI
    layout.tsx        # App layout
  .env.local          # Your API keys (not committed)
  README.md
```

---

## 🧑‍💻 Customization

- Edit `app/page.tsx` for UI changes.
- Edit `app/api/chat/route.js` for backend logic.

---

## 📚 Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [OpenAI Node SDK](https://www.npmjs.com/package/openai)
- [SpeechRecognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

---

## 🧪 Status

This project is **experimental** and not production-ready.  
Feel free to fork, experiment, and contribute!

---