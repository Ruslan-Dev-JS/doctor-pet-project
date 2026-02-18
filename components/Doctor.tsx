export function Doctor() {
  const education = [
    'Медичний університет ім. І. Підбірського',
    'Спеціалізація: Стоматологія',
    'Медичний університет Богомольця',
    'Спеціалізація: пародонтологія та щелепно-лицева хірургія',
  ];
  const certificates = [
    'Сертифікат пародонтолога',
    'Сертифікат щелепно-лицевого хірурга',
    'Сертифікат імплантації зубів',
  ];
  const experience = [
    'Понад 15 років досвіду у пародонтології та щелепно-лицевій хірургії',
    'Проведено більше 1000 імплантацій зубів',
    'Виконано більше 500 хірургічних втручань у щелепно-лицевій ділянці',
  ];

  return (
    <section className="doctor">
      <h2>Про лікаря</h2>
      <div className="doctor-photo">
        <img
          src="/img/IMG_1189.jpeg"
          alt="Линник Анастасія Віталіївна — лікар-пародонтолог"
          className="doctor-img"
        />
      </div>
      <div>
        <h2>Линник Анастасія Віталіївна</h2>
        <p>
          Лікар-пародонтолог і щелепно-лицевий хірург з понад 15-річним досвідом
          роботи. Спеціалізується на комплексному лікуванні захворювань
          пародонта та хірургічних втручаннях у щелепно-лицевій ділянці.
        </p>
      </div>
      <div className="doctor-qualifications">
        <h3 className="doctor-universe">Освіта</h3>
        <ul>
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="doctor-universe">
        <h3>Сертифікати</h3>
        <ul>
          {certificates.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="doctor-universe">
        <h3>Досвід роботи</h3>
        <ul>
          {experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
