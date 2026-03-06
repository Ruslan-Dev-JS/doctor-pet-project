export function Doctor() {
  const points = [
    '10+ років досвіду у пародонтології та щелепно-лицевій хірургії',
    'Спеціалізація — складні випадки, збереження зубів',
    'Авторські протоколи лікування',
    'Понад 1000 імплантацій та хірургічних втручань',
  ];

  return (
    <section className="section" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">Про мене</h2>
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
            src="/img/Doctor.jpg"
            alt="Лікар під час роботи"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
