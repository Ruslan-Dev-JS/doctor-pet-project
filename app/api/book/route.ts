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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!validate(body)) {
      return NextResponse.json(
        { error: 'Потрібні поля: name, phone, email' },
        { status: 400 }
      );
    }

    const { name, phone, email, preferredDate, message } = body;

    // Тут можна зберегти в БД або відправити в CRM/email
    // Наприклад: await saveToDatabase({ name, phone, email, preferredDate, message });
    // Для прикладу лише лог і успішна відповідь
    console.log('[BOOK]', {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      preferredDate: preferredDate?.trim() || null,
      message: message?.trim() || null,
    });

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
