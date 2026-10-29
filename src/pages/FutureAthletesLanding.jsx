import { LINKS, img } from '../data/site';
import usePageTitle from '../components/usePageTitle';
import Button from '../components/Button';

function SignUpButtons() {
  return (
    <div className="btn-row btn-row--center">
      <Button to={LINKS.futureAthletesMonthly} size="lg">
        Monthly Sign Up
      </Button>
      <Button to={LINKS.futureAthletesSingle} size="lg">
        Single Sign Up
      </Button>
    </div>
  );
}

// One half text panel, one half photo. `tone` sets the panel colour; `flip` puts the photo first.
function Split({ tone, image, flip = false, title, children }) {
  return (
    <section className={`split ${flip ? 'split--flip' : ''}`}>
      <div className={`split__panel split__panel--${tone}`}>
        <div className="split__content">
          <h2 className="split__title">{title}</h2>
          {children}
        </div>
      </div>
      <div className="split__image" style={{ backgroundImage: `url(${img(image)})` }} />
    </section>
  );
}

// /landing-page-2/ — Future Athletes sign-up landing page.
export default function FutureAthletesLanding() {
  usePageTitle('LANDING PAGE');

  return (
    <div className="fa2">
      <section className="split split--flip split--hero">
        <div className="split__panel split__panel--white">
          <div className="split__content">
            <h2 className="split__title split__title--hero">Building a foundation for your Future Athlete!</h2>
            <p className="fa2__tagline">
              “THE PERFECT PLACE FOR YOUR FIRST GLIMPSE OF SPORTS.
              <br />
              <br />
              THE MOST FUN INTRODUCTION TO SPORTS!”
            </p>
            <SignUpButtons />
          </div>
        </div>
        <div className="split__image" style={{ backgroundImage: `url(${img('image2.png')})` }} />
      </section>

      <Split tone="black" image="271985888_432694898459104_1677784524148894036_n.jpg" title="What is the Future Athletes Program?">
        <p>
          The Future Athletes program is the gateway to sports for your little ones. It’s their first experience
          learning the basics and attempting the fundamental skills for the future. It’s important stuff! Every kid’s
          first taste of sports should be fun! That’s why we’ve created this special curriculum to allow kids to learn
          while also having a blast of a time! We offer 4 Activities, 2 per class, each one allows the child to start
          acquiring the basics of a new skill set.
        </p>
      </Split>

      <Split tone="light" image="unnamed-3.png" flip title="What are the activities?">
        <p>
          The activities are Soccer, Track &amp; Field, Basketball, and Obstacle Courses. All of our coaches are trained
          to get the most out of your child while keeping a smile on their face!
        </p>
      </Split>

      <Split tone="grey" image="image.png" title="What's the schedule?">
        <p>Tuesday’s &amp; Thursday’s… except for holidays or School Breaks…</p>
        <p>
          <strong>10:00-10:45am</strong> Ages: 18m-30months (Parent Assistance Required)
        </p>
        <p>
          <strong>10:45-11:30am</strong> Ages: 24-36months (Parent Assistance Highly Recommended)
        </p>
        <p className="split__small">
          (YES, we know! There is an overlap in our age brackets. We do that on purpose. For children that are between
          24m-30months, we leave the option for the parent to move a child up or down. We don’t want to discourage any
          players and we don’t want players to get bored. This overlap in the age bracket helps us get kids into the
          right sections. For your first session, pick what you feel is best for your son/daughter and don’t think
          twice! Just go with your gut!)
        </p>
      </Split>

      <Split tone="silver" image="MG_1444_Edited.jpg" flip title="Where are you located?">
        <p>
          <strong>Staten Island Location:</strong>
          <br />
          120 Androvette Street
        </p>
        <div className="split__map">
          <iframe title="Jump Shotz location" src={LINKS.mapEmbedFutureAthletes} loading="lazy" />
        </div>
      </Split>

      <Split tone="black" image="unnamed-1.png" title="How about pricing?">
        <p>Price: $149 Unlimited OR $40 per class</p>
        <p>
          Our Unlimited Plan allows you to bring your little one to two (2) classes per week! That means if you can get
          to half of our classes in the month, our Unlimited Plan is beneficial to you.
        </p>
      </Split>

      <Split tone="silver" image="MG_1444_Edited.jpg" flip title="What do the sessions look like?">
        <p>
          <strong>Tuesdays:</strong>
          <br />
          Track &amp; Field and Soccer
        </p>
        <p>
          <strong>Thursday:</strong>
          <br />
          Basketball and Obstacle Course
        </p>
      </Split>

      <Split tone="black" image="IMG_7629-1.jpg" title="Where do I sign up?">
        <SignUpButtons />
      </Split>
    </div>
  );
}
