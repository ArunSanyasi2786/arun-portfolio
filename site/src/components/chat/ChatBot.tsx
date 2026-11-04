'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { getResponse, suggestedQuestions } from './chatbot-engine';
import styles from './ChatBot.module.scss';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hey! I'm Arun's portfolio assistant. Ask me anything about his work, skills, experience, or services." },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEnd = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const reply = getResponse(text);
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
      setTyping(false);
    }, 400 + Math.random() * 600);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      <button
        className={`${styles.fab} ${open ? styles.fabOpen : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {open && (
        <div className={styles.panel}>
          <div className={styles.header}>
            <div className={styles.headerDot} />
            <div>
              <div className={styles.headerTitle}>Arun&apos;s Assistant</div>
              <div className={styles.headerSub}>Ask about skills, projects & services</div>
            </div>
          </div>

          <div className={styles.body}>
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? styles.userRow : styles.botRow}>
                <div className={m.role === 'user' ? styles.userBubble : styles.botBubble}
                  dangerouslySetInnerHTML={{ __html: formatMarkdown(m.text) }}
                />
              </div>
            ))}

            {typing && (
              <div className={styles.botRow}>
                <div className={styles.botBubble}>
                  <span className={styles.dots}>
                    <span /><span /><span />
                  </span>
                </div>
              </div>
            )}

            {messages.length === 1 && !typing && (
              <div className={styles.suggestions}>
                {suggestedQuestions.map(q => (
                  <button key={q} className={styles.chip} onClick={() => send(q)}>{q}</button>
                ))}
              </div>
            )}

            <div ref={messagesEnd} />
          </div>

          <form className={styles.footer} onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className={styles.input}
              type="text"
              placeholder="Ask about Arun..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button className={styles.send} type="submit" disabled={!input.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function formatMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\n/g, '<br/>');
}
