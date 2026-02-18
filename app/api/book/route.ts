import { NextRequest, NextResponse } from 'next/server';

export type BookBody = {
  name: string;
  phone: string;
  email: string;
  preferredDate?: string;
  message?: string;
};

function validate(body: unknown): body is BookBody {
  if (!body || typeof body !== 'object') return false;
  const o = body as Record<string, unknown>;
  return (
    typeof o.name === 'string' &&
    o.name.trim().length > 0 &&
    typeof o.phone === 'string' &&
    o.phone.trim().length > 0 &&
    typeof o.email === 'string' &&
    o.email.trim().length > 0
  );
}

/** Текст заявки для месенджерів (звичайний текст, без розмітки) */
function formatBookingText(data: {
  name: string;
  phone: string;
  email: string;
  preferredDate?: string;
  message?: string;
}): string {
  const lines = [
    '🦷 Нова заявка на прийом',
    '',
    `👤 Ім'я: ${data.name}`,
    `📞 Телефон: ${data.phone}`,
    `✉️ Email: ${data.email}`,
  ];
  if (data.preferredDate) {
    lines.push(`📅 Бажана дата: ${data.preferredDate}`);
  }
  if (data.message) {
    lines.push(`💬 Повідомлення: ${data.message}`);
  }
  return lines.join('\n');
}

/** Відправка у Telegram через Bot API */
async function notifyTelegram(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !chatId) {
    console.warn('[Telegram] Пропущено: не задано TELEGRAM_BOT_TOKEN або TELEGRAM_CHAT_ID у .env.local');
    return;
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) {
    console.error('[Telegram] Помилка відправки:', data.description || data || res.status);
    return;
  }
  console.log('[Telegram] Повідомлення надіслано успішно');
}

/** Відправка у Slack через Incoming Webhook */
async function notifySlack(text: string): Promise<void> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!validate(body)) {
      return NextResponse.json(
        { error: 'Потрібні поля: name, phone, email' },
        { status: 400 }
      );
    }

    const name = body.name.trim();
    const phone = body.phone.trim();
    const email = body.email.trim();
    const preferredDate = body.preferredDate?.trim();
    const message = body.message?.trim();

    const payload = { name, phone, email, preferredDate, message };
    console.log('[BOOK]', payload);

    const notificationText = formatBookingText(payload);

    await Promise.all([
      notifyTelegram(notificationText),
      notifySlack(notificationText),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Заявку прийнято. Ми зв\'яжемося з вами найближчим часом.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Помилка обробки запиту' },
      { status: 500 }
    );
  }
}
