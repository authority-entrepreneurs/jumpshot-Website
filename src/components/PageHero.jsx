// Full-bleed photo banner with dark gradient overlay, used at the top of every page.
export default function PageHero({ image, eyebrow = 'Jumpshotz', title, tall = false, position = 'center center', children }) {
  return (
    <section
      className={`page-hero ${tall ? 'page-hero--tall' : ''}`}
      style={{ backgroundImage: `url(${image})`, backgroundPosition: position }}
    >
      <div className="container page-hero__inner">
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        {tall ? <h1 className="page-hero__title page-hero__title--quote">{title}</h1> : <h1 className="page-hero__title">{title}</h1>}
        {children}
      </div>
    </section>
  );
}
