export function WhoIHelp() {
  const situations = [
    'Кровоточивість ясен, рухливість зубів, неприємний запах з рота',
    'Раніше радили «видалити все і ставити імпланти», але ви хочете зберегти свої зуби',
    'Комплексні випадки, де залучені пародонтолог, ортопед, ортодонт та інші спеціалісти',
    'Пародонтит на фоні системних захворювань (цукровий діабет, гормональні порушення тощо)',
    'Плануєте імплантацію і хочете підготувати ясна та кісткову тканину',
  ];

  return (
    <section className="section who-i-help" aria-labelledby="who-i-help-title">
      <div className="section-header">
        <h2 id="who-i-help-title">Кому я допомагаю</h2>
        <p>
          Працюю з пацієнтами, для яких важливо зберегти власні зуби максимально довго, навіть якщо
          ситуація здається складною або «запущеною».
        </p>
      </div>

      <ul className="who-i-help-list">
        {situations.map((item) => (
          <li key={item} className="who-i-help-item">
            <span className="who-i-help-dot" aria-hidden="true" />
            <div>
              <p>{item}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="section-cta">
        <a href="#contact" className="btn-primary">
          Запис на консультацію до лікаря
        </a>
      </div>
    </section>
  );
}

