export function ConsultationSteps() {
  const steps = [
    {
      title: 'Знайомство та збір анамнезу',
      body: 'Спокійно обговорюємо, що вас турбує, як давно з’явились симптоми, які обстеження чи лікування вже були.',
    },
    {
      title: 'Огляд та діагностика',
      body: 'Проводжу клінічний огляд, за потреби рекомендую додаткові обстеження (рентген, КТ) для точнішої оцінки стану.',
    },
    {
      title: 'Пояснення діагнозу простою мовою',
      body: 'Показую, що саме відбувається з яснами та кістковою тканиною, і пояснюю, які варіанти лікування можливі.',
    },
    {
      title: 'План лікування та наступні кроки',
      body: 'Разом узгоджуємо послідовність кроків, орієнтовні терміни та вартість, щоб ви розуміли, з чого почати.',
    },
  ];

  return (
    <section className="section consultation" aria-labelledby="consultation-title">
      <h2 id="consultation-title">Що буде на консультації</h2>
      <ol className="consultation-steps">
        {steps.map((step, index) => (
          <li key={step.title} className="consultation-step">
            <div className="consultation-step-number" aria-hidden="true">
              {index + 1}
            </div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="section-cta">
        <a href="#contact" className="btn-primary">
          Запис на консультацію до лікаря
        </a>
      </div>
    </section>
  );
}

