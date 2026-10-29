import { LINKS } from '../data/site';
import ContactList from './ContactList';

// "How to find us" block: map + address + directions.
export default function FindUs({ dark = false }) {
  return (
    <section className={`section find-us ${dark ? 'section--dark' : 'section--tint'}`}>
      <div className="container find-us__grid">
        <div className="find-us__map">
          <iframe
            title="120 Androvette Street, Staten Island, NY"
            src={LINKS.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="card find-us__card">
          <h2 className="section-title">How to find us</h2>
          <ContactList />
          <div className="find-us__directions">
            <h3>Directions coming from the Outerbridge:</h3>
            <p>
              Stay towards the right when coming off the bridge. Exit towards Boscombe Ave and turn left. Make the next
              left onto Tyrellan Ave. Turn left on Veterans Rd W. Take it to Arthur Kill Rd and turn right. Stay
              straight and then turn left on Androvette St. The facility is down the road, past the intersection on the
              left.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
