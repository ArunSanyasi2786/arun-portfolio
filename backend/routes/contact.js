import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body || {};
  console.log('[contact]', {
    name,
    email,
    subject,
    message,
    receivedAt: new Date().toISOString()
  });
  res.json({ ok: true, message: 'Message received. Configure email delivery later if needed.' });
});

export default router;
