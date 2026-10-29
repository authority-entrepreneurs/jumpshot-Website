import { img } from '../data/site';
import usePageTitle from '../components/usePageTitle';
import PageHero from '../components/PageHero';
import FindUs from '../components/FindUs';

export default function About() {
  usePageTitle('About Us');

  return (
    <>
      <PageHero image={img('MG_1448_Edited.jpg')} title="About Us" />
      <section className="section">
        <div className="container container--narrow prose">
          <p className="lead">
            JumpShotz is a 4,000 square foot facility that is designed to host indoor basketball instruction and games.
            Located at 120 Androvette St. in Charleston, Staten Island, Jumpshotz is easily accessible to all islanders
            and those commuting from New Jersey. Our court is minutes away from the West Shore Expressway, MTA bus depot,
            The Outerbridge and The New Jersey Turnpike.
          </p>
          <p>
            The mission of JumpShotz is to provide players of all ages the optimal basketball experience. Our staff is
            committed and will strive to meet the needs of all players, teams, coaches, organizations and parents that
            visit our facility. Jumpshotz will be dedicated to create and maintain a sense of community that will
            maximize players’ passion and potential.
          </p>
          <p>
            In addition, JumpShotz has hosted private events, and other sports activities upon request. Please leave us
            a message on the Contact Us page to inquire about renting our facility.
          </p>
        </div>
      </section>
      <FindUs dark />
    </>
  );
}
