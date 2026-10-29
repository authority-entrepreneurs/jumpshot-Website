import { LINKS, img } from '../data/site';
import usePageTitle from '../components/usePageTitle';
import PageHero from '../components/PageHero';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

const AFFILIATES = [
  {
    name: "Shootin' School",
    logo: 'SHOOTINSCHOOLLOGO-COMPLETELY-REVISEDFOR-HIGH-RES-1024x819.png',
    body: (
      <>
        <p>
          Shootin’ School offers a plethora of services that provides boys &amp; girls of all skill levels, technical
          basketball instruction, intensive drill progression and game-like scenarios. Services included are packages
          for individual instruction (1 on 1) and group-personal (4 players / 1 instructor), group programs, team
          workouts, seasonal camps, clinics and birthday parties. To find out more, check out all of the options we
          have at{' '}
          <a href={LINKS.shootinSchool} {...ext}>
            shootinschool.com
          </a>
        </p>
        <p>
          Since 2009, Coach Anthony Passalacqua &amp; Shootin’ School have been taking players’ games to the next
          level. All of the coaches and instructors have basketball experience, whether it be at the high school,
          collegiate or professional level. They’ve been trained to use the Shootin’ School framework when instructing
          players on the court. While JumpShotz is the official Home Base, there are multiple locations that the
          program utilizes located on the North and South side of Staten Island.
        </p>
      </>
    ),
  },
  {
    name: 'Because We Can Sports',
    logo: 'bwc-logo-retina.png',
    body: (
      <>
        <p>
          Because We Can Sports provides beginner level instruction for all sports and all players within a
          judgment-free environment. There are several services that are provided year-round such as instruction,
          clinics, camps, field days, social night and birthday parties. The program accepts children of all ages and
          even goes the extra mile by offering to send staff members to your home for one-on-one sessions. To find out
          more, check out all of the options we have at{' '}
          <a href={LINKS.bwcSports} {...ext}>
            bwcsports.com
          </a>
          .
        </p>
        <p>
          Since its opening at Holy Family in 2016, Coach Sal Fabozzi &amp; BWC has grown from 5 children in its
          program to over hundreds in 2020. Each staff member is highly experienced in athletics and has the ability to
          coach the players in a constructive and positive way. Because We Can Sports received an overwhelming amount of
          positive feedback from the community and has added three more sports in addition to basketball -- soccer,
          football, and track and field.
        </p>
      </>
    ),
  },
  {
    name: 'Staten Island Alumni League',
    logo: 'StatenIslandAlumniLeagueLogo-0-1024x1024-1-1024x1024.png',
    body: (
      <>
        <p>
          The Staten Island Alumni League provides adults, both men and women, the opportunity to play in leagues
          suitable to their busy schedules. We allow teams to choose the days and times that work best for them. The
          schedule will be given out ahead of time so you can plan with your team accordingly. Go to{' '}
          <a href={LINKS.siAlumniLeague} {...ext}>
            sialumleague.com
          </a>{' '}
          to check out more and sign up.
        </p>
        <p>
          The Staten Island Alumni League has received only positive reviews from its participating players. The
          safety and well-being of our facilities, staff, spectators and players are our #1 concerns. We take pride in
          having high quality talent, organization and officiating. We are excited to welcome you and your team into
          our league.
        </p>
      </>
    ),
  },
  {
    name: 'Staten Island Stingrays',
    logo: 'staten_island_sting_rays2_copy-3.png',
    body: (
      <>
        <p>
          The Stingrays have separated themselves as the best AAU basketball program in Staten Island with boys &amp;
          girls teams from grades 3-12. This program is for players who work hard to be the best every time they step
          on the court. The Stingrays are dedicated to developing team players, focusing on teaching basketball and
          values that will last a lifetime. Go to{' '}
          <a href={LINKS.stingrays} {...ext}>
            stingraysaau.com
          </a>{' '}
          to find out more.
        </p>
        <p>
          Since 2000, the Stingrays have helped thousands of kids, including some familiar names such as Reilly Walsh,
          TJ Tibbs, Nick Corbett, Halil Kanacevic and your very own president, Anthony Passalacqua. We get pride from
          developing our players at a young age and seeing them progress over the following years into a well-rounded
          community leader.
        </p>
      </>
    ),
  },
];

export default function Affiliates() {
  usePageTitle('Affiliates');

  return (
    <>
      <PageHero image={img('MG_1447_Edited.jpg')} title="Affiliates" />
      <section className="section section--tint">
        <div className="container stack">
          {AFFILIATES.map((a) => (
            <article key={a.name} className="card feature">
              <div className="feature__logo">
                <img src={img(a.logo)} alt={a.name} loading="lazy" />
              </div>
              <div className="feature__body prose">
                <h2 className="feature__title">{a.name}</h2>
                {a.body}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
