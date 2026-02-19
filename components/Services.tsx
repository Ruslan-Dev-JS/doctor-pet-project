export function Services() {
  const items = [
    { label: 'Пародонтологічна хірургія', icon: '🦷' },
    { label: 'Пластика ясен', icon: '✨' },
    { label: 'Імплантація', icon: '🔬' },
    { label: 'Лікування рецесій', icon: '📋' },
    { label: 'Кісткова пластика', icon: '🩺' },
  ];

  return (
    <section className="section services-section">
      <h2 className="section-title section-title--center">Мої послуги</h2>
      <div className="services-grid-icons">
        {items.map((item) => (
          <div key={item.label} className="service-icon-item">
            <div className="icon-placeholder" aria-hidden="true">
              {item.icon}
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
