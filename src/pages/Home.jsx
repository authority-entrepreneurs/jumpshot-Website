import { LINKS, CONTACT, img } from '../data/site';
import usePageTitle from '../components/usePageTitle';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import FindUs from '../components/FindUs';

const AFFILIATES = [
  { name: 'Because We Can Sports', href: LINKS.bwcSports, logo: 'bwc-logo-retina.png', newTab: true },
  { name: "Shootin' School", href: LINKS.shootinSchool, logo: 'SHOOTINSCHOOLLOGO-COMPLETELY-REVISEDFOR-HIGH-RES-1024x819.png', newTab: true },
  { name: 'Staten Island Stingrays', href: LINKS.stingrays, logo: 'staten_island_sting_rays2_copy-3.png', newTab: false },
  { name: 'Staten Island Alumni League', href: LINKS.siAlumniLeague, logo: 'StatenIslandAlumniLeagueLogo-0-1024x1024-1-1024x1024.png', newTab: true },
];

export default function Home() {
  usePageTitle();

  return (
    <>
      <PageHero
        tall
        image={img('MG_1451_Edited.jpg')}
        eyebrow="Jumpshotz SI"
        title="“The gym appears almost like a miniature NBA arena on the inside... (it) is a state-of the art facility for local hoopers.”"
      >
        <div className="btn-row">
          <Button to={LINKS.bookCourt} newTab size="lg">
            Rent Court Online
          </Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="intro">
            <span className="accent-bar" />
            <p className="intro__lead">
              Jumpshotz is a 4,000 square foot facility that is designed to host indoor basketball instruction and
              games. We work closely with our affiliates...
            </p>
            <p className="intro__names">Shootin' School, Because We Can Sports, SI Alumni League, and the Stingrays</p>
          </div>

          <div className="logo-grid">
            {AFFILIATES.map((a) => {
              const tab = a.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <a key={a.name} href={a.href} {...tab} className="logo-grid__item" aria-label={a.name}>
                  <img src={img(a.logo)} alt={a.name} loading="lazy" />
                </a>
              );
            })}
          </div>

          <div className="center">
            <Button to="/affiliates/">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="section section--dark cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2 className="section-title">Schedule an Appointment</h2>
            <p className="cta-band__text">
              Please contact Sal Fabozzi if you are interested in booking the court{' '}
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            </p>
          </div>
          <Button to={LINKS.bookCourt} newTab size="lg">
            Book Now
          </Button>
        </div>
      </section>

      <FindUs />
    </>
  );
}
