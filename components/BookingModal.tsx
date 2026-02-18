'use client';

import { useCallback, useState } from 'react';

export type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  message: string;
};

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form, setForm] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      setStatus('idle');
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('loading');
      setErrorText('');
      try {
        const res = await fetch('/api/book', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            preferredDate: form.preferredDate.trim() || undefined,
            message: form.message.trim() || undefined,
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          setErrorText(data.error || 'Помилка відправки');
          setStatus('error');
          return;
        }
        setStatus('success');
        setForm({ name: '', phone: '', email: '', preferredDate: '', message: '' });
      } catch {
        setErrorText('Помилка зʼєднання. Спробуйте пізніше.');
        setStatus('error');
      }
    },
    [form]
  );

  const handleClose = useCallback(() => {
    onClose();
    setStatus('idle');
    setErrorText('');
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="booking-overlay" onClick={handleClose} role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <div className="booking-modal-header">
          <h2 id="booking-title">Запис на прийом</h2>
          <button type="button" className="booking-close" onClick={handleClose} aria-label="Закрити">
            ×
          </button>
        </div>

        {status === 'success' ? (
          <div className="booking-success">
            <p>Заявку прийнято. Ми зв&apos;яжемося з вами найближчим часом.</p>
            <button type="button" onClick={handleClose}>
              Закрити
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="booking-form">
            <label>
              Ім&apos;я *
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Ваше ім'я"
                disabled={status === 'loading'}
              />
            </label>
            <label>
              Телефон *
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+38 (0__) ___-__-__"
                disabled={status === 'loading'}
              />
            </label>
            <label>
              Email *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="email@example.com"
                disabled={status === 'loading'}
              />
            </label>
            <label>
              Бажана дата
              <input
                type="date"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </label>
            <label>
              Повідомлення
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Коротко опишіть причину візиту..."
                disabled={status === 'loading'}
              />
            </label>
            {errorText && <p className="booking-form-error">{errorText}</p>}
            <div className="booking-form-actions">
              <button type="button" onClick={handleClose} className="booking-btn-secondary">
                Скасувати
              </button>
              <button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Відправка...' : 'Надіслати заявку'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
