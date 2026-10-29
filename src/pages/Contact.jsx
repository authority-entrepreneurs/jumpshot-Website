import { LINKS, img } from '../data/site';
import usePageTitle from '../components/usePageTitle';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import FindUs from '../components/FindUs';

export default function Contact() {
  usePageTitle('Contact');

  return (
    <>
      <PageHero image={img('MG_1454_Edited.jpg')} title="Contact Us" position="top center" />
      <section className="section">
        <div className="container container--narrow center">
          <p className="lead">
            If you have any further questions or concerns about our facility, please fill out the form listed below. If
            you have a special event you’d like us to host or wish to rent our facility, feel free to provide details in
            our contact us form. In addition, by leaving us your email address, you’ll be informed about our
            weekly/monthly gym time availability.
          </p>
          <div className="btn-row btn-row--center">
            <Button to={LINKS.bookCourt} newTab size="lg">
              Book Court Online
            </Button>
          </div>
        </div>
      </section>
      <FindUs dark />
    </>
  );
}
