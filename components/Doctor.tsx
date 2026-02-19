export function Doctor() {
  const points = [
    '10+ років досвіду у пародонтології та щелепно-лицевій хірургії',
    'Спеціалізація — складні випадки, збереження зубів',
    'Авторські протоколи лікування',
    'Понад 1000 імплантацій та хірургічних втручань',
  ];

  return (
    <section className="section">
      <h2 className="section-title">Про мене</h2>
      <div className="about-section">
        <div>
          <ul className="about-list">
            {points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/img/IMG_1189.jpeg"
            alt="Лікар під час роботи"
          />
        </div>
      </div>
    </section>
  );
}
