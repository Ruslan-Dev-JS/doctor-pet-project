export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title section-title--center">Контакти</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <span className="contact-label">Email</span>
          <a href="mailto:enex.pet@gmail.com">enex.pet@gmail.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Телефон</span>
          <a href="tel:+380763237984">+38 (076) 323-79-84</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Адреса</span>
          <address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Київська+обласна+клінічна+лікарня,+вул.+Загорівська+1,+Київ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Київська обласна клінічна лікарня, вул. Загорівська 1, Київ
            </a>
          </address>
        </div>
        <div className="contact-item contact-item--schedule">
          <span className="contact-label">Графік роботи</span>
          <dl className="schedule">
            <dt>Пн – Пт</dt>
            <dd>8:30 – 15:00</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}


