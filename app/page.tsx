'use client';
import { useState } from 'react';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

export default function Home() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');

const handleSend = async () => {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: input })
  });
  const data = await res.json();
  if (data.error) {
    setReply("Error: " + data.error);
    return;
  }
  setReply(data.reply);
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(data.reply));
};

  const startVoice = () => {
    const rec = new window.webkitSpeechRecognition();
    rec.onresult = (e) => setInput(e.results[0][0].transcript);
    rec.start();
  };

  return (
    <div
      style={{
        padding: 36,
        maxWidth: 480,
        margin: '48px auto',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
        borderRadius: 20,
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        fontFamily: 'var(--font-geist-sans, sans-serif)',
        border: '1px solid #e5e7eb',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: 28,
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: '-0.5px',
          color: '#22223b',
        }}
      >
        🤖 AI Agent Chatbot
      </h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        placeholder="Type your message..."
        style={{
          width: '100%',
          padding: 14,
          borderRadius: 12,
          border: '1.5px solid #cbd5e1',
          marginBottom: 18,
          fontSize: 17,
          resize: 'vertical',
          background: '#f1f5f9',
          color: '#22223b',
          outline: 'none',
          transition: 'border 0.2s',
        }}
        onFocus={e => (e.target.style.border = '1.5px solid #6366f1')}
        onBlur={e => (e.target.style.border = '1.5px solid #cbd5e1')}
      />
      <div style={{ display: 'flex', gap: 14, marginBottom: 24 }}>
        <button
          onClick={handleSend}
          style={{
            flex: 1,
            padding: '12px 0',
            borderRadius: 10,
            border: 'none',
            background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
            color: '#fff',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: 17,
            boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
            transition: 'background 0.2s, transform 0.1s',
          }}
        >
          Send
        </button>
        <button
          onClick={startVoice}
          style={{
            flex: 1,
            padding: '12px 0',
            borderRadius: 10,
            border: 'none',
            background: '#fff',
            color: '#6366f1',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: 17,
            boxShadow: '0 2px 8px rgba(99,102,241,0.06)',
            borderBottom: '2px solid #6366f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          <span role="img" aria-label="mic">🎙️</span> Voice
        </button>
      </div>
      <div
        style={{
          background: 'rgba(99,102,241,0.06)',
          borderRadius: 12,
          padding: 18,
          minHeight: 54,
          fontSize: 17,
          color: '#22223b',
          border: '1px solid #e0e7ef',
          boxShadow: '0 1px 4px rgba(99,102,241,0.03)',
        }}
      >
        <strong style={{ color: '#6366f1' }}>Bot:</strong> {reply}
      </div>
    </div>
  );
}
