export function TreatmentApproach() {
  const items = [
    {
      title: 'Комплексний погляд',
      body: 'Оцінюю не лише стан ясен чи окремих зубів, а всю клінічну картину: прикус, навантаження, загальний стан здоров’я.',
    },
    {
      title: 'План, який можна витримати',
      body: 'Пропоную поетапний план лікування, який можна реалізувати поступово, з урахуванням вашого темпу, бюджету та страхів.',
    },
    {
      title: 'Проста мова без залякувань',
      body: 'Пояснюю, що відбувається в роті, навіщо потрібні кожен етап і що буде, якщо нічого не робити — спокійно і без тиску.',
    },
  ];

  return (
    <section className="section treatment" aria-labelledby="treatment-title">
      <div className="treatment-layout">
        <div className="treatment-text">
          <h2 id="treatment-title">Підхід до лікування</h2>
          <p>
            Моя задача — не просто «полікувати зуби», а допомогти вам зрозуміти, що відбувається з яснами
            та кістковою тканиною, і разом побудувати реалістичний план лікування, який ви зможете
            пройти без перевантаження.
          </p>
        </div>

        <div className="treatment-cards">
          {items.map((item) => (
            <article key={item.title} className="treatment-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

