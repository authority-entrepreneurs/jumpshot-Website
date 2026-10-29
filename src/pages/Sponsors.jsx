import { LINKS, img } from '../data/site';
import usePageTitle from '../components/usePageTitle';
import PageHero from '../components/PageHero';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

// On the live site every sponsor image links to the Maffeo Foundation; kept as-is.
const SPONSORS = [
  {
    name: 'Joseph Maffeo Foundation',
    logo: 'JMFFORFLOOR-1024x576.png',
    href: LINKS.maffeoFoundation,
    body: (
      <>
        <h5>Making Our World A Better Place</h5>
        <h6>Feel it…Believe it….Live it…</h6>
        <p>
          Joseph Maffeo was a New York City firefighter whose life was tragically cut short on September 11, 2001. He
          was a hero to the people of New York, but more importantly, he was a hero to his family, and the people who
          knew and loved him. To them he was a hero not for the way he died, but rather for the way he lived. Joseph
          Maffeo made the world a better place, each and every day of his life, by giving of himself, by extending a
          helping hand, by displaying a smile, simply by his mere presence.
        </p>
        <p>
          We have established this foundation to continue Joseph’s legacy by keeping his spirit alive in those who knew
          him and breathing it into those who didn’t. By doing this we hope to fill the void left in this world, when on
          September 11, 2001, Joseph, along with 342 fellow NYC firefighters and thousands of other individuals, lost
          their lives in a senseless act of hate.
        </p>
      </>
    ),
  },
  {
    name: 'Chief Energy',
    logo: 'Chief-Energy_SPONSOR-1.png',
    href: LINKS.maffeoFoundation,
    body: (
      <p>
        Chief Energy is a 40 year old, family owned, energy company founded by Vincent Rizzuto in 1977. At Chief
        Energy, the customer comes first. Our main priority is to save our customers money while adding value.
        Following those main principals has allowed us to succeed for 40 years. We have a solid foundation in heating
        oil, diesel fuel, boiler repair and installations. In addition, we have ventured into new sectors such as,
        electricity and natural gas sales. Even though we are growing rapidly, we still remain true to our core values.
        The customer comes first!
      </p>
    ),
  },
  {
    name: 'Island Auto Group',
    logo: 'Jumpshotz-3x5-1-1-1024x614.png',
    href: LINKS.maffeoFoundation,
    body: (
      <p>
        When you’re ready to find the car you want at a competitive price and a friendly, approachable, straightforward
        sales team to help you out all along the way, Island Auto Group has you covered. Serving drivers in Brooklyn,
        Jersey City, Newark, Long Island City, Woodridge, and New York City, we’re a dealership group selling hundreds
        of{' '}
        <a href={LINKS.islandAutoInventory} {...ext}>
          new vehicles
        </a>{' '}
        ranging from Chrysler Group to Subaru, Toyota, Volkswagen, and beyond.
      </p>
    ),
  },
  {
    name: 'Eltingville Pharmacy',
    logo: 'eiltingvile-pharmacy.png',
    href: LINKS.maffeoFoundation,
    body: null,
  },
];

export default function Sponsors() {
  usePageTitle('Sponsors');

  return (
    <>
      <PageHero image={img('Basketballfloor_1066.jpg')} title="Our Sponsors" position="top center" />
      <section className="section">
        <div className="container container--narrow prose">
          <p className="lead">
            Our sponsors are generous and kind enough to support us in all that we do. It’s not only because we are
            passionate about Staten Island's youth and basketball, but because we support and promote teaching players
            valuable life lessons through youth sports. We also pride ourselves in creating a friendly and safe
            environment throughout the process. Our facility continues to grow in popularity, year after year, and we
            credit a great deal of our success to our sponsors.
          </p>
          <p>
            <strong>Interested in becoming a sponsor?</strong> Opportunities to showcase your organization to a local
            audience are almost endless at JumpShotz. From a major presence with hosting events at the facility, we’d
            love to talk to you about how we can best promote your business through sponsorships and be successful
            together.
          </p>
          <p>
            JumpShotz employs a collaborative approach to develop a strategic, integrated marketing campaign that
            achieves sponsor objectives. Our goal is to create a clean environment where brand integration and sponsor
            messaging has a great impact.
          </p>
          <p>We offer sponsors the opportunity to engage a diverse demographic both on and off Staten Island.</p>
          <p>
            If you are interested in expanding your brand’s reach, we’d love to talk to you about how we can best
            promote your business through sponsorship.
          </p>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container sponsor-grid">
          {SPONSORS.map((s) => (
            <article key={s.name} className={`sponsor ${s.body ? '' : 'sponsor--logo-only'}`}>
              <a href={s.href} {...ext} className="sponsor__logo" aria-label={s.name}>
                <img src={img(s.logo)} alt={s.name} loading="lazy" />
              </a>
              {s.body && <div className="sponsor__body">{s.body}</div>}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
