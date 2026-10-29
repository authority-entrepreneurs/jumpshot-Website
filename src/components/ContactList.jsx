import { CONTACT } from '../data/site';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from './Icons';

export default function ContactList() {
  return (
    <ul className="contact-list">
      <li>
        <span className="contact-list__icon">
          <MapPinIcon />
        </span>
        <span>
          {CONTACT.street}
          <br />
          {CONTACT.cityLine}
        </span>
      </li>
      <li>
        <span className="contact-list__icon">
          <PhoneIcon />
        </span>
        <span>
          Text Us: <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
        </span>
      </li>
      <li>
        <span className="contact-list__icon">
          <EnvelopeIcon />
        </span>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </li>
    </ul>
  );
}
