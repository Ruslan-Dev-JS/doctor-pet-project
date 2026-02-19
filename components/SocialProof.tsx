export function SocialProof() {
  const quotes = [
    {
      text: 'Мені детально пояснили, що відбувається з яснами, і ми разом обрали план лікування, який я реально змогла пройти.',
      note: 'Пацієнтка з хронічним пародонтитом',
    },
    {
      text: 'Замість радикального видалення зубів ми змогли стабілізувати стан і зберегти частину власних зубів.',
      note: 'Пацієнт після повторної консультації',
    },
    {
      text: 'На прийомі нарешті відчув не осуд, а підтримку — навіть попри складний стан ротової порожнини.',
      note: 'Пацієнт зі складним клінічним випадком',
    },
  ];

  return (
    <section className="section social-proof" aria-labelledby="social-proof-title">
      <h2 id="social-proof-title">Спокійна підтримка замість тиску</h2>
      <p className="social-proof-intro">
        Я не використовую драматичні історії чи агресивні «до/після». Важливіше, щоб ви відчували
        себе в безпеці та розуміли, що з ситуацією можна працювати — крок за кроком.
      </p>

      <div className="social-proof-grid">
        {quotes.map((q) => (
          <figure key={q.text} className="social-proof-card">
            <blockquote>{q.text}</blockquote>
            <figcaption>{q.note}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

