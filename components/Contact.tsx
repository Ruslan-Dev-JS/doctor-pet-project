export function Contact() {
  return (
    <section className="contact">
      <h2>Контакти</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <span className="contact-label">Email</span>
          <a href="mailto:info@example.com">info@example.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Телефон</span>
          <a href="tel:+380441234567">+38 (044) 123-45-67</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Адреса</span>
          <address>м. Київ, вул. Хрещатик, 1</address>
        </div>
        <div className="contact-item contact-item--schedule">
          <span className="contact-label">Графік роботи</span>
          <dl className="schedule">
            <dt>Пн – Пт</dt>
            <dd>9:00 – 18:00</dd>
            <dt>Сб</dt>
            <dd>10:00 – 15:00</dd>
            <dt>Нд</dt>
            <dd>Вихідний</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
