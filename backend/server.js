import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import chatRouter from './routes/chat.js';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8080);
const allowedOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: allowedOrigin, credentials: false }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'arun-portfolio-backend', time: new Date().toISOString() });
});

app.use('/api/chat', chatRouter);
app.use('/api/contact', contactRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

app.listen(port, () => {
  console.log(`Arun portfolio backend running on http://localhost:${port}`);
});
