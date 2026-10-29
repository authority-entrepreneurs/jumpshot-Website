import { useState } from 'react';
import { img } from '../data/site';
import usePageTitle from '../components/usePageTitle';
import PageHero from '../components/PageHero';
import { PlusIcon } from '../components/Icons';

const FAQS = [
  { q: 'How many hoops and courts are at Jumpshotz?', a: 'There are 4 hoops on 1 court' },
  { q: 'Is there heat and air-conditioning?', a: 'Yes. JumpShotz is fully heated and air-conditioned' },
  {
    q: 'Where can I park? Is there a parking lot?',
    a: 'Yes, there is a parking lot if you turn in from Androvette Street. You are also welcome to park on the street',
  },
  {
    q: 'Is there a concession stand with food and drinks available to purchase?',
    a: 'As of now, we do not have any food or drink available to purchase',
  },
  {
    q: 'Is there seating inside the facility for guests?',
    a: 'While we do have space for spectators, the space is not in abundance. Spectators can watch from benches, which are up against the wall, a small distance from the sideline. The good news is, there isn’t a bad seat in the house!',
  },
];

export default function Faq() {
  usePageTitle('FAQ');
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero image={img('MG_1444_Edited.jpg')} title="FAQ" />
      <section className="section section--tint">
        <div className="container container--narrow faq">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon">
                    <PlusIcon />
                  </span>
                </button>
                <div id={`faq-${i}`} className="faq__a" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
