export function Services() {
  const cards = [
    {
      title: 'Пародонтологія',
      description:
        'Лікування захворювань ясен та підтримка здоров\'я порожнини рота.',
      items: [
        'Лікування гінгівіту та пародонтиту',
        'Професійна гігієна порожнини рота',
        'Хірургічне лікування пародонта',
      ],
    },
    {
      title: 'Щелепно-лицева хірургія',
      description: 'Хірургічне лікування патологій щелепно-лицевої ділянки.',
      items: [
        'Видалення зубів',
        'Імплантація зубів',
        'Реконструктивні операції',
      ],
    },
  ];

  return (
    <section>
      <h2>Послуги</h2>
      {cards.map((card) => (
        <div key={card.title} className="card">
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <ul>
            {card.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
