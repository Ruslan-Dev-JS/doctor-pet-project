export function FeaturesDark() {
  const features = [
    'Мікрохірургічні протоколи',
    'Преміум матеріали',
    'Мінімальна травматизація',
    'Швидка реабілітація',
  ];

  return (
    <section className="features-dark" aria-labelledby="features-title">
      <h2 id="features-title" className="features-dark-title">Чому обирають мене</h2>
      <div className="features-inner">
        {features.map((text) => (
          <div key={text} className="feature-item">
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}
